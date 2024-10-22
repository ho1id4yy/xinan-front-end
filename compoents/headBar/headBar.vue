<template>
	<view>
		<view class="headBar-wrap">
			<view class="headBar">
				<view class="headBar-head" @click="back">
					<image class="image" src="../../static/icon/first_black.png" alt="" srcset="" />
					<text class="text">清单</text>
				</view>
				<view class="headBar-body">
					<text class="text">{{content}}</text>
					<image class="image" src="../../static/icon/Vector 11.png" alt="" mode="aspectFit" srcset="" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			back() {
				uni.navigateBack()
			}
		},
		props: {
			content: {
				type: String,
				default: "葬礼邀请名单"
			}
		}
	}
</script>

<style lang="scss" scoped>
	.headBar-wrap {
		background-color: #ffffff;
		height: 180rpx;
		width: 100%;
		position: fixed;
		top: 0rpx;
		left: 0rpx;
		z-index: 999;

		.headBar {
			position: relative;
			height: 100%;
			width: 100%;

			.headBar-head {
				height: 60rpx;
				display: flex;
				align-items: center;

				.image {
					margin-left: 40rpx;
					height: 40rpx;
					width: 40rpx;
				}

				.text {
					margin-left: 20rpx;
				}
			}

			.headBar-body {
				position: absolute;
				height: 120rpx;
				width: 100%;
				display: flex;
				align-items: center;

				.text {
					margin-left: 40rpx;
					font-size: 50rpx;
					white-space: nowrap;
					font-weight: 900;
				}

				.image {
					height: 120rpx;
					margin-right: 20rpx;
				}
			}

		}


	}
</style>