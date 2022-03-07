<template>
    <div class="gmb-box">
        <i class="gmb-button" :class="status?getIcon:collectIcon" @click="changeStatus"></i>
    </div>
</template>

<script>
export default {
    name: 'getMoreButton',
    props: {
        getFun: {
            type: Function
        },
        collectFun: {
            type: Function
        },
        getIcon: {
            type: String,
            default: 'el-icon-d-arrow-right'
        },
        collectIcon: {
            type: String,
            default: 'el-icon-d-arrow-left'
        }
    },
    data(){
        return {
            status: true
        }
    },
    methods: {
        changeStatus(){
            if(this.status){
                this.status = false
                this.getFun && this.getFun()
            }
            else{
                this.status = true
                this.collectFun && this.collectFun()
            }
        }
    }
}
</script>

<style lang='scss' scoped>
.gmb-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 18px;
    .gmb-button{
        cursor: pointer;
        font-size: 20px;
        &:hover{
            color: rgb(252, 25, 25);
        }
    }
}
</style>