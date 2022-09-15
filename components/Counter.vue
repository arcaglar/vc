<template>
    <div class="counter">
        <button class="counter__decrement" @click="value--">-</button>
        <span class="counter__value">{{ value }}</span>
        <button class="counter__increment" @click="value++">+</button>
    </div>
</template>

<script>
  export default {
    name: 'Counter',
    data () {
      return {
        value: 0
      }
    },
    props: {
      count: Number
    },
    mounted() {
      if (this.count) {
        this.value = this.count
      }
    }
  }
</script>