<template>
    <div>
        <!-- 组件的调用方式<home-header></home-header>或者<HomeHeader/> -->
        <!-- 显示当前被调用组件页面内的内容 -->
        <home-header></home-header>

    </div>
</template>

<script>
import HomeHeader from './pages/header'

export default {
  components: {
    HomeHeader
  }
}
</script>

<style scoped>

</style>
