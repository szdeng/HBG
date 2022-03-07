<template>
        <div id="userProfile">
        <el-row>
            <el-col :span="3" class="aside-box">
                <div class="avatar-box">
                    <el-avatar :size="70" :src="avatar"></el-avatar>
                    <p style="font-weight: 700; font-size: 20px; margin: 5px 0">{{ username}}</p>
                    <el-link :underline="false" style="color: red;margin-bottom: 10px" @click="loginOut">注销</el-link>
                </div>
                <div class="split-line"></div>
                <div class="menu-box">
                    <el-menu
                        default-active="/userProfile/user" 
                        router
                        @open="handleOpen"
                        @close="handleClose">
                        <el-menu-item index="/userProfile/user">
                            <span slot="title">用户信息</span>
                        </el-menu-item>
                        <el-menu-item index="/userProfile/reset">
                            <span slot="title">重置密码</span>
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-col>
            <el-col :span="19" class="main-box" style="box-shadow: none">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>

export default {
    name: 'userProfile',
    data(){
        return {
        }
    },
    computed: {
        avatar: function(){
            return this.$store.getters.userImage
        },
        username: function(){
            return this.$store.getters.currentUser
        }
    },
    methods: {
        loginOut(){
            this.$router.push('/login')
        },
        handleOpen(){
            console.log('handleOpen');
        },
        handleClose(){
            console.log('handleClose');
        }
    },
}
</script>

<style lang="scss" scoped>
#userProfile {
    margin: 0 auto;
    width: 100%;
    .aside-box{
        background-color: rgba(173, 216, 230, 0.3);
        border-radius: 10px;
        position: absolute;
        left: -14%;
        .split-line{
            border: none;
            width: 80%;
            margin: 0 auto;
            border-top: 1px dashed #555353;
        }
        .avatar-box{
            text-align: center;
            .el-avatar{
                margin-top: 20px;
            }
        }
        .menu-box{
            width: 120px;
            margin: 0 auto;
            .el-menu{
                height: 200px;
                padding: 0;
                margin: 0;
                border: none;
                background-color: rgba(242, 244, 247, 0);
                .el-menu-item{
                    text-align: center;
                    margin: 0;
                    padding-left: 0px;
                    height: 40px;
                    line-height: 40px;
                    margin: 10px 0;
                    border-radius: 5px;
                }
                .is-active{
                    // background-color: rgb(242, 244, 247);
                    background-color: rgb(214, 217, 220);
                }
            }
        }
        
    }
    .main-box{
        border: none;
    }

}
</style>