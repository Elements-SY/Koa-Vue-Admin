<template>
  <div class="baidu_map_container">
    <baidu-map
      class="map"
      :center="mapList.center"
      :scroll-wheel-zoom="true"
      :zoom="mapList.zoom"
      :auto-resize="mapList.autoResize"
      @moving="syncCenterAndZoom"
      @moveend="syncCenterAndZoom"
      @zoomend="syncCenterAndZoom"
      @click="mapClick"
      @rightclick="rightClick"
    >
      <bm-geolocation
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :showAddressBar="true"
        :autoLocation="true"
      ></bm-geolocation>
      <section class="search_place">
        <div class="search_keyword">
          <bm-view></bm-view>
          <bm-control :offset="{ width: '10px', height: '10px' }">
            <bm-auto-complete v-model="mapList.keyword">
              <el-input
                v-model="mapList.keyword"
                placeholder="请输入目标地点"
                suffix-icon="el-icon-search"
                :debounce="2000"
                :hide-loading="false"
              ></el-input>
            </bm-auto-complete>
          </bm-control>
          <bm-local-search
            class="search_list"
            v-show="mapList.searchList"
            location="shang"
            :keyword="mapList.keyword"
            :auto-viewport="true"
            :panel="true"
            :selectFirstResult="true"
          ></bm-local-search>
        </div>
      </section>
      <!-- :icon="{
         url: 'https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00795-2487.jpg', 
         size: {width: 300, height: 157}}" -->
      <bm-marker
        class="marker_window_message"
        v-for="(item, index) in mapList.marker"
        :position="item.markerPoint"
        :dragging="true"
        @dragging="dragEvent"
        @dragend="dragEnd(index, item, $event)"
        @mouseover="mouseOver(index, item, $event)"
        @mouseout="mouseOut(index, item, $event)"
        :icon="item.markIcon"
        :zIndex="2000"
        :top="true"
        :key="index"
      >
        <bm-info-window
          :position="item.markerPoint"
          class="info_window_message"
          title=""
          :show="item.show"
          @close="infoWindowClose(index, item, $event)"
          @open="infoWindowOpen(index, item, $event)"
        >
          <div class="camera_message">
            <div class="camera_mark">
              <span>{{ item.cameraMark }}</span>
              <span class="iconfont icon-jiankongshexiangtou"></span>
            </div>
            <div class="camera_message_info">
              <ul>
                <li>
                  <span class="work_title">状态: </span>
                  <span class="work_name">{{ item.state }}</span>
                </li>
                <li>
                  <span class="work_title">位置: </span>
                  <span class="work_name">{{
                    item.markerPoint.lng + `, ${item.markerPoint.lat}`
                  }}</span>
                </li>
              </ul>
            </div>
          </div>
        </bm-info-window>
      </bm-marker>
      <bm-context-menu>
        <bm-context-menu-item :callback="gotoBeijing" text="添加标记">
        </bm-context-menu-item>
      </bm-context-menu>
    </baidu-map>
    <!-- Element-UI组件 -->
    <el-dialog
      title="提示"
      :visible.sync="mapList.centerDialogVisible"
      width="30%"
      center
    >
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="100px"
        class="ruleForm"
      >
        <el-form-item label="设备类型" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择设备类型">
            <el-option
              v-for="(item, index) in selectData"
              :label="item.label"
              :value="item.value"
              :key="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="添加标注图" prop="region">
          <input
            type="file"
            class="filepath"
            id="file"
            @change="upLoadPic"
            style="display: none"
          />
          <label for="file">
            <i v-show="imageUrl.length === 0" class="upload el-icon-upload"></i>
            <img
              class="upload file_img"
              v-show="imageUrl.length > 0"
              ref="img"
              :src="imageUrl"
              alt=""
            />
          </label>
        </el-form-item>
        <el-form-item label="站点名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item class="desc" label="备注" prop="desc">
          <el-input
            v-model="ruleForm.desc"
            type="textarea"
            maxlength="30"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item label="经度" prop="longitude">
          <el-input v-model="ruleForm.markerPoint.lng"></el-input>
        </el-form-item>
        <el-form-item label="纬度" prop="latitude">
          <el-input v-model="ruleForm.markerPoint.lat"></el-input>
        </el-form-item>
        <el-form-item label="x轴坐标" prop="positionX">
          <el-input v-model="ruleForm.positionY"></el-input>
        </el-form-item>
        <el-form-item label="y轴坐标" prop="positionY">
          <el-input v-model="ruleForm.positionY"></el-input>
        </el-form-item>
        <el-form-item class="form_primary">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >确 定</el-button
          >
          <el-button @click="resetForm('ruleForm')">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import camera from "@/assets/images/icon/camera.png";
