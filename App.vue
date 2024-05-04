<template>
	<view>
	</view>
</template>
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			try {
				const token = uni.getStorageSync('token');
				const id = uni.getStorageSync('id');
				if (token && id) {
					console.log("已登录");
					this.globalData.token = token;
					this.globalData.id = id;
					console.log(token)
				} else {
					console.log("没有token，id需要登陆")
					uni.reLaunch({
						url: '/pages/login/login'
					});
				}
			} catch (e) {
				console.log("登录出错", e)
				uni.reLaunch({
					url: '/pages/login/login'
				});
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData: {
			// token
			token: '',
			// 用户id
			id: '',
			userInfo: {},
			BASE_URL: "http://120.24.61.209:8081",
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


	.Mainlist-content {
		checkbox {
			$size: 50rpx;
			width: $size;
			height: $size;

			@mixin box {
				border-radius: 50% !important;
				border: #000 solid 2rpx;
			}

			.wx-checkbox-input {
				@include box;
			}

			.wx-checkbox-input-checked {
				@include box;
			}

			.wx-checkbox-input-checked.wx-checkbox-input::before {
				color: #000 !important;
				font-size: 80rpx;
				transform: translate(-35%, -65%);
			}
		}
	}

	.socialItem {
		radio {
			.wx-radio-input {
				border: 2rpx solid #ddd;
			}

			.wx-radio-input-checked {
				border: 2rpx solid #ddd;
				background-color: #000 !important;
			}

			.wx-radio-input-checked.wx-radio-input::before {}
		}
	}
</style>