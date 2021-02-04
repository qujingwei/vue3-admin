<template>
    <div class="tag-nav-wrapper">
        <div class="tags-nav">
            <div class="nav-left-btn">
                <el-button style="padding:10px 7px;" size="medium" icon="el-icon-arrow-left"></el-button>
            </div>
            <div class="nav-scroll-outer">
                <div class="scroll-body">
                    <el-tag v-for="item in list"
                    :key="item.name"
                    @click="tagClick(item)"
                    @close="tagClose(item)"
                    :type="isCurrentTag(item) ? '' : 'info'" 
                    :closable="list.length > 1">{{getTitle(item)}}</el-tag>
                </div>
            </div>
            <div class="nav-right-btn">
                <el-button style="padding:10px 7px;" size="medium" icon="el-icon-arrow-right"></el-button>
            </div>
            <div class="nav-close-btn"></div>
        </div>
    </div>
</template>
<script>
import { routerEqual } from '@/libs/utils'
export default {
    name: 'tagNav',
    props:{
        value:{
            type: Object,
            default: function(){
                return {}
            }
        },
        list:{
            type: Array,
            default: function(){
                return []
            }
        }
    },
    emits:['on-select','on-close'],
    setup(props, { emit }){
        const tagClick = function(item){
            emit('on-select', item)
        }
        const tagClose = function(item){
            emit('on-close', item)
        }
        const getTitle = function(item){
            return item.meta && item.meta.title || item.name
        }
        const isCurrentTag = function(item){
            return routerEqual(item, props.value)
        }
        return {
            tagClick,
            tagClose,
            getTitle,
            isCurrentTag
        }
    }
}
</script>
<style lang="less" scope>
    .tag-nav-wrapper{
        height: 45px;
        background:#F0F0F0;
        .tags-nav{
            height: 100%;
            width: 100%;
            display: flex;
            align-items:center;
            background: rgb(255, 255, 255);
            box-shadow: 0px 0 3px 2px rgb(100 100 100 / 10%) inset;
        }
        .nav-left-btn{
            flex: 0 0 auto;
        }
        .nav-scroll-outer{
            flex: 1 1 auto;
            position: relative;
            overflow: hidden;
            height: 32px;
            .scroll-body{
                white-space: nowrap;
                position: absolute;
                left: 0;
            }
        }
        .nav-right-btn{
            flex: 0 0 auto;
            border-right: 1px solid #F0F0F0;
        }
        .nav-close-btn{
            flex: 0 0 auto;
        }
        .el-tag{
            margin: 0 3px;
            cursor: pointer;
            user-select: none;
        }
    }
</style>