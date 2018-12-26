import Vue from 'vue'
import Router from 'vue-router'
import Recomm from '@/components/recomm'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Recomm',
      component: Recomm
    }
  ]
})
