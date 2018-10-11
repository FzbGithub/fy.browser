<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,
body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  margin: 0px;
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
}
/* 粗体 */
.font-weight {
  font-weight: bolder;
}
/* */
.box-shadow-one {
  box-shadow: 0 0 20px #DCDFE6;
}
/* 主标题 */
.font-20 {
  font-size: 20px;
}
/* 标题 */
.font-18 {
  font-size: 18px;
}
/* 小标题 */
.font-16 {
  font-size: 20px;
}
/* 正文 */
.font-14 {
  font-size: 14px;
}
/* 正文（小） */
.font-13 {
  font-size: 13px;
}
/* 辅助文字 */
.font-12 {
  font-size: 12px;
}
/* 主色背景-颜色是鲜艳、友好的蓝色 */
.bg-blue {
  background-color: #409EFF;
}
/* 辅助色-除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作） */
/* 辅助色-成功 */
.bg-success {
  background-color: #67C23A;
}
/* 辅助色-警告 */
.bg-warning {
  background-color: #E6A23C;
}
/* 辅助色-危险 */
.bg-danger {
  background-color: #F56C6C;
}
/* 辅助色-提示 */
.bg-info {
  background-color: #909399;
}
/* 中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构 */
.border-color-one {
  border-color: #DCDFE6;
}
.border-color-two {
  border-color: #E4E7ED;
}
.border-color-three {
  border-color: #EBEEF5;
}
.border-color-four {
  border-color: #F2F6FC;
}
.color-main {
  color: #303133;
}
.color-normal {
  color: #606266;
}
.color-secondary {
  color: #909399;
}
.color-placeholder {
  color: #C0C4CC;
}
</style>
