<template>
	<view class="boxmarsk" data-self="marsk" @click="closeBox" @touchmove.stop.prevent="moveHandle">
		<view class="sendCoundbox">
			<view class="head">修改账户信息</view>
			<view class="detail">
				<view class="plat">平台：{{CountDetail.appName}}</view>
				<view class="account">账户：{{CountDetail.userCount}}</view>
				<view class="passWord">密码：{{CountDetail.userPassword}}</view>
			</view>
			<view class="userAcount">
				<input type="text" v-model="userCount" />
				<text>账号</text>
			</view>
			<view class="userPassword">
				<input type="text" v-model="userPassword" />
				<text>密码</text>
			</view>
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
			<view class="isAccepted">
				<view class="reject" @click="reject">取消</view>
				<view class="accept" @click="confirm">确定修改</view>
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
				appImg: "/static/picture/QQ.png",
				userCount: "",
				userPassword: "",
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
		props: {
			CountDetail: {
				type: Object,
				default: {
					userCount: "123456",
					userPassword: "123456789",
					appName: "",
					appIcon: '/static/picture/defalt.png',
				}
			},
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
				this.appImg = this.appIcon[idx].img
				this.isShowApplist = false;
				this.appIcon.splice(0)
				let app = this.standardApp.filter((item, idx) => {
					return item.name.includes(this.appName)
				})
				if (app.length) {
					this.appIcon.push(...app)
					this.appImg = app[0].img
				} else {
					this.appIcon.push(this.standardApp[5])
					this.appImg = this.standardApp[5].img
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
						this.appImg = app[0].img
					} else {
						this.appIcon.push(this.standardApp[5])
						this.appImg = this.standardApp[5].img
					}
				} else {
					this.isShowApplist = true;
					this.appIcon.splice(0)
					this.appIcon.push(...this.standardApp)
				}
			},
			moveHandle() {},
			closeBox(e) {
				if (e.target.dataset.self == 'marsk') {
					uni.$emit('closeDetailBox')
				}
			},

			confirm() {
				if (!this.appName) {
					uni.showToast({
						title: '请选择平台',
						icon: 'error',
						duration: 1500
					})
				} else if (!this.userCount) {
					uni.showToast({
						title: '请填写账号',
						icon: 'error',
						duration: 1500
					})
				} else if (!this.userPassword) {
					uni.showToast({
						title: '请填写密码',
						icon: 'error',
						duration: 1500
					})
				} else {
					uni.$emit('editAccount', {
						appName: this.appName,
						appIcon: this.appImg,
						userCount: this.userCount,
						userPassword: this.userPassword
					})
				}
			},
			reject() {
				uni.$emit('closeDetailBox')
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

		.sendCoundbox {
			width: 473rpx;
			height: 750rpx;
			position: absolute;
			transform: translate(-50%, -50%);
			left: 50%;
			top: 50%;
			background-color: #ffffff;
			padding: 20rpx 30rpx;
			box-sizing: border-box;
			border-radius: 15rpx;

			.head {
				height: 50rpx;
				word-break: break-all;
				margin-top: 10rpx;
				font-weight: 600;
			}

			.detail {
				padding: 10rpx;
				border-radius: 15rpx;
				font-weight: 600;
				border: 2rpx dashed #3d3d3d;
			}

			.isAccepted {
				$height: 60rpx;
				font-size: 30rpx;
				white-space: nowrap;
				margin-top: 140rpx;
				height: $height;
				display: flex;
				justify-content: space-around;
				align-items: center;
				line-heihgt: $height;

				&>view {
					box-sizing: border-box;
					height: $height;
					width: 200rpx;
					border-radius: 14rpx;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.accept {
					color: #fff;
					background-color: #343434;
					border: 4rpx solid #343434;
				}

				.reject {
					color: #000;
					background-color: #fff;
					border: 4rpx solid #343434;
				}
			}

			@mixin input {
				$height: 80rpx;
				box-sizing: border-box;
				height: $height;
				border-radius: $height;
				border: 3rpx solid #000;
				line-height: $height;
				margin-top: 25rpx;
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



			.userAcount {
				@include input;
			}

			.userPassword {
				@include input;
			}

			.checkApp {
				position: relative;
				margin-top: 25rpx;
				z-index: 1100;

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