import Vue from 'vue'
import Router from 'vue-router'

import todo from './components/todo/TodoList.vue'
import about from './components/about/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'todo',
      component: todo
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
