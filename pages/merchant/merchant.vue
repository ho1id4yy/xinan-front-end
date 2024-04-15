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
				<input class='text' type='text' placeholder="选择城市" />
				<image class='select' src='../../static/icon/Component 23.png'></image>
			</view>
			<view class='input'>
				<input class='text' type='text' placeholder="选择区/县" />
				<image class='select' src='../../static/icon/Component 23.png'></image>
			</view>
		</view>
		<view>
			<view class='tar1'>为您推荐</view>

			<view class='tar2'>收藏</view>
			<view class='tar2'>致电</view>
		</view>
		<view class='mechantblock'>
			<view class='rectangle' v-if="iscancel1">
				<view class='name'>瑞星殡葬用品</view>
				<view class='opac'>全用品售卖店</view>
				<view class='addr'>地址：碑林区八仙庵</view>
				<view class='addr'>负责人：潘先生 电话：123456789212</view>
				<view>
					<view>
						<image class='circle' src='../../static/icon/star.png'></image>
						<image class='phone' src='../../static/icon/star1.png'></image>
					</view>
					<view>
						<image class='circle2' src='../../static/icon/phone.png'></image>
						<image class='phone2' src='../../static/icon/tel.png'></image>
					</view>
				</view>
			</view>
			<view class='rectangle' v-if="iscancel1">
				<view class='name'>临潼殡仪馆</view>
				<view class='opac'>火化殡仪馆</view>
				<view class='addr'>地址：临潼区苗坡路1号</view>
				<view class='addr'>负责人：吕国华 电话：029-83886470</view>
				<view>
					<view>
						<image class='circle' src='../../static/icon/star.png'></image>
						<image class='phone' src='../../static/icon/star1.png'></image>
					</view>
					<view>
						<image class='circle2' src='../../static/icon/phone.png'></image>
						<image class='phone2' src='../../static/icon/tel.png'></image>
					</view>
				</view>
			</view>
			<view class='rectangle' v-if="iscancel1">
				<view class='name'>西安市回民殡仪馆</view>
				<view class='opac'>土葬殡仪馆</view>
				<view class='addr'>地址：东举院巷146号</view>
				<view class='addr'>负责人：屈景慧 电话：123456789212</view>
				<view>
					<view>
						<image class='circle' src='../../static/icon/star.png'></image>
						<image class='phone' src='../../static/icon/star1.png'></image>
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
					<view>
						<image class='circle' src='../../static/icon/star.png'></image>
						<image class='phone' src='../../static/icon/star1.png'></image>
					</view>
					<view>
						<image class='circle2' src='../../static/icon/phone.png'></image>
						<image class='phone2' src='../../static/icon/tel.png'></image>
					</view>
				</view>
			</view>
		</view>
		<buttom-bar :buttombar="buttombar"></buttom-bar>
	</view>
</template>

<script>
export default {
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
			iscancel1: true,
			iscancel2: true,
		};
	},
	methods: {
		toserve() {
			uni.redirectTo({
				url: '/pages/serve/serve'
			})
		},
		tocircle() {
			uni.redirectTo({
				url: '/page_anxincircle/anxincircle/anxincircle'
			})
		},
		touser() {
			uni.redirectTo({
				url: '/page_user/homepage/homepage'
			})
		},
		tolist() {
			uni.redirectTo({
				url: '/page_list/mainlist/mainlist'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.mechantblock {
	.circle {
		height: 80rpx;
		width: 80rpx;
		position: absolute;
		margin: -95rpx 20rpx 40rpx 540rpx;
		display: inline;
		z-index: 1;
	}

	;

	.phone {
		height: 35rpx;
		width: 35rpx;
		position: absolute;
		margin: -80rpx 20rpx 40rpx 565rpx;
		z-index: 100;
		display: inline;
	}

	;

	.phone2 {
		height: 38rpx;
		width: 38rpx;
		position: absolute;
		margin: -80rpx 20rpx 40rpx 470rpx;
	}

	.circle2 {
		height: 80rpx;
		width: 80rpx;
		position: absolute;
		margin: -95rpx 20rpx 40rpx 450rpx;
	}

	height:800rpx;
	overflow: auto;

	.rectangle {
		width: 620rpx;
		height: 130rpx;
		margin-left: 40rpx;
		margin-top: 25rpx;
		position: relative;
		padding: 20rpx;
		background-color: rgb(248, 248, 248);
		border: 5rpx solid white;
		border-radius: 50rpx;
	}

	;

	.name {
		font-weight: bold;
		position: relative;
		display: inline;
		margin: -100rpx 20rpx 30rpx 20rpx;
	}

	;

	.opac {
		font-size: 20%;
		position: relative;
		color: rgb(210, 210, 210);
		opacity: 0.8;
		display: inline;
	}

	;

	.addr {
		font-size: 5%;
		position: relative;
		color: rgb(50, 50, 50);
		margin: 20rpx 0rpx -15rpx 20rpx;
	}
}

.tar1 {
	display: inline;
	margin-left: 50rpx;
	font-size: 80%;
	font-weight: bold;
}

;

.tar2 {
	display: inline;
	float: right;
	margin-right: 100rpx;
	margin-left: -30rpx;
	font-size: 50%;
	opacity: 0.5;
}

.block {
	height: 240rpx;

	.add {
		height: 60rpx;
		width: 60rpx;
		display: inline;
		float: right;
		margin: 10rpx 55rpx 0 0;
	}

	.input {
		border: 5rpx solid black;
		border-radius: 20rpx;
		height: 60rpx;
		width: 300rpx;
		float: left;
		margin-left: 40rpx;
		font-size: 90%;
		display: inline;

		.text {
			padding: 8rpx 0rpx 8rpx 18rpx;
			opacity: 0.5;
			font-size: 80%;
		}
	}

	;

	.select {
		width: 30rpx;
		height: 20rpx;
		margin: -40rpx 20rpx 40rpx 240rpx;
		display: inline-block;
		float: left;
	}

	;

	.icon {
		width: 30rpx;
		height: 30rpx;
		background-color: #FFFFFF;
		float: left;
		display: inline-block;
		margin-top: 25rpx;
		margin-left: 60rpx;
		margin-right: 0rpx;
		display: inline;
		float: left;
	}

	;

	.title {
		color: #343434;
		font-size: 30rpx;
		display: inline;
		margin-top: 20rpx;
		margin-left: 20rpx;
		float: left;
	}

	;

	.line {
		height: 80rpx;
		font-weight: bold;
		width: 667rpx;
		float: left;
		margin-left: 60rpx;
		margin-top: 10rpx;
		font-size: 150%;

		.vector {
			width: 400rpx;
			height: 50rpx;
			float: right;
		}
	}

	;
	clear: both;
}

;

.bottombar {
	width: 700rpx;
	margin: 0rpx 20rpx 20rpx 20rpx;
	border: 5rpx solid black;
	box-sizing: border-box;
	border-radius: 60rpx;
	height: 120rpx;
	z-index: 100;
	background-color: #FFFFFF;
	position: absolute;

	.block {
		border: 5rpx solid black;
		border-radius: 50rpx;
		height: 70rpx;
		width: 140rpx;
		display: inline-block;
		position: absolute;
		margin: 15rpx 0rpx 0rpx 185rpx;
	}

	.label {
		height: 40rpx;
		width: 40rpx;
		display: inline-block;
		margin-right: 85rpx;
		margin-left: 40rpx;
		margin-top: 35rpx;
		float: right;
	}
}
</style>