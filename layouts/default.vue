<template>
  <div class="h-full flex">
    <Navigation class="w-20 h-screen flex-none" />
    <div class="flex flex-col flex-grow">
      <AppToolbar
        class="w-full bg-gray-400 align-middle text-center uppercase"
      />
      <div class="w-full h-full">
        <transition name="fade">
          <Nuxt />
        </transition>
      </div>
    </div>
  </div>
</template>

<style>
@layer components {
  body {
    @apply bg-gray-200;
  }
  * {
    scrollbar-width: thin;
    scrollbar-color: #4a5568 #cbd5e0;
  }

  /* Works on Chrome/Edge/Safari */
  *::-webkit-scrollbar {
    width: 0.5rem;
  }
  *::-webkit-scrollbar-track {
    background-color: #cbd5e0;
  }
  *::-webkit-scrollbar-thumb {
    background: #4a5568;
  }
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
