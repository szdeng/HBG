<template>
    <div id="getpassword">
        <el-steps align-center :active="active">
            <el-step title="确认账号"></el-step>
            <el-step title="邮箱验证"></el-step>
            <el-step title="重置密码"></el-step>
            <el-step title="重置成功"></el-step>
        </el-steps>
        <el-form class="input_box" v-if="active === 0" label-width="90px">
            <el-form-item label="确认账号：">
                <el-input placeholder="请输入账号" v-model="formStep1.email"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="stepOne">确认</el-button>
            </el-form-item>
        </el-form>
        <el-form class="input_box" v-else-if="active === 1" label-width="90px">
            <el-form-item>
                发送成功
            </el-form-item>
        </el-form>
        <el-form class="input_box" v-else-if="active === 2" label-width="90px">
            <el-form-item label="新密码：">
                <el-input placeholder="新密码：8~20位字符，区分大小写"  v-model="formStep2.password1" type="password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码：">
                <el-input placeholder="请输入确认密码"  v-model="formStep2.password2" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="stepTwo">确认修改</el-button>
            </el-form-item>
        </el-form>
        <el-form class="input_box" v-else>
            <el-form-item>
                <el-button type="primary" @click="next">去登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
let Base64 = require('js-base64').Base64

export default {
    name: 'forgetPsw',
    data(){
        return {
            active: 0,
            formStep1: {
                email: ''
            },
            formStep2: {
                password1: '',
                password2: ''
            },
            user_id: this.$route.query['user_id'],
            timestamp: this.$route.query['timestamp'],
            signature: this.$route.query['signature'],
        }
    },
    // watch: {
    //     is_verify(newV, oldV){
    //         console.log('watch=======',newV, oldV);
    //         if(newV == true){
    //             this.active = 2
    //         }
    //     }
    // },
    computed: {
        is_verify(){
            if(this.user_id != null && this.timestamp != null && this.signature != null){
                return true
            }
            else
                return false
        }
    },
    created() {
        if(this.is_verify == true)
            {
                console.log('change active');
                this.active = 2
            }
    },
    methods: {
        stepOne(){
            console.log(this.formStep1.email);
            const _this = this
            this.$axios.post('api/users/send-reset-password-link/',{
                login: this.formStep1.email
            }).then(res => {
                console.log(res);
                if(res.status == 200){
                    this.$alert('已向您的邮箱发送重置邮件', '成功', {
                        confirmButtonText: '确定',
                        callback: action => {
                            _this.next()
                        }
                    })
                }
            }).catch(err => {
                console.log(err.response.data);
            })
        },
        stepTwo(){
            console.log('flag');
            console.log(this.formStep2);
            const _this = this
            this.$axios.post('api/users/reset-password/', {
                user_id: this.user_id,
                timestamp: this.timestamp,
                signature: this.signature,
                password: this.formStep2.password1,
                password_confirm: this.formStep2.password2
            }).then(res => {
                console.log(res);
                if(res.status == 200){
                    this.next()
                }
            })
        },
        next(){
            if( this.active < 3)
                this.active++
            else if(this.active == 3){
                this.$router.push('/login')
            }
        }
    }
}
</script>

<style lang='scss' scoped>
#getpassword {
    .input_box{
        margin: 50px auto 0;
        width: 300px;
        text-align: center;
        /deep/.el-form-item{
            margin: 10px auto;
        }
        /deep/.el-input__inner{
            width: 250px;
            height: 35px;
        }
        /deep/.el-button{
            width: 250px;
            height: 35px;
        }
    }
}
</style>