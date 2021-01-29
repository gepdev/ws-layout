<template>
  <div>
    index
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'LAYOUT'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.title
        }
      ]
    }
  },
  beforeMount () {
    this.$store.dispatch('changePageTitle', this.title)
  }
}
</script>
