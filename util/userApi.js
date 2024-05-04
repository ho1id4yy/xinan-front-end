import Request from "./http"

// 修改用户信息 ,userInfo 修改后的用户信息
export function updataUserInfo(userInfo) {
	return Request({
		url: '/user/user',
		data: userInfo,
		method: 'PUT'
	})
}

// 根据用户id查询距离用户最近生日天数
export function getUserLatestBirthday(userId = getApp().globalData.id) {
	return Request({
		url: `/user/user/birthday/${userId}`,
		method: 'GET'
	})
}
// 根据用户id查询用户名片
export function getUserCard(userId = getApp().globalData.id) {
	return Request({
		url: `/user/user/card/${userId}`,
		method: 'GET'
	})
}
// 获取当前用户收藏的商家
export function getUserFavorites() {
	return Request({
		url: '/user/user/favorites',
		method: 'GET'
	})
}
//用户根据商家id收藏商家
export function userFavorites(merchantId) {
	return Request({
		url: '/user/user/favorites',
		method: 'POST',
		data: {
			merchantId: merchantId
		}
	})
}
// 根据id得到用户信息
export function getUserInfo(id = getApp().globalData.id) {
	return Request({
		// url: `/user/user/${id}`,
		url: `/user/user/card/${id}`,
		method: 'GET'
	})
}

// 根据手机号查询用户
export function getUserInfoByPhone(phoneNumber) {
	return Request({
		url: `/user/user/find/${phoneNumber}`,
		method: 'GET'
	})
}
// 根据好友ID删除好友
export function deleteFriend(friendId) {
	return Request({
		url: `/user/user/friend/${friendId}`,
		method: "DELETE"
	})
}
// 查询当前用户好友分类 
export function getFriendCategory() {
	return Request({
		url: '/user/user/friendCategory',
		method: "GET"
	})
}
// 插入新的好友分类
export function addFriendCategory(categoryName) {
	return Request({
		url: '/user/user/friendCategory',
		method: "POST",
		data: {
			name: categoryName
		}
	})
}
// 根据好友 分组对象 id 修改好友的分组信息, (categoryId, name ,分组对象)
export function friendCategory(categoryObj, userId) {
	return Request({
		url: '/user/user/friendCategory',
		method: "PUT",
		data: {
			id: categoryObj.id,
			name: categoryObj.name,
			userId,
		}
	})
}
// 根据好友分组信息id删除分组
export function deleteFriendCategory(categoryId) {
	return Request({
		url: `/user/user/friendCategory/${categoryId}`,
		method: "DELETE",
	})
}
//查找用户所有好友
export function getFriend() {
	return Request({
		url: `/user/user/friends`,
		method: "GET",
	})
}
// 添加好友,根据好友请求的请求来添加 好友分类id ，好友的用户id ，葬礼是否邀请用户，messageId根据好友请求列表得到 好友备注名
export function addFriendFromRequest(
	friendCategoryId,
	id,
	invited = 0,
	messageId,
	remarkName = null
) {
	return Request({
		url: `/user/user/friends`,
		method: "POST",
		data: {
			friendCategoryId,
			id,
			invited,
			messageId,
			remarkName
		}
	})
}
//删除好友请求, 添加好友后删除请求列表
export function deleteFriendRequest(friendId) {
	return Request({
		url: `/user/user/friends/request/${friendId}`,
		method: "DELETE",
	})
}

// 查看好友请求 ， 别人想加你为好友
export function getFriendRequest() {
	return Request({
		url: `/user/user/friends/request`,
		method: "GET",
	})
}
// 发送好友请求 加别人为好友   categoryid给对方的分类 , 接收者用户id
export function postFriendRequest(categoryid, receiverId) {
	return Request({
		url: `/user/user/friends/request`,
		method: "POST",
		data: {
			packageId: categoryid,
			receiverId
		}
	})
}
//更改好友信息 ， 改备注 ，邀请 ，和分类
export function changeFriendData(friendCategoryId, id, invited = 0, remarkName = null) {
	return Request({
		url: `/user/user/friends`,
		method: "PUT",
		data: {
			friendCategoryId,
			id,
			invited,
			remarkName
		}
	})
}