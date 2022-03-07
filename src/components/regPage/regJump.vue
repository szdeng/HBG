<template>
    <div>
        <el-form v-loading="loading">
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'regjump',
    data(){
        return {
            loading: true
        }
    },
    created() {
        console.log(this.$route.query);
        const _this = this
        this.$axios.post('api/users/verify-registration/', {
                user_id: this.$route.query['user_id'],
                timestamp: this.$route.query['timestamp'],
                signature: this.$route.query['signature']
        }).then(res => {
            console.log(res);

                console.log('reg success');
                setTimeout(
                    function(){
                        _this.loading = false
                        _this.$alert('账户激活成功，前往登录页面', '激活成功', {
                            confirmButtonText: '确定',
                            callback: action => {
                                _this.$router.push('/login')
                            }
                        })
                    }, 2000
                )

        })
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.el-form{
    height: 300px;
    margin-bottom: 300px;
}
</style>