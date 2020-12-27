<template>
  <div
    class="main_layout"
    :class="{
      side_collapse: isCollapse,
    }"
  >
    <!-- 侧边栏导航菜单 -->
    <aside class="sidebar">
      <side-menu :isCollapse="isCollapse" :isShowLogo="isShowLogo" :menuList="menuData" />
    </aside>
    <main>
      <!-- 头部区域 -->
      <header class="_header">
        <header-bar @toggle="toggleCollapse" />
      </header>
      <!-- 主体内容 -->
      <section :style="{ paddingTop: top + 'px' }">
        <root-router-view />
      </section>
    </main>
  </div>
</template>

<script>
import rootRouterView from "./rootRouterView";
import sideMenu from "@/components/sideMenu";
import headerBar from "@/components/headerBar";
import ResizeMixin from "./mixin/ResizeHandler"; // 混入移动端
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("account/");
import { menu_list } from "@/http";
export default {
  name: "mainLayout",
  components: {
    rootRouterView,
    sideMenu,
    headerBar,
  },
  mixins: [ResizeMixin],
  data() {
    return {
      menuData: [], // 导航菜单
      isCollapse: false, // 是否折叠侧边栏
      isShowLogo: true, // 是否展示Logo
      top: 0,
    };
  },
  computed: {
    ...mapState({
      roles: (state) => (state.role.length ? state.role : []),
    }),
  },
  watch: {},
  created() {
    this.meunList();
  },
  mounted() {
    let header = document.querySelector("._header").getBoundingClientRect();
    let h = header.height;
    this.top = h;
  },
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
  // 方法集合
  methods: {
    // 切换侧边栏是否折叠事件
    toggleCollapse(flag) {
      // this.isCollapse = flag;
      this.isMobile ? this.isCollapse = !flag : this.isCollapse = flag
    },
    handleClickOutside() {
      this.hideSideBar = true;
    },
    // 侧边导航菜单
    meunList() {
      menu_list({ auth: this.roles[0] })
        .then((res) => {
          if (res.data.code == 200) {
            let menuData = res.data.data.menuList;
            var homePath = {
              path: "/home",
              title: "首页",
              icon: "icon-home",
            };
            menuData.unshift(homePath)
            this.menuData = menuData
            console.log("获取菜单",menuData);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style lang='scss' scoped>
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
// 侧边栏未塌陷时
.main_layout main {
  min-height: 100%;
  transition: margin-left 0.28s;
  margin-left: 210px;
  position: relative;
}
.main_layout aside {
  transition: width 0.28s;
  width: 210px;
  background-color: #304156;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}
header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - 210px);
  padding: 8px 8px;
  box-sizing: border-box;
  transition: width 0.28s;
  background-color: #fff;
}
.main_layout section {
}
// 侧边栏塌陷时
.side_collapse {
  main {
    margin-left: 54px;
  }
  aside {
    width: 54px;
  }
  header {
    width: calc(100% - 54px);
  }
}
</style>