<template>
  <div class="directive_container">
    <el-tabs type="border-card">
      <el-tab-pane label="Vue directive描述">
        <directive-article />
      </el-tab-pane>
      <el-tab-pane label="自定义指令的使用">
        <v-directive />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import directiveArticle from "./template/article";
import vDirective from "./template/directive"
export default {
  name: "directive",
  components: {
    directiveArticle,
    vDirective,
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
.directive_container {
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
  .directive{
    
  }
}
</style>