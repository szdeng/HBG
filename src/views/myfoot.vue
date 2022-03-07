<template>
	<div class='footer'>
		<span @click="drawer2 = true">相关链接</span>
		<el-divider direction="vertical"></el-divider>
		<span @click="drawer1 = true">联系我们</span>
		<br/>
		<span class="copyright">地址：江苏江阴市东盛西路78号&nbsp;&nbsp;&nbsp;&nbsp;备案号：苏ICP备14047883号-4<br/>Copyright ©2021 江苏力博医药生物技术股份有限公司 & 江苏中济万泰生物医药有限公司 All rights reserved</span>
		<el-drawer
			title="联系我们"
			:visible.sync="drawer1"
			:direction="direction"
			:size="130"
			:before-close="handleClose">
			<p class='info'>
				<i class="el-icon-phone"></i>电话：0510-81695399<br/>
				<i class="el-icon-message"></i>邮箱：18822299999@163.com<br/>
			</p>
		</el-drawer>
		<el-drawer
			title="相关链接"
			:visible.sync="drawer2"
			:direction="direction"
			:before-close="handleClose"
			:size="130">
			<div class="box1">
				<div class="link-box">
					<div class="link" v-for="(item, index) in link" :key="'link' + index">
						<el-image :src="item.image"></el-image>
						<a href="#" @click="toOutStation(item.url)">{{ item.label }}</a>
					</div>
				</div>
			</div>
		</el-drawer>
	</div>
    
</template>

<script>
export default {
	name: 'Footer',
	data () {
		return {
			drawer1: false,
			drawer2: false,
			direction: 'btt',
			link: [
				{
					label: 'isbt.com',
					url: 'https://www.isbtweb.org/',
					image: require('../../public/assets/isbt.jpg')
				},
				{
					label: 'aabb.com',
					url: 'https://www.aabb.org/',
					image: require('../../public/assets/aabb.png')
				},
			]
		}
	},
	methods: {
		handleClose (done) {
			done()
		},
		toOutStation(url){
			window.open(url)
		}
	}
}
</script>

<style lang="scss" scoped>
	.el-divider{
		background-color: rgb(84, 92, 100);
	}
    .footer{
        text-align: center;
        font-size: 14px;
        position: relative;
		.box1{
			margin: 0 auto;
			.link-box{
				margin: 0 auto;
				display: flex;
				justify-content: center;
				.link{
					line-height: 20px;
					margin: 0 20px;
					.el-image{
						height: 20px;
						width: 20px;
						vertical-align: middle;
					}
					a{
						font-size: 14px;
						color: #000;
						margin-left: 10px;
						cursor: pointer;
						text-decoration: none;
					}
				}
			}
		}

    }
    span {
        cursor: pointer;
    }
    .copyright{
		font-size: 12px;
    }
    .info{
		font-size: 12px;
		color: #72767b;
    }
</style>