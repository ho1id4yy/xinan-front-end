<template>
	<view>
		<view class='top'>
			<image @click="changeground" class='background' src='../../static/icon/homepagebackground.png'></image>
			<view class='content'>
				<image @click="changehead" class='head' src='../../static/icon/Ellipse 30.png'></image>
				<view class='name'>安小心</view>
				<view class='number'>心安号：12345678</view>
				<view class='personal'>我的个性签名是这样一句话</view>
				<view class='bigblock'>
					<view class='num'>33</view>
					<view class='num'>36%</view>
					<view class='num'>78</view>
					<view class='num2'>我的愿望数</view>
					<view class='num2'>清单进度</view>
					<view class='num2'>我的好友</view>
				</view>
			</view>
		</view>
		<view class='block'>
			<image class='label' src='../../static/icon/cake.png'></image>
			<image class='line' src='../../static/icon/Line 13.png'></image>
			<view class='row'>生日快乐</view>
		</view>
		<view class='block' @click='tofriendlist'>
			<image class='label' src='../../static/icon/carbon_friendship.png'></image>
			<image class='line' src='../../static/icon/Line 13.png'></image>
			<view class='row'>好友列表</view>
		</view>
		<view class='block' @click="tofavoritemerchant">
			<image class='label' src='../../static/icon/clarity_store-line.png'></image>
			<image class='line' src='../../static/icon/Line 13.png'></image>
			<view class='row'>收藏商家</view>
		</view>
		<view class='block' @click='toset'>
			<image class='label' src='../../static/icon/Group.png'></image>
			<image class='line' src='../../static/icon/Line 13.png'></image>
			<view class='row'>个性设置</view>
		</view>

		<view v-if='showcover' class='grayblock'>
		</view>
		<view v-if='showcover' class='changeheadblock'>
			<image class='head' src='../../static/icon/Ellipse 30.png'></image>
			<image @click="cancel" class='close' src='../../static/icon/close.png'></image>
			<view class='btn'>
				用微信头像
			</view>
			<view class='btn'>
				从相册选择
			</view>
			<view class='not' @click='cancel'>
				取消
			</view>
		</view>
		<view v-if='showground' class='grayblock'>
		</view>
		<view v-if='showground' class='changegroundblock'>
			<image class='ground' src='../../static/icon/Component 103.png'></image>
			<image class='close' @click="cancel2" src='../../static/icon/close.png'></image>
			<view class='btn'>
				从相册选择
			</view>
			<view class='not' @click="cancel2">
				取消
			</view>
		</view>
		<buttom-bar :buttombar="buttombar"></buttom-bar>
	</view>
</template>

