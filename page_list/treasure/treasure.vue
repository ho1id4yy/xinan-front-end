<template>
	<view>
		<head-bar :content="title"></head-bar>

		<view class="body">
			<view class="treasureItem" v-for="(item,idx) in treasureItemList" @click="openEditBox">
				<treasureItem :treasureItemDetail="item" :idx="idx"></treasureItem>
			</view>
		</view>
		<view class="trasureButtom">
		</view>
		<view class="showAdd" @click='showAdd'>+</view>
		<addTreasure v-if="isShowDiabox"></addTreasure>
		<editTreasureVue v-if="isShowEditBox"></editTreasureVue>
		<buttom-bar :buttombar="buttombar"></buttom-bar>
	</view>
</template>


<script>
	import treasureItem from './compoents/treasureItem.vue';
	import addTreasure from './compoents/addTreasure.vue';
	import editTreasureVue from './compoents/editTreasure.vue';
	export default {
		components: {
			treasureItem,
			addTreasure,
			editTreasureVue
		},
		computed: {},
		data() {
			return {
				isShowDiabox: false,
				isShowEditBox: false,
				whichEditBox: 0,
				title: "珍宝收藏馆",
				buttombar: {
					active: 0,
					imglist: [
						'/static/icon/first_black.png',
						'/static/icon/second_white.png',
						'/static/icon/third_white.png',
						'/static/icon/Group_white.png'
					]
				},
				treasureItemList: [{
						img: '/static/picture/tuzi.png',
						text: "兔子玩偶1"
					},
					{
						img: '/static/picture/tuzi.png',
						text: "兔子玩偶2"
					},
					{
						img: '/static/picture/tuzi.png',
						text: "兔子玩偶3"
					},
					{
						img: '/static/picture/tuzi.png',
						text: "兔子玩偶4"
					},
					{
						img: '/static/picture/tuzi.png',
						text: "兔子玩偶5"
					},
					{
						img: '/static/picture/tuzi.png',
						text: "兔子玩偶6"
					}
				]
			}
		},
		mounted() {

		},
		onLoad() {
			uni.$on('deleteTreasure', async () => {
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
							this.treasureItemList.splice(this.whichEditBox, 1)
							this.isShowEditBox = !this.isShowEditBox
						} else {}
					}
				})
			})
			uni.$on('editTreasure', res => {
				this.treasureItemList.splice(this.whichEditBox, 1, res)
				this.isShowEditBox = !this.isShowEditBox
				uni.showToast({
					title: '成功修改',
					icon: 'success',
					duration: 1500
				})
			})
			uni.$on('closeEditBox', () => {
				this.isShowEditBox = !this.isShowEditBox
			})
			uni.$on('openEditBox', (idx) => {
				this.whichEditBox = idx;
				this.isShowEditBox = !this.isShowEditBox
			})
			uni.$on('closeBox', res => {
				this.isShowDiabox = (this.isShowDiabox ? false : true);
			})
			uni.$on('sendmsg', res => {
				this.isShowDiabox = res.close
				this.treasureItemList.push(res.treasureItem)
			})
		},
		onUnload() {
			uni.$off()
		},
		methods: {
			showAdd() {
				this.isShowDiabox = (this.isShowDiabox ? false : true);
			},
		}
	}
</script>

<style lang="scss">
	.body {
		width: 100%;
		position: relative;
		top: 180rpx;
		margin-top: 20rpx;
		display: flex;
		flex-wrap: wrap;
	}

	.trasureButtom {
		height: 400rpx;
		width: 100%;
	}

	.showAdd {
		box-sizing: border-box;
		$size: 100rpx;
		overflow: hidden;
		height: $size;
		width: $size;
		background-color: #343434ee;
		position: fixed;
		z-index: 999;
		padding: 0px;
		bottom: 15%;
		right: 5%;
		border-radius: 50%;
		font-size: $size;
		font-weight: 400;
		color: #fff;
		text-align: center;
		line-height: $size - 10rpx;
	}

	.boxmarsk {
		height: 100vh;
		width: 100%;
		background-color: #343434bd;
		position: fixed;
		top: 0px;
		left: 0px;
		z-index: 1000;
	}
</style>