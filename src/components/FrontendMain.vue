<template>
<div id="frontend" class="h-screen m-0 bg-secondary-200">
    <div class="flex items-center justify-between p-10">
        <div>
            <a href="/">
                <!-- <img src="/src/components/icons/ArrowLeft.png" alt="ArrowLeft" class="w-10"> -->
            </a>
        </div>
        <div>
            <CTA size="4xl" color="front-title-color" label="frontend"/>
        </div>
    </div>
    <div class="flex justify-center items-center p-10">
      <div class="grid grid-cols-3 gap-8">
        <CTA size="xl" color="primary" transition="on" label="fundamentals"/>
        <CTA size="xl" color="primary" transition="on" label="frameworks" />
        <CTA size="xl" color="primary" transition="on" label="libraries"/>
        <CTA size="xl" color="primary" transition="on" label="UX/UI"/>
        <CTA size="xl" color="primary" transition="on" label="best practices"/>
        <CTA size="xl" color="primary" transition="on" label="GitHub"/>
        <CTA size="xl" color="primary" transition="on" label="inspiration"/>
        <CTA size="xl" color="primary" transition="on" label="who to follow"/>
        <CTA size="xl" color="primary" transition="on" label="interview Q&A"/>
      </div>
    </div>
</div>
</template>
  
<script setup>
import CTA from '@/components/CTA.vue'
</script>
