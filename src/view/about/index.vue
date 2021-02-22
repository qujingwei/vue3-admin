<template>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <keep-alive>
        <template v-if="input === '1'">
            <c-1></c-1>
        </template>
        <template v-else>
                <c-2></c-2>
        </template>
    </keep-alive>
</template>
<script>
// import { getTable } from '@/api'
import c1 from './c1'
import c2 from './c2'
import { ref } from 'vue'
export default {
    name:'aboutIndex',
    components:{
        c1,
        c2
    },
    setup(){
        let input = ref('')
        
        return {
            input
        }
    }
}
</script>