<template>
    <div class="myform">
        <el-form ref="form">
            <el-form-item>
                <div class="top-title">
                    <i>血型基因</i>
                    <div class="pad-div"></div>
                </div>
            </el-form-item>
            <el-form-item label="血型分类" label-width="90px">
                <el-select 
                    filterable
                    placeholder="请选择血型"
                    :popper-append-to-body="false"
                    v-model="check1.value"
                    @change="getlv2()">
                    <el-option v-for="item in check1.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
                <el-select
                    v-if="check1.value == 'hea'"
                    filterable
                    popper-class="my-select"
                    placeholder="二级选择"
                    :popper-append-to-body="false"
                    v-model="check2.value"
                    @change="getlv3()"
                    ref="select2">
                    <el-option v-for="(item,index) in check2.options" :key="index" :label="item.symbol + '(ISBT_' + item.isbt_number + ')'" :value="item.number">
                    </el-option>
                </el-select>
                <el-select
                    v-else-if="check1.value == 'hna'"
                    filterable
                    placeholder="二级选择"
                    :popper-append-to-body="false"
                    v-model="check2.value"
                    @change="getlv3()"
                    ref="select2">
                    <el-option v-for="(item,index) in check2.options" :key="index" :label="item.name" :value="item.name">
                    </el-option>
                </el-select>
                <el-select 
                    v-else
                    filterable
                    placeholder="二级选择"
                    :popper-append-to-body="false"
                    v-model="check2.value"
                    @change="getlv3()"
                    ref="select2">
                    <el-option v-for="(item,index) in check2.options" :key="index" :label="item.name" :value="item.number">
                    </el-option>
                </el-select>
                <el-select 
                    filterable
                    placeholder="三级选择"
                    v-model="check3.value"
                    :popper-append-to-body="false"
                    :disabled="selectStatus"
                    @change="getlv4()">
                    <el-option v-for="(item, index) in check3.options" :key="index" :label="item.name" :value="item.name"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="关键字搜索" label-width="90px">
                <el-input class="search-input" v-model="keyword" placeholder="请输入内容" @focus="changeBlood">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="检索示例" label-width="90px">
                <el-tag v-for="(item, index) in examples" :key="'example'+index" type="" @click="tagToSearch(item.name)">{{ item.name }}</el-tag>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="toSearch">搜索</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import service from '@/api/axios'

