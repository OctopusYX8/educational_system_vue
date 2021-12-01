<template>

    <el-card>
        <div slot="header">
            <span>通知公告</span>
        </div>
<!--        <span>通知公告</span>-->
<!--        <div>-->
<!--            <a href=""> 关于2022届毕业生电子图像采集的通知（2021/11/19）<br></a>-->
<!--            <a href=""> 关于2021级新生学籍注册学信网自查的通知（2021/10/21）<br></a>-->
<!--            <a href=""> 关于举办我校2021年大学生工程实践与创新能力大赛暨北京市大赛选拔赛的通知(2021/10/19)<br></a>-->
<!--            <a href=""> 2022年春季学期教学运行安排通知(2021/10/19)<br></a>-->
<!--            <a href=""> 关于开展2021年本科学生体质健康测试的通知(2021/10/15)<br></a>-->
<!--            <a href=""> 关于2021秋季学期选考的通知(2021/10/11)<br></a>-->
<!--            <a href=""> 欢迎同学们参加网上教学评价活动(2021/10/8)<br></a>-->
<!--        </div>-->


        <el-table
                :data="tableData"
                style="width: 100%"
                :row-class-name="tableRowClassName">
            <el-table-column
                    prop="date"
                    label="日期"
                    width="150px">
            </el-table-column>
            <el-table-column
                    prop="information"
                    label="最新通知">
            </el-table-column>
        </el-table>
    </el-card>

</template>

<style>
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
</style>

<script>
    export default {
        name: "Notice",
        data(){
            return{
                tableData: [{
                    date: '2021-11-24',
                    information:'关于2022届毕业生电子图像采集的通知'
                }, {
                    date: '2021-11-25',
                    information:'关于2021级新生学籍注册学信网自查的通知'
                }, {
                    date: '2021-11-26',
                    information:'关于举办我校2021年大学生工程实践与创新能力大赛暨北京市大赛选拔赛的通知'
                }, {
                    date: '2021-11-27',
                    information:'2022年春季学期教学运行安排通知'
                },{
                    date: '2021-11-24',
                    information:'关于2022届毕业生电子图像采集的通知'
                }, {
                    date: '2021-11-25',
                    information:'关于2021级新生学籍注册学信网自查的通知'
                }, {
                    date: '2021-11-26',
                    information:'关于举办我校2021年大学生工程实践与创新能力大赛暨北京市大赛选拔赛的通知'
                }, {
                    date: '2021-11-27',
                    information:'2022年春季学期教学运行安排通知'
                }
                ]
            }
        },
        methods:{
            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            }
        }
    }
</script>

