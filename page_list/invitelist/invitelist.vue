<template>
	<view>
		<view class='block'>
			<image class='icon' src='../../static/icon/quill_list 2.png' />
			<view class="title">清单</view>
			<view class='line'>
				葬礼邀请名单
				<image class='vector' src='../../static/icon/Vector 11.png'></image>
			</view>
			<view class='input'>
				<input type='text' placeholder="   请输入手机号" />
				<button class='button'>添加</button>
			</view>
			<image class='add' src='../../static/icon/Component 43.png' />
		</view>
		<view>
			<view class='block1'>
				<view class='label'>
					<view>我的家人</view>
				</view>
				<view class='friend'>
					<view>心小安</view>
				</view>
				<view class='friend'>
					<view>心小安</view>
				</view>
				<view class='friend'>
					<view>心小安</view>
				</view>
				<view class='friend'>
					<view>心小安</view>
				</view>
				<view class='friend'>
					<view>心小安</view>
				</view>
				<view class='friend'>
					<view>心小安</view>
				</view>
				
			</view>
			<view class='block1'>
				<view class='label'>
					<view>我的朋友</view>
				</view>
				<view class='friend'>
					<view>心小安</view>
				</view>
				<view class='friend'>
					<view>心小安</view>
				</view>
				<view class='friend'>
					<view>心小安</view>
				</view>
				<view class='friend'>
					<view>心小安</view>
				</view>
				<view class='friend'>
					<view>心小安</view>
				</view>
				<view class='friend'>
					<view>心小安</view>
				</view>
			</view>
			<view class='block1'>
				<view class='label'>
					<view>我的家人</view>
				</view>
				<view class='friend'>
					<view>心小安</view>
				</view>
				<view class='friend'>
					<view>心小安</view>
				</view>
				<view class='friend'>
					<view>心小安</view>
				</view>
				<view class='friend'>
					<view>心小安</view>
				</view>
				<view class='friend'>
					<view>心小安</view>
				</view>
				<view class='friend'>
					<view>心小安</view>
				</view>
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
	.label{
		border:5rpx solid black;
		border-radius: 20rpx;
		height:40rpx;
		width:120rpx;
		text-align: center;
		margin:20rpx 20rpx 20rpx 20rpx;
		font-size: 25rpx;
		color: #FFFFFF;
		background-color: #343434;
	};
	.friend{
		border:5rpx solid black;
		border-radius: 20rpx;
		height:50rpx;
		width:160rpx;
		text-align: center;
		margin:0rpx 20rpx 20rpx 20rpx;
		font-size: 30rpx;
		background-color: #FFFFFF;
		color: #343434;
		display: inline-block;
		z-index:2;
		float:left;
	}
	height:250rpx;
	border:5rpx solid black;
	box-sizing: border-box;
	border-radius: 30rpx;
	width:660rpx;
	margin:0 40rpx;
	margin-bottom: 30rpx;
	z-index:-1;
	clear:both;
}
.block{
		height:250rpx;
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
			height:70rpx;
			width:570rpx;
			float:left;
			margin-left:40rpx;
			font-size: 90%;
			display: inline;
		};
		.button{
			background-color: #343434;
			color: #FFFFFF;
			border: 2rpx solid black;
			border-radius: 15rpx;
			width:120rpx;
			height:60rpx;
			float:right;
			display: inline;
			font-size: 21rpx;
			margin-top:-40rpx;
			margin-right:8rpx;
		}
		.icon{
		width:40rpx;
		height:40rpx;
		background-color: #FFFFFF;
		float:left;
		display: inline-block;
		margin-top: 20rpx;
		margin-left:40rpx;
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
		margin-left:40rpx;
		margin-top:10rpx;
		font-size: 150%;
		.vector{
			width:300rpx;
			height:50rpx;
			margin-left:25rpx;
		}
	};
	clear: both;
};
.bottombar{
		width:700rpx;
		margin:-20rpx 20rpx 20rpx 20rpx;
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
