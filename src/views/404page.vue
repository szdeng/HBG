<template>
    <div class="NotPageBox">
        <div class="NotPage">
            <div class="message">更多模块正在开发中...</div>
            <div class="rail">
                <div class="stamp four">4</div>
                <div class="stamp zero">0</div>
                <div class="stamp four">4</div>
                <div class="stamp zero">0</div>
                <div class="stamp four">4</div>
                <div class="stamp zero">0</div>
                <div class="stamp four">4</div>
                <div class="stamp zero">0</div>
                <div class="stamp four">4</div>
                <div class="stamp zero">0</div>
                <div class="stamp four">4</div>
                <div class="stamp zero">0</div>
                <div class="stamp four">4</div>
                <div class="stamp zero">0</div>
                <div class="stamp four">4</div>
                <div class="stamp zero">0</div>
                <div class="stamp four">4</div>
                <div class="stamp zero">0</div>
                <div class="stamp four">4</div>
                <div class="stamp zero">0</div>
            </div>
            <div class="world">
                <div class="forward">
                    <div class="box">
                        <div class="wall"></div>
                        <div class="wall"></div>
                        <div class="wall"></div>
                        <div class="wall"></div>
                        <div class="wall"></div>
                        <div class="wall"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'notFoundPage'
}
</script>

<style lang="scss" scoped>
body{
    padding: 0;
    margin: 0;
    border: 0;
    width: 100%;
    height: 100%;
}

@keyframes textRotate {
    from {
        transform-origin: top;
        transform: rotateX(-30deg);
    }
    to {
        transform-origin: top;
        transform: rotateX(12deg);
    }
}

@-webkit-keyframes stampSlide{
    0% {
        -webkit-transform: rotateX(90deg) rotateZ(-90deg) translateZ(-100px) translateY(30px);
        transform: rotateX(90deg) rotateZ(-90deg) translateZ(-100px) translateY(30px);
    }
    100% {
        -webkit-transform: rotateX(90deg) rotateZ(-90deg) translateZ(-100px) translateY(-3870px);
        transform: rotateX(90deg) rotateZ(-90deg) translateZ(-100px) translateY(-3870px);
    }
}

@keyframes stampSlide{
    0% {
        -webkit-transform: rotateX(90deg) rotateZ(-90deg) translateZ(-100px) translateY(30px);
        transform: rotateX(90deg) rotateZ(-90deg) translateZ(-100px) translateY(30px);
    }
    100% {
        -webkit-transform: rotateX(90deg) rotateZ(-90deg) translateZ(-100px) translateY(-3870px);
        transform: rotateX(90deg) rotateZ(-90deg) translateZ(-100px) translateY(-3870px);
    }
}

@-webkit-keyframes zeroFour {
    0% {
        content: "4";
    }
    100% {
        content: "0";
    }
}

@keyframes zeroFour {
    0% {
        content: "4";
    }
    100% {
        content: "0";
    }
}

@-webkit-keyframes roll {
    0% {
        -webkit-transform: rotateZ(0deg);
        transform: rotateZ(0deg);
    }
    85% {
        -webkit-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
    }
    87% {
        -webkit-transform: rotateZ(88deg);
        transform: rotateZ(88deg);
    }
    90% {
        -webkit-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
    }
    100% {
        -webkit-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
    }
}

@keyframes roll {
    0% {
        -webkit-transform: rotateZ(0deg);
        transform: rotateZ(0deg);
    }
    85% {
        -webkit-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
    }
    87% {
        -webkit-transform: rotateZ(88deg);
        transform: rotateZ(88deg);
    }
    90% {
        -webkit-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
    }
    100% {
        -webkit-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
    }
}

@-webkit-keyframes slide {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    100% {
        -webkit-transform: translateX(-200px);
        transform: translateX(-200px);
    }
}

@keyframes slide {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    100% {
        -webkit-transform: translateX(-200px);
        transform: translateX(-200px);
    }
}



