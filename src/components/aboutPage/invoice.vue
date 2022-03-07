<template>
    <div class="invoice">
        <h1>云服务收费标准</h1>
        <div class="info">
            <h3>中济万泰云服务收费标准</h3>
            <el-table :data="tableData" style="width: 411px; margin-top: 20px" border>
                <el-table-column
                    prop="level"
                    label="级别"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="power"
                    label="权限"
                    width="250">
                </el-table-column>
                <el-table-column
                    prop="cost"
                    label="费用"
                    width="80">
                </el-table-column>
            </el-table>
            <p></p>
            <h3>信息</h3>
            <p></p>
            <p>江苏中济万泰生物医药有限公司</p>
            <p>江苏江阴农商银行</p>
            <p>微信、支付宝扫码支付</p>
            <el-image style="width: 400px; height: 400px" :src="alipayurl"></el-image>
            <p>支付成功后账户自动完成升级</p>
            <p></p>
            <p></p>
            <h3>用户开票申请</h3>
            <p></p>
            <el-form :model="form">
                <el-form-item>如需开具电子发票，请填写如下资料：</el-form-item>
                <el-form-item>
                    <el-input placeholder="公司名称" v-model="form.name"></el-input>
                    <label for="">*</label>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="统一社会信用代码" v-model="form.code"></el-input>
                    <label for="">*</label>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="公司账户" v-model="form.account"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="开户行" v-model="form.bank"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="公司地址" v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="公司电话" v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item style="text-align: center">
                    <el-button type="primary" style="width: 40%" @click="submit">提交信息</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import service from '@/api/axios'

export default {
    name: 'invoice',
    data(){
        return {
            alipayurl: require('../../assets/alipay.png'),
            form: {
                name: '',
                code: '',
                account: '',
                bank: '',
                address: '',
                phone: ''
            },
            tableData: [
                {
                    level: '一级',
                    power: 'HEA/HPA/HLA/HNA基本信息',
                    cost: '1688'
                },
                {
                    level: '二级',
                    power: 'HEA/HPA等位基因序列信息',
                    cost: '1688'
                },
                {
                    level: '一级',
                    power: 'HLA/HNA等位基因序列信息',
                    cost: '1688'
                }
            ]
        }
    },
    methods: {
        submit(){
            console.log('submit')
            const url = 'api/invoice/order/'
            const params = {
                company: this.form.name,
                social_credit_code: this.form.code,
                account: this.form.account,
                bank: this.form.bank,
                address: this.form.address,
                phone: this.form.phone,
            }
            service.post(url, params).then(res => {
                console.log(res);
                this.$alert('提交成功', '成功', {
                    confirmButtonText: '确定',
                })
                this.form = {
                    name: '',
                    code: '',
                    account: '',
                    bank: '',
                    address: '',
                    phone: ''
                }
            }).catch(err => {
                this.$message({
                    type: 'error',
                    message: err
                })
            })
        }
    }
}
</script>

<style lang='scss'>
.invoice{
    width: 1100px;
    margin: 0 auto;
    height: auto;
    h1 {
        margin: 20px 0 50px;
        font-size: 40px;
        font-weight: 500;
    }
    .info {
        p {
            height: 40px;
        }
        .el-form{
            .el-form-item{
                position: relative;
                label {
                    position: absolute;
                    left: -20px;
                    font-size: 16px;
                    color: red;
                }
            }
        }
    }
}
</style>