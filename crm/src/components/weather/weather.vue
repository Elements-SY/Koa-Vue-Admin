<template>
  <div class="weather_wrap">
    <el-row :gutter="24">
      <el-col>
        <ul>
          <li>
            <span>{{ weatherData.time }}</span>
            <span>{{ weatherData.day_weather }}</span>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="6">
        <el-input v-model="params.p" placeholder="请输入省份"></el-input>
      </el-col>
      <el-col :span="6">
        <el-input v-model="params.c" placeholder="请输入城市"></el-input>
      </el-col>
      <el-col :span="6">
        <el-input v-model="params.x" placeholder="请输入县名"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button @click="getWeatherInfo">查询天气</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { weather } from "@/http";
export default {
  name: "weather",
  data() {
    return {
      weatherData: {},
      params: {
        p: "上海市",
        c: "上海市",
        x: "",
      },
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getWeatherInfo();
  },
  mounted() {},
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
  methods: {
    //  获取当前时间
    getForNowDate() {
      let date = new Date();
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      let d = date.getDate();
      return y + "-" + m + "-" + d;
    },

    // 获取天气
    getWeatherInfo() {
      weather(this.params)
        .then((res) => {
          if (res.status == 200) {
            if (res.data.status == 200) {
              if (res.data.data) {
                let weatherInfo = res.data.data;
                this.weatherInfoList = weatherInfo.forecast_24h["0"];
                let list = weatherInfo.forecast_24h;
                if (
                  JSON.stringify(weatherInfo.forecast_24h) !== "{}" &&
                  weatherInfo.forecast_24h !== null
                ) {
                  Object.keys(list).map((k) => {
                    if (list[k].time == this.getForNowDate()) {
                      this.weatherData = list[k];
                    }
                  });
                } else {
                  this.weatherData = {
                    time: this.getForNowDate(),
                    day_weather: "",
                  };
                }
              }
            } else {
              this.$message.error(res.data.msg);
            }
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
</style>