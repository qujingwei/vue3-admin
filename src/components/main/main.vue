
<template>
  <el-container>
    <side-menu @on-select='turnToPage' :menu-list="menuList"></side-menu>
    <el-container>
      <el-header></el-header>
      <tag-nav :list='tagNavList' :value="currentRoute" @on-select="tagSelect" @on-close="tagClose"></tag-nav>
      <el-main>
        <div class="main-warp">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import SideMenu from './components/side/side-menu.vue'
import TagNav from './components/tag-nav'
import { useRouter, onBeforeRouteLeave } from 'vue-router'
import { onMounted, getCurrentInstance, computed } from 'vue'
import { routerEqual, getNextRoute } from '@/libs/utils'
export default {
  name: 'Main',
  components:{
    SideMenu,
    TagNav
  },
  setup(){
    const { ctx } = getCurrentInstance()
    const store = ctx.$store
    const tagNavList = computed(() => store.state.app.tagNavList)
    const router = useRouter()
    const currentRoute = router.currentRoute
    const addTag = function(route){
      const { name, params, query, meta, path } = route
      store.commit('addTag',{ name, params, query, meta, path })
    }
    
    onMounted(() => {
      addTag(currentRoute.value)
    })
    // 路由变化
    onBeforeRouteLeave((to) => {
      addTag(to)
    })

    // tag标签逻辑
    const tagSelect = function(route){
      turnToPage(route)
    }
    const tagClose = function(route, type){
      if(type === 'all'){
        console.log('all');
      }else if(type === 'other'){
        console.log('other');
      }else{
        if(routerEqual(route, currentRoute.value)){
          let nextRoute = getNextRoute(tagNavList.value, route)
          if(nextRoute){
            turnToPage(nextRoute)
          }
        }
        const list = tagNavList.value.filter(item => !routerEqual(route, item))
        store.commit('setTagNavList', list)
      }
    }

    // 页面跳转
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
    
    return {
      menuList:store.getters.menuList,
      currentRoute,
      turnToPage,
      tagSelect,
      tagClose,
      tagNavList
    }
  }
}
</script>

<style lang="less" scoped>
  .el-header {
    background-color: rgb(255, 255, 255);
  }
  .el-main {
    padding: 9px;
    background-color: #E9EEF3;
  }
  .el-container{
    height: 100%;
  }
  .main-warp{
    width: 100%;
    height: 100%;
    padding: 9px;
    overflow: auto;
    background: rgb(255, 255, 255);
  }
</style>
