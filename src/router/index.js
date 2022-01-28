import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/index'

  },
  {

    path: '/login',
    component: () => import('../views/login.vue'),
 
    children: [
      {
        path: '/',
        redirect: 'msg'

      },
      {
        path: 'msg',
        component: () => import('../components/msn_login.vue'),
      },
      {
        path: 'login_m',
        component: () => import('../components/login_m.vue'),
      },
    ]
  },
  {
    path:'/index',
    component:()=>import('../views/index.vue'),
    children: [
      {
        path: '/',
        redirect: 'takeout'

      },
      {
        path: 'takeout',
        component: () => import('../views/takeout.vue'),
      },
      {
        path: 'search',
        component: () => import('../views/search.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/orders.vue'),
      },  {
        path: 'mine',
        component: () => import('../views/my.vue'),
      },
    ]
  },
  {
    path:'/shop_detils',
    component:()=>import('../views/shop_detils.vue'),
       children:[{
         path:'/',
         redirect:'food'
       },
       {
        path: 'food',
        component: () => import('../components/food.vue'),
      },
      {
        path: 'appraise',
        component: () => import('../components/appraise.vue'),
      },  {
        path: 'business',
        component: () => import('../components/business.vue'),
      },
      ]
  }

]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

export default router