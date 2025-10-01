<template>
  <section>
    <div class="main-container">
      <!-- Left Wishlist Section -->
      <div class="container-1 custom-wishlist-left bg-green-100 p-8">
        <h1 class="text-2xl font-bold text-black mb-4">Your Wishlist</h1>
        <p class="text-gray-600">Here are the items you've added to your wishlist. Don't miss out on your favorites!</p>

        <div class="wishlist-items mt-6">
          <!-- Example of a Wishlist Item -->
          <div class="wishlist-item flex items-center justify-between bg-white p-4 mb-4 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="item 1"
              class="w-20 h-20 object-cover rounded"
            />
            <div class="item-info ml-4 flex-1">
              <h2 class="text-xl font-semibold text-black">Organic Apple</h2>
              <p class="text-sm text-gray-500">Fresh, organic apples straight from the farm.</p>
            </div>
            <div class="item-action flex items-center space-x-4">
              <button class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                Add to Cart
              </button>
              <button class="text-red-500 hover:text-red-600">
                <i class="fas fa-trash"></i> Remove
              </button>
            </div>
          </div>

          <!-- Repeat this block for other wishlist items -->
          <div class="wishlist-item flex items-center justify-between bg-white p-4 mb-4 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="item 2"
              class="w-20 h-20 object-cover rounded"
            />
            <div class="item-info ml-4 flex-1">
              <h2 class="text-xl font-semibold text-black">Organic Lettuce</h2>
              <p class="text-sm text-gray-500">Fresh, crisp lettuce, perfect for salads.</p>
            </div>
            <div class="item-action flex items-center space-x-4">
              <button class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                Add to Cart
              </button>
              <button class="text-red-500 hover:text-red-600">
                <i class="fas fa-trash"></i> Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Wishlist Section -->
      <div class="container-2 custom-wishlist-right bg-gray-100 p-8 flex flex-col mr-8">
        <h1 class="text-2xl font-bold text-black mb-4">Why Choose Our Organic Products?</h1>
        <p class="text-gray-600 mb-4">We offer a variety of fresh and high-quality organic products to help you lead a healthier life.</p>
        <ul class="list-disc list-inside text-gray-600">
          <li>Fresh and organic produce directly from the farm</li>
          <li>Free from pesticides and harmful chemicals</li>
          <li>Supporting local farmers and sustainable practices</li>
        </ul>
        <button class="bg-green-500 text-white py-3 px-6 rounded-lg mt-6 hover:bg-green-600">
          Explore All Products
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wishlist-item:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>

<script setup>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
</script>