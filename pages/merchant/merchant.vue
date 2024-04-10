<template>
	<view>
		<view class='block'>
			<image class='icon' src='../../static/icon/second_black.png' />
			<view class="title">服务</view>
			<view class='line'>
				选择商家
				<image class='vector' src='../../static/icon/Vector 11.png'></image>
			</view>
			<view class='input'>
				<input class='text' type='text' placeholder="选择城市" />
				<image @click="choosecity" class='select' src='../../static/icon/Component 23.png'></image>
			</view>
			<view class='input'>
				<input class='text' type='text' placeholder="选择区/县" />
				<image class='select' src='../../static/icon/Component 23.png'></image>
			</view>
		</view>
		<view>
			<view class='tar1'>为您推荐</view>

			<view class='tar2'>收藏</view>
			<view class='tar2'>致电</view>
		</view>
		<view class='block1'>
			<view class='padding'>
				瑞星
			</view>
			<image class='icon1' src='../../static/icon/Ellipse 25.png'></image>
			<image class='surface1' src='../../static/icon/tel.png'></image>
			<image class='icon2' src='../../static/icon/Ellipse 25.png'></image>
			<image class='surface2' src='../../static/icon/star.png'></image>
			<image class='surface3' src='../../static/icon/starblack.png'></image>
		</view>
		<view class='block1'>
			<view class='padding'>
				瑞星
			</view>
			<image class='icon1' src='../../static/icon/Ellipse 25.png'></image>
			<image class='surface1' src='../../static/icon/tel.png'></image>
			<image class='icon2' src='../../static/icon/Ellipse 25.png'></image>
			<image class='surface2' src='../../static/icon/star.png'></image>
		</view>
		<view class='block1'>
			<view class='padding'>
				瑞星
			</view>
			<image class='icon1' src='../../static/icon/Ellipse 25.png'></image>
			<image class='surface1' src='../../static/icon/tel.png'></image>
			<image class='icon2' src='../../static/icon/Ellipse 25.png'></image>
			<image class='surface2' src='../../static/icon/star.png'></image>
		</view>
		<view class='block1'>
			<view class='padding'>
				瑞星
			</view>
			<image class='icon1' src='../../static/icon/Ellipse 25.png'></image>
			<image class='surface1' src='../../static/icon/tel.png'></image>
			<image class='icon2' src='../../static/icon/Ellipse 25.png'></image>
			<image class='surface2' src='../../static/icon/star.png'></image>
		</view>
		<buttom-bar :buttombar="buttombar"></buttom-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				buttombar: {
					active: 1,
					imglist: [
						'/static/icon/first_white.png',
						'/static/icon/second_black.png',
						'/static/icon/third_white.png',
						'/static/icon/Group_white.png'
					]
				},
			};
		},
		methods: {
			toserve() {
				uni.redirectTo({
					url: '/pages/serve/serve'
				})
			},
			tocircle() {
				uni.redirectTo({
					url: '/page_anxincircle/anxincircle/anxincircle'
				})
			},
			touser() {
				uni.redirectTo({
					url: '/page_user/homepage/homepage'
				})
			},
			tolist() {
				uni.redirectTo({
					url: '/page_list/mainlist/mainlist'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.block1 {
		.padding {
			padding: 20rpx 0rpx 20rpx 50rpx;
			font-weight: bold;
		}

		height:160rpx;
		box-sizing: border-box;
		border-radius: 40rpx;
		width:660rpx;
		margin:20rpx 40rpx 30rpx;
		clear:both;
		background-color: #F5F5F5;

		.icon1 {
			height: 80rpx;
			width: 80rpx;
			position: absolute;
			margin-left: 430rpx;
			z-index: 5;
		}

		;

		.surface1 {
			height: 40rpx;
			width: 40rpx;
			position: relative;
			z-index: 50;
			margin-left: 450rpx;
			margin-top: 10rpx;
		}

		;

		.icon2 {
			height: 80rpx;
			width: 80rpx;
			position: absolute;
			margin-left: 50rpx;
			z-index: 5;
		}

		;

		.surface2 {
			height: 40rpx;
			width: 40rpx;
			position: relative;
			z-index: 10;
			margin-left: 70rpx;
			display: inline-block;
			margin-top: 10rpx;
		}

		;

		.surface3 {
			height: 40rpx;
			width: 40rpx;
			z-index: 100;
			position: relative;
			margin-left: 558rpx;
			display: inline-block;
			margin-top: -40rpx;
		}
	}

	.tar1 {
		display: inline;
		margin-left: 50rpx;
		font-size: 80%;
		font-weight: bold;
	}

	;

	.tar2 {
		display: inline;
		float: right;
		margin-right: 100rpx;
		margin-left: -30rpx;
		font-size: 50%;
		opacity: 0.5;
	}

	.block {
		height: 240rpx;

		.add {
			height: 60rpx;
			width: 60rpx;
			display: inline;
			float: right;
			margin: 10rpx 55rpx 0 0;
		}

		.input {
			border: 5rpx solid black;
			border-radius: 20rpx;
			height: 60rpx;
			width: 300rpx;
			float: left;
			margin-left: 40rpx;
			font-size: 90%;
			display: inline;

			.text {
				padding: 8rpx 0rpx 8rpx 18rpx;
				opacity: 0.5;
				font-size: 80%;
			}
		}

		;

		.select {
			width: 30rpx;
			height: 20rpx;
			margin: -40rpx 20rpx 40rpx 240rpx;
			display: inline-block;
			float: left;
		}

		;

		.icon {
			width: 30rpx;
			height: 30rpx;
			background-color: #FFFFFF;
			float: left;
			display: inline-block;
			margin-top: 25rpx;
			margin-left: 60rpx;
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
			margin-left: 60rpx;
			margin-top: 10rpx;
			font-size: 150%;

			.vector {
				width: 400rpx;
				height: 50rpx;
				float: right;
			}
		}

		;
		clear: both;
	}

	;

	.bottombar {
		width: 700rpx;
		margin: 0rpx 20rpx 20rpx 20rpx;
		border: 5rpx solid black;
		box-sizing: border-box;
		border-radius: 60rpx;
		height: 120rpx;
		z-index: 100;
		background-color: #FFFFFF;
		position: absolute;
		z-index: 100;

		.block {
			border: 5rpx solid black;
			border-radius: 50rpx;
			height: 70rpx;
			width: 140rpx;
			display: inline-block;
			position: absolute;
			margin: 15rpx 0rpx 0rpx 185rpx;
		}

		.label {
			height: 40rpx;
			width: 40rpx;
			display: inline-block;
			margin-right: 85rpx;
			margin-left: 40rpx;
			margin-top: 35rpx;
			float: right;
		}
	}
</style>