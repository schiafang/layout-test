import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '../views/Product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/product',
    name: 'ProductIndex',
    component: Product
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
  }
]

const router = new VueRouter({
  routes
})

export default router
