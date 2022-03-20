<template>
  
  <div class="catalog">
    <v-header />
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="cart">Cart: {{ CART.length }}</div>
    </router-link>

    <div class="catalog__select">
      <v-select
        :selected="selected"
        :options="categories"
        @select="sortByCategories"
      />
    </div>

    <h1>Catalog</h1>
    <div class="catalog__products">
      <catalog-item
        v-for="product in filteredProducts"
        :key="product.article"
        v-bind:product_data="product"
        @addToCart="addToCart"
        @productClick="productClick"
      />
    </div>

    <div class="catalog__slider">
      <div class="range-slider">
        <input
          type="range"
          min="10"
          max="1000"
          step="10"
          v-model.number="minPrice"
          @change="setRangeSlider"
        />
        <input
          type="range"
          min="10"
          max="1000"
          step="10"
          v-model.number="maxPrice"
          @change="setRangeSlider"
        />
      </div>
    </div>

    <div class="catalog__range-values">
      <p>min: {{ minPrice }}</p>
      <p>max: {{ maxPrice }}</p>
    </div>
  </div>
</template>

<script>
import vHeader from "./v-header.vue";

import catalogItem from "../components/catalog-item.vue";
import vSelect from "./v-select.vue";

import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "catalog",
  components: {
    catalogItem,
    vSelect,
    vHeader,
  },
  props: {
    msg: String,
  },

  data() {
    return {
      categories: [
        { name: "all", value: "a" },
        { name: "balls", value: "b" },
        { name: "glues", value: "g" },
        { name: "rubbers", value: "r" },
      ],
      selected: "all",
      sortedProducts: [],
      minPrice: 0,
      maxPrice: 1000,
    };
  },

  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    sortByCategories(category) {
      let vm = this;
      this.sortedProducts = [...this.PRODUCTS];
      this.sortedProducts = this.sortedProducts.filter(function (item) {
        return item.price >= vm.minPrice && item.price <= vm.maxPrice;
      });
      if (category) {
        this.sortedProducts = this.sortedProducts.filter(function (e) {
          vm.selected === category.name;
          return e.category === category.name;
        });
      }
    },
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.sortByCategories();
    },
    searchProductBySerchValue(value) {
      this.sortedProducts = [...this.PRODUCTS];
      if (value) {
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          return item.name.toLowerCase().includes(value.toLowerCase());
        });
      } else {
        this.sortedProducts = this.PRODUCTS;
      }
    },
    productClick(article) {
      this.$router.push({name: 'product', query: {'product': article}})
    },
  },
  watch: {
    SEARCH_VALUE() {
      this.searchProductBySerchValue(this.SEARCH_VALUE);
    },
  },
  computed: {
    ...mapGetters(["CART", "PRODUCTS", "SEARCH_VALUE"]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },

  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        this.sortByCategories();
        this.searchProductBySerchValue(this.SEARCH_VALUE);
      }
    });
  },
};
</script>

<style >
.catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
}

.catalog__products {
  display: flex;
}

.catalog__filters {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.catalog__slider {
  display: flex;
  justify-content: center;
}

.cart {
  display: flex;
  justify-content: center;
}

.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}
.range-slider svg,
.range-slider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 0;
}
input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
</style>
