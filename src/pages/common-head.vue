<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#headerNav" aria-expanded="false">
                    <span class="sr-only">切换导航</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link tag="a" to="/index/home" class="navbar-brand">
                    <img src="../images/bearLogo-s.png" >
                </router-link>
            </div>
            <div class="collapse navbar-collapse" id="headerNav">
                <ul class="nav navbar-nav navbar-right">
                    <li class="active"><router-link tag="a" to="/index/home" >首页</router-link></li>
                    <li class="dropdown">
                        <!--<router-link tag="a" to="/index/test1" >Link</router-link>-->
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Link <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><router-link tag="a" to="/index/test1" >test1</router-link></li>
                            <li><a href="#">My Story</a></li>
                            <li role="separator" class="driver"></li>
                            <li><a href="#">Separated link</a></li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Another Link <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">One</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>
<script>

</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../scss/base.scss";
    .navbar-brand{
        >img {
            margin-top:-10px;
        }
    }
    #headerNav{
        .navbar-nav{
            /*float: right;*/
            >.active{
                >a{
                    color: $orange;
                }
            }
            >li{
                >a{
                    text-align: center;
                }
            }
        }
    }

</style>