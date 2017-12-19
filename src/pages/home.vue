<template>
  <div class="amui-home">
    <commonSlide :key="" :link="imgArr"></commonSlide>
    <div class="operatingTop">
      <ul>
        <li  v-for="item in operTopObj" class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <dl>
            <dt class="operTop"></dt>
            <dd>
              <img :src="'../../static/img/'+item.img" width="74px">
              <h3>{{item.h3}}</h3>
              <h4>{{item.h4}}</h4>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
    <div style="height: 800px">

    </div>

  </div>

</template>

<script>
// require("TEST")
import commonSlide from './common-slide.vue';
var operTopObj = ()=>([{
    img:'diandeng.png',
    h3:'京东云计算',
    h4:'特价云主机低至28'
},{
    img:'shiyong.png',
    h3:'免费试用',
    h4:'云主机免费半年'
},{
    img:'fuchi.png',
    h3:'年终大放价',
    h4:'年终底价狂欢'
},{
    img:'buy.png',
    h3:'商城购买',
    h4:'支持白条分期购买'
}]);
var vueThis;
export default {
  name: 'home',
  data () {
     vueThis=this;
    return {
        msg: '一次尝试',
        name : 'xx',
        imgArr:['lb1.jpg','lb2.jpg','lb3.jpg'],
        operTopObj:operTopObj()
    }
  },
    methods:{

    },
  mounted(){
    // alert("xxs")
  },
    components:{
      commonSlide
    }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  /*@import '../scss/home.scss';*/
  @import '../scss/base.scss';
  .operatingTop{
    width:100%;
    height: 195px;
    background-color: $lightBlue;
    ul{
        overflow: hidden;
        padding:0 10%;
      li{
        text-align: center;
        padding-top:30px;
        padding-left:0;
        padding-right:0;
        border-bottom:2px solid $lightBlue;
        dl{
          border-right:1px solid #e7ebf4;
          /*position: relative;*/
          img{
            margin-top:-95px;
            margin-bottom:0;
          }
        }
        h3{
          font-size: 20px;
          color: #34509a;
          margin-top: 0;
        }
        h4{
          font-size: 16px;
          color: #34509a;
        }
        &:last-child{
          dl{
            border-right:none;
          }
        }
        &:hover{
          background-color: #fff;
          border-bottom-color: #20ccc4;
          box-shadow: 1px 1px 10px 1px #ddd;
          dl{
            border-right:none;
          }
          .operTop{
            transform:rotate(60deg);


          }

        }
      }
    }
  }
  .operTop{
    @include bg('operTop.png');
    width: 74px;
    height: 74px;
    margin:auto auto;
    transition: .2s;
  }

</style>
