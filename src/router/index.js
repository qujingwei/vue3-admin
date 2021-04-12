import routes from './routers'
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, form, next) => {
  console.log(to);
  console.log(form);
  console.log(next);
  next()
})

export default router