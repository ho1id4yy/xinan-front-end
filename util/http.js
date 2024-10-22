export default function Request({
	url,
	method,
	data = null,
	contentType = 'application/json'
}) {
	uni.showLoading({
		title: '加载中'
	})
	return new Promise((resolve, reject) => {
		uni.request({
			url:getApp().globalData.BASE_URL  + url,
			data: data || {},
			method: method || 'GET',
			header: {
				// || '' 考虑到登录API没有token。
				'token': getApp().globalData.token || '',
				'Content-Type': contentType
			},
			success(res) {
				if (res.statusCode !== 200) { // 返回错误
					if (res.statusCode == 401) { // 没有token，或者token失效
						uni.removeStorage({ // 移除失效的token
							key: "token",
							success: () => {
								uni.redirectTo({
									url: "/pages/login/login"
								});
							}
						});
						return;
					}
					return reject()
				}
				resolve(res.data)
			},
			fail(err) {
				reject(err)
			},
			complete() {
				uni.hideLoading()
			}
		})
	})
};

