<template>
	<view>
		<view class='block'>
			<image class='icon' src='../../static/icon/person.png' />
			<view class="title">个人</view>
			<view class='line'>
				个性设置
				<image class='vector' src='../../static/icon/Vector 11.png'></image>
			</view>
		</view>
		<button class='head' open-type="chooseAvatar" @chooseavatar="changeAvatar">
			<image :src='userInfo.avatar' mode="aspectFit"></image>
		</button>
		<view class="inputArea">
			<view class="inputBar">
				<text>昵称</text>
				<input type="nickname" v-model="userInfo.username" />
			</view>
			<view class="inputBar">
				<text>签名</text>
				<input type="text" v-model="userInfo.signature" />
			</view>
			<view class="inputBar">
				<text>手机</text>
				<input type="number" v-model="userInfo.phone" />
			</view>
			<view class="inputBar">
				<picker mode="selector" value="0" :range="['女','男','秘密']" @change="changeGender">
					<text>性别</text>
					<input type="text" :value="(userInfo.gender==0?'男':'女')" />
				</picker>
			</view>
			<view class="inputBar">
				<picker mode="date" @change="changeBrithday">
					<text>生日</text>
					<input type="text" :value="userInfo.birthday" />
				</picker>
			</view>
		</view>
		<button class='save' @click="submit">保存</button>
		<!-- <view class='tip'>性别、手机号及生日信息保存后无法重新修改，请谨慎填写。</view> -->
		<buttom-bar :buttombar="buttombar"></buttom-bar>
	</view>
</template>

<script>
	import {
		updataImage
	} from 'util/api.js';
	import {
		updataUserInfo,
		getUserInfo,
		addFriendCategory
	} from 'util/userApi.js'
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
				userInfo: {
					avatar: "", // 头像
					birthday: '2024-1-1', //生日
					gender: 0, // 性别
					phone: '', //电话
					signature: '', // 签名
					username: '' // 昵称
				},
			};
		},
		onLoad() {
			// 初始化信息
			getUserInfo().then(res => {
				console.log("用户信息", res.data)
				this.userInfo = res.data
			}).catch(err => {
				console.log(err)
			})
		},
		methods: {
			submit() { // 提交修改信息
				updataUserInfo(this.userInfo).then(res => {
					console.log("修改成功", res)
					uni.navigateTo({
						url: '/page_user/homepage/homepage'
					})
				}).catch(err => {
					console.log("修改失败", err)
				})
			},
			changeAvatar(e) {
				console.log("图片临时路径", e.detail.avatarUrl)
				updataImage(e.detail.avatarUrl).then(url => {
					console.log("照片选择成功！", url);
					this.$set(this.userInfo, 'avatar', url)
				}).catch(err => {
					console.log("照片选择失败！", err)
				})
			},
			changeBrithday(e) {
				// 更改生日
				this.$set(this.userInfo, 'birthday', e.detail.value)
			},
			changeGender(e) {
				// 更改性别
				this.$set(this.userInfo, 'gender', e.detail.value)
			},
		}
	}
</script>

<style lang="scss">
	@import '../../gloabal.scss';

	.tip {
		font-size: 20rpx;
		color: rgb(110, 110, 110);
		opacity: 0.3;
		margin-left: 120rpx;
		margin-bottom: 10rpx;
		margin-top: 10rpx;
	}

	.save {
		$height: 60rpx;
		$width: 50%;
		width: $width;
		height: $height;
		background-color: $bouttom-black;
		box-sizing: border-box;
		display: inline-block;
		position: relative;
		color: #FFFFFF;
		font-weight: 600;
		border: 2rpx solid #000;
		border-radius: 15rpx;
		line-height: $height;
		font-size: 24rpx;
		margin-top: 5rpx;
		left: 50%;
		transform: translateX(-50%);
	}

	.head {
		$size: 200rpx;
		color: transparent;
		width: $size;
		height: $size;
		padding: 0;
		position: relative;
		// left: 50%;
		// transform: translateX(-50%);

		image {
			width: $size;
			height: $size;
		}
	}

	.inputArea {
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 20rpx auto;

		.inputBar {
			@include input;
			width: 85%;
		}
	}


	.block {
		height: 118rpx;

		.add {
			height: 60rpx;
			width: 60rpx;
			display: inline;
			float: right;
			margin: 10rpx 55rpx 0 0;
		}

		;

		.input {
			border: 5rpx solid black;
			border-radius: 20rpx;
			height: 70rpx;
			width: 570rpx;
			float: left;
			margin-left: 40rpx;
			font-size: 90%;
			display: inline;

			.text {
				height: 70rpx;
				width: 400rpx;
				margin-left: 40rpx;
				font-size: 90%;
				float: left;
				display: inline;
			}
		}


		.icon {
			width: 40rpx;
			height: 40rpx;
			background-color: #FFFFFF;
			float: left;
			display: inline-block;
			margin-top: 20rpx;
			margin-left: 40rpx;
			margin-right: 0rpx;
			display: inline;
			float: left;
		}

		;

		.title {
			color: #343434;
			font-size: 30rpx;
			display: inline;
			margin-top: 20rpx;
			margin-left: 20rpx;
			float: left;
		}

		;

		.line {
			height: 80rpx;
			font-weight: bold;
			width: 667rpx;
			float: left;
			margin-left: 40rpx;
			margin-top: 10rpx;
			font-size: 150%;

			.vector {
				width: 380rpx;
				height: 50rpx;
				margin-left: 65rpx;
			}

			;
		}

		;
		clear: both;
	}

	;
</style>