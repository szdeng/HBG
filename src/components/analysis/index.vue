<template>
<div>
    <div class="analysis">
        <h2>数据分析服务</h2>
        <el-form>
            <el-form-item>
                <label for="">手机号</label>
                <el-input v-model="uploadData.phonenumber" placeholder="手机号" @change="is_phone"></el-input>
            </el-form-item>
            <el-form-item>
                <label for="">分析内容</label><br>
                <textarea  cols="30" rows="10" v-model="uploadData.content" placeholder="分析内容"></textarea>
            </el-form-item>
            <el-form-item>
                <label for="">测序数据</label>
                <el-upload
                    action
                    ref="upload"
                    :http-request="upload"
                    :before-remove="beforeRemove"
                    :limit="1"
                    :auto-upload="false"
                    :on-exceed="handleExceed"
                    :file-list="fileList">
                    <el-button size="small" type="primary">选择文件</el-button>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="submitbtn" @click="submit">提交信息</el-button>
            </el-form-item>
        </el-form>
    </div>
</div>
    
</template>

<script>
import service from '@/api/axios'

export default {
    name: 'page5',
    data(){
        return {
            fileList: [],
            uploadData: {
                phonenumber: '',
                content: ''
            },
            isPhone: false
        }
    },
    methods: {
        is_phone(){
            let phone_reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
            if(!phone_reg.test(this.uploadData.phonenumber)){
                this.$message({
                    type: 'error',
                    message: '手机号码格式错误'
                })
                this.isPhone = false
            }
            else{
                this.isPhone = true
            }
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            console.log(fileList)
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
        upload(file){
            console.log('upload' , file.file);
            this.fileList.push(file.file)
        },
        submit(){
            console.log('submit')
            this.$refs.upload.submit();
            console.log(this.fileList[0]);
            if(this.isPhone == true){
                const url = 'api/analysis/order/'
                const params = new FormData()
                params.append('phone', this.uploadData.phonenumber)
                params.append('sanger_file', this.fileList[0])
                params.append('title', '123456')
                console.log('params ====',params);
                service.post(url, params).then(res => {
                    console.log(res);
                    this.$alert('文件上传成功', '上传成功',{
                        confirmButtonText: '确定',
                    })
                    this.uploadData = {
                        phonenumber: '',
                        content: ''
                    }
                    this.fileList = []
                }).catch(err => {
                    console.log(err);
                    this.$message({
                        type: 'error',
                        message: '文件上传失败'
                    })
                })
            }
            else{
                this.$message({
                    type: 'error',
                    message: '请填入正确的手机号'
                })
            }
        }
    }
}
</script>

<style lang='scss' scoped>
.analysis {
    width: 800px;
    margin: 0 auto;
    h2{
        font-size: 28px;
        font-weight: 700;
    }
    .el-form-item{
        textarea {
            border: 1px solid rgba(192, 196, 204, 0.5);
            border-radius: 4px;
            max-width: 600px;
            min-width: 600px;
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
    .el-form-item:last-child {
        text-align: center;
        .el-button{
            width: 40%;
        }
    }
    
}
</style>