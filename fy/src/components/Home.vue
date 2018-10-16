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
    <el-menu  class="el-menu-vertical" background-color="#1c2b36" text-color="#909399" active-text-color="#409EFF">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>概要</template>
        <el-menu-item index="1-1">实时监控</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="1">
          <el-button @click="showAside = !showAside"><i class="el-icon-d-arrow-right" v-if="!showAside"></i><i class="el-icon-d-arrow-left" v-if="showAside"></i></el-button>
        </el-col>
        <el-col :span="23">
          <span>某某某</span>
          <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
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
      showAside: false
    }
  },
  methods: {
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
