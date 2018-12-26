<template>
  <div class="box">
    <div class="navlist">
      <dl v-for="(nav,index) in navlist" :key="index">
        <dd><img :src="nav.url" alt=""></dd>
        <dt>{{nav.title}}</dt>
      </dl>
    </div>
    <div class="recomm">
      <p>推荐歌单 > </p>
    </div>
    <div class="list_con">
      <dl v-for="(songs,index) in songList" :key="index">
        <dd><img :src="songs.url" alt=""></dd>
        <dt>{{songs.title}}</dt>
      </dl>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navlist:[
        {
          url:"../../static/img/3.jpg",
          title:"私人FM"
        }, {
          url:"../../static/img/4.jpg",
          title:"每日推荐"
        }, {
          url:"../../static/img/5.jpg",
          title:"歌单"
        }, {
          url:"../../static/img/6.jpg",
          title:"排行榜"
        }
      ],
      songList:[
        {
          url:"../../static/img/7.jpg",
          title:"要做什么梦是每个人的自由"
        }, {
          url:"../../static/img/8.jpg",
          title:"若不能在一起，来世你愿陪我看遍千山万水嘛"
        }, {
          url:"../../static/img/9.jpg",
          title:"我的民谣你的故事"
        }, {
          url:"../../static/img/7.jpg",
          title:"要做什么梦是每个人的自由"
        }, {
          url:"../../static/img/8.jpg",
          title:"若不能在一起，来世你愿陪我看遍千山万水嘛"
        }, {
          url:"../../static/img/9.jpg",
          title:"我的民谣你的故事"
        }
      ]
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
.recomm{
  width:100%;
  height:44px;
  line-height: 44px;
  padding-left:10px;
  box-sizing: border-box;
  border-top:solid 1px #ccc;
  margin-top:15px;
}
.list_con{
  width:100%;
  height:400px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.list_con dl{
  width:33%;
  height:170px;
}
.list_con dl dd{
  width:30%;
  height:100px;
}
.list_con dl dd img{
  width:125px;
  height:125px;
  padding:8px;
  box-sizing: border-box;
}
.list_con dl dt{
  padding-top:20px;
  padding-left:10px;
  box-sizing: border-box;
  font-size: 12px;
}

</style>
