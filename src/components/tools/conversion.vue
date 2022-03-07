<template>
<div>
    <h2 style="text-align: center; font-size: 25px">单位换算器</h2>
    <div class="conversion">
        <el-tabs v-model="current" type="border-card">
            <el-tab-pane label="长度换算" name="0">
                <el-row :gutter="20" v-for="(y,index) in this.typeList[0].dataList" :key="index">
                    <div class="h5title"><h5 style="text-align: center">{{ y.kind }}</h5></div>
                    <el-col :span="span" v-for="(item,index) in y.data" :key="index" >
                        <el-row style="margin-bottom: 20px">
                            <el-col :span="8">
                                <label for="" >{{ item.unit }}</label>
                            </el-col>
                            <el-col :span="10">
                                <el-input style="width: 180px" v-model="item.value"></el-input>
                            </el-col>
                            <el-col :span="6">
                                <el-button type="success" @click="test(y.kind ,0, index)" >换算</el-button>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <div style="text-align: center">
                    <el-button type="primary" style="width: 200px; " @click="clear(0)">数据重置</el-button>
                </div>
            </el-tab-pane>
            <el-tab-pane  v-for="(x, index) in this.typeList.slice(1)" :key="index" :label="x.name+'换算'" :name="String(x.id)">
                <el-row :gutter="20" v-for="(y,index) in x.dataList" :key="index">
                    <div class="h5title"><h5 style="text-align: center">{{ y.kind }}</h5></div>
                    <el-col :span="span" v-for="(item,index) in y.data" :key="index">
                        <el-row style="margin-bottom: 20px">
                            <el-col :span="8">
                                <label for="" >{{ item.unit }}</label>
                            </el-col>
                            <el-col :span="10">
                                <el-input style="width: 180px" v-model="item.value"></el-input>
                            </el-col>
                            <el-col :span="6">
                                <el-button type="success" @click="test(y.kind, x.id,index)">换算</el-button>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <div style="text-align: center">
                    <el-button type="primary" style="width: 200px;" @click="clear(x.id)">数据重置</el-button>
                </div>
            </el-tab-pane>
        </el-tabs>
        <el-divider content-position="left">{{ this.typeList[current].title }}</el-divider>
        <p v-for="p in this.typeList[current].introList" :key="p">{{ p }}</p>
    </div>
</div>

</template>

