<template>
    <article>
        <common-head></common-head>
        <div class="main-container" id="main-container">
            <router-view></router-view>
            <commonFoot></commonFoot>
        </div>

    </article>

</template>
<script>
    import commonHead from './common-head.vue'
    import commonFoot from './common-foot.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
            commonHead,
            commonFoot
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>