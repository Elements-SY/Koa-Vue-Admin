<template>
  <div class="screen_full">
    <!-- 全屏 F11实现全屏切换效果-->
    <div @click="fullScreenEvent" class="full-screen-btn-con">
      <el-tooltip :content="isFullVal ? '退出全屏' : '全屏'" placement="bottom">
        <img
          v-if="isFullVal"
          key="contract"
          src="@/assets/images/icon/icon_contract.png"
          class="icon-full-screen"
        />
        <img
          v-else
          key="expand"
          src="@/assets/images/icon/icon_expand.png"
          class="icon-full-screen"
        />
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: "screenFull",
  components: {},
  data() {
    return {
      isFullVal: false, // 当前窗口是否处于全屏
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
    // 全屏事件
    fullScreenEvent() {
      // 判断当前窗口是否处于全屏
      if (this.isFullScreen()) {
        // 退出全屏
        this.exitFullscreen();
      } else {
        // 进入全屏
        this.requestFullScreen();
      }
    },

    //进入全屏
    requestFullScreen() {
      // 获取元素 如果不传则从根元素进入全屏模式
      var rootNode = document.documentElement || document.body;
      // 判断该元素对象是否有请求全屏的方法
      if (rootNode.requestFullscreen) {
        // 如果有则调用该方法从该元素进入全屏
        rootNode.requestFullscreen();
      } else if (rootNode.mozRequestFullScreen) {
        // 火狐
        rootNode.mozRequestFullScreen();
      } else if (rootNode.webkitRequestFullScreen) {
        // Chrome
        rootNode.webkitRequestFullScreen();
      }
      this.isFullVal = true;
      // console.log('进入全屏啦', rootNode.requestFullscreen)
    },

    //退出全屏
    exitFullscreen() {
      // 获取元素 如果不传则从根元素进入退出全屏模式
      var rootNode = document.documentElement || document.body;
      // 判断该元素对象是否有请求退出全屏的方法
      if (document.exitFullscreen) {
        // 如果有则调用该方法从该元素进入退出全屏
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        // 火狐
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        // Chrome
        document.webkitCancelFullScreen();
      }
      this.isFullVal = false;
      // console.log('退出全屏啦', document.exitFullscreen)
    },

    // 判断当前窗口是否处于全屏
    isFullScreen() {
      return !!(
        document.fullscreen ||
        document.mozFullScreen ||
        document.webkitIsFullScreen ||
        document.webkitFullScreen ||
        document.msFullScreen
      );
    },
  },
};
</script>
<style lang='scss'>
.screen_full img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  cursor: pointer;
}
.full-screen-btn-con {
  padding: 0 5px;
}
</style>