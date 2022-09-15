<template>
    <div class="container">
      <div class="wrapper">
        <div class="image-wrapper">
          <img class="image-wrapper__item" :src="data.image" :alt="data.title">
        </div>
        <div class="content-wrapper">
          <h1 class="content-wrapper__title">{{ data.title }}</h1>
          <h1 class="content-wrapper__description">${{ data.price }}</h1>
          <div style="float: left; margin-top: 12px">
            <Counter/>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex'
  import Counter from '@/components/Counter'

  export default {
    name: 'Detail',
    data () {
      return {
        data: {}
      }
    },
    props: {
      item: Object
    },
    components: {
      Counter
    },
    computed: {
      ...mapGetters([
        'getProducts'
      ]),
    },
    mounted () {
      this.data = this.getProducts.filter(product => product.id == this.$route.query.id)[0]
    }
  }
  </script>
  