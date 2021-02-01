<template>
  <section class="w-full h-full p-10 flex flex-col">
    <h1 class="flex-none">{{ title }}</h1>
    <div class="border border-gray-900 bg-white flex p-5 flex-grow h-full">
      <div
        v-for="col of columns"
        :key="col"
        class="flex flex-col flex-1 m-1 p-1 border border-dashed border-green-800 bg-green-200"
        role="button"
      >
        <div
          v-for="cell of cells"
          :key="cell"
          class="flex border border-dashed border-red-700 w-full flex-1"
          :class="{ 'mb-1': cell !== cells }"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'title'
    },
    columns: {
      type: Number,
      default: 10
    },
    cells: {
      type: Number,
      default: 10
    }
  }
}
</script>
