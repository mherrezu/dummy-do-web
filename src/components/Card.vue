<template>
  <a :href="`${url}`">
    <div class="bg-white">
      <img :src="`../public/${img}`" alt="img" class="w-full h-48 object-cover">
      <div>
        <h4>{{ title }}</h4>
        <p>{{ description }}</p>
      </div>
    </div>
  </a>
</template>

<script>
  export default {
    props: {
      // resource: {
      //   type: Object,
      //   default: () => {}
      // }
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
      }
    }
  }
</script>