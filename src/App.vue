<script setup>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <!-- Navbar sticky on any page -->
  <NavBar />
  <div>
    <!-- Routerview is dynamic and changes -->
    <RouterView />
  </div>
  <Footer />
</template>

<style></style>
