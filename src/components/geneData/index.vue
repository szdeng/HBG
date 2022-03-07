<template>
    <div class="case">
        <!-- <searchInput :searchFun="search" style="width: 300px; margin: 0px auto 40px"></searchInput> -->
        <el-row>
            <el-col v-for="(item,index) in caseList" :key="index" :span="span">
                <el-card class="case-box" shadow="hover">
                    <div slot="header" class="clearfix">
                        <span>{{ item.title }}</span>
                    </div>
                    <div class="info">
                        <p>{{ item.info }}</p>
                        <router-link :to="'/static/'+item.link" type="text" class="linkbutton">阅读本文</router-link>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
// import searchInput from "@/components/searchInput/index.vue"

export default {
    name: 'page4',
    components: {
        // searchInput
    },
    data(){
        return {
            span: 8,
            total: 120,
            pagesize: 20,
            caseList: [
                {
                    title: '人类白细胞抗原',
                    link: 'hla',
                    info: 'HLA（人类白细胞抗原）是人类主要组织相容性复合体 (MHC)，这是一个多基因家族，参与人类（和所有椎骨）抵御病原体的防御。 HLA 分子的作用是将肽呈递给 T 细胞。 根据肽的不同，抗原呈递可导致 T 细胞激活和适应性免疫反应的启动。 HLA 分子也与 NK 细胞相互作用，当 HLA 分子（主要是 HLA-C）与 NK 抑制剂受体连接时抑制细胞毒性。 它们还在胸腺中的淋巴细胞成熟中起主要作用...'
                },
                {
                    title: '人类血小板抗原',
                    link: 'hpa',
                    info: '血小板是微小的、必不可少的血液成分，以前认为只有通过粘附在受损血管上才能维持体内平衡，从而与纤维蛋白形成凝块以防止出血。如今，它们被赋予了除凝血之外更多样化的作用，例如在炎症、先天免疫和适应性免疫中，证明这些小物体在广泛的疾病中至关重要...'
                },
                {
                    title: '人类红细胞血型抗原',
                    link: 'hea',
                    info: '研究红细胞血型首先要了解红细胞血型抗原是什么，它是如何产生的、有何特点。红细胞血型抗原的产生与细胞膜的结构紧密相关，红细胞膜是由双分子磷脂层构成的液态镶嵌膜。脂质双分子层主要有磷脂、胆固醇和糖脂组成，厚度约为4~5nm。红细胞膜可以耐受大幅度变形，可以达到微循环末端，将氧运输到组织器官...'
                }
            ]
        }
    },
    methods: {
        search(e){
            console.log(e);
        }
    }
}
</script>

<style lang='scss' scoped>
.case {
    margin: 0 auto;
    width: 80%;
    max-width: 1700px;
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
                    height: 180px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    .linkbutton {
                        position: absolute;
                        bottom: 5px;
                        right: 20px;
                        color: rgb(0, 123, 254);
                        text-decoration: none;
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