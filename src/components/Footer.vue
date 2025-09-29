<template>
  <footer class="bg-white text-gray-500 py-10">
    <div
      class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left"
    >
      <!-- Store Location -->
      <div>
        <h3 class="text-black font-bold mb-4">STORE LOCATION</h3>
        <address class="not-italic">
          9066 Green Lake Drive<br />
          Chevy Chase, MD<br />
          20815
        </address>
        <p class="mt-2">
          Monday – Saturday:
          <span class="font-semibold">8:00 am – 4:00pm</span>
        </p>
        <p>Sunday: <span class="font-semibold">9:00 am – 5:00pm</span></p>
      </div>

      <!-- Information -->
      <div>
        <h3 class="text-black font-bold mb-4">INFORMATION</h3>
        <ul class="space-y-2">
          <li v-for="(item, i) in infoLinks" :key="i">
            <a
              href="#"
              class="hover:text-green-600 transition-colors duration-300"
            >
              {{ item }}
            </a>
          </li>
        </ul>
      </div>

      <!-- My Account -->
      <div>
        <h3 class="text-black font-bold mb-4">MY ACCOUNT</h3>
        <ul class="space-y-2">
          <li v-for="(item, i) in accountLinks" :key="i">
            <a
              href="#"
              class="hover:text-green-600 transition-colors duration-300"
            >
              {{ item }}
            </a>
          </li>
        </ul>
      </div>

      <!-- Categories -->
      <div>
        <h3 class="text-black font-bold mb-4">CATEGORIES</h3>
        <ul class="space-y-2">
          <li v-for="(item, i) in categoryLinks" :key="i">
            <a
              href="#"
              class="hover:text-green-600 transition-colors duration-300"
            >
              {{ item }}
            </a>
          </li>
        </ul>
      </div>

      <!-- Payment & Social -->
      <div>
        <h3 class="text-black font-bold mb-4">ACCEPT PAYMENT</h3>
        <div class="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
          <img
            v-for="(logo, i) in paymentLogos"
            :key="i"
            :src="logo.src"
            :alt="logo.alt"
            class="h-8"
          />
        </div>
        <h3 class="text-black font-bold mb-4">FOLLOW US</h3>
        <div class="flex gap-4 justify-center md:justify-start">
          <a
            v-for="(icon, i) in socialLinks"
            :key="i"
            href="#"
            class="transform hover:scale-110 transition-transform duration-300"
          >
            <img :src="icon.src" :alt="icon.alt" class="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>

    <div
      class="mt-10 border-t border-gray-200 pt-4 text-center text-gray-400 text-sm"
    >
      Copyright © 2025
      <span class="text-green-600">Freshio</span>. All Rights Reserved.
    </div>
  </footer>
</template>

<script setup>
const infoLinks = ["About us", "Blog", "Check out", "Contact", "Service"];
const accountLinks = ["My Account", "Contact", "Shopping cart", "Shop"];
const categoryLinks = [
  "Fruits & Vegetables",
  "Dairy Products",
  "Package Foods",
  "Beverage",
  "Health & Wellness",
];

const paymentLogos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png",
    alt: "MasterCard",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    alt: "PayPal",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg",
    alt: "AmEx",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg",
    alt: "Bitcoin",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/16/Western_Union_logo.svg",
    alt: "Western Union",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
    alt: "Visa",
  },
];

const socialLinks = [
  {
    src: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    alt: "Facebook",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    alt: "YouTube",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    alt: "Twitter",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    alt: "Instagram",
  },
];
</script>
