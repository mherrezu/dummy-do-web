<template>
  <div class="bg-primary-100">
    <div class="flex items-center p-10 gap-2">
          <div class="w-fit h-full border-4 border-secondary-100 rounded-full">
              <a href="/">
                  <img src="/src/assets/svg/arrow-left.svg" alt="left-arrow" class="w-10 h-10" />
                </a>
          </div>
          <div>
              <CTA size="4xl" color="about-title-color" label="about"/>
          </div>
    </div>
    <div class="flex justify-center items-center p-10">
        <div class="grid grid-cols-2 gap-8">
          <div v-for="(person, index) in persons" :key="index" class="bg-white p-8 shadow-md max-w-md transform rounded-xl hover:shadow-2xl transition duration-300 hover:scale-105">
            <img :src="person.image" :alt="person.name" class="w-32 h-32 rounded-full mx-auto mb-4">
            <h2 class="text-xl font-semibold text-primary-200 mb-2 text-center">{{ person.name }}</h2>
            <p class="text-secondary-100">{{ person.description }}</p>
            <div class="mt-4 flex flex-row justify-center">
              <a v-for="(social, index) in person.socialLinks" :key="index" :href="social.url" class="text-secondary-200 bg-primary-200 hover:text-primary-200 hover:bg-secondary-200 mr-4">{{ social.name }}</a>
            </div>
          </div>
        </div>
      </div>
  </div>
  </template>
  
<script setup>
  import CTA from '@/components/CTA.vue'
</script>
<script>
  export default {
    data() {
      return {
        persons: [
          {
            name: 'María Herrezuelo',
            image: 'public/mherrezuelo.jpeg',
            description: 'Web developer blah blah blah blah blah blah blah blah blah blah',
            socialLinks: [
              { name: 'GitHub', url: 'https://github.com/mherrezu', icon:'github'},
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mherrezuelo/', icon: 'linkedin'}
            ]
          },
          {
            name: 'Marina Jiménez',
            image: 'public/mjimenez.jpeg',
            description: 'Web developer blah blah blah blah blah blah blah blah blah blah',
            socialLinks: [
              { name: 'GitHub', url: 'https://github.com/marinajimnz' , icon:'github'},
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/marina-jimenez-mendez/', icon: 'linkedin'}
            ]
          }
        ]
      };
    }
  };
</script>
  
  