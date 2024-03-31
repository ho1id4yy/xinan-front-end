<template>
	<view class="boxmarsk" data-self="boxmarsk" @touchmove.stop.prevent="moveHandle" @click='closebox($event)'>
		<view class="addTreasure">
			<view class="addBox">
				<view class="msg">
					<view class="imgwrap" @click="showGetBox">
						<image src="/static/icon/emil.png" mode="aspectFit"></image>
						<view class="dotted" v-show="isShowDots"></view>
					</view>
				</view>
				<view class="imgbox" @click="checkimg">
					<image :src="img" mode="aspectFit"></image>
				</view>
				<view class="inputname">
					<input type="text" placeholder="请输入宠物名" v-model="text" />
				</view>
				<view class="addPetBox" @click="addPet">
					<view class="addPet">
						增加宠物
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
				text: ""
			}
		},
		props: {
			isShowDots:{
				type:Boolean,
				default:true
			}
		},
		methods: {
			showGetBox(){
				uni.$emit('openGetBox')
			},
			closebox(e) {
				if (e.target.dataset.self == "boxmarsk") {
					uni.$emit('closeAddBox')
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
			addPet() {
				if (!this.isadding) {
					uni.showToast({
						title: '请上传图片',
						icon: 'error',
						duration: 1500
					})
				} else if (!this.text) {
					uni.showToast({
						title: '请输入宠物名',
						icon: 'error',
						duration: 1500
					})
				} else {
					uni.showToast({
						title: '添加成功',
						icon: 'success',
						duration: 1500
					})
					uni.$emit("addPet", {
						img: this.img,
						name: this.text
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
			height: 650rpx;
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
				padding:20rpx;

				.msg {
					$imgheight: 50rpx;
					height: $imgheight;
					width: 100%;
					display: flex;
					margin-bottom: 50rpx;

					.imgwrap {
						height: $imgheight;
						width: $imgheight;
						position: relative;


						image {
							height: $imgheight;
							width: $imgheight;
							position: absolute;
							top: 0px;
							left: 0px;
						}

						.dotted {
							$dotsize: 17rpx;
							height: $dotsize;
							width: $dotsize;
							background-color: #ff7c7c;
							border-radius: 50%;
							position: absolute;
							top: 0px;
							right: 0px;
							z-index: 1;
						}
					}
				}

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

				.addPetBox {
					$height: 60rpx;
					margin-top: 40rpx;
					height: $height;
					display: flex;
					justify-content: space-around;
					align-items: center;
					box-sizing: border-box;
					padding: 0px;

					.addPet {
						$height: 60rpx;
						width: 55%;
						display: flex;
						justify-content: space-around;
						align-items: center;
						border-radius: 14rpx;
						color: #000;
						background-color: #fff;
						border: 4rpx solid #343434;
					}
				}
			}
		}
	}
</style>