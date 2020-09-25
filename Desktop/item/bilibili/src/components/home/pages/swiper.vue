<template>
  <div class="header-swiper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for='item in swiperList' :key="item.id">
          {{ item.imgUrl }}
          <!-- <img :src="item.imgUrl" alt=""> -->
          </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperList: [
        {
          id: '02',
          imgUrl: 'Swiper02'
        },
        {
          id: '03',
          imgUrl: 'swyper03'
        },
        {
          id: '04',
          imgUrl: 'swiper04'
        }

      ],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        }
        // loop: true  //   循环显示

      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  }
}
</script>

<style scoped>
.header-swiper{
  width: 100%;
  height: 2rem;
}
</style>
