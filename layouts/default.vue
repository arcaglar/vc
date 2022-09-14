<template>
    <div>
        <Header/>
        <nuxt/>
    </div>
</template>
  
<script>
  import Header from '@/layouts/app-header'
  export default {
    name: 'DefaultLayout',
    components: {
        Header
    }
  }
</script>
  