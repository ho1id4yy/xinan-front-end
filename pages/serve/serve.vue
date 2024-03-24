<template>
	<view>
		<view class="rectangle26">
			<image class='icon' src='../../static/icon/quill_serve.png' />
			<view class="title">服务</view>
			<view class="rectangle27">
				<view class="process" @click='c'>商家直联：</view>
				<image class='centericon' src="../../static/icon/Tech Life Communication.png"></image>
				<view>
					<image  class='circle1' src='../../static/icon/Ellipse 69.png'></image>
					<image class='circle2' src='../../static/icon/Vector.png'></image>		
				</view>
						
			</view>
		</view>
		<view class='bottombar'>
			<view class='block'></view>
			
			<image class='label' src='../../static/icon/Group_white.png'></image>
			
			<image class='label' src='../../static/icon/third_white.png'></image>
			<image class='label' src='../../static/icon/second_white.png'></image>
			<image class='label' src='../../static/icon/first_black.png'></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			c(){
				uni.navigateTo({
					url:'/pages/merchant/merchant'
				})
			}
		}
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
		.process{
			margin: 30rpx 0rpx 0rpx 30rpx;
			font-size: 80%;
		};
		.centericon{
			width:260rpx;
			height:190rpx;
			margin-left:150rpx;
		};
		.circle1{
			width:80rpx;
			height:80rpx;
			z-index:1;
			display:inline;
			position: absolute;
			margin:-70rpx 40rpx 0rpx 340rpx
		};
		.circle2{
			width:50rpx;
			height:40rpx;
			position: absolute;
			z-index:100;
			display:inline;
			margin:-55rpx 40rpx 0rpx 360rpx
		}
		clear:both;
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
.bottombar{
		width:700rpx;
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
			margin:20rpx 70rpx 20rpx 30rpx;
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
