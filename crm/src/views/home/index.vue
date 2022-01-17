<template>
  <div class="home_container">
    <!-- <h1 style="text-align: center; color: red">{{ $route.meta.title }}</h1> -->
    <el-card class="box-card">
      <search-select @searchSelect="searchSelect" />
      <translateLanguage v-if="mark === 'translate'" />
      <upLoad v-else @getPicData="getPicData" />
    </el-card>
    <el-dialog :title="title" :visible.sync="showDialog" width="30%" center>
      <div>
        <el-image
          style="width: 100px; height: 100px"
          :src="url"
          :preview-src-list="srcList"
        >
        </el-image>
        <h6>识别结果{{ tip }}：</h6>
        <el-tag v-for="(item, index) in content" :key="index" type="danger">{{
          item.name
        }}</el-tag>
      </div>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="showDialog = false">取 消</el-button>
        <el-button type="primary" @click="showDialog = false">确 定</el-button>
      </span> -->
    </el-dialog>
  </div>
</template>
<script>
import searchSelect from "@/components/select";
import translateLanguage from "@/components/translateLanguage";
import upLoad from "@/components/upLoad";
import orcList from "./mixins";
export default {
  mixins: [orcList],
  name: "home",
  components: {
    searchSelect,
    translateLanguage,
    upLoad,
  },
  data() {
    return {
      mark: "", // select选择应用程序
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
  // 方法集合
  methods: {
    // select选择应用程序
    searchSelect(val) {
      this.mark = val;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/home/index.scss";
</style>
