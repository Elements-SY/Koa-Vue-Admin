<template>
  <div class="framework_container">
    <main>
      <section>
        <h3>Vue框架知识点</h3>
        <nav>
          <router-link
            v-for="(route, index) in vueChapter"
            :to="route.path"
            :key="index"
          >
            {{ route.title }}
          </router-link>
        </nav>
      </section>
    </main>
  </div>
</template>

<script>
import { navData } from "./data/index"; // Vue框架知识点path链接集合
export default {
  name: "FrameWork_index",
  data() {
    return {
      vueChapter: navData, // Vue框架知识点path链接集合
    };
  },
  created() {
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/FrameWork/index.scss";
</style>