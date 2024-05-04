<template>
	<view>
		<view class="circleBody">
			<view class="head">
				<image class="icon1" src="/static/icon/xinancirlcle.png" mode="aspectFit"></image>
				<text>心安圈</text>
			</view>
			<view class="whos">
				<view class="whosContent">
					<image :src="userInfo.avatar" mode="aspectFill"></image>
					<text>{{userInfo.username}}的心安圈</text>
				</view>
			</view>
			<!-- 有的情况 -->
			<view class="circleContent-wrap" v-if="circleList.length">
				<scroll-view class="circleContent" scroll-x="true" @scroll="onScroll" @scrolltolower="reachBottom">
					<!-- <view class="circleContent"> -->
					<view class="circleItem" v-for="(item,idx) in circleList" :key="idx">
						<view class="itemContent">
							<view class="top">
								<view class="name">{{item.subTitle}}</view>
								<view class="title">{{item.title}}</view>
								<view class="headImg">
									<image :src="item.avatar" mode="aspectFill"></image>
								</view>
							</view>
							<view class="line"></view>
							<view class="dots1"></view>
							<view class="dots2"></view>
							<view class="content">
								<view class="title">PHOTOMATIC</view>
								<!-- 一张 -->
								<view class="photo1" v-if="!item.photo2&&!item.photo3&&!item.photo4">
									<image :src="item.photo1" mode="aspectFill"></image>
								</view>
								<!-- 2张 -->
								<view class="photo2" v-else-if="!item.photo3&&!item.photo4">
									<image :src="item.photo1" mode="aspectFill"></image>
									<image :src="item.photo2" mode="aspectFill"></image>
								</view>
								<!-- 34张 -->
								<view class="photo34"
									v-else-if="item.photo1&&item.photo2&&item.photo3&&item.photo4||item.photo1&&item.photo2&&item.photo3">
									<image v-if="item.photo1" :src="item.photo1" mode="aspectFill"></image>
									<image v-if="item.photo2" :src="item.photo2" mode="aspectFill"></image>
									<image v-if="item.photo3" :src="item.photo3" mode="aspectFill"></image>
									<image v-if="item.photo4" :src="item.photo4" mode="aspectFill"></image>
								</view>
								<view class="buttom">
									<view class="times">
										<text>{{item.beginDate.replaceAll('-', '.')}}-{{item.endDate.replaceAll('-', '.')}}</text>
									</view>
									<view class="loveIcon">
										<image
											:src="item.momentLikes?item.momentLikes.some(item=>item.id==myInfo.id)?lovedSrc:loveSrc:loveSrc"
											mode="aspectFit" @click="changeLove(idx)"></image>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<!-- 没有是显示 -->
			<view class="circleContent-wrap" v-else>
				<view class="circleContent">
					<view class="circleItem">
						<view class="itemContent">
							<view class="top">
								<view class="name">时光便利贴</view>
								<view class="title">什么也没有</view>
								<view class="headImg">
									<image :src="userInfo.avatar" mode="aspectFill"></image>
								</view>
							</view>
							<view class="line"></view>
							<view class="dots1"></view>
							<view class="dots2"></view>
							<view class="content">
								<view class="title">PHOTOMATIC</view>
								<view class="photo34" v-if="imgList.length>=3">
									<image src="../../static/icon/homepagebackground.png" mode="aspectFill"
										v-for="(item ,idx) in imgList" :key="idx">
									</image>
								</view>
								<view class="photo1" v-if="imgList.length==1">
									<image src="../../static/icon/homepagebackground.png" mode="aspectFill"
										v-for="(item ,idx) in imgList" :key="idx">
									</image>
								</view>
								<view class="photo2" v-if="imgList.length==2">
									<image src="../../static/icon/homepagebackground.png" mode="aspectFill"
										v-for="(item ,idx) in imgList" :key="idx">
									</image>
								</view>
								<view class="buttom">
									<view class="times">
										<text>{{new Date().getFullYear()}}-{{new Date().getMonth()+1}}-{{new Date().getDate()}}</text>
									</view>
									<view class="loveIcon">
										<image :src="loveSrc" mode="aspectFit"></image>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getOtherXinanCircle,
		heartXinanCircle,
		cancelHeartXinanCircle
	} from '../../util/xinanCircleApi.js'
	import {
		getUserInfo,
	} from '../../util/userApi.js';
	export default {
		data() {
			return {
				loveSrc: '/static/icon/love.png',
				lovedSrc: '/static/icon/loved.png',
				imgList: [
					"../../static/icon/homepagebackground.png",
					"../../static/icon/homepagebackground.png",
				],
				userInfo: {},
				// 是否处于下拉刷新
				isRefresh: false,
				// 0 没有加载, 1 在加载 ,2 没有了
				isLoading: 0,
				// 分页加载的页数
				pageNum: 1,
				// 分页加载的每页的数量
				pageSize: 6,
				// 用户的信息
				myInfo: {},
				circleList: []
			};
		},
		methods: {
			// 右拉刷新
			// 触底加载更多
			reachBottom() {
				this.getXinanCircle();
			},
			// 在滚动
			onScroll(e) {
				// e.detail
			},
			changeLove(idx) {
				if (this.circleList[idx].momentLikes && this.circleList[idx].momentLikes.some(item => item.id == getApp()
						.globalData.userInfo.id)) {
					// 如果点了赞的话
					cancelHeartXinanCircle(this.circleList[idx].id).then(res => {
						this.circleList[idx].momentLikes.splice(this.circleList[idx].momentLikes.indexOf({
							id: getApp().globalData.userInfo.id,
							username: getApp().globalData.userInfo.username,
						}), 1)
						console.log(this.circleList[idx].momentLikes)
						console.log("取消点赞成功", res)
					}).catch(err => {
						console.log('取消点赞失败', err)
					})
				} else {
					heartXinanCircle(this.circleList[idx].id).then(res => {
						this.circleList[idx].momentLikes.push({
							id: getApp().globalData.userInfo.id,
							username: getApp().globalData.userInfo.username,
						})
						console.log(this.circleList[idx].momentLikes)
						console.log("点赞成功", res)
					}).catch(err => {
						console.log('点赞失败', err)
					})
				}
			},
			showAddBox() {
				this.isShowAddBox = !this.isShowAddBox
			},
			getXinanCircle() {
				if (this.isLoading == 2) {
					console.log("没有更多了")
					return;
				}
				this.isLoading = 1;
				this.isRefresh = true;
				getOtherXinanCircle(this.pageNum, this.pageSize, this.userInfo.id).then(res => {
					console.log("得到心安圈信息成功", res)
					if (!res.data.records || res.data.records.length == 0) {
						console.log("没有了");
						this.isLoading = 2;
						return;
					}
					this.circleList = [...this.circleList, ...res.data.records];
					this.pageNum++;
					this.isRefresh = false;
					this.isLoading = 0;
					console.log(this.circleList)
				}).catch(err => {
					console.log("得到心安圈信息失败", err)
				})
			}
		},
		onLoad(option) {

			// 获取用户信息
			getUserInfo(option.userId).then(res => {
				console.log("获取用户信息成功", res)
				this.userInfo = res.data;
				this.circleList = [];
				this.getXinanCircle();
			}).catch(err => {
				console.log("获取用户信息失败", err)
			})
			this.myInfo = getApp().globalData.userInfo;
		},
		onUnload() {
			uni.$off()
		}
	}
