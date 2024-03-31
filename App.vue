<template>
	<view>
	</view>
</template>
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	.wishBody {
		checkbox {
			width: 40rpx;
			height: 40rpx;

			@mixin box {
				border-radius: 50% !important;
				box-shadow: 0rpx 7rpx 5rpx 3rpx #d1d1d1 !important;
			}

			.wx-checkbox-input {
				@include box;
			}

			.wx-checkbox-input-checked {
				@include box;
				background-color: #000;
				border: #000 solid 2rpx;
			}

			.wx-checkbox-input-checked.wx-checkbox-input::before {
				color: #fff !important;
				font-weight: 900;
			}
		}
	}

	.socialItem {
		radio {
			.wx-radio-input {
				border:2rpx solid #ddd ;
			}

			.wx-radio-input-checked {
				border:2rpx solid #ddd ;
				background-color: #000 !important;
			}

			.wx-radio-input-checked.wx-radio-input::before {}
		}
	}
</style>