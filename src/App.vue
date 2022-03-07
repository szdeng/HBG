<template>
  <div id="app">
    <el-container>
      <el-header>
        <myheader></myheader>
      </el-header>
      <el-main>
        <index class="main-box"></index>
      </el-main>
      <el-footer height="80px">
        <myfoot></myfoot>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import myheader from "@/views/myheader";
import index from "@/views/index";
import myfoot from "@/views/myfoot";

export default {
  name: "App",
  components: {
    myheader,
    index,
    myfoot,
  },
  created: function () {
    if(sessionStorage.getItem('userToken')&&
    sessionStorage.getItem('avatarUrl')&&
    sessionStorage.getItem('userName')){
      console.log('show session ======== ', sessionStorage.getItem('avatarUrl'));
      this.$store.dispatch("setUser", sessionStorage.getItem('userName'))
      this.$store.dispatch("setToken", sessionStorage.getItem('userToken'))
      this.$store.dispatch('setImage', sessionStorage.getItem('avatarUrl'))
    }
  },
};
</script>

<style lang='scss'>

body,ul,ol,p,h1,h2,h3,h4,h5,dl,dd,form,input,textarea,td,th,button,strong,em,select,video,canvas {
  margin: 0;
  padding: 0;
  font: 14px/1.5 Microsoft Yahei,Helvetica Neue,Helvetica,Arial,sans-serif;
  .el-textarea__inner:focus{
      border-color: lightblue;
      box-shadow: 0px 0px 5px 5px rgba(lightblue, 0.2);
  }
  .el-input__inner:focus {
      border-color: lightblue;
      box-shadow: 0px 0px 5px 5px rgba(lightblue, 0.2);
  }
}

#app{
  .el-container{
    min-height: 100vh;
    // background: linear-gradient(90deg, rgba(184, 179, 179, 0.1) 10%, transparent 0), linear-gradient(rgba(184, 179, 179, 0.1) 10%, transparent 0);
    background-size: 6px 6px;
    position: relative;
    // .bg{
    //   width: 100%;
    //   height: 300px;
    //   position: absolute;
    //   bottom: 0;
    //   z-index: -1;
    //   background: linear-gradient(to top, #ea3d48, #fff);
    // }
  }
  .el-header{
    padding: 0;
  }
  .el-main{
    padding: 0;
    background-color: rgba(213, 214, 212, 0.2);
    // background-color: rgba(153, 204, 255, 0.3);
    background-repeat: no-repeat;
    background-size: cover;
    .main-box{
      background-color: white;
      width: 1200px;
      margin: 0 auto 10px;
      padding: 20px 10px 10px;
      min-height: calc(100vh - 180px);
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
      box-shadow: 1px 1px 5px rgba($color: #6f6969, $alpha: 0.2);
    }
  }

  .el-footer{
    padding: 0;
    width: 100%;
    align-items: center;
    // background-color: rgb(150, 150, 142);
    background-color: rgba(213, 214, 212, 0.2);
  }
}


/*移动端*/
@media screen and (max-width: 767px) {
}

/*iPad 端*/
@media screen and (min-width: 768px) {
}

/*网页端 （包括了ipad pro及pc端)*/
@media screen and (min-width: 769px) {
}
</style>
