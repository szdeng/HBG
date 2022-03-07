<template>
    <div class="reset-box">
        <h2>账号安全</h2>
        <div class="split-line"></div>
        <el-form
            :model="form"
            :label-position="'left'"
            label-width="130px">
            <el-form-item label="邮箱（必填）">
                <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="新密码">
                <el-input v-model="form.password" type="password"></el-input>
                <p style="margin-bottom: 10px">如果您想修改您的密码, 请在此输入新密码, 否则请留空.</p>
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input v-model="form.passwordConfirm" type="password"></el-input>
                <p>再输入一遍新密码. 提示: 您的密码最好至少包含8个字符. 为了保证密码强度, 使用大小写字母、数字和符号（例如! " ? $ % ^ & )</p>
            </el-form-item>
            <el-form-item>
                <el-button type="danger">重置密码</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'reset',
    data(){
        return {
            form: {
                email: '1760607475@qq.com',
                password: '',
                passwordConfirm: ''
            }
        }
    }
}
</script>

<style lang='scss' scoped>
.reset-box{
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
            .el-input{
                width: 90%;
            }
            .el-input__inner{
                height: 35px;
            }
        }
        p{
            padding: 10px;
            font-weight: 200;
            width: 80%;
            word-break: break-all;
            word-wrap: break-word;
        }
    }
}
</style>