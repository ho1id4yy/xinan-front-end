<template>
	<view>
		<view class="rectangle26">
			<image class='icon' src='../../static/icon/quill_list.png' />
			<view class="title">清单</view>
			<view class="rectangle27">
				<view class="process" @click="c">准备进度：</view>
				<view>
					<image class='circle1' src='../../static/icon/Ellipse 1.png'></image>
				</view>
				<view>
					<image class='circle2' src='../../static/icon/Ellipse 16.png'></image>
				</view>
				<view class='opacity'>
					36%
				</view>
			</view>
		</view>
		<view class="Mainlist-content">
			<checkbox-group name="">
				<view class="ListItem" v-for="(item, idx) in mainList">
					<text class="left" @click="goto(item.url)">
						{{ item.name }}
					</text>
					<label class="right">
						<checkbox :value="item.name" :checked="item.checked" />
					</label>
				</view>
				<view class="buttom"></view>
			</checkbox-group>
		</view>
		<buttom-bar :buttombar="buttombar"></buttom-bar>
	</view>
</template>

<script>
export default {
	data() {
		return {
			buttombar: {
				active: 0,
				imglist: [
					'/static/icon/first_black.png',
					'/static/icon/second_white.png',
					'/static/icon/third_white.png',
					'/static/icon/Group_white.png'
				]
			},
			mainList: [{
				name: "葬礼邀请名单",
				checked: false,
				url: '/page_list/invitelist/invitelist'
			},
			{
				name: "愿望清单",
				checked: false,
				url: '/page_list/wishlist/wishlist'
			},
			{
				name: "社交平台管理",
				checked: false,
				url: '/page_list/socialplatform/socialplatform'
			},
			{
				name: "密码柜管理",
				checked: false,
				url: '/page_list/password/password'
			},
			{
				name: "宠物管理",
				checked: false,
				url: '/page_list/pet/pet'
			},
			{
				name: "珍宝收藏馆",
				checked: false,
				url: '/page_list/treasure/treasure'
			},
			]
		};
	},
	methods: {
		goto(url) {
			uni.navigateTo({
				url: url
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.Mainlist-content {
	width: 100%;
	padding: 0rpx 5%;
	box-sizing: border-box;


	.ListItem {
		$itemHeight: 100rpx;
		height: $itemHeight;
		background-color: #fff;
		border-radius: 30rpx;
		border: 4rpx solid #000;
		margin: 10rpx 0rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0rpx 20rpx;

		.left {
			font-size: 45rpx;
			font-weight: 500;
			width: 80%;
			height: $itemHeight;
			line-height: $itemHeight;
		}

		.right {}
	}

	.buttom {
		height: 30vh;
		width: 100%;
	}
}

.rectangle26 {
	width: 750rpx;
	height: 400rpx;
	background-color: #343434;
	border: 1rpx solid black;
	border-radius: 0rpx 0rpx 60rpx 60rpx;
	display: inline-block;

	.rectangle27 {
		width: 580rpx;
		height: 280rpx;
		background-color: #FFFFFF;
		margin: 20rpx 10rpx 30rpx 80rpx;
		border-radius: 60rpx;
		display: inline-block;

		.process {
			margin: 30rpx 0rpx 0rpx 30rpx;
			font-size: 80%;
		}

		;

		.opacity {
			height: 180rpx;
			width: 180rpx;
			z-index: 100;
			display: inline;
			margin-right: 190rpx;
			margin-top: -140rpx;
			font-size: 180%;
			float: right;

		}

		;

		.circle1 {
			width: 180rpx;
			height: 180rpx;
			z-index: -1;
			display: inline;
			margin-left: 190rpx;
			margin-top: -50rpx;
		}

		;

		.circle2 {
			width: 180rpx;
			height: 180rpx;
			float: left;
			z-index: 50;
			display: inline;
			margin-left: 190rpx;
			margin-top: -50rpx;
		}
	}

	;

	.icon {
		width: 40rpx;
		height: 40rpx;
		background-color: #343434;
		float: left;
		display: inline-block;
		margin-top: 20rpx;
		margin-left: 80rpx;
		margin-right: 0rpx;
	}

	;

	.title {
		margin-top: 25rpx;
		margin-left: 130rpx;
		color: #FFFFFF;
		font-size: 25rpx;
	}
}

;
</style>