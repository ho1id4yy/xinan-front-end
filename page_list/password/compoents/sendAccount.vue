<template>
	<view class="boxmarsk" data-self="marsk" @click="closeBox" @touchmove.stop.prevent="moveHandle">
		<view class="sendCoundbox">
			<view class="content">是否将此密码发送给：</view>
			<view class="head">
				<image :src="msgSend.whoGet.img" mode="aspectFill" />
				<text>{{msgSend.whoGet.name}}</text>
			</view>
			<view class="detail">
				<view class="plat">平台：{{msgSend.CountDetail.appName}}</view>
				<view class="account">账户：{{msgSend.CountDetail.userCount}}</view>
				<view class="passWord">密码：{{msgSend.CountDetail.userPassword}}</view>
			</view>
			<view class="isAccepted">
				<view class="reject" @click="reject">取消</view>
				<view class="accept" @click="send">发送</view>
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
					whoGet:{
						id:"123456789",
						img: "../../../static/picture/headImg.png",
						name:"心小安得到",
					},
					whoSend:{
						id:"987654321",
						img: "../../../static/picture/headImg.png",
						name: '心小安',
					},
					CountDetail: {
						appName: "QQ",
						appIcon: "/static/picture/QQ.png",
						userCount: "123456",
						userPassword: "123456789"
					}
				}
			}
		},
		methods: {
			moveHandle() {},
			reject(){
				uni.$emit('changeSendBox')
			},
			send(){
				uni.$emit('sendAccount')
			},
			closeBox(e){
				if(e.target.dataset.self=='marsk'){
					uni.$emit('changeSendBox')
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
			height: 471rpx;
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
				margin-bottom: 20rpx;

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