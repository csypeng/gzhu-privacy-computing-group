/*
 * @Author: Xueyu LI xli3@lenovo.com
 * @Date: 2022-09-01 16:11:44
 * @LastEditTime: 2022-09-06 17:32:14
 * @Description: Router
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import SimpleLayout from '@/layout/SimpleLayout.vue'

const routes = [
  {
    path: '/',
    redirect: '/homepage/index'
  },
  {
    path: '/homepage',
    component: SimpleLayout,
    redirect: '/homepage/inxex',
    children: [
      {
        path: 'index',
        component: () => import('@/views/homepage/index.vue'),
        name: 'Homepage'
      }
    ]
  },
  {
    path: '/news',
    component: SimpleLayout,
    redirect: '/news/inxex',
    children: [
      {
        path: 'index',
        component: () => import('@/views/news/index.vue'),
        name: 'News'
      }
    ]
  },
  {
    path: '/people',
    component: SimpleLayout,
    redirect: '/people/inxex',
    children: [
      {
        path: 'index',
        component: () => import('@/views/people/index.vue'),
        name: 'People'
      }
    ]
  },
  {
    path: '/projects',
    component: SimpleLayout,
    redirect: '/projects/inxex',
    children: [
      {
        path: 'index',
        component: () => import('@/views/projects/index.vue'),
        name: 'Projects'
      }
    ]
  },
  {
    path: '/publications',
    component: SimpleLayout,
    redirect: '/publications/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/publications/index.vue'),
        name: 'Publications'
      }
    ]
  },
  {
    path: '/demo',
    component: SimpleLayout,
    redirect: '/demo/inxex',
    children: [
      {
        path: 'index',
        component: () => import('@/views/demo/index.vue'),
        name: 'Demo'
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
