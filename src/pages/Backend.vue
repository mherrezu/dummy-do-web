<template>
  <header class="font-bold">
    <Header />
  </header>
  <main class="font-jura min-h-screen">
    <section>
      <!-- <ResourcesMain :isFrontend="false" /> -->
      <Loading />
    </section>
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
// import ResourcesMain from '@/components/ResourcesMain.vue';
import Loading from '@/components/Loading.vue';
</script>