import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogDetailView from '../views/BlogDetailView.vue'
import CreateEditBlogView from '../views/CreateEditBlogView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import MyBlogsView from '../views/MyBlogsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    { 
      path: '/blog/:id', 
      component: BlogDetailView, 
    },
    { 
      path: '/blog/:id/edit', 
      component: CreateEditBlogView,
     },
     { 
      path: '/blog/create', 
      component: CreateEditBlogView,
    },
    { 
      path: '/login', 
      component: LoginView, 
    },
    { 
      path: '/Register',
      component: RegisterView,
    },
    {
      path: '/myblogs',
      component: MyBlogsView,
    }      
  ]
})

export default router
