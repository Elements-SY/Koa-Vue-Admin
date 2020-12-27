<template>
  <main>
    <section>
      <h3>Vue脚手架(Vue-Cli)</h3>
      <p>
        <strong>Vue-Cli安装：</strong>
        Vue CLI 4.x 需要 Node.js v8.9 或更高版本 (推荐 v10 以上) npm install -g
        @vue/cli 查看当前版本：@vue/cli --version or vue --version
        如果vue-cli脚手架不是最新的可以通过npm update -g @vue/cli该命令升级。
        通过vue脚手架快速创建一个项目：vue create xxx
      </p>
      <p>
        <strong>Vue-Cli卸载：</strong>
        全局卸载 npm uninstall -g @vue/cli
        卸载完毕之后去全局npm目录下检查是否完全卸载干净，如果有冗余的可以手动删除卸载相关的模块。
      </p>
      <p>
        <strong>脚手架的概念：</strong>
        脚手架即是将多个模块构建成一个产品的工具。
        比如webpack-cli脚手架就是构建打包成一个产品的工具。
        vue-cli脚手架即是构建一个成品项目框架的工具。
      </p>
      <p>
        <strong>vue脚手架插件预设：</strong>
        Vue CLI 使用了一套基于插件的架构。如果你查阅一个新创建项目的
        package.json， 就会发现依赖都是以 @vue/cli-plugin- 开头的。插件可以修改
        webpack 的内部配置， 也可以向 vue-cli-service
        注入命令。在项目创建的过程中， 绝大部分列出的特性都是通过插件来实现的。
      </p>
      <p>
        <strong>vue脚手架3和4与Vue脚手架2的区别：</strong>
        在vue-cli2快速构建的项目中我们发现会有webpack本地配置文件，很多配置都需要自己手动往里添加。
        但是在vue-cli3和vue-cli4中实现了插件环境预设，假设需要通过webpack打包处理es6转es3，我们需要babel插件。
        那么这时我们没必要自己在webpack中配置babel转换编译插件来打包处理我们的代码，
        只需要通过下载@vue/cli-plugin-babel插件即可。
        上述说了那么多，其实vue脚手架3和4新增的插件预设与vue脚手架2最大的区别就是针对webpack配置实现了插件化配置，
        需要webpack处理什么资源或者语法直接下载安装插件即可。但并不是在vue脚手架3和4快速构建的项目中默认都给予了处理，
        对此vue脚手架3和4提供了webpack配置入口vue.config.js该文件名即是默认提供的入口文件配置项。
      </p>
      <p>
        <strong>vue.config.js文件的作用：</strong>
        关于<a href="javascript:;" @click="link(cliConfigLink)">vue.config.js</a>
        配置其中原理就是对外提供了webpack全局对象，但并不是所有的都可以修改，有些内部做了调整是不允许修改的options。
      </p>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      cliConfigLink: "https://cli.vuejs.org/zh/config/", // vue.config.js配置参考链接入口
    };
  },
  methods: {
    link(path) {
      window.open(path);
    },
  },
};
</script>
