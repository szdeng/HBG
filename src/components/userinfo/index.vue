<template>
    <div class="userinfo-box">
        <h2>基本信息</h2>
        <div class="split-line"></div>
        <el-form 
            :model="form"
            :label-position="'left'"
            label-width="130px">
            <el-form-item label="账号">
                <p>{{ form.account }}</p>
            </el-form-item>
            <el-form-item label="用户组">
                <p>{{ form.usergroup }}</p>
            </el-form-item>
            <el-form-item label="头像">
                <el-row>
                    <el-col :span="2" style="cursor: pointer; position: relative;">
                        <el-avatar v-if="form.avatar.custom == null" :size="50" :src="form.avatar.customDefault"></el-avatar>
                        <el-avatar v-else :size="50" :src="form.avatar.custom"></el-avatar>
                        <div class="uploadavatar" title="上传头像" @click="uploadFile">
                            <label class="el-icon-camera" style="cursor: pointer"></label>
                            <input type="file" v-show="false" ref="fileRef" @change="fileChange" accept="image/png">
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <el-radio v-model="form.avatar.radio" label="custom">自定义头像</el-radio>
                    </el-col>
                    <el-col :span="2">
                        <el-avatar :size="50" :src="form.avatar.default"></el-avatar>
                    </el-col>
                    <el-col :span="4">
                        <el-radio v-model="form.avatar.radio" label="default">默认头像</el-radio>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="昵称">
                <el-input v-model="form.nickname">
                </el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="form.phonenumber">
                </el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="form.email" :disabled="true">
                </el-input>
            </el-form-item>
            <el-form-item label="个人描述">
                <el-input
                    type="textarea"
                    :rows="5"
                    :resize="'none'"
                    v-model="form.remark"
                    style="width: 90%"
                    maxlength="350"
                    show-word-limit
                    placeholder="添加您的个人简介...限定350字"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="submitUserInfo">保存资料</el-button>
            </el-form-item>
                <!-- <el-upload
                    action
                    ref="upload"
                    :http-request="upload"
                    :before-remove="beforeRemove"
                    :on-change="onChange"
                    :limit="1"
                    :auto-upload="false"
                    :on-exceed="handleExceed"
                    :file-list="file">
                    <el-button size="small" type="primary">选择文件</el-button>
                </el-upload> -->
        </el-form>
    </div>
</template>

<script>
import service from '@/api/axios'

