<template>
    <div class="city">
        <city-header></city-header>
        <city-hot></city-hot>
        <city-sort></city-sort>
    </div>
</template>
<script >
import CityHeader from './pages/header'
import CityHot from './pages/hot'
import CitySort from './pages/sort'

export default {
  components: {
    CityHeader,
    CityHot,
    CitySort
  }
}
</script>

<style lang="stylus" scoped>
.city {
  background : #f5f5f5;
}
</style>
