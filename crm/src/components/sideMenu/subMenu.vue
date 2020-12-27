  <template>
  <div v-if="item.children">
    <template v-if="item.children.length == 0">
      <el-menu-item :index="item.path">
        <i class="iconfont" :class="item.icon"></i>
        <span>{{ item.title }}</span>
      </el-menu-item>
    </template>

    <el-submenu v-else :index="item.path">
      <template slot="title">
        <i class="iconfont" :class="item.icon"></i>
        <span>{{ item.title }}</span>
      </template>

      <template v-for="child in item.children">
        <sub-menu
          v-if="child.children && child.children.length"
          :item="child"
          :key="child.path"
        />
        <el-menu-item v-else :key="child.path" :index="child.path">
          <i class="iconfont" :class="child.icon"></i>
          <span>{{ child.title }}</span>
        </el-menu-item>
      </template>
    </el-submenu>
  </div>
  <div v-else>
    <el-menu-item :index="item.path">
      <i class="iconfont" :class="item.icon"></i>
      <span>{{ item.title }}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: "subMenu",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.el-menu--collapse {
  span {
    display: none;
  }
}
span {
  padding-left: 5px;
}
</style>