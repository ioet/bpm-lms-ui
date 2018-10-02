import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
