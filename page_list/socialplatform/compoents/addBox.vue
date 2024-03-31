<template>
	<view class="boxmarsk" data-self="marsk" @click="closeBox">
		<view class="addBox" data-self="box" @click="closeAppList">
			<view class="head">添加愿望</view>
			<view class="checkApp">
				<view class="addWish">
					<input type="text" v-model="appName" @input="whichAppItem" @focus="openAppList" />
					<text>输入平台</text>
				</view>
				<view :class="['appList',isShowApplist?'active1':'',showItem?'active2':'']">
					<view class="appItem" v-for="(item,idx) in appIcon" @click="checkApp(idx)">
						<image :src="item.img" mode="aspectFit"></image>
						<text>{{item.name}}</text>
					</view>
				</view>
			</view>
			<view class="addButtom">
				<view class="reject" @click="reject">取消添加</view>
				<view class="confirm" @click="confirm">添加愿望</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				showItem: false,
				isShowApplist: false,
				appName: "",
				appImg:'/static/picture/defalt.png',
				appIcon: [{
						name: 'QQ',
						img: '/static/picture/QQ.png',
					},
					{
						name: '微信',
						img: '/static/picture/wx.png',
					},
					{
						name: '小红书',
						img: '/static/picture/xhs.png',
					},
					{
						name: '微博',
						img: '/static/picture/blog.png',
					},
					{
						name: 'BiliBili',
						img: '/static/picture/bilibili.png',
					},
					{
						name: '默认',
						img: '/static/picture/defalt.png',
					}
				],
				standardApp: [{
						name: 'QQ',
						img: '/static/picture/QQ.png',
					},
					{
						name: '微信',
						img: '/static/picture/wx.png',
					},
					{
						name: '小红书',
						img: '/static/picture/xhs.png',
					},
					{
						name: '微博',
						img: '/static/picture/blog.png',
					},
					{
						name: 'BiliBili',
						img: '/static/picture/bilibili.png',
					},
					{
						name: '自定义',
						img: '/static/picture/defalt.png',
					}
				],
			}
		},
		computed: {
			isshowItem() {
				if (this.appName) {
					this.showItem = true
				} else {
					this.showItem = false
				}
			}
		},
		methods: {
			checkApp(idx) {
				this.appName = this.appIcon[idx].name
				this.isShowApplist = false;
				this.appImg=this.appIcon[idx].img
				this.isShowApplist = false;
				this.appIcon.splice(0)
				let app = this.standardApp.filter((item, idx) => {
					return item.name.includes(this.appName)
				})
				if (app.length) {
					this.appIcon.push(...app)
					this.appImg=app[0].img
				} else {
					this.appIcon.push(this.standardApp[5])
					this.appImg=this.standardApp[5].img
				}
			},
			closeAppList(e) {
				if (e.target.dataset.self == "box") {
					this.isShowApplist = false
					this.showItem = false
				}
			},
			openAppList() {
				if (this.appName) {
					this.isShowApplist = false;
				} else {
					this.isShowApplist = true;
					this.appIcon.splice(0)
					this.appIcon.push(...this.standardApp)
				}
			},
			whichAppItem() {
				if (this.appName) {
					this.isShowApplist = false;
					this.appIcon.splice(0)
					let app = this.standardApp.filter((item, idx) => {
						return item.name.includes(this.appName)
					})
					if (app.length) {
						this.appIcon.push(...app)
						this.appImg=app[0].img
					} else {
						this.appIcon.push(this.standardApp[5])
						this.appImg=this.standardApp[5].img
					}
				} else {
					this.isShowApplist = true;
					this.appIcon.splice(0)
					this.appIcon.push(...this.standardApp)
				}
			},
			closeBox(e) {
				if (e.target.dataset.self == 'marsk') {
					uni.$emit('closeAddBox')
				}
			},
			confirm() {
				if (this.appName) {
					uni.$emit('addItem', {
						name: this.appName,
						img: this.appImg,
						status: -1
					})
				} else {
					uni.showToast({
						title: '请填写愿望',
						icon: 'error',
						duration: 1500
					})
				}
			},
			reject() {
				uni.$emit('closeAddBox')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.boxmarsk {
		height: 100vh;
		width: 100%;
		background-color: #343434bd;
		position: fixed;
		top: 0px;
		left: 0px;
		z-index: 1000;



		.addBox {
			width: 471rpx;
			height: 460rpx;
			position: absolute;
			transform: translate(-50%, -50%);
			left: 50%;
			top: 50%;
			background-color: #ffffff;
			padding: 20rpx 30rpx;
			box-sizing: border-box;
			border-radius: 15rpx;

			.addButtom {
				$height: 60rpx;
				position: relative;
				left: 50%;
				transform: translateX(-50%);
				top:120rpx;
				margin-top: 20rpx;
				height: $height;
				width: 80%;
				display: flex;
				justify-content: space-around;
				align-items: center;


				&>view {
					color: #fff;
					background-color: #343434;
					border: 4rpx solid #343434;
					box-sizing: border-box;
					padding: 0px;
					height: $height;
					width: 45%;
					line-heihgt: $height;
					border-radius: 14rpx;
					text-align: center;
				}

				.accept {
					position: relative;
				}

				.reject {
					color: #000;
					background-color: #fff;
					border: 4rpx solid #343434;
				}
			}

			.head {
				height: 80rpx;
				font-weight: 900;
				text-align: center;
				font-size: 40rpx;
			}

			.checkApp {
				position: relative;
				margin-top: 25rpx;

				.addWish {
					$height: 80rpx;
					box-sizing: border-box;
					height: $height;
					border-radius: $height;
					border: 3rpx solid #000;
					line-height: $height;
					position: relative;

					input {
						height: $height;
						width: 85%;
						position: relative;
						left: 50%;
						transform: translateX(-50%)
					}

					text {
						$textheight: 35rpx;
						height: $textheight;
						line-height: $textheight;
						box-sizing: border-box;
						padding: 0rpx 10rpx;
						background-color: #fff;
						position: absolute;
						top: -$height/2;
						transform: translateY(50%);
						left: 1.5em;
					}
				}

				.appList {
					height: 0vh;
					overflow-y: auto;
					margin-top: 20rpx;
					width: 100%;
					position: absolute;
					z-index: 1000;
					padding: 0rpx 10rpx;
					background-color: #fff;
					box-sizing: border-box;
					border-radius: 20rpx;
					transition: all .2s;
					$imgHeight: 80rpx;

					&.active1 {
						height: 30vh;
					}

					&.active2 {
						height: $imgHeight+30rpx;
						overflow: hidden
					}

					.appItem {

						height: $imgHeight;
						border-radius: 20rpx;
						border: 4rpx solid #000;
						display: flex;
						align-items: center;
						padding: $imgHeight*0.1 20rpx;
						z-index: 10;
						background-color: #fff;
						margin-bottom: 20rpx;

						image {
							height: $imgHeight*0.8;
							width: $imgHeight*0.8;
						}

						text {
							margin-left: 30rpx;
							font-weight: 600;
						}
					}
				}
			}

		}
	}
</style>