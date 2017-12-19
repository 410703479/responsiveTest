import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routers'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// require("TEST")
console.log(URL)

const router = new VueRouter({
    // mode: 'history',
    routes
});
Vue.use(VueRouter);

// let ver = require('../ver');
// console.log("version-->", ver)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
