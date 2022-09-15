<template>
    <div class="container">
      <div class="wrapper">
        <pre>{{ getBasket }}</pre>
      </div>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Basket',
    computed: {
      ...mapGetters([
        'getBasket'
      ])
    },
  }
</script>