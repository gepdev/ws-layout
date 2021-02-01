<template>
  <div class="flex h-full divide-x divide-gray-200">
    <Sidebar title="Elenco" :visible="false" class="flex-none h-full">
      <template #content>
        <List />
      </template>
    </Sidebar>
    <Sidebar :title="title" :visible="true" class="flex-none h-full">
      <template #content>
        <div class="px-2">
          <section class="mb-5">
            <header class="mb-5">
              <h1 class="font-bold">Dimensioni corsia</h1>
            </header>
            <BaseInput
              :value="layoutData.width"
              placeholder="valore della lunghezza in m"
            />
            <BaseInput
              :value="layoutData.length"
              placeholder="valore della larghezza in m"
            />
            <BaseInput
              :value="layoutData.height"
              placeholder="valore dell'altezza in m"
            />
          </section>
          <section class="mb-5">
            <header class="mb-5">
              <h1 class="font-bold">Numero corsie</h1>
            </header>
            <BaseInput
              :value="layoutData.lanes"
              placeholder="numero delle corsie per il layout"
            />
            <BaseSelect
              :options="layoutCodeOptions"
              selected="A-Z"
              placeholder="tipo di codifica per ogni corsia"
            />
          </section>
          <section class="mb-5">
            <header class="mb-5">
              <h1 class="font-bold">Campate per corsia</h1>
            </header>
            <BaseInput
              :value="layoutData.span"
              placeholder="numero delle corsie per il layout"
            />
          </section>
          <section class="mb-5">
            <header class="mb-5">
              <h1 class="font-bold">Ripiani</h1>
            </header>
            <BaseInput
              :value="layoutData.shelfs"
              placeholder="numero delle corsie per il layout"
            />
          </section>
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
  asyncData({ params }) {
    const slug = params.id
    const title = `LAYOUT ${slug}`
    return { slug, title }
  },
  data() {
    return {
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
