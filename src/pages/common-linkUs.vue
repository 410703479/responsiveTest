<template>
    <ul :class="['linkUs','col-md-2','col-sm-2',num==4?'col-xs-12':'col-xs-12',num==0?'col-md-offset-1 col-sm-offset-1':'']">
        <li v-for="(text,index) in title" :class="[index==0?'active':'']">{{text}}</li>
    </ul>
</template>
<script>
    //(num==2 || num==4)?'col-xs-offset-2 col-sm-offset-0 col-md-offset-0':'',

    export default{
        props:{
            'title':Array,
            'num':Number
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "../scss/base.scss";
    .linkUs{
        min-height: 90px;
        margin-top:20px;
        li{
            &.active{
                font-size: 2rem;
                color: $orange;
            }
        }
    }
    @media screen and(max-width: 768px) {
        .linkUs{
            min-height: 1px;
            margin:0;
            margin-left:3rem;
            li{
                float: left;
                line-height: 2rem;
                margin-right:1rem;
                min-width: 6rem;
                &.active{
                    font-size: 1.5rem;
                    color: $orange;
                }
            }
        }
    }
</style>