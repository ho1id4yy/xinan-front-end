<template>
	<view>
		<image @click="changeBG" class='background' :src='userInfo.backgroundImage' mode="aspectFill"></image>
		<view class='content'>
			<button class='head' open-type="chooseAvatar" @chooseavatar="changeAvatar">
				<image :src='userInfo.avatar' mode="aspectFit"></image>
			</button>
			<view class='name'>{{userInfo.username}}</view>
			<view class='number'>心安号：{{userInfo.id}}</view>
			<view class='signature'>{{userInfo.signature}}</view>
			<view class='bigblock'>
				<view class="top">
					<view class='num'>{{userInfo.wishCount||0}}</view>
					<view class='num'>{{userInfo.listProcess||0}}</view>
					<view class='num'>{{userInfo.friendCount||0}}</view>
				</view>
				<view class="buttom">
					<view class='num2'>我的愿望数</view>
					<view class='num2'>清单进度</view>
					<view class='num2'>我的好友</view>
				</view>
			</view>
		</view>
		<view class="blockContent">
			<view class='block' @click="goPage(item.url)" v-for="(item,index) in blockInfo" :key='index'>
				<image class='label' :src='item.label'></image>
				<view class='text'>{{item.content}}</view>
			</view>
		</view>
		<buttom-bar :buttombar="buttombar"></buttom-bar>
	</view>
</template>

<script>
	import {
		getUserInfo,
		updataUserInfo
	} from '../../util/userApi.js';
	import {
		updataImage
	} from '../../util/api';
	export default {
		data() {
			return {
				buttombar: {
					active: 3,
					imglist: [
						'/static/icon/first_white.png',
						'/static/icon/second_white.png',
						'/static/icon/third_white.png',
						'/static/icon/Group_black.png'
					]
				},
				userInfo: {},
				blockInfo: [{
						label: '../../static/icon/cake.png',
						content: '生日快乐',
						url: '',
					},
					{
						label: '../../static/icon/carbon_friendship.png',
						content: '好友列表',
						url: '/page_user/friendlist/friendlist'
					}, {
						label: '../../static/icon/clarity_store-line.png',
						content: '收藏商家',
						url: '/page_user/favoritebusiness/favoritebusiness'
					}, {
						label: '../../static/icon/Group.png',
						content: '个性设置',
						url: '/page_user/personalization/personalization'
					}
				]
			};
		},
		onLoad() {
			// 获取用户信息
			getUserInfo().then(res => {
				console.log("获取用户信息成功", res)
				this.userInfo = res.data;
				getApp().globalData.userInfo = res.data;
			}).catch(err => {
				console.log("获取用户信息失败", err)
			})
		},
		methods: {
			goPage(url) {
				if (url) {
					uni.navigateTo({
						url
					})
				}
			},
			changeBG() {
				uni.chooseImage({
					success: (res) => {
						const tempUrl = res.tempFilePaths[0];
						updataImage(tempUrl).then(res => {
							console.log("修改背景图片成功", res)
							this.$set(this.userInfo, 'backgroundImage', res)
							// 链式调用
							return updataUserInfo(this.userInfo) // 修改后上传用户信息
						}).then((res) => {
							// 修改后上传用户信息 ,这是updataUserInfo的then
							console.log("上传用户信息成功", res)
						}).catch(err => {
							console.log("修改背景图片失败", err)
						})
					},
					fail: (err) => {
						console.log("照片选择失败！");
					}
				})
			},
			changeAvatar(e) {
				console.log("图片临时路径", e.detail.avatarUrl)
				updataImage(e.detail.avatarUrl).then(url => {
					console.log("照片选择成功！", url);
					this.$set(this.userInfo, 'avatar', url)
					// 链式调用
					return updataUserInfo(this.userInfo) // 修改后上传用户信息
				}).then((res) => {
					// 修改后上传用户信息 ,这是updataUserInfo的then
					console.log("上传用户信息成功", res)
				}).catch(err => {
					console.log("上传用户信息失败！", err)
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.background {
		width: 100%;
		height: 400rpx;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}


	.content {
		$width: 600rpx;
		// 大小
		width: $width;
		// 位置
		position: relative;
		margin: 200rpx auto 0;
		z-index: 100;
		// 样式
		border: 3rpx solid white;
		border-radius: 40rpx;
		background-color: white;
		box-shadow: 0px 5px 5px #C5C5C5;
		// 子代
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		flex-wrap: nowrap;

		.head {
			$size: 200rpx;
			width: $size;
			height: $size;
			position: relative;

			box-sizing: border-box;
			margin: -$size/2 0 0 0;
			padding: 0;
			border-radius: 50%;
			border: 10rpx solid #fff;
			overflow: hidden;

			image {
				width: $size;
				height: $size;
			}
		}


		.name {
			margin-top: 20rpx;
			font-size: 130%;
			font-weight: 600;
		}


		.number {
			margin-top: 10rpx;
			font-size: 20rpx;
			color: #C5C5C5;
		}


		.signature {
			margin-top: 10rpx;
			font-size: 20rpx;
			text-align: center;
		}


		.bigblock {
			$height: 120rpx;
			$width: 80%;
			height: $height;
			width: $width;
			margin-top: 20rpx;

			.top {
				height: $height/2;
				display: flex;
				justify-content: space-around;

				.num {
					width: $width/3;
					text-align: center;
					font-size: 40rpx;
					font-weight: 600;
				}
			}

			.buttom {
				height: $height/2;
				display: flex;
				justify-content: space-around;

				.num2 {
					width: $width/3;
					text-align: center;
					font-size: 20rpx;
					color: #C5C5C5;
				}
			}
		}
	}

	.blockContent {
		width: 100%;

		margin-top: 30rpx;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		flex-wrap: nowrap;



		.block {
			$height: 110rpx;
			height: $height;
			width: 600rpx;
			position: relative;
			margin-bottom: 13rpx;
			border: 5rpx solid black;
			border-radius: 40rpx;
			box-sizing: border-box;
			padding: 0 20rpx;
			display: flex;
			align-items: center;

			&:last-child {
				margin-bottom: 15vh;
			}

			.label {
				$size: 50rpx;
				width: $size;
				height: $size;
				position: relative;
				margin-right: 20rpx;
			}


			.text {
				$textHeight: $height * 0.7;
				height: $textHeight ;
				line-height: $textHeight;
				border-left: 4rpx solid #C5C5C5;
				font-weight: bold;
				position: relative;
				padding-left: 20rpx;
			}
		}
	}
</style>