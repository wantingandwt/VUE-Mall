<template>
  <div>
    <div class="header">
        <div class="item-logo">
           <img src="../assets/logo.png">
        </div>
        <div class="header-title">
          <router-link to="/storeInfo">某欧便利店 &gt;</router-link>
          <p>公告：欢迎光临，很高兴为您服务…</p>
          <p>
            <span class="jisu">极速退款</span>
            <span class="biaoqian">"味道赞"</span>
            <span class="biaoqian">"服务好"</span>
          </p>
        </div>
        <router-link class="header-right" to="/evaluate">
            <h3>4.7</h3>
            <span class="ping">00评价</span>
        </router-link>
    </div>
    <router-link class="header-info" to="/info">
       <span>新</span>本店新用户立减3元<span>4个活动</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
$fff:#fff;
$font12:12px;
.float{
  float:left;
}
@mixin backLine($vcolor,$vcolor1,$vcolor2){
  background: -webkit-linear-gradient($vcolor,$vcolor1,$vcolor2);
  background: -o-linear-gradient($vcolor,$vcolor1,$vcolor2);
  background: -moz-linear-gradient($vcolor,$vcolor1,$vcolor2);
  background: linear-gradient($vcolor,$vcolor1,$vcolor2);
}
@mixin border($px,$solid,$vcolor){
  border:$px $solid $vcolor;
}
.header{
   @include backLine(#905533,#91621e,#664613);
   overflow: hidden;
   padding:5px;
   a{
      color: $fff;
   }
   .header-right {
     text-align: center;
     width:20%;
     @extend .float;
     h3{
       margin-top:20px;
     }
   }
   .header-title{
     width:60%;
      @extend .float;
      a{
          font-weight: 600;
          font-size:$font12+4;
          color:#f9ffff;
          width: 100%;
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      p{
        font-size:$font12;
        width: 100%;
        color:#eac8a5;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
   }
}
.jisu{
  color:#10b6a0;
  font-size: $font12;
  padding:0 5px;
   @include border(1px,solid,#10b6a0);
  
}
.biaoqian{
  color:#f7cf77;
  font-size: $font12;
   padding:0 5px;
   @include border(1px,solid,#c49851);
   border-radius: 10px;
}
.item-logo{
    width:18%;
    max-width: 60px;
     @extend .float;
     margin-right:2%;
    img{
      width: 100%;
      margin-top: 7px;
    }
}
.ping{
  color:$fff;
  font-size: $font12;
  border-radius: 10px;
  @include border(1px,solid,$fff);
  padding:0 10px;
}
</style>
