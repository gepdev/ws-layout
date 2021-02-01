<template>
  <div class="flex h-full">
    <Sidebar title="Elenco" class="flex-none h-full">
      <template #content>
        <List />
      </template>
    </Sidebar>
    <div class="flex-grow flex justify-center items-center">
      <BaseButton label="Nuovo Layout" to="/layout/nuovo" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { title: 'ELENCO' }
  },
  head() {
    return {
      title: this.title,
      meta: [{ hid: 'title', name: 'title', content: this.title }]
    }
  },
  beforeMount() {
    this.$store.dispatch('changePageTitle', this.title)
  }
}
</script>
