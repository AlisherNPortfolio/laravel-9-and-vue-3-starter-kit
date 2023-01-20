import TokenService from '../services/TokenService';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/index.vue')
    },
  {
    path: '/register',
    name: 'register',
    component: () => import("../views/auth/AppRegister.vue")
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/auth/AppLogin.vue")
  },
  {
    path: '/panel',
    component: () => import('../layouts/AppMain.vue'),
    children: [
        {
            path: '',
            name: 'dashboard',
            component: () => import('../views/home/dashboard.vue')
        }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import('../components/pages/Common/NotFoundPage.vue'),
    meta: {
      requiresAuth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

router.beforeEach((to, from, next) => {
  const token: string|null = TokenService.getToken();

  if (token) {
    if (to.path === '/login' || to.path === '/register') {
      next('/panel');
    } else {
      next();
    }
  } else {
    if (to.path === '/panel') {
      next('/login');
    } else {
      next();
    }
  }
})

export default router
