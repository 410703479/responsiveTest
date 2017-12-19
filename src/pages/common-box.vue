<template>
    <dl class="boxFts col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <dt>{{title}}</dt>
        <dd>{{link}}</dd>
    </dl>

</template>
<script>
    export default{
        props:{
            title:{
                type:String
            },
            link:{
                type:String
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../scss/base.scss";
    .boxFts{
        overflow: hidden;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        padding-left:5rem;

        dt{
            display: inline-block;
            width: 46px;
            height:53px;
            line-height: 53px;
            text-align: center;
            vertical-align: middle;
            float: left;
        @include bg('6side-l.png')
        }
        dd{
            float: left;
            display: inline-block;
            line-height: 53px;
            vertical-align: middle;
            margin-left:10px;
        }
    }

</style>