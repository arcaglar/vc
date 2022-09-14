<template>
  <div class="container">
    <Tab :data="categories" />
    <!-- <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">Error while fetching posts: {{ $fetchState.error.message }}</p>
    <div v-else>
      <pre> {{ categories }} </pre>
      <pre> {{ products }} </pre>
    </div> -->
  </div>
</template>

<script>
import Tab from '@/components/Tab'

export default {
  name: 'IndexPage',
  components: {
    Tab
  },
  data () {
    return {
      products: [],
      categories: []
    }
  },
  async fetch () {
    await this.$axios.get('/api/products')
      .then(response => {
        this.products = response.data
      })
    await this.$axios.get('/api/products/categories')
      .then(response => {
        this.categories = response.data
      })
  }
}
</script>
