<template>
<div>
    <el-menu 
        :default-active="this.$route.path" 
        router 
        class="el-menu-demo" 
        mode="horizontal" 
        @select="handleSelect"
        text-color="#828282"
        active-text-color="#17a7e4">
        <el-menu-item index="/index" style="border-bottom: none;text-decoration: none;">
            <img 
                :src='require("@/assets/blooddb_updated.png")' 
                id="logo_img" 
                alt="血型系统常见单倍型查询引擎">
        </el-menu-item>
        <el-menu-item index="/search">查询引擎</el-menu-item>
        <el-menu-item index="/medical">输血医学</el-menu-item>
        <el-menu-item index="/movies">输血视频</el-menu-item>
        <el-menu-item index="/case">临床案例</el-menu-item>
        <el-menu-item index="/genedata">基因数据</el-menu-item>
        <el-menu-item index="/analysis">数据分析</el-menu-item>
        <el-submenu
            index="5"
            :popper-append-to-body='false'
            :show-timeout='0'
            :hide-timeout='0'> 
            <template slot="title">实用工具</template>
            <el-menu-item index="/conversion">单位换算</el-menu-item>
            <el-menu-item index="/timezone">时区转换</el-menu-item>
        </el-submenu>
        <el-submenu
            index="6"
            :popper-append-to-body='false'
            :show-timeout='0'
            :hide-timeout='0'> 
            <template slot="title">关于我们</template>
            <el-menu-item index="/about">关于我们</el-menu-item>
            <el-menu-item index="/agreement">用户协议</el-menu-item>
            <el-menu-item index="/invoice">收费标准</el-menu-item>
            <el-menu-item index="/contact">联系我们</el-menu-item>
        </el-submenu>
        <!-- <el-input class="top_search" placeholder="搜索"></el-input> -->
        <el-dropdown style="float: right" @command="handleCommand" v-if="isLogin === false" ref="loginMessage">
            <el-avatar class="el-dropdown-link" style="margin-top: 10px; margin-right: 50px">
                <label @click="to_login">登录</label>
            </el-avatar>
            <el-dropdown-menu slot="dropdown" >
                <div class="userbox">
                    <div>
                        <el-button type="primary" style="width: 100%" @click="hideMenu_login">登录</el-button>
                    </div>
                    <div>
                        <label>首次使用？</label>&nbsp;&nbsp;
                        <router-link to="/reg" @click.native="hideMenu_reg">点我注册</router-link>
                    </div>
                </div>
            </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown style="float: right" @command="handleCommand" v-else>
            <el-avatar v-if="userImage != null" :src="userImage" class="el-dropdown-link" style="margin-top: 10px; margin-right: 50px">
            </el-avatar>
            <el-avatar v-else class="el-dropdown-link" style="margin-top: 10px; margin-right: 50px">
                <label for="">{{currentUser}}</label>
            </el-avatar>
            <el-dropdown-menu slot="dropdown">
                <div class="userlist">
                    <el-dropdown-item icon="el-icon-user" command="a">用户中心</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-turn-off" command="b">退出登录</el-dropdown-item>
                </div>
            </el-dropdown-menu>
        </el-dropdown>
        
    </el-menu>
</div>
    
</template>

<script>
// import { component } from 'vue/types/umd'
export default {
    name: "myheader",
    data(){
        return{
            image_url: '../assets/blooddb_updated.png',
            user: {
                uid: '00001',
                name: 'user1',
            },
        }
    },
    methods: {
        hideMenu_login() {
            this.$refs.loginMessage.hide()
            this.to_login()
        },
        hideMenu_reg() {
            this.$refs.loginMessage.hide()
        },
        to_login() {
            this.$router.push('/login')
        },
        to_user(){
            this.$router.push('/userinfo/'+this.user.id)
        },
        handleCommand(command) {
            switch(command){
                case 'a':
                    console.log('click on user')
                    this.$router.push('/userProfile/user')
                    break
                case 'b':
                    console.log('click on logout')
                    this.is_login = 'false'
                    this.$router.replace('/login')
                    break
            }
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        to_index(){
            console.log('click')
            this.$router.push('/index')
        }
    },
    computed: {
        isLogin(){
            if(sessionStorage.getItem("userName")&&sessionStorage.getItem("userToken")){
                console.log('islogin == true');
                this.$store.commit("userStatus", sessionStorage.getItem("userName"))
                // this.$store.commit("userImageGet", sessionStorage.getItem("userImage"))
                this.$store.commit("userToken", sessionStorage.getItem("userToken"))
            }else{
                this.$store.commit("userStatus", null)
            }
            return this.$store.getters.isLogin
        },
        currentUser(){
            return this.$store.getters.currentUser
        },
        userImage(){
            console.log(this.$store.getters.userImage)
            // return require('../'+this.$store.getters.userImage)
            return this.$store.getters.userImage
        }
    }
}
</script>

<style lang="scss" scoped>
/deep/.el-menu{
    #logo_img{
        width: 150px;
        height: 24px;
        padding-top: 15px;
        cursor:pointer;
        float: left;
    }
    .el-avatar{
        cursor: pointer;
    }
    .el-submenu {
        .el-menu-item {
            padding-left: 25px;
            &:hover{
                background-color: rgba(173, 216, 230, 0.3);
            }
        }
    }
}

.userbox {
    height: 100px;
    width:300px;
    justify-content: center;
    div:first-child{
        width: 80%;
        text-align: center;
        margin: 30px auto 0
    }
    div:nth-child(2){
        width: 75%;
        margin: 20px auto 0;
        text-align: center;
        label{
            font-size: 14px
        }
    }
}

.userlist {
    width: 150px
}

.el-dropdown-link {
    label{
        cursor: pointer;
    }
}
</style>