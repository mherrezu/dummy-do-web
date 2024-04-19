<template>
  <button :type="buttonType" :class="buttonClasses" 
  :disabled="disabled" @click.stop="$emit('onClick', $event)" class="flex items-center justify-center rounded-lg">
    <slot v-if="!label"></slot>
    <p v-if="label">{{ label }}</p>
  </button>
</template>

<script>
export default {
  props: {
    buttonType: {
      type: String,
      default: "button",
    },
    color: {
      type: String,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "md",
    },
  },
  computed: {
    buttonClasses() {
      return {
        "px-2.5 py-2 gap-x-2 text-xs": this.size === "xs",
        "px-3.5 py-2 gap-x-2 text-sm": this.size === "sm",
        "px-4 py-2.5 gap-x-2 text-sm": this.size === "md",
        "px-4.5 py-2.5 gap-x-2 text-xl": this.size === "lg",
        "px-5 py-3 gap-x-2 text-xl": this.size === "xl",
        "px-7 py-4 gap-x-3 text-2xl": this.size === "xxl",

        "bg-slate-50 hover:bg-primary-200 text-secondary-100 hover:text-secondary-200 cursor-pointer":
          this.color === "primary" && !this.disabled,
        "cursor-not-allowed bg-gray-200 text-gray-400 stroke-current":
          this.color === "primary" && this.disabled,

        "bg-slate-50 hover:bg-secondary-200 text-secondary-100 hover:text-primary-200 cursor-pointer":
          this.color === "secondary" && !this.disabled,
        "cursor-not-allowed bg-slate-50 dark:bg-dark-gray-900/60 border border-gray-400 dark:border-dark-gray-300 text-gray-400 dark:text-gray-600 stroke-current":
          this.disabled && this.color === "secondary",

        "text-primary-200 hover:text-secondary-100 cursor-pointer":
          this.color === "no-color-primary" && !this.disabled,
        "text-secondary-100 hover:text-secondary-200 cursor-pointer":
          this.color === "no-color-secondary" && !this.disabled,
        "cursor-not-allowed bg-slate-50 dark:bg-dark-gray-900/60 border border-gray-400 dark:border-dark-gray-300 text-gray-400 dark:text-gray-600 stroke-current":
          this.disabled && this.color === "no-color",
      };
    },
  },
  methods: {
    handleClick($ev) {
      if (this.disabled) {
        $ev.stopPropagation();
      }
    },
  },
};
</script>
