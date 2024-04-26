<template>
  <div id="frontend" class="min-h-screen" :class="{
    'bg-secondary-200': isFrontend,
    'bg-primary-200': !isFrontend
  }">
      <div class="flex items-center p-10 gap-2">
          <div class="w-fit h-full border-4 border-secondary-100 rounded-full">
              <a href="/">
                  <img src="/src/assets/svg/arrow-left.svg" alt="left-arrow" class="w-10 h-10" />
                </a>
          </div>
          <div>
              <CTA size="4xl"
              :color="isFrontend ? 'front-title-color' : 'back-title-color'"
              :label="isFrontend ? 'frontend' : 'backend'"/>
          </div>
      </div>
      <div class="flex justify-center items-center p-4 sm:p-10">
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <li v-for="(key, index) in keysToDisplay" :key="`res-${index}`">
            <CTA @click="handleResources"
              :size="!showResources ? 'xl' : 'md'" 
              :color="(isFrontend ? 'primary' : 'secondary')"
              transition="on" :label="key.title" class="font-bold"/>
          </li>
          </ul>
        </div>
        <section v-if="showResources" class="mx-auto container p-4 sm:p-0">
          <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 last:p-8">
            <li v-for="(resource, index) in frontResources" :key="`res-${index}`">
              <Card :url="resource.url" :img="resource.img" :title="resource.title" :language="resource.language"
                :description="resource.description" :isFrontend="isFrontend"/>
            </li> 
          </ul>
        </section>
  </div>
  </template>
  
<script setup>
import CTA from '@/components/CTA.vue'
import Card from '@/components/Card.vue'
import resourcesFE from '@/data/resourcesFE.json'
import resourcesBE from '@/data/resourcesBE.json'
</script>

<script>
export default {
  components: {
    CTA,
    Card
  },
  props: {
    isFrontend: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      resFE: resourcesFE,
      resBE: resourcesBE,
      showResources: false,
    }
  },
  computed: {
    // keysToDisplay() {
    //   return this.isFrontend ? Object.keys(resourcesFE) : Object.keys(resourcesBE)
    // },
    keysToDisplay() {
        const keys = this.isFrontend ? Object.keys(resourcesFE) : Object.keys(resourcesBE);
        return keys.map(key => ({ title: key, isActive: false }));
    },
    frontResources() {
      return [...this.resFE[this.keysToDisplay]]
    }
  },
  // methods: {
  //   handleResources() {
  //     this.showResources = !this.showResources,
  //     // Add functionality for isActive
  //   },
  // }
}
</script>
  