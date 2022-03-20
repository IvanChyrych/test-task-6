<template>
  <div class="v-select">
    <p @click="areOprionsVisible = !areOprionsVisible">
      {{ selected }}
    </p>
    <div class="options" v-if="areOprionsVisible">
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "vSelect",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default: "",
    },
  },
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.areOprionsVisible = false;
    },
  },
  data() {
    return { areOprionsVisible: false };
  },
};
</script>

<style>
</style>