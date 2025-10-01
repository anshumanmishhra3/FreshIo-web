<template>
 <div>
    <h1>Hello World</h1>
 </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import { authStore } from '../store/auth';

const proudct = proudctStore();
proudct.forEach((ele)=>{
   console.log(ele);
   
})
</script>