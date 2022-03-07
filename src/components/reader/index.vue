<template>
<div>
    <div class="reader">
        <h1>{{ this.case.title }}</h1>
        <div class="head">
            <el-page-header @back="goBack" :content="this.case.title">
            </el-page-header>
            <i class="date el-icon-date">&nbsp;{{ this.case.createDate }}</i>
        </div>
        <div class="keyword">
            <label style="margin-left: 20px; line-height: 42px">关键词：</label>
            <el-tag v-for="(item,index) in this.case.keyWord" :key="index" @click="tagJump(item)">{{ item }}</el-tag>
        </div>
        <div class="article">
            <p v-html="this.case.content">{{ this.case.content }}</p>
        </div>
        <el-divider></el-divider>
        <!-- <div class="comment-box">
            <div class="send-comment">
                <el-avatar class="user-header"></el-avatar>
                <el-input 
                class="send-input"
                type="textarea"
                :rows="4"
                resize="none"
                placeholder="发布一条评论"
                ></el-input>
                <el-button class="sendCommentButton" type="primary">发送评论</el-button>
            </div>
            <el-divider></el-divider>
            <div class="comment-list">
                <div class="comment-item">
                    <el-avatar class="user-header"></el-avatar>
                    <div class="user-name">123</div>
                    <div class="comment">我看完这个人在油管上的视频了，虽然他早就到最前线了，但是目前视频只是更新到璃月剧情的第一幕。这个人玩原神非常离谱，在去璃月之前，他记住了所有的蒙德的npc名字，在雷泽的任务里，远远看到npc就直接叫出了这是谁。有能力的可以去看看，总之非常离谱，且对于剧情和一些伏笔有恐怖的察觉能力，比方说听到摩拉克斯的时候立马联想到了摩拉，做香菱任务的时候，猜到了最后会去打个boss来收集食材。。。这类还有很多，看他玩游戏绝对是一种享受。</div>
                </div>
            </div>
        </div> -->
    </div>
</div>
</template>

<script>
import service from '@/api/axios'

export default {
    name: 'reader',
    data() {
        return {
            slug: this.$route.query['slug'],
            category: this.$route.query['category'],
            case: {
                title: '',
                keyWord: [],
                createDate: '',
                content: []
            }
        }
    },
    created() {
        const url = 'api/article/' + this.slug + '/'
        const params = {}
        service.get(url, params).then(res => {
            console.log(res);
            this.case.keyWord = res.tags
            this.case.title = res.title
            this.case.createDate = res.date_updated
            this.case.content = res.content
        }).catch(err => {
            console.log(err);
        })
    },
    methods: {
        goBack(){
            console.log('back')

            this.$router.go(-1)
        },
        tagJump(e){
            console.log(e);
            console.log(this.category);
            if(this.category == '输血医学'){
                this.$router.push({
                    path: '/page3',
                    query: {
                        tag: e,
                    }
                })
            }
            else if(this.category == '临床案例'){
                this.$router.push({
                    path: '/page2',
                    query: {
                        tag: e,
                    }
                })
            }
        }
    }
}
</script>

<style lang='scss'>
.reader {
    width: 1200px;
    margin: 0 auto;
    h1{
        font-size: 25px;
        margin-top: 10px;
    }
    .el-page-header {
        border-radius: 5px;
        padding: 5px;
        background-color: rgb(233, 236, 239);
    }
    .head {
        position: relative;
        margin-top: 30px;
        .date {
            position: absolute;
            right: 5px;
            top: 9px;
        }
    }
    .keyword {
        margin-top: 20px;
        background-color: rgb(212, 237, 218);
        padding: 5px;
        border-radius: 5px;
        .el-tag {
            font-size: 16px;
            margin-right: 10px;
            border: none;
            background-color: rgb(212, 237, 218);
            cursor: pointer;
            color: rgb(220, 53, 69);
            &:hover {
                color: rgb(124, 8, 20);
            }
        }
    }
    .article {
        padding: 20px;
        p {
            margin: 15px auto;
        }
    }
    .comment-box{
        width: 1100px;
        margin: 0 auto;
        .user-header{
            position: absolute;
            width: 45px;
            height: 45px;
        }
        .send-comment{
            height: 100px;
            position: relative;

            .send-input{
                position: absolute;
                width: 900px;
                margin-left: 80px;
            }
            .el-textarea__inner{
                background-color: #f4f5f7;
                &:hover{
                    background-color: white;
                }
            }
            .sendCommentButton{
                height: 96px;
                position: absolute;
                right: 0;
            }
        }
        .comment-list{
            width: 100%;
            height: auto;
            .comment-item{
                border-bottom: 1px solid #dcdfe6;
                .user-name{
                    margin-left: 80px;
                    font-size: 12px;
                    font-weight: bold;
                    line-height: 18px;
                    display: block;
                    word-wrap: break-word;
                    position: relative;
                    z-index: 3;
                }
                .comment{
                    margin-left: 80px;
                    margin-top: 10px;
                    padding-bottom: 40px;
                    font-size: 14px;
                    line-height: 20px;
                    text-shadow: none;
                    overflow: hidden;
                    word-wrap: break-word;
                    word-break: break-word;
                    
                }
            }
            
        }
    }
}
</style>