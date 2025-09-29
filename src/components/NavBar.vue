<template>
  <header class="bg-white shadow-md">
    <nav class="flex items-center justify-around h-[5rem]">
      <!-- Logo -->
      <img
        src="https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/logo.svg"
        alt="logo"
        class="md:h-14 md:pl-12 mr-8 h-14"
      />

      <!-- Search bar -->
      <div
        class="hidden sm:flex border-2 rounded-2xl items-center h-8 pl-4 hover:bg-[#61df91]"
      >
        <i :class="['fas', 'fa-search', 'pl-4', 'h-4']"></i>
        <input
          type="search"
          class="search-bar pl-4"
          placeholder="Search products..."
          v-model="searchQuery"
        />
        <button class="px-4" @click="handleSearch">Search</button>
      </div>

      <!-- Icons -->
      <div class="flex items-center space-x-4">
        <!-- Profile Icon -->

        <div
          class="hidden sm:flex items-center justify-center w-12 h-12 border-2 border-green-500 rounded-full cursor-pointer profile-icon-hover"
        >
        <RouterLink to="/profile"></RouterLink>

          <i class="fa fa-user text-2xl"></i>
        </div>

        <!-- Favorites Icon -->
        <div
          class="hidden md:flex relative items-center justify-center w-12 h-12 border-2 border-red-500 rounded-full cursor-pointer favorite-icon-hover"
        > 
        <router-link :to="'/wishlist'">

          <i class="fa fa-heart text-2xl"></i>
          <span
            class="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full"
            >1</span
          >
        </router-link>
        </div>

        <!-- Cart Icon -->
        
        <div
          class="hidden lg:flex relative items-center justify-center w-12 h-12 border-2 border-yellow-500 rounded-full cursor-pointer cart-icon-hover"
        >
        <router-link :to="'/cart'">
          <i class="fa fa-shopping-cart text-2xl"></i>
          <span
            class="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full"
            >{{ product.quantity }}</span
          >
        </router-link>
        </div>

        <!-- Price -->
        <div class="hidden sm:flex items-center justify-center font-bold text-lg">
          ₹0.00
        </div>
        <!-- Hamburger (small screens only) -->
        <button
          class="flex md:hidden items-center justify-center text-4xl ml-10 font-bold"
          @click="toggleMenu"
        >
          &#9776;
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { productStore } from "../store/cart";
const searchQuery = ref("");
const product = productStore();
const handleSearch = () => {
  console.log("Searching for:", searchQuery.value);
};

const toggleMenu = () => {
  console.log("Hamburger menu toggled!");
}; 
</script>
