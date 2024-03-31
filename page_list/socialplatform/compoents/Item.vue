<template>
	<view class="socialItem">
		<view class="ItemHead">
			<image :src="appMsg.img" mode="" @click="openEditBox"></image>
			<text>{{appMsg.name}}</text>
		</view>
		<radio-group class="ItemBottom" name="" @change="checkboxChange">
			<label class="item" v-for="(item ,idx ) in checkMsg">
				<text :class="[item.checked?'active':'']">{{item.value}}</text>
				<radio :value="item.value" :checked="item.checked" />
			</label>
		</radio-group>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				checkMsg: [{
						value: '注销',
						checked: false
					},
					{
						value: '转让',
						checked: false
					},
					{
						value: '保留',
						checked: false
					}
				]
			}
		},
		methods: {
			openEditBox(){
				uni.$emit('openEditBox',this.$props.idx)
			},
			checkboxChange(e) {
				for (let i = 0; i < this.checkMsg.length; i++) {
					if (e.detail.value.includes(this.checkMsg[i].value)) {
						this.checkMsg[i].checked = true;
					} else {
						this.checkMsg[i].checked = false;
					}
				}
			},
		},
		mounted() {
			if (this.$props.appMsg.status != -1) {
				this.checkMsg[this.$props.appMsg.status].checked = true;
			}
		},
		props: {
			appMsg: {
				type: Object,
				default: {
					img: "/static/picture/wx.png",
					name: "微信",
					status: 1
				}
			},
			idx:{
				type:Number,
				default:0
			}
		}
	}
</script>

<style lang="scss" scoped>
	.socialItem {
		$ItemHeight: 300rpx;
		$imgHeight: $ItemHeight/3;
		$bottomHight: $ItemHeight*2/3;
		width: 100%;
		height: $ItemHeight;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;

		.ItemHead {
			height: $imgHeight;
			width: 90%;
			border-radius: 20rpx;
			border: 4rpx solid #000;
			display: flex;
			align-items: center;
			padding: $imgHeight*0.1 20rpx;
			z-index: 10;
			background-color: #fff;

			image {
				height: $imgHeight*0.8;
				width: $imgHeight*0.8;
			}

			text {
				margin-left: 30rpx;
				font-weight: 600;
			}
		}

		.ItemBottom {
			height: $bottomHight;
			width: 80%;
			margin-top: -20rpx;
			z-index: 1;
			position: relative;
			display: flex;
			justify-content: space-around;
			border-bottom-right-radius: 20rpx;
			border-bottom-left-radius: 20rpx;
			box-shadow: 0rpx 5rpx 8rpx 0rpx #b4b4b4;
			padding: 60rpx 20rpx 20rpx;

			.item {
				width: 30%;
				height: 90%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-between;

				text {
					text-align: center;
					color: #bababa;

					&.active {
						color: #000;
						font-weight: 600;
					}
				}

			}
		}
	}
</style>