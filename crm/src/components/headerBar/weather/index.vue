<template>
  <div class="weather_wrap">
    <div class="weather">
      <div class="weather_title">
        <span>最新战报</span>
      </div>
      <div class="city_wrap">
        <ul class="citys" :class="{ weather_top: animate }">
          <li v-for="(item, index) in cityWeather">
            <span>{{ weatherData.time }}</span>
            <span>{{ weatherData.day_weather }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { weather } from "@/http";
export default {
  name: "weather",
  components: {},
  data() {
    return {
      animate: false,
      cityWeather: [],
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
    // this.getWeatherInfo();
    setInterval(this.showMarquee, 2000);
  },
  mounted() {},
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
  // 方法集合
  methods: {
    getForNowDate() {
      let date = new Date();
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      let d = date.getDate();
      return y + "-" + m + "-" + d;
    },
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
    showMarquee() {
      this.animate = true;
      setTimeout(() => {
        this.cityWeather.push(this.cityWeather[0]);
        this.cityWeather.shift();
        this.animate = false;
      }, 500);
    },
  },
};
</script>

<style lang='scss'>
.weather_wrap {
  .weather {
    width: 100%;
    height: 50px;
    align-items: center;
    color: #3a3a3a;
    background-color: #b3effe;
    display: flex;
    box-sizing: border-box;
    .weather_title {
      padding: 0 6px;
      font-size: 14px;
      border-right: 1px solid #d8d8d8;
      align-items: center;
      span {
      }
    }
    .city_wrap {
      display: block;
      position: relative;
      min-width: 200px;
      height: 30px;
      overflow: hidden;
      .citys {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        ul {
          margin: 0;
          padding: 0;
          li {
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            padding-left: 20px;
            display: flex;
            box-sizing: border-box;
            span {
              padding: 0 2px;
            }
          }
        }
      }
      .weather_top {
        transition: all 0.5s;
        margin-top: -30px;
      }
    }
  }
}
</style>