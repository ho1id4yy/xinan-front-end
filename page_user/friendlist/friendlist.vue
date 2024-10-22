<template>
	<view>
		<view class='block'>
			<image class='icon' src='../../static/icon/person.png' />
			<view class="title">个人</view>
			<view class='line'>
				好友列表
				<image class='vector' src='../../static/icon/Vector 11.png'></image>
			</view>
		</view>
		<view class="inputWrap">
			<view class="email" @click="openAcceptFriendBox">
				<image src="/static/icon/emil.png" mode="aspectFit"></image>
				<!-- 有申请就亮红点 -->
				<view class="dotted" v-show="friendRequestList&&friendRequestList.length"></view>
			</view>
			<view class='input'>
				<input type='number' v-model="phoneNum" class='text' placeholder="请输入手机号" />
				<button class='button' @click="getAddFriend">添加</button>
			</view>
		</view>

		<view class='list'>
			<view class="item" v-for='(item,idx) in friendList' :key="idx">
				<image class='head' :src='item.avatar'></image>
				<view class='name' :id='idx' @click="goFriendCard(item.id)">
					{{item.remarkName}}
				</view>
			</view>
		</view>
		<buttom-bar :buttombar="buttombar"></buttom-bar>
		<addFriendBox v-if="isShowAddFriendBox" :friendInfo="addFriendInfo" :categoryLIst="scrollCategoryLIst">
		</addFriendBox>
		<acceptFriend v-if="isShowAcceptFriendBox" :friendInfoList="friendRequestList"
			:categoryLIst="scrollCategoryLIst">
		</acceptFriend>
	</view>
</template>

