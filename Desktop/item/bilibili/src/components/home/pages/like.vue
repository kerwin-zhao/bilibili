<template>
    <div class="like">
      <div class="like-item" v-for="item in likeList" :key="item.id">
        <div class="tupian">
             <img :src=item.imgurl  alt="">
        </div>
        <div class="text-content">
            <p class="title">{{ item.title }}</p>
            <p class="">{{ item.num }} 条评论</p>
            <p class="money">¥ {{ item.money }}元起</p>
            <p class="map">{{ item.map }}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      likeList: [
        {
          id: '01',
          imgurl:
            'https://img1.qunarzz.com/sight/p65/201211/07/2dcda4e400ace9f993835fbb.jpg_256x160_b1a93ad3.jpg',
          title: '景区1',
          num: '9001',
          money: '189',
          map: '松江区'
        },
        {
          id: '02',
          imgurl: 'https://img1.qunarzz.com/sight/p65/201211/07/2dcda4e400ace9f993835fbb.jpg_256x160_b1a93ad3.jpg',
          title: '景点2',
          money: '120',
          num: '902',
          map: 'hongkong'
        },
        {
          id: '03',
          imgurl: 'https://img1.qunarzz.com/sight/p65/201211/07/2dcda4e400ace9f993835fbb.jpg_256x160_b1a93ad3.jpg',
          title: '景点三',
          money: '190',
          map: 'city one'
        }
      ]
    }
  }
}
</script>
<style scoped>
.like {
    width: 100%;
    margin: .2rem .3rem;
    position: relative;
}
.like-item {
    /* position: relative; */
    height: 2rem;
}
.like-item .tupian {
    float: left;
}
.like-item img {
    width: 3rem;
    height: 2rem;
    overflow: hidden;
    /* position: absolute; */
}
.like-item .text-content {
    /* position: absolute; */
    width: 100%;
}
.like-item p {
    font-size: .3rem;
    padding-left: 3.3rem;
    margin-top: .2rem;
    text-align: left;
}
.like-item .text-content  .title {
    color: coral;
    font-size: .6rem;
}
.money {
    /* float: left; */
}
.like-item .text-content .map {
    padding-right: .8rem;
    text-align: right;
    color: coral;
}
</style>
