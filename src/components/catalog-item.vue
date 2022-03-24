<template>
  <div class="catalog" >
 
    <p>Валюта: {{ product_data.Cur_Name }} </p>
    <p>Курс: {{ product_data.Cur_OfficialRate }} </p>

   
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
