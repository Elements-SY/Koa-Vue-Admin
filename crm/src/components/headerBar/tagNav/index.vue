<template>
  <div class="tag_nav" v-if="isShowTags" ref="tag_nav" @scroll="handleScroll">
    <div class="tags" ref="tag_wrap">
      <div class="scroll_nav_tag" ref="scroll_nav_tag">
          <div class="tags_container" ref="tags_container">
          <el-tag
            ref="tags"
            v-for="(item, index) in indexPath"
            :key="index"
            :type="activeValue == item.title ? '' : ''"
            :effect="activeValue == item.title ? 'dark' : 'plain'"
            closable
            :disable-transitions="false"
            @click="enterRoutePath(item, index)"
            @close="closeTag(index, item)"
            >{{ item.title }}</el-tag>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
const tagAndTagSpacing = 5; // 标签导航左右两边的padding之和
export default {
  name: "tagNav",
    props: {
    isShowTags: { // 是否显示标签导航
      type: Boolean,
      default: false,
    },
  },
  components: {},
  data() {
    return {
      activeValue: "", // 当前选中的路由名称
      indexPath: [], // 将点击过的路由信息添加进来
    };
  },
  computed: {},
  watch: {
    $route(to) { // 监听路由的变化获取最新的路由信息 
      this.setTags(to); // 获取页面的路由信息 创建动态标签导航tabs数据
      this.moveTagsNav(); // 移动标签导航
    },
  },
  created() {
    this.setTags(this.$route); // 获取页面的路由信息 创建动态标签导航tabs数据
  },
  mounted() {
    this.setTags(this.$route); // 获取页面的路由信息 创建动态标签导航tabs数据
    this.moveTagsNav(); // 移动标签导航
    window.addEventListener("scroll", this.handleScroll, true);
    this.$refs.tag_nav.addEventListener("scroll", this.handleScroll, true);
    this.$refs.tag_nav.onmousewheel = (e) => {
      this.handleScroll(e)
    };
  },
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated() {
    this.moveTagsNav(); // 移动标签导航
  },
  // 方法集合
  methods: {
    // 获取页面的路由信息 创建动态标签导航tabs数据
    setTags(route) {
      // 判断刚刚点击的路由是否存在，如果不存则保存
      this.activeValue = route.meta.title;
      const isExist = this.indexPath.some((item) => item.path === route.path);
      let currentPath = {
        title: route.meta.title,
        path: route.path,
      };
      !isExist && this.indexPath.push(currentPath);
      // if (this.indexPath.length > 8) { // 是否限制动态tabs数量
      //   this.indexPath.splice(this.indexPath.length - 1, 1)
      // }
    },

    // 点击路由跳转
    enterRoutePath(item, index) {
      this.$router.push(item.path);
    },

    // 关闭当前tab
    closeTag(index) {
      if(this.indexPath.length==1 && this.indexPath[0].path == '/home')return
      const closePath = this.indexPath.splice(index, 1); // 删除当前点击的tag
      const item = this.indexPath[index] ? this.indexPath[index] : this.indexPath[index - 1]; // 获取删除后当前下标的tag(如果当前下标有选择当前否则选前一个)
      if (item) { // 存在执行
        closePath[0].path === this.$route.path && this.$router.push(item.path); // 如果删除的的元素path等于当前路由path 执行改变路由
      } else { // 不存在跳转到首页
        this.$router.push("/home");
      }
    },

    // 移动标签导航
    moveTagsNav() { 
      this.$nextTick(() => {
        const $container = this.$refs.tag_wrap;
        const $containerWidth = $container.offsetWidth;
        const $scrollWrapper = this.$refs.scroll_nav_tag;
        const tagList = this.$refs.tags
        let firstTag = null; // 第一个标签导航组件
        let lastTag = null; // 最后一个标签导航组件
        if (this.$refs.tags) { // 获取标签导航组件
          if (tagList.length > 0) { // 标签导航组件对象数组集合是否为空 
            firstTag = tagList[0]; // 取第一个标签导航组件  
            lastTag = tagList[tagList.length - 1]; // 取最一个标签导航组件
          }
      
        const currentTagComm = tagList.filter(item=>{ // 当前标签导航
           let active_class = item.$el.className
           let active = active_class.split(' ').includes('el-tag--dark') // 根据class类筛选当前标签导航
           let currentTag;
           if(active){ // 如果有该class类
             currentTag = item
           }
           return currentTag
          })
          if (firstTag === currentTagComm[0]) { // 首个标签导航组件是否等于当前标签导航组件
            $scrollWrapper.scrollLeft = 0;
          } 
          else if (lastTag === currentTagComm[0]) { // 末尾标签导航组件是否等于当前标签组件
             // scrollLeft 即子盒子置于父盒子溢出的width部分
             // scrollWidth等于clientWidth + scrollLeft
             $scrollWrapper.scrollLeft = $scrollWrapper.scrollWidth - $containerWidth;
          }else{ // 当，当前标签组件既不等于首未时
             const currentIndex = tagList.findIndex((item) => item === currentTagComm[0]);
             const prevTag = tagList[currentIndex - 1]; // 前一个标签导航组件
             const nextTag = tagList[currentIndex + 1]; // 下一个标签导航组件
             const afterNextTagOffsetLeft = nextTag.$el.offsetLeft + nextTag.$el.offsetWidth + tagAndTagSpacing;
             const beforePrevTagOffsetLeft = prevTag.$el.offsetLeft - tagAndTagSpacing;
             if (afterNextTagOffsetLeft > $scrollWrapper.scrollLeft + $containerWidth) {
                  $scrollWrapper.scrollLeft = afterNextTagOffsetLeft - $containerWidth; // 等于超出的部分
              } else if (beforePrevTagOffsetLeft < $scrollWrapper.scrollLeft) { // 如果前一个标签导航且不包含padding 相距的left小于
                  $scrollWrapper.scrollLeft = beforePrevTagOffsetLeft;
             }
          }
        }
      });
    },

    // 滚动标签导航滚轮事件
    handleScroll(e) {
      const eventDelta = e.wheelDelta || -e.deltaY * 40;
      const $scrollWrapper = this.$refs.scroll_nav_tag;
      if(!isNaN(eventDelta)){
         $scrollWrapper.scrollLeft += eventDelta / 4;
      }
    },
  },
};
</script>
<style lang='scss'>
/* 
 rest system default scrollbar
 link: https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-scrollbar
*/
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  width: 0px;
  height: 0px;
  background-color: rgba(0, 0, 0, 0.15);
}
::-webkit-scrollbar-track {
  width: 0px;
  height: 0px;
  background-color: rgba(0, 0, 0, 0.15);
}
.el-tag {
  overflow: hidden;
  cursor: pointer;
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.tag_nav {
  height: 45px;
  line-height: 45px;
  background-color: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
}
.tags {
  white-space: nowrap;
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
}
.scroll_nav_tag{
  overflow-x: auto;
  overflow-y: hidden;
}
.tags_container {
    padding-top: 6px;
    box-sizing: border-box;
}
</style>