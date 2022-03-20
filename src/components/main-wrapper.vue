<template>
  <div class="main-wrapper">
    

    <keep-alive><router-view> </router-view></keep-alive>

    
  </div>
</template>

<script>


export default {
  name: "main-wrapper",
 
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },

};
</script>

<style >
</style>
