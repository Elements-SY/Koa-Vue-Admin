<template>
  <div class="interview_container">
    <h1 style="text-align: center; color: red">{{ $route.meta.title }}</h1>
  </div>
</template>

<script>
export default {
  name: "interview_index",
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "~@/styles/interview/index.scss";
</style>