<template>
	<view class="boxmarsk" data-self="marsk" @click="closeBox" @touchmove.stop.prevent="moveHandle">
		<view class="addcoundBox">
			<view class="closeBox">
				<image @click="closeBoxByicon" class="image" mode="aspectFit" src="../../../static/icon/close.png">
				</image>
			</view>
			<view class="avatar">
				<image class="image" :src="friendInfo.avatar" mode="aspectFill"></image>
			</view>
			<view class="xinanNum">心安号：{{friendInfo.userId}}</view>
			<view class="name">
				<text>好友备注</text>
				<input type="number" v-model="remarkName" :placeholder="friendInfo.username" />
			</view>
			<view class="xuanzefenzu">选择分组</view>
			<swiper class="category">
				<swiper-item class="scrollItem" v-for="(page,pageIndex) in categoryLIst" :key="pageIndex">
					<view :class="['categoryItem',currentCategory==pageIndex*6+index?'active':'']"
						v-for="(item,index) in page" :key="index" @click="changeCurrentCategory(pageIndex*6+index)">
						{{item.name}}
					</view>
				</swiper-item>
			</swiper>
			<view class="buttonBox">
				<button class="button" @click="accept">添加</button>
				<button class="button" @click="next">下一个</button>
				<button class="button" @click="reject">拒绝</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentCategory: 0,
				currentPos: 0,
				remarkName: '',
			}
		},
		onShow() {
			console.log(this.ScrollcategoryLIst)
		},
		props: {
			friendInfoList: {
				type: Array,
				default: []
			},
			categoryLIst: {
				type: Array,
				default: []
			}
		},
		computed: {
			friendInfo() {
				return this.friendInfoList[this.currentPos];
			}
		},
		methods: {
			changeCurrentCategory(idx) {
				this.currentCategory = idx;
			},
			closeBox(e) {
				if (e.target.dataset.self == 'marsk') {
					uni.$emit('closeAcceptFriendBox')
				}
			},
			closeBoxByicon() {
				uni.$emit('closeAcceptFriendBox')
			},
			accept() {
				let page = Math.floor(this.currentCategory / 6);
				let idx = this.currentCategory % 6;
				uni.$emit('AcceptFriend', this.categoryLIst[page][idx].id,
					this.friendInfoList[this.currentPos].userId,
					0,
					this.friendInfoList[this.currentPos].messageId,
					this.remarkName || this.friendInfoList[this.currentPos].username,
					this.currentPos)
				if (this.currentPos == this.friendInfoList.length) {
					this.currentPos--;
				}
				if (this.currentPos < 0) {
					uni.$emit('closeAcceptFriendBox');
				}
			},
			next() {
				if (this.currentPos >= this.friendInfoList.length - 1) {
					return;
				}
				this.currentPos++;
			},
			reject() {
				uni.$emit('deleteAcceptFriend', this.friendInfoList[this.currentPos].userId, this.currentPos);
				if (this.currentPos == this.friendInfoList.length) {
					this.currentPos--;
				}
				if (this.currentPos < 0) {
					uni.$emit('closeAcceptFriendBox');
				}
			},
			moveHandle() {}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../gloabal.scss';

	.boxmarsk {
		height: 100vh;
		width: 100%;
		background-color: #343434bd;
		position: fixed;
		top: 0px;
		left: 0px;
		z-index: 1000;

		.addcoundBox {
			width: 471rpx;
			position: absolute;
			transform: translate(-50%, -50%);
			left: 50%;
			top: 50%;
			background-color: #ffffff;
			padding: 20rpx 30rpx;
			box-sizing: border-box;
			border-radius: 15rpx;

			.closeBox {
				$size: 25rpx;
				height: $size;
				width: 100%;
				position: relative;

				.image {
					height: $size;
					width: $size;
					float: right;
				}
			}

			.avatar {
				$height: 120rpx;
				height: $height;
				width: 100%;
				border: 4rpx solid #fff;

				.image {
					height: $height;
					width: $height;
					border-radius: 50%;
					box-shadow: 0 6rpx 6rpx 0 #999999;
					position: relative;
					left: 50%;
					transform: translateX(-50%);
				}
			}

			.name {
				@include input;
				// margin-top: 20rpx;

				// font-size: 40rpx;
				// font-weight: 900;
				// text-align: center;
				// color: #000;
			}

			$grayColr: #d9d9d9;

			.xinanNum {
				font-size: 32rpx;
				text-align: center;
				color: $grayColr;
			}

			.xuanzefenzu {
				margin-top: 10rpx;
				font-size: 30rpx;
				text-align: center;
				color: $grayColr;
			}

			.category {
				$itemHeight: 80rpx;
				$gapHeight: 20rpx;
				$width: 100%;

				height: $itemHeight*2+$gapHeight*2;
				width: $width;
				position: relative;
				display: flex;
				flex-wrap: nowrap;

				.scrollItem {
					height: $itemHeight*2+$gapHeight*2;
					width: $width;
					position: relative;

					display: flex;
					flex-wrap: wrap;

					.categoryItem {
						width: $width * 0.3;
						height: $itemHeight;
						box-sizing: border-box;

						margin: $gapHeight/2 $width*0.05 $gapHeight/2 0;

						line-height: $itemHeight ;
						font-size: 28rpx;
						text-align: center;
						white-space: nowrap;
						border-radius: 20rpx;
						border: $grayColr 5rpx solid;
						color: $grayColr;
						overflow: hidden;
						text-overflow: ellipsis;


						&:nth-child(3) {
							margin-right: 0;
						}

						&:nth-child(6) {
							margin-right: 0;
						}

						&.active {
							border-color: #000;
							color: #000;
							font-weight: 700;
						}
					}
				}
			}

			.buttonBox {
				$height: 60rpx;
				height: $height ;
				width: 100%;

				margin-top: 20rpx;

				display: flex;
				justify-content: space-around;
				align-items: center;

				.button {
					height: $height;
					width: 30%;
					box-sizing: border-box;

					position: relative;

					padding: 0;
					margin: 0;

					line-height: $height;
					text-align: center;
					color: #fff;
					background-color: #343434;
					border: #343434 2rpx solid;
					border-radius: 20rpx;

				}
			}
		}

	}
</style>