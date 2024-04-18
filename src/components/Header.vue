<!-- Navbar.vue -->
<template>
    <nav class="bg-[rgb(241,139,130)]">
      <div class="container mx-auto px-4">
        <!-- Logo -->
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <img src="/src/assets/Logo - Purple.png" alt="Logo" class="h-8">
            <p class="p-3 jura-bold text-[rgb(98,79,143)] select-none">dummy do web</p>
          </div>
          
          <!-- Links -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <router-link to="/" class="jura-bold text-[rgb(98,79,143)] hover:text-[rgb(242,188,215)] hover:underline px-3 py-2 rounded-md text-sm">home</router-link>
              <router-link to="/about" class="jura-bold text-[rgb(98,79,143)] hover:text-[rgb(242,188,215)] hover:underline px-3 py-2 rounded-md text-sm">about</router-link>
              <router-link to="/contact" class="jura-bold text-[rgb(98,79,143)] hover:text-[rgb(242,188,215)] hover:underline px-3 py-2 rounded-md text-sm ">contact</router-link>
            </div>
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