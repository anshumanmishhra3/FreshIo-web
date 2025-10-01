<template>
    <NavBar />
  <section class="py-12 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <!-- Left Wishlist Section -->
      <div class="bg-white p-6 rounded-lg shadow-lg mb-8 md:w-2/3">
        <h1 class="text-3xl font-semibold text-gray-900 mb-4">Your Wishlist</h1>
        <p class="text-gray-600 mb-6">Here are the items you've added to your wishlist. Don't miss out on your favorites!</p>
  
        <div class="space-y-6" v-for="item in product.items" :key="item.id">
          <!-- Example of a Wishlist Item -->
          <div class="wishlist-item flex items-center justify-between p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <img
              :src="item.image"
              alt="item 1"
              class="w-20 h-20 object-cover rounded-md"
            />
            <div class="item-info ml-4 flex-1">
              <h2 class="text-xl font-medium text-gray-800">{{ item.title }}</h2>
              <p class="text-sm text-gray-500">{{ item.description }}</p>
            </div>
            <div class="item-action flex items-center space-x-4">
              <button class="bg-green-500 text-white py-2 px-4 cursor-pointer rounded-md hover:bg-green-600 transition duration-200"
              @click="product.addToCart(item)">
                Add to Cart
              </button>
              <button class="text-red-500 hover:text-red-600 cursor-pointer transition duration-200">
                <i class="fas fa-trash"></i> Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-lg md:w-1/3 ml-0 md:ml-8">
        <h1 class="text-3xl font-semibold text-gray-900 mb-4">Why Choose Our Organic Products?</h1>
        <p class="text-gray-600 mb-4">We offer a variety of fresh and high-quality organic products to help you lead a healthier life.</p>
        <ul class="list-disc list-inside text-gray-600 space-y-2">
          <li>Fresh and organic produce directly from the farm</li>
          <li>Free from pesticides and harmful chemicals</li>
          <li>Supporting from the items and displayed </li>
        </ul>
        <button class="bg-green-500 cursor-pointer text-white py-3 px-6 rounded-lg mt-6 hover:bg-green-600 transition duration-200">
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

const product = productStore();

</script>
