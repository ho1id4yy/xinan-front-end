<template>
	<view>
		<view class='block'>
			<image class='icon' src='../../static/icon/person.png' />
			<view class="title">个人</view>
			<view class='line'>
				个性设置
				<image class='vector' src='../../static/icon/Vector 11.png'></image>
			</view>
		</view>
		<image class='head' src='../../static/icon/Ellipse 30.png'></image>
		<view class='block'>
			<view class='top'>
				昵称
			</view>
			<input class='text1' value="安小心">
		</view>
		<view class='block'>
			<view class='top'>
				签名
			</view>
			<input class='text1' value="此心安处是吾乡">
		</view>
		<view class='block'>
			<view class='top'>
				手机
			</view>
			<input class='text1' value="1399999999999">
		</view>
		<view class='block'>
			<view class='top'>
				性别
			</view>
			<input class='text1' value="女">
		</view>
		<view class='block'>
			<view class='top'>
				生日
			</view>
			<input class='text1' value="2024-3-15">
		</view>
		<button class='save'>保存</button>
		<view class='tip'>性别、手机号及生日信息保存后无法重新修改，请谨慎填写。</view>
		
		
		<view class='bottombar'>
			<view class='block' @click='touser' ></view>
			<image @click='touser' class='label'  src='../../static/icon/Group_black.png'></image>
			<image @click='tocircle' class='label' src='../../static/icon/third_white.png'></image>
			<image @click="toserve" class='label' src='../../static/icon/second_white.png'></image>
			<image @click="tolist" class='label' src='../../static/icon/first_white.png'></image>
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

<style lang="scss">
.tip{
	font-size: 20rpx;
	color:rgb(110,110,110);
	opacity: 0.3;
	margin-left: 120rpx;
	margin-bottom: 10rpx;
	margin-top: 10rpx;
}
.save{
	border:5 solid black;
	border-radius: 40rpx;
	background-color: #343434;
	width:250rpx;
	margin: 0rpx auto;
	color:white;
	font-size: 80%;
}
.bottombar{
		width:700rpx;
		margin:0rpx 20rpx 20rpx 20rpx;
		border:5rpx solid black;
		box-sizing: border-box;
		border-radius: 60rpx;
		height:120rpx;
		z-index:10;
		background-color: #FFFFFF;
		position:absolute;
		.block{
			border:5rpx solid black;
			border-radius: 50rpx;
			height:70rpx;
			width:140rpx;
			display:inline-block;
			position:absolute;
			margin:15rpx 70rpx 20rpx 520rpx;
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
};
.head{
	margin-left: 250rpx;
	width:200rpx;
	height:200rpx;
	position: relative;
};
.top{
	width: 70rpx;
	position: relative;
	z-index: 20;
	background-color: white;
	margin-left: 150rpx;
	padding-left: 10rpx;
	font-size: 80%;
}
.text1{
	font-size: 80%;
	position: absolute;
	z-index: -1;
	width:520rpx;
	margin-left: 80rpx;
	margin-top: -20rpx;
	border:5rpx solid black;
	border-radius: 50rpx;
	padding:15rpx 0rpx 15rpx 70rpx;
}
.block{
		height:118rpx;
		.add{
			height:60rpx;
			width:60rpx;
			display: inline;
			float:right;
			margin:10rpx 55rpx 0 0;
		};
		.input{
			border:5rpx solid black;
			border-radius: 20rpx;
			height:70rpx;
			width:570rpx;
			float:left;
			margin-left:40rpx;
			font-size: 90%;
			display: inline;
			.text{
				height:70rpx;
				width:400rpx;
				margin-left:40rpx;
				font-size: 90%;
				float: left;
				display: inline;
			};
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
			margin-top:5rpx;
			margin-right:8rpx;
		};
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
			width:380rpx;
			height:50rpx;
			margin-left:65rpx;
		};
	};
	clear: both;
};
</style>
