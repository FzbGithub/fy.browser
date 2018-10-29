<template>
  <div>
    <el-card class="box-card" shadow="hover" :body-style="{ padding: '0px' }">
      <div slot="header">
        <el-button  type="primary" size="small" round>创建项目</el-button>
        <el-button  type="primary" size="small" round>交付</el-button>
        <el-button  type="primary" size="small" round>修改</el-button>
        <el-button  type="primary" size="small" round>暂停</el-button>
        <el-button  type="primary" size="small" round>关闭</el-button>
        <el-button  type="primary" size="small" round>删除</el-button>
      </div>
      <div class="config-table-wrap">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="id"
            label="序号"
            width="80">
          </el-table-column>
          <el-table-column
            prop="projectName"
            label="项目名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="beginDate"
            label="开始日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="endDate"
            label="结束日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="creator"
            label="创建人"
            width="100">
          </el-table-column>
          <el-table-column
            prop="duty"
            label="责任人"
            width="100">
          </el-table-column>
          <el-table-column
            prop="desc"
            label="描述">
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ConfigurationCenter',
  data () {
    return {
      tableData: [{
        id: 0,
        projectName: '项目一',
        beginDate: '2016-05-02',
        endDate: '2016-05-02',
        creator: '王一',
        duty: '张三',
        desc: '司机代驾'
      }, {
        id: 1,
        projectName: '项目一',
        beginDate: '2016-05-02',
        endDate: '2016-05-02',
        creator: '王一',
        duty: '张三',
        desc: '司机代驾'
      }, {
        id: 2,
        projectName: '项目一',
        beginDate: '2016-05-02',
        endDate: '2016-05-02',
        creator: '王一',
        duty: '张三',
        desc: '司机代驾'
      }, {
        id: 3,
        projectName: '项目一',
        beginDate: '2016-05-02',
        endDate: '2016-05-02',
        creator: '王一',
        duty: '张三',
        desc: '司机代驾'
      }]
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .config-table-wrap {
    margin: 10px;
    text-align: center;
  }
</style>
