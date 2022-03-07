<template>
    <div class="db-box">
        <div class="bd_start">
            <div class="image-box">
                <el-image :src='require("../../../public/assets/blooddb_db.png")' alt="血型系统常见单倍型查询引擎" ></el-image>
            </div>
            <p>血型系统常见单倍型查询引擎</p>
        </div>
        <myform :Search="keyword" @updateData="setSearchData($event)" @sendQuery="setQuery($event)"></myform>
        <mysearch :Data="tableData" :query="query" @toSearch="setSearchKeyword($event)"></mysearch>
    </div>
</template>

<script>
import myform from "./myForm"
import mysearch from "./mySearch"

export default {
    name: "mymain",
    components: {
        mysearch,
        myform,
    },
    data() {
        return {
            tableData: [],
            keyword: '',
            query: ''
        }
    },                                                                                      
    methods: {
        setQuery(e){
            console.log('set query:',e);
            this.query = e
        },
        setSearchData(e){
            console.log(e)
            this.tableData = e
        },
        setSearchKeyword(e){
            console.log(e);
            this.keyword = e
        }
    },
}
</script>

<style lang='scss' scoped>
.db-box{
    width: 100%;
    margin: 0 auto;
    .bd_start{
        margin: 0 auto;
        width: 100%;
        // flex-direction: column;
        // text-align: center;
        margin-top: -10px;
        cursor:unset;
        .image-box{
            text-align: center;
        }
        p{
            text-align: center;
        }
    }
}

</style>