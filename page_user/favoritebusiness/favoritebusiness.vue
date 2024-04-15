<template>
	<view>
		<view class='block'>
			<image class='icon' src='../../static/icon/person.png' />
			<view class="title">个人</view>
			<view class='line'>
				收藏商家
				<image class='vector' src='../../static/icon/Vector 11.png'></image>
			</view>
		</view>
		<view class='mechantblock'>
				<view class='rectangle' v-if="iscancel1">
				<view class='name'>瑞星殡葬用品</view>
				<view class='opac'>全用品售卖店</view>
				<view class='addr'>地址：碑林区八仙庵</view>
				<view class='addr'>负责人：潘先生 电话：123456789212</view>
				<view>
					<view @click="cancel1">
						<image class='circle' src='../../static/icon/star.png'></image>
						<image class='phone' src='../../static/icon/starblack.png'></image>
					</view>
					<view>
						<image class='circle2' src='../../static/icon/phone.png'></image>
						<image class='phone2' src='../../static/icon/tel.png'></image>
					</view>
				</view>
			</view>
			<view class='rectangle' v-if='iscancel2'>
				<view class='name'>西安市殡仪馆</view>
				<view class='opac'>火化殡仪馆</view>
				<view class='addr'>地址：鸣犊街办留公村</view>
				<view class='addr'>负责人：许惜民 电话：123456789212</view>
				<view>
					<view @click="cancel2">
						<image class='circle' src='../../static/icon/star.png'></image>
						<image class='phone' src='../../static/icon/starblack.png'></image>
					</view>
					<view>
						<image class='circle2' src='../../static/icon/phone.png'></image>
						<image class='phone2' src='../../static/icon/tel.png'></image>
					</view>
				</view>
			</view>
		</view>
		<buttom-bar :buttombar="buttombar"></buttom-bar>
		<view v-if='showcover1' class='grayblock'>
		</view>
		<view v-if='showcover1' class='changeheadblock'>
			<image class='close' src='../../static/icon/close.png' @click="not"></image>
			<view class='line'>是否取消收藏？</view>
			<view class='not' @click="not">
				取消
			</view>
			<view class='btn' @click='truecancel1'>
				确认
			</view>
		</view>
		<view v-if='showcover2' class='grayblock'>
		</view>
		<view v-if='showcover2' class='changeheadblock'>
			<image class='close' src='../../static/icon/close.png' @click="not2"></image>
			<view class='line'>是否取消收藏？</view>
			<view class='not' @click="not2">
				取消
			</view>
			<view class='btn' @click='truecancel2'>
				确认
			</view>
		</view>
	</view>
</template>

<script>
	import buttomBar from '@/compoents/buttomBar/buttomBar.vue'
	export default {
		data() {
			return {
				showcover1:false,
				iscancel1:true,
				iscancel2:true,
				showcover2:false,
				buttombar: {
					active: 3,
					imglist: [
						'/static/icon/first_white.png',
						'/static/icon/second_white.png',
						'/static/icon/third_white.png',
						'/static/icon/Group_black.png'
					]
				},
			};
		},
		methods:{
			touser(){
				uni.reLaunch({
					url:'/page_user/homepage/homepage'
				})
			},
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
			tolist(){
				uni.reLaunch({
					url:'/page_list/mainlist/mainlist'
				})
			},
			cancel1(){
				this.showcover1=true
			},
			not(){
				this.showcover1=false
			},
			truecancel1(){
				this.iscancel1=false
				this.showcover1=false
			},
			cancel2(){
				this.showcover2=true
			},
			not2(){
				this.showcover2=false
			},
			truecancel2(){
				this.iscancel2=false
				this.showcover2=false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.grayblock{
		position: absolute;
		z-index: 1000;
		background-color: rgba(128,128,128,0.8);
		opacity: 0.8;
		height: 100%;
		width: 100%;
		margin-top: -141.5%;
	};
	.changeheadblock{
			position: absolute;
			border: 5 solid white;
			border-radius: 20rpx;
			z-index: 1005;
			margin-top: -700rpx;
			margin-left: 70rpx;
			background-color: rgba(256,256,256,1);
			padding: 50rpx;
		.close{
			height:30rpx;
			width:30rpx;
			float:right;
		};
		.line{
			font-weight: bold;
			margin-bottom: 40rpx;
			}
		.btn{
			border: 3rpx solid black;
			border-radius: 20rpx;
			background-color: #343434;
			display: inline;
			color:#FFFFFF;
			font-size: 80%;
			padding: 10rpx 70rpx 10rpx 70rpx;
			text-align: center;
			margin:40rpx 0rpx 20rpx 50rpx;
		};
		.not{
			border: 5rpx solid black;
			border-radius: 20rpx;
			background-color: white;
			font-size: 80%;
			padding: 10rpx 70rpx 10rpx 70rpx;
			text-align: center;
			margin:40rpx 0rpx 20rpx 30rpx;
			display: inline;
		};
		clear: both;
	};
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
	};
	height:250rpx;
	border:5rpx solid black;
	box-sizing: border-box;
	border-radius: 30rpx;
	width:660rpx;
	margin:0 40rpx;
	margin-bottom: 20rpx;
	z-index:-1;
	clear:both;
};
.block{
		height:180rpx;
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
.list{
	height:800rpx;
	width:660rpx;
	margin-left: 40rpx;
};
.mechantblock{
	.circle{
		height:80rpx;
		width:80rpx;
		position: absolute;
		margin:-95rpx 20rpx 40rpx 540rpx;
		display: inline;
		z-index: 1;
	};
	.phone{
		height:35rpx;
		width:35rpx;
		position: absolute;
		margin:-80rpx 20rpx 40rpx 565rpx;
		z-index: 100;
		display: inline;
	};
	.phone2{
		height:38rpx;
		width:38rpx;
		position: absolute;
		margin:-80rpx 20rpx 40rpx 470rpx;
	}
	.circle2{
		height:80rpx;
		width:80rpx;
		position: absolute;
		margin:-95rpx 20rpx 40rpx 450rpx;
	}
	height:880rpx;
	.rectangle{
		width:620rpx;
		height:130rpx;
		margin-left: 40rpx;
		margin-bottom: 25rpx;
		position: relative;
		padding:20rpx;
		background-color: rgb(248,248,248);
		border: 5rpx solid white;
		border-radius: 50rpx;
	};
	.name{
		font-weight: bold;
		position: relative;
		display: inline;
		margin:-100rpx 20rpx 30rpx 20rpx;
	};
	.opac{
		font-size: 20%;
		position: relative;
		color: rgb(210, 210, 210);
		opacity: 0.8;
		display: inline;
	};
	.addr{
		font-size: 5%;
		position: relative;
		color: rgb(50,50,50);
		margin:20rpx 0rpx -15rpx 20rpx;
	}
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
}
</style>
