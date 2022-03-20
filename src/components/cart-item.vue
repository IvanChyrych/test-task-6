<template>
  <div class="cart-item">
    <img :src="require('../assets/img/' + cart_item_data.image)" alt="" />

    <h2>{{ cart_item_data.name }}</h2>
    <p>price:{{ cart_item_data.price }}</p>
    <p>article:{{ cart_item_data.article }}</p>
    <p>available: {{ cart_item_data.available }}</p>
    <p>quantity: {{ cart_item_data.quantity }}</p>
    <button @click="deleteFromCart">delete</button>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
export default {
  name: "cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  methods: {
    increment() {
      this.$emit("increment");
    },
    decrement() {
      this.$emit("decrement");
    },

    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
};
</script>

<style >
</style>