</script>

<style lang="scss" scoped>
	$totall: 92vh;
	$headHeight: 5vh;
	$whosHeight: 4vh;
	$Contentheight: 81vh; // 整个盒子的高度
	$height: $Contentheight*0.9; //心安Item的大小
	$width: $height * (378/671); // 心安Item的宽
	$margin-size: 10vh; // 为了是心安Item居中

	.circleBody {
		height: 100vh;
		width: 100%;
		background-color: #343434;
		position: fixed;

		.head {
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

		.whos {
			$padding: 2vh;
			height: $whosHeight;
			width: 100%;

			.whosContent {
				height: $whosHeight;
				box-sizing: border-box;

				float: left;

				padding: 0 $whosHeight*0.2;
				background-color: #fff;
				border-radius: $whosHeight ;
				display: flex;
				align-items: center;

				image {
					$size: $whosHeight*0.8;
					height: $size;
					width: $size;
					border-radius: 50%;
				}

				text {
					margin: 0 20rpx 0 20rpx;
					font-size: 28rpx;
					font-weight: 900;
				}
			}
		}

		.circleContent-wrap {


			height: $Contentheight; // 整个心安圈站的大小
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
				white-space: nowrap;

				&::-webkit-scrollbar {
					display: none;
				}

				.circleItem {
					$contentPadding: 3vh; // 内部的padding
					$contentSize: $width - $contentPadding*2; // 内部实际站的距离
					box-sizing: border-box;
					height: $height;
					width: $width;
					border-radius: 30rpx;
					background-color: #fff;
					margin: 0rpx 20rpx; // item之间的距离
					scroll-snap-align: center;
					scroll-snap-stop: always;
					position: relative;
					padding: $contentPadding;
					display: inline-block;

					&:last-child {
						margin-right: $margin-size; //第一个左边距
					}

					&:nth-child(1) {
						margin-left: $margin-size;
					}

					.itemContent {
						width: 100%;
						height: 100%;
						position: relative;

						$topHeaght: 20%;

						.top {
							height: $topHeaght;
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
								white-space: nowrap;
								overflow: hidden;
								text-overflow: ellipsis;
							}

							.headImg {
								$size: 100rpx;
								height: $size;
								width: $size;

								position: absolute;
								top: 20rpx;
								right: 10rpx;

								box-shadow: 0px 5px 5px #C5C5C5;
								border: 5rpx solid #fff;
								border-radius: 50%;
								overflow: hidden;

								image {
									height: $size;
									width: $size;
									border-radius: 50%;
								}
							}
						}


						.line {
							position: absolute;
							top: $topHeaght;
							left: 50%;
							transform: translate(-50%, -50%);
							height: 5rpx;
							width: 90%;
							background-color: #E0E0E8;
							border-radius: 20rpx;
						}

						@mixin dots {
							// 两个缺口
							$size: 40rpx;
							height: $size;
							width: $size;
							border-radius: 50%;
							background-color: #343434;
							position: absolute;
							top: $topHeaght;

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

							.photo34 {
								$imgpercent: 0.48;
								$itemSize: $contentSize * $imgpercent;
								$marginSize: $contentSize * (0.5 - $imgpercent)/2;
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

							.photo1 {
								$imgpercent: 0.9;
								$itemSize: $contentSize * $imgpercent;
								$marginSize: $contentSize * (1 - $imgpercent)/2;
								height: $contentSize;
								width: $contentSize;

								image {
									height: $itemSize;
									width: $itemSize;
									margin: $marginSize;
									float: left;
									background-color: #d9d9d9;

								}
							}

							.photo2 {
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

								.loveIcon {
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