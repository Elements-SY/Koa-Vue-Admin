<template>
  <div class="home_container">
       <h1 style="text-align: center; color: red">{{ $route.meta.title }}</h1>
       <search />
  </div>
</template>
<script>
import search from '@/components/search'
export default {
  name: "home",
  components: {
    search
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
  // 方法集合
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "~@/styles/home/index.scss";
</style>
