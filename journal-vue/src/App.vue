<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import Footer from "./components/Footer.vue";
</script>

<template>
  <main>
    <NavBar/>
    <RouterView />
  </main>
</template>