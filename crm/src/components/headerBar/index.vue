<template>
  <div class="header_bar">
    <section class="top_header">
      
      <!-- 头部左侧内容 -->
      <div class="left_side">
        <!-- 折叠左侧导航栏菜单切换按钮 -->
        <collapse-btn :isCollapse="isCollapse" @toggleClick="toggleSideBar" />
        <!-- 面包屑导航菜单 -->
        <bread-crumb :isShowBreadcrumb="isShowBreadcrumb" id="breadcrumb-container" class="breadcrumb-container" />
      </div>

      <!-- 头部右侧内容 -->
      <div class="right_side">
        <!-- 全屏 -->
        <screen-full />
        <!-- 用户登录 -->
        <user-bar />
      </div>
    </section>

    <!-- 标签导航条 -->
    <section>
      <tag-nav :isShowTags="isShowTags" />
    </section>
  </div>
</template>

<script>
import collapseBtn from "@/components/headerBar/collapseBtn/onOff";
import breadCrumb from "@/components/headerBar/breadCrumb";
import tagNav from "@/components/headerBar/tagNav";
import screenFull from "@/components/headerBar/screenFull";
import userBar from "@/components/headerBar/userBar";
import weather from "@/components/headerBar/weather";
export default {
  name: "headerBar",
  components: {
    collapseBtn,
    breadCrumb,
    tagNav,
    screenFull,
    userBar,
    weather,
  },
  data() {
    return {
      isCollapse: false, // 是否旋转折叠侧边栏按钮图标
      isShowBreadcrumb: true, // 是否显示面包屑导航
      isShowTags: true, // 是否显示标签导航
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
    // 旋转折叠侧边栏按钮图标事件
    toggleSideBar() {
      if (this.isCollapse) {
        this.isCollapse = !this.isCollapse;
      } else {
        this.isCollapse = !this.isCollapse;
      }
      this.$emit("toggle", this.isCollapse);
    },
  },
};
</script>
<style lang='scss' scoped>
.top_header {
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  .left_side,
  .right_side {
    display: flex;
    align-items: center;
  }
}
</style>