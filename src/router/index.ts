import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Mode1View from '../views/Mode1View.vue'
import FazeTeamView from '../views/FazeTeamView.vue'
import ProInfoView from '../views/ProInfoView.vue'
import Main from '@/components/FazePage/Main.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/mode1',
      name: 'mode1',
      component: Mode1View
    },
    {
      path: '/faze',
      name: 'fazeN',
      component: FazeTeamView,
      children: [
        {
          path: '',
          name: 'fazePro',
          redirect: '/faze/proInfo'
        },
        {
          path: 'proInfo',
          component: ProInfoView,
          props(route) {
            return route.query
          }
        }
      ]
    },
    {
      path: '/fazePage',
      name: 'faze',
      component: Main
    }
  ]
})

// router.beforeEach((to,from) => {
//   if(to.name === 'mode1') {
//     return {name : 'about'}
//   }
//   console.log(to)
// })

export default router
