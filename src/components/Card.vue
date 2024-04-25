<template>
  <a :href="`${url}`">
    <div :class="{
      'bg-primary-200 text-secondary-200': isFrontend,
      'bg-secondary-200 text-secondary-100': !isFrontend,
      }" 
      class="transform rounded-xl hover:shadow-2xl transition duration-300 hover:scale-105">
      <img :src="`../public/${img}`" alt="img" class="w-full h-48 object-cover rounded-t-xl">
      <div class="p-4">
        <div class="flex flex-row align-middle">
          <h4 class="font-bold text-xl">{{ title }}</h4>
          <!--TO DO: dynamic language-->
          <img :src="'/src/assets/img/spanish.png'" class="h-8 m-2" />
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