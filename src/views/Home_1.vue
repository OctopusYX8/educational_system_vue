<template>
  <div class="main">
    <header>
        <div class="headerbg"></div>
      <div class="headermsg">{{ data.year }}年{{ data.month }}月{{ data.day }}日&nbsp{{data.week}}</div>
    </header>
    <el-row>
      <el-col :span="18"
        ><div class="grid-content bg-purple-light">
          <div class="noticebox">
            <h4>通知公告</h4>
            <el-table :data="tableData" stripe style="width: 100%">
              <el-table-column prop="date" label="日期" width="180">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="address" label="地址"> </el-table-column>
            </el-table>
          </div>
          <div class="downloadbox">
            <h4>教学文件</h4>
            <el-table :data="tableData" stripe style="width: 100%">
              <el-table-column prop="date" label="日期" width="180">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="address" label="地址"> </el-table-column>
            </el-table>
          </div>
        </div>
      </el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <div class="loginbox">
            <h4 style="margin-top: 0px">用户登录</h4>
            <el-form
              class="el-form"
              ref="form"
              :model="form"
              label-width="80px"
            >
              <el-form-item label="用户名">
                <el-input v-model="login.username"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="login.password"></el-input>
              </el-form-item>
            </el-form>
            <el-radio v-model="radio" label="1">学生</el-radio>
            <el-radio v-model="radio" label="2">教师</el-radio>
            <el-radio v-model="radio" label="2">管理员</el-radio>
            <div class="loginbox_footer">
              <a href="javascript:;">忘记密码</a>
              <el-button type="primary" round>登录</el-button>
            </div>
          </div>
          <div class="managemsg">
            <h4>教务管理信息</h4>
            <ul>
              <li :key="i" v-for="(item, i) in managemsgdata">
                <a href="javascript:;">{{ item }}</a>
              </li>
            </ul>
          </div>
          <div class="toolbox">
            <div>课表查询</div>
            <div @mouseenter="ifshow.chengjidan=true,moveanimater($event)" @mouseleave="ifshow.chengjidan=false">成绩单打印</div>
            <transition name="chengjidan">
            <ul v-show="ifshow.chengjidan" @mouseenter="ifshow.chengjidan=true,moveanimater($event)" @mouseleave="ifshow.chengjidan=false" >
                <li><a>按课程打印成绩单</a></li>
                <li><a>打印免修(补考、缓考)成绩单</a></li>
                <li><a>按课程打印记录单</a></li>
                <li><a>按课程打印临时记录单</a></li>
                <li><a>打印循环课程成绩单</a></li>
                <li><a>打印累加课程成绩单</a></li>
            </ul>
            </transition>
            <div>规章制度下载</div>
            <div>表格下载</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <footer>
      <div class="otherweb">
        <h4>相关站点</h4>
        <div>
          <a href="https://sjjx.webvpn.ncut.edu.cn/" target="_blank"
            >北方工大实践教学信息网</a
          ><a href="http://kfk.ncut.edu.cn/ApplicationCenter/" target="_blank"
            >北方工大精品课教学资源平台</a
          >
          <a href="http://ncut.smartclass.cn/" target="_blank"
            >北方工业大学智慧课堂</a
          ><a href="http://jwc.ncut.edu.cn/" target="_blank"
            >北方工业大学教务处</a
          ><a href="https://www.webvpn.ncut.edu.cn/" target="_blank"
            >北方工业大学官网首页</a
          >
          <a href="http://yjsy.ncut.edu.cn/" target="_blank"
            >北方工业大学研究生院</a
          ><a href="http://lib.ncut.edu.cn/lib/Index.html" target="_blank"
            >北方工大图书馆</a
          ><a href="https://ncut-edu-cn.webvpn.ncut.edu.cn/" target="_blank"
            >北方工大电子邮件系统</a
          >
          <a
            href="http://www.moe.gov.cn/"
            target="_blank"
            style="width: 50px; margin-right: 10px"
            >教育部</a
          ><a href="https://www.edu.cn/" target="_blank" style="width: 100px"
            >中国教育网</a
          >
        </div>
      </div>
      <div class="footmsg">
        <span>北方工业大学&nbsp教务处</span><br />
        <span>地址:北方工业大学敦品楼101室</span><br />
        <span>邮编:100144</span><span>&nbsp&nbsp</span>
        <span>电话:86-10-88803515</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      data: {
        year: "11",
        month: "",
        day: "",
      },
      ifshow:{
          chengjidan:false,
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      login: {
        username: "",
        password: "",
      },
      managemsgdata: [
        "教学计划查询",
        "课程与教学计划关系查询",
        "教学执行计划查询",
        "教学进程查询",
        "免修(补考、缓考)查询与统计",
        "循环课程的查询",
        "可累加课程查询与统计",
      ],
    };
  },
  created: function () {
    this.data.year = JSON.stringify(new Date().getFullYear()); //年
    this.data.month = JSON.stringify(new Date().getMonth() + 1); //注意！月份是从0月开始获取的，所以要+1;
    this.data.day = JSON.stringify(new Date().getDate()); //日
    let wk=new Date().getDay();
    const weeks=['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
this.data.week=weeks[wk];
  },
  methods: {
    test() {
      this.$axios.post("/login").then((res) => {
        console.log("测试");
        console.log(res.data);
      });
    },
    moveanimater(e){
      console.log('1');
      console.log(e);

    }
  },
};
</script>

