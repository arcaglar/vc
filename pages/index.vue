<template>
  <Landing/>
</template>

<script>
export default {
  name: 'IndexPage',
  async created() {
    await this.$axios.get('/api/products')
  }
}
</script>
