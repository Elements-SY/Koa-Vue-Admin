import {
   baiduAccessToken,
   orcImageText,
   orcImageIdCard,
   orcImageAnimal,
   orcImagePlant,
   orcImageDish,
   orcImageIngredient
} from "@/http";
export default {
   name: "baiduOcr",
   data() {
      return {
         title: "OCR识别",
         tip: "",
         content: [], // 识别结果返回的数据集合
         showDialog: false, // 是否显示对话框
         url: '', // 上传图片地址
         srcList: [], // 上传图片预览地址
      };
   },
   computed: {},
   watch: {},
   created() { },
   mounted() { },
   // 方法集合
   methods: {
      // file对象转blob url
      base64ToBlob(file) {
         this.imgUrl = window.webkitURL.createObjectURL(file) || window.URL.createObjectURL(file) //
         this.url = this.imgUrl; // file对象转blob url
         this.srcList[0] = this.imgUrl; // 上传图片预览地址
      },
      getPicData(pic, file) {
         if (this.mark === "text") {
            this.title = "OCR文字识别";
            this.tip = "";
            // 通用文字识别
            let params = {
               client_id: "qbI91UF9968FH9K63ip2Hy9S",
               client_secret: "iftOCPXztCNAav4c8KQtzc9RkWDmCECz",
               image: pic,
               mark: this.mark,
               file: file,
            };
            // console.log(params)
            this.getBaiduAccessToken(params);
         } else if (this.mark === "IDCardFront") {
            this.title = "OCR身份证正面识别";
            this.tip = "";
            // 身份证识别(正)
            let params = {
               client_id: "qbI91UF9968FH9K63ip2Hy9S",
               client_secret: "iftOCPXztCNAav4c8KQtzc9RkWDmCECz",
               image: pic,
               id_card_side: "front",
               mark: this.mark,
               file: file,
            };
            this.getBaiduAccessToken(params);
         } else if (this.mark === "IDCardBack") {
            this.title = "OCR身份证背面识别";
            this.tip = "";
            // 身份证识别(反)
            let params = {
               client_id: "qbI91UF9968FH9K63ip2Hy9S",
               client_secret: "iftOCPXztCNAav4c8KQtzc9RkWDmCECz",
               image: pic,
               id_card_side: "back",
               mark: this.mark,
               file: file,
            };
            this.getBaiduAccessToken(params);
         } else if (this.mark === "animal") {
            this.title = "OCR动物识别";
            this.tip = "";
            // 动物识别
            let params = {
               client_id: "qbI91UF9968FH9K63ip2Hy9S",
               client_secret: "iftOCPXztCNAav4c8KQtzc9RkWDmCECz",
               image: pic,
               mark: this.mark,
               file: file,
            };
            this.getBaiduAccessToken(params);
         } else if (this.mark === "plant") {
            this.title = "OCR植物识别";
            this.tip = "";
            // 植物识别
            let params = {
               client_id: "qbI91UF9968FH9K63ip2Hy9S",
               client_secret: "iftOCPXztCNAav4c8KQtzc9RkWDmCECz",
               image: pic,
               mark: this.mark,
               file: file,
            };
            this.getBaiduAccessToken(params);
         } else if (this.mark === "dish") {
            this.title = "OCR菜品识别";
            this.tip = "";
            // 菜品识别
            let params = {
               client_id: "qbI91UF9968FH9K63ip2Hy9S",
               client_secret: "iftOCPXztCNAav4c8KQtzc9RkWDmCECz",
               image: pic,
               mark: this.mark,
               file: file,
            };
            this.getBaiduAccessToken(params);
         } else if (this.mark === "ingredient") {
            this.title = "OCR果蔬识别";
            this.tip = "(温馨提示：如果果蔬识别没有找到您可以尝试一下植物识别)";
            // 果蔬识别
            let params = {
               client_id: "qbI91UF9968FH9K63ip2Hy9S",
               client_secret: "iftOCPXztCNAav4c8KQtzc9RkWDmCECz",
               image: pic,
               mark: this.mark,
               file: file,
            };
            this.getBaiduAccessToken(params);
         } else {
         }
      },
      // 获取Token
      getBaiduAccessToken({ client_id, client_secret, image, mark, file, id_card_side }) {
         let params = {
            client_id: client_id,
            client_secret: client_secret,
         };
         baiduAccessToken(params).then((res) => {
            console.log("获取鉴权token：", res.data);
            if (res.status === 200) {
               let { access_token, refresh_token } = res.data;
               if (mark === "text") {
                  this.getOrcImageText(access_token, image, file); // 通用文字识别
               } else if (mark === "IDCardFront") {
                  this.getOrcImageIdCard(access_token, image, file, id_card_side); // 身份证识别
               } else if (mark === "IDCardBack") {
                  this.getOrcImageIdCard(access_token, image, file, id_card_side); // 身份证识别
               } else if (mark === "animal") {
                  this.getOrcImageAnimal(access_token, image, file); // 动物识别
               } else if (mark === "plant") {
                  this.getOrcImagePlant(access_token, image, file); // 植物识别
               } else if (mark === "dish") {
                  this.getOrcImageDish(access_token, image, file); // 菜品识别
               } else if (mark === "ingredient") {
                  this.getOrcImageIngredient(access_token, image, file); // 果蔬识别
               }
            }
         });
      },
      // 通用文字识别
      getOrcImageText(accessToken, image, file) {
         this.base64ToBlob(file)
         const loading = this.$loading({
            lock: true,
            text: '正在识别请稍后',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.3)'
         });
         orcImageText(accessToken, image).then((res) => {
            loading.close();
            if (res.status === 200) {
               this.content = []; // 识别结果返回的数据集合
               this.showDialog = true;
               let { words_result } = res.data;
               words_result.map(item => {
                  item.name = item.words
               });
               this.content = words_result; // 识别结果返回的数据集合
               console.log("orc文字识别结果：", this.content);
            }
         });
      },
      // 身份证识别
      getOrcImageIdCard(accessToken, image, file, id_card_side) {
         this.base64ToBlob(file)
         const loading = this.$loading({
            lock: true,
            text: '正在识别请稍后',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.3)'
         });
         let params = {
            image: image,
            id_card_side: id_card_side
         }
         orcImageIdCard(accessToken, params).then((res) => {
            loading.close();
            if (res.status === 200) {
               this.content = []; // 识别结果返回的数据集合
               this.showDialog = true;
               let { words_result } = res.data;
               console.log("orc身份证识别结果：", words_result);
               Object.keys(words_result).map(key => {
                  this.content.push({ // 识别结果返回的数据集合
                     name: key + '：' + words_result[key].words
                  })
               })
            }
         });
      },
      // 动物识别
      getOrcImageAnimal(accessToken, image, file) {
         this.base64ToBlob(file)
         const loading = this.$loading({
            lock: true,
            text: '正在识别请稍后',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.3)'
         });
         orcImageAnimal(accessToken, image).then((res) => {
            loading.close();
            if (res.status === 200) {
               this.content = []; // 识别结果返回的数据集合
               this.showDialog = true;
               let { result } = res.data;
               this.content = result; // 识别结果返回的数据集合
               console.log("orc动物识别结果：", result);
            }
         });
      },
      // 植物识别
      getOrcImagePlant(accessToken, image, file) {
         this.base64ToBlob(file)
         const loading = this.$loading({
            lock: true,
            text: '正在识别请稍后',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.3)'
         });
         orcImagePlant(accessToken, image).then((res) => {
            loading.close();
            if (res.status === 200) {
               this.content = []; // 识别结果返回的数据集合
               this.showDialog = true;
               let { result } = res.data;
               this.content = result; // 识别结果返回的数据集合
               console.log("orc植物识别结果：", result);
            }
         });
      },
      // 菜品识别
      getOrcImageDish(accessToken, image, file) {
         this.base64ToBlob(file)
         const loading = this.$loading({
            lock: true,
            text: '正在识别请稍后',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.3)'
         });
         orcImageDish(accessToken, image).then((res) => {
            loading.close();
            if (res.status === 200) {
               this.content = []; // 识别结果返回的数据集合
               this.showDialog = true;
               let { result } = res.data;
               this.content = result; // 识别结果返回的数据集合
               console.log("orc菜品识别结果：", result);
            }
         });
      },
      // 果蔬识别
      getOrcImageIngredient(accessToken, image, file) {
         this.base64ToBlob(file)
         const loading = this.$loading({
            lock: true,
            text: '正在识别请稍后',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.3)'
         });
         orcImageIngredient(accessToken, image).then((res) => {
            loading.close();
            if (res.status === 200) {
               this.content = []; // 识别结果返回的数据集合
               this.showDialog = true;
               let { result } = res.data;
               this.content = result; // 识别结果返回的数据集合
               console.log("orc果蔬识别结果：", result);
            }
         });
      },
   },
};