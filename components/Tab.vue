<template>
  <div class="container">
    <ul class="tab-bar">
      <li :class="[{'tab-bar__item--active': getCategory === item}, 'tab-bar__item']" v-for="item in data" @click="setCategory(item)">
        {{ item }}
        <span v-if="getCategory === item" class="close-icon">
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
        </span>
      </li>
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
