<template>
    <div class="container">
      <div class="image-wrapper">
        <!-- <img :src="props.image" :alt="props.title"> -->
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Detail',
    props: {
      item: Object
    },
    computed: {
      ...mapGetters([
        'getProducts'
      ]),
    },
    created () {
      console.log(this.getProducts)
    }
  }
  </script>
  