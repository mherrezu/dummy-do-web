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
      <FrontendMain v-if="showFrontend" />
      <BackendMain v-if="showBackend" />
    </section>
</template>
  
<script setup>
import CTA from '@/components/CTA.vue'
import FrontendMain from '@/components/FrontendMain.vue';
import BackendMain from '@/components/BackendMain.vue';
</script>
<script>
export default {
  components: {
    CTA,
    FrontendMain,
    BackendMain
  },
  data() {
    return {
      showFrontend: false,
      showBackend: false
    }
  },
  methods: {
    handleShowSection(event) {
      if (event === 'frontend') {
        console.log('showFrontend', this.showFrontend);
        this.showFrontend = !this.showFrontend;
        if (this.showFrontend = true)
          this.$router.push('/frontend');
      }
      if (event === 'backend') {
        console.log('showBackend', this.showBackend);
        this.showBackend = !this.showBackend;
        if (this.showBackend = true)
          this.$router.push('/backend');
      }
    },
  }
}
</script>