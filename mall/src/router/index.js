import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import storeInfo from '@/pages/storeInfo'
import info from '@/pages/info'
import evaluate from '@/pages/evaluate'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/storeInfo',
      name: 'storeInfo',
      component: storeInfo
    },
    {
      path: '/evaluate',
      name: 'evaluate',
      component: evaluate
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
  ]
})
