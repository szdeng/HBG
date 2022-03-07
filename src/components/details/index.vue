<template>
    <div class="details-box">
        <h2 style="margin-bottom: 20px; ">{{ data.symbol +'-'+ data.isbt_number }}</h2>
        <div class="details-item">
            <h3>description</h3>
            <p class="details-content" v-if="data.description == ''">无数据</p>
            <p v-else>{{ data.description }}</p>
        </div>
        <div class="details-item">
            <h3>antigenes</h3>
            <div class="details-content">
                <i v-for="(item,index) in data.antigens" :key="index" @click="toSearch('antigenes',item.isbt_number)">{{ item.name }}<br></i>
            </div>
        </div>
        <div class="details-item">
            <h3>genes</h3>
            <div class="details-content">
                <i v-for="(item,index) in data.genes" :key="'genes'+index" @click="toSearch('genes', item)">{{ item }}<br></i>
            </div>
        </div>
        <div class="details-item">
            <h3>phenotypes</h3>
            <div class="details-content">
                <i v-for="(item,index) in data.phenotypes" :key="'phenotypes'+index" @click="toSearch('phenotypes', item.number)">{{ item.name }}<br></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'detailPage',
    data(){
        return {
            number: this.$route.params['number'],
            data: {}
        }
    },
    created() {
        console.log('created');
        console.log(this.$store.state.cell);
        this.getData()
    },
    methods: {
        getData(){
            this.$axios({
                url: '/api/' + this.$store.state.cell + '/systems/' + this.number,
                method: 'get'
            }).then(res => {
                console.log(res.data)
                
                this.data = res.data
            }).catch(err => {
                console.log(err);
            })
        },
        toSearch(index, e){
            console.log(index, e);
        }
    },
}
</script>

<style lang='scss' scoped>
.details-box {
    width: 80%;
    margin: 0 auto;
    font-family: 'Courier New';
    // background-color: rgba(95, 158, 160, 0.6);
    .details-item {
        width: 100%;
        align-items: center;
        margin-bottom: 40px;
        h3 {
            width: 95%;
            margin: 0 auto;
            border-radius: 4px;
            background-color: rgba(233, 59, 59, 1.0);
            color: rgba(255, 255, 255, 1.0);
            font-size: 20px;
            padding-left: 8px;
            padding-bottom: 2px;
            margin-bottom: 10px;
            font-family: 'PmingLiu';
        }
        .details-content {
            width: 90%;
            margin: 0 auto;
            i {
                color: orange;
                &:hover {
                    color: rgba(51, 102, 153, 1.0);
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
        }
    }
    
}
</style>