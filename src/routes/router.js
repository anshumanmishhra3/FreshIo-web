import { createRouter, createWebHistory } from 'vue-router';
import HomeSection from '../view/HomeSection.vue';  
import CartSection from '../view/CartSection.vue';
import WishList from '../view/WishList.vue';
    const routes = [
      {
        path: '/',
        name: 'home',
        component: HomeSection
      },
      {
        path: '/cart',
        name: 'cart',
        component: CartSection
      },
      {
        path : '/wishlist',
        name : 'wishlist',
        component : WishList
      }
    ];

    const router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL), // Use browser's HTML5 history API
      routes,
    });

export default router;