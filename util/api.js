import Request from "./http"


// 上传图片
export function updataImage(templeUrl) {
	return new Promise((resolve, reject) => {
		uni.uploadFile({
			url: getApp().globalData.BASE_URL + '/user/common/upload',
			filePath: templeUrl,
			name: 'image',
			header: {
				"Content-Type": "multipart/form-data",
				"token": getApp().globalData.token,
			},
			success(res) {
				JSON.parse(res.data)
				resolve(JSON.parse(res.data).data)
			},
			fail(err) {
				reject(err)
			}
		});
	})
}
