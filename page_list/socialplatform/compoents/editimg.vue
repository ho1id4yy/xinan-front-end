<template>
	<view class="boxmarsk" data-self="boxmarsk" @touchmove.stop.prevent="moveHandle" @click='closebox($event)'>
		<view class="addTreasure">
			<view class="addBox">
				<view class="head">编辑项目</view>
				<view class="imgbox" @click="checkimg">
					<image :src="addimg" mode="aspectFit"></image>
				</view>
				<view class="inputname">
					<input type="text" placeholder="请输入项目名" v-model="text" />
				</view>
				<view class="checkimg">
					<view class="checkimg1" @click="reject">
						取消
					</view>
					<view class="checkimg2" @click="editTreasure">
						修改
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addimg: "/static/icon/whichimg.png",
				isadding: false,
				text: ""
			}
		},
		props: {},
		methods: {
			closebox(e) {
				if (e.target.dataset.self == "boxmarsk") {
					uni.$emit('closeEditBox')
				}
			},
			checkimg() {
				uni.chooseImage({
					success: (res) => {
						let tempFilePaths = res.tempFilePaths;
						this.addimg = tempFilePaths[0]
						this.isadding = true;
					}
				})
			},
			reject() {
				uni.$emit('closeEditBox')
			},
			editTreasure() {
				if (!this.isadding) {
					uni.showToast({
						title: '请上传APP图片',
						icon: 'error',
						duration: 1500
					})
				} else if (!this.text) {
					uni.showToast({
						title: '请输入项目名',
						icon: 'error',
						duration: 1500
					})
				} else {
					uni.showToast({
						title: '修改成功',
						icon: 'success',
						duration: 1500
					})
					uni.$emit("editItem", {
						img: this.addimg,
						name: this.text,
						status: -1
					})
				}
			}
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

		.addTreasure {
			width: 471rpx;
			height: 546rpx;
			position: absolute;
			transform: translate(-50%, -50%);
			left: 50%;
			top: 50%;

			.addBox {
				z-index: 1000;
				transform: translate(-50%, -50%);
				position: fixed;
				left: 50%;
				top: 50%;
				width: 471rpx;
				height: 600rpx;
				background-color: #fff;
				background: #FFFFFF;
				border-radius: 24rpx;

				.head {
					margin-top: 20rpx;
					height: 80rpx;
					line-height: 80rpx;
					font-weight: 900;
					font-size: 40rpx;
					text-align: center;
				}

				.imgbox {
					height: 287rpx;
					width: 300rpx;
					border-radius: 15rpx;
					border: dashed 5rpx #B5B5BC;
					transform: translateX(-50%);
					position: relative;
					left: 50%;
					text-align: center;

					image {
						height: 287rpx;
						width: 300rpx;
					}
				}

				.inputname {
					width: 100%;
					height: 50rpx;
					margin-top: 20rpx;
					display: flex;
					align-items: center;

					input {
						transform: translateX(-50%);
						position: relative;
						left: 50%;
						height: 50rpx;
						width: 80%;
						border-bottom: 5rpx solid #B5B5BC;
					}
				}

				.checkimg {
					$height: 60rpx;
					margin-top: 40rpx;
					height: $height;
					display: flex;
					justify-content: space-around;
					align-items: center;

					&>view {
						box-sizing: border-box;
						padding: 0px;
						height: $height;
						width: 200rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 14rpx;
					}

					.checkimg1 {
						color: #fff;
						background-color: #343434;
						border: 4rpx solid #343434;
					}

					.checkimg2 {
						color: #000;
						background-color: #fff;
						border: 4rpx solid #343434;
					}

				}
			}
		}
	}
</style>