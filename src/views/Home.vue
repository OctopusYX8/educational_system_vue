<template>
    <el-container class="mycontainer1">
        <el-header class="el-header">
            <Header></Header>
        </el-header>
        <el-container class="mycontainer2">
            <el-aside class="myaside" width="200px">
                <Navigator class="nav-menu"></Navigator>
            </el-aside>
            <el-container class="mycontainer3">
                <el-main class="mymain">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
        <el-footer>
            <Footer></Footer>
        </el-footer>
    </el-container>
</template>


<script>

import Header from "@/components/common/Header"
import Navigator from "@/components/common/Navigator"
import Footer from "@/components/common/Footer"
    export default {
        name: "Home",
        components:{Header,Navigator,Footer}
    }
</script>

<style scoped>
    .el-header {
        height: 80px;
        padding: 0px;
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 120px;
        font-size: 24px;
        color: #ffffff;
        background-color: #831d4d;
    }
    /*.myheader{*/
    /*    height: 80px;*/
    /*    padding: 0px;*/
    /*}*/
    .myaside{
        /*background-color: greenyellow;*/
        width: 15%;
        background-color: #69173E;
        /*background-color: #2E6486;*/
    }
    /*.mymain{*/
    /*    background-color: #E5F1F6;*/
    /*}*/
    .mycontainer1{
        height: 100%;
    }
    /*.mycontainer2{*/
    /*    overflow: hidden;*/
    /*}*/
    /*.nav-menu {*/
    /*    !*margin-bottom: 40px;*!*/
    /*    box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);*/
    /*    z-index: 11;*/
    /*}*/
</style>
