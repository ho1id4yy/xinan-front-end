<template>
	<view>
		<head-bar :content="title"></head-bar>
		<view class="addConutBox">
			<view class="addAcountWrap" @click="showAddBox">
				<view class="addConut">添加宠物</view>
				<view class="dotted" v-if="isShowDots"></view>
			</view>
		</view>
		<view class="passwordBody">
			<view class="item" v-for="(item,idx) in petList" @click="deletePet(idx)">
				<petItem :petDetail="item" :idx="idx"></petItem>
			</view>
			<view class="buttom"></view>
		</view>
		<addPetBox v-if="isShowAddBox" :isShowDots="isShowDots"></addPetBox>
		<getPetBox v-if="isShowgetGetBox" :msgSend="GetPet[0]"></getPetBox>
		<sendPetBox v-if="isShowSendBox" :msgSend="SendMsg"></sendPetBox>
		<editAccoluntVue v-if="isShowDetailBox" :petDetail="DetailMsg"></editAccoluntVue>
		<buttom-bar :buttombar="buttombar"></buttom-bar>
	</view>
</template>

<script>
	import petItem from './compoents/petItem.vue';
	import addPetBox from './compoents/addPetBox.vue';
	import getPetBox from './compoents/getPetBox.vue';
	import sendPetBox from './compoents/sendAccount.vue';
	import editAccoluntVue from './compoents/editAccolunt.vue';
	export default {
		components: {
			petItem,
			addPetBox,
			getPetBox,
			sendPetBox,
			editAccoluntVue
		},
		data() {
			return {
				isShowAddBox: false,
				isShowgetGetBox: false,
				isShowSendBox: false,
				isShowDetailBox: false,
				UserDate: {
					id: "9876543111",
					img: "/static/picture/headImg.png",
					name: '心小安123',
				},
				isDeleted: false,
				sendWhichAccount: 0,
				whichDetailBox: 0,
				title: "宠物柜管理",
				buttombar: {
					active: 0,
					imglist: [
						'/static/icon/first_black.png',
						'/static/icon/second_white.png',
						'/static/icon/third_white.png',
						'/static/icon/Group_white.png'
					]
				},
				petList: [{
					name: "大黄",
					img: '/static/picture/dog.png'
				}],
				GetPet: [{
						senderImg: "../../../static/picture/headImg.png",
						senderName: '心小安',
						petDetail: {
							name: "大s黄",
							img: '/static/picture/dog.png'
						}
					},
					{
						senderImg: "../../../static/picture/headImg.png",
						senderName: '心小安',
						petDetail: {
							name: "大黄a",
							img: '/static/picture/dog.png'
						}
					},
					{
						senderImg: "../../../static/picture/headImg.png",
						senderName: '心小安',
						petDetail: {
							name: "大黄sa",
							img: '/static/picture/dog.png'
						}
					},
					{
						senderImg: "../../../static/picture/headImg.png",
						senderName: '心小安',
						petDetail: {
							name: "大a黄a",
							img: '/static/picture/dog.png'
						}
					}
				]
			};
		},
		computed: {
			isShowDots() {
				if (this.GetPet.length) {
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
					petDetail: this.petList[this.sendWhichAccount]
				}
			},
			DetailMsg() {
				return this.petList[this.whichDetailBox]
			}
		},
		methods: {
			showAddBox() {
				this.isShowAddBox = (this.isShowAddBox ? false : true);
			},
		},
		onLoad() {
			uni.$on('deletePet', () => {
				this.petList.splice(this.whichDetailBox, 1)
				this.isShowDetailBox = !this.isShowDetailBox;
			})
			uni.$on('editPet', (res) => {
				this.petList.splice(this.whichDetailBox, 1, res)
				this.isShowDetailBox = !this.isShowDetailBox;
			})
			uni.$on('closeDetailBox', () => {
				this.isShowDetailBox = !this.isShowDetailBox;
			})
			uni.$on('openDetailBox', (idx) => {
				this.isShowDetailBox = !this.isShowDetailBox;
				this.whichDetailBox = idx;
			})
			uni.$on('openSendBox', (idx) => {
				this.sendWhichAccount = idx
				this.isShowSendBox = !this.isShowSendBox
			})
			uni.$on('closeSendBox', () => {
				this.isShowSendBox = !this.isShowSendBox
			})
			uni.$on('sendAccount', () => {
				this.petList.splice(this.sendWhichAccount, 1)
				this.isShowSendBox = !this.isShowSendBox
				// 发送请求,谁送的（id），送的内容
			})
			uni.$on('closeAddBox', () => {
				this.isShowAddBox = (this.isShowAddBox ? false : true);
			})
			uni.$on('addPet', (res) => {
				this.petList.push(res)
				this.isShowAddBox = (this.isShowAddBox ? false : true);
			})
			uni.$on('sendAddedAcount', res => {
				this.petList.push(res)
			})
			uni.$on('openGetBox', res => {
				if (this.GetPet.length) {
					this.isShowgetGetBox = !this.isShowgetGetBox
					this.isShowAddBox = false;
				}
			})
			uni.$on('rejectPet', async () => {
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
							this.GetPet.shift()
							if (!this.GetPet.length) {
								this.isShowgetGetBox = !this.isShowgetGetBox
							}
						} else {}
					}
				})
			})
			uni.$on('acceptPet', () => {
				this.petList.push(this.GetPet[0].petDetail)
				this.GetPet.shift()
				if (!this.GetPet.length) {
					this.isShowgetGetBox = !this.isShowgetGetBox
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
			width: 60%;
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
	}

	.passwordBody {
		position: relative;
		margin-top: 250rpx;
		display: flex;
		flex-wrap: wrap;

		.buttom {
			width: 100%;
			height: 30vh;
		}
	}
</style>