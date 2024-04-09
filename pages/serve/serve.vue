<template>
	<view>
		<view class="rectangle26">
			<image class='icon' src='../../static/icon/quill_serve.png' />
			<view class="title">服务</view>
			<view class="rectangle27">
				<view class="process">商家直联：</view>
				<image class='centericon' src="../../static/icon/Tech Life Communication.png"></image>
				<view>
					<image  class='circle1' src='../../static/icon/Ellipse 69.png'></image>
					<image @click='tomerchant' class='circle2' src='../../static/icon/Vector.png'></image>		
				</view>
						
			</view>
		</view>
		<view>
			<image class='column' src='../../static/icon/Component 22.png'></image>
			<image class='alter' src='../../static/icon/Ellipse 18.png'></image>
			<view class='right'>
				<view class='row1'>医生确认死亡</view>
				<view class='row1'>净身穿衣</view>
				<view class='row1'>医院开具死亡证明</view>
				<view class='row2'>
				<view class='font'>
					联系殡仪馆灵车
				</view>
					<image class='btn' src='../../static/icon/Ellipse 99.png'></image>
					<image class='btnright' src='../../static/icon/Component 110.png'></image>
					<view class='small'>灵车运送、存放遗体</view>
				</view>
				<view class='row3'>摆设灵堂</view>
				<view class='row3'>预约殡仪馆事项</view>
				<view class='row3'>选购殡葬用品</view>
				<view class='row3'>预备丧宴</view>
				<view class='row3'>办理殡仪馆手续</view>
				<view class='row3'>出殡仪式</view>
			</view>
			
		</view>
		<view class='bottombar'>
			<image class='label' @click='touser' src='../../static/icon/Group_white.png'></image>
			<view class='block' @click="toserve"></view>
			<image class='label' @click='tocircle' src='../../static/icon/third_white.png'></image>
			<image class='label' src='../../static/icon/second_black.png'></image>
			<image  class='label' @click='tolist' src='../../static/icon/first_white.png'></image>
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
			tomerchant(){
				uni.redirectTo({
					url:'/pages/merchant/merchant'
				})
			},
			toserve(){
				uni.redirectTo({
					url:'/pages/serve/serve'
				})
			},
			tocircle(){
				uni.redirectTo({
					url:'/page_anxincircle/anxincircle/anxincircle'
				})
			},
			touser(){
				uni.redirectTo({
					url:'/page_user/homepage/homepage'
				})
			},
			tolist(){
				uni.redirectTo({
					url:'/page_list/mainlist/mainlist'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.column{
	height:680rpx;
	width:30rpx;
	margin-left: 80rpx;
	display:inline;
	position: absolute;
	z-index:-1;
};
.alter{
	height:20rpx;
	width:20rpx;
	margin:565rpx 0rpx 0rpx 85.5rpx;
}
.right{
	width:600rpx;
	display: inline-block;
	margin-left: 150rpx;
	margin-top: -1000rpx;
	.row1{
		height:55rpx;
		opacity: 0.2;
		font-size: 60%;
	};
	.row3{
		height:55rpx;
		opacity: 0.2;
		font-size: 60%;
	}
	.row2{
		border:5rpx solid black;
		border-radius: 20rpx;
		margin-bottom: 20rpx;
		width:540rpx;
		height:70rpx;
		margin-top:10rpx;
		padding:10rpx 0rpx 10rpx 20rpx;
		.font{
			font-weight: bold;
		}
		.btn{
			width:80rpx;
			height:80rpx;
			position: relative;
			z-index: -1;
			float: right;
			margin-top: -45rpx;
			margin-right: 20rpx;
		};
		.btnright{
			width:30rpx;
			height:40rpx;
			position: absolute;
			margin-left: 470rpx;
			margin-top: -25rpx;
		};
		.small{
			font-size: 18rpx;
		}
	}
}
	
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
		margin:0rpx 20rpx 20rpx 22rpx;
		border:5rpx solid black;
		box-sizing: border-box;
		border-radius: 60rpx;
		height:120rpx;
		background-color: #FFFFFF;
		float: left;
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
