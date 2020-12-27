<template>
  <div class="user_bar">
    <el-dropdown :hide-on-click="false">
      <div class="info_wrap">
        <!-- 用户头像 -->
        <div class="user_avatar">
          <img :src="avatars" alt srcset />
        </div>
        <!-- 用户名称 -->
        <div class="user_name">{{ userName }}</div>
        <!-- 用户菜单选项 -->
        <div class="dropdown_arrow">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          昵称：
          <span>{{ nickName }}</span>
        </el-dropdown-item>
        <el-dropdown-item>
          职业：
          <span>{{ job }}</span>
        </el-dropdown-item>
        <el-dropdown-item>
          嗜好：
          <span>{{ hobby }}</span>
        </el-dropdown-item>

        <el-dropdown-item>
          <el-button
            type="danger"
            style="width: 100%"
            size="small"
            @click="signOut"
            >退出</el-button
          >
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { getCookie } from "@/utils/auth";
import { mapGetters } from "vuex";
export default {
  name: "userBar",
  components: {},
  data() {
    return {
      params: {},
    };
  },
  computed: {
    ...mapGetters({
      avatars: "account/avatars",
      hobby: "account/hobby",
      job: "account/job",
      nickName: "account/nickName",
      userName: "account/userName",
    }),
  },
  watch: {},
  created() {
  },
  mounted() {},
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
  // 方法集合
  methods: {
    // 退出登录
    signOut() {
      let userInfo = JSON.parse(getCookie());
      // console.log(this.$store);
      this.$store
        .dispatch("account/LoginOut", userInfo)
        .then((res) => {
          console.log("退出登录", res);
          if (res.data.code == 200) {
            this.$message({
              type: "success",
              message: "退出成功",
            });
            this.$router.push({
              path: "/login",
            });
          }
        })
        .catch((error) => {
          this.$message({
            type: "error",
            message: "退出失败",
          });
        });
    },
  },
};
</script>
<style lang='scss'>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.info_wrap {
  display: flex;
  align-items: center;
  div {
    padding: 0 5px;
    cursor: pointer;
    img {
      width: 24px;
      height: 24px;
      border-radius: 15px;
      vertical-align: middle;
    }
  }
}
</style>