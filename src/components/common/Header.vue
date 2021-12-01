<template>
    <div class="header">
        <!-- 折叠按钮 -->
<!--        <div class="logo-img">-->
<!--            &lt;!&ndash;      <i class="el-icon-s-home" v-on:click="login"></i>&ndash;&gt;-->
<!--            <img src="">-->
<!--        </div>-->
        <div class="logo-text">北方工业大学教务信息发布系统</div>
        <div class="date-text">现在是： xxxx年  x季  第xx周</div>
        <div class="header-right">
            <div>

            </div>
            <div class="header-user-con">
                <!--        用户头像-->
                <button v-on:click="test">
                    <div class="user-avator">
                        <img src=""/>
                        <span>用户登录</span>
                    </div>
                </button>
                                <!-- 用户名下拉菜单 -->
<!--                <el-dropdown class="user-name" trigger="click">-->
<!--                    <span class="el-dropdown-link">-->
<!--&lt;!&ndash;                        {{ this.$store.state.users.username }}&ndash;&gt;-->
<!--                        &lt;!&ndash;                        <i class="el-icon-caret-bottom"></i>&ndash;&gt;-->
<!--                    </span>-->
<!--                    <el-dropdown-menu slot="dropdown">-->
<!--                        <a href="https://github.com/Yuzhao163/warter_vue" target="_blank">-->
<!--                            <el-dropdown-item>前端项目仓库</el-dropdown-item>-->
<!--                        </a><a href="https://github.com/Yuzhao163/warter" target="_blank">-->
<!--                        <el-dropdown-item>后台项目仓库</el-dropdown-item>-->
<!--                    </a>-->
<!--                        <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>-->
<!--                    </el-dropdown-menu>-->
<!--                </el-dropdown>-->

<!--                登出按钮-->
                <div  class="logout"><img src=""/></div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return{

            }
        },
        methods:{
            test(){
                console.log("test")
                this.$router.push("/register")
            }
        }
    }
</script>

<style scoped>
    .header {
        /*position: relative;*/
        /*box-sizing: border-box;*/
        /*width: 100%;*/
        /*height: 120px;*/

        /*font-size: 24px;*/
        /*color: #ffffff;*/
        /*background-color: #831d4d;*/
    }
    .logo-text{
        text-align: center;
    }
    .date-text{
        text-align: right;
        font-size: 12px;
        margin-right: 185px;
    }
    .header-user-con{
        float: right;
        font-size: 14px;
    }
</style>
