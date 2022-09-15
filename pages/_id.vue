<template>
    <div class="container">
      <div class="wrapper">
        <div class="image-wrapper">
          <img class="image-wrapper__item" :src="data.image" :alt="data.title">
        </div>
        <div class="content-wrapper">
          <h1 class="content-wrapper__title">{{ data.title }}</h1>
          <h1 class="content-wrapper__description">${{ data.price }}</h1>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex'

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
  