<script>
	import buttomBar from '@/compoents/buttomBar/buttomBar.vue'
	import addFriendBox from './compoents/addFriendBox.vue';
	import acceptFriend from './compoents/acceptFriend.vue';
	import {
		getUserInfoByPhone,
		getFriend,
		getFriendRequest,
		deleteFriendRequest,
		addFriendFromRequest,
		postFriendRequest,
		getFriendCategory,
		changeFriendData,
		getUserInfo
	} from 'util/userApi.js'
	export default {
		components: {
			buttomBar,
			addFriendBox,
			acceptFriend,
		},
		data() {
			return {
				isShowAddFriendBox: false,
				isShowAcceptFriendBox: false,
				// 输入的phoneNum
				phoneNum: '',
				// 分组信息
				categoryLIst: [],
				// 好友请求列表
				friendRequestList: [],
				// 朋友列表
				friendList: [],
				// 添加的朋友的信息
				addFriendInfo: {},
				// 编辑朋友的信息
				editFriendInfo: {},
				buttombar: {
					active: 3,
					imglist: [
						'/static/icon/first_white.png',
						'/static/icon/second_white.png',
						'/static/icon/third_white.png',
						'/static/icon/Group_black.png'
					]
				},
			};
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
		onUnload() {
			uni.$off()
		},
		onLoad() {
			// 初始化朋友列表
			getFriend().then(res => {
				console.log(" 获取用户好友成功", res)
				this.friendList = res.data;
			}).catch(err => {
				console.log(" 获取用户好友失败", err)
			})
			// 初始化朋友分组
			getFriendCategory().then(res => {
				console.log(" 获取朋友分组成功", res)
				this.categoryLIst = res.data
			}).catch(err => {
				console.log(" 获取朋友分组", err)
			})
			// 查看好友请求成功
			getFriendRequest().then(res => {
				this.friendRequestList = res.data;
				console.log("查看好友请求成功", res)
			}).catch(err => {
				console.log("查看好友请求失败", err)
			})
			/////////////////////////add
			uni.$on('closeAddFriendBox', () => {
				this.isShowAddFriendBox = !this.isShowAddFriendBox;
			})
			uni.$on('postFriendRequest', (categoryid, receiverId) => {
				console.log('postFriendRequest', categoryid, receiverId);
				postFriendRequest(categoryid, receiverId).then(res => {
					console.log("发送好友请求成功", res)
					this.isShowAddFriendBox = !this.isShowAddFriendBox;
				}).catch(err => {
					console.log("发送好友请求失败", err)
				})
			})
			///////////////// accept
			uni.$on('closeAcceptFriendBox', () => {
				this.isShowAcceptFriendBox = !this.isShowAcceptFriendBox;
			})
			uni.$on('AcceptFriend', (friendCategoryId,
				id,
				invited = 0,
				messageId,
				remarkName, pos) => {

				console.log('AcceptFriend', friendCategoryId,
					id,
					invited,
					messageId,
					remarkName, pos)
				// 添加
				addFriendFromRequest(
					friendCategoryId,
					id,
					invited,
					messageId,
					remarkName
				).then(res => {
					console.log('同意好友申请成功', res)
					// 得到用户的信息加入好友列表
					return getUserInfo(id)
				}).then(res => {
					console.log("得到添加的好友的信息成功", res)
					this.friendList.unshift(res.data)
					// 删除请求
					return deleteFriendRequest(id)
				}).then(res => {
					console.log('删除好友请求成功', res);

					this.friendRequestList.splice(pos, 1);
					if (!this.friendRequestList.length) {
						this.isShowAcceptFriendBox = !this.isShowAcceptFriendBox;
						return;
					}
				}).catch(err => {
					console.log("同意好友申请失败", err)
				})
			})
			uni.$on('deleteAcceptFriend', (id, pos) => {
				deleteFriendRequest(id).then(res => {
					console.log('删除好友请求成功', res)
					this.friendRequestList.splice(pos, 1);
					if (!this.friendRequestList.length) {
						this.isShowAcceptFriendBox = !this.isShowAcceptFriendBox;
					}
				}).catch(err => {
					console.log('删除好友请求失败', err)
				})
			})
		},
		methods: {
			// 接收好友请求的盒子
			openAcceptFriendBox() {
				// 如果有
				if (this.friendRequestList.length) {
					this.isShowAcceptFriendBox = !this.isShowAcceptFriendBox;
				}
			},
			// 看好友名片
			goFriendCard(userId) {
				uni.navigateTo({
					url: `/page_user/friendCard/friendCard?userId=${userId}`,
				})
			},
			// 请求好友
			getAddFriend() {
				if (this.phoneNum.length !== 11) {
					console.log("无效手机号")
					return;
				}
				getUserInfoByPhone(this.phoneNum).then(res => {
					if (!res.data) {
						console.log("没有此用户");
						uni.showToast({
							icon: 'error',
							title: res.msg
						})
						return;
					}

					// 得到要添加的用户的信息
					console.log("得到用户信息成功", res)
					this.addFriendInfo = res.data;
					// let isIn = false; // 在不在好友列表
					// for (let i = 0; i < this.friendList.length; i++) {
					// 	if (this.friendList[i].id == this.addFriendInfo.id) {
					// 		isIn = true;
					// 	}
					// }
					// if (isIn) {
					// 	console.log("已经在好友列表中")
					// 	uni.showToast({
					// 		icon: 'error',
					// 		title: "已经在好友列表中"
					// 	})
					// 	return;
					// }

					// 打开addBox
					this.isShowAddFriendBox = !this.isShowAddFriendBox;
				}).catch(err => {
					console.log("得到用户信息失败", err)
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.block {
		height: 150rpx;

		.icon {
			width: 40rpx;
			height: 40rpx;
			background-color: #FFFFFF;
			float: left;
			display: inline-block;
			margin-top: 20rpx;
			margin-left: 40rpx;
			margin-right: 0rpx;
			display: inline;
			float: left;
		}


		.title {
			color: #343434;
			font-size: 30rpx;
			display: inline;
			margin-top: 20rpx;
			margin-left: 20rpx;
			float: left;
		}

		.line {
			height: 80rpx;
			font-weight: bold;
			width: 667rpx;
			float: left;
			margin-left: 40rpx;
			margin-top: 10rpx;
			font-size: 150%;

			.vector {
				width: 380rpx;
				height: 50rpx;
				margin-left: 65rpx;
			}
		}
	}

	$width: 660rpx;

	.inputWrap {
		$height: 80rpx;
		$imgheight: 60rpx;
		height: $height;
		width: $width;

		position: relative;
		left: 50%;
		transform: translateX(-50%);
		margin-bottom: 30rpx;

		display: flex;
		justify-content: space-between;
		align-items: center;

		.email {
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

		.input {
			height: $height;
			width: $width - $imgheight - 20rpx;


			box-sizing: border-box;

			position: relative;
			border: 5rpx solid black;
			border-radius: 20rpx;

			font-size: 90%;

			display: flex;
			align-items: center;
			padding: 0 20rpx;


			.text {
				height: 70rpx;
				width: $width - $imgheight;
				font-size: 90%;
			}

			.button {
				width: 120rpx;
				height: $height * 0.8;
				line-height: $height * 0.8;
				box-sizing: border-box;

				position: absolute;
				right: 10rpx;

				background-color: #343434;
				color: #FFFFFF;
				border: 2rpx solid black;
				border-radius: 15rpx;
				font-size: 26rpx;
				padding: 0;
				z-index: 2;
			}
		}


	}

	.list {
		width: $width ;
		min-height: 900rpx;

		position: relative;
		left: 50%;
		transform: translateX(-50%);

		border: 5rpx solid black;

		border-radius: 20rpx;


		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20rpx 0 0;
		margin-bottom: 20rpx;

		.item {
			$height: 80rpx;
			width: 85%;
			border-bottom: 5rpx solid #3d3d3d;
			padding: 0 20rpx;
			display: flex;
			align-items: center;
			margin-bottom: 10rpx;

			&:last-child {
				margin-bottom: 30vh;
			}

			.head {
				$size: 80rpx;
				height: $size;
				width: $size;
				position: relative;
				border-radius: 50%;
			}

			.name {
				height: $height;
				line-height: $height;

				position: absolute;
				left: 50%;
				transform: translateX(-50%);

			}
		}
	}

	.grayblock {
		position: absolute;
		z-index: 1000;
		background-color: rgba(128, 128, 128, 0.8);
		opacity: 0.8;
		height: 100%;
		width: 100%;
		margin-top: -141.5%;
	}

	.changeheadblock {
		height: 550;
		width: 450;
		position: absolute;
		border: 5 solid white;
		border-radius: 20rpx;
		z-index: 1005;
		margin-top: -900rpx;
		margin-left: 80rpx;
		background-color: rgba(256, 256, 256, 1);
		padding: 30rpx;

		.head {
			height: 200rpx;
			width: 200rpx;
			position: relative;
			z-index: 1007;
			margin: 20rpx 130rpx 0rpx 160rpx;
		}

		;

		.name {
			font-weight: bold;
			font-size: 150%;
			margin: 10rpx 50rpx 10rpx 185rpx;
		}

		.number {
			font-size: 50%;
			color: rgb(120, 120, 120);
			opacity: 0.5;
			margin: 10rpx 50rpx 10rpx 170rpx;
		}

		;

		.choose {
			font-size: 40%;
			color: rgb(120, 120, 120);
			opacity: 0.5;
			margin: 10rpx 50rpx 10rpx 220rpx;
		}

		;

		.close {
			height: 30rpx;
			width: 30rpx;
			float: right;
		}

		;

		.btn1 {
			border: 5rpx solid black;
			border-radius: 20rpx;
			background-color: #343434;
			color: #FFFFFF;
			font-size: 80%;
			padding: 10rpx 40rpx 10rpx 40rpx;
			text-align: center;
			height: 40rpx;
			width: 180rpx;
			display: inline;
			margin: 40rpx 30rpx 60rpx 60rpx;
		}

		;

		.btn {
			border: 5rpx solid black;
			border-radius: 20rpx;
			background-color: #343434;
			color: #FFFFFF;
			font-size: 80%;
			padding: 10rpx 40rpx 10rpx 40rpx;
			text-align: center;
			height: 40rpx;
			width: 180rpx;
			display: inline;
			margin: 40rpx 30rpx 60rpx 200rpx;
		}

		.btn2 {
			display: inline;
			border: 5rpx solid black;
			border-radius: 20rpx;
			background-color: white;
			color: black;
			font-size: 80%;
			padding: 10rpx 60rpx 10rpx 60rpx;
			text-align: center;
			height: 40rpx;
			width: 180rpx;
			margin: 40rpx 40rpx 60rpx 30rpx;
		}

		;

		.biggroup {
			margin: 20rpx 0rpx 40rpx 85rpx;

			.group {
				border: 5rpx solid black;
				border-radius: 15rpx;
				background-color: white;
				font-size: 40%;
				padding: 10rpx;
				text-align: center;
				height: 100rpx;
				width: 150rpx;
				display: inline;
				opacity: 0.2;
				font-size: 40%;
				color: rgb(120, 120, 120);
				margin: 10rpx 40rpx 20rpx 0rpx;
			}

			;

			.group_active {
				border: 5rpx solid black;
				border-radius: 15rpx;
				background-color: white;
				font-size: 40%;
				font-weight: bold;
				padding: 10rpx;
				text-align: center;
				height: 100rpx;
				width: 150rpx;
				font-size: 40%;
				display: inline;
				color: black;
				margin: 10rpx 40rpx 20rpx 0rpx;
			}
		}

		clear: both;
	}
</style>