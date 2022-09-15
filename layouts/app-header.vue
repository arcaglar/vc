<template>
    <div class="header">
        <div class="container">
            <div class="header-inner">
                <NuxtLink :to="{ path: '/' }">
                    <img class="header__logo" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ziydsqwklaqebu7axgtu" alt="logo">
                </NuxtLink>
                <NuxtLink :to="{ path: '/basket' }">
                    <div class="header__basket">
                        Basket: {{ getBasket.length }}
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Header',
    computed: {
      ...mapGetters([
        'getBasket'
      ]),
    },
  }
</script>