<template>
  <div class="h-full flex">
    <Navigation class="w-1/12 h-screen" />
    <div class="w-11/12">
      <AppToolbar class="w-full bg-gray-400 align-middle text-center" />
      <div class="container mx-auto">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<style>
@layer components {
  body {
    @apply bg-gray-200
  }
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

</style>
