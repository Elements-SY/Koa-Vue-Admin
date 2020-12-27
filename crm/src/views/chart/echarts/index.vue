<template>
  <div class="echarts_container">
    <el-row style="background: #fff; padding: 16px 16px 0">
      <mix-chart />
    </el-row>
    <el-row style="background: #fff; padding: 16px 16px 0; margin-bottom: 32px">
      <line-chart />
    </el-row>
  </div>
</template>

<script>
import MixChart from "@/components/Charts/MixChart";
import LineMarker from "@/components/Charts/LineMarker";
import LineChart from "@/components/Charts/LineChart";
import resize from "@/components/Charts/mixins/resize";
export default {
  name: "echarts",
  components: {
    MixChart,
    LineMarker,
    LineChart,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>