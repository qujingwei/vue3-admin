<template>
  <el-aside width="200px">
    <el-menu
      @select="handleSelect">
      <template v-for="item in menuList">
        <template v-if="item.children && item.children.length === 1">
          <template v-if="showChildren(item)">
            <side-menu-item :key="item.name" :parent-item="item"></side-menu-item>
          </template>
          <template v-else>
            <el-menu-item-group :key="getName(item,true)" >
              <el-menu-item :index="getName(item,true)">
                <i v-if="getIcon(item)" :class="getIcon(item)"></i>
                <template #title>{{getTitle(item.children[0])}}</template>
              </el-menu-item>
            </el-menu-item-group>
          </template>
        </template>
        <template v-else>
          <template v-if="showChildren(item)">
            <side-menu-item :key="item.name" :parent-item="item"></side-menu-item>
          </template>
          <template v-else>
            <el-menu-item :key="getName(item)" :index="getName(item)">
                <i v-if="getIcon(item)" :class="getIcon(item)"></i>
                <template #title>{{getTitle(item)}}</template>
            </el-menu-item>
          </template>
        </template>
      </template>
    </el-menu>
  </el-aside>
</template>
<script>
import SideMenuItem from './side-menu-item'
import { showChildren, getName, getTitle, getIcon } from './mixin'
export default {
  name:'sideMenu',
  props:{
    menuList:{
      type: Array,
      default: function (){
        return []
      }
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
      getIcon
    }
  }
}
</script>