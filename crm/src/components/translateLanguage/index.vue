<template>
  <div class="translate">
    <el-select
      class="select-word"
      v-model="from"
      placeholder="请选择"
      @change="fromTranslate"
    >
      <el-option
        v-for="item in fromLanguage"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-select
      class="select-word"
      v-model="to"
      placeholder="请选择"
      @change="toTranslate"
    >
      <el-option
        v-for="item in toLanguage"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <h6>{{ word ? content : "" }}</h6>
    <el-input
      type="textarea"
      v-model.trim="word"
      :clearable="true"
      :rows="2"
      placeholder="请输入内容"
      @input="inputChange"
    >
    </el-input>
  </div>
</template>
<script>
import { translate } from "@/http";
import { fromLanguage, toLanguage } from "./languagePack";
import md5 from "js-md5";
export default {
  name: "translateLanguage",
  data() {
    return {
      fromLanguage: fromLanguage,
      toLanguage: toLanguage,
      word: "",
      from: "zh",
      to: "en",
      content: "",
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  // 方法集合
  methods: {
    // 百度翻译
    baiduTranslateLanguage() {
      // 签名生成方法 APPID(appid)， 翻译 query(q，注意为UTF-8编码)，随机数(salt)+密钥
      let appid = "20211221001034666";
      let sign =
        appid + this.word + new Date().getTime() + "EJ_FsIKHiivqTDrNEyEi";
      let params = {
        from: this.from,
        to: this.to,
        appid: appid,
        q: this.word,
        salt: new Date().getTime(),
        sign: md5(sign),
      };
      translate(params).then((res) => {
        if (res.status === 200) {
          let result = res.data;
          if (result.trans_result.length) {
            this.content = result.trans_result[0].dst;
            console.log(result.trans_result[0].dst);
          } else {
            this.content = "";
          }
        }
      });
    },
    fromTranslate(word) {
      console.log(word);
      if (this.word) {
        this.baiduTranslateLanguage();
      }
    },
    toTranslate(word) {
      console.log(word);
      if (this.word) {
        this.baiduTranslateLanguage();
      }
    },
    inputChange() {
      if (this.word) {
        this.baiduTranslateLanguage();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
h6 {
  margin-bottom: 8px;
}
.select-word {
  margin-bottom: 8px;
}
.select-word:last-child{
  margin-left: 16px;
}
</style>