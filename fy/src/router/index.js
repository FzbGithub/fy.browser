import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home'
import Review from '@/components/Review'
import PublishCenter from '@/components/PublishCenter'
import ConfigurationCenter from '@/components/ConfigurationCenter'
import MySvg from '@/components/MySvg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/mysvg',
      name: 'MySvg',
      component: MySvg
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {path: 'review', component: Review},
        {path: 'publishCenter', component: PublishCenter},
        {path: 'configurationCenter', component: ConfigurationCenter}
      ]
    }
  ]
})
