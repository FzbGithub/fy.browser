<template>
  <div>
    <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>城方智通--某某某</span>
      <el-button style="float: right;" type="primary" size="mini" round>交付</el-button>
      <el-button style="float: right; margin-right: 10px;" type="primary" size="mini" round>上传</el-button>
    </div>
    <el-row :gutter="20">
      <el-col :span="8" v-for=" (item, index) in publishTypeList"  :key="item.id">
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <div style="padding: 14px;">
            <span>{{item.name}}</span>
          </div>
          <div class="version-wrap clearfix">
            <div class="version-box">
              <div class="version-icon"><i class="el-icon-upload"></i></div>
              <div class="version-desc">
                <label><i class="el-icon-news"></i><span>版本：1.2.6.6</span></label>
                <label><i class="el-icon-time"></i><span>时间：2018-10-26</span></label>
              </div>
              <div>
                <el-button type="text" size="mini" round>删除</el-button>
                <el-button type="text" size="mini" round v-if="index==0">使用中</el-button>
                <el-button type="text" size="mini" round v-else>激活</el-button>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-card>
  </div>
</template>

<script>
export default {
  name: 'PublishCenter',
  data () {
    return {
      publishTypeList: [{
        id: 1,
        name: '正式环境',
        publishTime: '2018-10-26'
      },
      {
        id: 2,
        name: '仿真环境',
        publishTime: '2018-10-26'
      },
      {
        id: 3,
        name: '开发环境',
        publishTime: '2018-10-26'
      }]
    }
  },
  mounted () {
    this.$http.post(this.HTTPPREFIX + '/api/homeList').then(res => {
      console.log(res)
    })
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
  .version-box {
    width: 140px;
    height: 120px;
    padding: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    float: left;
    border-style: solid;
    border-width: 1px;
    border-color: #409EFF;
  }
  .version-wrap {
    border-style: solid;
    border-width: 1px;
    border-color: #ebeef5;
    padding-top: 10px;
  }
  .version-box button {
    display: inline;
  }
  .version-icon {
    text-align: center;
    font-size: 50px;
  }
  .version-desc {
    color: #999;
    font-size: 13px;
    line-height: 20px;
  }
  .version-desc label {
    display: block;
  }
</style>
