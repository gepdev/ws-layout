<template>
  <div class="mb-2">
    <div
      class="transition duration-500 w-full border focus:outline-none focus:shadow-none focus:border focus:border-gray-900 rounded border-solid border-gray-500 text-sm flex justify-between items-center"
    >
      <input
        :value="value"
        v-bind="$attrs"
        :type="type"
        class="flex-grow"
        :placeholder="placeholder"
      />
      <slot name="button">
        <button
          class="focus:outline-none flex-none flex items-center justify-center p-2"
          @click="emit('click')"
        >
          <i class="material-icons">search</i>
        </button>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'text'
    },
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