<script>
export default {
	data() {
		return {
			showcover: false,
			showground: false,
			buttombar: {
				active: 3,
				imglist: [
					'/static/icon/first_white.png',
					'/static/icon/second_white.png',
					'/static/icon/third_white.png',
					'/static/icon/Group_black.png'
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
		tolist() {
			uni.redirectTo({
				url: '/page_list/mainlist/mainlist'
			})
		},
		changehead() {
			this.showcover = true
		},
		changeground() {
			this.showground = true
		},
		tofriendlist() {
			uni.redirectTo({
				url: '/page_user/friendlist/friendlist'
			})
		},
		tofavoritemerchant() {
			uni.redirectTo({
				url: '/page_user/favoritebusiness/favoritebusiness'
			})
		},
		cancel() {
			this.showcover = false
		},
		cancel2() {
			this.showground = false
		},
		toset() {
			uni.reLaunch({
				url: '/page_user/personalization/personalization'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.top {
	height: 540rpx;
	width: 100%;

	.background {
		width: 100%;
		height: 400rpx;
	}

	;

	.content {
		width: 600rpx;
		height: 370rpx;
		margin-top: -270rpx;
		margin-left: 80rpx;
		border: 3rpx solid white;
		border-radius: 40rpx;
		background-color: white;
		position: absolute;
		z-index: 100;
		box-shadow: 0px 5px 5px #C5C5C5;

		.head {
			margin-top: -100rpx;
			margin-left: 190rpx;
			width: 200rpx;
			height: 200rpx;
			position: relative;
		}

		;

		.name {
			font-size: 130%;
			font-weight: 600;
			margin-left: 220rpx;
		}

		;

		.number {
			font-size: 20rpx;
			color: #C5C5C5;
			margin-left: 200rpx;
		}

		;

		.personal {
			font-size: 20rpx;
			margin-left: 170rpx;
			margin-bottom: 40rpx;
		}

		;

		.bigblock {
			height: 200rpx;
			width: 560rpx;

			.num {
				font-size: 40rpx;
				font-weight: 600;
				margin-right: 40rpx;
				display: inline;
				margin-left: 80rpx;
			}

			;

			.num2 {

				font-size: 20rpx;
				display: inline;
				margin: 20rpx 47rpx 0rpx 55rpx;
				color: #C5C5C5;
			}

			;
		}

	}

}

;

.block {
	border: 5rpx solid black;
	border-radius: 40rpx;
	height: 110rpx;
	width: 600rpx;
	position: relative;
	margin-left: 78rpx;
	margin-bottom: 13rpx;

	.label {
		margin: 30rpx 10rpx 0rpx 30rpx;
		width: 50rpx;
		position: relative;
		height: 50rpx;
	}

	;

	.line {
		width: 3rpx;
		position: relative;
		height: 70rpx;
	}

	;

	.row {
		display: inline;
		font-weight: bold;
		position: relative;
		float: right;
		margin-top: 40rpx;
		margin-right: 350rpx;
	}
}

.bottombar {
	width: 700rpx;
	margin: 0rpx 20rpx 20rpx 25rpx;
	border: 5rpx solid black;
	box-sizing: border-box;
	border-radius: 60rpx;
	height: 120rpx;
	z-index: 100;
	background-color: #FFFFFF;
	position: absolute;

	.block {
		border: 5rpx solid black;
		border-radius: 50rpx;
		height: 70rpx;
		width: 140rpx;
		display: inline-block;
		position: absolute;
		margin: 20rpx 70rpx 20rpx 515rpx;
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

;

.grayblock {
	position: absolute;
	z-index: 1000;
	background-color: rgba(128, 128, 128, 0.8);
	opacity: 0.8;
	height: 100%;
	width: 100%;
	margin-top: -141.5%;
}

;

.changeheadblock {
	height: 550;
	width: 450;
	position: absolute;
	border: 5 solid white;
	border-radius: 20rpx;
	z-index: 1005;
	margin-top: -900rpx;
	margin-left: 100rpx;
	background-color: rgba(256, 256, 256, 1);
	padding: 30rpx;

	.head {
		height: 200rpx;
		width: 200rpx;
		position: relative;
		z-index: 1007;
		margin: 50rpx 130rpx 0rpx 150rpx;
	}

	;

	.close {
		height: 30rpx;
		width: 30rpx;
		float: right;
	}

	;

	.btn {
		border: 5rpx solid black;
		border-radius: 20rpx;
		background-color: #343434;
		;
		color: #FFFFFF;
		font-size: 80%;
		padding: 10rpx;
		text-align: center;
		height: 40rpx;
		width: 180rpx;
		margin: 20rpx 130rpx 20rpx 150rpx;
	}

	;

	.not {
		border: 5rpx solid black;
		border-radius: 20rpx;
		background-color: white;
		font-size: 80%;
		padding: 10rpx;
		text-align: center;
		height: 40rpx;
		width: 180rpx;
		margin: 20rpx 130rpx 20rpx 150rpx;
	}

	;
	clear: both;
}

;

.changegroundblock {
	height: 550;
	width: 450;
	position: absolute;
	border: 5 solid white;
	border-radius: 20rpx;
	z-index: 1005;
	margin-top: -900rpx;
	margin-left: 90rpx;
	background-color: rgba(256, 256, 256, 1);
	padding: 30rpx;

	.ground {
		height: 300rpx;
		width: 420rpx;
		position: relative;
		z-index: 1007;
		margin: 50rpx 20rpx 0rpx 40rpx;
	}

	;

	.close {
		height: 30rpx;
		width: 30rpx;
		float: right;
	}

	;

	.btn {
		border: 5rpx solid black;
		border-radius: 20rpx;
		background-color: #343434;
		;
		color: #FFFFFF;
		font-size: 80%;
		padding: 10rpx;
		text-align: center;
		height: 40rpx;
		width: 180rpx;
		margin: 20rpx 130rpx 20rpx 160rpx;
	}

	;

	.not {
		border: 5rpx solid black;
		border-radius: 20rpx;
		background-color: white;
		font-size: 80%;
		padding: 10rpx;
		text-align: center;
		height: 40rpx;
		width: 180rpx;
		margin: 20rpx 130rpx 20rpx 160rpx;
	}

	;
	clear: both;
}

;
</style>