<template>
   <div>
       <el-card>
           <div slot="header">
               <span>通知公告</span>
           </div>
           <div style="margin: 0px 20px;" >
               <a href="">北方工大实践教学信息网</a><br>
               <a href="">北方工大精品课教学资源平台</a><br>
               <a href="">北方工业大学智慧课堂</a><br>
               <a href="">北方工业大学教务处</a><br>
               <a href="">北方工业大学</a><br>
               <a href="">北方工业大学研究生院</a><br>
               <a href="">北方工大图书馆</a><br>
               <a href="">北方工大电子邮件系统</a><br>
               <a href="">教育部</a><br>
               <a href="">中国教育网</a><br>
           </div>

       </el-card>
<!--        <el-table-->
<!--                :data="tableData"-->
<!--                stripe-->
<!--                style="width: 100%">-->
<!--            <el-table-column-->
<!--                    prop="date"-->
<!--                    label="日期"-->
<!--                    width="100px">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--                    prop="name"-->
<!--                    label="相关站点"-->
<!--                    width="400">-->
<!--            </el-table-column>-->
<!--        </el-table>-->
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{

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
    a {
        font-size: 16px;
        text-decoration: none;
        color: #606266;
    }
    a:hover {
        color: darkred;
    }

</style>
