<template>
  <a :href="`${url}`">
    <div :class="{
      'bg-primary-200 text-secondary-200': isFrontend,
      'bg-secondary-200 text-secondary-100': !isFrontend,
    }">
      <img :src="`../public/${img}`" alt="img" class="w-full h-48 object-cover">
      <div class="p-4">
        <h4 class="font-bold text-xl">{{ title }}</h4>
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