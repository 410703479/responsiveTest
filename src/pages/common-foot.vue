<template>
    <footer>
        <div class="info">
            <commonBox v-for="item in boxFts" :title="item.title" :link="item.link" :key="item.link"></commonBox>
        </div>
        <div class="info1">
            <commonLUs v-for="(item,index) in footMsg" :title="item" :num="index" :key="index"></commonLUs>
        </div>

    </footer>
</template>
<script>
    import commonBox from './common-box.vue';
    import commonLUs from './common-linkUs.vue';
    var boxFts=()=>([
        {"title":'专',"link":'7*24小时售后支持'},
        {'title':'尊','link':'VIP一对一服务'},
        {'title':'备','link':'免费备案服务 '},
        {'title':'赔','link':'100倍故障延时赔偿'}
    ])
    export default{
        data(){
            return{
                "boxFts":boxFts(),
                "footMsg":[['常见问题','代金券','发票','备案'],['热门活动','筑梦合伙人','跃云计划','免费试用'],['便捷入口','控制台','价格计算器'],['其他','可信中心','渠道合作'],['联系我们','咨询热线 4006151212 (7*24)','渠道加盟 4006151212转6','京东云微信','京东云微博']]
            }
        },
        components:{
            commonBox,
            commonLUs
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    footer{
        overflow: hidden;
        background-color: #e7e7e7;
        color: #000;
    }
    .info{
        overflow: hidden;
        margin-top: 40px;
    }
    .info1{
        margin-top: 20px;
    }
</style>