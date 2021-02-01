<template>
  <div class="flex h-full justify-center items-center">
    <NuxtLink
      to="/layout/nuovo"
      class="transition bg-gray-800 text-gray-100 m-2 px-4 py-1 uppercase rounded-md shadow text-sm font-bold hover:bg-gray-900"
    >
      Nuovo Layout
    </NuxtLink>
    <NuxtLink
      to="/layout/elenco"
      class="transition bg-gray-800 text-gray-100 m-2 px-4 py-1 uppercase rounded-md shadow text-sm font-bold hover:bg-gray-900"
    >
      Visualizza tutti
    </NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'LAYOUT'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.title
        }
      ]
    }
  },
  beforeMount() {
    this.$store.dispatch('changePageTitle', this.title)
  }
}
</script>
