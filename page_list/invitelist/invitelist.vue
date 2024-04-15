<template>
	<view>
		<view class='block'>
			<image class='icon' src='../../static/icon/quill_list 2.png' />
			<view class="title">清单</view>
			<view class='line'>
				葬礼邀请名单
				<image class='vector' src='../../static/icon/Vector 11.png'></image>
			</view>
			<view class='input' >
				<input type='text' class='text'  placeholder="请输入手机号" />
				<button class='button' @click="change">添加</button>
			</view>
			<image class='add' @click="addgroup" src='../../static/icon/Component 43.png' />
		</view>
		<view class='overflow'>
			<view class='block1'>
				<view class='label' @click="cgn11">
					<view>我的家人</view>
				</view>
				<view class='friend' v-for='(item,idx) in notdel1' v-if='notdel1[idx]'>
					<view :id='idx' @click='change(idx)'>心小安</view>
				</view>
				
			</view>
			<view class='block1'>
				<view class='label' @click="cgn12">
					<view>我的朋友</view>
				</view>
				<view class='friend' v-for='(item,idx) in notdel2' v-if='notdel2[idx]'>
					<view :id='idx' @click='change2(idx)'>心小安</view>
				</view>
			</view>
			<view class='block1'>
				<view class='label' @click="cgn12">
					<view>我的朋友</view>
				</view>
				<view class='friend' v-for='(item,idx) in notdel3' v-if='notdel3[idx]'>
					<view :id='idx' @click='change3(idx)'>心小安</view>
				</view>
			</view>
			<view class='block1'>
				<view class='label' @click="cgn11">
					<view>我的家人</view>
				</view>
				<view class='friend' v-for='(item,idx) in notdel4' v-if='notdel4[idx]'>
					<view :id='idx' @click='change4(idx)'>心小安</view>
				</view>
			</view>
			<view class='block1'>
				<view class='label' @click="cgn11">
					<view>我的家人</view>
				</view>
				<view class='friend' v-for='(item,idx) in notdel5' v-if='notdel5[idx]'>
					<view :id='idx' @click='change5(idx)'>心小安</view>
				</view>
			</view>
			<view class='block1'>
				<view class='label' @click="cgn11">
					<view>我的家人</view>
				</view>
				<view class='friend' v-for='(item,idx) in notdel6' v-if='notdel6[idx]'>
					<view :id='idx' @click='change6(idx)'>心小安</view>
				</view>
			</view>
		</view>
		 <buttom-bar :buttombar="buttombar"></buttom-bar>
		
		
		
		
		
		<view v-if='showlist' class='grayblock'>
		</view>
		<view v-if='showlist' class='changeheadblock'>
			<image @click='tohome' class='head' src='../../static/icon/Ellipse 30.png'></image>
			<image @click='close5' class='close' src='../../static/icon/close.png'></image>
			<view class='name'>安小心</view>
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
			<view class='btn1'>
				更改备注
			</view>
			<view class='btn2' @click='close2'>
				删除
			</view>
		</view>
		
		
		<view v-if='showaddgroup' class='grayblock'>
		</view>
		<view v-if='showaddgroup' class='changeheadblock'>
			<image @click='close' class='close' src='../../static/icon/close.png'></image>
			<view class='input'>
				<input type='text' class='text'  placeholder="请输入分组名" />
				<button class='button'  @click='add'>添加</button>
			</view>
			<image src='../../static/icon/Line 8.png' class='line'></image>
			<view class='exist'>已有分组</view>
			<image src='../../static/icon/Line 8.png' class="line"></image>
			<view class='biggroup'>
				<view class="group">
				我的家人
			</view>
			<view class='group' >
				我的家人
			</view>
			<view class='group'>
				我的家人
			</view>
			</view>
			
			<view class='biggroup'>
				<view class='group' >
				我的家人
			</view>
			<view class='group'>
				我的家人
			</view>
			<view class='group'>
				我的家人
			</view>
			</view>
			<view class='edit'>点击分组即可编辑</view>
		</view>
		
		
		<view v-if='cgn1' class='grayblock'>
		</view>
		<view v-if='cgn1' class='changeheadblock2'>
			<image @click='close3' class='close' src='../../static/icon/close.png'></image>
			<view class='group'>
				我的家人
			</view>
			<view class='changename'>
				更改组名
			</view>
			<view class='changename2'>
				删除分组
			</view>
		</view>
		
		<view v-if='cgn2' class='grayblock'>
		</view>
		<view v-if='cgn2' class='changeheadblock2'>
			<image @click='close4' class='close' src='../../static/icon/close.png'></image>
			<view class='group'>
				我的朋友
			</view>
			<view class='changename'>
				更改组名
			</view>
			<view class='changename2'>
				删除分组
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
				showlist:false,
				showaddgroup:false,
				cgn1:false,
				cgn2:false,
				notdel1:[true,true,true,true,true,true],
				notdel2:[true,true,true,true,true,true],
				notdel3:[true,true,true,true,true,true],
				notdel4:[true,true,true,true,true,true],
				notdel5:[true,true,true,true,true,true],
				notdel6:[true,true,true,true,true,true],
				idtemp1:null,
				idtemp2:null,
				idtemp3:null,
				idtemp4:null,
				idtemp5:null,
				idtemp6:null,
				id:null,
				buttombar: {
					active: 0,
					imglist: [
						'/static/icon/first_black.png',
						'/static/icon/second_white.png',
						'/static/icon/third_white.png',
						'/static/icon/Group_white.png'
					]
				},
			};
		},
		methods:{
			toinvitelist(){
				uni.reLaunch({
					url:'/page_list/invitelist/invitelist'
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
			touser(){
				uni.reLaunch({
					url:'/page_user/homepage/homepage'
				})
			},
			change(idx){
				this.showlist=true
				this.idtemp1=idx
				this.idtemp2=null
				this.idtemp3=null
				this.idtemp4=null
				this.idtemp5=null
				this.idtemp6=null
			},
			change2(idx){
				this.showlist=true
				this.idtemp2=idx
				this.idtemp1=null
				this.idtemp3=null
				this.idtemp4=null
				this.idtemp5=null
				this.idtemp6=null
			},
			change3(idx){
				this.showlist=true
				this.idtemp3=idx
				this.idtemp1=null
				this.idtemp2=null
				this.idtemp4=null
				this.idtemp5=null
				this.idtemp6=null
			},
			change4(idx){
				this.showlist=true
				this.idtemp4=idx
				this.idtemp1=null
				this.idtemp2=null
				this.idtemp3=null
				this.idtemp5=null
				this.idtemp6=null
			},
			change5(idx){
				this.showlist=true
				this.idtemp5=idx
				this.idtemp1=null
				this.idtemp2=null
				this.idtemp3=null
				this.idtemp4=null
				this.idtemp6=null
			},
			change6(idx){
				this.showlist=true
				this.idtemp6=idx
				this.idtemp1=null
				this.idtemp2=null
				this.idtemp3=null
				this.idtemp4=null
				this.idtemp5=null
			},
			close5(){
				this.showlist=false
			},
			close2(){
				this.showlist=false
				if (this.idtemp1!=null || this.idtemp1==0){
					this.notdel1[Number(this.idtemp1)]=false
				}
				else if(this.idtemp2!=null || this.idtemp2==0){
					this.notdel2[Number(this.idtemp2)]=false
				}
				else if(this.idtemp3!=null || this.idtemp3==0){
					this.notdel3[Number(this.idtemp3)]=false
				}
				else if(this.idtemp4!=null || this.idtemp4==0){
					this.notdel4[Number(this.idtemp4)]=false
				}
				else if(this.idtemp5!=null || this.idtemp5==0){
					this.notdel5[Number(this.idtemp5)]=false
				}
				else if(this.idtemp6!=null || this.idtemp6==0){
					this.notdel6[Number(this.idtemp6)]=false
				}
			},
			addgroup(){
				this.showaddgroup=true
			},
			cgn11(){
				this.cgn1=true
			},
			cgn12(){
				this.cgn2=true
			},
			close(){
				this.showaddgroup=false
			},
			close3(){
				this.cgn1=false
			},
			close4(){
				this.cgn2=false
			},
			tohome(){
				uni.reLaunch({
					url:'/page_list/friendhome/friendhome'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.bottom{
	width: 100%;
	position: fixed;
	bottom: 10rpx;
	background-color: #FFFFFF;
	.bottombar{
			width:700rpx;
			top:1070rpx;
			left:20rpx;
			border:5rpx solid black;
			box-sizing: border-box;
			border-radius: 60rpx;
			height:120rpx;
			background-color: #FFFFFF;
			position:fixed;
			.block{
				border:5rpx solid black;
				border-radius: 50rpx;
				height:70rpx;
				width:130rpx;
				display:inline-block;
				z-index: -1;
				margin:20rpx 80rpx 20rpx 20rpx;
			}
			.label{
				height:40rpx;
				width:40rpx;
				display:inline-block;
				margin-right:65rpx;
				margin-left: 60rpx;
				margin-top:35rpx;
				z-index: 10000;
			}
	}
};
.overflow{
	margin-top: 250rpx;
	  position: fixed;
	  height: 1010rpx;
	  width: 100%;
	  overflow-y: hiden;
	  overflow: auto;
};
.overflow::-webkit-scrollbar{ display: none !important; }
.grayblock{
	position: absolute;
	z-index: 2000;
	background-color: rgba(128,128,128,0.8);
	opacity: 0.8;
	height: 1700rpx;
	width: 750rpx;
};
.changeheadblock2{
	height:550;
	width:450;
	position: fixed;
	margin-right: 50rpx;
	border: 5 solid white;
	border-radius: 20rpx;
	z-index: 20000;
	margin-left: 150rpx;
	margin-top: 450rpx;
	background-color: rgba(256,256,256,1);
	padding: 25rpx 25rpx 45rpx 25rpx;
	.close{
		height:30rpx;
		width:30rpx;
		float:right;
	};
		.group{
			border: 5rpx solid black;
			border-radius: 15rpx;
			background-color: white;
			font-size: 40%;
			padding: 8rpx 25rpx 8rpx 25rpx;
			text-align: center;
			height: 40rpx;
			font-size: 40%;
			color: black;
			margin:20rpx 150rpx 20rpx 140rpx;
		};
		.changename{
			background-color: #343434;
			border: 5rpx solid black;
			border-radius: 15rpx;
			font-size: 40%;
			padding: 8rpx 25rpx 8rpx 25rpx;
			text-align: center;
			height: 100rpx;
			display: inline;
			color: white;
			margin:20rpx 20rpx 30rpx 50rpx;
		};
		.changename2{
			background-color: white;
			border: 5rpx solid black;
			border-radius: 15rpx;
			font-size: 40%;
			padding: 8rpx 25rpx 8rpx 25rpx;
			text-align: center;
			height: 100rpx;
			display: inline;
			color: black;
			margin:20rpx 20rpx 30rpx 20rpx;
		}
};
.changeheadblock{
	.line{
		margin:40rpx 0rpx 5rpx 40rpx;
		height:3.5rpx;
		width:150rpx;
	};
	.exist{
		margin-left: 40rpx;
		color: #343434;
		font-size: 50%;
		opacity: 0.9;
		display: inline
	};
	.input{
		border:5rpx solid black;
		border-radius: 20rpx;
		height:70rpx;
		width:470rpx;
		float:left;
		margin-left:40rpx;
		font-size: 90%;
		margin-top: 50rpx;
		display: inline;
		.text{
			height:70rpx;
			width:200rpx;
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
		height:550;
		width:450;
		margin-right: 50rpx;
		position: fixed;
		border: 5 solid white;
		border-radius: 20rpx;
		z-index: 2050;
		margin-top: 250rpx;
		margin-left: 70rpx;
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
		margin:10rpx 50rpx 10rpx 125rpx;
	};
	.choose{
			font-size: 40%;
			color: rgb(120,120,120);
			opacity: 0.5;
			margin:10rpx 50rpx 10rpx 205rpx;
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
		margin:20rpx 0rpx 40rpx 10rpx;
		.group{
			border: 5rpx solid black;
			border-radius: 15rpx;
			background-color: white;
			font-size: 40%;
			padding: 8rpx 25rpx 8rpx 25rpx;
			text-align: center;
			height: 100rpx;
			width:150rpx;
			display: inline;
			font-size: 40%;
			color: black;
			opacity: 0.2;
			margin:20rpx 0rpx 20rpx 45rpx;
		};
		.group_active{
			border: 5rpx solid black;
			border-radius: 15rpx;
			background-color: white;
			font-size: 40%;
			font-weight: bold;
			padding: 8rpx 25rpx 8rpx 25rpx;
			text-align: center;
			height: 100rpx;
			width:150rpx;
			font-size: 40%;
			display: inline;
			color: black;
			margin:20rpx 0rpx 20rpx 20rpx;
		}
	};
	.edit{
		color:rgb(40,40,40);
		opacity: 0.3;
		font-size: 20rpx;
		margin: 160rpx 0 20rpx 200rpx;
	}
	clear: both;
};
.addfriend{
	.close{
		height:30rpx;
		width:30rpx;
		float:right;
		margin:10rpx 10rpx 0 0
	}
		height:450rpx;
		width:450rpx;
		float: left;
		position: relative;
		z-index: 100;
		display: inline-block;
		margin:-700rpx 60rpx 300rpx 140rpx;
		border:5rpx solid white;
		border-radius: 20rpx;
		background-color: #FFFFFF;
		.friend{
			width:160rpx;
			height:160rpx;
			margin:40rpx 140rpx 0rpx 140rpx;
		};
		.name{
			text-align: center;
		};
		.number{
			
		}
	};
.block1{
	.label{
		border:5rpx solid black;
		border-radius: 16rpx;
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
		position: fixed;
		background-color: #FFFFFF;
		z-index: -1;
		margin-bottom: 20rpx;
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
			width:300rpx;
			height:50rpx;
			margin-left:25rpx;
		};
	};
	clear: both;
};

</style>
