<template>
    <div class="container">
      <div class="wrapper">
        <ul>
          <li v-for="item in getBasket">
            <div class="basket-card">
              <div class="basket-card__remove" @click="removeItemOnBasket(item)">
                <svg viewPort="0 0 12 12" version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <line x1="1" y1="11" 
                          x2="11" y2="1" 
                          stroke="black" 
                          stroke-width="2"/>
                    <line x1="1" y1="1" 
                          x2="11" y2="11" 
                          stroke="black" 
                          stroke-width="2"/>
                </svg>
              </div>
              <img class="basket-card__image" :src="item.image" :alt="item.title">
              <div class="basket-card__content">
                <span class="basket-card__description">{{ item.title }}</span>
                <span class="basket-card__description">{{ item.category }}</span>
                <span class="basket-card__description">{{ item.price }}</span>
                <span class="basket-card__description">
                  <Counter :count="parseInt(item.count)" :disabled="true" />
                </span>
              </div>
            </div>
          </li>
        </ul>
        <div class="checkout-wrapper">
          <div class="checkout">
            <span class="checkout__text">Go to Checkout</span>
            <span class="checkout__total">${{ totalAmount }}</span>
          </div>
        </div>
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
        'getBasket',
        'totalAmount'
      ])
    },
    methods: {
      ...mapActions([
        'removeItemOnBasket'
      ])
    }
  }
</script>