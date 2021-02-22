<template>
    这是第一个
    <el-input v-model="input" placeholder="请输入内容"></el-input>
</template>
<script>
import { ref } from 'vue'
export default {
    name:'c1',
    setup(){
        let input = ref('')
        return{
            input
        }
    }
}
</script>