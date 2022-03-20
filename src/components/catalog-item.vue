<template>
  <div class="catalog" @click="productClick">
    <img :src="require('../assets/img/' + product_data.image)" alt="" />

    <h2>{{ product_data.name }}</h2>
    <p>price:{{ product_data.price }}</p>
    <p>article:{{ product_data.article }}</p>
    <p>available:{{ product_data.available }}</p>
    <button @click="addToCart">add to cart</button>
  </div>
</template>

<script>
export default {
  name: "catalog",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
    productClick(){
      this.$emit('productClick', this.product_data.article)
    }
  },
};
</script>

<style >
.catalog {
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
