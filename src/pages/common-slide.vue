<template>
    <div id="circleContent" class="carousel slide" :style="{width:screenWidth,height:screenHeight}">
        <ol class="carousel-indicators">
            <li v-for="(key,index) in link" data-target="circleContent" :data-slide-to="index" :class="index==0?'active':''"></li>
        </ol>
        <div class="carousel-inner">
            <div v-for="(key,index) in link" :class="['item',index==0?'active':'']">
                <img :src="'../../static/img/'+key" :style="{width:screenWidth,height:screenHeight}">
                <div class="carousel-caption"></div>
            </div>
        </div>
    </div>
</template>
<script>
    var vueThis;
    window.onresize=()=>{
        vueThis.screenWidth=document.body.clientWidth*0.8+'px';
        vueThis.screenHeight=document.body.clientWidth*0.2+'px';
    }
    export default{
        data(){
            vueThis=this;
            return{
                screenWidth:document.body.clientWidth*0.8+'px',
                screenHeight:document.body.clientWidth*0.2+'px'
            }
        },
        mounted(){
            $('#circleContent').carousel({interval:5000});
        },
        props:{
            link:Array
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "../scss/base.scss";
    #circleContent{
        margin:0 auto;
        overflow: hidden;
        .carousel-indicators{
            bottom:0;
            li{
                border-color: #000;
            }
            .active{
                background-color: $orange;
                border-color: transparent;
            }
        }
    }
</style>