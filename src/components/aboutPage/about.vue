<template>
    <div class="about-page">
        <h2>关于我们</h2>
        <div class="head">
            <el-page-header @back="goBack">
            </el-page-header>
            <i class="date el-icon-date">&nbsp;2021-07-28</i>
        </div>
        <p v-for="(p, index) in list" :key="'p'+index">{{ p }}</p>
        <el-image
            :src='image.url1'
            fit='fill'
            style="width: 100%"></el-image>
        <div style="width: 100%;text-align: center; margin: 20px auto">
            <el-image
            :src='image.url2'
            fit='fill'></el-image>
        </div>
        
        <el-image
            :src='image.url3'
            fit='fill'
            style="width: 100%"></el-image>
    </div>
</template>

<script>
export default {
    name: 'aboutPage',
    data(){
        return {
            list: [
                '成立于2013年10月，是一家集研发、生产、销售抗生素药物抗体检测试剂、红细胞、血小板、粒细胞、淋巴细胞、基因分型及基因测序试剂为一体的体外诊断试剂公司。作为国际血液精准医学的先行者，始终致力于真正实现精准诊断、精准输血、精准用药和个性化治疗。',
                '公司下设：',
                '1、诺贝尔奖得主Erwin Neher研究院',
                '2、抗生素抗体检测工程技术研究中心',
                '3、药物抗体库（单克隆抗体等）',
                '4、免疫相关基因与疾病基因分型与测序工作站',
                '5、药物抗体、红细胞与血小板疑难血型检测分析实验室',
                '2017年10月与1991年诺贝尔生理学或医学奖获得者Erwin Neher教授签约成立诺贝尔奖得主研究院，主要从事药物抗体检测试剂、血液基因分型与测序检测试剂的研究开发，为企业自主创新和产品发展提供技术支持，并将打造药物抗体检测技术平台与血液疑难样本分析平台。研究院现已引进4名博士、4名行业知名专家及相关专业技术人员，致力于化学、生物化学和分子生物学等方面的研究，促进科研成果的产业化。',
                '中济万泰拥有超过900㎡、配备完善的研发设施和设备的实验室，该实验室具备血型血清学研究、分子生物学研究、基因工程研究等功能区域，与公司生产车间配套使用，可完成研发、小试、中试及规模化生产的全部过程，形成了一套完整科学的技术研究、产品开发、测试实验、技术管理和质量控制体系。',
                '中济万泰专注于抗生素药物抗体检测试剂盒系列的研发、生产和销售，2019年6月，取得“哌拉西林抗体检测试剂盒（微柱凝胶法）”注册证，后续系列产品中“阿莫西林抗体检测试剂盒”已进入临床阶段，6种抗体检测试剂盒已立项，处于小试阶段。',
                '中济万泰2018年与全球知名企业Immucor公司达成合作，成为Immucor公司在中国境内的经销商之一，共同携手为中国临床输血及科研一线工作者提供经FDA或CNDA认证的单克隆抗体、稀有血型红细胞、谱细胞、血小板抗体检测试剂盒与基因诊断试剂盒。',
                '2021年6月，Paragon Care携手江苏中济万泰生物医药有限公司开拓中国血库试剂市场。澳洲医疗设备公司Paragon Care Ltd (ASX：PGC)向市场披露，旗下诊断业务Immulab与江苏中济万泰生物医药有限公司成立合资实体，将共同在中国市场分销体外诊断血库试剂专利产品。Paragon Care正努力开拓海外血库相关的出口机遇，公司CEO Phil Nicholl表示，这是公司在实现中国增长策略上迈出的第一步，“从较长期来看，中国对我们的诊断产品是一个具有吸引力的增长型市场”。根据公告，江苏中济万泰专注于输血业务，是中国血型诊断行业知名企业。双方已经开始一系列的患者试验，以推动体外诊断血库试剂在中国的审批和销售，预计相关试验可在24个月内完成。产品注册成功后，中济万泰将拥有8年的中国市场独家经销权。',
                '江苏中济万泰生物医药有限公司同时与国家健康委临检中心、全国三甲医院及研究机构合作，开展红细胞、淋巴细胞、粒细胞、血小板、基因分型、基因测序室内质控、基因室间质评、疑难血型鉴定、药物诱导型溶血（药物抗体）检测科研及培训，共同打造科研、培训、临床为一体的合作平台。',
                '目前，中济万泰已获得2个产品医疗器械注册证，10个产品医疗器械生产备案凭证。获得1项发明专利授权、7项实用新型专利、2项软件著作权专利，申请中发明专利15项。',
                '2018年获得“高新技术企业”证书，2017年获得“江苏省民营科技企业”的称号，2019年连续获得“江苏省科技型中小企业”称号，2017年成立江阴市“抗生素抗体检测工程技术研究中心”。',
                '江苏中济万泰生物医药有限公司以“智慧诊断，精准医疗”为核心宗旨，研发、生产、销售抗生素药物抗体检测试剂、红细胞、淋巴细胞、粒细胞、血小板、血清定型试剂、基因分型、基因测序等诊断试剂，推动国内医疗机构建立药物抗体、红细胞与血小板等血型血清学检测与基因诊断联合检测平台，真正实现精准诊断、精准输血、精准用药、个性化治疗。'
            ],
            image:{
                url1: require('./images/about-1.png'),
                url2: require('./images/about-2.png'),
                url3: require('./images/about-3.jpeg'),
            }
        }
    },
    methods: {
        goBack(){
            this.$router.push('index')
        }
    }
}
</script>

<style lang='scss' scoped>
.about-page{
    margin: 20px auto 0;
    width: 100%;
    h2{
        font-size: 40px;
        font-weight: 400;
    }
    .el-page-header {
        border-radius: 5px;
        padding: 5px;
        background-color: rgb(233, 236, 239);
    }
    .head {
        position: relative;
        margin-top: 30px;
        .date {
            position: absolute;
            right: 5px;
            top: 9px;
        }
    }
    p{
        margin: 20px 0;
        &:nth-child(-n+9):nth-child(n+5){
            text-indent: 35px;
        }
    }
}
</style>