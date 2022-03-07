<template>
	<div>
		<div class="video-box">
			<h1>{{ title }}</h1>
			<div class="info">
				<el-tag
					v-for="word in keyWord"
					:key="word"
					type="danger"
					@click="search($event)"
					>{{ word }}</el-tag
					>
				<i>{{ createDate }}</i>
			</div>
			<video-player
				class="video-player vjs-custom-skin"
				ref="videoPlayer"
				:playsinline="true"
				style="object-fit: fill"
				:options="playerOptions"
				:x5-video-player-fullscreen="true"
				@pause="onPlayerPause($event)"
				@play="onPlayerPlay($event)"
			>
			</video-player>
			<el-divider></el-divider>
			<div class="introduction">
				<span>
				{{ content }}
				</span>
			</div>
		</div>
	</div>
</template>


<script>
let Base64 = require('js-base64').Base64
import service from '@/api/axios'

export default {
	name: "videoplay",
	data() {
		return {
			// 视频播放
			videoid: this.$route.params["id"],
			title: "",
			keyWord: [],
			createDate: "",
			content: '',
			playerOptions: {
				playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
				autoplay: false, //如果true,浏览器准备好时开始回放。
				muted: true, // 默认情况下将会消除任何音频。
				loop: false, // 视频一结束就重新开始。
				preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
				language: "zh-CN",
				aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
				fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
				sources: [],
				// sources: [
				//   {
				//     type: "video/mp4",
				//     src: require("../video/video1.mp4"), //url地址
				//   },
				// ],
				// poster: require("../video/video1.png") + "?vframe/jpg/offset/1", //你的封面地址,视频地址+'?vframe/jpg/offset/1'可截取第一帧
				poster: '',
				// width: document.documentElement.clientWidth,
				notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
				controlBar: {
					timeDivider: true, //当前时间和持续时间的分隔符
					durationDisplay: true, //显示持续时间
					remainingTimeDisplay: false, //是否显示剩余时间功能
					fullscreenToggle: true, //全屏按钮
					progressControl: true,
				},
			},
		};
	},
	created() {
		const url = '/api/video/' + this.$route.params["id"] + '.mp4/'
		const params = {}
		service.get(url, params).then(res => {
			console.log(res);
			this.title = res.name
			this.keyWord = res.tags
			this.playerOptions.sources.push({
				type: "video/mp4",
				src: Base64.decode(res.videofile)
			})
			// this.playerOptions.poster = Base64.decode(res.videofile) + "?vframe/jpg/offset/1"
			this.createDate = res.created_on
			this.content = res.content
		}).catch(err => {
			console.log(err);
		})
	},
	methods: {
		onPlayerPause(e) {
			this.$refs.videoPlayer.player.pause();
		},
		onPlayerPlay(e) {
			this.$refs.videoPlayer.player.play();
			console.log(e);
		},
		search(e) {
			console.log(e.target.innerText);
			this.$router.push({
				path: '/page1/',
				query: {
					tag: e.target.innerText
				}
			})
		},
	},
}
</script>

<style lang='scss' scoped>
.video-box {
	width: 1200px;
	margin: 20px auto;
	h1 {
		margin: 30px 0;
		font-size: 25px;
	}
	.info {
		height: 40px;
		.el-tag {
			margin: 0 4px 10px;
			cursor: pointer;
			}
		i {
			line-height: 40px;
			float: right;
			}
	}
	.introduction {
		font-size: 12px;
	}
}
</style>