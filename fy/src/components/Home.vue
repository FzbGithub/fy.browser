<template>
<el-container style="height: 100%; border: 1px solid #eee">
  <el-aside width="200px" class="box-shadow-one" v-show="showAside">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark aside-logo">
          <img src="./../assets/images/logo.png"  />
          <span>某某某</span>
        </div>
      </el-col>
    </el-row>
    <el-tree class="home-tree" :data="data" :props="defaultProps" accordion :default-expanded-keys="defaultExpanded" :highlight-current="true" node-key="id"  @node-click="nodeClick" ref="tree">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
      </span>
    </el-tree>
  </el-aside>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="1"  class="text-left">
          <img  @click="isShowAside" src="./../assets/images/icon-aside.png"  />
        </el-col>
        <el-col :span="23">
          <el-row type="flex" justify="space-between" :gutter="10">
            <el-col :span="23">
              <el-dropdown trigger="click" @command="dropdownClick">
                <span class="el-dropdown-link">
                  某某某<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item  command="edit">修改密码</el-dropdown-item>
                  <el-dropdown-item  command="exit">退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :span="1" class="text-left">
              <div class="man-wrap"><img src="./../assets/images/icon-man.png"  /></div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-header>

    <el-main class="main-wrap">
      <router-view />
    </el-main>
  </el-container>
</el-container>

</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      showAside: true,
      defaultExpanded: ['3'],
      data: [ {
        id: '1',
        label: '发布管理',
        children: [{
          id: '1-1',
          label: '发布中心',
          link: 'publishCenter'
        },
        {
          id: '1-2',
          label: '发布配置',
          link: 'configurationCenter'
        }]
      }, {
        id: '2',
        label: '配置管理',
        children: [{
          id: '2-1',
          label: '用户配置'
        }]
      }, {
        id: '3',
        label: '用户管理',
        children: [{
          id: '3-1',
          label: '用户中心'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  mounted () {
    this.$refs.tree.setCurrentKey('3-1')
  },
  methods: {
    nodeClick: function (data, isParentChecked, hadChildrenChecked) {
      if (data.link) {
        this.$router.push({path: data.link})
      }
    },
    dropdownClick: function (command) {
      if (command === 'exit') {
        let custId = localStorage.getItem('custId')
        this.$http.post(this.HTTPPREFIX + '/api/loginOut', {custId: custId}).then(response => {
          if (response && response.body && response.body.code) {
            localStorage.setItem('access-token', '')
            localStorage.setItem('custId', '')
            this.$router.push('/')
          } else {
            this.$message.error(response.body.msg)
          }
        })
      }
    },
    isShowAside: function () {
      this.showAside = !this.showAside
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .aside-logo {
    height: 60px;
    text-align: center;
    color: #c4d0d9;
    font-size: 20px;
    line-height: 60px;
  }
  .aside-logo img {
    height: 34px;
    vertical-align: middle;
  }
  .el-header {
    background-color: #fff;
    color: #333;
    line-height: 60px;
    text-align: right;
    font-size: 12px;
  }
  .man-wrap {
    display: inline-block;
    height: 34px;
    width: 34px;
    margin-top: 12px;
    border-radius: 50%;
    background-color: #ddd;
  }
  .man-wrap img {
    height: 100%;
    width: 100%;
  }
  .main-wrap {
    background-color: #f7f7f7;
  }

  .el-aside {
    background-color: #253d55;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
  }
  .el-menu-vertical {
    border-right-width: 0px;
  }
</style>
