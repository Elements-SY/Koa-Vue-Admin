<template>
  <div class="home_container">
    <!-- <h1 style="text-align: center; color: red">{{ $route.meta.title }}</h1> -->
    <el-card class="box-card">
      <search-select @searchSelect="searchSelect" />
      <translateLanguage v-if="mark === 'translate'" />
      <upLoad v-else @getPicData="getPicData" />
    </el-card>
    <el-dialog
      :title="title"
      :visible.sync="showDialog"
      width="30%"
      center
    >
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
      title: "OCR识别",
      tip: "",
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
    getPicData(pic, file) {
      if (this.mark === "text") {
        this.title = "OCR文字识别";
        this.tip = "";
        // 通用文字识别
        let params = {
          client_id: "qbI91UF9968FH9K63ip2Hy9S",
          client_secret: "iftOCPXztCNAav4c8KQtzc9RkWDmCECz",
          image: pic,
          mark: this.mark,
          file: file,
        };
        // console.log(params)
        this.getBaiduAccessToken(params);
      } else if (this.mark === "IDCardFront") {
        this.title = "OCR身份证正面识别";
        this.tip = "";
        // 身份证识别(正)
        let params = {
          client_id: "qbI91UF9968FH9K63ip2Hy9S",
          client_secret: "iftOCPXztCNAav4c8KQtzc9RkWDmCECz",
          image: pic,
          id_card_side: "front",
          mark: this.mark,
          file: file,
        };
        this.getBaiduAccessToken(params);
      } else if (this.mark === "IDCardBack") {
        this.title = "OCR身份证背面识别";
        this.tip = "";
        // 身份证识别(反)
        let params = {
          client_id: "qbI91UF9968FH9K63ip2Hy9S",
          client_secret: "iftOCPXztCNAav4c8KQtzc9RkWDmCECz",
          image: pic,
          id_card_side: "back",
          mark: this.mark,
          file: file,
        };
        this.getBaiduAccessToken(params);
      } else if (this.mark === "animal") {
        this.title = "OCR动物识别";
        this.tip = "";
        // 动物识别
        let params = {
          client_id: "qbI91UF9968FH9K63ip2Hy9S",
          client_secret: "iftOCPXztCNAav4c8KQtzc9RkWDmCECz",
          image: pic,
          mark: this.mark,
          file: file,
        };
        this.getBaiduAccessToken(params);
      } else if (this.mark === "plant") {
        this.title = "OCR植物识别";
        this.tip = "";
        // 植物识别
        let params = {
          client_id: "qbI91UF9968FH9K63ip2Hy9S",
          client_secret: "iftOCPXztCNAav4c8KQtzc9RkWDmCECz",
          image: pic,
          mark: this.mark,
          file: file,
        };
        this.getBaiduAccessToken(params);
      } else if (this.mark === "dish") {
        this.title = "OCR菜品识别";
        this.tip = "";
        // 菜品识别
        let params = {
          client_id: "qbI91UF9968FH9K63ip2Hy9S",
          client_secret: "iftOCPXztCNAav4c8KQtzc9RkWDmCECz",
          image: pic,
          mark: this.mark,
          file: file,
        };
        this.getBaiduAccessToken(params);
      } else if (this.mark === "ingredient") {
        this.title = "OCR果蔬识别";
        this.tip = "(温馨提示：如果果蔬识别没有找到你也可以尝试一下植物识别)";
        // 果蔬识别
        let params = {
          client_id: "qbI91UF9968FH9K63ip2Hy9S",
          client_secret: "iftOCPXztCNAav4c8KQtzc9RkWDmCECz",
          image: pic,
          mark: this.mark,
          file: file,
        };
        this.getBaiduAccessToken(params);
      } else {
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/home/index.scss";
</style>
