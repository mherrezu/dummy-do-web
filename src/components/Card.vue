<template>
  <a :href="`${url}`" target="_blank">
    <div :class="{
      'bg-primary-200 text-secondary-200': isFrontend,
      'bg-secondary-200 text-secondary-100': !isFrontend,
      }" 
      class="h-96 flex flex-col transform rounded-xl hover:shadow-2xl transition duration-300 hover:scale-105">
      <div class=" h-3/5 w-full">
        <img :src="`/${img}`" alt="img" class="w-full h-full object-cover rounded-t-xl bg-slate-50">
      </div>
      <div class=" h-2/5 p-4">
        <div class="flex flex-row align-middle">
          <h4 class="font-bold text-xl">{{ title }}</h4>
          <img v-if="language === 'spanish'" :src="'/src/assets/img/spanish.png'" class="h-8 m-2" />
        </div>
        <p class="text-base">{{ description }}</p>
      </div>
    </div>
  </a>
</template>

<script>
  export default {
    props: {
      url: {
        type: String,
        default: ''
      },
      img: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      language: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      isFrontend: {
        type: Boolean,
        default: true
      }
    }
  }
</script>