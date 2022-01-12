// vue.config link: https://cli.vuejs.org/zh/config/#vue-config-js
// 对于vue.config配置请参考该vue脚手架官方使用的webpack、http中间件、babel、eslint版本
module.exports = {
  publicPath: '/', // 默认公共路径'/'
  outputDir: 'dist', // 默认输出文件夹 'dist'
  assetsDir: 'assets', // 打包静态资源输出的目录,
  indexPath: 'index.html', // 指定生成的index.html 默认'index.html'，本人认为其实就是html-webpack-plugin的配置
  filenameHashing: true, // 是否对index.html文件中引入的静态资源做hash缓存。
  pages: {
    index: {
      entry: 'src/main.js',// page 的打包入口文件 
      template: 'public/index.html',// 模板来源   
      filename: 'index.html',// 在 dist/index.html 的输出
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  lintOnSave: false, // 保存代码时是否启用ESlint
  runtimeCompiler: false,
  // transpileDependencies: [], // webpack 外部扩展插件;对应这个API webpackjs.com/configuration/externals/
  productionSourceMap: false, // 打包后的静态文件是否需要生产source map 文件,优先级最高
  css: {
    // 是否使用css分离插件 ExtractTextPlugin,如果不分离将会把css打包于js文件中
    extract: true,
    // 开启 CSS source maps? 优先级低于productionSourceMap: true
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      css: { // https://www.webpackjs.com/loaders/css-loader/#modules
        // 启用/禁用 CSS 模块
        modules: false, // https://www.webpackjs.com/loaders/css-loader/#%E9%80%89%E9%A1%B9
      },
      // postcss: {
      //   // 这里的选项会传递给 postcss-loader
      // }
    },
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true
  },
  // support all api; link: https://www.webpackjs.com/configuration/dev-server/
  devServer: {
    // 更多关于devServer.proxy的API，请参考http-proxy-middleware插件的API
    // 因为devServer.proxy api使用了http-proxy-middleware插件的API
    proxy: {
      '/dev-api': {
        target: 'http://localhost:3001/',
        pathRewrite: {
          '^/dev-api': '/'
        },
        changeOrigin: true, // target是域名的话，需要这个参数，
        // secure: true, // 设置支持https协议的代理
      },
      '/translate': {
        target: 'http://api.fanyi.baidu.com/',
        pathRewrite: {
          '^/translate': '/'
        },
        changeOrigin: true, // target是域名的话，需要这个参数，
        secure: true, // 设置支持https协议的代理
      },
      '/baidubce': {
        target: 'https://aip.baidubce.com/',      
        pathRewrite: {
          '^/baidubce': '/'
        },
        changeOrigin: true, // target是域名的话，需要这个参数，
        secure: true, // 设置支持https协议的代理
      },
    },
    overlay: { // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    open: false, // 是否自动打开浏览器
    host: "localhost", // 主机域名
    port: "8080", // 端口号
    hotOnly: true, // 热更新
    overlay: true, // 编译出错是否在浏览器中提示
  }
}
/*
 vue-cli3/4 webpack链式操作link: https://cli.vuejs.org/zh/config/#chainwebpack
 vue-cli3/4中的webpack链式调用与webpack常规的配置优点与区别：
 区别：异步引入加载;
 优点：避免阻塞进程;
*/