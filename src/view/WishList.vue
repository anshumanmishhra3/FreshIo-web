<template>
  <NavBar />
  <section class="py-16 bg-gray-100">
    <div class="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row md:space-x-8">
      
      <!-- Left Wishlist Section -->
      <div class="bg-white p-8 rounded-xl shadow-lg w-full md:w-2/3 space-y-8">
        <h1 class="text-3xl font-semibold text-gray-900">Your Wishlist</h1>
        <p class="text-gray-600 text-base mb-6">
          Here are the items you've added to your wishlist. Stay ahead of the game and grab your favorites!
        </p>

        <!-- Wishlist Items -->
        <div class="space-y-6" v-for="item in product.wishlist[userId]" :key="item.id">
          <div class="flex items-center gap-6 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300 bg-white">
            <img
              :src="item.image"
              alt="Product Image"
              class="w-20 h-20 object-cover rounded-lg shadow-sm flex-shrink-0"
            />
            <div class="flex-1">
              <h2 class="text-lg font-medium text-gray-900">{{ item.title }}</h2>
              <p class="text-sm text-gray-500 mt-1 line-clamp-2">{{ item.description }}</p>
            </div>
            <div class="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-4 ml-4">
              <button 
                class="bg-green-600 text-white cursor-pointer text-sm font-medium py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
                @click="product.addToCart(item)">
                Add to Cart
              </button>
              <button class="text-red-500 cursor-pointer hover:text-red-600 text-base transition">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Sidebar -->
      <div class="bg-white p-8 rounded-xl shadow-lg h-[28rem] w-full md:w-1/3 mt-12 md:mt-0 space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900">Why Choose Our Organic Products?</h2>
        <p class="text-gray-600 text-base">
          We offer a curated selection of premium organic products for your healthy lifestyle.
        </p>
        <ul class="list-disc list-inside space-y-2 text-gray-600 text-sm">
          <li>Fresh, locally sourced organic produce</li>
          <li>Free from harmful pesticides and chemicals</li>
          <li>Support sustainable farming practices</li>
        </ul>
        <button class="bg-green-600 cursor-pointer text-white py-3 px-6 rounded-md hover:bg-green-700 transition font-medium mt-4">
          Explore All Products
        </button>
      </div>
    </div>
  </section>
  <Footer />
</template>

<style scoped>
.wishlist-item:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}
</style>

<script setup>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import { productStore } from '../store/cart';
import { authStore } from '../store/auth';
import { onMounted } from 'vue';

const product = productStore();
const auth = authStore()
const userId = auth.user?.id;
onMounted(()=>{
  console.log(userId)
})


</script>
