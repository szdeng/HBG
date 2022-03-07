<template>
    <div class="index-box">
        <el-row class="top-box">
            <el-col :span="1">
                <div class="pageturn" @click="pageTurn('left')">
                    <i class="el-icon-caret-left"></i>
                </div>
            </el-col>
            <el-col :span="22">
                <el-row :gutter="20">
                    <el-col :span="6" v-for="(item, index) in showList" :key="'show' + index">
                        <div class="image-box">
                            <el-image :src="item"></el-image>
                        </div>
                        
                    </el-col>                
                </el-row>
            </el-col>
            <el-col :span="1">
                <div class="pageturn" @click="pageTurn('right')">
                    <i class="el-icon-caret-right"></i>
                </div>
            </el-col>
        </el-row>
        <el-carousel :interval="4000" height="200px">
            <el-carousel-item v-for="item in showList" :key="item">
                <!-- <h3 class="medium">{{ item }}</h3> -->
                <el-image
                    :src="item"
                    style="height: 200px; width: 1080px"></el-image>
            </el-carousel-item>
        </el-carousel>
        <h2>标题</h2>
        <el-card v-for="(item, index) in list" :key="index" :body-style="{ padding: '0px' }">
            <el-row>
                <el-col :span="4" style="padding: 0">
                    <el-image
                        :src="item.imageUrl">
                    </el-image>
                </el-col>
                <el-col :span="20">
                    <div class="content-box">
                        {{ item.content }}
                    </div>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'index',
    data(){
        return {
            page: 1,
            sourceList:[
                require('../../../public/assets/show-1.jpg'),
                require('../../../public/assets/show-2.jpg'),
                require('../../../public/assets/show-3.jpg'),
                require('../../../public/assets/show-4.jpg'),
                require('../../../public/assets/show-1.jpg'),
                require('../../../public/assets/show-2.jpg'),
            ],
            showList:[
                require('../../../public/assets/show-1.jpg'),
                require('../../../public/assets/show-2.jpg'),
                require('../../../public/assets/show-3.jpg'),
                require('../../../public/assets/show-4.jpg'),
            ],
            list:[
                {
                    imageUrl: require("../../../public/assets/test-2.jpg"),
                    content: '稀有血型就是一种少见或罕见的血型。这种血型不仅在ABO血型系统中存在，而且在稀有血型系统中也还存在一些更为罕见的血型。随着血型血清学的深入研究，科学家们已将所发现的稀有血型，分别建立起的稀有血型系统，如RH、MNSSU、P、KELL、KIDD、LUTHERAN、DEIGO、LEWIS、DUFFY以及其他一系列稀有血型系统。'
                },
                {
                    imageUrl: require("../../../public/assets/test-2.jpg"),
                    content: '稀有血型就是一种少见或罕见的血型。这种血型不仅在ABO血型系统中存在，而且在稀有血型系统中也还存在一些更为罕见的血型。随着血型血清学的深入研究，科学家们已将所发现的稀有血型，分别建立起的稀有血型系统，如RH、MNSSU、P、KELL、KIDD、LUTHERAN、DEIGO、LEWIS、DUFFY以及其他一系列稀有血型系统。'
                },
                {
                    imageUrl: require("../../../public/assets/test-2.jpg"),
                    content: '稀有血型就是一种少见或罕见的血型。这种血型不仅在ABO血型系统中存在，而且在稀有血型系统中也还存在一些更为罕见的血型。随着血型血清学的深入研究，科学家们已将所发现的稀有血型，分别建立起的稀有血型系统，如RH、MNSSU、P、KELL、KIDD、LUTHERAN、DEIGO、LEWIS、DUFFY以及其他一系列稀有血型系统。'
                },
                {
                    imageUrl: require("../../../public/assets/test-2.jpg"),
                    content: '稀有血型就是一种少见或罕见的血型。这种血型不仅在ABO血型系统中存在，而且在稀有血型系统中也还存在一些更为罕见的血型。随着血型血清学的深入研究，科学家们已将所发现的稀有血型，分别建立起的稀有血型系统，如RH、MNSSU、P、KELL、KIDD、LUTHERAN、DEIGO、LEWIS、DUFFY以及其他一系列稀有血型系统。'
                },
                {
                    imageUrl: require("../../../public/assets/test-2.jpg"),
                    content: '稀有血型就是一种少见或罕见的血型。这种血型不仅在ABO血型系统中存在，而且在稀有血型系统中也还存在一些更为罕见的血型。随着血型血清学的深入研究，科学家们已将所发现的稀有血型，分别建立起的稀有血型系统，如RH、MNSSU、P、KELL、KIDD、LUTHERAN、DEIGO、LEWIS、DUFFY以及其他一系列稀有血型系统。'
                },
                {
                    imageUrl: require("../../../public/assets/test-2.jpg"),
                    content: '稀有血型就是一种少见或罕见的血型。这种血型不仅在ABO血型系统中存在，而且在稀有血型系统中也还存在一些更为罕见的血型。随着血型血清学的深入研究，科学家们已将所发现的稀有血型，分别建立起的稀有血型系统，如RH、MNSSU、P、KELL、KIDD、LUTHERAN、DEIGO、LEWIS、DUFFY以及其他一系列稀有血型系统。'
                },
                {
                    imageUrl: require("../../../public/assets/test-2.jpg"),
                    content: '稀有血型就是一种少见或罕见的血型。这种血型不仅在ABO血型系统中存在，而且在稀有血型系统中也还存在一些更为罕见的血型。随着血型血清学的深入研究，科学家们已将所发现的稀有血型，分别建立起的稀有血型系统，如RH、MNSSU、P、KELL、KIDD、LUTHERAN、DEIGO、LEWIS、DUFFY以及其他一系列稀有血型系统。'
                },
                {
                    imageUrl: require("../../../public/assets/test-2.jpg"),
                    content: '稀有血型就是一种少见或罕见的血型。这种血型不仅在ABO血型系统中存在，而且在稀有血型系统中也还存在一些更为罕见的血型。随着血型血清学的深入研究，科学家们已将所发现的稀有血型，分别建立起的稀有血型系统，如RH、MNSSU、P、KELL、KIDD、LUTHERAN、DEIGO、LEWIS、DUFFY以及其他一系列稀有血型系统。'
                },
            ]
        }
    },
    methods: {
        pageTurn(e){
            console.log(e);
            if(e === 'right'){
                if(this.page*4 < this.sourceList.length){
                    const arr = this.sourceList.slice(this.page*4,this.page*4+4)
                    this.page++
                    this.showList = arr
                    console.log(arr);
                }
                else{
                    console.log('没图了');
                }
            }
            else{
                if(this.page != 1){
                    this.page--
                    const arr = this.sourceList.slice(this.page*4-4,this.page*4)
                    this.showList = arr
                    console.log(arr);
                }
                else{
                    console.log('没图了');
                }
            }
        }
    }
}
</script>

