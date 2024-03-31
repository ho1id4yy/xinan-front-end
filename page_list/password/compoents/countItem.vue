<template>
	<view class="countItem">
		<view class="wrap-left">
			<view class="image">
				<image :src="CountDetail.appIcon" mode="aspectFit"></image>
			</view>
			<text>{{CountDetail.appName}}</text>
		</view>
		<view class="wrap-right">
			<view class="password" @click="changeDetailBox">········</view>
			<image src="/static/icon/sharePassword.png" mode="aspectFit" @click="showSendBox"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: {
			CountDetail: {
				type: Object,
				default: {
					appName: "QQ",
					appIcon: "/static/picture/QQ.png",
					userCount: "",
					userPassword: ""
				}
			},
			idx: {
				type: Number,
				default: 0
			},
		},
		methods: {
			showSendBox() {
				uni.$emit('changeSendBox',this.$props.idx)
			},
			changeDetailBox(){
				uni.$emit('openDetailBox',this.$props.idx)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.countItem {
		$height: 120rpx;
		height: $height;
		width: 690rpx;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		border: 3rpx solid #000;
		border-radius: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0rpx 30rpx;
		box-sizing: border-box;
		margin-top: 20rpx;

		.wrap-left {
			height: $height * 0.6;
			width: 30%;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.image {
				height: $height * 0.6;
				width: $height * 0.6;
				border-radius: 22rpx;
				overflow: hidden;
				border: 1rpx solid #c5c5c5;

				image {
					height: $height * 0.6;
					width: $height * 0.6;
					border-radius: 22rpx;
				}
			}


			text {
				width: 50%;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				margin-left: 15rpx;
				font-size: 38rpx;
				font-weight: 600;
				line-height: $height * 0.6;
			}
		}

		.wrap-right {
			height: $height * 0.6;
			width: 30%;
			display: flex;
			align-items: center;
			justify-content: space-around;

			.password {
				font-size: 32rpx;
				font-weight: 600;
			}

			image {
				height: $height * 0.4;
				width: $height * 0.4;
			}
		}
	}
</style>