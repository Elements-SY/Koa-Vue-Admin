<template>
  <div class="sidebar-container" :class="{sidebar_logo: isShowLogo}">
    <logo v-if="isShowLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        router
        mode="vertical"
        :unique-opened="uniqueOpened"
        :background-color="bgc"
        :text-color="textColor"
        :active-text-color="activeTextColor"
        :collapse="isCollapse"
        :collapse-transition="collapseTransition"
        @open="openRouter"
        @select="selectRouter"
      >
        <sub-menu v-for="menu in menuList" :key="menu.path" :item="menu" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import subMenu from "./subMenu";
import Logo from "./Logo"
export default {
  name: "sideMenu",
  components: {
    subMenu,
    Logo
  },
  props: {
    // 侧边导航菜单
    menuList: {
      type: Array,
      required: true,
    },
    // 是否只保持一个子菜单的展开
    uniqueOpened: {
      type: Boolean,
      default: true,
    },
    // 是否折叠侧边栏
    isCollapse: {
      type: Boolean,
      default: true,
    },
    // 是否展示Logo
    isShowLogo: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      bgc: "#304156",
      textColor: "#bfcbd9",
      activeTextColor: "#409eff",
      collapseTransition: false,
    };
  },
  methods: {
    // 菜单折叠展开时触发该事件
    openRouter(index) {
      // console.log(index)
    },

    // 点击菜单路由跳转时触发该事件
    selectRouter(index, path, $event) {
      // console.log(index)
      // console.log(path)
      // console.log($event)
    },
  },
};
</script>
<style lang="scss">
.sidebar-container {
  transition: width 0.28s;
  width: 210px;
  height: 100%;
  position: fixed;
  font-size: 0px;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out,
      0s padding-right ease-in-out;
  }
  .el-scrollbar {
     height: 100%;
    .scrollbar-wrapper {
        margin-bottom: 0px !important;
        margin-right: 0px !important;
      }
  }
  .scrollbar-wrapper {
    overflow-x: hidden !important;
    .el-scrollbar__view {
      height: 100%;
    }
  }
  .el-scrollbar__bar.is-vertical {
    right: 0px;
  }
  .is-horizontal {
    display: none;
  }
  a {
    display: inline-block;
    width: 100%;
    overflow: hidden;
  }
  .el-menu {
    border: none;
    height: 100%;
    width: 100% !important;
  }
  .is-active > .el-submenu__title {
    color: #f4f4f5 !important;
  }
}
/*
 如果展示logo则height减去50px,也就是logo的高,
 目的是为了能够腾出50px的像素避免遮住最后一个菜单。
*/
.sidebar_logo{ 
   .el-scrollbar {
     height: calc(100% - 50px);
   }
}
.el-menu {
  border: 0;
}
.el-menu--collapse {
  width: 54px;
}
.side_collapse {
  .sidebar-container {
    width: 54px;
  }
}
</style>
