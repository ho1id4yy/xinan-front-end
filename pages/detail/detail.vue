<template>
	<view>
		<view class='block'>
			<image class='icon' src='../../static/icon/second_black.png' />
			<view class="title">服务</view>
			<view class='line'>
				流程细则
				<image class='vector' src='../../static/icon/Vector 11.png'></image>
			</view>
		</view>
		<view class='process'>
			<view class='die'>
				联系殡仪馆灵车
			</view>
			<view class='small'>
				灵车运送、存放遗体
			</view>
		</view>
		<view class='something'>
			<view class='rectangle'>
				<view class='box'>
					<view class='index'>
					01
					</view>
					<view class='title'>
						社区——死亡证明单
					</view>
				</view>
				
				<view class='exp'>
					到你本社区的服务站（社区居委会）开死亡信息，即你所在的社区名字，楼层房间号以及老人的姓名去世的时间。
				</view>
			</view>
			<view class='rectangle'>
				<view class='box'>
					<view class='index'>
					02
					</view>
					<view class='title'>
						医院——死亡证明
					</view>
				</view>
				
				<view class='exp'>
					带着社区的证明去该区域的医院开死亡证明（医院的内科）。
				</view>
			</view>
			<view class='rectangle'>
				<view class='box'>
					<view class='index'>
					03
					</view>
					<view class='title'>
						公安局——死亡证明盖章
					</view>
				</view>
				
				<view class='exp'>
					到该社区的公安局盖章，工作人员会给你盖章，证明你的家里老人是自然死亡而不是意外身亡。
				</view>
			</view>
		</view>
		<buttom-bar :buttombar="buttombar"></buttom-bar>
	</view>
</template>

<script>
	import buttomBar from '@/compoents/buttomBar/buttomBar.vue'
	export default {
	    components: {
	        buttomBar
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
			};
		},
		methods:{
			toserve(){
				uni.reLaunch({
					url:'/pages/serve/serve'
				})
			},
			tocircle(){
				uni.reLaunch({
					url:'/page_anxincircle/anxincircle/anxincircle'
				})
			},
			touser(){
				uni.reLaunch({
					url:'/page_user/homepage/homepage'
				})
			},
			tolist(){
				uni.reLaunch({
					url:'/page_list/mainlist/mainlist'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.block{
		height:140rpx;
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
.process{
	width:500rpx;
	margin:20rpx 100rpx 20rpx 95rpx;
	border:5rpx solid black;
	border-radius: 20rpx;
	padding: 30rpx;
	.die{
		color: #343434;
		font-weight: bold;
		font-size: 120%
	};
	.small{
		color: #343434;
		font-size: 30%;
	}
};
.something{
	height:730rpx;
	width:100%;
	.rectangle{
		height:180rpx;
		margin:20rpx 45rpx 20rpx 50rpx;
		border:5rpx solid black;
		background-color: #F5F5F5;
		border-radius: 20rpx;
		padding-left: 15rpx;
		padding-bottom: 15rpx;
		.box{
			height:40rpx;
			.index{
			color: #343434;
			width: 50rpx;
			font-weight: bold;
			font-size: 180%;
			display: inline;
			margin-right: 20rpx;
		};
		.title{
			color: #343434;
			display: inline;
		}
		};
		.exp{
			margin-top: 40rpx;
			font-size: 50%;
			margin-left: 95rpx;
		}
	}
};
.bottombar{
		width:700rpx;
		margin:0rpx 20rpx 20rpx 25rpx;
		border:5rpx solid black;
		box-sizing: border-box;
		border-radius: 60rpx;
		height:120rpx;
		z-index:100;
		background-color: #FFFFFF;
		position:absolute;
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
