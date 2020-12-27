const { body } = document
const WIDTH = 992 // 判断浏览器窗口是否小于等于992，如果是则是移动设备

export default {
  data() {
    return {
      isMobile: false, // 是否折叠侧边栏
    };
  },
  watch: {
    $route(route) {}
  },
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$_resizeHandler)
  },
  mounted() {
    let isMobile = this.$_isMobile()
    this.isMobile = isMobile
    this.isCollapse = isMobile
  },
  methods: {
    // 如果body当前的宽小于等于992则返回当前值，当前值小于1则说明是移动设备
    $_isMobile() {
      const rect = body.getBoundingClientRect()
      if (rect.width <= WIDTH) {
        return true
      } else {
        return false
      }
    },
    $_resizeHandler() {
      // 当前的宽小于等于992调用closeSideBar方法
      if (!document.hidden) {
        let isMobile = this.$_isMobile()
        this.isMobile = isMobile
        this.isCollapse = isMobile
      }
    }
  }
}
