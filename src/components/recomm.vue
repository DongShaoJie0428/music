<template>
  <div class="box">
    <div class="header">
      <div class="header_search">
        <img src="../../static/img/1.jpg" alt="">
        <div class="search">
          <img src="../../static/img/2.jpg" alt="">
          <input type="text" placeholder="猜你喜欢浮生">
        </div>
        <img src="../../static/img/15.jpg" alt="">
      </div>
      <div class="tabchange">
        <span class="active">个性推荐</span>
        <span>主播电台</span>
      </div>
    </div>
    <div class="swiperlist">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item,index) in swiperList" :key="index">
          <img :src="item.url" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperList: [
        {
          url:"../../static/img/16.png"
        }, {
          url:"../../static/img/17.jpg"
        }, {
          url:"../../static/img/18.jpg"
        }, {
          url:"../../static/img/19.jpg"
        }
      ]
    }
  }
}
</script>

<style>
.box{
  width:100%;
  height:100%;
}
.header{
  position: relative;
  width:100%;
  height:250px;
  background: #33383B;
}
.header_search{
  width:100%;
  height:44px;
  background: #33383B;
  display:flex;
  justify-content: space-between;
  padding:0 5px;
  box-sizing: border-box;
}
.header .header_search img{
  width:25px;
  height:25px;
  margin-top:10px;
  
}
.header .header_search .search{
  margin-top:10px;
  position: relative;
  width:300px;
  height:30px;
  background: #5B6161;
  border-radius: 15px;
  padding: 0 10px;
  box-sizing: border-box;
}
.header .header_search .search img{
  position: absolute;
  left:80px;
  top:-5px;
}
.header .header_search .search input{
  width:100%;
  height:30px;
  background: #5B6161;
  text-align: center;
  border:none;
  color:#767A7B;
}
.header .tabchange{
  width:100%;
  height:50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color:#fff;
}
.active{
  border-bottom: solid 3px #fff;
}
.el-carousel{
  width:95%;
  height:200px;
  position: absolute;
  left:0;
  top:100px;
  margin:0 10px;
  box-sizing: border-box;
  
}
.el-carousel__container{
   width: 100%;
   height: 100%;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}
</style>
