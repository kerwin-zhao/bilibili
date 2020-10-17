<template>
    <div class="city">
        <city-header></city-header>
        <city-hot></city-hot>
    </div>
</template>
<script >
import CityHeader from './pages/header'
import CityHot from './pages/hot'
export default {
  components: {
    CityHeader,
    CityHot
  }
}
</script>

<style lang="stylus" scoped>
.city {
  background : #f5f5f5;
}
</style>
