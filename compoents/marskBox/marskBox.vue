<template>
	<view class="boxmarsk" data-self="marsk"  @touchmove.stop.prevent="moveHandle">
		<view class="addBox">
			<view class="closeBox">
				<image @click="closeBoxByicon" class="image" mode="aspectFit" src="/static/icon/close.png">
				</image>
			</view>
			<slot>

			</slot>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: ""
			}
		},
		computed: {

		},
		methods: {
			closeBoxByicon() {
				this.$emit('close')
			},
			moveHandle() {}
		},
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

		.addBox {
			width: 471rpx;
			position: absolute;
			transform: translate(-50%, -50%);
			left: 50%;
			top: 50%;
			background-color: #ffffff;
			padding: 20rpx 30rpx;
			box-sizing: border-box;
			border-radius: 15rpx;

			.closeBox {
				$size: 25rpx;
				height: $size;
				width: 100%;
				position: relative;

				.image {
					height: $size;
					width: $size;
					float: right;
				}
			}
		}
	}
</style>