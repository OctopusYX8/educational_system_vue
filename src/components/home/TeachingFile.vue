<template>
    <div>

    <el-card>
        <div slot="header">
            <span>教学文件</span>
        </div>
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
                    label="最新文件">
            </el-table-column>
        </el-table>
    </el-card>
    </div>

</template>

<script>
    export default {
        name: "TeachingFile",
        data(){
            return{
                tableData: [{
                    date: '2021-11-24',
                    information:'北方工业大学本科学生学习指南(2021级)'
                }, {
                    date: '2021-11-25',
                    information:'教学日历卡(2019秋--2022春)'
                }, {
                    date: '2021-11-26',
                    information:'2018秋季学期 学费标准'
                }, {
                    date: '2021-11-27',
                    information:'2017秋季学期 学费标准'
                },{
                    date: '2021-11-24',
                    information:'注册选课操作指南'
                }, {
                    date: '2021-11-25',
                    information:'期末考试座位图'
                }, {
                    date: '2021-11-26',
                    information:'2016秋季学期 学费标准'
                }, {
                    date: '2021-11-27',
                    information:'2017秋季学期 学费标准'
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

<style>
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
</style>
