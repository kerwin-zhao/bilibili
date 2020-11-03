<template>
    <div class="hot">
        <div class="sp">热门城市</div>
        <div>
            <ul class="hot-list">
                <li  @click="changecity('shanghia')" class="hot-item">
                    上海
                </li>
                 <li @click="changecity('cityName')" class="hot-item">
                    天津
                </li>
                 <li   @click="changecity('cityName')" class="hot-item">
                    合肥
                </li>
                 <li class="hot-item">
                    深圳
                </li>
                 <li class="hot-item">
                    广州
                </li>
                 <li class="hot-item">
                    南京
                </li><li class="hot-item">
                    北京
                </li>
                <li class="hot-item">
                    上海
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      cityList: [
        {
          id: '1',
          name: 'shanghai'
        }
      ]
    }
  },
  methonds: {
    changecity(cityName) {
      alert(cityName)
    }
  }
}
</script>

<style scoped>
.hot .sp {
    font-size: .28rem;
    text-align: left;
    color: #212121;
    margin: .2rem;
}
.hot-list {
    overflow: hidden;
    /* width: 101%; */
    background: #fff;
    position: relative;
}
.hot-list:before {
    content: '';
    height: 100%;
    width: 33.333%;
    right: 33.333%;
    position: absolute;
    border-right: solid rgb(177, 175, 175) 1px;
    border-left: solid rgb(177, 175, 175) 1px;
}
.hot-item {
    color: #212121;
    font-size: .28rem;
    text-align: center;
    height: .5rem;
    line-height: .5rem;
    /* border-bottom: rgb(177, 175, 175) solid 1px;
    border-right: rgb(177, 175, 175) solid 1px;
    width: 33.09%; */
    width: 33.333%;
    border-bottom: solid rgb(177, 175, 175) 1px;
    float: left;
}

</style>
