<template>
  <div class="vue-cli_container">
     <vue-cli-article />
  </div>
</template>

<script>
import vueCliArticle from "./template/article";
export default {
  name: "vue-cli",
  components: {
    vueCliArticle,
  },
  data() {
    return {

    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss">
.vue-cli_container {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  section {
    margin-bottom: 10px;
    border-bottom: 1px solid #e1ede1;
    padding: 15px 10px;
    h3 {
    }
    p {
      padding: 4px 0px;
    }
  }
}
</style>