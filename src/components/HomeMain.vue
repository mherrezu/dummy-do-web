<template>
    <div class="flex justify-center items-center">
      <div class="w-1/2 flex justify-center items-center bg-secondary-200 h-screen">
        <a href="/Frontend">
          <CTA size="4xl" color="frontend-home" transition="on">Frontend</CTA>
        </a>
      </div>
      <div class="w-1/2 flex justify-center items-center bg-primary-200 h-screen">
        <a href="/Backend">
          <CTA size="4xl" color="backend-home" transition="on">Backend</CTA>
        </a>
      </div>
    </div>
</template>
  
<script setup>
import CTA from './CTA.vue'
</script>