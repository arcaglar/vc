<template>
    <div class="card">
        <img class="card__image" :src="item.image" :alt="item.title">
        <span class="card__description">{{ item.title }}</span>
        <span class="card__description">${{ item.price }}</span>
    </div>
</template>
  
  <script>
  export default {
    name: 'Card',
    props: {
      item: Object
    }
  }
  </script>
  