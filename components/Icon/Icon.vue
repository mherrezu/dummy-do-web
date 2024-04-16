<template>
  <component @click="$emit('click', $event)" :is="inlineSVG" :class="iconClasses" />
</template>

<script>
const getSVGUrl = (name) => {
  return new URL(`/assets/svg/${name}.svg?inline`, import.meta.url).href
}
export default {
  props: {
    height: {
      type: [Number, String],
      default: 6,
    },
    icon: {
      type: String,
      default: '',
    },
    width: {
      type: [Number, String],
      default: 6,
    },
    classes: {
      type: String,
      default: '',
    },
  },
  computed: {
    iconClasses() {
      return [this.classes, `h-${this.height}`, `w-${this.width}`]
    },
    async inlineSVG() {
      return this.icon !== '' && (await import(/* @vite-ignore */ `../../assets/svg/${this.icon}.svg?inline`)).default
    },
  },
}
</script>
