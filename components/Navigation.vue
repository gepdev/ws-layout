<template>
  <nav class="bg-gray-800 dark:bg-gray-100 text-gray-200 text-xs text-center">
    <section aria-label="Logo" class="p-4 flex justify-center align-middle">
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>
    </section>
    <section aria-label="Elenco" class="flex flex-col mb-1">
      <h1 class="mb-2 font-bold">Layout</h1>
      <NuxtLink
        to="/layout/elenco"
        title="Elenco"
        class="flex flex-col align-middle justify-center mb-2 focus:outline-none hover:text-blue-300 transition-colors duration-500"
      >
        <i class="material-icons">apps</i>
        Elenco
      </NuxtLink>
      <NuxtLink
        to="/layout/nuovo"
        title="Nuovo"
        class="flex flex-col align-middle justify-center mb-2 focus:outline-none hover:text-blue-300 transition-colors duration-500"
      >
        <i class="material-icons">add</i>
        Nuovo
      </NuxtLink>
      <NuxtLink
        to="/layout/cerca"
        title="Cerca"
        class="flex flex-col align-middle justify-center mb-2 focus:outline-none hover:text-blue-300 transition-colors duration-500"
      >
        <i class="material-icons">search</i>
        Cerca
      </NuxtLink>
    </section>
    <section aria-label="Posizioni">
      <h1 class="mb-2 font-bold">Posizioni</h1>
      <NuxtLink
        title="Cerca"
        to="/posizioni/cerca"
        class="flex flex-col align-middle justify-center mb-2 focus:outline-none hover:text-blue-300 transition-colors duration-500"
      >
        <i class="material-icons">search</i>
        Cerca
      </NuxtLink>
    </section>
  </nav>
</template>

<script>
export default { name: 'Navigation' }
</script>
