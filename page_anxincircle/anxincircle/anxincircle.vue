<template>
	<view>
		<view class="circleBody">
			<view class="head">
				<image class="icon1" src="/static/icon/xinancirlcle.png" mode="aspectFit"></image>
				<text>心安圈</text>
				<image class="icon2" src="/static/icon/xianAdd.png" mode="aspectFit" @click="showAddBox"></image>
			</view>
			<view class="circleContent-wrap">
				<view class="circleContent">
					<view class="circleItem" v-for="(item,idx) in circleList">
						<view class="itemContent">
							<view class="top">
								<view class="name">时光便利贴</view>
								<view class="title">{{item.title}}</view>
								<view class="headImg">
									<image :src="item.headImg" mode="aspectFill"></image>
								</view>
							</view>
							<view class="line"></view>
							<view class="dots1"></view>
							<view class="dots2"></view>
							<view class="content">
								<view class="title">PHOTOMATIC</view>
								<view class="photo">
									<image :src="itemImg" mode="aspectFill" v-for="(itemImg ,idx) in item.contentList">
									</image>
								</view>
								<view class="buttom">
									<view class="times"> <text>{{item.time}}</text> </view>
									<view class="msgIcon">
										<image src="/static/icon/msg.png" mode="aspectFit"></image>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<buttom-bar :buttombar="buttombar"></buttom-bar>
		</view>
		<addBox v-if="isShowAddBox"></addBox>
	</view>
</template>

<script>
	import addBox from './compoents/addBox.vue';
	export default {
		components: {
			addBox
		},
		data() {
			return {
				buttombar: {
					active: 2,
					imglist: [
						'/static/icon/first_white.png',
						'/static/icon/second_white.png',
						'/static/icon/third_black.png',
						'/static/icon/Group_white.png'
					]
				},
				isShowAddBox: false,
				circleList: [{
						title: "独自旅行1",
						headImg: "/static/picture/headImg.png",
						time: "2024-4-2",
						contentList: [
							"../../static/icon/homepagebackground.png",
							"../../static/icon/homepagebackground.png",
							"../../static/icon/homepagebackground.png",
							"../../static/icon/homepagebackground.png",
						]
					},
					{
						title: "独自旅行2",
						headImg: "/static/picture/headImg.png",
						time: "2024-4-4",
						contentList: [
							"../../static/icon/homepagebackground.png",
							"../../static/icon/homepagebackground.png",
							"../../static/icon/homepagebackground.png",
							"../../static/icon/homepagebackground.png",
						]
					},
					{
						title: "独自旅行3",
						headImg: "/static/picture/headImg.png",
						time: "2024-4-4",
						contentList: [
							"../../static/icon/homepagebackground.png",
							"../../static/icon/homepagebackground.png",
							"../../static/icon/homepagebackground.png",
							"../../static/icon/homepagebackground.png",
						]
					}
				]
			};
		},
		methods: {
			showAddBox() {
				this.isShowAddBox = !this.isShowAddBox
			}
		},
		onLoad() {
			uni.$on('closeAddBox', () => {
				this.isShowAddBox = !this.isShowAddBox;

			})
			uni.$on('addItem', (res) => {
				this.circleList.unshift(res)
				this.isShowAddBox = !this.isShowAddBox;
			})
		},
		onUnload() {
			uni.$off()
		}
	}
</script>

<style lang="scss" scoped>
	.circleBody {
		height: 100vh;
		width: 100%;
		background-color: #343434;
		position: fixed;

		.head {
			$headHeight: 5vh;
			width: 100%;
			position: relative;
			padding: 0rpx 5%;
			margin-top: 2vh;
			line-height: $headHeight ;
			box-sizing: border-box;

			.icon1 {
				height: $headHeight;
				width: $headHeight;
				float: left;

			}

			.icon2 {
				$iconHeight: $headHeight +1;
				height: $iconHeight;
				width: $iconHeight;
				float: right;

			}

			text {
				color: #fff;
				line-height: $headHeight;
				margin-left: 10rpx;
			}
		}

		.circleContent-wrap {
			$Contentheight: 85vh;
			$height: $Contentheight*0.9;
			$width: $height * (378/671);
			$margin-size: (750-$width)/2;
			height: $Contentheight;
			width: 100%;
			position: fixed;


			.circleContent {
				height: $height;
				width: 100%;
				position: relative;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				position: relative;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				flex-direction: column;
				flex-wrap: wrap;
				overflow-x: auto;
				scroll-snap-type: x mandatory;

				&::-webkit-scrollbar {
					display: none;
				}

				.circleItem {
					$contentPadding: 3vh;
					$contentSize: $width - $contentPadding*2;
					box-sizing: border-box;
					height: $height;
					width: $width;
					border-radius: 30rpx;
					background-color: #fff;
					margin: 0rpx 20rpx;
					scroll-snap-align: center;
					scroll-snap-stop: always;
					position: relative;
					padding: $contentPadding;


					&:last-child {
						margin-right: $margin-size;
					}

					&:nth-child(1) {
						margin-left: $margin-size;
					}

					.itemContent {
						width: 100%;
						height: 100%;
						position: relative;

						.top {
							height: 20%;
							width: 100%;

							.name {
								position: relative;
								left: 0rpx;
								top: 0rpx;
								font-size: 20rpx;
							}

							.title {
								width: 300rpx;
								overflow: hidden;
								text-overflow: ellipsis;
								position: relative;
								margin-top: 10rpx;
								font-weight: 600;
								font-size: 60rpx;
							}

							.headImg {
								$size: 80rpx;
								height: $size;
								width: $size;
								position: absolute;
								top: 20rpx;
								right: 10rpx;

								image {
									height: $size;
									width: $size;
									border-radius: 50%;
								}
							}
						}

						.line {
							position: absolute;
							top: 20%;
							left: 50%;
							transform: translate(-50%, -50%);
							height: 5rpx;
							width: 90%;
							background-color: #E0E0E8;
							border-radius: 20rpx;
						}

						@mixin dots {
							$size: 40rpx;
							height: $size;
							width: $size;
							border-radius: 50%;
							background-color: #343434;
							position: absolute;
							top: 20%;

						}

						.dots1 {
							@include dots;
							left: - $contentPadding;
							transform: translate(-50%, -50%);
						}

						.dots2 {
							@include dots;
							right: - $contentPadding;
							transform: translate(50%, -50%);
						}

						.content {
							height: 80%;
							width: 100%;

							.title {
								$height: 100rpx;
								height: $height;
								width: 100%;
								font-weight: 600;
								text-align: center;
								line-height: $height;
								font-size: 50rpx;
							}

							.photo {
								$itemSize: $contentSize*0.48;
								$marginSize: $contentSize * 0.01;
								height: $contentSize;
								width: $contentSize;

								image {
									height: $itemSize;
									width: $itemSize;
									margin: $marginSize;
									float: left;
									background-color: #d9d9d9;


									&:nth-child(1) {
										margin-right: 0;
									}

									&:nth-child(3) {
										margin-top: 0;
										margin-right: 0;
									}

									&:nth-child(4) {
										margin-top: 0;
									}
								}
							}

							.buttom {
								height: 140rpx;
								width: 100%;

								.times {
									$height: 60rpx;
									height: $height;
									width: 100%;

									text {
										font-size: 22rpx;
										line-height: $height ;
										display: inline-block;
										float: right;
									}
								}

								.msgIcon {
									margin-top: 10rpx;
									$size: 50rpx;
									height: $size;
									width: 100%;

									image {
										height: $size;
										width: $size;
										float: right;
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>