<template>
	<view>
		<!--rectangle26部分是上面的黑色部分-->
		<view class="rectangle26">
			<view class="title">
				<image class='icon' src='../../static/icon/quill_serve.png' />服务
			</view>
			<view class="rectangle27">
				<view class="process">商家直联：</view>
				<image class='centericon' src="../../static/icon/Tech Life Communication.png"></image>
				<view>
					<image class='circle1' src='../../static/icon/Ellipse 69.png'></image>
					<image @click='tomerchant' class='circle2' src='../../static/icon/Vector.png'></image>
				</view>
			</view>
		</view>
		<scroll-view :style="{height: `${areaHeight}px`}" class="right" scroll-y @scroll="scroll">
			<view class="wrapper">
				<view class="wrap">
					<view class="view-top" :style="{height: `${gap}px`}"></view>
					<view :class="{item: true, active: index === current}" :key="index" v-for="(item, index) in list">

						<!-- 默认状态 -->
						<view class="default">
							<view class="point"></view>
							<text>{{ item.name }}</text>
						</view>

						<!-- 当前流程 -->
						<view class="current">
							<view class="cirl">
								<view class="point"></view>
							</view>
							<view class="box">
								<view class="flex-row">
									<text class="title">{{ item.name }}</text>
									<text class="desc">{{item.illustrate}}</text>
								</view>
								<view class="more" @click="todetail(index)"></view>
							</view>
						</view>
					</view>
					<view class="view-bottom" :style="{height: `${gap + 40}px`}"></view>
				</view>
			</view>
		</scroll-view>

		<buttom-bar :buttombar="buttombar"></buttom-bar>

	</view>
</template>

<script>
	import buttomBar from '@/compoents/buttomBar/buttomBar.vue'
	import {
		getUserProcess
	} from '../../util/severApi.js'
	// 导入方法加上{}
	export default {
		components: {
			buttomBar
		},
		data() {
			return {
				areaHeight: 0,
				current: 0,
				isRowFoucsed: [false, false, false],
				buttombar: {
					active: 1,
					imglist: [
						'/static/icon/first_white.png',
						'/static/icon/second_black.png',
						'/static/icon/third_white.png',
						'/static/icon/Group_white.png'
					]
				},
				// 流程页信息
				list: [],
			};
		},
		created() {
			// console.log(uni.getSystemInfoSync());
			const {
				screenHeight,
				statusBarHeight,
				safeArea,
				screenWidth
			} = uni.getSystemInfoSync()
			const height = screenHeight - statusBarHeight - 44 - (screenHeight - safeArea.bottom)
			const t = Math.floor(200 / 375 * screenWidth)
			const b = Math.floor(53 / 375 * screenWidth)
			// console.log(height, t, b);
			this.areaHeight = height - t - b;
		},
		onLoad() {
			// 获取用户服务流程
			getUserProcess().then(res => {
				console.log("获取用户服务流程成功", res)
				this.list = res.data
			}).catch(err => {
				console.log("获取用户服务流程失败", err)
			})
		},
		computed: {
			gap() {
				return this.areaHeight / 2 - 42
			}
		},
		methods: {
			scroll(e) {
				const top = e.detail.scrollTop
				const max = Math.floor(top / 42)
				if (max > this.list.length) return
				this.current = max
			},
			tomerchant() {
				uni.navigateTo({
					url: '/pages/merchant/merchant'
				})
			},
			todetail(processIndx) {
				uni.navigateTo({
					url: `/pages/detail/detail?processIndx=${processIndx}`
				})
			}
		},

	}
</script>

