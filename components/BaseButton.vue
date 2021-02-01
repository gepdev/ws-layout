<template>
  <NuxtLink
    v-if="link"
    :to="to"
    class="transition bg-gray-800 text-gray-100 m-2 px-4 py-2 uppercase rounded-md shadow text-sm font-bold hover:bg-gray-900"
  >
    {{ label }}
  </NuxtLink>
  <button
    v-else
    class="transition bg-gray-800 text-gray-100 m-2 px-4 py-2 uppercase rounded-md shadow text-sm font-bold hover:bg-gray-900"
    @click="emit('click')"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      default: true
    },
    to: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: 'BaseButton'
    }
  }
}
</script>
