<template>
    <div v-if="!showFrontend && !showBackend" class="flex justify-center items-center">
      <div class="w-1/2 flex justify-center items-center bg-secondary-200 h-screen">
          <CTA @onClick="handleShowSection('frontend')" size="4xl" color="frontend-home" transition="on">Frontend</CTA>
      </div>
      <div class="w-1/2 flex justify-center items-center bg-primary-200 h-screen">
          <CTA @onClick="handleShowSection('backend')" size="4xl" color="backend-home" transition="on">Backend</CTA>
      </div>
    </div>
    <section>
      <ResourcesMain v-if="(showFrontend && isFrontend) || (showBackend && !isFrontend)" 
      :isFrontend="isFrontend ? true : false" />
      <!-- <FrontendMain v-if="showFrontend" />
      <BackendMain v-if="showBackend" /> -->
    </section>
</template>
  
<script setup>
import CTA from '@/components/CTA.vue'
import FrontendMain from '@/components/FrontendMain.vue';
import BackendMain from '@/components/BackendMain.vue';
import ResourcesMain from '@/components/ResourcesMain.vue';
</script>
<script>
export default {
  components: {
    CTA,
    FrontendMain,
    BackendMain,
    ResourcesMain
  },
  data() {
    return {
      isFrontend: true,
      showFrontend: false,
      showBackend: false
    }
  },
  methods: {
    handleShowSection(event) {
      if (event === 'frontend') {
        this.showFrontend = true;
        this.isFrontend = true;
        this.showBackend = false;
        if (this.showFrontend = true)
          this.$router.push('/frontend');
      }
      if (event === 'backend') {
        this.showBackend = true;
        this.isFrontend = false;
        this.showFrontend = false;
        if (this.showBackend = true)
          this.$router.push('/backend');
      }
    },
  }
}
</script>