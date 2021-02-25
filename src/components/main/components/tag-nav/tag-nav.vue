<template>
    <div class="tag-nav-wrapper">
        <div class="tags-nav">
            <div class="nav-left-btn">
                <el-button @click="handleTagScroll(200)" style="padding:10px 7px;" size="medium" icon="el-icon-arrow-left"></el-button>
            </div>
            <div ref="scroll-outer"  @DOMMouseScroll="handleMousescroll" @mousewheel="handleMousescroll" class="nav-scroll-outer">
                <div ref="scroll-body" class="scroll-body" :style="{ left: tagData.bodyLeft + 'px' }">
                    <el-tag v-for="item in list"
                    :key="item.name"
                    @click="tagClick(item)"
                    @close="tagClose(item)"
                    :type="isCurrentTag(item) ? '' : 'info'" 
                    :closable="list.length > 1">{{getTitle(item)}}</el-tag>
                </div>
            </div>
            <div class="nav-right-btn">
                <el-button @click="handleTagScroll(-200)" style="padding:10px 7px;" size="medium" icon="el-icon-arrow-right"></el-button>
            </div>
            <div class="nav-close-btn">
                <el-dropdown @command="handleTagsOption">
                    <el-button style="padding:10px;" size="medium" icon="el-icon-close"></el-button>
                    <template #dropdown>
                        <el-dropdown-menu>
                        <el-dropdown-item command='all'>关闭所有</el-dropdown-item>
                        <el-dropdown-item command='other'>关闭其他</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
import { routerEqual } from '@/libs/utils'
import { reactive, getCurrentInstance } from 'vue'
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
    setup(props){
        const { ctx, emit } = getCurrentInstance()
        const tagData = reactive({
            bodyLeft: 0,
            mousescrollDown:true
        })
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
        const handleTagsOption = function(command){
            emit('on-close', undefined, command)
        }
        const handleMousescroll = function(event){
            if(tagData.mousescrollDown){
                tagData.mousescrollDown = false
                const type = event.type
                    let delta = 0
                    if (type === 'DOMMouseScroll' || type === 'mousewheel') {
                        delta = (event.wheelDelta) ? event.wheelDelta : -(event.detail || 0) * 40
                    }
                    handleTagScroll(delta)
                setTimeout(() => {
                    tagData.mousescrollDown = true
                },100)
            }
        }
        // tag-bar移动
        const handleTagScroll = function(offset){
            const scrollOuterWidth = ctx.$refs['scroll-outer'].offsetWidth
            const scrollBodyWidth = ctx.$refs['scroll-body'].offsetWidth
            if(offset > 0){
                tagData.bodyLeft = tagData.bodyLeft + offset > 0 ? 0 : tagData.bodyLeft + offset
            }else{
                if(scrollOuterWidth > scrollBodyWidth){
                    tagData.bodyLeft = 0
                }else{
                    const rightHiddenWidth = scrollBodyWidth + tagData.bodyLeft - scrollOuterWidth
                    if(rightHiddenWidth > -offset){
                        tagData.bodyLeft += offset
                    }else{
                        tagData.bodyLeft -= rightHiddenWidth
                    }
                }
            }
        }
        return {
            tagClick,
            tagClose,
            getTitle,
            isCurrentTag,
            handleTagsOption,
            handleTagScroll,
            handleMousescroll,
            tagData
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
                transition: left .3s ease;
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