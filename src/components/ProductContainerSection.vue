<template>
  <section>
    <h1 class="hero-text-color-left text-2xl ml-8 font-bold">
      Feature Products
    </h1>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
  <!-- Product Grid -->
  <div v-for="(item, index) in items" :key="index" class="relative bg-white border rounded-xl shadow-md p-4 flex flex-col items-center">

    <!-- Wishlist Icon Button (Top-right corner) -->
    <button class="absolute top-3 right-3 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 
                 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
                 4.5 2.09C13.09 3.81 14.76 3 
                 16.5 3 19.58 3 22 5.42 22 
                 8.5c0 3.78-3.4 6.86-8.55 
                 11.54L12 21.35z"/>
      </svg>
    </button>

    <!-- Product Image -->
    <img 
      :src="item.image" 
      alt="Product Image" 
      class="rounded-lg mb-4 w-24 h-24 object-cover"
    />

    <!-- Product Title -->
    <h2 class="font-semibold text-center text-base md:text-lg mb-1 truncate w-full">
      {{ item.title }}
    </h2>
    
    <div class="flex gap-3">
      
    <!-- Product Price -->
    <p class="text-gray-700 font-medium mb-3">
      $ {{item.price}}
    </p>

    <!-- Rating -->
    <p class="font-medium">⭐{{ item.rating.rate }} </p>

    </div>
    <!-- Action Buttons: Cart + Wishlist -->
    <div class="flex gap-2 w-full mt-auto">
      <button class="flex-1 cursor-pointer px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors" :key="item.id" @click="btn.addToCart(item)">
        Add to Cart
      </button>
      <button class="flex-1 cursor-pointer px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors" @click="btn.addToWishlist(item)">
        Wishlist
      </button>
    </div>
  </div>
</div>


    <!-- Loading message -->
    <p v-if="loading" class="text-center text-gray-500 mt-4">
      Loading products...
    </p>
  </section>
</template>

<script setup>
import {onMounted,ref } from "vue";
import axios from "axios";
import { productStore } from "../store/cart";
let btn = productStore();
let items = ref([])

onMounted(async () => {
  const res = await  axios.get('https://fakestoreapi.com/products')
  console.log(res.data)
  items.value = res.data

});

</script>
