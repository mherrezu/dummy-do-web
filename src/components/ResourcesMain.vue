<template>
  <div id="frontend" class="h-screen" :class="{
    'bg-secondary-200': isFrontend,
    'bg-primary-200': !isFrontend
  }">
      <div class="flex items-center justify-between p-10">
          <div class="w-fit h-full border-2 rounded-full"  :class="{
                    'border-primary-200': isFrontend,
                    'border-secondary-200': !isFrontend,
                  }">
              <a href="/">
                  <img src="/src/assets/svg/arrow-left.svg" alt="left-arrow" class="stroke-current text-red-500 w-10 h-10">
                </a>
          </div>
          <div>
              <CTA size="4xl" 
              :color="isFrontend ? 'front-title-color' : 'back-title-color'" 
              :label="isFrontend ? 'frontend' : 'backend'"/>
          </div>
      </div>
      <div class="flex justify-center items-center p-10">
        <div class="grid grid-cols-3 gap-8">
          <!-- {{ keysToDisplay }} -->
          <CTA v-for="(key, index) in keysToDisplay" :key="`res-${index}`"
         size="xl" :color="isFrontend ? 'primary' : 'secondary'"
         transition="on" :label="key"/>
          <!-- <CTA size="xl" color="primary" transition="on" label="frameworks" />
          <CTA size="xl" color="primary" transition="on" label="libraries"/>
          <CTA size="xl" color="primary" transition="on" label="UX/UI"/>
          <CTA size="xl" color="primary" transition="on" label="best practices"/>
          <CTA size="xl" color="primary" transition="on" label="GitHub"/>
          <CTA size="xl" color="primary" transition="on" label="inspiration"/>
          <CTA size="xl" color="primary" transition="on" label="who to follow"/>
          <CTA size="xl" color="primary" transition="on" label="interview Q&A"/> -->
        </div>
      </div>
  </div>
  </template>
  
<script setup>
import CTA from '@/components/CTA.vue'
import resourcesFE from '@/data/resourcesFE.json'
import resourcesBE from '@/data/resourcesBE.json'
</script>

<script>
export default {
  components: {
    CTA,
  },
  props: {
    isFrontend: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      resFE: resourcesFE,
      resBE: resourcesBE,
    }
  },
  computed: {
    keysToDisplay() {
      return this.isFrontend ? Object.keys(resourcesFE) : Object.keys(resourcesBE)
    }
  }
}
</script>
  