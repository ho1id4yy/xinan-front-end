<template>
	<view>
		<view class="rectangle26">
			<image class='icon' src='../../static/icon/quill_circle.png' />
			<view class="title">安心圈</view>
			<view class="rectangle27"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
	}
</script>

<style lang="scss" scoped>
.rectangle26{
	width: 750rpx;
	height: 400rpx;
	background-color:#343434;
	border: 1rpx solid black;
	border-radius: 0rpx 0rpx 60rpx 60rpx;
	display: inline-block;
	.rectangle27{
		width: 580rpx;
		height: 280rpx;
		background-color: #FFFFFF;
		margin:20rpx 10rpx 30rpx 80rpx;
		border-radius: 60rpx;
		display: inline-block;
	};
	.icon{
		width:40rpx;
		height:40rpx;
		background-color: #343434;
		float:left;
		display: inline-block;
		margin-top: 20rpx;
		margin-left:80rpx;
		margin-right: 0rpx;
	};
	.title{
		margin-top: 25rpx;
		margin-left:130rpx;
		color: #FFFFFF;
		font-size:25rpx;
	}
}
</style>
