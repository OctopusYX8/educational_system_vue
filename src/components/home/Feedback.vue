<template>
    <div>
        <el-card>
            <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="日期"
                        width="160">
                </el-table-column>
                <el-table-column
                        prop="advice"
                        label="建议"
                        width="400">
                </el-table-column>
                <el-table-column
                        prop="answer"
                        label="答复">
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
                tableData:[{
                    date: '2021/11/24 16:25:54',
                    advice: '走读生和线上上课的学生什么时候可以回学校？ ',
                    answer: '向本学院辅导员联系咨询返校事宜'
                },{
                    date: '2021/11/24 16:25:54',
                    advice: '什么时候取消封校？？ ',
                    answer: '还没有确定。'
                },{
                    date: '2021/11/24 16:25:54',
                    advice: '教学执行计划什么时候公布',
                    answer: '教学计划可以在教学信息网查询，输入自己的专业和年级，在网页的右上部，不用登陆，直接查看就好。'
                },{
                    date: '2021/11/24 16:25:54',
                    advice: '有一门网课成绩很低，想重修请问怎么操作呢。 ',
                    answer: '如果下学期还开设这门课，可以再次选课修读。'
                },{
                    date: '2021/11/24 16:25:54',
                    advice: '请问，什么时候可以出考试安排呢？？ ',
                    answer: '一般是教学周第14-15周公布，具体可电话咨询88803514。'
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
