<template>
  <div class="gaode-map_container">
    <div id="amapContainer" class="amap-demo"></div>
  </div>
</template>

<script>
// NPM 方式
import { lazyAMapApiLoaderInstance } from "vue-amap";
export default {
  name: "gaode-map",
  data() {
    return {};
  },
  created() {
    this.initMap()
  },
  methods: {
    initMap() {
      lazyAMapApiLoaderInstance.load().then(() => {
        // your code ...
        this.map = new AMap.Map("amapContainer", {
          center: new AMap.LngLat(121.59996, 31.197646),
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#amapContainer {
  height: 300px;
}
</style>