<template>
    这是第二个
    <el-input v-model="input" placeholder="请输入内容"></el-input>
</template>
<script>
import { ref } from 'vue'
export default {
    name:'c2',
    setup(){
        let input = ref('')
        return{
            input
        }
    }
}
</script>