export default {
    name: 'userInfo',
    data(){
        return {
            form: {
                account: '',
                usergroup: '',
                avatar: {
                    default: require('../../../public/assets/defaultAvatar.jpeg'),
                    customDefault: require('../../../public/assets/2.png'),
                    custom: null,
                    radio: 'default',
                    filepath: {}
                },
                nickname: '',
                phonenumber: '',
                email: '',
                remark: '123456789'
            },
        }
    },
    watch: {
    },
    created: function(){
        const url = '/api/users/profile/'
        const params = {}
        service.get(url, params).then(res => {
            console.log(res);
            if(res.profile.photo != ''){
                this.$store.dispatch("setImage", res.profile.photo)
                sessionStorage.setItem('avatarUrl', res.profile.photo)
                this.form.avatar.custom = res.profile.photo
                this.form.avatar.radio = 'custom'
            }
            else{
                this.$store.dispatch("setImage", require('../../../public/assets/defaultAvatar.jpeg'))
                sessionStorage.setItem('avatarUrl', require('../../../public/assets/defaultAvatar.jpeg'))
            }
            
            this.form.account = res.username
            this.form.nickname = res.profile.nickname
            this.form.phonenumber = res.profile.phone
            this.form.email = res.email
            this.form.remark = res.profile.bio
            if(res.groups.length > 0){
                for(let i = 0; i < res.groups.length; i++){
                    this.form.usergroup = this.form.usergroup + res.groups[i] + ' '
                }
            }
            else
                this.form.usergroup = '用户'
        }).catch(err => {
            console.log(err);
        })
    },
    methods: {
        // onChange(file, fileList){
        //     console.log(document.getElementsByClassName("el-upload__input")[0].value)
        //     console.log(file)
        //     console.log(fileList);
        // },
        // handleExceed(files, fileList) {
        //     this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        // },
        // beforeRemove(file, fileList) {
        //     console.log(fileList)
        //     return this.$confirm(`确定移除 ${ file.name }？`);
        // },
        // upload(file){
        //     console.log('upload' , file.file);
        //     this.file.push(file.file)
        // },
        uploadFile(){
            this.$refs.fileRef.dispatchEvent(new MouseEvent('click'))
        },
        fileChange(e){
            let file = e.target
            let reader = new FileReader()
            console.log('size === ',file.files[0].size);
            if(file.files[0] && file.files[0].size/1024/1024 > 2){
                this.$message({
                    type: 'warning',
                    message: '图片大小不能超过2M'
                })
                return
            }
            reader.readAsDataURL(file.files[0])
            reader.onloadend=(e)=>{
                this.form.avatar.custom = e.target.result
            }
            this.form.avatar.filepath = file.files[0]
        },
        submitUserInfo(){
            console.log('submit');
            const url = '/api/users/profile/'
            const params = new FormData()
            if(this.checkStr() === true){
                params.append('phone', this.form.phonenumber)
                params.append('nickname', this.form.nickname)
                console.log('filepath ========== ',this.form.avatar.filepath);
                if(this.form.avatar.radio != 'default' && this.form.avatar.custom != null)
                    params.append('avatar', this.form.avatar.filepath)
                params.append('bio', this.form.remark)
                console.log('avatar:   ',this.form.avatar.filepath);
                console.log('params', params);
                service.put(url, params).then(res => {
                    console.log('',res);
                    if(res.profile.photo != ''){
                        this.$store.dispatch("setImage", res.profile.photo)
                        sessionStorage.setItem('avatarUrl', res.profile.photo)
                    }
                        
                    else{
                        this.$store.dispatch("setImage", require('../../../public/assets/defaultAvatar.jpeg'))
                        sessionStorage.setItem('avatarUrl', require('../../../public/assets/defaultAvatar.jpeg'))
                    }
                        
                })
            }
        },
        checkStr(){
            const phoneReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
            const nicknameReg = /^.{0,20}$/
            if(phoneReg.test(this.form.phonenumber) === false && this.form.phonenumber != ''){
                this.$message({
                    type: 'warning',
                    message: '手机号码格式错误'
                })
                return false
            }
            if(nicknameReg.test(this.form.nickname) === false && this.form.nickname != ''){
                this.$message({
                    type: 'warning',
                    message: '昵称最长为20个字符'
                })
                return false
            }
            return true
        }
    }
}
</script>

<style lang='scss' scoped>
.userinfo-box{
    width: 100%;
    h2{
        font-weight: 200;
        margin: 10px;
        font-size: 24px;
        margin-left: 20px;
    }
    .split-line{
        border: none;
        width: 95%;
        margin: 0 auto;
        border-top: 1px solid #f5f5f5;
    }
    /deep/.el-form{
        padding: 10px;
        padding-bottom: 40px;
        .el-form-item__label{
            font-weight: 700;
            padding-left: 20px;
        }
        .el-form-item{
            margin: 10px 0;
            p{
                line-height: 40px;
            }
            .el-input{
                width: 90%;
            }
            .el-input__inner{
                height: 35px;
            }
            .uploadavatar{
                font-size: 25px;
                position: absolute;
                width: 50px;
                height: 50px;
                text-align: center;
                line-height: 50px;
                top: 0;
                color: rgba($color: #000000, $alpha: 0.6);
                background: rgba($color: #000000, $alpha: 0.15);
                border-radius: 50%;
                opacity:0;
                &:hover{
                    opacity:1
                }
            }
        }

    }
}
</style>