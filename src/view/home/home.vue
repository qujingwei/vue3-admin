<template>
    <span>首页</span>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button @click="closeTag">关闭</el-button>
</template>
<script>
// import { getTable } from '@/api'
import { ref, getCurrentInstance } from 'vue'
export default {
    name:'home',
    setup(){
        const { ctx } = getCurrentInstance()
        let input = ref('')
        
        const closeTag = function(){
            ctx.$store.commit('closeTag', ctx.$router.currentRoute.value)
        }
        return {
            input,
            closeTag
        }
    }
}
</script>