import plane from "@/assets/images/icon/plane.png";
import air from "@/assets/images/icon/air.png";
let cameraNum = 0;
export default {
  // baidu-map二字这个名字会有冲突，因为与vue-baidu-map中的baidu-map组件名重复
  name: "baidu-maps",
  data() {
    return {
      mapList: {
        center: { lng: 121.486678, lat: 31.248791 },
        zoom: 15,
        autoResize: true,
        centerDialogVisible: false,
        location: "",
        keyword: "",
        searchList: false,
        marker: [],
      },
      selectData: [
        // 添加标记表单select选择设备类型
        { label: "摄像头", value: "camera", iconUrl: camera },
        { label: "平面图", value: "plane", iconUrl: plane },
        { label: "空气质量", value: "qa", iconUrl: air },
      ],
      ruleForm: {
        // 添加标记表单信息
        region: "",
        name: "",
        resource: "",
        desc: "",
        positionX: 0,
        positionY: 0,
        markerPoint: { lng: 0, lat: 0 },
        markIcon: { url: "", size: { width: 40, height: 40 } },
        cameraMark: cameraNum,
        state: 0,
        show: false,
        files: [],
      },
      imageUrl: "",
      // rules: formRule // 添加标记表单校验规则
    };
  },
  created() {
    this.getMarkData(); // 获取localStorage存储的经纬度坐标
  },
  watch: {
    ruleForm: {
      handler(val, item) {
        if (val.region === "camera") {
          this.ruleForm.markIcon.url = this.selectData[0].iconUrl;
        } else if (val.region === "plane") {
          this.ruleForm.markIcon.url = this.selectData[1].iconUrl;
        } else if (val.region === "qa") {
          this.ruleForm.markIcon.url = this.selectData[2].iconUrl;
        } else {
          this.ruleForm.markIcon.url = "";
        }
      },
      // immediate: true,
      deep: true,
    },
  },
  methods: {
    // 创建上传图片
    upLoadPic(e) {
      this.ruleForm.files = e.target.files;
      console.log(this.ruleForm.files);
      this.imageUrl = null;
      // 给全局对象添加一个URL对象,window.createObjectURL(),
      // 这个新的URL 对象表示指定的 File 对象或 Blob 对象
      if (window.createObjectURL !== undefined) {
        // basic
        this.imageUrl = window.createObjectURL(e.target.files[0]);
      } else if (window.URL !== undefined) {
        // mozilla(firefox)
        this.imageUrl = window.URL.createObjectURL(e.target.files[0]);
      } else if (window.webkitURL !== undefined) {
        // webkit or chrome
        this.imageUrl = window.webkitURL.createObjectURL(e.target.files[0]);
      }
      console.log(this.$refs.img);
      this.$refs.img.src = this.imageUrl;
    },
    infoWindowClose(index, item, target) {
      console.log(index, item, target);
      // this.infoWindow.show = false
    },
    infoWindowOpen(index, item, target) {
      console.log(index, item, target);
      // this.infoWindow.show = true
    },
    mouseOver(index, item, target) {
      // console.log(index, item, target)
      // item.show = true
      item.show ? (item.show = !item.show) : (item.show = !item.show);
    },
    mouseOut(index, item, target) {
      // item.show = false
      // console.log(index, item, target)
    },
    setMarkData() {
      localStorage.setItem("markdata", JSON.stringify(this.mapList.marker));
      location.reload();
    },
    getMarkData() {
      var markerPoint = localStorage.getItem("markdata");
      if (markerPoint !== null) {
        this.mapList.marker = JSON.parse(markerPoint);
      }
    },
    // 左键单击地图事件
    mapClick({ type, target, point, pixel, overlay }) {
      // console.log(type, target, point, pixel, overlay)
      // this.mapList.searchList = false
    },
    // 右键单击地图事件
    rightClick({ type, target, point, pixel, overlay }) {
      console.log(type, target, point, pixel, overlay);
      this.ruleForm.markerPoint.lng = point.lng;
      this.ruleForm.markerPoint.lat = point.lat;
      this.ruleForm.positionX = pixel.x;
      this.ruleForm.positionY = pixel.y;
    },
    syncCenterAndZoom(e) {
      const { lng, lat } = e.target.getCenter();
      this.mapList.center.lng = lng;
      this.mapList.center.lat = lat;
      this.mapList.zoom = e.target.getZoom();
    },
    // 拖拽地图事件
    dragEvent({ type, target, pixel, point }) {
      // console.log(index, item, target)
      // var markerPoint
      // this.setMarkData(point)
      // console.log(pixel)
      // type: 获取当前的事件名称
      // target: 事件源
      // pixel: 坐标位置
      // point: 经纬度
    },
    dragEnd(index, item, target) {
      this.mapList.marker[index].markerPoint.lng = target.point.lng;
      this.mapList.marker[index].markerPoint.lat = target.point.lat;
      console.log(this.mapList.marker[index].markerPoint.lng);
      console.log(this.mapList.marker[index].markerPoint.lat);
      this.setMarkData();
    },
    // 添加标记
    gotoBeijing(e) {
      this.mapList.centerDialogVisible = true;
    },
    submitForm() {
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      ++cameraNum;
      this.mapList.marker.push(this.ruleForm);
      this.setMarkData();
      this.mapList.centerDialogVisible = false;
      // } else {
      //   console.log('error submit!!')
      //   return false
      // }
      // })
    },
    resetForm() {
      // this.$refs[formName].resetFields()
      this.mapList.centerDialogVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: calc(100vh - 112px);
  position: relative;
}

.search_place {
  position: absolute;
  top: 100px;
  left: 0;
}

.camera_message {
}

.camera_mark {
}

.camera_mark span {
  font-size: 14px;
}

.camera_mark .icon-jiankongshexiangtou {
  color: #666;
  font-size: 22px;
}

.camera_message_info {
  padding: 8px 0px;
}

.camera_message_info ul {
  margin: 0;
  padding: 0;
}

.camera_message_info ul li {
  color: #666;
  margin-bottom: 10px;
}

.camera_message_info ul li span {
}

.camera_message_info ul li .work_title {
  font-size: 14px;
}

.camera_message_info ul li .work_name {
  font-size: 13px;
}

.camera_mark {
  border-bottom: 1px solid #48464640 !important;
  border-radius: 0 !important;
  box-sizing: border-box;
  line-height: 28px;
}

.upload {
  display: inline-block;
  width: 40px;
  height: 40px;
  font-size: 30px;
  margin-top: 5px;
}

.file_img {
  border-radius: 50%;
}
</style>