<template>
	<view class="boxmarsk" data-self="boxmarsk" @touchmove.stop.prevent="moveHandle" @click='closebox($event)'>
		<view class="addTreasure">
			<view class="addBox">
				<view class="imgbox" @click="checkimg">
					<image :src="img" mode="aspectFit"></image>
				</view>
				<view class="inputname">
					<input type="text" placeholder="请输入宠物名" v-model="name" />
				</view>
				<view class="checkimg">
					<view class="checkimg1" @click="deleteTreasure">
						删除宠物
					</view>
					<view class="checkimg2" @click="editTreasure">
						修改宠物
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
				img: "/static/icon/whichimg.png",
				isadding: false,
				name: ""
			}
		},
		props: {},
		methods: {
			closebox(e) {
				if (e.target.dataset.self == "boxmarsk") {
					uni.$emit('openDetailBox')
				}
			},
			checkimg() {
				uni.chooseImage({
					success: (res) => {
						let tempFilePaths = res.tempFilePaths;
						this.img = tempFilePaths[0]
						this.isadding = true;
					}
				})
			},
			deleteTreasure() {
				uni.$emit('deletePet')
			},
			editTreasure() {
				if (!this.isadding) {
					uni.showToast({
						title: '请上传图片',
						icon: 'error',
						duration: 1500
					})
				} else if (!this.name) {
					uni.showToast({
						title: '请输入宠物名',
						icon: 'error',
						duration: 1500
					})
				} else {
					uni.showToast({
						title: '修改成功',
						icon: 'success',
						duration: 1500
					})
					uni.$emit("editPet", {
						img: this.img,
						name: this.name
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
				height: 546rpx;
				background-color: #fff;
				background: #FFFFFF;
				border-radius: 24rpx;

				.imgbox {
					height: 287rpx;
					width: 300rpx;
					border-radius: 15rpx;
					border: dashed 5rpx #B5B5BC;
					transform: translateX(-50%);
					position: relative;
					left: 50%;
					margin-top: 70rpx;
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