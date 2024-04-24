<template>
    <div v-if="!showFrontend && !showBackend" class="flex flex-col sm:flex-row h-screen w-full">
      <div class="w-full sm:w-1/2 h-full flex justify-center items-center bg-secondary-200">
          <CTA @onClick="handleShowSection('frontend')" size="4xl" color="frontend-home" transition="on" class="font-bold">Frontend</CTA>
      </div>
      <div class="w-full sm:w-1/2 h-full flex justify-center items-center bg-primary-200">
          <CTA @onClick="handleShowSection('backend')" size="4xl" color="backend-home" transition="on" class="font-bold">Backend</CTA>
      </div>
    </div>
    <section>
      <!-- Cuando el Backend esté hecho hay que añadir " || (showBackend && !sendFront)" la v-if -->
      <ResourcesMain v-if="(showFrontend && sendFront)" 
      :isFrontend="sendFront ? true : false" />
      <Loading v-if="(showBackend && !sendFront)" />
    </section>
</template>
  
<script setup>
import CTA from '@/components/CTA.vue'
import ResourcesMain from '@/components/ResourcesMain.vue';
import Loading from './Loading.vue';
</script>
<script>
export default {
  components: {
    CTA,
    ResourcesMain
  },
  data() {
    return {
      sendFront: true,
      showFrontend: false,
      showBackend: false
    }
  },
  methods: {
    handleShowSection(event) {
      if (event === 'frontend') {
        this.showFrontend = true;
        this.sendFront = true;
        this.showBackend = false;
        if (this.showFrontend = true)
          this.$router.push('/frontend');
      }
      if (event === 'backend') {
        this.showBackend = true;
        this.sendFront = false;
        this.showFrontend = false;
        if (this.showBackend = true)
          this.$router.push('/backend');
      }
    },
  }
}
</script>