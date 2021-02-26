<template>
  <el-aside class="el-aside" width="auto">
    <el-menu
      class="el-menu"
      :collapse="collapsed"
      :default-active="currentRoute.name"
      @select="handleSelect">
      <template v-for="item in menuList">
        <template v-if="showChildren(item)">
          <template v-if="item.meta && item.meta.showFirstOnly">
            <el-menu-item :index="getName(item)" :key="getName(item)">
              <i v-if="getIcon(item)" :class="getIcon(item)"></i>
              <template #title>{{getTitle(item)}}</template>
            </el-menu-item>
          </template>
          <template v-else> 
            <side-menu-item :key="item.name" :parent-item="item"></side-menu-item>
          </template>
        </template>
        <template v-else>
          <el-menu-item :index="getName(item)" :key="getName(item)">
            <i v-if="getIcon(item)" :class="getIcon(item)"></i>
            <template #title>{{getTitle(item)}}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </el-aside>
</template>
<script>
import SideMenuItem from './side-menu-item'
import { useRouter } from 'vue-router'
import { showChildren, getName, getTitle, getIcon } from './mixin'
export default {
  name:'sideMenu',
  props:{
    menuList:{
      type: Array,
      default: function (){
        return []
      }
    },
    collapsed:{
      type: Boolean,
      default: false
    }
  },
  components:{
    SideMenuItem
  },
  emits:['on-select'],
  setup(props,context) {
    const handleSelect = function(name){
      context.emit('on-select',name)
    }
    return {
      showChildren,
      getName,
      getTitle,
      handleSelect,
      getIcon,
      currentRoute:useRouter().currentRoute
    }
  }
}
</script>
<style lang="less" scope>
  .el-menu:not(.el-menu--collapse){
    width: 200px;
  }
  .el-menu{
    border: none;
  }
</style>