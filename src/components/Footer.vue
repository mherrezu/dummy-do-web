<template>
    <footer class="bg-secondary-100 text-primary-200 py-4">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <div>
          <p>© {{ currentYear }} dummy do web</p>
        </div>
        <div class="flex flex-row">
          <a href="https://github.com/mherrezu/dummy-do-web">
              <img src="/src/assets/svg/github.svg" alt="GitHub" color="text-primary-200" class="m-2">
          </a>
          <a href="https://www.instagram.com/dummydoweb/">
              <img src="/src/assets/svg/instagram.svg" alt="GitHub" color="text-primary-200" class="m-2">
          </a>
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