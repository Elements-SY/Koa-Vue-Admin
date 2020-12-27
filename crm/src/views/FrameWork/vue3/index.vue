<template>
  <div class="vue3_container">
    <vue-cli-article />
  </div>
</template>

<script>
import vueCliArticle from "./template/article";
export default {
  name: "vue3",
  components: {
    vueCliArticle,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss">
.vue3_container {
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
    code,
    pre {
      font-family: "Roboto Mono", Monaco, courier, monospace;
      font-size: 0.85em;
      background-color: #f8f8f8;
      -webkit-font-smoothing: initial;
      -moz-osx-font-smoothing: initial;
    }
    pre {
      border-radius: 2px;
      position: relative;
    }
    .code_block {
      pre code {
        overflow-x: auto;
        color: #525252;
        white-space: pre;
        padding: 1.2em 1.4em;
        font-size: 0.85rem;
        line-height: 1.6rem;
        display: block;
      }
      pre code .hljs-keyword{
        color: #d63200;
      }
    }
    div[class*="language-"] {
      position: relative;
      background-color: #f6f6f6;
      border-radius: 6px;
      padding: 1.2em 1.4em;
    }
    div[class*="language-"] pre,
    div[class*="language-"] pre[class*="language-"] {
      background: transparent;
      position: relative;
      z-index: 1;
    }
    code{
      font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New,
        monospace;
    }
    .token.keyword{
      color: #b92dbc;
    }
    .token.punctuation {
      color: #a8a9cc;
    }
    .token.string{
      color: #0a7a34;
    }
  }
}
</style>