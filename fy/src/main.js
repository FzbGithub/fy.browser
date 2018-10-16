// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import VueIi8n from 'vue-i18n'
import LangEn from './assets/i18n/en'
import LangZh from './assets/i18n/zh'
import defaultLang from './assets/i18n/defaultLang'
import echarts from 'echarts'

// 全局引入echarts
Vue.prototype.$echarts = echarts

Vue.use(VueResource)
Vue.use(VueIi8n)
Vue.prototype.HTTPPREFIX = 'http://localhost:3000'
Vue.config.productionTip = false
const i18n = new VueIi8n({
  locale: localStorage.getItem('defaultLang') || defaultLang.get(),
  messages: {
    'en': Object.assign(LangEn, enLocale),
    'zh': Object.assign(LangZh, zhLocale)
  }
})

Vue.use(ElementUI, { zIndex: 3000, i18n: (key, value) => i18n.t(key, value) })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
