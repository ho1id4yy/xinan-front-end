<template>
	<marsk-box @close="closeBox">
		<view class="title">编辑</view>
		<view class="detailTitle">
			<input type="text" v-model="detail.title" />
			<text>细则标题</text>
		</view>
		<view class="detail">
			<textarea class="input" auto-height v-model="detail.content"></textarea>
			<text>细则</text>
		</view>
		<view class="button">
			<button class="confirm" @click="confirm">确定</button>
			<button class="reject" @click="reject">删除</button>
		</view>
	</marsk-box>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: {
			detail: {
				type: Object,
				default: {

				}
			}
		},
		methods: {
			confirm() {
				uni.$emit('editDetail', this.$props.detail);
			},
			reject() {
				uni.$emit('deleteDetail', this.$props.detail.id)
			},
			closeBox() {
				uni.$emit('closeEditBox')
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
		$width: 45%;
		height: $height;
		width: 100%;

		margin-top: 20rpx;

		display: flex;
		justify-content: space-around;
		flex-wrap: nowrap;
		align-items: center;

		.confirm {
			@include button-black($height, $width);
		}

		.reject {
			@include button-white($height, $width);
		}
	}
</style>