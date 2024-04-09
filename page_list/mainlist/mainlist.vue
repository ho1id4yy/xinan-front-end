<template>
	<view>
		<view class="rectangle26">
			<image class='icon' src='../../static/icon/quill_list.png' />
			<view class="title">清单</view>
			<view class="rectangle27">
				<view class="process">准备进度：</view>
				<view>
					<image  class='circle1' src='../../static/icon/Ellipse 1.png'></image>
				</view>
				<view>
					<image class='circle2' src='../../static/icon/Ellipse 16.png'></image>
				</view>
				<view class='opacity'>
					36%
				</view>
			</view>
		</view>
		<view>
			<view class='select'>
				<view class='font' @click='toinvitelist'>葬礼邀请名单</view>
				<view>
					<image class='circle' src='../../static/icon/Ellipse 6.png'></image>
					<view>
						<image class='right' src='../../static/icon/Vector 19.png'></image>
					</view>
				</view>
				<image class='wall' src='../../static/icon/Vector 18.png'></image>
			</view>
			<view class='select'>
				<view>
					<view class='font'>愿望清单</view>
					<image class='circle' src='../../static/icon/Ellipse 6.png'></image>
					<view>
						<image class='right' src='../../static/icon/Vector 19.png'></image>
					</view>
				</view>
				<image class='wall' src='../../static/icon/Vector 18.png'></image>
			</view>
			<view class='select'>
				<view class='font'>社交平台管理</view>
				<view>
					<image class='circle' src='../../static/icon/Ellipse 6.png'></image>
					<view>
						<image class='right' src='../../static/icon/Vector 19.png'></image>
					</view>
				</view>
				<image class='wall' src='../../static/icon/Vector 18.png'></image>
			</view>
			<view class='select'>
				<view class='font'>密码柜管理</view>
				<view>
					<image class='circle' src='../../static/icon/Ellipse 6.png'></image>
					<view>
						<image class='right' src='../../static/icon/Vector 19.png'></image>
					</view>
				</view>
				<image class='wall' src='../../static/icon/Vector 18.png'></image>
			</view>
			<view class='select'>
				<view class='font'>宠物管理</view>
				<view>
					<image class='circle' src='../../static/icon/Ellipse 6.png'></image>
					<view>
						<image class='right' src='../../static/icon/Vector 19.png'></image>
					</view>
				</view>
				<image class='wall' src='../../static/icon/Vector 18.png'></image>
			</view>
			<view class='select'>
				<view class='font'>珍宝收藏馆</view>
				<view>
					<image class='circle' src='../../static/icon/Ellipse 6.png'></image>
					<image class='right' src='../../static/icon/Vector 19.png'></image>
				</view>
				<image class='wall' src='../../static/icon/Vector 18.png'></image>
			</view>
		</view>
		<view class='bottombar'>
			<view class='block'></view>
			<image @click='touser' class='label'  src='../../static/icon/Group_white.png'></image>
			<image @click='tocircle' class='label' src='../../static/icon/third_white.png'></image>
			<image @click="toserve" class='label' src='../../static/icon/second_white.png'></image>
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
			toinvitelist(){
				uni.navigateTo({
					url:'/page_list/invitelist/invitelist'
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
		}
	}
</script>

<style lang="scss" scoped>
.select{
	z-index:-1;
	.font{
		font-size: 120%;
		display: inline-block;
		float:left;
		margin-left: 30rpx;
		margin-top:15rpx;
	}
	border:5rpx solid black;
	border-radius: 40rpx;
	height:100rpx;
	width:670rpx;
	margin:20rpx 20rpx 20rpx 30rpx;
	.wall{
		height:100rpx;
		width:5rpx;
		float: right;
		margin-right: 40rpx;
		display: inline-block;
	};
	.circle{
		height:40rpx;
		width:40rpx;
		display: inline-block;
		position: relative;
		margin-right:50rpx;
		margin-top: 30rpx;
		margin-left:20rpx;
		z-index:1;
		float:right;
	};
	.right{
		height:40rpx;
		float:right;
		width:40rpx;
		display: inline-block;
		position: relative;
		z-index:10;
		margin-right:-70rpx;
		margin-top:20rpx;
	};
	clear:both;
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
		.opacity{
			height:180rpx;
			width:180rpx;
			z-index:100;
			display:inline;
			margin-right:190rpx;
			margin-top:-140rpx;
			font-size: 180%;
			float:right;
			
		};
		.circle1{
			width:180rpx;
			height:180rpx;
			z-index:-1;
			display:inline;
			margin-left:190rpx;
			margin-top:-50rpx;
		};
		.circle2{
			width:180rpx;
			height:180rpx;
			float:left;
			z-index:50;
			display:inline;
			margin-left:190rpx;
			margin-top:-50rpx;
		}
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
};
.bottombar{
		width:700rpx;
		margin:-130rpx 20rpx 20rpx 20rpx;
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
