<template>
	<view class="buttom-bar-wrap">
		<view class="buttom-bar">
			<ul class="ul">
				<li :key="idx" :class="[idx==buttombar.active?'border active':'border']"
					v-for="(item,idx) in buttombar.imglist" @click="goto(idx)">
					<image class="image" :src="item" alt="" />
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bottom: 0,
			}
		},
		created() {
			// const {
			// 	safeArea,
			// 	screenHeight
			// } = uni.getSystemInfoSync()
			// this.bottom = screenHeight - safeArea.bottom
		},
		mounted() {},
		methods: {
			goto(idx) {
				if (idx == 0) {
					uni.navigateTo({
						url: '/page_list/mainlist/mainlist'
					})
				}
				if (idx == 1) {
					uni.navigateTo({
						url: '/pages/serve/serve'
					})
				}
				if (idx == 2) {
					uni.navigateTo({
						url: '/page_anxincircle/anxincircle/anxincircle'
					})
				}
				if (idx == 3) {
					uni.navigateTo({
						url: '/page_user/homepage/homepage'
					})
				}
			}
		},
		props: {
			buttombar: {
				type: Object,
				default: {
					active: 0,
					imglist: [
						'/static/icon/first_black.png',
						'/static/icon/second_white.png',
						'/static/icon/third_white.png',
						'/static/icon/Group_white.png'
					]
				}
			}
		}

	}
</script>

<style lang="scss" scoped>
	$height: 8vh;
	.buttom-bar-wrap {
		background-color: #fff;
		z-index: 999;
		box-sizing: border-box;
		width: 100%;
		padding: 0rpx 25rpx 0;
		position: fixed;
		bottom: 0rpx;
		left: 0;

		.buttom-bar {
			height: 100%;
			width: 100%;
			border-radius: 120rpx;
			border: 2rpx solid #000;
			position: relative;
			box-sizing: border-box;
			overflow: hidden;
			background-color: #fff;
			padding: 8rpx 0rpx;

			.ul {
				height: 100%;
				width: 100%;
				display: flex;
				justify-content: space-around;
				align-items: center;

				.border {
					width: 20%;
					height: 84rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 120rpx;

					&.active {
						border: #000 2rpx solid;
					}

					.image {
						width: ($height/3);
						height: ($height/3);
					}

				}
			}
		}
	}
</style>