export default {
    name: 'myform',
    props:['Search'],
    components: {
    },
    data(){
        return{
            check1: {
                value: '',
                key: '',
                options: [{value: 'hea', label: '红细胞'},{value: 'hpa', label: '血小板'},{value: 'hna', label: '粒细胞'}],
                // {value: 'hla', label: '白细胞'}
            },
            check2: {
                value: '',
                options: [],
            },
            check3: {
                value: '',
                options: [],
            },
            examples: [
                {
                    name: "c.261delG",
                    value1: 'hea',
                    value2: 'HEA001',
                    value3: 'O Allele'
                },
                {
                    name: "p.Trp16Cys",
                    value1: 'hea',
                    value2: 'HEA004',
                    value3: ''
                },
                {
                    name: "c.297A>G",
                    value1: 'hea',
                    value2: 'HEA001',
                    value3: 'A Allele'
                }
            ],
            keyword: ''
        }
    },
    watch: {
        'Search'(newV, oldV){
            console.log(newV, oldV)
            this.keyword = newV
        },
        keyword(newV, oldV){
            console.log('watch keyword --------',newV, oldV)
            this.$emit('sendQuery', newV)
        },
        'check1.value'(newV,oldV){
            console.log(newV, oldV)
            this.$store.dispatch("setCell", this.check1.value)
        },
        'check2.value'(newV,oldV){
            console.log(newV, oldV)
            this.$store.dispatch("setIsbtNumber", this.check2.value)
        },
        'check3.value'(newV, oldV){
            console.log(newV, oldV)
            this.$store.dispatch("setPheno", this.check3.value)
        }
    },
    computed: {
        selectStatus(){
            if(this.check1.value == 'hea')
                return false
            else return true
        }
    },
    methods: {
        getlv2(){
            if(this.$store.state.token != ''){
                this.check2.options = []
                this.check3.options = []
                this.check2.value = ''
                this.check3.value = ''
                this.$emit('updateData', {})
                // this.$refs.select2.setAttribute('placeholder', '加载中...')
                const url = '/api/blood/' + this.check1.value +'/systems/'
                const params = {}
                service.get(url, params).then(res=>{
                    console.log(res);
                    this.check2.options = res
                }).catch(err=>{
                    console.log(err);
                })
                return true
            }
            else{
                this.$message({
                    type: 'warning',
                    message: '登录后才可以查询'
                })
                return false
            }
        },
        getlv3(){
            this.check3.options = []
            this.check3.value = ''
            
            if(this.check1.value == 'hea')  {
                const url = '/api/blood/' + this.check1.value + '/phenotypes/'
                const params = {
                    system_number: this.check2.value,
                }
                service.get(url, params).then(res => {
                    console.log(res)
                    this.check3.options = res
                }).catch(err => {
                    console.log(err);
                })
            }
            else{
                const url = '/api/blood/' + this.check1.value + '/alleles/'
                const params = {
                    system_number: this.check2.value,
                    query: this.keyword
                }
                service.get(url, params).then(res => {
                    // this.check3.options = res.data
                    this.$emit('updateData', res)
                }).catch(err => {
                    console.log(err);
                })
            }
        },
        getlv4(){
            
            const url = '/api/blood/' + this.check1.value + '/alleles/'
            const params = {
                system_number: this.check2.value,
                pheno: this.check3.value,
                query: this.keyword
            }
            service.get(url, params).then(res => {
                console.log(res)
                this.$emit('updateData', res)
            }).catch(err => {
                console.log(err);
            })
        },
        onSubmit() {
            console.log('submit!');
        },
        toSearch(){
            // if(this.changeBlood() == true){
            //     if(this.keyword != ''){
            //         this.search(this.keyword)
            //     }
            //     else{
            //         this.$message({
            //             type: 'error',
            //             message: '请输入关键字'
            //         })
            //     }
            // }
            // else{
            //     return false
            // }
            this.search(this.keyword)
        },
        tagToSearch(e){
            console.log(e);
            this.changeBlood()
            this.keyword = e
            this.examples.forEach((val) => {
                if(val.name == e){
                    this.check1.value = val.value1
                    this.getlv2()
                    this.check2.value = val.value2
                    this.getlv3()
                    this.check3.value = val.value3
                }
            })
        },
        search(e) {
            console.log(e)
            const url = '/api/blood/'+this.check1.value +'/alleles/'
            const params = {
                system_number: this.check2.value,
                pheno: this.check3.value,
                query: e
            }
            service.get(url, params).then(res => {
                console.log(res);
                let sendData = res
                this.$emit('updateData', sendData)
            }).catch(err => {
                console.log(err);
            })
        },
        changeBlood(){
            console.log(this.check1.value);
            if(this.check1.value == ''){
                this.check1.value = 'hea'
                return this.getlv2()
            }
            else
                return true
        }
    }
}
</script>

<style lang='scss'>

.myform{
    width: 95%;
    height: auto;
    margin: 20px auto 0;
    .el-form{
        border: none;
        border: 2px solid rgba($color: #a29f9f, $alpha: 0.1);
        padding: 0;
        position: relative;
        .el-select-dropdown__item{
            &:hover {
                background-color: rgba(225, 228, 234, 1.0);
                color: rgba(255, 0, 0, 0.8);
            }
        }
        .selected {
            color: rgba(255, 0, 0, 0.8);
        }
        .el-form-item {
            margin: 5px 0;
            .el-select{
                margin: 0px 40px 0;
                height: 30px;
                width: 180px;
                .el-input__inner {
                    height: 30px;
                }
            }
            .el-tag {
                margin: 0 5px;
                cursor: pointer;
                float: left;
                &:first-child {
                    margin-left: 40px;
                }
            }
            .el-tag:hover {
                background-color: rgba(64, 158, 255, 0.2);
            }
        }
        .el-form-item:first-child {
            margin: 0;
            top: 0;
            left: 0;
            width: 100%;
            position: absolute;
            .top-title {
                display: flex;
                line-height: 35px;
                i {
                    width: 100px;
                    background: #fff;
                    font-style: normal;
                    text-align: center;
                    color: #409eff;
                }
                .pad-div {
                    flex: auto;
                    background: rgb(245, 247, 250);
                    border-left: 1px solid rgba(220, 223, 230, 0.8);
                    border-bottom: 1px solid rgba(220, 223, 230, 0.8);
                }
            }
        }
        .el-form-item:nth-child(2) {
            margin-top: 50px;
        }
        .el-form-item:last-child {
            text-align: center;
            .el-button {
                width: 50%;
            }
        }
        .search-input {
            width: 60%;
            margin-left: 40px;
            .el-input__inner {
                height: 30px;
            }
        }
    }
}
</style>