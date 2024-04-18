<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>

  </header>

  <main class="font-jura">
    <h3 class="bg-primary-100 font-jura text-xl  p-8 xl:bg-secondary-200">PRIMARY 100</h3>
    <h3 class="bg-primary-200  p-8">PRIMARY 200</h3>
    <h3 class="bg-secondary-100  p-8">SECONDARY 100</h3>
    <h3 class="bg-secondary-200  p-8">SECONDARY 200</h3>
  </main>
</template>

<!-- <style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
