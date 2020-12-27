<template>
  <div class="login_container">
    <div class="box">
      <div class="flowImage fixed-bg bg1">
        <div class="login_wrap">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            class="rule_form"
          >
            <el-form-item>
              <div class="login_title">
                <h1><strong>Admin</strong> Login Form</h1>
                <div class="description_banner">
                  <p>This is a free responsive login form made with Vue.</p>
                </div>
              </div>
            </el-form-item>
            <el-form-item prop="accountName">
              <input
                v-model.trim="ruleForm.accountName"
                placeholder="请输入登陆账号"
              />
            </el-form-item>
            <el-form-item prop="password">
              <input
                type="password"
                v-model.trim="ruleForm.password"
                placeholder="请输入登陆密码"
              />
            </el-form-item>

            <el-form-item class="submit_footer">
              <el-button type="primary" round @click="submitForm('ruleForm')"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="flowImage fixed-bg bg2">
        <!-- 日志 -->
        <section class="daily">
          <div class="container">
            <div class="user_days">
              <el-row :gutter="24">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12"> </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12"> </el-col>
              </el-row>
            </div>
          </div>
        </section>
      </div>
      <div class="flowContent fixed-bg bg3">
        <!-- 团队 -->
        <section class="team">
          <div class="container">
            <h3>
              Our
              <span>Agents</span>
            </h3>
            <el-row :gutter="24">
              <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="grid_content">
                  <div class="team_list">
                    <div class="team_user">
                      <div class="team_logo">
                        <img src="@/assets/images/team1.jpg" alt="" />
                      </div>
                      <div class="team_info">
                        <h4>Jane Watson</h4>
                        <p>Travel Agent</p>
                        <p>+21 345 287 4556</p>
                      </div>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="grid_content">
                  <div class="team_list">
                    <div class="team_user">
                      <div class="team_logo">
                        <img src="@/assets/images/team2.jpg" alt="" />
                      </div>
                      <div class="team_info">
                        <h4>Jane Watson</h4>
                        <p>Travel Agent</p>
                        <p>+21 345 287 4556</p>
                      </div>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="grid_content">
                  <div class="team_list">
                    <div class="team_user">
                      <div class="team_logo">
                        <img src="@/assets/images/team3.jpg" alt="" />
                      </div>
                      <div class="team_info">
                        <h4>Jane Watson</h4>
                        <p>Travel Agent</p>
                        <p>+21 345 287 4556</p>
                      </div>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="grid_content">
                  <div class="team_list">
                    <div class="team_user">
                      <div class="team_logo">
                        <img src="@/assets/images/team4.jpg" alt="" />
                      </div>
                      <div class="team_info">
                        <h4>Jane Watson</h4>
                        <p>Travel Agent</p>
                        <p>+21 345 287 4556</p>
                      </div>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </section>
      </div>
    </div>
    <div class="nav">
      <ul>
        <li>
          <a href="http://">首页</a>
        </li>
        <li>
          <a href="http://">贡献</a>
        </li>
        <li>
          <a href="http://">关于</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { validAccount, validPwd } from "@/utils/validate.js";
export default {
  name: "login",
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
    return {
      ruleForm: {
        accountName: "",
        password: "",
      },
      rules: {
        accountName: [{ validator: validAccountName, trigger: "blur" }],
        password: [{ validator: validPass, trigger: "blur" }],
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
          this.$store
            .dispatch("account/Login", this.ruleForm)
            .then((res) => {
              console.log("账号登录", res);
              if(res.data.code == 200){
              this.$message({
                type: "success",
                message: "登录成功",
              });
              this.$router.push({
                path: "/home",
              });
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style lang='scss' scoped>
@import "~@/styles/login/index.scss";
</style>