<template>
    <div class="mysearch">
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="10"
            layout="total, prev, pager, next, jumper, slot"
            :total="Data.count"
            slot="label"
            @next-click="toNext"
            @prev-click="toPrev"
            hide-on-single-page>
        </el-pagination>
        <el-table :data="tableData"
            style="width: 100%"
            :row-class-name="tableRowClassName" 
            header-cell-class-name="tableHeader" 
            border
            v-loading="loading">
            <el-table-column :label="headLabel.label1" min-width="65">
                <template slot-scope="scope">
                    <i @click="search(scope.row.genes)" class="i-tag">{{ scope.row.genes }}</i>
                </template>
            </el-table-column>
            <el-table-column :label="headLabel.label2" min-width="100">
                <template slot-scope="scope">
                    <i @click="search(scope.row.allele)" class="i-tag">{{ scope.row.allele }}</i>
                </template>
            </el-table-column>
            <el-table-column :label="headLabel.label3" min-width="250">
                <template slot-scope="scope">
                    <div v-if="scope.row.mutation1[0] != undefined">
                        <i v-for="(item,index) in scope.row.mutation1" :key="index" @click="search(item)" class="i-tag">{{ item + ';' }}</i>
                    </div>
                    <div v-else></div>
                </template>
            </el-table-column>
            <el-table-column :label="headLabel.label4" min-width="250">
                <template slot-scope="scope">
                    <div v-if="scope.row.mutation2[0] != undefined">
                        <i v-for="(item,index) in scope.row.mutation2" :key="index" @click="search(item)" class="i-tag">{{ item + ';' }}</i>
                    </div>
                    <div v-else></div>
                </template>
            </el-table-column>
            <el-table-column prop="frequency" :label="headLabel.label5" min-width="50">
            </el-table-column>
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form>
                        <el-form-item label="表型：">
                            <p v-html="props.row.phenotype">{{ props.row.phenotype }}</p>
                        </el-form-item>
                        <el-form-item label="参考等位基因：">
                            <p v-html="props.row.reference_allele">{{ props.row.reference_allele }}</p>
                        </el-form-item>
                        <el-form-item label="人群频率：">
                            <p v-html="props.row.crowd_frequency">{{ props.row.crowd_frequency }}</p>
                        </el-form-item>
                        <el-form-item label="编码序列(1128 nc)：">
                            <div class="listshow">
                                <span v-for="(item,index) in props.row.sequence1" :key="index">
                                    {{ item }}
                                </span>
                            </div>
                        </el-form-item>
                        <el-form-item label="蛋白序列(375 aa)：">
                            <div class="listshow">
                                <span v-for="(item,index) in props.row.sequence2" :key="index">
                                    {{ item }}
                                </span>
                            </div>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
        </el-table>
        <!-- <router-link to="/details/HEA002">test button</router-link> -->
    </div>
</template>

<script>
import service from '@/api/axios'

