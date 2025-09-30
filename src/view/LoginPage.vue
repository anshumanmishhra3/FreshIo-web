<template>
  <section class="bg-gray-50 min-h-screen flex items-center justify-center">
    <!-- Main Container -->
    <div class="flex flex-col md:flex-row items-center justify-center bg-white rounded-xl shadow-lg  p-8 md:p-16 max-w-4xl w-full">
      
      <!-- Left Hero Section -->
      <div class="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/rev-slider_h2_img2.png"
          alt="hero image"
          class="w-48 md:w-64 object-cover"
        />
      </div>

      <!-- Right Login Section -->
      <div class="md:w-1/2 w-full flex flex-col items-center">
        <h1 class="text-3xl font-extrabold text-gray-800 mb-6">Welcome Back</h1>
        <h2 class="text-xl font-medium text-gray-600 mb-4">Please log in to continue</h2>

        <!-- Login Form -->
        <form @submit.prevent="handleForm" class="w-full space-y-6">
          
          <!-- username Input -->
          <div>
            <label for="user" class="block text-lg font-semibold text-gray-700">Username Address</label>
            <input
              type="text"
              id="user"
              name="user"
              v-model="user"
              class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
              placeholder="Enter your username"
              required
            />
            
              
          </div>
          <!-- Email Input -->
          <div>
            <label for="email" class="block text-lg font-semibold text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              v-model="email"
              class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
              placeholder="Enter your email"
              required
            />
          </div>

          <!-- Password Input -->
          <div>
            <label for="password" class="block text-lg font-semibold text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              name="password"
              class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
              placeholder="Enter your password"
              required
            />
          </div>

          <!-- Submit Button -->
          <div>
            <button
              type="submit"
              class="w-full cursor-pointer bg-green-600 text-white p-4 rounded-lg text-lg font-semibold transition duration-300 transform hover:bg-green-700 hover:scale-105 focus:outline-none"
            >
              Log In
            </button>
          </div>
          <!-- Links -->
          <div class="flex justify-between text-sm text-gray-600">
            <a href="#" class="hover:text-green-600">Forgot Password?</a>
            <a href="#" class="hover:text-green-600">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { authStore } from '../store/auth';
const auth = authStore();
let email = ref('');
let user = ref('');
let password = ref('');
function handleForm(){
    auth.handleLogin(email.value,user.value,password.value);
}
</script>

