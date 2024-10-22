<template>
	<view class="boxmarsk" data-self="marsk" @click="closeBox" @touchmove.stop.prevent="moveHandle">
		<view class="addBox-wrap">
			<view class="addBox">
				<view class="head">
					<input type="text" placeholder="便签标题......" v-model="subTitle" />
				</view>
				<view class="head">
					<input type="text" placeholder="时光主题......" v-model="title" />
				</view>
				<view class="content" @click="updataImg">
					<image :src="item" mode="aspectFill" v-for="(item,idx) in imgList" :key="idx"></image>
				</view>
				<view class="buttom">
					<text class="text">发生时间</text>
					<view class="time">
						<picker mode="date" @change="changeBeginDate">
							<text>{{beginDate.replaceAll('-', '.')}}-</text>
						</picker>
						<picker mode="date" @change="changeEndDate">
							<text>{{endDate.replaceAll('-', '.')}}</text>
						</picker>
					</view>
				</view>
				<view class=" addIcon" @click="commit">
					<text>发布</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		updataImage
	} from '../../../util/api.js'
	export default {
		data() {
			return {
				subTitle: "",
				title: "",
				beginDate: "0000.00.00",
				endDate: "0000.00.00",
				isUpdataImg: false,
				imgList: [
					"",
					"",
					"",
					"",
				]
			}
		},
		props: {

		},
		computed: {

		},
		methods: {
			changeBeginDate(e) {
				let data = e.detail.value;
				// this.beginDate = data.replaceAll('-', '.')
				this.beginDate = data;
			},
			changeEndDate(e) {
				let data = e.detail.value;
				// this.endDate = data.replaceAll('-', '.')
				this.endDate = data;
			},
			updataImg() {
				uni.chooseImage({
					success: (res) => {
						let tempFilePaths = res.tempFilePaths;
						this.imgList.splice(0);
						for (let i = 0; i < (tempFilePaths.length < 4 ? tempFilePaths.length : 4); i++) {
							updataImage(tempFilePaths[i]).then(url => {
								this.imgList.push(url);
								console.log("上传图片成功", url);
							}).catch(err => {
								console.log("上传图片失败", err)
							})
						}
						this.isUpdataImg = true;
					}
				})
			},
			closeBox(e) {
				if (e.target.dataset.self == "marsk") {
					uni.$emit('closeAddBox')
				}
			},
			commit() {
				if (!this.isUpdataImg) {
					uni.showToast({
						title: '请上传图片',
						icon: 'error',
						duration: 1500
					})
				} else if (!this.title) {
					uni.showToast({
						title: '请输入时光主题',
						icon: 'error',
						duration: 1500
					})
				} else if (this.beginDate == "0000.00.00" || this.endDate == "0000.00.00") {
					uni.showToast({
						title: '请选择时间',
						icon: 'error',
						duration: 1500
					})
				} else {
					uni.$emit("addXinanCricle", {
						beginDate: this.beginDate,
						endDate: this.endDate,
						photo1: this.imgList[0],
						photo2: this.imgList[1],
						photo3: this.imgList[2],
						photo4: this.imgList[3],
						subTitle: this.subTitle,
						title: this.title,
						userId: getApp().globalData.id,
						avatar: getApp().globalData.userInfo.avatar
					})
					uni.showToast({
						title: '发布成功',
						icon: 'success',
						duration: 1500
					})
				}
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

		.addBox-wrap {
			$width: 750rpx * 0.7;
			$paddingSize: 30rpx;
			width: $width;
			position: absolute;
			transform: translate(-50%, -50%);
			left: 50%;
			top: 50%;
			background-color: #ffffff;
			padding: 20rpx 30rpx;
			box-sizing: border-box;
			border-radius: 15rpx;
			padding: $paddingSize;

			.addBox {
				width: 100%;
				height: 100%;
				box-sizing: border-box;

				.head {
					height: 60rpx;
					width: 100%;
					border-bottom: 2rpx solid #000;

					input {
						color: #d9d9d9;
						font-size: 30rpx;
					}
				}

				.content {
					box-sizing: border-box;
					$contentWidth: $width - $paddingSize*2;
					$itemSize: $contentWidth*0.44;
					$marginSize: $contentWidth * 0.04;
					height: $contentWidth;
					width: $contentWidth;


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
					$height: 60rpx;
					height: $height;
					line-height: $height;
					width: 100%;
					font-size: 30rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.text {
						font-weight: 600;
					}

					.time {
						word-spacing: 3rpx;
						display: flex;
						justify-content: flex-start;
						flex-wrap: nowrap;
						align-items: center;
					}
				}

				.addIcon {
					$height: 55rpx;
					margin-top: 30rpx;
					height: $height;
					width: 100%;
					background-color: #343434;
					border-radius: 15rpx;
					box-sizing: border-box;
					border: 2rpx solid #343434;
					color: #fff;
					line-height: $height;
					text-align: center;
				}
			}

		}
	}
</style>