export default {
    name: 'mySearch',
    props: ['Data', 'query'],
    data(){
        return{
            currentPage: 0,
            prevPage: '',
            nextPage: '',
            tableData: [
                // {
                //     genes: '',
                //     allele: '',
                //     mutation1: '',
                //     mutation2: '',
                //     frequency: '',
                //     phenotype: '',
                //     reference_allele: '',
                //     crowd_frequency: '',
                //     sequence1: '',
                //     sequence2: ''
                // }
            ],
            total: 0,
            loading: false,
            headLabel: {
                label1: "基因",
                label2: "等位基因",
                label3: "核苷酸突变",
                label4: "氨基酸突变",
                label5: "频率"
            },
            genes: this.$store.state.genes,
            q: ''
        }
    },
    watch: {
        'Data.next'(newV, oldV){
            console.log(newV, oldV)
            this.nextPage = newV
        },
        'Data.previous'(newV, oldV){
            console.log(newV, oldV)
            this.prevPage = newV
        },
        'Data.results'(newV, oldV){
            let cell = this.$store.state.cell
            this.tableData = []
            console.log('data is change --------------------');
            if(newV != undefined){
                this.setData(cell, newV)
            }
        },
        'Data.count'(newV, oldV){
            console.log(newV, oldV)
            if(newV != undefined){
                this.total = newV
            }
        },
        'query'(newV, oldV){
            console.log();
            this.q = newV
        },
        '$store.state.cell': function () {
            console.log(this.$store.state.cell);
            if(this.$store.state.cell == 'hla'){
                this.headLabel = {
                    label1: "基因",
                    label2: "等位基因",
                    label3: "Ggroup",
                    label4: "Pgroup",
                    label5: "频率"
                }
            }
            else{
                this.headLabel = {
                    label1: "基因",
                    label2: "等位基因",
                    label3: "核苷酸突变",
                    label4: "氨基酸突变",
                    label5: "频率"
                }
            }
        }
    },
    methods: {
        setData(cell, data){
            let newV = data
            switch(cell){
                case 'hea':
                    for(let j = 0, len = newV.length; j < len; j++){
                        console.log(newV[j]);
                        let data = newV[j]
                        this.tableData[j] = {
                            genes: data.genes,
                            allele: data.isbt_name,
                            mutation1: data.hgvsc,
                            mutation2: data.hgvsp,
                            phenotype: data.phenotype,
                            reference_allele: data.reference_allele,
                            number: data.number
                        }
                    }
                    break
                case 'hpa':
                    for(let j = 0, len = newV.length; j < len; j++){
                        console.log('data is setting ------------------');
                        console.log(newV[j]);
                        let data = newV[j]
                        this.tableData[j] = {
                            genes: data.genes,
                            allele: data.name,
                            phenotype: data.phenotype,
                            mutation1: [],
                            mutation2: [],
                            reference_allele: data.antithesis_antigen,
                            number: data.number
                        }
                    }
                    console.log('this.tableData == ', this.tableData);
                    break
                case 'hla':
                    for(let j = 0, len = newV.length; j < len; j++){
                        console.log(newV[j]);
                        let data = newV[j]
                        this.tableData[j] = {
                            genes: data.genes,
                            allele: data.name,
                            mutation1: [data.ggroup],
                            mutation2: [data.pgroup],
                            phenotype: data.phenotype,
                            reference_allele: data.reference_allele,
                            number: data.number
                        }
                    }
                    console.log('this.tableData == ', this.tableData);
                    break
                case 'hna':
                    for(let j = 0, len = newV.length; j < len; j++){
                        console.log(newV[j]);
                        let data = newV[j]
                        this.tableData[j] = {
                            genes: data.system,
                            allele: data.name,
                            mutation1: data.hgvsc,
                            mutation2: data.hgvsp,
                            reference_allele: data.reference_allele,
                        }
                    }
                    break
                default:
                    break
            }
        },
        handleCurrentChange(e){
            this.loading = true
            console.log('what is e:',e);
            const url = '/api/blood/' + this.$store.state.cell + '/alleles/'
            const params = {
                system_number: this.$store.state.isbtNumber,
                page: e,
                pheno: this.$store.state.pheno,
                query: this.q
            }
            console.log('params', params);
            service.get(url, params).then(res => {
                console.log(res);
                this.tableData = []
                this.setData(this.$store.state.cell, res.results)
                this.nextPage = res.next
                this.prevPage = res.previous
                this.loading = false
            }).catch(err => {
                console.log(err);
                this.loading = false
            })
        },
        toNext(){
            this.loading = true
            const params = {

            }
            service.get(this.nextPage, params).then(res => {
                console.log(res);
                this.tableData = []
                this.setData(this.$store.state.cell, res.results)
                this.nextPage = res.next
                this.prevPage = res.previous
                this.loading = false
            }).catch(err => {
                console.log(err);
                this.loading = false
            })
        },
        toPrev(){
            this.loading = true
            const params = {

            }
            service.get(this.prevPage, params).then(res => {
                console.log(res);
                this.tableData = []
                this.setData(this.$store.state.cell, res.results)
                this.nextPage = res.next
                this.prevPage = res.previous
                this.loading = false
            }).catch(err => {
                console.log(err);
                this.loading = false
            })
        },
        tableRowClassName({row, rowIndex}) {
            if(rowIndex%2 === 1) {
                return 'deep-row';
            } else if(rowIndex%2 === 0) {
                return 'light-row';
            }
        },
        showMore(e){
            console.log(e);
        },
        search(e){
            console.log(e);
            this.$emit('toSearch', e)
        }
    },
}
</script>

<style lang='scss'>
.mysearch {
    width: 95%;
    height: auto;
    margin: 20px auto 0;
    .el-pagination {
        margin-bottom: 5px;
        text-align: right;
    }
    .el-table{
        th.el-table__cell{
            background-color: rgba(227, 10, 10, 0.8);
        } 
        .tableHeader{
            color: white;
            border: 1px solid white;
            background-color: rgba(227, 10, 10, 0.8);
        }
        div{
            .i-tag{
                cursor: pointer;
                font-style: normal;
                margin-right: 5px;
                &:hover{
                    color: #409eff;
                    text-decoration-line: underline;
                }
            }
        }
        td.el-table__cell{
            padding: 4px;
        }
    }
    .el-table .light-row {
        background-color: white;
    }
    .el-table .deep-row {
        background-color: rgba(lightpink, 0.2);
    }
    .el-form{
        padding-left: 20px;
        .el-form-item {
            margin: 0px;
            font-size: 12px;
            label{
                color: #409eff;
                width: 150px;
                float: left;
            }
            p{
                line-height: 40px;
            }
            .listshow{
                width: 620px;
                padding-top: 15px;
                margin-bottom: 10px;
                display: flex;
                flex-direction: column;
                font-size: 12px;
                position: relative;
                span{
                    max-width: 620px;
                    line-height: 16px;
                }
                .el-button{
                    position: absolute;
                    bottom: 0;
                    right: -10px;
                    color: black;
                    padding: 0;
                    display: flex;
                    &:hover{
                        color: red;
                    }
                }
            }
        }
    }
}
</style>