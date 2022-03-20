<template>
  <div class="cart">
    <div class="cart__back-to-catalog">
      <router-link :to="{ name: 'catalog' }">
        <button>Back to catalogg</button>
      </router-link>
    </div>

    <div class="cart__main">
      <h1>Cart</h1>
      <cart-item
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
      />
    </div>

    <div class="cart__total">
      <p>Total: {{ cartTotal }}</p>
      
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import cartItem from "../components/cart-item.vue";

export default {
  name: "cart",
  components: { cartItem },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  computed: {
    cartTotal() {
      let total = [];
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          total.push(item.quantity * item.price);
        }

        total = total.reduce(function (sum, el) {
          return sum + el;
        });
      }
      return total;
    },
  },

  methods: {
    ...mapActions(["DELETE_FROM_CART", "INCREMENT", "DECREMENT"]),

    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    increment(index) {
      this.INCREMENT(index);
    },
    decrement(index) {
      this.DECREMENT(index);
    },
  },
};
</script>

<style >
.cart {
  display: flex;
  flex-direction: column;
}
</style>
