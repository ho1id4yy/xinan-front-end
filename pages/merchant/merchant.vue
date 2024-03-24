<template>
	<view>
		<view class='block'>
			<image class='icon' src='../../static/icon/second_black.png' />
			<view class="title">服务</view>
			<view class='line'>
				选择商家
				<image class='vector' src='../../static/icon/Vector 11.png'></image>
			</view>
			<view class='input'>
				<input type='text' placeholder="   选择城市" />
				<image class='select' src='../../static/icon/Component 23.png'></image>
			</view>
			<view class='input'>
				<input type='text' placeholder="   选择区/县" />
				<image class='select' src='../../static/icon/Component 23.png'></image>
			</view>
		</view>
		<view>
			<view class='tar1'>为您推荐</view>
			
			<view class='tar2'>收藏</view>
			<view class='tar2'>致电</view>
		</view>
		<view class='block1'>
			<view>
				瑞星
			</view>
		</view>
		<view class='block1'>
			<view>
				瑞星
			</view>
		</view>
		<view class='block1'>
			<view>
				瑞星
			</view>
		</view>
		<view class='block1'>
			<view>
				瑞星
			</view>
		</view>
		<view class='bottombar'>
				<image class='label' src='../../static/icon/Group_white.png'></image>
				<view class='block'></view>
				<image class='label' src='../../static/icon/third_white.png'></image>
				<image class='label' src='../../static/icon/second_black.png'></image>
				<image class='label' src='../../static/icon/first_white.png'></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.block1{
	height:160rpx;
	box-sizing: border-box;
	border-radius: 40rpx;
	width:660rpx;
	margin:20rpx 40rpx 30rpx;
	clear:both;
	background-color: #F5F5F5;
}
.tar1{
	display:inline;
	margin-left: 50rpx;
	font-size: 80%;
	font-weight: bold;
};
.tar2{
	display:inline;
	float:right;
	margin-right: 40rpx;
	font-size: 50%;
	opacity: 0.5;
}
.block{
		height:240rpx;
		.add{
			height:60rpx;
			width:60rpx;
			display: inline;
			float:right;
			margin:10rpx 55rpx 0 0;
		}
		.input{
			border:5rpx solid black;
			border-radius: 20rpx;
			height:60rpx;
			width:300rpx;
			float:left;
			margin-left:40rpx;
			font-size: 90%;
			display: inline;
		};
		.select{
			width: 30rpx;
			height:20rpx;
			margin:-25rpx 20rpx 40rpx 240rpx;
			display: inline-block;
			float: left;
		};
		.icon{
		width:30rpx;
		height:30rpx;
		background-color: #FFFFFF;
		float:left;
		display: inline-block;
		margin-top: 25rpx;
		margin-left:60rpx;
		margin-right: 0rpx;
		display:inline;
		float:left;
	};
	.title{
		color: #343434;
		font-size:30rpx;
		display: inline;
		margin-top:20rpx;
		margin-left:20rpx;
		float:left;
	};
	.line{
		height:80rpx;
		font-weight: bold;
		width:667rpx;
		float:left;
		margin-left:60rpx;
		margin-top:10rpx;
		font-size: 150%;
		.vector{
			width:400rpx;
			height:50rpx;
			float: right;
		}
	};
	clear: both;
};
.bottombar{
		width:700rpx;
		margin:0rpx 20rpx 20rpx 20rpx;
		border:5rpx solid black;
		box-sizing: border-box;
		border-radius: 60rpx;
		height:120rpx;
		z-index:100;
		background-color: #FFFFFF;
		position:absolute;
		z-index: 100;
		.block{
			border:5rpx solid black;
			border-radius: 50rpx;
			height:70rpx;
			width:140rpx;
			display:inline-block;
			position:absolute;
			margin:15rpx 0rpx 0rpx 185rpx;
		}
		.label{
			height:40rpx;
			width:40rpx;
			display:inline-block;
			margin-right:85rpx;
			margin-left: 40rpx;
			margin-top:35rpx;
			float:right;
		}
}
</style>
