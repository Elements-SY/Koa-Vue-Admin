<template>
  <main>
    <section>
      <h3>Vue指令概述：</h3>
      <p>
        DOM属性指令适用于无可避免的需要操作元素的情况下，
        如果仅是为了往DOM中fill文本，大可不必操作DOM。只需操作该DOM所绑定依赖的数据层即可，
        大可不必使用DOM属性指令，否则会消耗Web性能。
        至于自定义属性指令使用在什么场景，我们不如来先思考一下指令大概是如何实现的，
        然后再回过头来讨论自定义指令使用在什么场景下。
        笔者为此埋下伏笔即是为了使你更能深刻的认识指令与DOM数据层两者的区别。
      </p>
    </section>

    <section>
      <h3>Vue的指令有哪些？</h3>
      <p>
        <!-- <router-link target="_blank" :to="directiveLink">Vue指令文档</router-link> -->
        <a href="javascript:;" @click="link(directiveLink)">Vue指令文档</a>
        在说指令时，我们先回顾一下有哪些指令？
        v-html、v-text、v-show、v-if、v-for、v-on 等等(etc)。
        这些指令都是用来操作DOM的，它们的实现有的是操作DOM的innerHTML api;
        有的是操作DOM的innerText api;有的是操作DOM的display
        api;还有的是操作DOM的事件api等等。甭管操作哪个api都免不了终会操作DOM元素。
        从这些看来我们可以给指令分为两大类，即属性指令和事件指令
      </p>
    </section>

    <section>
      <h3>Vue指令实现的猜想</h3>
      <p>
        <strong>猜想一：</strong>
        如前所述指令即是对DOM元素的操作，有的是操作DOM的innerHTML api;
        有的是操作DOM的innerText api;有的是操作DOM的display
        api;还有的是操作DOM的事件api等等。
      </p>
      <p>
        <strong>猜想二：</strong>
        从上述猜想一描述的是没错，那么为什么绑定v-text指令,v-text指令属性的值就修改了DOM的文本呢？
        我们试想一下，首先我们是不是需要获取DOM，并且查找到某个元素是不是有v-text这个属性，如果有那么是不是就获取当前有v-text属性的元素
        获取到当前有v-text属性的元素了，是不是就可以使用当前元素对象点上innerText给予赋值了(dom.innerText
        = '北京') 那么如何查找元素对象身上有某个属性呢，我们是不是可以通过
        <!-- <router-link target="_blank" :to="nodeTypeLink">nodeType</router-link> -->
        <a href="javascript:;" @click="link(nodeTypeLink)">nodeType</a>
        枚举一个节点的类型。
        然后通过做判断，假设当前元素对象的nodeType等于2是属性类型，并且该元素对象的nodeName等于v-text属性。
        此时我们取当前nodeName等于v-text属性的元素对象，最后我们再通过innerText给予赋值即可。
      </p>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      directiveLink: "https://cn.vuejs.org/v2/api/#%E6%8C%87%E4%BB%A4", // Vue指令属性官方链接入口
      nodeTypeLink: "https://www.w3school.com.cn/jsref/prop_node_nodetype.asp", // HTML DOM nodeType 属性官方链接入口
    };
  },
  methods: {
    link(path) {
      window.open(path);
    },
  },
};
</script>
