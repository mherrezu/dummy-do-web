<template>
    <header class="font-bold">
      <Header />
    </header>
    <main class="font-jura min-h-screen">
      <div class="flex flex-col sm:flex-row h-screen w-full">
        <div class="w-full sm:w-1/2 h-full flex justify-center items-center bg-secondary-200">
          <router-link to="/frontend">
            <CTA size="4xl" color="frontend-home" transition="on" class="font-bold">frontend</CTA>
          </router-link>
        </div>
        <div class="w-full sm:w-1/2 h-full flex justify-center items-center bg-primary-200">
          <router-link to="/backend">
            <CTA size="4xl" color="backend-home" transition="on" class="font-bold">backend</CTA>
          </router-link>
        </div>
      </div>
    </main>
    <footer>
      <Footer />
    </footer>
</template>
  
<script setup>
import CTA from '@/components/CTA.vue'
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue'
</script>