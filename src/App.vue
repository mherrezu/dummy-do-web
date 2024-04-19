<script setup>
import Header from './components/Header.vue'
import HomeMain from './components/HomeMain.vue'
import FrontendMain from './components/FrontendMain.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <header class="font-bold">
      <Header />
    </header>
    
    <main class="font-jura font-bold">    
      <HomeMain />
      <FrontendMain />
  </main>
  <footer>
    <Footer />
  </footer>
</template>
