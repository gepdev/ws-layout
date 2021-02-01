<template>
  <section
    class="transition-width duration-500 ease-in-out p-2 bg-white flex flex-col"
    :class="[visibleSidebar ? 'w-2/6' : 'bg-gray-300 w-10']"
  >
    <header :class="{ 'h-full': !visibleSidebar }">
      <h1
        class="flex overflow-hidden items-center w-full"
        :class="{ 'flex-col h-full relative': !visibleSidebar }"
      >
        <button
          class="focus:outline-none flex justify-center items-center"
          @click="toggleVisibility"
        >
          <i
            :class="{
              'transform origin-center rotate-180': !visibleSidebar
            }"
            class="transition-transform duration-300 material-icons text-md"
          >
            chevron_left
          </i>
        </button>
        <div
          class="transform text-xs"
          :class="{
            'vertical-text': !visibleSidebar
          }"
        >
          {{ title }}
        </div>
      </h1>
    </header>
    <template v-if="visibleSidebar">
      <slot name="header" />
      <div class="relative w-full h-full mt-5 mb-10">
        <div class="absolute h-full w-full overflow-auto">
          <slot name="content">sidebar</slot>
        </div>
      </div>
      <div class="my-2">
        <slot name="actions" />
      </div>
    </template>
  </section>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    title: {
      type: String,
      default: 'title'
    },
    visible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      visibleSidebar: this.visible
    }
  },
  methods: {
    toggleVisibility() {
      this.visibleSidebar = !this.visibleSidebar
    }
  }
}
</script>

<style scoped>
.vertical-text {
  writing-mode: vertical-rl;
}
</style>
