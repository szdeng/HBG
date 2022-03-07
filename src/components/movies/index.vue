<template>
    <div class="video">
        <searchInput :searchFun="search" style="width: 300px; margin: 0px auto 40px"></searchInput>
        <el-row :gutter="20">
            <el-col v-for="item in videoList" :key="item.id" :span="span">
                <div class="video-box">
                    <router-link class="video-img" :to="'/video/'+item.id" :title="item.name">
                        <el-image v-if="item.cover_image != null" :src="item.cover_image" fit="fill"></el-image>
                        <el-image :src="require('../../../public/assets/video.jpeg')" fit="fill"></el-image>
                    </router-link>
                    <router-link :to="'/video/'+item.id" :title="item.name" class="video-title">{{ item.name }}</router-link>
                </div>
            </el-col>
        </el-row>
        <el-pagination 
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="12"
            layout="total, prev, pager, next, jumper, slot"
            :total="total"
            slot="label"
            @next-click="toNext"
            @prev-click="toPrev"
            hide-on-single-page></el-pagination>
        <el-empty description="暂无数据" v-if="this.videoList.length === 0"></el-empty>
    </div>
</template>

<script>
import searchInput from "@/components/searchInput/index.vue"
import service from '@/api/axios'

export default {
    name: 'page1',
    components: {
        searchInput
    },
    data(){
        return{
            span: 6,  //视频布局
            pagesize: 12, //每页显示视频数目
            total: 0,  //视频总数
            videoList: {}, //视频列表
            currentPage: 0
        }
    },
    created() {
        const url = 'api/video/list/'
        const params = {
            tag: this.$route.query.tag,
            query: ''
        }
        this.$axios.get(url, params).then(res => {
            console.log(res);
            this.videoList = res.results
            this.total = res.count
            this.nextPage = res.next
            this.prevPage = res.previous
        }).catch(err => {
            console.log(err);
        })
    },
    methods: {
        search(e) {
            console.log(e);
            const url = '/api/video/list/'
            const params = {
                tag: '',
                query: e
            }
            service.get(url, params).then(res => {
                console.log(res);
                this.total = res.count
                this.videoList = res.results
            }).catch(err => {
                console.log(err);
            })
        },
        handleCurrentChange(e){
            console.log(e);
            const url = 'api/video/list/'
            const params = {
                page: e,
                tag: this.$route.query.tag,
                query: this.$refs.searchinput.input
            }
            service.get(url, params).then(res => {
                console.log(res);
                this.videoList = res.results
                this.total = res.count
                this.nextPage = res.next
                this.prevPage = res.previous
            }).catch(err => {
                console.log(err);
            })
        },
        toNext(){

        },
        toPrev(){

        },
    }
}
</script>

<style lang='scss' scoped>
    .video {
        margin: 0 auto;
        width: 90%;
        .video-box {
            width: 240px;
            height: 220px;
            display: flex;
            flex-direction: column;
            margin: 0px auto;
            text-align: center;
            .video-img {
                width: 230px;
                height: 150px;
                margin: 0 auto;
                .el-image {
                    width: 100%;
                    height: 100%;
                    border-radius: 4px;
                }
            }
            .video-title{
                display: block;
                font-size: 14px;
                text-decoration: none;
                color: black;
                text-align: left;
                line-height: 20px;
                height: 38px;
                word-wrap: break-word;
                overflow: hidden;
                margin-top: 10px;
                &:hover{
                    color: rgb(0, 161, 214);
                }
            }
        }
        .el-pagination {
            text-align: center;
            .el-pager {
                li {
                    width: 40px;
                    &:hover {
                        border: 1px solid rgb(64, 158, 255)
                    }
                }
            }
        }
    }
</style>