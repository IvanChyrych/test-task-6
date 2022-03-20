<template>
  <div class="v-header">
    <router-link :to="{ name: 'main-page' }">
      <h2>Main Page</h2>
    </router-link>

    <input type="text" v-model="searchValue" />
    <button class="searchButton" @click="search(searchValue)">search</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "header",
  data() {
    return {
      searchValue: "",
    };
  },
  computed: {
    ...mapGetters(["SEARCH_VALUE"]),
  },
  methods: {
    ...mapActions(["GET_SEARCH_VALUE_FROM_VUEX"]),

    search(value) {
      this.GET_SEARCH_VALUE_FROM_VUEX(value);
      this.$router.push("/catalog");
    },
  },
};
</script>

<style>
.v-header {
  background-color: green;
  color: white;
  display: flex;
  justify-content: center;
}
</style>