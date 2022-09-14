<template>
  <div class="container">
    <ul class="tab-bar">
      <li class="tab-bar__item" v-for="item in data"> {{ item }} </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    data: Array
  }
}
</script>
