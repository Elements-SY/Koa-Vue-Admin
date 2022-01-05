<template>
  <div class="select-word">
    <el-select v-model="value" placeholder="请选择" @change="changeSelect">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>
<script>
import ocrWords from "./words";
export default {
  name: "searchSelect",
  data() {
    return {
      value: "",
      options: ocrWords,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  // 方法集合
  methods: {
    changeSelect(val) {
      this.$emit("searchSelect", val);
    },
  },
};
</script>
<style lang="scss" scoped>
.select-word{
   margin-bottom: 16px;
}
</style>