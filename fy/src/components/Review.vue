<template>
  <div>
    <el-row :gutter="40">
      <el-col :span="6">
        <el-row class="header-box" type="flex" align="middle" justify="center">
          <el-col :span="8" class="people"><i class="el-icon-mobile-phone"></i></el-col>
          <el-col :span="16">
            <p class="num">495</p>
            <p>新用户</p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row class="header-box" type="flex"  align="middle" justify="center">
          <el-col :span="8" class="money"><i class="el-icon-news"></i></el-col>
          <el-col :span="16">
            <p class="num">495</p>
            <p>消费</p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row class="header-box" type="flex"  align="middle" justify="center">
          <el-col :span="8" class="shopping"><i class="el-icon-service"></i></el-col>
          <el-col :span="16">
            <p class="num">495</p>
            <p>购物</p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row class="header-box" type="flex"  align="middle" justify="center">
          <el-col :span="8" class="property"><i class="el-icon-star-on"></i></el-col>
          <el-col :span="16">
            <p class="num">495</p>
            <p>总资产</p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="second-header-box" :gutter="20">
      <el-col :span="16">
        <div id="review-bar" class="review-bar"></div>
      </el-col>
      <el-col :span="8">
        <el-row>
          <el-col>
            <div id="review-line" class="review-line"></div>
          </el-col>
          <el-col>
            <div id="review-income-bar" class="review-income-bar"></div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="third-header-box" :gutter="20">
      <el-col :span="10">
        <h3 class="box-title">工作任务</h3>
        <el-table
          :data="tableData3"
          height="280"
          border
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="14">
        <h3 class="box-title">工作进度</h3>
        <el-table
          :data="tableData3"
          height="280"
          border
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Review',
  data () {
    return {
      isCollapse: false,
      tableData3: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  mounted () {
    this.createReviewBar('review-bar')
    this.createReviewLine('review-line')
    this.createReviewIncomeBar('review-income-bar')
  },
  methods: {
    createReviewBar: function (id) {
      let bar = this.$echarts.init(document.getElementById(id))
      bar.setOption({
        color: ['#3398DB'],
        title: { text: '销量图表' },
        tooltip: {},
        xAxis: {
          type: 'category',
          data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20]
        }]
      })
    },
    createReviewLine: function (id) {
      let line = this.$echarts.init(document.getElementById(id))
      line.setOption({
        color: ['#3398DB'],
        title: { text: '新收益' },
        tooltip: {},
        xAxis: {
          type: 'category',
          data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: { type: 'value' },
        series: [{
          type: 'line',
          symbol: 'circle',
          symbolSize: 10,
          lineStyle: {
            normal: {
              color: '#4ed4da',
              width: 2,
              type: 'dashed'
            }
          },
          itemStyle: {
            normal: {
              borderWidth: 2,
              borderColor: '#f1bf8b',
              color: '#fb6f0a'
            }
          },
          data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20]
        }]
      })
    },
    createReviewIncomeBar: function (id) {
      let bar = this.$echarts.init(document.getElementById(id))
      bar.setOption({
        color: ['#a6d767'],
        title: { text: '总收入' },
        tooltip: {},
        xAxis: {
          type: 'category',
          data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {},
        series: [{
          name: '总收入',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header-box {
    height: 80px;
    background-color: #fff;
    color: #acacac;
    text-align: center;
    font-size: 13px;
  }
  .header-box >div { height: 100%; }
  .header-box i {
    color: #fff;
    font-size: 36px;
    line-height: 80px;
  }
  .header-box p {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .header-box .num {
    font-size: 36px;
    padding-top: 9px;
  }
  .header-box .people {
    background-color: #4ec8c9;
  }
  .header-box .money {
    background-color: #fd6d5c;
  }
  .header-box .shopping {
    background-color: #fdd631;
  }
  .header-box .property {
    background-color: #20c5f3;
  }
  .second-header-box {
    height: 400px;
    margin-top: 20px;
  }
  .review-bar {
    height: 400px;
    width: 100%;
    background-color: #fff;
  }
  .review-line, .review-income-bar {
    width: 100%;
    height: 200px;
    background-color: #fff;
  }
  .third-header-box {
    height: 340px;
    margin-top: 20px;
  }
  .third-header-box .box-title {
    margin: 0px;
    padding-top:14px;
    padding-bottom: 14px;
    background-color: #fff;
  }
</style>
