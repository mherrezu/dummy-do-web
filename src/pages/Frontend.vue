<template>
  <header class="font-bold">
    <Header />
  </header>
  <main class="font-jura min-h-screen">
    <section>
      <ResourcesMain :isFrontend="true" />
    </section>
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ResourcesMain from '@/components/ResourcesMain.vue';
</script>