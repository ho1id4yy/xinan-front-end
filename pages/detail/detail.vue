<template>
	<view>
		<view class='block'>
			<image class='icon' src='../../static/icon/second_black.png' />
			<view class="title">服务</view>
			<view class='line'>
				流程细则
				<image class='vector' src='../../static/icon/Vector 11.png'></image>
			</view>
		</view>
		<view class='process'>
			<view class='die'>
				{{process.name}}
			</view>
			<view class='small'>
				{{process.illustrate}}
			</view>
		</view>
		<!-- 有就显示这个 -->
		<view class='something' :style="{alignItems:isInOrder?'end':'center'}"
			v-if="process.detail&&process.detail.length">
			<checkbox-group class='rectangle' :style="{width:isInOrder?'90%':'95%'}"
				v-for="(item,idx) in process.detail" @click="editDetail(idx)" @longpress="editOrder" :key="idx">
				<view class='box'>
					<view class='index'>
						{{idx<10?'0'+idx:idx}}
					</view>
					<view class='title'>
						{{item.title}}
					</view>
				</view>
				<view class='exp'>
					{{item.content}}
				</view>
				<checkbox class="drag" v-if="isInOrder" />
			</checkbox-group>

			<view style="height: 30vh;width:100%;">
			</view>
		</view>
		<!-- 没有就显示这个 -->
		<view class='something' v-else>

			<view class='rectangle'>
				<view class='box'>
					<view class='index'>
						01
					</view>
					<view class='title'>

					</view>
				</view>
				<view class='exp'>

				</view>
			</view>
		</view>
		<!-- 按钮，显示添加框 -->
		<editBox v-if="isShowEditDetailBox" :detail="editDetailMsg"></editBox>
		<addBox v-if="isShowAddDetailBox"></addBox>
		<image class="edit" @click="addDetail" src="../../static/icon/Component 43.png" mode="aspectFit"></image>
		<buttom-bar :buttombar="buttombar"></buttom-bar>
	</view>
</template>

