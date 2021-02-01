<template>
  <div>
    <select
      v-bind="$attrs"
      type="text"
      class="transition duration-500 w-full border focus:outline-none focus:shadow-none focus:border focus:border-gray-900 rounded border-solid border-gray-500 text-sm"
    >
      <option
        v-for="(option, key) in options"
        :key="key"
        :value="option.value"
        v-bind="{ selected: option.value === selected }"
      >
        {{ option.label }}
      </option>
    </select>
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
    selected: {
      type: String,
      required: false,
      default: ''
    },
    options: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
