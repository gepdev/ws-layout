<template>
  <ul class="divide-y divide-gray-400 px-2">
    <li v-for="item of list" :key="item.id" class="flex justify-between py-5">
      <div>
        <div class="font-bold">
          {{ item.id }}
        </div>
        <div class="text-sm font-light">
          {{ Object.keys(item)[1] }} {{ item.corsie }}
          {{ Object.keys(item)[2] }} {{ item.posizioni }}
        </div>
      </div>
      <div class="flex-none flex items-center">
        <NuxtLink :to="`/layout/elenco/${item.id}`" class="focus:outline-none">
          <i class="material-icons">chevron_right</i>
        </NuxtLink>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 'L1', corsie: 10, posizioni: 1000 },
        { id: 'L2', corsie: 10, posizioni: 1000 },
        { id: 'L3', corsie: 10, posizioni: 1000 },
        { id: 'L4', corsie: 10, posizioni: 1000 },
        { id: 'L5', corsie: 10, posizioni: 1000 },
        { id: 'L6', corsie: 10, posizioni: 1000 },
        { id: 'L7', corsie: 10, posizioni: 1000 },
        { id: 'L8', corsie: 10, posizioni: 1000 },
        { id: 'L9', corsie: 10, posizioni: 1000 }
      ]
    }
  }
}
</script>
