<template>
    <!-- <div :style="{
        backgroundImage: 'url(' + require('../assets/background.png') + ')'
    }"> -->
    <div>
        <router-view>
        </router-view>
    </div>
</template>

<script>
export default {
    name: "index",
    data(){
        return {
        }
    },
}
</script>

<style lang='less'>
body {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    min-height: 100%;
    min-width: 1200px;
}
/* 使主滚动条始终可见 */
html {   
    overflow: -moz-scrollbars-vertical; 
    overflow-y: scroll;
}
</style>