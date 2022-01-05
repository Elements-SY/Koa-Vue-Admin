<!--  -->
<template>
  <div class="upload-container">
    <el-upload
      class="upload-demo"
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-change="uploadEvent"
      :file-list="fileList"
      :auto-upload="false"
    >
      <i class="el-icon-upload" slot="trigger"></i>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
  </div>
</template>

<script>
import { lrzFile } from "@/utils";
export default {
  name: "upLoad",
  props: {},
  data() {
    return {
      fileList: [],
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleRemove(file, fileList) {
      // console.log(file, fileList);
    },
    handlePreview(file) {
      // console.log(file);
    },
    uploadEvent(file) {
      let _this = this;
      // console.log("压缩前", file.raw);
      // 压缩上传文件
      lrzFile(file.raw)
        .then((res) => {
          this.getBase64(res).then(function (res) {
            let sub = res.indexOf(",");
            _this.$emit("getPicData", res.slice(sub + 1), file.raw);
            // console.log("压缩后转Base64：", res.slice(sub + 1));
          });
        })
        .catch((err) => {
          this.$message.error("上传压缩失败");
        });
    },
    // 获取图片转base64
    getBase64(file) {
      return new Promise(function (resolve, reject) {
        const reader = new FileReader();
        let imgResult = "";
        reader.readAsDataURL(file);
        reader.onload = function () {
          imgResult = reader.result;
        };
        reader.onerror = function (error) {
          reject(error);
        };
        reader.onloadend = function () {
          resolve(imgResult);
        };
      });
    },
  },
};
</script>
<style lang='scss' scoped>
.upload-container {
  .el-icon-upload {
    font-size: 34px;
    color: #999;
  }
}
</style>