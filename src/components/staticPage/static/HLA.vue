<template>
    <div class="hlapage">
        <el-page-header @back="goBack" content="人类白细胞抗原" style="margin-bottom: 30px">
        </el-page-header>
        <p v-for="(item,index) in article.list1" :key="'list1' + index">{{ item }}</p>
        <el-image 
            :src="image.url1"
            fit="fill"></el-image>
        <p v-for="(item,index) in article.list2" :key="'list2' + index">{{ item }}</p>
        <el-image 
            :src="image.url2"
            fit="fill"
            style="width: 100%"></el-image>
        <p v-for="(item,index) in article.list3" :key="'list3' + index">{{ item }}</p>
        <el-table
            :data="table"
            :row-style="{height: 0+'px'}"
            :cell-style="{padding: 2+'px'}"
            :header-row-style="{height: 0+'px'}"
            :header-cell-style="{padding: 4+'px'}"
            border>
            <el-table-column
                prop="name"
                label="命名法"
                width="200">
            </el-table-column>
            <el-table-column
                prop="message"
                label="表示意义">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'hlaPage',
    data(){
        return {
            article: {
                list1: [
                    'HLA（人类白细胞抗原）是人类主要组织相容性复合体 (MHC)，这是一个多基因家族，参与人类（和所有椎骨）抵御病原体的防御。 HLA 分子的作用是将肽呈递给 T 细胞。 根据肽的不同，抗原呈递可导致 T 细胞激活和适应性免疫反应的启动。 HLA 分子也与 NK 细胞相互作用，当 HLA 分子（主要是 HLA-C）与 NK 抑制剂受体连接时抑制细胞毒性。 它们还在胸腺中的淋巴细胞成熟中起主要作用。',
                    'HLA 基因：HLA 复合体位于 6 号染色体短臂的 6p21.3 区域内（图 32.1），包含超过 240 个不同功能的基因。 许多基因编码免疫系统蛋白质。 MHC 基因家族分为三个亚组或类，分别命名为 I、II 和 III。 人类医学中常规研究的经典基因座是 I 类的 HLA-A、HLA-B 和 HLA-C，以及 II 类的 HLA-DRB1、HLA-DQB1 和 HLA-DPB1。 HLA 基因彼此密切相关，并作为一个遗传单位整体遗传。 单个染色体 6 上的一系列 HLA 等位基因称为单倍型。 遗传的母本和父本单倍型的组合产生了个体的 HLA 基因型。',
                    'HLA 抗原：HLA 抗原是糖蛋白，属于免疫球蛋白超家族，这意味着它们形成结构域（图 32.1）。基因在外显子和内含子序列中的组织反映了特定的蛋白质结构。',
                    'HLA I 类分子由多态性 α-链和单态性 β-球蛋白链组成，几乎在所有有核细胞上表达。它们将内源性加工的肽（例如来自自身降解的细胞质蛋白以及病毒蛋白）呈递给 CD8+ T 细胞。',
                    'HLA II 类分子由两条多态链（α 和 β）组成，仅在专职抗原呈递细胞（如巨噬细胞、树突细胞和 B 细胞，以及活化的 T 细胞和胸腺上皮细胞）上组成型表达）。例如，在压力的情况下，它们的表达可以在其他细胞上被诱导。它们将源自内体和溶酶体蛋白质降解（来自细胞外内容物，如细菌或寄生虫）的肽呈递给 CD4+ T 细胞。',
                    'HLA III 类区域编码了几种在炎症中很重要的分子； 它们包括补体成分 C2、C4 和因子 B； 肿瘤坏死因子 (TNF)-α; 淋巴毒素； 和三种热休克蛋白。',
                    'HLA 分子的肽和肽结合沟的结合形成了被 T 细胞受体识别的表位。抗原识别仅限于 MHC，因为单独的肽和 MHC 都不能刺激 T 细胞反应，这需要形成 MHC-肽复合物。'
                ],
                list2: [
                    'MHC 区域是人类基因组中多态性最强的区域。 多态性主要位于肽结合沟中，它影响抗原呈递并赋予种群选择性优势。 已描述了超过 17,000 个 HLA 等位基因（截至 2018 年 3 月，I 类为 12,893 个，II 类为 4802 个）。',
                    '个体 HLA 等位基因的频率在种群内和种群之间差异很大。常见等位基因是指在任何参考人群中出现的基因频率 >0.001 的基因。 有据可查的等位基因是那些在无关个体中被描述超过五次的等位基因。等位基因不是随机组合成单倍型的，因为发现某些 HLA 等位基因相互关联的频率比单独偶然预测的更频繁。 这种连锁不平衡特别适用于靠近在一起的基因座（HLA-B 和 HLA-C、HLA-DRB1 和 HLA-DQB1），定义了影响供体搜索的频繁和罕见等位基因关联。'
                ],
                list3: [
                    'HLA 命名法：WHO HLA 系统因素命名法委员会负责命名 HLA 基因和等位基因序列。 每个 HLA 等位基因名称都有一个唯一编号，对应最多四组数字（两或三），用冒号分隔。 前两位数字描述类型（等位基因家族），通常对应于血清学抗原。 接下来的两个或三个数字按照确定这些序列的顺序分配。 在某些类型中可能会使用后续数字。'
                ]
            },
            image: {
                url1: require('./images/hla-1.png'),
                url2: require('./images/hla-2.png'),
            },
            table: [
                {
                    name: 'HLA',
                    message: 'HLA 区域和 HLA 基因的前缀'
                },
                {
                    name: 'HLA-DRB1',
                    message: '特定的 HLA 基因座，即 DRB1'
                },
                {
                    name: 'HLA-DRB1*13',
                    message: '一组编码 DR13 抗原或序列与其他 DRB1*13 等位基因同源的等位基因'
                },
                {
                    name: 'HLA-DRB1*13:01',
                    message: '特定的 HLA 等位基因'
                },
                {
                    name: 'HLA-DRB1*13:01:02',
                    message: '与 DRB1*13:01:01 的同义突变不同的等位基因'
                },
                {
                    name: 'HLA_DRB1*13:01:01:02',
                    message: '包含 DRB1*13:01:01:01 编码区外突变的等位基因'
                },
                {
                    name: 'HLA-A*24:09N',
                    message: '“Null”等位基因 - 未表达的等位基因'
                },
                {
                    name: 'HLA-A*30:14L',
                    message: '编码蛋白质的等位基因，其细胞表面表达显着降低或“低”'
                },
                {
                    name: 'HLA-A*24:02:01:02L',
                    message: '编码一种细胞表面表达显着降低或“低”的蛋白质的等位基因，其中突变位于编码区之外'
                },
                {
                    name: 'HLA-B*44:02:01:02S',
                    message: '编码仅作为“分泌”分子表达的蛋白质的等位基因'
                },
                {
                    name: 'HLA-A*32:11Q',
                    message: '一种具有突变的等位基因，该突变先前已被证明对细胞表面表达有显着影响，但尚未得到证实且其表达仍然“有问题”'
                }
            ]
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
.hlapage{ 
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