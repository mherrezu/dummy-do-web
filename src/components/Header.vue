<!-- Navbar.vue -->
<template>
    <nav class="font-jura bg-secondary-100">
        <!-- Logo -->
        <div class="flex items-center justify-between h-22">
          <div class="flex items-center">
            <img src="/src/assets/img/Logo - Purple.png" alt="Logo" class="h-12 ml-4">
            <p class="pl-3  text-primary-200 text-md selection:select-none">dummy do web</p>
          </div>

          <div class="hidden md:block">
            <h2 class="text-secondary-200 text-xl">Junior made easy</h2>
          </div>
          
          <!-- Links -->
          <div class="hidden md:block">
            <div class="flex items-baseline space-x-4 p-8 text-primary-200 text-md">
              <router-link to="/" class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary-200 hover:text-secondary-100 duration-300">home</router-link>
              <router-link to="/about" class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary-200 hover:text-secondary-100 duration-300">about</router-link>
              <router-link to="/contact" class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary-200 hover:text-secondary-100 duration-300">contact</router-link>
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