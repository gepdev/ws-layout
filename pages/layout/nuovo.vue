<template>
  <div class="flex h-full divide-x divide-gray-200">
    <Sidebar :title="title" :visible="true" class="flex-none h-full">
      <template #content>
        <div class="px-2">
          <section class="mb-5">
            <BaseInput
              :value="layoutData.name"
              placeholder="il nome del nuovo layout magazzino"
            />
          </section>
          <section class="mb-5">
            <header class="mb-5">
              <h1 class="font-bold">Dimensioni</h1>
            </header>
            <BaseInput
              :value="layoutData.width"
              placeholder="inserisci il valore della lunghezza in m"
            />
            <BaseInput
              :value="layoutData.length"
              placeholder="inserisci il valore della larghezza in m"
            />
            <BaseInput
              :value="layoutData.height"
              placeholder="inserisci il valore della altezza in m"
            />
          </section>
          <section class="mb-5">
            <header class="mb-5">
              <h1 class="font-bold">Carica da file</h1>
            </header>
            <BaseInputInline type="file" placeholder="Seleziona un file">
              <template #button>
                <button
                  class="focus:outline-none flex-none flex items-center justify-center p-2"
                  @click="emit('click')"
                >
                  <i class="material-icons">upload</i>
                </button>
              </template>
            </BaseInputInline>
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
  data() {
    return {
      title: 'Nuovo layout',
      layoutData: {
        name: '',
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
