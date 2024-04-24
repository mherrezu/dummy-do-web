<!-- Navbar.vue -->
<template>
    <nav class="font-jura bg-secondary-100 p-4 sm:p-8">
      <div class="flex items-center justify-between h-22">
          <!-- Logo -->
          <div class="flex items-center">
            <img src="/src/assets/img/Logo - Purple.png" alt="Logo" class="h-12 ml-4">
            <p class="pl-3  text-primary-200 text-md selection:select-none">dummy do web</p>
          </div>

          <div class="hidden md:block">
            <h2 class="text-secondary-200 text-xl">Junior made easy</h2>
          </div>
          
          <!-- Links -->
          <div class="hidden md:block">
            <div class="flex items-baseline space-x-4 text-primary-200 text-md">
              <a href="/">
                <CTA size="navbar" color="still-color" transition="on" label="home" />
              </a>
              <a href="/about">
                <CTA size="navbar" color="still-color" transition="on" label="about" />
              </a>
                <!-- <CTA size="navbar" color="still-color" transition="on" label="contact" /> -->
            </div>
          </div>
          <!-- Mobile menu button-->
          <div class="absolute top-4 right-4 flex items-center sm:hidden">
            <button type="button" @click="toggleMenu"
              class="relative inline-flex items-center justify-center rounded-md p-2 text-primary-200 hover:bg-secondary-200 hover:text-primary-200 "
              aria-controls="mobile-menu">
              <svg :class="{
                'hidden h-8 w-8': !isMenuOpen,
                'block h-8 w-8': isMenuOpen,
              }" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg :class="{
                'hidden h-8 w-8': isMenuOpen,
                'block h-8 w-8': !isMenuOpen,
              }" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Mobile menu, show/hide based on menu state. -->
        <div v-show="!isMenuOpen" class="sm:hidden h-screen" id="mobile-menu">
          <div class="flex flex-col items-end text-primary-200 text-md mt-8">
            <a href="/">
              <CTA size="navbar" color="still-color" transition="on" label="home" />
            </a>
            <a href="/about">
              <CTA size="navbar" color="still-color" transition="on" label="about" />
            </a>
              <!-- <CTA size="navbar" color="still-color" transition="on" label="contact" /> -->
          </div>
        </div>
    </nav>
</template>

<script setup>
import CTA from './CTA.vue'
</script>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        isMenuOpen: false
      }
    },
    methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
  }
</script>