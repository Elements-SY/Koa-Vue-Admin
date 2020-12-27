<template>
  <div class="xss_wrap">
    <p v-html="test1"></p>
    <p v-html="$xss(test2)"></p>
  </div>
</template>

<script>

export default {
  name: 'xss',
   data () {
    return {
      test1: `<a onclick='alert("xss攻击")'>XSS SQL注入点我试试</a>`,
      test2: `<a onclick='alert("xss攻击")'>链接</a>`
    }
   }
}
</script>
<style lang="scss" scoped>

</style>
