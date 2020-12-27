<template>
  <div class="layout_container">
    <h1 style="text-align: center; color: red">{{ $route.meta.title }}</h1>
  </div>
</template>

<script>
export default {
  name: "layout_index",
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "~@/styles/layout/index.scss";
</style>