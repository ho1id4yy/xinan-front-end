<template>
	<view class="boxmarsk" data-self="marsk" @click="closeBox" @touchmove.stop.prevent="moveHandle">
		<view class="sendCoundbox">
			<view class="head">
				<image :src="msgSend.senderImg" mode="aspectFill" />
				<text>{{msgSend.senderName}}</text>
			</view>
			<view class="content">向您送来了宠物,是否接收?</view>
			<view class="detail">
				<view class="name">名字：{{msgSend.petDetail.name}}</view>
				<image :src="msgSend.petDetail.img" mode="aspectFit"></image>
			</view>
			<view class="isAccepted">
				<view class="reject" @click="reject">拒收</view>
				<view class="accept" @click="accept">添加至宠物柜</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: {
			msgSend: {
				type: Object,
				default: {
					senderImg: "../../../static/picture/headImg.png",
					senderName: '心小安',
					petDetail: {
						name: "大s黄",
						img: '/static/picture/dog.png'
					}
				}
			}
		},
		methods: {
			moveHandle() {},
			reject() {
				uni.$emit('rejectPet')
			},
			accept() {
				uni.$emit('acceptPet')
			},
			closeBox(e) {
				if (e.target.dataset.self == 'marsk') {
					uni.$emit('changeGetBox')
				}
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
			height: 650rpx;
			position: absolute;
			transform: translate(-50%, -50%);
			left: 50%;
			top: 50%;
			background-color: #ffffff;
			padding: 20rpx 30rpx;
			box-sizing: border-box;
			border-radius: 15rpx;

			.head {
				$headHeight: 100rpx;
				height: $headHeight;
				display: flex;
				align-items: center;

				image {
					box-sizing: border-box;
					height: $headHeight;
					width: $headHeight;
					border-radius: 50%;
					border: 10rpx solid #fff;
					box-shadow: 0rpx 6rpx 10rpx 2rpx #34343464;
				}

				text {
					line-height: $headHeight;
					margin-left: 20rpx;
					font-size: 38rpx;
					font-weight: 600;
				}

			}

			.content {
				height: 60rpx;
				word-break: break-all;
				margin-top: 10rpx;
				font-weight: 600;
			}

			.detail {
				padding: 10rpx;
				border-radius: 15rpx;
				font-weight: 600;
				border: 2rpx dashed #3d3d3d;
				display: flex;
				flex-direction: column;
				align-content: center;

				image {
					border-radius: 15rpx;
					height: 287rpx;
					width: 300rpx;
				}

				.name {
					margin-bottom: 20rpx;
				}
			}

			.isAccepted {
				$height: 60rpx;
				font-size: 30rpx;
				white-space: nowrap;
				margin-top: 10rpx;
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
		}
	}
</style>