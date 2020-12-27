<template>
  <div class="css_container">
    <h1 style="text-align: center; color: red">{{ $route.meta.title }}</h1>
  </div>
</template>

<script>
export default {
  name: "CSS",
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "~@/styles/style/index.scss";
</style>