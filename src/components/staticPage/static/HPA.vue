<template>
    <div class="hpapage">
        <el-page-header @back="goBack" content="人类血小板抗原" style="margin-bottom: 30px">
        </el-page-header>
        <p v-for="(item,index) in article.list" :key="index">{{ item }}</p>
    </div>
</template>

<script>
export default {
    name: 'hpaPage',
    data(){
        return {
            article: {
                list: [
                    '血小板是微小的、必不可少的血液成分，以前认为只有通过粘附在受损血管上才能维持体内平衡，从而与纤维蛋白形成凝块以防止出血。如今，它们被赋予了除凝血之外更多样化的作用，例如在炎症、先天免疫和适应性免疫中，证明这些小物体在广泛的疾病中至关重要。大多数血小板功能是通过膜糖蛋白 (GP) 与其他细胞结合来实现的。在这些 GP 上，存在称为人血小板抗原 (HPA) 的多态性氨基酸序列，由于其多态性，它们被认为是同种异体抗原 。',
                    '迄今为止，已通过血清学鉴定了 41 种类型的 HPA，按鉴定时间顺序命名 。十二种抗原，包括 HPA-1a/1b、-2a/2b、-3a/3b、-4a/4b、-5a/b 和 -15a/b 是双等位基因，位于 GPIIIa、GPIba、GPIIb、GPIIIa、GPIa 和CD109，分别为。 HPA 以共显性常染色体方式遗传，最常见的等位基因称为“a”。它们的多态性主要是由于遵循单核苷酸多态性 (SNP) 对其结构内的氨基酸进行了改变。一个氨基酸的改变会导致抗原三级结构的变化，从而产生能够诱导同种异体抗体产生的新表位。',
                    '母亲和胎儿在怀孕期间或在输血的情况下供体和受体之间血小板抗原不相容会诱发同种抗体，这可能会破坏血小板，从而造成血小板减少症和各种出血性疾病，包括胎儿和新生儿同种免疫性血小板减少症 (FNAIT)、输血后紫癜 (PTP) ) 和多次输血血小板不应性 (MPR)。 血小板减少症是血液系统疾病中常见的、致命的并发症，这更证明了 HPA 在临床研究中的重要性。 最具免疫原性的 HPA 是 HPA1a 和 HPA5b，它们负责诱导 90% 以上的抗血小板同种抗体。',
                    'HPA 的频率因人群而异，深入了解不同人群的 HPA 频率可以在减少供体和受体之间的抗原差异方面发挥重要作用，从而降低同种免疫的风险。 事实上，确定人群中 HPA 等位基因和基因型频率可以为减少与疑似或高度同种免疫个体中 HPA 介导的同种异体反应相关的问题提供重要基础。'
                ]
            }
        }
    },
    methods: {
        goBack(){
            this.$router.push('/page4')
        }
    }
}
</script>

<style lang='scss' scoped>
.hpapage{ 
    width: 1000px;
    margin: 0 auto;
    p{
        font-size: 16px;
        margin-bottom: 10px;
        line-height: 25px;
        padding: 10px;
        text-indent: 35px;
    }
}
</style>