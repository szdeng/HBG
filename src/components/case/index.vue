<template>
    <div class="case">
        <searchInput :searchFun="search" style="width: 300px; margin: 0px auto 40px"></searchInput>
        <el-row>
            <el-col v-for="(item,index) in caseList" :key="index" :span="span">
                <el-card class="case-box" shadow="hover">
                    <div slot="header" class="clearfix">
                        <span>{{ item.title }}</span>
                    </div>
                    <div class="info">
                        <p v-html="item.content">{{ item.content }}</p>
                        <a class="linkbutton" @click="toReader(item.slug)">阅读本文</a>
                    </div>
                </el-card>
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
        <el-empty description="暂无数据" v-if="this.caseList.length === 0"></el-empty>
    </div>
</template>

<script>
import searchInput from "@/components/searchInput/index.vue"
import service from '@/api/axios'

export default {
    name: 'page2',
    components: {
        searchInput
    },
    data(){
        return {
            span: 8,
            total: 0,
            caseList: {},
            currentPage: 0,
            prevPage: '',
            nextPage: '',
        }
    },
    created() {
        const url = 'api/article/list/'
        const params = {
            category: '临床案例',
            tag: this.$route.query.tag,
            query: ''
        }
        this.$axios.get(url, params).then(res => {
            console.log(res);
            this.caseList = res.results
            this.total = res.count
            this.nextPage = res.next
            this.prevPage = res.previous
        }).catch(err => {
            console.log(err);
        })
    },
    methods: {
        search(e){
            console.log(e);
            const url = 'api/article/list/'
            const params = {
                query: e,
                category: '临床案例',
                tag: ''
            }
            service.get(url, params).then(res => {
                console.log(res);
                this.caseList = res.results
                this.total = res.count
            }).catch(err => {
                console.log(err);
            })
        },
        handleCurrentChange(e){
            console.log(e);
            const url = 'api/article/list/'
            const params = {
                page: e,
                category: '临床案例',
                tag: this.$route.query.tag,
                query: this.$refs.searchinput.input
            }
            service.get(url, params).then(res => {
                console.log(res);
                this.caseList = res.results
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
        toReader(slug){
            console.log(slug);
            this.$router.push({
                path: '/article',
                query: {
                    slug: slug,
                    category: '临床案例'
                }
            })
        }
    }
}
</script>

<style lang='scss' scoped>
.case {
    margin: 0 auto;
    width: 80%;
    .search {
        width: 500px;
        margin: 20px auto 50px;
        .el-input{
            .el-input__inner {
                border-radius: 20px;
            }
            i {
                cursor: pointer;
                &:hover {
                    color: rgb(64, 158, 255);
                }
            }
        }
    }
    .el-pagination {
        text-align: center;
        margin-top: 80px;
        .el-pager {
            li {
                width: 40px;
                &:hover {
                    border: 1px solid rgb(64, 158, 255)
                }
            }
        }
    }
    .el-row{
        margin-top: 50px;
        .el-col{
            .case-box {
                width: 80%;
                height: 294px;
                margin: 0 auto 40px;
                position: relative;
                .el-card__header {
                    background-color: rgb(247, 247, 247);
                    font-size: 20px;
                    .clearfix {
                        &:before,
                        &:after{
                            display: table;
                            content: '';
                        }
                        &:after{
                            clear: both;
                        }
                    }
                }
                .info {
                    font-size: 14px;
                    height: 170px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    .linkbutton {
                        position: absolute;
                        bottom: 5px;
                        right: 20px;
                        color: rgb(0, 123, 254);
                        text-decoration: none;
                        cursor: pointer;
                        &:hover {
                            color: rgb(0, 86, 179);
                        }
                    }


                }
            }
        }
    } 
}
</style>