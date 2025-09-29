<template>
    <NavBar />
    <div class="container mx-auto p-4">
        <!-- Cart Header -->
        <button class=""></button>
        <div class="text-center mb-6">
            <h2 class="text-3xl font-bold text-gray-800">Your Cart</h2>
        </div>

        <!-- Cart Items -->
        <div class="space-y-4 mb-6" v-for="product in item.items" :key="product.id">
            <div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
                <img :src="product.image" alt="Item Image" class="w-20 h-20 object-cover rounded-md">
                <div class="flex-1 ml-4">
                    <p class="text-lg font-semibold text-gray-700">{{ product.title }}</p>
                    <p class="text-sm text-gray-500">Price: ${{ product.price }}</p>
                    <div class="flex items-center mt-2">
                        <button class="px-3 py-1 bg-gray-200 hover:bg-gray-400 cursor-pointer rounded-md text-gray-700" @click="item.decreaseQty(product)">-</button>
                        <span class="mx-2 text-lg text-black">{{ product.quantity }}</span>
                        <button class="px-3 py-1 bg-gray-200 rounded-md text-gray-700 cursor-pointer hover:bg-gray-400" @click="item.increaseQty(product)">+</button>
                    </div>
                </div>
                <div class="text-lg font-semibold text-gray-700">${{ (product.price* product.quantity).toFixed(2) }}</div>
            </div>

        </div>

        <!-- Cart Summary -->
        <div class="bg-white p-4 rounded-lg shadow-md mb-6">
            <div class="flex justify-between mb-2">
                <p class="text-lg font-medium text-gray-700">Subtotal</p>
                <p class="text-lg font-medium text-gray-700">${{ (item.totalCount).toFixed(2) }}</p>
            </div>
            <div class="flex justify-between mb-2">
                <p class="text-lg font-medium text-gray-700">Discount</p>
                <p class="text-lg font-medium text-gray-700">- $5.00</p>
            </div>
            <div class="flex justify-between mb-2">
                <p class="text-lg font-medium text-gray-700">Total</p>
                <p class="text-lg font-medium text-gray-700">$15.97</p>
            </div>
        </div>

        <!-- Coupon Section -->
        <div class="flex mb-6 ml-4">
            <input type="text" placeholder="Enter coupon code" class="w-44 p-2 border border-gray-300 rounded-md mr-2">
            <!-- Adjusted width here -->
            <button class="px-4 py-2 bg-red-500 text-white rounded-md">Apply Coupon</button>
        </div>

        <!-- Checkout Button -->
        <div class="text-center">
            <button class="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md text-xl">Proceed to
                Checkout</button>
        </div>
    </div>
    <Footer />
</template>


<script setup>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import { productStore } from '../store/cart';


const item = productStore();
</script>