<style scoped>
.main {
  width: 900px;
  margin: 10px auto;
  /* display: flex; */
}
header {
  width: 100%;
  height: 200px;
  border-radius: 8px 8px 0 0;
  background-color: pink;
}.headerbg{
height: 80%;
}
.headermsg{
height: auto;
}
.loginbox {
  width: 100%;
  height: 260px;
  padding: 10px;
  box-sizing: border-box;
}
.loginbox .el-form {
  transform: translateX(-20px);
}
.loginbox label {
  margin-right: 10px;
}
.loginbox_footer {
  float: right;
  margin-top: 10px;
  line-height: 1;
}
.loginbox_footer a {
  color: royalblue;
  margin-right: 40px;
  text-decoration: none;
}
.managemsg {
  padding: 10px;
  box-sizing: border-box;
}
.managemsg ul {
  padding-left: 20px;
  
}
.managemsg li {
    margin: 8px 0 8px 0;margin: 8px 0 8px 0;
  line-height: 1;
}
.managemsg li a {
   text-decoration: none;
}
.managemsg h4 {
  /* background: url(../assets/pic/gjbar3_bg2.gif); */
}
.toolbox div {
  height: 60px;
  margin-top: 6px;
  background-color: rgb(62, 146, 255);
  border-radius: 6px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
  z-index:99;
}
.toolbox ul li{
  margin: 0;
  z-index: 98;
  /* box-sizing: border-box; */
}

.noticebox /deep/.el-table .el-table__cell {
  padding: 4px 0;
}
.downloadbox /deep/.el-table .el-table__cell {
  padding: 4px 0;
}
.noticebox h4 {
  margin: 0px 0 0px 16px;
  padding: 4px 0;
}
.downloadbox h4 {
  margin: 0px 0 0px 16px;
  padding: 4px 0;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
footer {
  width: 100%;
  height: 200px;
  background-color: rgb(216, 216, 216);
}
.otherweb {
  width: 100%;
  /* text-align: center; */
}
.otherweb h4 {
  display: inline-block;
  margin: 8px 0px 8px 48px;
  /* text-align: center; */
}
.otherweb > div {
  width: auto;
  display: inline-block;
  /* background-color: #fff; */
  padding-left: 100px;
  /* text-align: center; */
  /* margin-right: 20px; */
}
.otherweb > div a {
  width: 210px;
  display: inline-block;
  margin: 0 20px;
  color: rgb(97, 137, 255);
  text-decoration: none;
}
.footmsg {
  text-align: center;
}
.footmsg::before {
  content: "";
  display: block;
  width: 98%;
  height: 2px;
  margin: 10px auto;
  background-color: rgba(46, 0, 0, 0.700);
}
/* 动画过渡 */
.chengjidan-enter-active, .chengjidan-leave-active{

    transition: all 0.5s ease
}
.chengjidan-enter, .chengjidan-leave-to {
 
 overflow: hidden;
width: 185px;
height: 0px;
   /* transform: translateY(-10px); */
}
.chengjidan-enter-to, .chengjidan-leave {
overflow: hidden;
 width: 185px;
height: 147px;

}
</style>