<template>
    <div class="flex justify-center items-center">
      <div class="w-1/2 flex justify-center items-center bg-secondary-200 h-screen">
        <a href="/Frontend" class="hover:underline">
          <CTA size="xxl" color="no-color-primary" class="hover:underline">Frontend</CTA>
        </a>
        <!-- <button class="text-4xl text-primary-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary-200 hover:text-secondary-200 duration-300">frontend</button> -->
      </div>
      <div class="w-1/2 flex justify-center items-center bg-primary-200 h-screen">
        <a href="/Backend" class="hover:underline">
          <CTA size="xxl" color="no-color-secondary" class="hover:underline">Backend</CTA>
        </a>
        <!-- <button class="text-4xl text-secondary-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-secondary-200 hover:text-primary-200 duration-300">backend</button> -->
      </div>
      <component :is="currentView" />
    </div>
</template>
  
<script setup>
import CTA from './CTA.vue'
</script>