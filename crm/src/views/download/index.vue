<template>
  <div class="download_container">
    <h1 style="text-align: center; color: red">{{ $route.meta.title }}</h1>
  </div>
</template>

<script>
export default {
  name: "download_index",
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "~@/styles/download/index.scss";
</style>