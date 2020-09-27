<template>
    <div>
        <!-- 组件的调用方式<home-header></home-header>或者<HomeHeader/> -->
        <!-- 显示当前被调用组件页面内的内容 -->
        <home-header></home-header>
        <!-- <Myswiper></Myswiper> -->
        <home-icons></home-icons>
        <home-location></home-location>

    </div>
</template>

<script>
import HomeHeader from './pages/header'
// import Myswiper from './pages/swiper'
import HomeIcons from './pages/icons'
import HomeLocation from './pages/location'

export default {
  components: {
    HomeHeader,
    // Myswiper,
    HomeIcons,
    HomeLocation
  }
}
</script>

<style scoped>

</style>
