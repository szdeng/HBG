<template>
    <div class="reg-box">
        <el-form :model="form">
            <el-form-item>
                <h2>用户注册</h2>
            </el-form-item>
            <el-form-item>
                <el-tooltip effect="dark" content="必填；用户名长度为5-20个字符" placement="left">
                    <el-input type="text" placeholder="用户名" v-model="form.username" ref="username" @change="checkinput('username')">
                        <i slot="prefix" class="el-input__icon el-icon-user"></i>
                        <i slot="append" :class="user_class" :style="user_style"></i>
                    </el-input>
                </el-tooltip>
            </el-form-item>
            <el-form-item>
                <el-tooltip effect="dark" content="必填；输入合适的邮箱地址" placement="left">
                    <el-input type="text" placeholder="邮箱" v-model="form.email" ref="email" @change="checkinput('email')">
                        <i slot="prefix" class="el-input__icon el-icon-message"></i>
                        <i slot="append" :class="email_class" :style="email_style"></i>
                    </el-input>
                </el-tooltip>
            </el-form-item>
            <el-form-item>
                <el-tooltip effect="dark" content="必填；密码长度为6-20个字符，并且不能全是数字" placement="left">
                    <el-input type="password" placeholder="密码" v-model="form.password" ref="password" @change="checkinput('password')">
                        <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                        <i slot="append" :class="password_class" :style="password_style"></i>
                    </el-input>
                </el-tooltip>
            </el-form-item>
            <el-form-item>
                <el-tooltip effect="dark" content="必填；与上面输入的密码一致" placement="left">
                    <el-input type="password" placeholder="确认密码" v-model="form.password1" ref="password1" @change="checkinput('password1')">
                        <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                        <i slot="append" :class="password1_class" :style="password1_style"></i>
                    </el-input>
                </el-tooltip>
            </el-form-item>
            <el-form-item>
                <el-input type="text" placeholder="验证码" v-model="form.captcha" @change="is_code">
                    <i slot="prefix" class="el-input__icon el-icon-key"></i>
                    <i slot="append" :class="icon_class" :style="icon_verify"></i>
                </el-input>
                <img :src="'data:image/png;base64,'+form.image.base" alt="" style="width: 87px; height: 37px; margin-top: 10px; float:left; cursor:pointer" @click="get_code">
            </el-form-item>
            <el-form-item>
                <el-checkbox v-model="form.is_checked">我已阅读同意</el-checkbox><a href="#" class="checklink">《中济云使用协议》</a>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="register()">注册</el-button>
            </el-form-item>
            <el-form-item>
                已有账号？
                <el-link type="primary" :underline="false" @click="to_login">点击此处登录</el-link>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "reg",
    data(){
        return {
            form: {
                username: '',
                email: '',
                password: '',
                password1: '',
                is_checked: '',
                captcha: '',
                image: {
                    base: '',
                    id: 0
                }
            },
            icon_verify: {
                fontSize: '16px',
                visibility: 'hidden',
                color: 'red'
            },
            icon_class: 'el-icon-error',
            user_style: {
                fontSize: '16px',
                visibility: 'hidden',
                color: 'red'
            },
            user_class: 'el-icon-error',
            email_style: {
                fontSize: '16px',
                visibility: 'hidden',
                color: 'red'
            },
            email_class: 'el-icon-error',
            password_style: {
                fontSize: '16px',
                visibility: 'hidden',
                color: 'red'
            },
            password_class: 'el-icon-error',
            password1_style: {
                fontSize: '16px',
                visibility: 'hidden',
                color: 'red'
            },
            password1_class: 'el-icon-error'
        }
    },
    created() {
        this.get_code()
    },
    methods: {
        get_code(){
            console.log("get verifycode image")
            this.$axios.get('api/captcha/').then(res => {
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
        is_code(){
            console.log('check captcha');
            this.$axios.post('api/captcha/',{
                    image_id: this.form.image.id,
                    input_captcha_value: this.form.captcha
            }).then(res => {
                console.log(res);
                if(res.code === 0){
                    this.icon_class = "el-icon-success"
                    this.icon_verify.color = "green"
                }
                else if(res.code === -1){
                    this.$message({
                        type: 'error',
                        message: res.message
                    })
                    this.icon_class = "el-icon-error"
                    this.icon_verify.color = "red"
                }
                else{
                    this.$message({
                        type: 'warning',
                        message: res.message
                    })
                }
                this.icon_verify.visibility = 'visible'
            }).catch(err => {
                console.log(err);
                this.$message({
                    type: 'warning',
                    message: err
                })
            })
        },
        checkinput(e){
            switch(e) {
                case 'username': {
                    let username = this.form.username
                    let reg = /^[a-zA-Z0-9@._-]*.{5,20}$/
                    if (reg.test(username)){
                        this.$axios.get('api/users/' + username + '/count/').then(res => {
                            console.log(res);
                            if(res.count === 0){
                                this.user_style.color = "green"
                                this.user_class = "el-icon-success"
                            }
                            else{
                                this.user_style.color = "red"
                                this.user_class = "el-icon-error"
                                this.$message({
                                    type: 'error',
                                    message: '用户名已存在'
                                })
                            }
                        }).catch(err => {
                            console.log(err);
                        })
                    }
                    else{
                        this.user_style.color = "red"
                        this.user_class = "el-icon-error"
                    }
                    this.user_style.visibility = "visible"
                    break
                }
                case 'email': {
                    let email = this.form.email
                    let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
                    if (reg.test(email)){
                        this.$axios.get('api/users/' + email + '/count/').then(res => {
                            console.log(res);
                            if(res.count === 0){
                                this.email_style.color = "green"
                                this.email_class = "el-icon-success"
                            }
                            else{
                                this.email_style.color = "red"
                                this.email_class = "el-icon-error"
                            }
                        }).catch(err => {
                            console.log(err);
                        })
                    }
                    else{
                        this.email_style.color = "red"
                        this.email_class = "el-icon-error"
                    }
                    this.email_style.visibility = "visible"
                    break
                }
                case 'password': {
                    let password = this.form.password
                    let reg = /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,20}$/
                    if(password === this.form.username){
                        this.password_style.color = "red"
                        this.password_class = "el-icon-error"
                        this.$message({
                            type: 'error',
                            message: '密码不能和用户名一样',
                        })
                    }
                    else if (reg.test(password)){
                        console.log('password is ok')
                        this.password_style.color = "green"
                        this.password_class = "el-icon-success"
                    }
                    else{
                        console.log('password error')
                        this.password_style.color = "red"
                        this.password_class = "el-icon-error"
                        this.$message({
                            type: 'error',
                            message: '密码过于简单',
                        })
                    }
                    this.password_style.visibility = "visible"
                    break
                }
                case 'password1':{
                    if (this.form.password1 === this.form.password){
                        console.log('password1 is ok')
                        this.password1_style.color = "green"
                        this.password1_class = "el-icon-success"
                    }
                    else{
                        console.log('password1 error')
                        this.password1_style.color = "red"
                        this.password1_class = "el-icon-error"
                    }
                    this.password1_style.visibility = "visible"
                    break
                }
            }
        },
        register(){
            console.log('click register')
            if(this.form.is_checked !== true){
                this.$message({
                    type: 'error',
                    message: '请勾选《中济云使用协议》'
                })
            }
            else{
                this.$axios.post('api/users/register/', {
                    username: this.form.username,
                    password: this.form.password,
                    email: this.form.email,
                    password_confirm: this.form.password1,
                    captcha: {
                        captcha_key: this.form.image.id,
                        captcha_value: this.form.captcha
                    },
                }).then(res => {
                    console.log('reg success')
                    console.log(res)
                    // this.$router.pop('/index')

                        this.$alert('注册成功，请前往邮箱激活', '注册成功', {
                            confirmButtonText: '确定',
                            callback: action => {
                                this.$router.push('/login')
                            }
                        })

                })
            }
        },
        to_login() {
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="less">
.reg-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 450px;
    padding: 20px;
    height: auto;
    margin: 0 auto;
    h2{
        font-size: 25px;
        font-weight: 600;
    }
    .el-button {
        width: 300px
    }
    .el-link {
        :hover{
            color: rgb(235, 75, 47);
        }
    }
    .el-input__inner:focus {
        border-color: lightblue;
        box-shadow: 0px 0px 5px 5px rgba(lightblue, 0.2);
    }
    .checklink {
        text-decoration: none;
        color: blue;
        :hover {
            color: red;
        }
    }
}
</style>