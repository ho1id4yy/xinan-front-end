<template>
	<view class="boxmarsk" data-self="marsk" @click="closeBox" @touchmove.stop.prevent="moveHandle">
		<view class="addBox-wrap">
			<view class="addBox">
				<view class="head">
					<input type="text" placeholder="时光主题......" v-model="title" />
				</view>
				<view class="content" @click="updataImg">
					<image :src="item" mode="" v-for="(item,idx) in imgList"></image>
				</view>
				<view class="buttom">
					<picker mode="date" @change="changeDate">
						<text>选择发生时间</text>
						<text>{{time}}</text>
					</picker>
				</view>
				<view class="addIcon" @click="commit">
					<text>发布</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "",
				time: "0000-00-00",
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
			changeDate(e) {
				this.time = e.detail.value
			},
			updataImg() {
				uni.chooseImage({
					success: (res) => {
						let tempFilePaths = res.tempFilePaths;
						this.imgList.splice(0);
						for (let i = 0; i < tempFilePaths.length; i++) {
							this.imgList.push(tempFilePaths[i])
						}
						while (this.imgList.length < 4) {
							this.imgList.push("")
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
				} else if (this.time == "0000-00-00") {
					uni.showToast({
						title: '请选择时间',
						icon: 'error',
						duration: 1500
					})
				} else {
					uni.$emit("addItem", {
						title: this.title,
						headImg: "/static/picture/headImg.png",
						time: this.time,
						contentList: this.imgList
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
			$height: 750rpx;
			$width: $height * 0.7;
			$paddingSize: 30rpx;
			width: $width;
			height: $height;
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
						font-size: 42rpx;
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

					text {
						&:nth-child(1) {
							float: left;
							font-weight: 600;
						}

						&:nth-child(2) {
							float: right;
						}
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