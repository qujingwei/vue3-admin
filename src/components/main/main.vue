
<template>
  <el-container>
    <side-menu @on-select='turnToPage' :menu-list="menuList"></side-menu>
    <el-container>
      <el-header></el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import SideMenu from './components/side/side-menu.vue'
import { useRouter, onBeforeRouteLeave } from 'vue-router'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Main',
  components:{
    SideMenu
  },
  setup(){
    let router = useRouter()

    const turnToPage = function(route){
      let {name, params, query} = {}
      if(typeof route === 'string'){
        name = route
      }else{
        name = route.name
        params = route.params
        query = route.query
      }
      router.push({
        name,
        params,
        query
      })
    }
    let menuList = computed(() => {
      return useStore().getters.menuList
    })

    onBeforeRouteLeave(() => {
      
      // console.log(to)
    })
    return {
      menuList,
      turnToPage
    }
  }
}
</script>

<style lang="less" scoped>
  .el-header {
    background-color: #B3C0D1;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    height: calc(100% - 60px);
    overflow: hidden;
  }
  .el-container{
    height: 100%;
  }
</style>
