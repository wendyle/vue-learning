import Vue from 'vue'
import Router from 'vue-router'
import Operation from '../layout/operation.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/operation'
    },
    {
      path: '/operation',
      name: 'operation',
      component: Operation
    }
  ]
})

export default router
