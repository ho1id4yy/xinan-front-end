<template>
	<view class="treasureItem" @click="openEditBox">
		<view class="treasureItemHead">
			<image :src="treasureItemDetail.img" alt="" srcset="" mode="aspectFit" />
		</view>
		<view class="treasureItemContent">
			{{treasureItemDetail.text}}
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
				uni.$emit('openEditBox', this.$props.idx)
			},
		},
		props: {
			treasureItemDetail: {
				type: Object,
				default: {
					img: '/static/picture/tuzi.png',
					text: "兔子玩偶"
				}
			},
			idx:{
				type: Number,
				default: 0
			}
		}
	}
</script>

<style lang="scss" scoped>
	$itemheight: 350rpx;

	.treasureItem {
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

		$headheight: $itemheight*0.8;
		$bottomheight: $itemheight*0.2;

		.treasureItemHead {
			padding: 0px;
			height: $headheight;

			image {
				position: relative;
				left: 50%;
				transform: translateX(-50%);
				width: 300rpx;
				height: $headheight
			}
		}

		.treasureItemContent {
			text-align: center;
			line-height: $bottomheight;
			height: $bottomheight;
			font-weight: 600;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
</style>