<template>
<div class="h-screen m-0 bg-primary-200">
    <div class="flex items-center justify-between p-10">
        <div class="border border-secondary-200 rounded-full">
            <a href="/">
                <img src="/src/components/icons/ArrowLeft.png" alt="ArrowLeft" class="w-10 text-secondary-200">
            </a>
        </div>
        <div>
            <CTA size="4xl" color="back-title-color" label="backend"/>
        </div>
    </div>
    <router-link to="/app" class="hover:underline">
    </router-link>
    
    <div class="flex justify-center items-center p-10">
      <div class="grid grid-cols-3 gap-8">
        <CTA size="xl" color="secondary" transition="on" label="fundamentals"/>
        <CTA size="xl" color="secondary" transition="on" label="frameworks" />
        <CTA size="xl" color="secondary" transition="on" label="libraries"/>
        <CTA size="xl" color="secondary" transition="on" label="UX/UI"/>
        <CTA size="xl" color="secondary" transition="on" label="best practices"/>
        <CTA size="xl" color="secondary" transition="on" label="GitHub"/>
        <CTA size="xl" color="secondary" transition="on" label="inspiration"/>
        <CTA size="xl" color="secondary" transition="on" label="who to follow"/>
        <CTA size="xl" color="secondary" transition="on" label="interview Q&A"/>
      </div>
    </div>
</div>
</template>
  
<script setup>
import CTA from '@/components/CTA.vue'
</script>
