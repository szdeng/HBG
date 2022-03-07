<template>
    <div class="jc-component__range">
        <div class="jc-range" :class="rangeStatus?'success':''">
            <div class="pad">{{ rangeStatus?successText:'' }}</div>
            <i @mousedown="rangeMove" :class="rangeStatus?successIcon:startIcon"></i>
            {{ rangeStatus?'':startText }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'JcRange',
    props: {
        successFun: {
            type: Function
        },
        successIcon: {
            type: String,
            default: 'el-icon-success'
        },
        successText: {
            type: String,
            default: '验证成功'
        },
        startIcon: {
            type: String,
            default: 'el-icon-d-arrow-right'
        },
        startText: {
            type: String,
            default: '请拖住滑块，拖动到最右边'
        },
        errorFun: {
            type: Function
        },
        status: {
            type: String
        }
    },
    data(){
        return{
            disX: 0,
            rangeStatus: false
        }
    },
    methods: {
        rangeMove(e){
            let ele = e.target
            let startX = e.clientX
            let eleWidth = ele.offsetWidth
            let parentWidth = ele.parentElement.offsetWidth
            let MaxX = parentWidth - eleWidth
            let pad = document.getElementsByClassName('pad')[0]
            if(this.rangeStatus){
                return false
            }
            document.onmousemove = (e) => {
                let endX = e.clientX;
                this.disX = endX - startX
                if(this.disX <= 0){
                    this.disX = 0
                }
                if(this.disX >= MaxX - eleWidth){
                    this.disX = MaxX
                }
                ele.style.transition = '0s all'
                ele.style.transform = 'translateX('+this.disX+'px)'
                pad.style.width = this.disX + 'px'
                //jQuery event.preventDefault()方法,阻止元素发生默认的行为。
                //例如：当点击提交按钮时阻止对表单的提交
                //阻止url连接跳转
                e.preventDefault()
            }
            document.onmouseup = () => {
                if(this.disX !== MaxX){
                    ele.style.transition = '0s all'
                    ele.style.transform = 'translateX(0)'
                    pad.style.width = "0px"
                    this.errorFun && this.errorFun()
                }
                else{
                    this.rangeStatus = true
                    if(this.status){
                        //this.$parent,子组件直接访问父组件，$refs可以用来访问子组件
                        this.$parent[this.status] = true
                    }
                    this.successFun && this.successFun()
                }
                //清空鼠标动作
                document.onmousemove = null
                document.onmouseup = null
            }
        }
    }
}
</script>

<style lang='scss' scoped>
@mixin jc-flex{
    display: flex;
    justify-content: center;
    align-items: center;
}

.jc-component__range{
    .jc-range{
        background-color: #e9e9e9;
        position: relative;
        transition: 1s all;
        user-select: none;
        color: #585858;
        @include jc-flex;
        height: 40px;
        &.success{
            background-color: #3bc923;
            color: #fff;
            i{
                color: #3bc923
            }
        }
        i{
            position: absolute;
            left: 0;
            width: 50px;
            height: 100%;
            color: #3fcd26;
            background-color: #fff;
            border: 1px solid #d8d8d8;
            cursor: pointer;
            font-size: 24px;
            @include jc-flex;
        }
        .pad{
            position: absolute;
            left: 0;
            @include jc-flex;
            height: 100%;
            width: auto;
            background-color: #3bc923;
            color: #ffffff;
        }
    }
}
</style>