<template>
	<view>
		<!-- log -->
		<image class="log" src="../../static/icon/logo.png" mode="aspectFill"></image>
		<!-- weixin登录 -->
		<button @tap="wxLogin" class="wxLogin">微信登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			wxLogin() { // 微信登录
				uni.login({
					provider: 'weixin', // 指定为登录微信小程序
					onlyAuthorize: true, // 微信登录仅请求授权认证
					success: (res) => {
						//向后端服务器发送请求
						console.log("微信登录返回的临时票据", res)
						this.$Request({
							url: '/user/user/login',
							method: "POST",
							data: {
								code: res.code, //用户授权临时票据(code)
							}
						}).then(res => {
							console.log('登录返回的信息', res)
							// 全局存下 id ，token 
							getApp().globalData.id = res.data.id
							getApp().globalData.token = res.data.token
							// 本地存下id ，token
							uni.setStorage({ // 存下id
								key: "id",
								data: res.data.id,
								fail: (err) => {
									console.log('存下id失败', err);
								}
							})
							uni.setStorage({ // 存下token
								key: "token",
								data: res.data.token,
								success: () => {
									uni.setStorageSync("id", res.data.id) // 存下id
									uni.navigateTo({
										url: '/pages/serve/serve' // 跳转到首页
									})
								},
								fail: (err) => {
									console.log('登录失败', err);
								}
							})

						}).catch(err => {
							console.log("登陆失败", err)
						})
					}
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import '../../gloabal.scss';

	.log {
		$size: 200rpx;
		height: $size;
		width: $size;
		position: relative;
		margin-top: 25%;
		left: 50%;
		transform: translateX(-50%);
	}

	.wxLogin {
		$height: 100rpx;
		height: $height;
		line-height: $height;
		border-radius: $height;
		width: 85%;
		background-color: $bouttom-black;
		color: #fff;
		margin-top: 25%;
		transform: translateY(-50%);
	}
</style>