<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe743;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe743;</span>
      输入城市／景点／游玩主题
    </div>
    <div class="header-right">
      北京
      <span class="iconfont">&#xe600;</span>
    </div>
  </div>
</template>

<script></script>

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
  display: flex;
}

.header-left {
  width: 0.4rem;
  padding: 0 0.2rem;
  text-align: center;
  font-weight: bold;
}

.header-search {
  flex: 1;
  background: #fff;
  height: 0.6rem;
  margin: 0.14rem;
  border-radius: 0.1rem;
  color: #e4e7ea;
  line-height: 0.6rem;
  padding-left: 0.2rem;
  font-size: 0.28rem;
  text-align: left;
}

.header-right {
  font-size: 0.28rem;
  padding-right: 0.2rem;
}
</style>
