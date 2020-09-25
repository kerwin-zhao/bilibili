<template>
  <div class="icons">
    <div class="icons-item" v-for="item in iconsList" :key="item.id" >
      <!-- <swiper :options="swiperOptions">
        <swiper-slide v-for='(item,key) in page' :key="key">
          <div class="icons-item" v-for="page in item" :key="page.id">
            <img :src=page.imgurl alt />
            <p>{{ page.title }}</p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper> -->
      <img :src=item.imgurl alt />
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      iconsList: [
        {
          id: '01',
          imgurl:
            'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
          title: '机票'
        },
        {
          id: '02',
          imgurl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          title: '"酒店"'
        },
        {
          id: '03',
          imgurl: 'https://s.qunarzz.com/homenode/images/touchheader/train.png',
          title: '"火车票"'
        },
        {
          id: '04',
          imgurl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
          title: '"景点门票"'
        },
        {
          id: '05',
          imgurl:
            'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png',
          title: '海外酒店'
        },
        {
          id: '06',
          imgurl:
            'https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png',
          title: '攻略'
        },
        {
          id: '07',
          imgurl:
            'https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png',
          title: '汽车票船票'
        },
        {
          id: '05',
          imgurl:
            'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png',
          title: '海外酒店'
        },
        {
          id: '06',
          imgurl:
            'https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png',
          title: '攻略'
        },
        {
          id: '07',
          imgurl:
            'https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png',
          title: '汽车票船票'
        }
      ]
    }
  },
  computeds: {
    // 更改swiper功能
    page () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const idx = Math.floor(index / 8)
        if (!pages[idx]) pages[idx] = []
        pages[idx].push(item)
      })
    }
  }
}
</script>

<style  scoped>
.icons {
    width: 100%;
    height: 200px;
    overflow: hidden;
    /* background: chocolate; */
}
.icons-item {
  width: 25%;
  padding-bottom: 25%;
  /* background: lightcoral; */
  height: 0rem;
  float: left;
}
.icons-item img {
  width: 1.1rem;
  /* height: 100%; */
  padding-top: 0.2em;
}
.icons p {
  font-size: 0.2rem;
  text-align: center;
}
</style>
