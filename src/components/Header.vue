<!-- Navbar.vue -->
<template>
    <nav class="font-jura font-bold bg-secondary-100">
        <!-- Logo -->
        <div class="flex items-center justify-between h-22">
          <div class="flex items-center">
            <img src="/src/assets/img/Logo - Purple.png" alt="Logo" class="h-12 ml-4">
            <p class="pl-3  text-primary-200 text-md selection:select-none">dummy do web</p>
          </div>

          <div class="hidden md:block">
            <h2 class="text-secondary-200">Junior made easy</h2>
          </div>
          
          <!-- Links -->
          <div class="hidden md:block">
            <div class="flex items-baseline space-x-4 p-8 text-primary-200 text-md">
              <router-link to="/" class="hover:text-primary-100 hover:underline">home</router-link>
              <router-link to="/about" class="hover:text-primary-100 hover:underline">about</router-link>
              <router-link to="/contact" class="hover:text-primary-100 hover:underline">contact</router-link>
            </div>
          </div>
        </div>

    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  }
  </script>