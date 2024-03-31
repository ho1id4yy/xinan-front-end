<template>
	<view>
		<head-bar :content="title"></head-bar>
		<view class="wishBody">
			<view class="addConutBox">
				<view class="addConut" @click="showAddBox">添加项目</view>
				<view class="editCound" @click="isInDelite">{{deleteMsg}}</view>
			</view>
			<view class="wishContent">
				<view class="wishItem" v-for="(item,idx ) in socialDetail" @click="deleteItem(idx)">
					<Item :appMsg="item" :idx="idx"></Item>
				</view>
				<view class="bottom"></view>
			</view>
		</view>
		<addBox v-if="isShowAddBox"></addBox>
		<editimgVue v-if="isShowEdit"></editimgVue>
		<buttom-bar :buttombar="buttombar"></buttom-bar>
	</view>
</template>
<script>
	import addBox from './compoents/addBox.vue';
	import Item from './compoents/Item.vue';
	import editimgVue from './compoents/editimg.vue';
	export default {
		components: {
			addBox,
			Item,
			editimgVue
		},
		data() {
			return {
				whichEditBox: 0,
				isShowEdit: false,
				isShowAddBox: false,
				deleteMsg: "删除项目",
				isInDelete: false,
				title: "社交平台管理",
				buttombar: {
					active: 0,
					imglist: [
						'/static/icon/first_black.png',
						'/static/icon/second_white.png',
						'/static/icon/third_white.png',
						'/static/icon/Group_white.png'
					]
				},
				appIcon: [{
						name: 'QQ',
						img: '/static/picture/QQ.png',
					},
					{
						name: '微信',
						img: '/static/picture/wx.png',
					},
					{
						name: '小红书',
						img: '/static/picture/xhs.png',
					},
					{
						name: '微博',
						img: '/static/picture/blog.png',
					},
					{
						name: 'BiliBili',
						img: '/static/picture/bilibili.png',
					},
					{
						name: '默认',
						img: '/static/picture/defalt.png',
					}
				],
				socialDetail: [{
						name: 'QQ',
						img: '/static/picture/QQ.png',
						status: 0
					},
					{
						name: '微信',
						img: '/static/picture/wx.png',
						status: 1
					},
					{
						name: '小红书',
						img: '/static/picture/xhs.png',
						status: 2
					},
					{
						name: '微博',
						img: '/static/picture/blog.png',
						status: -1
					},
					{
						name: 'BiliBili',
						img: '/static/picture/bilibili.png',
						status: -1
					},
					{
						name: '默认',
						img: '/static/picture/defalt.png',
						status: -1
					}
				]

			}
		},
		onLoad() {
			uni.$on('editItem',res=>{
				this.socialDetail.splice(this.whichEditBox,1,res)
				this.isShowEdit = !this.isShowEdit
			})
			uni.$on('openEditBox', (idx) => {
				this.whichEditBox = idx
				this.isShowEdit = !this.isShowEdit
			})
			uni.$on('closeEditBox', () => {
				this.isShowEdit = !this.isShowEdit
			})
			uni.$on('closeAddBox', () => {
				this.isShowAddBox = !this.isShowAddBox
			})
			uni.$on('addItem', res => {
				uni.showToast({
					title: '添加成功',
					icon: 'success',
					duration: 1500
				})
				this.socialDetail.push({
					name: res.name,
					img: res.img,
					status: res.status
				})
				this.isShowAddBox = !this.isShowAddBox
			})
		},
		onUnload() {
			uni.$off();
		},
		methods: {
			openEditBox() {
				this.isShowEdit = !this.isShowEdit
			},
			showAddBox() {
				this.isShowAddBox = !this.isShowAddBox
			},
			isInDelite() {
				this.deleteMsg = (this.deleteMsg == "删除项目" ? "取消编辑" : "删除项目");
				this.isInDelete = !this.isInDelete;
			},
			async deleteItem(idx) {
				if (this.isInDelete) {
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
								this.socialDetail.splice(idx, 1);
							} else {}
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.wishBody {
		position: relative;
		top: 180rpx;
		margin-top: 20rpx;
		width: 90%;
		padding: 0rpx 40rpx;
		margin: 0rpx auto;
		box-sizing: border-box;

		.addConutBox {
			$height: 60rpx;
			position: relative;
			left: 50%;
			transform: translateX(-50%);
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

			.addConut {
				position: relative;
			}


			.editCound {
				color: #000;
				background-color: #fff;
				border: 4rpx solid #343434;
			}
		}

		.wishContent {
			position: relative;
			width: 100%;
			margin-top: 20rpx;

			.wishItem {
				margin-bottom: 30rpx;
			}

			.bottom {
				height: 30vh;
			}
		}

	}
</style>