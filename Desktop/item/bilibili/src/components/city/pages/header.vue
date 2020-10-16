<template>
  <div class="header">
    <div class="header-left">
      <span @click="toHome" class="iconfont">&#xe743;</span>
    </div>
    <div class="header-title">
        SELECT  CITY
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      // 切换路由
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
// 引入stylus方式一
// @import '../../../assets/css/var.styl'
// 方式二
@import '~@/assets/css/var.styl';

.header {
  width: 100%;
  line-height: 0.88rem;
  // background:blue;
  background: $bgColor; // 调用stylus中定义的变量
  color: #fff;
  font-size: 0.36rem;
  position: relative;
}

.header-left {
  width: 0.4rem;
  padding: 0 0.2rem;
  text-align: center;
  font-weight: bold;
  position: absolute;
}
.header-left header-title {
  font-size : .2rem;
  color : #000;
}
</style>
