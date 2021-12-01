<template>
    <div>
        <el-card>
            <div slot="header">
                <span>教务管理信息</span>
            </div>
            <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="日期"
                        width="150px">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="最新文件">
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                tableData: [{
                    date: '2016-05-02',
                    address: '教学计划查询'
                }, {
                    date: '2016-05-04',
                    address: '课程与教学计划关系查询'
                }, {
                    date: '2016-05-01',
                    address: '教学执行计划查询'
                }, {
                    date: '2016-05-03',
                    address: '教学进程查询'
                }, {
                    date: '2016-05-02',
                    address: '免修(补考、缓考)查询与统计'
                }, {
                    date: '2016-05-04',
                    address: '循环课程的查询'
                }, {
                    date: '2016-05-01',
                    address: '教学执行计划查询'
                }, {
                    date: '2016-05-03',
                    address: '可累加课程查询与统计'
                },]
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

</style>
