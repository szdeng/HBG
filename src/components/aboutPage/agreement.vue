<template>
    <div class="agreement-page">
        <h2>用户协议</h2>
        <div class="head">
            <el-page-header @back="goBack">
            </el-page-header>
            <i class="date el-icon-date">&nbsp;2021-07-28</i>
        </div>
        <div v-for="(item, index) in agreementC" :key="'agreementC' + index" class="box">
            <p class="title">{{ item.title }}</p>
            <p class="content" v-for="(p, index) in item.list" :key="item.id + index">{{ p }}</p>
        </div>
        <h3>Terms of Use</h3>
        <div v-for="(item, index) in agreementE" :key="'agreementE' + index" class="box">
            <p class="title">{{ item.title }}</p>
            <p class="content" v-for="(p, index) in item.list" :key="item.id + index">{{ p }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'agreementPage',
    data(){
        return {
            agreementC: [
                {
                    title: '1.使用限制',
                    id: 11,
                    list: [
                        '1.1、您同意仅使用相关数据进行科学研究；',
                        '1.2、您同意仅将数据用于非商业研究目的；',
                        '1.3、您同意您不会试图将提供的数据链接到第三方数据库；',
                        '1.4、您同意不向他人转让或披露全部或部分数据。',
                        '1.5、接受项目组、原始资料创作者、著作权人等提供的资料的限制条件。',
                        '1.6、您理解并承认数据受版权和其他知识产权保护。',
                        '1.7、您同意，在您违反本协议后，本协议将立即终止，您将被要求销毁您持有的任何数据；',
                        '1.8、贵方接受项目组或其指定代理人可能需要不时更改本协议条款以解决新问题。',
                        '1.9、供应商保留随时更改这些条款的权利，恕不另行通知。',
                        '1.10、使用本网站将以本网站最新版本的使用条款为准；'
                    ]
                },
                {
                    title: '2.适用法律',
                    id: 12,
                    list: [
                        '2.1、您接受中国人类遗传资源管理局（HGRAC）的规定。',
                        '2.2、您将遵守处理基因组数据的所有适用法律法规。'
                    ]
                },
                {
                    title: '致谢',
                    id: 13,
                    list: [
                        '如果你使用《中济云》中的数据，你应该在出版物中引用《中济云》的文章。'
                    ]
                },
                {
                    title: '',
                    id: 14,
                    list: [
                        '江苏中济万泰生物医药有限公司',
                        '2021年7月'
                    ]
                }
            ],
            agreementE: [
                {
                    id: 21,
                    title: '1. Limitations on Use',
                    list: [
                        '1.1 You agree to use relevant data for scientific research;',
                        '1.2 You agree to use data for non-commercial research purposes only;',
                        '1.3 You agree that you will not attempt to link the data provided to a third-party database;',
                        '1.4 You agree not to transfer or disclose all or part of the data to others. Instead, please direct them to this website;',
                        '1.5 You accept any part of the data provided by the project team, the original data creator, the copyright owner, etc.;',
                        '1.6 You understand and acknowledge that data is protected by copyright and other intellectual property rights. ',
                        '1.7 You accept that this agreement will terminate immediately after you violate this agreement, and you will be required to destroy any data you hold;',
                        '1.8 You accept that it may be necessary for the project team or its designated agent to change the terms of this agreement from time to time to solve new problems. ',
                        '1.9 Providers reserve the right to change these terms at any time without prior notice. ',
                        '1.10 Use of this website will be subject to the terms of use of the latest version published on this website;'
                    ]
                },
                {
                    id: 22,
                    title: '2. Governing Law',
                    list: [
                        'You accept the regulations of the Human Genetic Resources Administration of China (HGRAC). ',
                        'You will abide by all applicable laws and regulations for handling genomic data.'
                    ]
                },
                {
                    id: 23,
                    title: 'Acknowledgment',
                    list: [
                        'If you use data in Zhongjiyun, you should quote papers from the Zhongjiyun in your publication.'
                    ]
                },
                {
                    id: 24,
                    title: '',
                    list: [
                        'Jiangsu Zojiwat Bio-Pharmaceutical Co.,Ltd.',
                        'July, 2021'
                    ]
                }
            ]
        }
    },
    methods: {
        goBack(){
            this.$router.push('/index')
        }
    }
}
</script>

<style lang='scss' scoped>
.agreement-page{
    margin: 20px auto 0;
    width: 100%;
    h2{
        font-size: 40px;
        font-weight: 400;
        text-indent: 10px;
    }
    h3{
        text-align: center;
        font-size: 16px;
        margin: 100px auto 30px;
    }
    .el-page-header {
        border-radius: 5px;
        padding: 5px;
        background-color: rgb(233, 236, 239);
    }
    .head {
        position: relative;
        margin-top: 20px;
        .date {
            position: absolute;
            right: 5px;
            top: 9px;
        }
    }
    .box{
        margin-bottom: 50px;
        p{
            margin: 15px 0;
            text-indent: 10px;
        }
        .title{
            font-weight: 600;
        }
        .content{
            font-size: 14px;
        }
    }
}
</style>