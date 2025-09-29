<template>
<NavBar />
    <div class="text-lg font-bold" v-for="product in item.items" :key="product.id">
        <h1>{{ product.price }}</h1>
    </div>
<Footer />
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import { productStore } from '../store/cart';


const item = productStore();
</script>