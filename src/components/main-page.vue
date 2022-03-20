<template>

  <div class="main-page">
    <v-header/>
    <router-link :to="{ name: 'catalog' }"><h1>Catalog</h1></router-link>
  </div>
</template>

<script>
import vHeader from './v-header.vue'
export default {
  name: "main-page",
  components:{
    vHeader
  }
};
</script>

<style>
</style>