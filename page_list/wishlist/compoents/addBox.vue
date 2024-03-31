<template>
	<view class="boxmarsk" data-self="marsk" @click="closeBox" @touchmove.stop.prevent="moveHandle">
		<view class="addBox">
			<view class="head">添加愿望</view>
			<view class="addWish">
				<input type="text" v-model="value" />
				<text>输入愿望</text>
			</view>
			<view class="addButtom">
				<view class="reject" @click="reject">取消添加</view>
				<view class="confirm" @click="confirm">添加愿望</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				value: ""
			}
		},
		methods: {
			moveHandle(){},
			closeBox(e) {
				if (e.target.dataset.self == 'marsk') {
					uni.$emit('closeAddBox')
				}
			},
			confirm() {
				if (this.value) {
					uni.$emit('addWishItem', this.value)
				} else {
					uni.showToast({
						title: '请填写愿望',
						icon: 'error',
						duration: 1500
					})
				}
			},
			reject() {
				uni.$emit('closeAddBox')
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



		.addBox {
			width: 471rpx;
			height: 350rpx;
			position: absolute;
			transform: translate(-50%, -50%);
			left: 50%;
			top: 50%;
			background-color: #ffffff;
			padding: 20rpx 30rpx;
			box-sizing: border-box;
			border-radius: 15rpx;

			.addButtom {
				$height: 60rpx;
				position: relative;
				left: 50%;
				transform: translateX(-50%);
				margin-top: 40rpx;
				height: $height;
				width: 80%;
				display: flex;
				justify-content: space-around;
				align-items: center;


				&>view {
					color: #fff;
					background-color: #343434;
					border: 4rpx solid #343434;
					box-sizing: border-box;
					padding: 0px;
					height: $height;
					width: 45%;
					line-heihgt: $height;
					border-radius: 14rpx;
					text-align: center;
				}

				.accept {
					position: relative;
				}


				.reject {
					color: #000;
					background-color: #fff;
					border: 4rpx solid #343434;
				}
			}

			.head {
				height: 80rpx;
				font-weight: 900;
				text-align: center;
				font-size: 40rpx;
			}

			.addWish {
				$height: 80rpx;
				box-sizing: border-box;
				height: $height;
				border-radius: $height;
				border: 3rpx solid #000;
				line-height: $height;
				margin-top: 25rpx;
				position: relative;

				input {
					height: $height;
					width: 85%;
					position: relative;
					left: 50%;
					transform: translateX(-50%)
				}

				text {
					$textheight: 35rpx;
					height: $textheight;
					line-height: $textheight;
					box-sizing: border-box;
					padding: 0rpx 10rpx;
					background-color: #fff;
					position: absolute;
					top: -$height/2;
					transform: translateY(50%);
					left: 1.5em;
				}
			}
		}
	}
</style>