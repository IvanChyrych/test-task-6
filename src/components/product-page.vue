<template>
  <div class="product-page">

<img :src="require('../assets/img/' + product.image)" alt="" />

    <p>Product name {{ product.name }}</p>

    <p>price:{{ product.price }}</p>

    <p>available:{{ product.available }}</p>
    <button @click="addToCart">add to cart</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "product",
  computed: {
    ...mapGetters(["PRODUCTS"]),
    product() {
      let result = {};
      let vm = this;
      this.PRODUCTS.map(function (item) {
        if (item.article === vm.$route.query.product) {
          result = item;
        }
      });
      return result;
    },
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style>
</style>