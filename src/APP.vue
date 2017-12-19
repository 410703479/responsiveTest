<template>
  <div id="app">
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view  v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view  v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  @import './scss/reset.scss';
  /*// @import './scss/a.scss';*/
</style>
