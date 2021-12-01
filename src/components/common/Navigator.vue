<template>
    <el-row class="tac" style="height: 100%">
        <el-col>
            <el-menu
                    default-active="2"
                    router
                    :collapse="false"
                    class="el-menu-vertical-demo"

                    :unique-opened="true"

                    background-color="#831d4d"
                    text-color="#F0ECEC"
                    active-text-color="#FFC931">

<!--                <template v-for="(item,i) in mainitems">-->
<!--                    <template v-if="item.subs&&item.subs.length">-->
<!--                        <el-submenu :index="item.index" :key="i">-->
<!--                            <template slot="title">-->
<!--                                <i :class="item.icon"></i><span slot="title">{{ item.title }} + sss</span>-->
<!--                            </template>-->
<!--                            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">-->
<!--                                {{ subItem.title }}-->
<!--                            </el-menu-item>-->
<!--                        </el-submenu>-->
<!--                    </template>-->
<!--                    <template v-else>-->
<!--                        <el-menu-item :index="item.index" :key="i">-->
<!--                            <template slot="title">-->
<!--                                <i :class="item.icon"></i><span slot="title">{{ item.title }} + sssss</span>-->
<!--                            </template>-->
<!--                        </el-menu-item>-->
<!--                    </template>-->
<!--                </template>-->
                <template v-for="(item, i) in mainitems">
                    <el-menu-item :index="item.index" :key="i">
                        <i :class="item.icon"></i><span> {{item.title}}</span>
                    </el-menu-item>
                </template>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "Navigator",
        data(){
            return {
                mainitems: [
                    {
                        icon: 'el-icon-house',
                        index: 'notice',
                        title: '通知公告',
                    },
                    {
                        icon: 'el-icon-warning-outline',
                        index: 'teachingfile',
                        title: '教学文件',
                    },
                    {
                        icon: 'el-icon-s-operation',
                        index: 'managemsg',
                        title: '教务管理信息',
                    },
                    {
                        icon: 'el-icon-data-analysis',
                        index: 'reportcard',
                        title: '成绩单打印',
                    },
                    {
                        icon: 'el-icon-document',
                        index: 'relative',
                        title: '相关站点',
                    },
                    {
                        icon: 'el-icon-magic-stick',
                        index: 'timetable',
                        title: '课程表查询',
                    },
                    {
                        icon: 'el-icon-view',
                        index: 'feedback',
                        title: '反馈意见',
                    }
                ]
            }
            }
    }
</script>

<style scoped>

</style>
