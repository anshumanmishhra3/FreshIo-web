import { createRouter, createWebHistory } from 'vue-router';
import HomeSection from '../view/HomeSection.vue';  
import CartSection from '../view/CartSection.vue';
import WishList from '../view/WishList.vue';
import LoginPage from '../view/LoginPage.vue';
import { authStore } from '../store/auth';
    const routes = [
      {
        path: '/',
        name: 'home',
        component: HomeSection
      },
      {
        path: '/cart',
        name: 'cart',
        component: CartSection,
        meta : {
          auth : true
        }
      },
      {
        path : '/wishlist',
        name : 'wishlist',
        component : WishList
      },
      {
        path : '/login',
        name : 'login',
        component : LoginPage,
        
      },

    ];

    const router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL), 
      routes,
    });

    router.beforeEach((to,from,next)=>{
      const auth = authStore();
      const isLogin = auth.loggedin;
      console.log(isLogin)
      if(isLogin && to.name==='login'){
        return next ({name : 'cart'})
      }
      if(to.meta.auth && !isLogin){
        return next ({name:'login'})
      }
      next();
     })

export default router;