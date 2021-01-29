<template>
  <nav class="bg-gray-800 dark:bg-gray-100 text-gray-100 text-sm text-center">
    <section aria-label="Logo" class="p-4 flex justify-center align-middle">
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
    </section>
    <section aria-label="Layout" title="Layout" class="flex flex-col mb-1">
      <nuxt-link to="/elenco" class="flex flex-col align-middle justify-center mb-2">
        <i class="material-icons">apps</i>
        Elenco
      </nuxt-link>
      <nuxt-link to="/nuovo" class="flex flex-col align-middle justify-center mb-2">
        <i class="material-icons">add</i>
        Nuovo
      </nuxt-link>
      <nuxt-link to="/cerca" class="flex flex-col align-middle justify-center mb-2">
        <i class="material-icons">search</i>
        Cerca
      </nuxt-link>
    </section>
    <section aria-label="Posizioni">
      <nuxt-link to="/cerca">
        Cerca
      </nuxt-link>
    </section>
  </nav>
</template>

<script>
export default { name: 'Navigation' }
</script>
