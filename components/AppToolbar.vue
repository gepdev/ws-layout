<template>
  <h1 class="p-1 text-sm font-bold">
    {{ pageTitle }}
  </h1>
</template>

<script>
export default {
  computed: {
    pageTitle () {
      return this.$store.state.pageTitle
    }
  }
}
</script>
