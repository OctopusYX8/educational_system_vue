<template>
    <div>
        <el-card>
            <div slot="header">
                <span>课程表查询</span>
            </div>
            <div>
<!--                <el-row>-->
<!--                    <el-col :span="6" offset="7"><div>课程表查询</div></el-col>-->
<!--                </el-row>-->
                <el-row>
                    <el-col :span="6"><div class="row">按班级查询课表</div></el-col>
                    <el-col :span="7"><div>按上课时间查询课表</div></el-col>
                    <el-col :span="6"><div>空教室查询</div></el-col>
                </el-row>
                <el-row type="flex">
                    <el-col :span="6"><div>按教室查询课表</div></el-col>
                    <el-col :span="7"><div>按实践环节查询课表</div></el-col>
                    <el-col :span="6"><div>教室临时占用查询</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="6"><div>按课程查询课表</div></el-col>
                    <el-col :span="7"><div>按时间环节查询课表</div></el-col>
                    <el-col :span="6"><div>作息时间查询</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="6"><div>按教师查询课表</div></el-col>
                    <el-col :span="7"><div>按特殊类别查询课表</div></el-col>
                    <el-col :span="6"><div>答疑时间地点查询</div></el-col>
                </el-row>
            </div>
        </el-card>
<!--        <el-table-->
<!--                :data="tableData"-->
<!--                stripe-->
<!--                style="width: 100%">-->
<!--            <el-table-column-->
<!--                    prop="name"-->
<!--                    label="课程表查询"-->
<!--                    width="180">-->
<!--            </el-table-column>-->
<!--        </el-table>-->

    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                tableData: [{
                    date: '2016-05-02',

                }, {
                    date: '2016-05-04',

                }, {
                    date: '2016-05-01',

                }, {
                    date: '2016-05-03',
                }]
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
