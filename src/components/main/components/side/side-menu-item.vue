<template>
    <el-submenu :key="parentItem.name" :index="parentItem.name">
        <template #title>
        <i v-if="parentItem.meta && parentItem.meta.icon" :class="parentItem.meta.icon"></i>
        <span>{{getTitle(parentItem)}}</span>
        </template>
        <template v-for="item in parentItem.children" :key="item.name" >
            <el-menu-item-group>
                <template v-if="item.children && item.children.length === 1">
                    <template v-if="showChildren(item)">
                        <i v-if="getIcon(item)" :class="getIcon(item)"></i>
                        <side-menu-item :parent-item="item"></side-menu-item>
                    </template>
                    <template v-else>
                        <el-menu-item :key="getName(item)" :index="getName(item)">
                            <i v-if="getIcon(item)" :class="getIcon(item)"></i>
                            <template #title>{{getTitle(item)}}</template>
                        </el-menu-item>
                    </template>
                </template>
                <template v-else>
                    <template v-if="showChildren(item)">
                        <i v-if="getIcon(item)" :class="getIcon(item)"></i>
                        <side-menu-item :parent-item="item"></side-menu-item>
                    </template>
                    <template v-else>
                        <el-menu-item :key="getName(item)" :index="getName(item)">
                            <i v-if="getIcon(item)" :class="getIcon(item)"></i>
                            <template #title>{{getTitle(item)}}</template>
                        </el-menu-item>
                    </template>
                </template>
            </el-menu-item-group>
        </template>
    </el-submenu>   
</template>
<script>
import { showChildren, getName, getTitle, getIcon } from './mixin'
export default {
  name:'sideMenuItem',
  props:{
    parentItem:{
      type: Object,
      default: function (){
        return {}
      }
    }
  },
  setup() {
    
    return {
      showChildren,
      getName,
      getTitle,
      getIcon
    }
  }
}
</script>