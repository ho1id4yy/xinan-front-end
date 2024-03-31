<template>
	<view>
		<head-bar :content="title"></head-bar>
		<view class="addConutBox">
			<view class="addAcountWrap" @click="showbox">
				<view class="addConut">添加密码</view>
				<view class="dotted" v-if="isShowDots"></view>
			</view>
			<view class="editCound" @click="isInDelite">{{deleteMsg}}</view>
		</view>
		<view class="passwordBody">
			<view class="item" v-for="(item,idx) in countList" @click="deleteAcount(idx)">
				<countItem :CountDetail="item" :idx="idx"></countItem>
			</view>
			<view class="buttom"></view>
		</view>
		<addcountbox v-if="isShowAddCount" :isShowDots="isShowDots"></addcountbox>
		<getCount v-if="isShowGetCount" :msgSend="sendedAcount[0]"></getCount>
		<sendAccountVue v-if="isShowSendBox" :msgSend="SendMsg"></sendAccountVue>
		<editAccoluntVue v-if="isShowDetailBox" :CountDetail="DetailMsg"></editAccoluntVue>
		<buttom-bar :buttombar="buttombar"></buttom-bar>
	</view>
</template>

<script>
	import countItem from './compoents/countItem.vue';
	import addcountbox from './compoents/addcountbox.vue';
	import getCount from './compoents/getCount.vue';
	import sendAccountVue from './compoents/sendAccount.vue';
	import editAccoluntVue from './compoents/editAccolunt.vue';
	export default {
		components: {
			countItem,
			addcountbox,
			getCount,
			sendAccountVue,
			editAccoluntVue
		},
		data() {
			return {
				isShowAddCount: false,
				isShowGetCount: false,
				isShowSendBox: false,
				isShowDetailBox: false,
				UserDate: {
					id: "9876543111",
					img: "/static/picture/headImg.png",
					name: '心小安123',
				},
				deleteMsg: "删除密码",
				isDeleted: false,
				sendWhichAccount: 0,
				whichDetailBox: 0,
				title: "密码柜管理",
				buttombar: {
					active: 0,
					imglist: [
						'/static/icon/first_black.png',
						'/static/icon/second_white.png',
						'/static/icon/third_white.png',
						'/static/icon/Group_white.png'
					]
				},
				countList: [{
						appName: "QQ",
						appIcon: "/static/picture/QQ.png",
						userCount: "a",
						userPassword: "d"
					},
					{
						appName: "QQ",
						appIcon: "/static/picture/QQ.png",
						userCount: "",
						userPassword: ""
					},
					{
						appName: "QQ",
						appIcon: "/static/picture/QQ.png",
						userCount: "",
						userPassword: ""
					}
				],
				sendedAcount: [{
						senderImg: "../../../static/picture/headImg.png",
						senderName: '心小安',
						CountDetail: {
							appName: "QQ",
							appIcon: "/static/picture/QQ.png",
							userCount: "ads",
							userPassword: "1234sd56789"
						}
					},
					{
						senderImg: "../../../static/picture/headImg.png",
						senderName: '心小安',
						CountDetail: {
							appName: "QQ",
							appIcon: "/static/picture/QQ.png",
							userCount: "123456",
							userPassword: "asd123456789"
						}
					},
					{
						senderImg: "../../../static/picture/headImg.png",
						senderName: '心小安',
						CountDetail: {
							appName: "QQ",
							appIcon: "/static/picture/QQ.png",
							userCount: "12345ad6",
							userPassword: "12345d6789"
						}
					},
					{
						senderImg: "../../../static/picture/headImg.png",
						senderName: '心小安',
						CountDetail: {
							appName: "QQ",
							appIcon: "/static/picture/QQ.png",
							userCount: "123456",
							userPassword: "123456789"
						}
					}
				]
			};
		},
		computed: {
			isShowDots() {
				if (this.sendedAcount.length) {
					return true
				} else {
					return false
				}
			},
			SendMsg() {
				return {
					whoGet: {
						id: "123456789",
						img: "../../../static/picture/headImg.png",
						name: "心小安得到",
					},
					whoSend: this.UserDate,
					CountDetail: this.countList[this.sendWhichAccount]
				}
			},
			DetailMsg() {
				return this.countList[this.whichDetailBox]
			}
		},
		methods: {
			showbox() {
				this.isShowAddCount = (this.isShowAddCount ? false : true);
			},
			isInDelite() {
				this.isDeleted = !this.isDeleted;
				this.deleteMsg = (this.deleteMsg == "删除密码" ? "取消编辑" : "删除密码")
			},
			async deleteAcount(idx) {
				if (this.isDeleted) {
					await uni.showModal({
						title: "确认删除",
						content: "删除后不可恢复，请仔细思考",
						success: (res) => {
							if (res.confirm) {
								console.log("shanle", this)
								this.countList.splice(idx, 1)
							} else {

							}
						}
					})
				}
			},
		},
		onLoad() {
			uni.$on('editAccount', (res) => {
				this.countList.splice(this.whichDetailBox, 1, res)
				this.isShowDetailBox = !this.isShowDetailBox;
			})
			uni.$on('closeDetailBox', () => {
				this.isShowDetailBox = !this.isShowDetailBox;
			})
			uni.$on('openDetailBox', (res) => {
				this.isShowDetailBox = !this.isShowDetailBox;
				this.whichDetailBox = res;
			})
			uni.$on('changeSendBox', (res) => {
				console.log(res)
				this.sendWhichAccount = res
				this.isShowSendBox = !this.isShowSendBox
			})
			uni.$on('sendAccount', () => {
				this.countList.splice(this.sendWhichAccount, 1)
				this.isShowSendBox = !this.isShowSendBox
				// 发送请求,谁送的（id），送的内容
			})
			uni.$on('closeAddbox', () => {
				this.isShowAddCount = (this.isShowAddCount ? false : true);
			})
			uni.$on('sendAddedAcount', res => {
				uni.showToast({
					title: '添加成功',
					icon: 'success',
					duration: 1500
				})
				this.countList.push(res)
			})
			uni.$on('openGetBox', () => {
				if (this.sendedAcount.length) {
					this.isShowGetCount = !this.isShowGetCount
					this.isShowAddCount = false;
				}
			})
			uni.$on('rejectAcount', async () => {
				await uni.showModal({
					title: "确认删除",
					content: "删除后不可恢复，请仔细思考",
					success: (res) => {
						if (res.confirm) {
							uni.showToast({
								title: '删除成功',
								icon: 'success',
								duration: 1500
							})
							this.sendedAcount.shift()
							if (!this.sendedAcount.length) {
								this.isShowGetCount = !this.isShowGetCount
							}
						} else {}
					}
				})
			})
			uni.$on('acceptAcount', () => {
				uni.showToast({
					title: '添加成功',
					icon: 'success',
					duration: 1500
				})
				this.countList.push(this.sendedAcount[0].CountDetail)
				this.sendedAcount.shift()
				if (!this.sendedAcount.length) {
					this.isShowGetCount = !this.isShowGetCount
				}
			})
		},
		onUnload() {
			uni.$off()
		}
	}
</script>

<style lang="scss" scoped>
	.addConutBox {
		$height: 60rpx;
		$height: 60rpx;
		position: relative;
		top: 180rpx;
		margin-top: 20rpx;
		height: $height;
		display: flex;
		justify-content: space-around;
		align-items: center;


		&>view {
			color: #fff;
			background-color: #343434;
			border: 4rpx solid #343434;

			box-sizing: border-box;
			padding: 0px;
			height: $height;
			width: 45%;
			line-heihgt: $height;
			border-radius: 14rpx;
			text-align: center;
		}

		.addAcountWrap {
			position: relative;


			.dotted {
				content: '';
				display: inline-block;
				$dotsize: 20rpx;
				height: $dotsize;
				width: $dotsize;
				background-color: #ff7c7c;
				border-radius: 50%;
				position: absolute;
				top: - $dotsize/2;
				right: - $dotsize/2;
				z-index: 1;
			}
		}


		.editCound {
			color: #000;
			background-color: #fff;
			border: 4rpx solid #343434;
		}
	}

	.passwordBody {
		position: relative;
		margin-top: 250rpx;

		.buttom {
			width: 100%;
			height: 30vh;
		}
	}
</style>