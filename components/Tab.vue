<template>
  <div class="container">
    <ul class="tab-bar">
      <li :class="[{'tab-bar__item--active': getCategory === item}, 'tab-bar__item']" v-for="item in data" @click="setCategory(item)"> {{ item }} </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Tab',
  props: {
    data: Array
  },
  computed: {
    ...mapGetters([
      'getCategory'
    ])
  },
  methods: {
    ...mapActions([
      'setCategory'
    ])
  }
}
</script>
