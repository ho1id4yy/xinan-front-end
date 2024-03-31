<template>
	<view>
		<head-bar :content="title"></head-bar>
		<view class="addConutBox">
			<view class="addConut" @click="showAddBox">添加愿望</view>
			<view class="editCound" @click="isInDelite">{{deleteMsg}}</view>
		</view>
		<view class="wishBody">
			<checkbox-group name="" @change="checkboxChange">
				<view class="itemWrap" v-for="(item,idx) in whishList">
					<label>
						<checkbox color="#000" :value="item.value" :checked="item.checked" />
					</label>
					<text @click="deleteItem(idx)">{{item.name}}</text>
				</view>
				<view class="bottom">
				</view>
			</checkbox-group>
		</view>
		<addBox v-if="isShowAddBox"></addBox>
		<buttom-bar :buttombar="buttombar"></buttom-bar>
	</view>
</template>
<script>
	import addBox from './compoents/addBox.vue';
	export default {
		components: {
			addBox
		},
		data() {
			return {
				isShowAddBox: false,
				deleteMsg: "删除愿望",
				isInDelete: false,
				title: "我的愿望清单",
				buttombar: {
					active: 0,
					imglist: [
						'/static/icon/first_black.png',
						'/static/icon/second_white.png',
						'/static/icon/third_white.png',
						'/static/icon/Group_white.png'
					]
				},
				whishList: [{
						value: "养狗2",
						name: "养狗2",
						checked: false
					},
					{
						value: "养狗212",
						name: "养狗212",
						checked: false
					},
					{
						value: "养狗122",
						name: "养狗122",
						checked: false
					},
					{
						value: "养狗12",
						name: "养狗12",
						checked: false
					},
				]
			};
		},
		onLoad() {
			uni.$on('closeAddBox', () => {
				this.isShowAddBox = !this.isShowAddBox
			})
			uni.$on('addWishItem', value => {
				uni.showToast({
					title: '添加成功',
					icon: 'success',
					duration: 1500
				})
				this.whishList.push({
					name: value,
					value: value,
					checked: false
				})
				this.isShowAddBox = !this.isShowAddBox
			})
		},
		onUnload() {
			uni.$off();
		},
		methods: {
			showAddBox() {
				this.isShowAddBox = !this.isShowAddBox
			},
			checkboxChange(e) {
				for (let i = 0; i < this.whishList.length; i++) {
					if (e.detail.value.includes(this.whishList[i].value)) {
						this.whishList[i].checked = true;
					} else {
						this.whishList[i].checked = false;
					}
				}
			},
			isInDelite() {
				this.deleteMsg = (this.deleteMsg == "删除愿望" ? "取消编辑" : "删除愿望");
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
								this.whishList.splice(idx, 1);
							} else {}
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.addConutBox {
		$height: 60rpx;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		top: 180rpx;
		margin-top: 20rpx;
		height: $height;
		width: 80%;
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

	.wishBody {
		position: relative;
		top: 240rpx;
		margin-top: 20rpx;
		width: 80%;
		padding: 0rpx 40rpx;
		margin: 0rpx auto;
		box-sizing: border-box;
		background-color: #f5f5f5;
		border-radius: 20rpx;
		border: 5rpx solid #000;

		.bottom {
			height: 30vh;
		}

		.itemWrap {
			margin-bottom: 20rpx;
			height: 100rpx;
			display: flex;
			align-items: center;

			text {
				margin-left: 20rpx;
			}

		}

	}
</style>