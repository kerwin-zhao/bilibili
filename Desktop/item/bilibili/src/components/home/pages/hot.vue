<template>
    <div class="hot">
      <div class="hot-item">
          <ul>
              <li v-for="item in HotList" :key="item.id">
                      <img :src=item.imgurl alt="" />
                      <p>{{ item.title }}</p>
                      <p>$ {{item.money }}</p>
              </li>
          </ul>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      HotList: [
        {
          id: '01',
          imgurl: 'https://imgs.qunarzz.com/p/p19/1809/b9/2a3d362aabcbb02.jpg_256x160_28907832.jpg',
          title: '喊往返机票+4晚住宿',
          money: '2409'
        },
        {
          id: '02',
          imgurl: 'https://imgs.qunarzz.com/p/p19/1809/b9/2a3d362aabcbb02.jpg_256x160_28907832.jpg',
          title: '含往返机票（含稅）+5晚住宿',
          money: '2993'
        },
        {
          id: '03',
          imgurl: 'https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg',
          title: '含往返机票（含稅）+4晚住宿',
          money: '2676'
        },
        // {
        //   id: '04',
        //   imgurl: 'https://imgs.qunarzz.com/p/p32/1504/46/5a0a9ac552e26d.jpg_256x160_a63acde6.jpg',
        //   title: '含往返火车票+4晚住宿',
        //   money: '1529'

        // },
        {
          id: '05',
          imgurl: 'https://imgs.qunarzz.com/p/p32/1504/46/5a0a9ac552e26d.jpg_256x160_a63acde6.jpg',
          title: 'test',
          money: '99999'
        }
      ]
    }
  }
}
</script>

<style scoped>
.hot p {
    font-size: .3rem;
    white-space: nowrap;
    text-align: left;
}
.hot {
    display: flex;
}
.hot-item {
    flex: 1;
    /* flex-wrap: wrap; */
}
img {
    width: 3rem;
    height: 100%;
}
li {
    width: 3rem;
    height: 100%;
    overflow: hidden;
    padding:0 2px ;
    margin: 0px;
    display: inline-block;
    margin-left: 0px;
}
</style>
