<template>
	<marsk-box @close="closeBox">
		<view class="title">添加流程细则</view>
		<view class="detailTitle">
			<input type="text" v-model="title" />
			<text>细则标题</text>
		</view>
		<view class="detail">
			<textarea class="input" auto-height v-model="content"></textarea>
			<text>细则</text>
		</view>
		<view class="button">
			<button class="submmit" @click="submmit">添加</button>
		</view>
	</marsk-box>
</template>

<script>
	export default {
		data() {
			return {
				content: "",
				title: ""
			}
		},
		methods: {
			submmit() {
				uni.$emit('addDetail', this.title, this.content);
			},
			closeBox() {
				uni.$emit('closeAddBox')
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import '../../../gloabal.scss';

	.title {
		text-align: center;
		font-weight: 600;
		font-size: large;
	}

	.detailTitle {
		@include input;
	}

	.detail {
		@include input;
		height: unset;
		padding: 20rpx 10rpx;

		.input {
			height: unset;
		}
	}

	.button {
		$height: 60rpx;
		$width: 85%;
		height: $height;
		width: 100%;

		margin-top: 20rpx;

		.submmit {
			@include button-black($height, $width);
		}
	}
</style>