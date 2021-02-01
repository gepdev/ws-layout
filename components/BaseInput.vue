<template>
  <div class="mb-2">
    <input
      :value="value"
      v-bind="$attrs"
      type="text"
      class="transition duration-500 w-full border focus:outline-none focus:shadow-none focus:border focus:border-gray-900 rounded border-solid border-gray-500 text-sm"
    />
    <div class="text-xs pl-2 text-gray-600">{{ placeholder }}</div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    placeholder: {
      type: String,
      default: 'placeholder'
    },
    value: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>
