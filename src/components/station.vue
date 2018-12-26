<template>
  <div>
    <div class="navlist">
      <dl v-for="(nav,index) in navlist" :key="index">
        <dd><img :src="nav.url" alt=""></dd>
        <dt>{{nav.title}}</dt>
      </dl>
    </div>
    <div class="today">
      <p>今日优选</p>
    </div>
    <div>
      <div class="tuijianList">
        <img src="../../static/img/24.jpg" alt="">
        <div class="tuijianInfo">
          <p>末那大叔</p>
          <span class="infoData">节目：18</span>
          <span class="infoData">愿你的故事有人你能懂</span>
        </div>
      </div>
      <div class="tuijianList">
        <img src="../../static/img/25.jpg" alt="">
        <div class="tuijianInfo">
          <p>七月的风八月的雨，卑微的我喜欢</p>
          <span class="infoData">节目：281</span>
          <span class="infoData">失去猜到</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navlist:[
        {
          url:"../../static/img/20.jpg",
          title:"电台分类"
        }, {
          url:"../../static/img/21.jpg",
          title:"电台排行"
        }, {
          url:"../../static/img/22.jpg",
          title:"DI电音"
        }, {
          url:"../../static/img/23.jpg",
          title:"小冰电台"
        }
      ],
    }
  }
}
</script>

<style>
.navlist{
  width:100%;
  height:80px;
  margin-top:65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navlist dl{
  width:25%;
  height:80px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navlist dl img{
  width:60px;
  height:60px;
}
.navlist dl dt{
  font-size: 14px;
}
.infoData{
  font-size: 12px;
  color: #737476;
}
.tuijianList{
  width: 100%;
  padding: 6px;
  box-sizing: border-box;
  display: flex;
}
.tuijianList img{
  width: 80px;
  height: 80px;
}
.tuijianInfo{
  flex: 1;
  padding: 8px;
  box-sizing: border-box;
}
.today{
  width: 100%;
  height:44px;
  line-height: 44px;
  padding: 10px;
  box-sizing: border-box;
  font-weight: 800;
}
  .tuijian{
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ccc;
    padding-bottom: 12px;
  }

</style>
