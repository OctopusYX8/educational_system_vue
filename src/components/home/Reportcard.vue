<template>
    <div>
        <el-card>
            <div slot="header">
                <span>成绩单打印</span>
            </div>
            <el-table
                :data="tableDate"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="name"
                    label="成绩单打印">
            </el-table-column>
<!--            <el-table-column-->
<!--                    prop="name"-->
<!--                    width="400">-->
<!--            </el-table-column>-->
        </el-table>
        </el-card>

    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                tableDate:[{
                    name:'按课程打印成绩单'
                },{
                    name:'打印免修(补考、缓考)成绩单'
                },{
                    name:'按课程打印记录单'
                },{
                    name:'按课程打印临时记录单'
                },{
                    name:'打印循环课程成绩单'
                },{
                    name:'打印累加课程成绩单'
                },],
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
