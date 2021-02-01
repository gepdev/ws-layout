<template>
  <div class="flex h-full divide-x divide-gray-200">
    <Sidebar :title="title" :visible="true" class="flex-none h-full">
      <template #header>
        <section class="my-5">
          <BaseInputInline placeholder="Inserisci il layout da cercare" />
        </section>
      </template>
      <template #content>
        <div class="px-2">
          <List />
        </div>
      </template>
      <template #actions>
        <NuxtLink
          to="/layout/elenco"
          class="transition bg-gray-800 text-gray-100 m-2 px-4 py-2 uppercase rounded-md shadow text-sm font-bold hover:bg-gray-900"
        >
          Chiudi
        </NuxtLink>
      </template>
    </Sidebar>
    <div class="flex-grow flex justify-center items-center">
      <LayoutCanvas :title="title" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'CERCA',
      layoutData: {
        width: 1,
        length: 1,
        height: 5,
        lanes: 13,
        span: 10,
        shelfs: 8
      },
      layoutCodeOptions: [
        {
          label: 'Codifica A-Z',
          value: 'A-Z'
        },
        {
          label: 'Codifica 0-9',
          value: '0-9'
        }
      ]
    }
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
