<template>
	<view>
		<!-- 头部 -->
		<view class='block'>
			<image class='icon' src='../../static/icon/second_black.png' />
			<view class="title">服务</view>
			<view class='line'>
				流程细则
				<image class='vector' src='../../static/icon/Vector 11.png'></image>
			</view>
		</view>
		<!-- 按钮 -->
		<view class="buttonBar">
			<button class="add">添加流程</button>
			<button class="edit">批量管理</button>
		</view>
		<view class='something' v-if="process.detail&&process.detail.length">
			<view class='rectangle' v-for="(item,idx) in process.detail" :key="idx">
				<view class='box'>
					<view class='index'>
						{{idx+1<10?'0'+(idx+1):idx+1}}
					</view>
					<view class='title'>
						{{item.title}}
					</view>
				</view>
				<view class='exp'>
					{{item.content}}
				</view>
			</view>
		</view>
		<buttom-bar :buttombar="buttombar"></buttom-bar>
	</view>
</template>

<script>
	import buttomBar from '@/compoents/buttomBar/buttomBar.vue'
	import {
		getUserProcess,
	} from '../../util/severApi.js'
	export default {
		components: {
		},
		data() {
			return {
				buttombar: {
					active: 1,
					imglist: [
						'/static/icon/first_white.png',
						'/static/icon/second_black.png',
						'/static/icon/third_white.png',
						'/static/icon/Group_white.png'
					]
				},
				process: [],
				processIndx: 0,
			}
		},
		onLoad(option) {
			this.processIndx = option.processIndx
			getUserProcess().then(res => {
				this.process = res.data[this.processIndx];
				console.log("获取流程成功", res)
			}).catch(err => {
				console.log("获取流程失败", err)
			})
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	@import 'gloabal.scss';

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


	.buttonBar {
		$height: 65rpx;
		height: $height;
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: nowrap;

		.add {
			@include button-black($height, 45%);
		}

		.edit {
			@include button-white($height, 45%);
		}
	}

	.something {
		height: 730rpx;
		width: 100%;

		.rectangle {
			height: 180rpx;
			margin: 20rpx 45rpx 20rpx 50rpx;
			border: 5rpx solid black;
			background-color: #F5F5F5;
			border-radius: 20rpx;
			padding-left: 15rpx;
			padding-bottom: 15rpx;

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
		}
	}
</style>