import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Index = resolve => require(['@/page/Index.vue'], resolve)
const Category = resolve => require(['@/page/Category.vue'], resolve)
const CategoryMain = resolve => require(['@/components/category/Main.vue'], resolve)
const Car = resolve => require(['@/page/Car.vue'], resolve)
const User = resolve => require(['@/page/User.vue'], resolve)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/category',
      name: 'Category',
      component: Category,
      redirect: '/category/all',
      children: [{
        path: '/category/:type',
        component: CategoryMain
      }]
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