<script>
export default {
    name: 'conversion',
    data() {
        return {
            typeList: [
                {
                    name: '长度',
                    id: 0,
                    title: '长度单位介绍',
                    scale: [1,1000,10000,100000,1000000,1000000000,2,300,3000,30000,300000,3000000,0.5399568,546.8066492,0.6213712,4.9709695,1093.6132983,3280.8398950,39370.0787402,],
                    dataList: [
                        {
                            kind: '',
                            data: [
                                {unit: '公里(kilometre)',value: ''},
                                {unit: '米(metre)',value: ''},
                                {unit: '分米(decimeter)',value: ''},
                                {unit: '厘米(centimeter)',value: ''},
                                {unit: '毫米(millimeter)',value: ''},
                                {unit: '微米(micrometer)',value: ''},
                                {unit: '里',value: ''},
                                {unit: '丈',value: ''},
                                {unit: '尺',value: ''},
                                {unit: '寸',value: ''},
                                {unit: '分',value: ''},
                                {unit: '厘',value: ''},
                                {unit: '海里(nautical mile)',value: ''},
                                {unit: '英寻',value: ''},
                                {unit: '英里(mile)',value: ''},
                                {unit: '弗隆(fur)',value: ''},
                                {unit: '码(yard)',value: ''},
                                {unit: '英尺(foot)',value: ''},
                                {unit: '英寸(inch)',value: ''}
                            ]
                        },
                    ],
                    introList: [
                        '长度单位是测量长度或距离方式。',
                        '▲国际单位制中，长度的标准单位是“米”，用符号“m”表示。',
                        '▲其他的长度单位还有兆米(Mm)、千米(km)、分米(dm)、厘米(cm)、毫米(mm)、微米(μm)、纳米(nm)、皮米（pm)、飞米（ fm)、阿米（am)等。他们同米的换算关系如下：',
                        '1Mm=1×10^6m',
                        '1km=1×10^3m',
                        '1dm=1×10^(-1)m',
                        '1cm=1×10^(-2)m',
                        '1mm=1×10^(-3)m',
                        '1μm=1×10^(-6)m',
                        '1nm=1×10^(-9)m',
                        '1pm=1×10^(-12)m',
                        '1fm=1×10^(-15)m',
                        '1am=1×10^(-18)m',
                        '1米 ＝10分米 ＝100厘米 ＝1000毫米 ＝10e6微米 ＝10e9纳米 ＝10e10埃 ＝10e12皮米 ＝10e15飞米',
                        '▲我国传统的长度单位还有尺、寸、丈、里等。它们和米之间的换算关系为：',
                        '１米＝０.３（丈）＝３（尺）＝３０（寸）',
                        '▲在天文学中常用“光年”来做长度单位，它是真空状态下光１年所走过的距离，也因此被称为光年。１光年＝9.04653×10^12km,但习惯上说光年是距离单位。'
                    ]
                },
                {
                    name: '温度',
                    id: 1,
                    title: '三种温度单位换算公式',
                    scale: [],
                    dataList: [
                        {
                            kind: '',
                            data: [
                                {unit: '摄氏度(C)',value: ''},
                                {unit: '华氏度(F)',value: ''},
                                {unit: '开氏度(K)',value: ''},
                                {unit: '兰氏度(Ra)',value: ''},
                                {unit: '列氏度(Re)',value: ''},
                            ]
                        }
                    ],
                    introList: [
                        '▲精确的测量表明：零摄氏度(冰点)比水的三相点低0.01度；',
                        'K＝5/9（°F+459.67） K=℃+273.15',
                        'n℃=(5/9·n+32) °F n°F=[(n-32)×5/9]℃',
                        '1°F=5/9℃（温度差）',
                        '▲比0度冷一半是多少度？',
                        '摄氏度0度是32华氏度，低一倍就是16华氏度，16华氏度换算成摄氏度是-8.89度。',
                    ]
                },
                {
                    name: '功率',
                    id: 2,
                    title: '',
                    scale: [1000,1,1.341,1.36,102.0000007,0.239,0.9478,737.6,1000,1000],
                    dataList: [
                        {
                            kind: '',
                            data: [
                                {unit: '瓦(W)',value: ''},
                                {unit: '千瓦(kW)',value: ''},
                                {unit: '英制马力(HP)',value: ''},
                                {unit: '米制马力(PS)',value: ''},
                                {unit: '公斤·米/秒(kg·m/s)',value: ''},
                                {unit: '千卡/秒(kcal/s)',value: ''},
                                {unit: '英热单位/秒(Btu/s)',value: ''},
                                {unit: '英尺·磅/秒(ft·lb/s)',value: ''},
                                {unit: '焦耳/秒(J/s)',value: ''},
                                {unit: '牛顿·米/秒(N·m/s)',value: ''},
                            ]
                        }
                    ],
                    introList: [
                    ]
                },
                {
                    name: '速度',
                    id: 3,
                    title: '速度单位的换算关系',
                    scale: [1000000,1000,3600000,0.0033356,2938.584,2236936,39370079],
                    dataList: [
                        {
                            kind: '',
                            data: [
                                {unit: '米/秒(m/s)',value: ''},
                                {unit: '千米/秒(km/s)',value: ''},
                                {unit: '千米/时(km/h)',value: ''},
                                {unit: '光速(c)',value: ''},
                                {unit: '马赫(mach)',value: ''},
                                {unit: '英里/时(mile/h)',value: ''},
                                {unit: '英寸/秒(in/s)',value: ''},
                            ]
                        }
                    ],
                    introList: [
                        '1 mph = 1.609344 km/h',
                        '1 km/h = 0.6213712 mph',
                        '1 m/s = 0.279 KPH = 0.449 MPH',
                        '1 MPH = 1.61 KPH',
                        '1 knot = 0.5144444 m/s = 1.152 MPH = 1.85 KPH',
                        'mach number = object speed / sonic speed',
                        'kts = knots',
                        '1 mach number = sonic speed',
                        '▲KM大家都知道是公里的意思，而MPH大家都俗称“迈”，在国外是“英里”的意思。',
                        '咱们车上的速度表都是以KM来显示的，国外是MPH。',
                        '而咱们好些人确老爱说车速为多少多少迈，这就不对了，按上面的公式换算一下就知道时速是多少公里了。比如说“我当时速度80迈”，实际上已经128公里了。'
                    ]
                },
                {
                    name: '面积',
                    id: 4,
                    title: '面积单位的换算关系',
                    scale: [1,100,10000,1000000,100000000,10000000000,1000000000000,247.1053815,0.3861022,1195990.046301,10763910.41671,1550003100.006,39536.8610347,15,1500,15000,9000000,900000000],
                    dataList: [
                        {
                            kind: '公制',
                            data: [
                                {unit: '平方千米(km²)',value: ''},
                                {unit: '公顷(ha)',value: ''},
                                {unit: '公亩(are)',value: ''},
                                {unit: '平方米(㎡)',value: ''},
                                {unit: '平方分米(dm²)',value: ''},
                                {unit: '平方厘米(cm²)',value: ''},
                                {unit: '平方毫米(mm²)',value: ''},
                            ]
                        },
                        {
                            kind: '英制',
                            data: [
                                {unit: '英亩(acre)',value: ''},
                                {unit: '平方英里(sq.mi)',value: ''},
                                {unit: '平方码(sq.yd)',value: ''},
                                {unit: '平方英尺(sq.ft)',value: ''},
                                {unit: '平方英寸(sq.in)',value: ''},
                                {unit: '平方竿(sq.rd)',value: ''},
                            ]
                        },
                        {
                            kind: '市制',
                            data: [
                                {unit: '顷',value: ''},
                                {unit: '亩',value: ''},
                                {unit: '分',value: ''},
                                {unit: '平方尺',value: ''},
                                {unit: '平方寸',value: ''},
                            ]
                        }
                    ],
                    introList: [
                        '1平方厘米＝100平方毫米＝0.1550平方英寸',
                        '1平方米＝10000平方厘米＝1.1960平方码',
                        '1公倾＝10000平方米＝2.4711英亩',
                        '1平方公里＝100公顷＝0.3861平方英里',
                        '1平方英寸＝6.4516平方厘米',
                        '1平方码＝9平方英尺＝0.8361平方米',
                        '1英亩＝4840平方码＝4046.86平方米',
                        '1平方英里＝640英亩＝259.0公顷',
                        '1平方公里=1000000平方米',
                        '1平方米=10000平方厘米',
                        '1平方厘米=100平方毫米',
                        '▲面积换算公式 Square Measure',
                        '1 square inch 平方英寸 =6.45 sq.centimetres 平方厘米',
                        '1 square foot 平方英尺 =144 sq.in. 平方英寸 =9.29 sq.decimetres 平方分米',
                        '1 square yard 平方码 =9 sq.ft. 平方英尺 =0.836 sq.metre 平方米',
                        '1 acre 英亩 =4840 sq.yd. 平方码 =0.405 hectare 公顷',
                        '1 square mile 平方英里 =640 acres 英亩 =259 hectares 公顷',
                    ]
                },
                {
                    name: '体积',
                    id: 5,
                    title: '体积换算公式 Cubic Measure',
                    scale: [0.00001,10000,10000000,10000000000,10000000000000,10000000,100000000,10000000000,1000000000,100000,353147.2482766,610238445.022,13079.5277139,8.1071319,
                            2199691.573326,2641720.523581,10000000000000,351988736.3604,338180588.4342],
                    dataList: [
                        {
                            kind: '公制',
                            data: [
                                {unit: '立方千米(km³)',value: ''},
                                {unit: '立方米(m³)',value: ''},
                                {unit: '立方分米(dm³)',value: ''},
                                {unit: '立方厘米(cm³)',value: ''},
                                {unit: '立方毫米(mm³)',value: ''},
                                {unit: '升(l)',value: ''},
                                {unit: '分升(dl)',value: ''},
                                {unit: '毫升(ml)',value: ''},
                                {unit: '厘升(cl)',value: ''},
                                {unit: '公石(hl)',value: ''},
                                {unit: '微升(ul)',value: ''},
                            ]
                        },
                        {
                            kind: '英制',
                            data: [
                                {unit: '立方英尺(cu ft)',value: ''},
                                {unit: '立方英寸(cu in)',value: ''},
                                {unit: '立方码(cu yd)',value: ''},
                                {unit: '亩英尺',value: ''},
                                {unit: '英制加仑(uk gal)',value: ''},
                                {unit: '美制加仑(us gal)',value: ''},
                                {unit: '英制液体盎司(oz)',value: ''},
                                {unit: '美制液体盎司(oz)',value: ''},
                            ]
                        },
                    ],
                    introList: [
                        '1 cubic inch 立方英寸 =16.4 cu.centimetres 立方厘米',
                        '1 cubic foot 立方英尺 =1728 cu.in. 立方英寸 =0.0283 cu.metre 立方米',
                        '1 cubic yard 立方码 =27 cu.ft. 立方英尺 =0.765 cu.metre 立方米',
                        '▲容积换算公式 Capacity Measure',
                        '▲Britich 英制',
                        '1 pint 品脱 =20 fluid oz. 液量盎司 =34.68 cu.in. 立方英寸 =0.568 litre 升',
                        '1 quart 夸脱 =2 pints 品脱 =1.136 litres 升',
                        '1 gallon 加伦 =4 quarts 夸脱 =4.546 litres 升',
                        '1 peck 配克 =2 gallons 加伦 =9.092 litres 升',
                        '1 bushel 蒲式耳 =4 pecks 配克 =36.4 litres 升',
                        '1 quarter 八蒲式耳 =8 bushels 蒲式耳 =2.91 hectolitres 百升',
                        '▲American dry 美制干量',
                        '1 pint 品脱 =33.60 cu.in. 立方英寸 =0.550 litre 升',
                        '1 quart 夸脱 =2 pints 品脱 =1.101 litres 升',
                        '1 peck 配克 =8 quarts 夸脱 =8.81 litres 升',
                        '1 bushel 蒲式耳 =4 pecks 配克 =35.3 litres 升',
                        '▲American liquid 美制液量',
                        '1 pint 品脱 =16 fluid oz. 液量盎司 =28.88 cu.in. 立方英寸 =0.473 litre 升',
                        '1 quart 夸脱 =2 pints 品脱 =0.946 litre 升',
                        '1 gallon 加伦 =4 quarts 夸脱 =3.785 litres 升'
                    ]
                },
                {
                    name: '质量',
                    id: 6,
                    title: '质量单位的换算关系',
                    scale: [1,1000,1000000,1000000000,0.001,0.01,5000,500000,2.2046226,35.2739619,15432.3583529,0.0009842,0.0011023,0.0196841,0.0220462,0.157473,564.3833912,0.02,2,20,200],
                    dataList: [
                        {
                            kind: '公制',
                            data: [
                                {unit: '千克(kg)',value: ''},
                                {unit: '克(g)',value: ''},
                                {unit: '毫克(mg)',value: ''},
                                {unit: '微克(μg)',value: ''},
                                {unit: '吨(t)',value: ''},
                                {unit: '公担(q)',value: ''},
                                {unit: '克拉(ct)',value: ''},
                                {unit: '分',value: ''},
                            ]
                        },
                        {
                            kind: '英制',
                            data: [
                                {unit: '磅(lb)',value: ''},
                                {unit: '盎司(oz)',value: ''},
                                {unit: '格令(gr)',value: ''},
                                {unit: '长吨(lt)',value: ''},
                                {unit: '短吨(st)',value: ''},
                                {unit: '英担',value: ''},
                                {unit: '美担',value: ''},
                                {unit: '英石(st)',value: ''},
                                {unit: '打兰(dr)',value: ''},
                            ]
                        },
                        {
                            kind: '市制',
                            data: [
                                {unit: '担',value: ''},
                                {unit: '斤',value: ''},
                                {unit: '两',value: ''},
                                {unit: '钱',value: ''},
                            ]
                        },
                    ],
                    introList: [
                        '▲Avoirdupois Weight 重量换算公式',
                        '1 grain 格令 =0.065 gram 克',
                        '1 dram 打兰 =1.772 grams 克',
                        '1 ounce 盎司 =16 drams 打兰 =28.35 grams 克',
                        '1 pound 磅 =16 ounces 盎司 =7000 grains 谷 =0.4536 kilogram 千克',
                        '1 stone 英石 =14 pounds 磅 =6.35 kilograms 千克',
                        '1 quarter 四分之一英担 =2 stones 英石 =12.70 kilograms 千克',
                        '1 hundredweight 英担 =4 quarters 四分之一英担 =50.80 kilograms 千克',
                        '1 short ton 短吨 ( 美吨 )=2000 pounds 磅 =0.907 tonne 公吨',
                        '1 (long) ton 长吨 ( 英吨 )=20 hundredweight 英担 =1.016 tonnes 公吨'
                    ]
                },
            ],
            span: 12,
            current: '0',
        }
    },
    methods: {
        test(kind, e, index){
            console.log(e)
            console.log(index)
            switch(e){
                case 0:
                    this.normal(kind, e, index)
                    break
                case 1:
                    var value = parseFloat(this.typeList[1].dataList[0].data[0].value)
                    var t = 0
                    if(index === 0){
                        this.typeList[1].dataList[0].data[1].value = (value*1.8 + 32).toFixed(4)
                        this.typeList[1].dataList[0].data[2].value = (value + 273.15).toFixed(4)
                        this.typeList[1].dataList[0].data[3].value = ((value + 273.15)*1.8).toFixed(4)
                        this.typeList[1].dataList[0].data[4].value = (value/1.25).toFixed(4)
                    }
                    else{
                        switch(index){
                            case 1:
                                t = (value-32)/1.8
                                break
                            case 2:
                                t = value - 273.15
                                break
                            case 3:
                                t = value/1.8 - 273.15
                                break
                            case 4:
                                t = value*1.25
                                break
                        }
                        this.typeList[1].dataList[0].data[0].value = t.toFixed(4)
                        if(index !== 1){
                            this.typeList[1].dataList[0].data[1].value = (t*1.8 + 32).toFixed(4)
                        }
                        if(index !== 2){
                            this.typeList[1].dataList[0].data[2].value = (t + 273.15).toFixed(4)
                        }
                        if(index !== 3){
                            this.typeList[1].dataList[0].data[3].value = ((t + 273.15)*1.8).toFixed(4)
                        }
                        if(index !== 4){
                            this.typeList[1].dataList[0].data[4].value = (t/1.25).toFixed(4)
                        }
                    }
                    break
                case 2:
                    this.normal(kind, e, index)
                    break
                case 3:
                    this.normal(kind, e, index)
                    break
                case 4:
                    this.normal(kind, e, index)
                    break
                case 5:
                    this.normal(kind, e, index)
                    break
                case 6:
                    this.normal(kind, e, index)
                    break
                case 7:
                    this.normal(kind, e, index)
                    break
                case 8:
                    this.normal(kind, e, index)
                    break
            }
        },
        normal(kind, e, index){
            console.log(kind)
            var valuelist = this.typeList[e].scale
            var length = 0
            var realleng = 0
            console.log(valuelist)
            for(let i = 0; i < this.typeList[e].dataList.length; i ++){
                console.log(i)
                length = this.typeList[e].dataList[i].data.length + length
                if(this.typeList[e].dataList[i].kind === kind){
                    var kindex = i
                }
            }
            console.log(length)
            for(let i = 0; i < kindex; i ++){
                console.log(i)
                realleng = realleng + this.typeList[e].dataList[i].data.length

            }
            realleng = realleng + index
            console.log('realleng ===== '+realleng)
            console.log('kindex ===== '+kindex)
            var value = this.typeList[e].dataList[kindex].data[index].value
            console.log(value)
            console.log('flag')
            var b = valuelist[realleng]
            var currentindex = 0
            for(let i = 0; i < this.typeList[e].dataList.length; i ++){
                for(let n = 0; n < this.typeList[e].dataList[i].data.length; n++){
                    var result = (parseFloat(value)*valuelist[currentindex])/b
                    console.log(currentindex)
                    var y = String(result).indexOf(".") + 1; //获取小数点的位置
                    if(y != 0 && String(result).indexOf('e')==-1){
                        var count = String(result).length - y; //获取小数点后的个数
                        if(count > 7){
                            this.typeList[e].dataList[i].data[n].value = result.toFixed(7)
                        }
                        else{
                            this.typeList[e].dataList[i].data[n].value = String(result)
                        }
                    }else{
                        this.typeList[e].dataList[i].data[n].value = String(result)
                    }
                    currentindex = currentindex + 1
                }
            }
        },
        clear(e){
            console.log(e)
            for(let i = 0; i < this.typeList[e].dataList.length; i ++){
                for(let n = 0; n < this.typeList[e].dataList[i].data.length; n++){
                   this.typeList[e].dataList[i].data[n].value = ''
                }
            }
        }
    }
}
</script>

<style lang='scss' scoped>
.conversion {
    width: 1000px;
    margin: 40px auto 0;
    .el-tabs{
        label{
            font-size: 14px;
            line-height: 40px;
            float: right;
            margin-right: 10px;
        }
        .h5title{
            width: 900px;
            border-bottom: 2px solid rgba(220, 223, 230, 0.6);
            align-items: center;
            text-align: center;
            margin: 0 auto 20px;
            padding-bottom: 5px;
        }
    }
    .el-divider--horizontal {
        height: 2px;
        background-color: rgb(219, 61, 73);
    }
    .el-divider__text {
        font-size: 18px;
        font-weight: 600;
    }
    p {
        margin: 15px;
    }
}
</style>