<script>
	import addBox from './compoents/addBox.vue';
	import editBox from './compoents/editBox.vue';
	import {
		getUserProcess,
		addProcessDetail,
		changeProcessDetail,
		deleteProcessDetail
	} from '../../util/severApi.js'
	export default {
		components: {
			addBox,
			editBox
		},
		data() {
			return {
				isInOrder: false,
				isShowEditDetailBox: false,
				editDetailMsg: {},
				editDetailIdx: 0,
				isShowAddDetailBox: false,
				buttombar: {
					active: 1,
					imglist: [
						'/static/icon/first_white.png',
						'/static/icon/second_black.png',
						'/static/icon/third_white.png',
						'/static/icon/Group_white.png'
					]
				},
				process: {},
				processIndx: 0,
			};
		},
		onUnload() {
			uni.$off()
		},
		onLoad(option) {
			this.processIndx = option.processIndx
			getUserProcess().then(res => {
				this.process = res.data[this.processIndx];
				console.log("获取流程成功", res)
			}).catch(err => {
				console.log("获取流程失败", err)
			})
			// ////////////AddBox
			uni.$on('closeAddBox', () => {
				this.isShowAddDetailBox = !this.isShowAddDetailBox;
			})
			uni.$on('addDetail', (title, content) => {
				addProcessDetail({
					processId: this.process.id,
					title,
					content
				}).then(res => {
					this.process.detail.push({
						processId: this.process.length + 1,
						content,
						title,
						id: this.process.id
					})
					this.isShowAddDetailBox = !this.isShowAddDetailBox;
					console.log("增加流程细则成功", res)
				}).catch(err => {
					console.log("增加流程细则失败", err)
				})
			})
			// ////////////EditBox
			uni.$on('closeEditBox', () => {
				this.isShowEditDetailBox = !this.isShowEditDetailBox;
			})
			uni.$on('editDetail', (newDetail) => {
				changeProcessDetail(newDetail).then(res => {
					this.process.detail.splice(this.editDetailIdx, 1, newDetail)
					this.isShowEditDetailBox = !this.isShowEditDetailBox;
					console.log("编辑成功", res)
				}).catch(err => {
					console.log("编辑失败", err)
				})
			})
			uni.$on('deleteDetail', (id) => {
				deleteProcessDetail([id]).then(res => {
					this.isShowEditDetailBox = !this.isShowEditDetailBox;
					this.process.detail.splice(this.editDetailIdx, 1)
					console.log("删除成功", res)
				}).catch(err => {
					console.log("删除失败", err)
				})

			})
		},
		methods: {
			editOrder() {
				this.isInOrder = true;
			},
			addDetail() {
				this.isShowAddDetailBox = !this.isShowAddDetailBox;
			},
			editDetail(idx) {
				if (this.isInOrder) {
					return;
				}
				// 编辑detail
				this.editDetailMsg = this.process.detail[idx];
				this.editDetailIdx = idx;
				this.isShowEditDetailBox = !this.isShowEditDetailBox;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.edit {
		$size: 60rpx;
		height: $size;
		width: $size;
		position: fixed;
		bottom: 15%;
		right: 5%;
		border-radius: 50%;

	}

	.block {
		height: 140rpx;

		.icon {
			width: 30rpx;
			height: 30rpx;
			background-color: #FFFFFF;
			float: left;
			display: inline-block;
			margin-top: 25rpx;
			margin-left: 60rpx;
			margin-right: 0rpx;
			display: inline;
			float: left;
		}

		;

		.title {
			color: #343434;
			font-size: 30rpx;
			display: inline;
			margin-top: 20rpx;
			margin-left: 20rpx;
			float: left;
		}

		;

		.line {
			height: 80rpx;
			font-weight: bold;
			width: 667rpx;
			float: left;
			margin-left: 60rpx;
			margin-top: 10rpx;
			font-size: 150%;

			.vector {
				width: 400rpx;
				height: 50rpx;
				float: right;
			}
		}

		clear: both;
	}

	.process {
		width: 500rpx;
		margin: 20rpx 100rpx 20rpx 95rpx;
		border: 5rpx solid black;
		border-radius: 20rpx;
		padding: 30rpx;

		.die {
			color: #343434;
			font-weight: bold;
			font-size: 120%
		}

		.small {
			color: #343434;
			font-size: 30%;
		}
	}

	.something {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		.rectangle {
			box-sizing: border-box;
			width: 80%;
			padding-left: 15rpx;
			padding-bottom: 15rpx;

			margin: 0 0 20rpx 0;
			position: relative;

			border: 5rpx solid black;
			background-color: #F5F5F5;
			border-radius: 20rpx;

			transition: all .5s;

			.box {
				height: 40rpx;

				.index {
					color: #343434;
					width: 50rpx;
					font-weight: bold;
					font-size: 180%;
					display: inline;
					margin-right: 20rpx;
				}

				.title {
					color: #343434;
					display: inline;
				}
			}

			.exp {
				margin-top: 40rpx;
				font-size: 50%;
				margin-left: 95rpx;
			}

			.drag {

				$size: 50rpx;
				height: $size;
				width: $size;
				position: absolute;
				top: 50%;
				right: -$size;
				transform: translate(10rpx, -50%)
			}
		}
	}

	;

	.bottombar {
		width: 700rpx;
		margin: 0rpx 20rpx 20rpx 25rpx;
		border: 5rpx solid black;
		box-sizing: border-box;
		border-radius: 60rpx;
		height: 120rpx;
		z-index: 100;
		background-color: #FFFFFF;
		position: absolute;

		.block {
			border: 5rpx solid black;
			border-radius: 50rpx;
			height: 70rpx;
			width: 140rpx;
			display: inline-block;
			position: absolute;
			margin: 15rpx 0rpx 0rpx 185rpx;
		}

		.label {
			height: 40rpx;
			width: 40rpx;
			display: inline-block;
			margin-right: 85rpx;
			margin-left: 40rpx;
			margin-top: 35rpx;
			float: right;
		}
	}
</style>
