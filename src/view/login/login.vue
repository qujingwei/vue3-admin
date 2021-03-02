<template>
    <div class="login-wp">
        <div class="login-form">
            <div class="login-form-head">
                <span>欢迎登录</span>
            </div>
            <el-form ref="login-form" :label-position="labelPosition" :model="form" :rules="rules" class="login-form-body">
                <el-form-item prop="userName">
                    <el-input v-model="form.userName" placeholder="123">
                        <template #prepend><i class="el-icon-user-solid"></i></template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="passWord">
                    <el-input v-model="form.passWord" show-password  placeholder="123">
                        <template #prepend><i class="el-icon-view"></i></template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button style="width:100%;" type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import { reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
export default {
    name:'login',
    setup() {
        const { ctx } = getCurrentInstance()
        const router = useRouter()
        let form = reactive({
            userName:'',
            passWord:''
        })
        const rules = reactive({
            userName: [
                { required: true, message: '请输入账号', trigger: 'change' }
            ],
            passWord: [
                { required: true, message: '请输入密码', trigger: 'change' }
            ]
        })
        const onSubmit = function(){
            ctx.$refs['login-form'].validate((valid) => {
                console.log(valid);
                if(valid){
                    router.push({
                        name:'home'
                    })
                }
            })
            
        }
        return {
            form,
            onSubmit,
            rules
        }
    }
}
</script>
<style scoped lang='less'>
    .login-wp{
        width: 100%;
        height: 100%;
        background-color: rgb(77, 162, 255);
        
        .login-form{
            background-color: #fff;
            width: 300px;
            position: fixed;
            top: 250px;
            right: 15%;
            border-radius: 4px;
            .login-form-head{
                text-align: center;
                border-bottom: 1px solid #e8eaec;
                line-height: 1;
                padding: 14px 16px;
            }
            .login-form-body{
                border-bottom: 1px solid #e8eaec;
                line-height: 1;
                padding: 20px 16px 10px 16px;
            }
        }
    }
</style>