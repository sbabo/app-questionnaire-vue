import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Question from './views/Question.vue'
import Profil from './views/Profil.vue'
import Login from './views/Login.vue'
import Result from './views/Result.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/questionnaire',
      name: 'question',
      component: Question
    },
    {
      path: '/profil',
      name: 'profil',
      component: Profil
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    }
  ]
})
