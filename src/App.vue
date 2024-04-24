<script setup>
import Header from './components/Header.vue'
import HomeMain from './components/HomeMain.vue'
import Footer from './components/Footer.vue'
import Loading from './components/Loading.vue'

</script>

<template>
  <header class="font-bold">
    <Header />
  </header>
  <main class="font-jura min-h-screen">    
    <HomeMain />
  </main>
  <footer>
    <Footer />
  </footer>
</template>
