<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
require('./assets/zepto.js')
export default {
  name: 'app'
}
</script>

<style lang="less">
@import url(./assets/global.less);
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

</style>
