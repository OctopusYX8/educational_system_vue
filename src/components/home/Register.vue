<template>
    <div style="height: 100%;overflow: hidden">
        <div class="BOX1">
            <div class="BOX2"></div>
            <el-form class="login-container" label-position="left"
                     label-width="0px">
                <h3 class="login_title">系统登录</h3>
                <el-form-item>
                    <el-input type="text" v-model="loginForm.username"
                              auto-complete="off" placeholder="账号" @keyup.enter.native="login"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="password" v-model="loginForm.password"
                              auto-complete="off" placeholder="密码"></el-input>
                </el-form-item>

                <el-button type="primary" style=" width: 100%;border: none" v-on:click="login">登录</el-button>
            </el-form>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                loginForm: {
                    username: '',
                    password: ''
                },
            }
        },
        methods:{
            test(){
                this.$axios.post('/login')
                    .then(res=>{
                        console.log("测试")
                        console.log(res.data)
                    })
            }
        }
    }
</script>

<style scoped>
    .BOX1 {
        display: flex;
        height: 100%;
    }

    .BOX2 {
        display: block;
        width: 50%;
        height: 100%;

    }
    .login-container {
        border-radius: 15px;
        background-clip: padding-box;
        margin: auto auto;
        margin-top: 10%;
        width: 320px;
        padding: 35px 35px 15px 35px;
        background:rgba(255,255,255,.8);
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #831d4d;
    }
</style>