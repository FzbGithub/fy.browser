<template>
  <div>
    <h1>用户列表</h1>
  </div>
</template>

<script>
export default {
  name: 'UsersCenter',
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
