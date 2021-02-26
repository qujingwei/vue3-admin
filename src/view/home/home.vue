<template>
    <span>首页</span>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
</template>
<script>
// import { getTable } from '@/api'
import { ref } from 'vue'
export default {
    name:'home',
    setup(){
        let input = ref('')
        return {
            input
        }
    }
}
</script>