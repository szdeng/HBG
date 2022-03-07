<template>
    <div class="searchInputBox">
        <el-input v-model="input" :placeholder="placeholder" @keyup.enter.native="search">
            <i slot="suffix" class="el-input__icon el-icon-search" @click="search"></i>
        </el-input>
    </div>
</template>

<script>
export default {
    name: 'searchInput',
    props: {
        searchFun: {
            type: Function
        },
        placeholder: {
            type: String,
            default: '请输入关键词'
        }
    },
    data(){
        return {
            input: ''
        }
    },
    methods: {
        search(){
            this.searchFun && this.searchFun(this.input)
        }
    }
}
</script>

<style lang='scss' scoped>
.searchInputBox {
    width: 100%;
    margin: 0;
    .el-input{
        /deep/ .el-input__inner {
            height: 30px;
        }
        i {
            cursor: pointer;
            line-height: 30px;
            &:hover {
                color: rgb(64, 158, 255);
            }
        }
    }
}
</style>