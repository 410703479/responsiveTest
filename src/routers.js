// const index = r => require.ensure([], () => r(require('./pages/index.vue')));
const home = r => require.ensure([], () => r(require('./pages/home.vue')))
const test1 = r => require.ensure([], () => r(require('./pages/test1.vue')))
const index = resolve => require(['./pages/index.vue'],resolve);


const routers = [
    {
        path: '/',
        redirect: '/index/home'
    },
    {
        path: '/index',
        redirect: '/index/home'
    },
    {
        path:'/index',
        component:index,
        meta:{
            keepAlive:false
        },
        children:[
            {path:'', component:home,name:'home'},
            {path:'home', component:home,name:'home'},
            {path:'test1', component:test1,name:'test1'}
        ]
    }
];
export default routers;