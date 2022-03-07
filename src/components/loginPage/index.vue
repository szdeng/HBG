<template>
    <div class="login-box">
        <el-form :model="form">
            <el-form-item>
                <h2>用户登录</h2>
            </el-form-item>
            <el-form-item>
                <el-input type="text" placeholder="用户名" v-model="form.username" ref="username">
                    <i slot="prefix" class="el-input__icon el-icon-user"></i>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" placeholder="密码" v-model="form.password" show-password ref="password">
                    <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="text" placeholder="验证码" v-model="form.captcha" @change="is_code">
                    <i slot="prefix" class="el-input__icon el-icon-key"></i>
                    <i slot="append" :class="icon_class" :style="icon_verify"></i>
                </el-input>
                
                <img :src="'data:image/png;base64,' + form.image.base" alt="" style="width: 87px; height: 37px; margin-top: 10px; float:left; cursor:pointer" @click="get_code">
            </el-form-item>
            <el-form-item style="margin-top: 10px">
                <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
            <el-form-item>
                <el-link type="primary" :underline="false" @click="to_findpassword">忘记密码？</el-link>&nbsp;&nbsp;&nbsp;
                <el-link type="primary" :underline="false" @click="to_reg">现在注册</el-link>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import service from '@/api/axios'

export default {
    name: "login",
    data(){
        return {
            form: {
                username: '',
                password: '',
                captcha: '',
                image: {
                    base: '',
                    id: 0
                }
            },
            is_username: 'false',
            is_password: 'false',
            is_verifycode: 'false',
            icon_verify: {
                // marginRight: '-40px',
                fontSize: '16px',
                visibility: 'hidden',
                color: 'red'
            },
            icon_class: 'el-icon-error'
        }
    },
    beforeRouteEnter:(to,from,next) => {
        //组件内守卫
        //已登录状态回到登录界面，即 登出
        next(vm => {
            vm.$store.dispatch("setUser",null);
        });
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
        is_code(){
            console.log('check captcha');
            const url = 'api/captcha/'
            const params = {
                image_id: this.form.image.id,
                input_captcha_value: this.form.captcha
            }
            service.post(url, params).then(res => {
                console.log(res);
                if(res['code'] === 0){
                    this.icon_class = "el-icon-success"
                    this.icon_verify.color = "green"
                }
                else if(res['code'] === -1){
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
        login(){
            let message = ''
            let type = ''
            const login_url = 'api/users/login/'
            const params = {
                login: this.form.username,
                password: this.form.password,
                captcha: {
                    captcha_key: this.form.image.id,
                    captcha_value: this.form.captcha
                }
            }
            if(this.form.verifycode === ''){
                type = 'error'
                message = '验证码不能为空'
                this.$message({
                    type: type,
                    message: message
                });
            }
            else if(this.form.username === ''){
                type = 'error'
                message = '用户名不能为空'
                this.$message({
                    type: type,
                    message: message
                });
            }
            else if(this.form.password === ''){
                type = 'error'
                message = '密码不能为空'
                this.$message({
                    type: type,
                    message: message
                });
            }
            else if(this.icon_class === 'el-icon-error'){
                type = 'error'
                message = '请输入正确的验证码'
                this.$message({
                    type: type,
                    message: message
                });
            }
            else{
                
                service.post(login_url, params).then(res => {
                    console.log(res)
                    if(res.detail === 'Login successful'){
                        sessionStorage.clear()
                        sessionStorage.setItem('userName', res.username)
                        sessionStorage.setItem('userToken', res.token)

                        this.$store.dispatch("setUser", res.username)
                        this.$store.dispatch("setToken", res.token)
                        // this.$store.dispatch("setImage", res.data.userInfo.avatarUrl)
                        service.get('/api/users/profile/', {}).then(res => {
                            console.log(res);
                            this.$store.dispatch("setImage", res.profile.photo)
                            if(res.profile.photo != ''){
                                sessionStorage.setItem('avatarUrl', res.profile.photo)
                                this.$store.dispatch("setImage", res.profile.photo)
                            }
                            else{
                                sessionStorage.setItem('avatarUrl', require('../../../public/assets/defaultAvatar.jpeg'))
                                this.$store.dispatch("setImage", require('../../../public/assets/defaultAvatar.jpeg'))
                            }
                        })
                        this.$router.push('/index')
                        type = 'success'
                        message = '登录成功'
                        this.$message({
                            type: type,
                            message: message
                        });
                    }
                    else if(res.detail === 'Login or password invalid.'){
                        console.log(res)
                        type = 'error'
                        message = '用户名或密码错误'
                        this.$message({
                            type: type,
                            message: message
                        });
                    }
                    else{
                        type = 'error'
                        message = '登录失败'
                        this.$message({
                            type: type,
                            message: message
                        })
                    }
                }).catch(err => {
                    type = 'error'
                    message = '登录失败'
                    this.$message({
                        type: type,
                        message: message
                    })
                })
            }
        },
        to_reg() {
            this.$router.push({
                    path: '/reg'
                })
        },
        to_findpassword() {
            this.$router.push({
                path: '/getpassword'
            })
        }
    }
}
</script>

<style lang="scss">
.login-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 450px;
    padding: 20px;
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
}
</style>