.NotPageBox{
    div{
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
    }
    .message{
        position: absolute;
        top: 20%;
        right: 25%;
        color: #ff6161;
        font-size: 30px;
        animation: textRotate 0.8s linear 0.5s infinite alternate;
    }
    .NotPage{
        position: relative;
        z-index: 10;
        background: rgb(255, 255, 255);
        height: 50vh;
        margin-top: -50px;
        overflow: hidden;
        display: flex;
        font-family: "Anton", sans-serif;
        justify-content: center;
        -webkit-perspective: 3000px;
        perspective: 3000px;
        transform: scale(0.7);
        .rail{
            position: absolute;
            widows: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            -webkit-transform: rotateX(-30deg) rotateY(-30deg);
            transform: rotateX(-30deg) rotateY(-30deg);
            .stamp{
                position: absolute;
                width: 200px;
                height: 200px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: rgba(255, 0, 0, 1.0);
                color: #fff;
                font-size: 7rem;
                &:nth-child(1) {
                    -webkit-animation: stampSlide 40000ms -2300ms linear infinite;
                    animation: stampSlide 40000ms -2300ms linear infinite;
                }
                &:nth-child(2) {
                    -webkit-animation: stampSlide 40000ms -4300ms linear infinite;
                    animation: stampSlide 40000ms -4300ms linear infinite;
                }
                &:nth-child(3) {
                    -webkit-animation: stampSlide 40000ms -6300ms linear infinite;
                    animation: stampSlide 40000ms -6300ms linear infinite;
                }
                &:nth-child(4) {
                    -webkit-animation: stampSlide 40000ms -8300ms linear infinite;
                    animation: stampSlide 40000ms -8300ms linear infinite;
                }
                &:nth-child(5) {
                    -webkit-animation: stampSlide 40000ms -10300ms linear infinite;
                    animation: stampSlide 40000ms -10300ms linear infinite;
                }
                &:nth-child(6) {
                    -webkit-animation: stampSlide 40000ms -12300ms linear infinite;
                    animation: stampSlide 40000ms -12300ms linear infinite;
                }
                &:nth-child(7) {
                    -webkit-animation: stampSlide 40000ms -14300ms linear infinite;
                    animation: stampSlide 40000ms -14300ms linear infinite;
                }
                &:nth-child(8) {
                    -webkit-animation: stampSlide 40000ms -16300ms linear infinite;
                    animation: stampSlide 40000ms -16300ms linear infinite;
                }
                &:nth-child(9) {
                    -webkit-animation: stampSlide 40000ms -18300ms linear infinite;
                    animation: stampSlide 40000ms -18300ms linear infinite;
                }
                &:nth-child(10) {
                    -webkit-animation: stampSlide 40000ms -20300ms linear infinite;
                    animation: stampSlide 40000ms -20300ms linear infinite;
                }
                &:nth-child(11) {
                    -webkit-animation: stampSlide 40000ms -22300ms linear infinite;
                    animation: stampSlide 40000ms -22300ms linear infinite;
                }
                &:nth-child(12) {
                    -webkit-animation: stampSlide 40000ms -24300ms linear infinite;
                    animation: stampSlide 40000ms -24300ms linear infinite;
                }
                &:nth-child(13) {
                    -webkit-animation: stampSlide 40000ms -26300ms linear infinite;
                    animation: stampSlide 40000ms -26300ms linear infinite;
                }
                &:nth-child(14) {
                    -webkit-animation: stampSlide 40000ms -28300ms linear infinite;
                    animation: stampSlide 40000ms -28300ms linear infinite;
                }
                &:nth-child(15) {
                    -webkit-animation: stampSlide 40000ms -30300ms linear infinite;
                    animation: stampSlide 40000ms -30300ms linear infinite;
                }
                &:nth-child(16) {
                    -webkit-animation: stampSlide 40000ms -32300ms linear infinite;
                    animation: stampSlide 40000ms -32300ms linear infinite;
                }
                &:nth-child(17) {
                    -webkit-animation: stampSlide 40000ms -34300ms linear infinite;
                    animation: stampSlide 40000ms -34300ms linear infinite;
                }
                &:nth-child(18) {
                    -webkit-animation: stampSlide 40000ms -36300ms linear infinite;
                    animation: stampSlide 40000ms -36300ms linear infinite;
                }
                &:nth-child(19) {
                    -webkit-animation: stampSlide 40000ms -38300ms linear infinite;
                    animation: stampSlide 40000ms -38300ms linear infinite;
                }
                &:nth-child(20) {
                    -webkit-animation: stampSlide 40000ms -40300ms linear infinite;
                    animation: stampSlide 40000ms -40300ms linear infinite;
                }
            }
        }
        .world{
            position: absolute;

            display: flex;
            justify-content: center;
            align-items: center;
            widows: 100%;
            height: 100%;
            -webkit-transform: rotateX(-30deg) rotateY(-30deg);
            transform: rotateX(-30deg) rotateY(-30deg);
            .forward{
                -webkit-animation: slide 2000ms linear infinite;
                animation: slide 2000ms linear infinite;
            }
            .box {
                width: 200px;
                height: 200px;
                -webkit-transform-origin: 100% 100%;
                transform-origin: 100% 100%;
                -webkit-animation: roll 2000ms cubic-bezier(1, 0.01, 1, 1) infinite;
                animation: roll 2000ms cubic-bezier(1, 0.01, 1, 1) infinite;
                .wall {
                    position: absolute;
                    width: 200px;
                    height: 200px;
                    background: rgba(255, 0, 0, 0.3);
                    border: 1px solid #fafafa;
                    box-sizing: border-box;
                    &::before{
                        content: "";
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #fff;
                        font-size: 7rem;
                    }
                    &:nth-child(1) {
                        -webkit-transform: translateZ(100px);
                        transform: translateZ(100px);
                    }
                    &:nth-child(2) {
                        -webkit-transform: rotateX(180deg) translateZ(100px);
                        transform: rotateX(180deg) translateZ(100px);
                    }
                    &:nth-child(3) {
                        -webkit-transform: rotateX(90deg) translateZ(100px);
                        transform: rotateX(90deg) translateZ(100px);
                        
                    }
                    &:nth-child(3)::before{
                        -webkit-transform: rotateX(180deg) rotateZ(90deg) translateZ(-1px);
                        transform: rotateX(180deg) rotateZ(90deg) translateZ(-1px);
                        -webkit-animation: zeroFour 4000ms -2000ms linear infinite;
                        animation: zeroFour 4000ms -2000ms linear infinite;
                    }
                    &:nth-child(4) {
                        -webkit-transform: rotateX(-90deg) translateZ(100px);
                        transform: rotateX(-90deg) translateZ(100px);
                        
                    }
                    &:nth-child(4)::before{
                        -webkit-transform: rotateX(180deg) rotateZ(-90deg) translateZ(-1px);
                        transform: rotateX(180deg) rotateZ(-90deg) translateZ(-1px);
                        -webkit-animation: zeroFour 4000ms -2000ms linear infinite;
                        animation: zeroFour 4000ms -2000ms linear infinite;
                    }
                    &:nth-child(5) {
                        -webkit-transform: rotateY(90deg) translateZ(100px);
                        transform: rotateY(90deg) translateZ(100px);
                        
                    }
                    &:nth-child(5)::before{
                        -webkit-transform: rotateX(180deg) translateZ(-1px);
                        transform: rotateX(180deg) translateZ(-1px);
                        -webkit-animation: zeroFour 4000ms linear infinite;
                        animation: zeroFour 4000ms linear infinite;
                    }
                    &:nth-child(6) {
                        -webkit-transform: rotateY(-90deg) translateZ(100px);
                        transform: rotateY(-90deg) translateZ(100px);
                        
                    }
                    &:nth-child(6)::before{
                        -webkit-transform: rotateX(180deg) rotateZ(180deg) translateZ(-1px);
                        transform: rotateX(180deg) rotateZ(180deg) translateZ(-1px);
                        -webkit-animation: zeroFour 4000ms linear infinite;
                        animation: zeroFour 4000ms linear infinite;
                    }
                }
            }
        }
    }
}
</style>