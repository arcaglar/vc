<template>
  <div class="container">
    <Tab :data="categories" />
    <ul class="product-list">
      <li class="product-list__item" v-for="item in filteringData">
        <NuxtLink :to="{ path: '/detail', query: { id: item.id }}">
          <Card :item="item" />
        </NuxtLink>
      </li>
    </ul>
    <!-- <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">Error while fetching posts: {{ $fetchState.error.message }}</p>
    <div v-else>
      <pre> {{ categories }} </pre>
      <pre> {{ products }} </pre>
    </div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Tab from '@/components/Tab'
import Card from '@/components/Card'

export default {
  name: 'IndexPage',
  components: {
    Tab,
    Card
  },
  data () {
    return {
      categories: []
    }
  },
  computed: {
    ...mapGetters([
      'getCategory',
      'getProducts'
    ]),
    filteringData() {
      if (this.getCategory !== '') {
        this.setProducts(this.getProducts)
        return this.getProducts.filter(product => product.category === this.getCategory)
      } else {
        this.setProducts(this.getProducts)
        return this.getProducts
      }
    }
  },
  methods: {
    ...mapActions([
      'setProducts'
    ])
  },
  async fetch () {
    await this.$axios.get('/api/products')
      .then(response => {
        this.setProducts(response.data)
      })
    await this.$axios.get('/api/products/categories')
      .then(response => {
        this.categories = response.data
      })
  }
}
</script>
