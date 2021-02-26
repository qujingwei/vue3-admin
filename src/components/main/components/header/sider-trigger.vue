<template>
    <div class="sider-trigger">
        <i :class="[collapsed ? 'el-icon-s-unfold' : 'el-icon-s-fold']" @click="change"></i>
    </div>
</template>
<script>
export default {
    name:'siderTrigger',
    props:{
        collapsed:{
            type: Boolean,
            default: false
        }
    },
    methods:{
        change(){
            this.$emit('on-change',!this.collapsed)
        }
    }
}
</script>
<style scoped lang="less">
    .sider-trigger{
        flex: 0 1 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        i{
            font-size: 28px;
            cursor: pointer;
            color: #5c6b77;
        }
    }
</style>