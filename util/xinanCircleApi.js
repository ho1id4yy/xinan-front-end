import Request from "./http"
// 分页查看所有的安心圈
export function getAllXinanCircle(page, pageSize) {
	return Request({
		url: `/user/moment?page=${page}&pageSize=${pageSize}`,
		method: 'GET'
	})
}
// 分页查看指定用户的安心圈(查看别人的安心圈)
export function getOtherXinanCircle(page, pageSize, userId = getApp().globalData.id) {
	return Request({
		url: `/user/moment/${userId}?page=${page}&pageSize=${pageSize}`,
		method: 'GET',
	})
}
// 发布新的安心圈动态
export function updataXinanCircle(xinanCircleObj) {
	return Request({
		url: '/user/moment',
		method: 'POST',
		data: xinanCircleObj
	})
}
// 改动安心圈动态
export function editXinanCircle(xinanCircleObj) {
	return Request({
		url: '/user/moment',
		method: 'PUT',
		data: xinanCircleObj
	})
}
// 根据id删除安心圈动态
export function deleteXinanCircle(id) {
	return Request({
		url: `/user/moment/${id}`,
		method: 'DELETE',
	})
}
// 用户对安心圈点赞操作
export function heartXinanCircle(momentId) {
	let userId = getApp().globalData.id
	return Request({
		url: '/user/moment/likes',
		method: 'POST',
		data: {
			momentId,
			userId
		}
	})
}
// 用户根据安心圈id撤销点赞
export function cancelHeartXinanCircle(momentId) {
	return Request({
		url: `/user/moment/likes/${momentId}`,
		method: 'DELETE',
	})
}