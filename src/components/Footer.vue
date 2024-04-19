<template>
    <footer class="bg-secondary-100 text-primary-200 py-4">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <div>
          <p>© {{ currentYear }} dummy do web</p>
        </div>
        <div>
          <router-link to="/privacy-policy" class="mx-2">privacy policy</router-link>
          <router-link to="/terms-of-service" class="mx-2">terms of service</router-link>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  }
  </script>