<template>
	<view class="petItem" >
		<view class="petItemHead" @click="openEditBox">
			<image :src="petDetail.img" alt="" srcset="" mode="aspectFit" />
		</view>
		<view class="petItemContent">
			{{petDetail.name}}
		</view>
		<view class="send">
			<image src="/static/icon/sharePassword.png" mode="aspectFit" @click="send"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			openEditBox() {
				uni.$emit('openDetailBox', this.$props.idx)
			},
			send(){
				uni.$emit('openSendBox',this.$props.idx)
			}
		},
		props: {
			petDetail: {
				type: Object,
				default: {
					img: '/static/picture/dog.png',
					name: "大黄"
				}
			},
			idx: {
				type: Number,
				default: 0
			}
		}
	}
</script>

<style lang="scss" scoped>
	$itemheight: 380rpx;

	.petItem {
		background-color: #fff;
		box-sizing: border-box;
		padding: 0px;
		height: $itemheight;
		width: 315rpx;
		border-radius: 20rpx;
		border: 4rpx solid #000;
		overflow: hidden;
		margin-left: 40rpx;
		margin-bottom: 40rpx;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-content: center;
		position:relative;

		$headheight: $itemheight*0.7;
		$bottomheight: $itemheight*0.2;

		.petItemHead {
			padding: 0px;
			height: $headheight;
			padding: 20rpx 0rpx;

			image {
				position: relative;
				left: 50%;
				transform: translateX(-50%);
				width: 300rpx;
				height: $headheight
			}
		}

		.petItemContent {
			text-align: center;
			line-height: $bottomheight;
			height: $bottomheight;
			font-weight: 600;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.send {
			$sendHeight: 60rpx;
			position: absolute;
			bottom: 0rpx;
			left:0rpx;
			height: $sendHeight;
			width:100%;
			display: flex;
			justify-content: flex-end;
			
			image {
				height: $sendHeight;
				width: $sendHeight;
			}
		}
	}
</style>