<style lang='scss' scoped>
.index-box{
    width: 1080px;
    margin: 0 auto;
    .top-box{
        width: 1080px;
        margin: 20px auto 0; 
        .image-box{
            margin: 0 auto;
            width: 212px;
        }
        .pageturn{
            margin: 0 auto 0;
            height: 120px;
            // background: #99CCFF;
            width: 30px;
            cursor: pointer;
            text-align: center;
            line-height: 120px;
            font-size: 30px;
            transition: all 800ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
            color: #333333;
            background: rgb(153, 200, 254);
            // box-shadow: rgba(204, 54, 137, 0.4) 0 0px 0px 2px inset;
            box-shadow: rgb(99, 147, 203) 0 0px 0px 2px inset;
            &:hover{
                // background: #e41717;
                color: rgba(255, 255, 255, 0.85);
                box-shadow: rgb(122, 87, 74) 0 0px 0px 40px inset;
            }
        }
    }
    h2{
        text-align: center;
        margin-top: 20px;
        font-size: 30px;
    }
    .el-carousel{
        margin-top: 20px;
        width: 100%;
        .el-carousel__item h3 {
            color: #475669;
            font-size: 14px;
            opacity: 0.75;
            line-height: 200px;
            margin: 0;
        }
        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }
    
        .el-carousel__item:nth-child(2n+1) {
            background-color: #d3dce6;
        }
    }
    .el-card{
        margin: 40px auto;
        width: 900px;
        height: 150px;
        padding: 0;
        .el-image{
            margin: 0;
            width: 150px;
            height: 150px;
        }
        .content-box{
            padding: 10px;
        }
    }

}
</style>