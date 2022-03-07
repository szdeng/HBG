<template>
    <div class="contact">
        <h1>联系我们</h1>
        <h3>江苏中济万泰生物医药有限公司</h3>
        <el-form :model="form">
            <el-form-item>
                <el-input placeholder="邮箱" v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item>
                <textarea cols="30" rows="10" placeholder="信息内容" v-model="form.content"></textarea>
            </el-form-item>
            <el-form-item label="验证码" style="height:37px;">
                    <el-image :src="'data:image/png;base64,' + form.image.base" style="width: 87px; height: 37px;cursor: pointer" @click="get_code"></el-image>
                    <el-input v-model="form.captcha"></el-input>
            </el-form-item>
            <el-form-item style="text-align: center">
                <el-button type="primary" style="width: 40%" @click="submit">提交信息</el-button>
            </el-form-item>
        </el-form>
        <p></p>
        <p></p>
        <p>技术支持：</p>
        <p>范老师13901382983</p>
        <p>高老师18988791527</p>
        <p></p>
        <p>微信联系</p>
        <el-image style="width: 313px; height: 445px" :src="imageurl"></el-image>
        <p>请备注姓名、单位。</p>
        <p></p>
        <p></p>
        <p>商务联系：0510-81695399</p>
        <p>地址：江苏省江阴市东盛西路78号</p>
        <p>电话号码：0510-81695399</p>
        <p>传真：0510-81695129</p>
    </div>
</template>

<script>
import service from '@/api/axios'

export default {
    name: 'contact',
    data(){
        return {
            imageurl: require('../../assets/contact.png'),
            form: {
                email: '',
                content: '',
                captcha: '',
                image: {
                    base: '',
                    id: 0
                }
            }
        }
    },
    created() {
        this.get_code()
    },
    methods: {
        get_code(){
            console.log("get verifycode image")
            const url = 'api/captcha/'
            const params = {}
            service.get(url, params).then(res => {
                console.log(res)
                this.form.image.base = res.captcha
                this.form.image.id = res.image_id
            }).catch(err => {
                console.log(err);
                this.$message({
                    type: 'warning',
                    message: err
                })
            })
        },
        submit(){
            console.log('submit');
            const url = 'api/message/order/'
            const params = {
                email: this.form.email,
                question: this.form.content,
                captcha: {
                    captcha_key: this.form.image.id,
                    captcha_value: this.form.captcha
                }
            }
            service.post(url, params).then(res => {
                console.log(res);
                this.$alert('提交成功', '成功')
                this.form.email = ''
                this.form.content = ''
                this.form.captcha = ''
                this.get_code()
            }).catch(err => {
                console.log(err);
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
.contact {
    width: 100%;
    margin: 0 auto;
    h1 {
        margin: 20px 0 50px;
        font-size: 40px;
        font-weight: 500;
    }
    p{
        height: 40px;
        font-size: 14px;
    }
    .el-form{
        margin-top: 30px;
        .el-form-item:nth-child(3){
            position: relative;
            .el-input{
                height: 37px;
                line-height: 37px;
                width: 200px;
                position: absolute;
                left: 150px;
            }
        }
    }
    textarea {
        border: 1px solid rgba(192, 196, 204, 0.5);
        border-radius: 4px;
        max-width: 1190px;
        min-width: 1190px;
        padding: 5px;
        &:focus {
            border: 1px solid rgb(64, 158, 255);
            outline: none;
        }
        &::-webkit-input-placeholder {
            color: rgb(192, 196, 204);
            font-size: 13px;
        }
        
    }
}
</style>