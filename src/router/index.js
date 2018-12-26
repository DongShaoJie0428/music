import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Recomm from '@/components/recomm'
import Station from '@/components/station'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/recomm',
          name: 'Recomm',
          component: Recomm,
        }, {
          path: '/station',
          name: 'Station',
          component: Station,
        }
      ]
    }
  ]
})
