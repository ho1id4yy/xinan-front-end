<template>
	<view>
		<view class='block'>
			<image class='icon' src='../../static/icon/person.png' />
			<view class="title">个人</view>
			<view class='line'>
				好友列表
				<image class='vector' src='../../static/icon/Vector 11.png'></image>
			</view>
			<view class='input' >
				<input type='text' class='text'  placeholder="请输入手机号" />
				<button class='button' @click="changefriend">添加</button>
			</view>
			<image class='add' src='../../static/icon/Component 43.png' />
		</view>
		<view>
			<view class='list'>
				<view v-for='(item,idx) in notdel1' v-if='notdel1[idx]'>
					<image class='head' src='../../static/icon/Ellipse 30.png'></image>
					<view class='name' :id='idx' @click="changefriend2(idx)">
						心小安
					</view>
					<image class="line" src='../../static/icon/Line 8.png'></image>
				</view>
			</view>
		</view>
		<buttom-bar :buttombar="buttombar"></buttom-bar>
		<view v-if='showcover' class='grayblock'>
		</view>
		<view v-if='showcover' class='changeheadblock'>
			<image class='head' src='../../static/icon/Ellipse 30.png'></image>
			<image @click='close1' class='close' src='../../static/icon/close.png'></image>
			<view class='name'>安小心</view>
			<view class='number'>心安号：123456789</view>
			<view class='choose'>选择分组</view>
			<view class='biggroup'>
				<view class='group' @click='close'>
				我的家人
			</view>
			<view class='group_active' @click='close'>
				我的家人
			</view>
			<view class='group'@click='close'>
				我的家人
			</view>
			</view>
			
			<view class='biggroup'>
				<view class='group' @click='close'>
				我的家人
			</view>
			<view class='group' @click='close'>
				我的家人
			</view>
			<view class='group'@click='close'>
				我的家人
			</view>
			</view>
			<view class='btn' @click='close'>
				添加
			</view>
		</view>
		<view v-if='showlist' class='grayblock'>
		</view>
		<view v-if='showlist' class='changeheadblock'>
			<image class='head' src='../../static/icon/Ellipse 30.png'></image>
			<image @click='close3' class='close' src='../../static/icon/close.png'></image>
			<view class='name'>
				<view>安小心</view>
			</view>
			<view class='number'>心安号：123456789999</view>
			<view class='choose'>选择分组</view>
			<view class='biggroup'>
				<view class='group' @click='close2'>
				我的家人
			</view>
			<view class='group_active' @click='close2'>
				我的家人
			</view>
			<view class='group'@click='close2'>
				我的家人
			</view>
			</view>
			
			<view class='biggroup'>
				<view class='group' @click='close2'>
				我的家人
			</view>
			<view class='group' @click='close2'>
				我的家人
			</view>
			<view class='group'@click='close2'>
				我的家人
			</view>
			</view>
			<view class='btn1' @click='close2'>
				更改备注
			</view>
			<view class='btn2' @click='close2'>
				删除
			</view>
		</view>
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
				showcover:false,
				showlist:false,
				notdel1:[true,true,true,true,true,true],
				idtemp1:null,
				id:null,
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
			},
			changefriend(){
				this.showcover=true
			},
			close3(){
				this.showlist=false
			},
			changefriend2(idx){
				this.showlist=true
				this.idtemp1=idx
			},
			close2(){
				this.showlist=false
				if (this.idtemp1!=null || this.idtemp1==0){
					this.notdel1[Number(this.idtemp1)]=false
				}
			},
			close1(){
				this.showcover=false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list{
		height:900rpx;
		border:5rpx solid black;
		border-radius: 20rpx;
		margin-left: 5rpx;
		margin-bottom: 20rpx;
		overflow: auto;
		.head{
			height:80rpx;
			width:80rpx;
			margin:20rpx 0 -30rpx 20rpx;
			position: relative;
		}
		.name{
			height:80rpx;
			display: inline;
			position: relative;
			margin: 0rpx 0 10rpx 150rpx;
		};
		.line{
			height:4rpx;
			width:600rpx;
			margin-left:25rpx;
			display: block;
			margin-top: 30rpx;
		}
	}
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
		height:250rpx;
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
}
.bottombar{
		width:700rpx;
		margin:0rpx 20rpx 20rpx 22rpx;
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
		height:550;
		width:450;
		position: absolute;
		border: 5 solid white;
		border-radius: 20rpx;
		z-index: 1005;
		margin-top: -900rpx;
		margin-left: 80rpx;
		background-color: rgba(256,256,256,1);
		padding: 30rpx;
		.head{
		height:200rpx;
		width:200rpx;
		position: relative;
		z-index: 1007;
		margin:20rpx 130rpx 0rpx 160rpx;
	};
	.name{
		font-weight: bold;
		font-size: 150%;
		margin:10rpx 50rpx 10rpx 185rpx;
	}
	.number{
		font-size: 50%;
		color: rgb(120,120,120);
		opacity: 0.5;
		margin:10rpx 50rpx 10rpx 170rpx;
	};
	.choose{
			font-size: 40%;
			color: rgb(120,120,120);
			opacity: 0.5;
			margin:10rpx 50rpx 10rpx 220rpx;
	};
	.close{
		height:30rpx;
		width:30rpx;
		float:right;
	};
	.btn1{
		border: 5rpx solid black;
		border-radius: 20rpx;
		background-color: #343434;
		color:#FFFFFF;
		font-size: 80%;
		padding: 10rpx 40rpx 10rpx 40rpx;
		text-align: center;
		height: 40rpx;
		width:180rpx;
		display: inline;
		margin:40rpx 30rpx 60rpx 60rpx;
	};
	.btn{
		border: 5rpx solid black;
		border-radius: 20rpx;
		background-color: #343434;
		color:#FFFFFF;
		font-size: 80%;
		padding: 10rpx 40rpx 10rpx 40rpx;
		text-align: center;
		height: 40rpx;
		width:180rpx;
		display: inline;
		margin:40rpx 30rpx 60rpx 200rpx;
	}
	.btn2{
			display: inline;
			border: 5rpx solid black;
			border-radius: 20rpx;
			background-color: white;
			color:black;
			font-size: 80%;
			padding: 10rpx 60rpx 10rpx 60rpx;
			text-align: center;
			height: 40rpx;
			width:180rpx;
			margin:40rpx 40rpx 60rpx 30rpx;
		};
	.biggroup{
		margin:20rpx 0rpx 40rpx 85rpx;
		.group{
			border: 5rpx solid black;
			border-radius: 15rpx;
			background-color: white;
			font-size: 40%;
			padding: 10rpx;
			text-align: center;
			height: 100rpx;
			width:150rpx;
			display: inline;
			opacity: 0.2;
			font-size: 40%;
			color: rgb(120,120,120);
			margin:10rpx 40rpx 20rpx 0rpx;
		};
		.group_active{
			border: 5rpx solid black;
			border-radius: 15rpx;
			background-color: white;
			font-size: 40%;
			font-weight: bold;
			padding: 10rpx;
			text-align: center;
			height: 100rpx;
			width:150rpx;
			font-size: 40%;
			display: inline;
			color: black;
			margin:10rpx 40rpx 20rpx 0rpx;
		}
	}
	clear: both;
};
</style>
