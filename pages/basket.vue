<template>
    <div class="container">
      <div class="wrapper">
        <ul>
          <li v-for="item in getBasket">
            <div class="basket-card">
              <img class="basket-card__image" :src="item.image" :alt="item.title">
              <div class="basket-card__content">
                <span class="basket-card__description">{{ item.title }}</span>
                <span class="basket-card__description">{{ item.category }}</span>
                <span class="basket-card__description">{{ item.price }}</span>
                <span class="basket-card__description">
                  <Counter :count="parseInt(item.count)" />
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Counter from '@/components/Counter'

  export default {
    name: 'Basket',
    components: {
      Counter
    },
    computed: {
      ...mapGetters([
        'getBasket'
      ])
    },
  }
</script>