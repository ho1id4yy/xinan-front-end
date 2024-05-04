<template>
	<view>
		<image class='background' :src='friendInfo.backgroundImage' mode="aspectFill"></image>
		<image class="edit" @click="showEditBox" src="../../static/icon/Group.png" mode="aspectFit"></image>
		<view class="wrap">
			<image class='backgroundHead' :src='friendInfo.backgroundImage' mode="aspectFill"></image>
			<view class='content'>
				<image class='head' :src='friendInfo.avatar' mode="aspectFit"></image>
				<view class='name'>{{friendInfo.username}}</view>
				<view class='number'>心安号：{{friendInfo.id}}</view>
				<view class='signature'>{{friendInfo.signature}}</view>
				<view class='bigblock'>
					<view class="top">
						<view class='num'>{{friendInfo.wishCount||0}}</view>
						<view class='num'>{{friendInfo.listProcess||0}}</view>
						<view class='num'>{{friendInfo.friendCount||0}}</view>
					</view>
					<view class="buttom">
						<view class='num2'>我的愿望数</view>
						<view class='num2'>清单进度</view>
						<view class='num2'>我的好友</view>
					</view>
				</view>
			</view>
			<view class='block' @click="toXinanCircle">
				<image class='label' src='../../static/icon/third_black.png'></image>
				<view class='text'>心安圈</view>
			</view>
		</view>
		<view class="backicon" @click="pageBack">
			<image src="../../static/icon/back.png" mode=""></image>
		</view>
		<editBox v-if="isShowEditBox" :friendInfo="friendInfo" :categoryLIst="scrollCategoryLIst"></editBox>
	</view>
</template>

<script>
	import {
		getUserInfo,
		getFriendCategory,
		changeFriendData
	} from '../../util/userApi.js';
	import editBox from './components/editBox.vue';
	export default {
		components: {
			editBox
		},
		data() {
			return {
				friendInfo: {},
				isShowEditBox: false,
				categoryLIst: []
			}
		},
		computed: {
			scrollCategoryLIst() {
				let save = [];
				for (let i = 0; i < this.categoryLIst.length / 6; i++) {
					let cnt = [];
					for (let j = 0; j < 6; j++) {
						if (i * 6 + j < this.categoryLIst.length) {
							cnt.push(this.categoryLIst[i * 6 + j])
						}
					}
					save.push(cnt);
				}
				console.log("6个一组分组", save)
				return save;
			}
		},
		onLoad(option) {
			// 获取用户信息
			getUserInfo(option.userId).then(res => {
				console.log("获取用户信息成功", res)
				this.friendInfo = res.data
			}).catch(err => {
				console.log("获取用户信息失败", err)
			})
			// 初始化朋友分组
			getFriendCategory().then(res => {
				console.log(" 获取朋友分组成功", res)
				this.categoryLIst = res.data
			}).catch(err => {
				console.log(" 获取朋友分组", err)
			})
			//更改好友信息 ， 改备注 ，邀请 ，和分类
			uni.$on('editFriend', (friendCategoryId, id, invited = 0, remarkName = null) => {
				changeFriendData(friendCategoryId, id, invited, remarkName).then(res => {
					console.log("更改好友信息成功", res)
					this.isShowEditBox = !this.isShowEditBox;
				}).catch(err => {
					console.log("更改好友信息失败", err)
				})
			})
			uni.$on('closeEditFriendBox', () => {
				this.isShowEditBox = !this.isShowEditBox;
			})
		},
		methods: {
			showEditBox() {
				this.isShowEditBox = !this.isShowEditBox;
			},
			toXinanCircle() {
				uni.navigateTo({
					url: `/page_user/friendXinanCircle/friendXinanCircle?userId=${this.friendInfo.id}`
				})
			},
			pageBack() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.background {
		width: 100%;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		filter: opacity(60%);
	}

	.edit {
		$size: 60rpx;
		height: $size;
		width: $size;
		position: absolute;
		$pos: 20rpx;
		top: $pos;
		right: $pos;
	}

	.wrap {
		$width: 500rpx;
		$padding: 20rpx;
		$backgroundHeigth: 300rpx;
		width: $width+$padding*2;

		position: relative;
		margin: 150rpx auto 0rpx;

		background-color: #fff;
		border-radius: 40rpx;
		box-shadow: 0px 5px 5px #C5C5C5;

		overflow: hidden;

		.backgroundHead {
			width: 100%;
			height: $backgroundHeigth;
			position: absolute;
			top: 0;
			left: 0;
		}

		.content {
			// 大小
			width: $width;
			// 位置
			position: relative;
			margin: $backgroundHeigth*0.6 auto 0;
			z-index: 100;
			// 样式
			border: 3rpx solid white;
			border-radius: 40rpx;
			background-color: white;
			box-shadow: 0px 5px 5px #C5C5C5;
			// 子代
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			flex-wrap: nowrap;

			.head {
				$size: 200rpx;
				width: $size;
				height: $size;
				position: relative;

				box-sizing: border-box;
				margin: -$size/2 0 0 0;
				padding: 0;
				border-radius: 50%;
				border: 10rpx solid #fff;
				overflow: hidden;


			}


			.name {
				margin-top: 10rpx;
				font-size: 130%;
				font-weight: 600;
			}


			.number {
				margin-top: 10rpx;
				font-size: 20rpx;
				color: #C5C5C5;
			}


			.signature {
				margin-top: 10rpx;
				font-size: 20rpx;
				text-align: center;
			}


			.bigblock {
				$height: 100rpx;
				$width: 80%;
				height: $height;
				width: $width;
				margin-top: 20rpx;

				.top {
					height: $height/2;
					display: flex;
					justify-content: space-around;

					.num {
						width: $width/3;
						text-align: center;
						font-size: 40rpx;
						font-weight: 600;
					}
				}

				.buttom {
					height: $height/2;
					display: flex;
					justify-content: space-around;

					.num2 {
						width: $width/3;
						text-align: center;
						font-size: 20rpx;
						color: #C5C5C5;
					}
				}
			}
		}


		.block {
			$height: 100rpx;
			$size: $height*0.6;
			height: $height;
			width: $width;

			position: relative;
			margin: 30rpx 0;
			left: 50%;
			transform: translateX(-50%);
			background-color: #fff;
			border: 5rpx solid black;
			border-radius: $height *0.3;
			box-sizing: border-box;
			padding: 0 20rpx;
			display: flex;
			align-items: center;



			.label {
				width: $size;
				height: $size;
				position: relative;
				margin-right: 20rpx;
			}


			.text {
				$textHeight: $height * 0.7;
				height: $textHeight ;
				line-height: $textHeight;
				border-left: 4rpx solid #C5C5C5;
				font-weight: bold;
				position: relative;
				padding-left: 20rpx;
			}
		}

	}

	.backicon {
		$size: 100rpx;
		height: $size;
		width: $size;

		margin: 50rpx auto 30rpx;

		border-radius: 50%;
		background-color: #3d3d3d;
		box-shadow: 0px 5px 5px #C5C5C5;
		display: flex;
		align-items: center;
		justify-content: center;

		image {
			$size: $size/2;
			height: $size;
			width: $size;
			filter: contrast(1);
		}
	}
</style>