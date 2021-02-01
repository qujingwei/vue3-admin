<template>
  <HelloWorld/>
</template>
<script>
  import HelloWorld from './components/HelloWorld.vue'
  export default {
    name: 'App',
    components: {
      HelloWorld,
    }
  }
</script>
<style>
  * {
     box-sizing: border-box;
  }
  #app{
    width: 100%;
    height: 100%;
  }
  html,body{
    width: 100%;
    height: 100%;
    overflow: auto;
    margin: 0;
    padding: 0;
  }
</style>
