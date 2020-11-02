import VueRouter from 'vue-router'
import Hello from '../pages/page-hello'

const routes = [
  {
    path: '/hello',
    component: Hello,
    children: [
      {
        path: '/hello',
        component: Hello
      },
    ]
  },
  { path: '/', redirect: '/hello'}
]

const router = new VueRouter({
  routes
})

export default router