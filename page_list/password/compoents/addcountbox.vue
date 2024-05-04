<template>
	<view class="boxmarsk" data-self="marsk" @click="closeBox" @touchmove.stop.prevent="moveHandle">
		<view class="addcoundBox">
			<view class="msg">
				<view class="imgwrap" @click="showGetBox">
					<image src="/static/icon/emil.png" mode="aspectFit"></image>
					<view class="dotted" v-show="isShowDots"></view>
				</view>
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
			<view class="submmit" @click="submmit">添加密码</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showItem: false,
				isShowApplist: false,
				userCount: "",
				userPassword: "",
				appName: "",
				appImg: '/static/picture/defalt.png',
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
			isShowDots: {
				type: Boolean,
				default: false
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
			showGetBox() {
				uni.$emit('openGetBox')
			},
			closeBox(e) {
				if (e.target.dataset.self == 'marsk') {
					uni.$emit('closeAddbox')
				}
			},
			submmit() {
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
					uni.$emit('sendAddedAcount', {
						appName: this.appName,
						appIcon: this.appImg,
						userCount: this.userCount,
						userPassword: this.userPassword
					})
					uni.$emit('closeAddbox')
				}
			},
			moveHandle() {}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../gloabal.scss';
	.boxmarsk {
		height: 100vh;
		width: 100%;
		background-color: #343434bd;
		position: fixed;
		top: 0px;
		left: 0px;
		z-index: 1000;

		.addcoundBox {
			width: 471rpx;
			height: 656rpx;
			position: absolute;
			transform: translate(-50%, -50%);
			left: 50%;
			top: 50%;
			background-color: #ffffff;
			padding: 20rpx 30rpx;
			box-sizing: border-box;
			border-radius: 15rpx;


			.msg {
				$imgheight: 50rpx;
				height: $imgheight;
				width: 100%;
				display: flex;
				margin-bottom: 50rpx;

				.imgwrap {
					height: $imgheight;
					width: $imgheight;
					position: relative;


					image {
						height: $imgheight;
						width: $imgheight;
						position: absolute;
						top: 0px;
						left: 0px;
					}

					.dotted {
						$dotsize: 17rpx;
						height: $dotsize;
						width: $dotsize;
						background-color: #ff7c7c;
						border-radius: 50%;
						position: absolute;
						top: 0px;
						right: 0px;
						z-index: 1;
					}
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
					@include input;
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

			.submmit {
				$submmitheight: 70rpx;
				margin-top: 150rpx;
				height: $submmitheight;
				background-color: #343434;
				color: #fff;
				border-radius: 15rpx;
				line-height: $submmitheight ;
				text-align: center;
			}
		}
	}
</style>