<style lang="scss" scoped>
	@keyframes rotate {
		0% {
			opacity: 0;
			transform: translate(50upx, 0) rotate(360deg);
		}

		100% {
			opacity: 1;
			transform: translate(0, 0) rotate(0);
		}
	}

	@keyframes opacityRight {
		0% {
			opacity: 0;
			transform: translate(50upx, 0);
		}

		100% {
			opacity: 1;
			transform: translate(0, 0);
		}
	}

	@keyframes opacityLeft {
		0% {
			opacity: 0;
			transform: translate(-50upx, 0);
		}

		100% {
			opacity: 1;
			transform: translate(0, 0);
		}
	}

	.wrapper {
		padding-left: 120rpx;

		.wrap {
			border-left: solid 2px #ccc;
		}

		.item {
			padding: 26rpx 0;

			&.active {
				padding: 20rpx 0;

				.default {
					display: none;
				}

				.current {
					display: flex;

					.box {
						.flex-row {
							.title {
								animation: opacityLeft 500ms both;
							}

							.desc {
								animation: opacityRight 500ms 100ms both;
							}
						}

						.more {
							animation: rotate 600ms 200ms both;
						}

					}
				}
			}

			.default {
				display: flex;
				align-items: center;
				position: relative;

				.point {
					width: 24rpx;
					height: 24rpx;
					background-color: #c5c5c5;
					border-radius: 50%;
					position: absolute;
					left: -15rpx;
				}

				text {
					color: #ccc;
					font-size: 24rpx;
					margin-left: 34rpx;
				}
			}

			.current {
				display: none;
				position: relative;
				align-items: center;
				padding: 0 40rpx 0 30rpx;

				.cirl {
					position: absolute;
					width: 30rpx;
					height: 90rpx;
					background-color: #fff;
					left: -18rpx;
					display: flex;
					align-items: center;
					justify-content: center;

					.point {
						flex-shrink: 0;
						width: 20rpx;
						height: 20rpx;
						background-color: #fff;
						border: solid 10rpx #343434;
						border-radius: 50%;
					}
				}

				.box {
					padding: 20rpx 20rpx 20rpx 20rpx;
					border-radius: 10rpx;
					flex-grow: 1;
					display: flex;
					justify-content: space-between;
					border: solid 1.5px #343434;
					align-items: center;
					overflow: hidden;

					.flex-row {
						display: flex;
						flex-direction: column;
						justify-content: space-between;

						.title {
							font-weight: bold;
						}

						.desc {
							color: #666;
							font-size: 20rpx;
							margin-top: 4rpx;
						}
					}

					.more {
						width: 70rpx;
						height: 70rpx;
						border-radius: 50%;
						background-color: #fff;
						box-shadow: 0 8rpx 8rpx rgba(#333, .35);
						position: relative;

						&:after {
							content: '';
							width: 20rpx;
							height: 20rpx;
							position: absolute;
							border-right: solid 2px #343434;
							border-top: solid 2px #343434;
							transform: rotate(45deg);
							left: 20upx;
							top: 20upx;
						}
					}
				}
			}
		}
	}

	.right {
		.column {
			height: 630rpx;
			width: 30rpx;
			display: inline;
			position: absolute;
		}

		;

		.alter {
			height: 20rpx;
			width: 20rpx;
			margin: 535rpx 0rpx 0rpx 5rpx;
			position: absolute;
		}

		;

		.row1 {
			background-position: 50% 0;
			opacity: 0.2;
			display: inline;

			font-size: 70%;
		}

		;

		.row3 {
			height: 55rpx;
			opacity: 0.2;
			font-size: 60%;
		}

		.row2 {
			margin: 0 0 10rpx 60rpx;
			border: 5rpx solid black;
			border-radius: 20rpx;
			margin-bottom: 20rpx;
			width: 520rpx;
			height: 70rpx;
			position: fixed;
			top: 600rpx;
			padding: 10rpx 0rpx 10rpx 20rpx;
			z-index: 2000;
			background-color: #FFFFFF;

			.font {
				font-weight: bold;
			}

			;

			.btn {
				width: 80rpx;
				height: 80rpx;
				position: relative;
				z-index: -1;
				float: right;
				margin-right: 20rpx;
			}

			;

			.btnright {
				width: 30rpx;
				height: 40rpx;
				position: absolute;
				margin-left: 450rpx;
				margin-top: 20rpx;
			}

			;

			.small {
				font-size: 18rpx;
			}
		}
	}

	.right2 {
		margin: 5rpx 0 0rpx 120rpx;
		height: 700rpx;
		overflow-y: auto;
		z-index: 20000;
		overflow: auto;

		.font {
			height: 30;
			font-weight: bold;
		}

		;

	}

	.rectangle26 {
		width: 750rpx;
		height: 400rpx;
		background-color: #343434;
		border-radius: 0rpx 0rpx 60rpx 60rpx;
		flex-shrink: 0;
		overflow: hidden;

		.rectangle27 {
			width: 580rpx;
			height: 280rpx;
			background-color: #FFFFFF;
			margin: 20rpx 10rpx 30rpx 80rpx;
			border-radius: 60rpx;
			display: inline-block;

			.process {
				margin: 30rpx 0rpx 0rpx 30rpx;
				font-size: 80%;
			}

			;

			.centericon {
				width: 260rpx;
				height: 190rpx;
				margin-left: 150rpx;
			}

			;

			.circle1 {
				width: 80rpx;
				height: 80rpx;
				z-index: 1;
				display: inline;
				position: absolute;
				margin: -70rpx 40rpx 0rpx 340rpx
			}

			;

			.circle2 {
				width: 50rpx;
				height: 40rpx;
				position: absolute;
				z-index: 100;
				display: inline;
				margin: -55rpx 40rpx 0rpx 360rpx
			}

			clear:both;
		}

		;

		.icon {
			width: 40rpx;
			height: 40rpx;
			background-color: #343434;
			float: left;
			display: inline-block;
			margin-top: 0rpx;
			margin-left: 0rpx;
			margin-right: 0rpx;
		}

		;

		.title {
			margin-top: 25rpx;
			margin-left: 80rpx;
			color: #FFFFFF;
			font-size: 25rpx;
			display: flex;
			align-items: center;

			image {
				margin-right: 10rpx;
			}
		}
	}

	.bottombar {
		width: 700rpx;
		bottom: 28rpx;
		left: 30rpx;
		border: 5rpx solid black;
		box-sizing: border-box;
		border-radius: 60rpx;
		height: 120rpx;
		background-color: #FFFFFF;
		float: left;
		position: fixed;

		.block {
			border: 5rpx solid black;
			border-radius: 50rpx;
			height: 70rpx;
			width: 140rpx;
			display: inline-block;
			position: absolute;
			margin: 15rpx 0rpx 0rpx 185rpx;
		}

		.label {
			height: 40rpx;
			width: 40rpx;
			display: inline-block;
			margin-right: 85rpx;
			margin-left: 40rpx;
			margin-top: 35rpx;
			float: right;
		}
	}
</style>