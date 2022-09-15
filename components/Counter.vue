<template>
    <div class="counter">
        <button class="counter__decrement" :disabled="disabled" @click="changeValue(false)">-</button>
        <span class="counter__value">{{ value }}</span>
        <button class="counter__increment" :disabled="disabled" @click="changeValue(true)">+</button>
    </div>
</template>

<script>
  export default {
    name: 'Counter',
    data () {
      return {
        value: 1
      }
    },
    props: {
      count: Number,
      disabled: Boolean
    },
    methods: {
      changeValue(isIncrement) {
        if (isIncrement) {
          this.value++
        } else {
          this.value--
        }
        this.$emit("counter", this.value)
      }
    },
    mounted() {
      if (this.count) {
        this.value = this.count
      }
    }
  }
</script>