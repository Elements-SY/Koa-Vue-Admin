<template>
  <div class="register_container">
    <!-- video full background -->
    <div class="video_wrap">
      <video class="video" autoplay loop muted>
        <source src="@/assets/images/bg/video.mp4" type="video/mp4" />
      </video>
    </div>
    <!-- user account form -->
    <div class="register_wrap">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="rule_form"
      >
        <el-form-item label-width="70px" prop="accountName">
          <span class="form_label_slot" slot="label">账&nbsp;号</span>
          <el-input v-model.trim="ruleForm.accountName"></el-input>
        </el-form-item>
        <el-form-item label-width="70px" prop="pass">
          <span class="form_label_slot" slot="label">密&nbsp;码</span>
          <el-input
            type="password"
            v-model.trim="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label-width="70px" prop="checkPass">
          <span class="form_label_slot" slot="label"
            >确&nbsp;认&nbsp;密&nbsp;码</span
          >
          <el-input
            type="password"
            v-model.trim="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item class="submit_footer">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { validAccount, validPwd } from "@/utils/validate.js";
export default {
  name: "register",
  components: {},
  data() {
    var validAccountName = (rule, value, callback) => {
      if (!value) {
        callback(new Error("用户名不能为空"));
      } else if (validAccount(value) == false) {
        callback(
          new Error("请输入4到16位（字母，数字，下划线，减号）组合的用户名")
        );
      } else {
        callback();
      }
    };
    var validPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (validPwd(value) == false) {
        callback(new Error("请输入数字、大写字母、小写字母组成的6位密码"));
      } else {
        if (this.ruleForm.checkPass !== "" && validPwd(value)) {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var twiceValidPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (validPwd(value) == false) {
        callback(new Error("请输入数字、大写字母、小写字母组成的6位密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        accountName: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        accountName: [{ validator: validAccountName, trigger: "blur" }],
        pass: [{ validator: validPass, trigger: "blur" }],
        checkPass: [{ validator: twiceValidPass, trigger: "blur" }],
      },
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang='scss' scoped>
@import "~@/styles/register/index.scss";
</style>