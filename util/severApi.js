import Request from "./http"
//得到用户服务流程
export function getUserProcess() {
	return Request({
		url: '/user/process',
		method: 'GET'
	})
}
// 添加流程 默认是该用户的最后一个流程,服务流程名, 服务简单描述 ,
export function addProcess(name, illustrate) {
	return Request({
		url: '/user/process',
		method: 'POST',
		data: {
			name,
			illustrate
		}
	})
}
// 根据流程id修改某一个流程的内容 , ProcessObj ,修改后的对象
export function changeProcess(ProcessObj) {
	return Request({
		url: '/user/process',
		method: 'POST',
		data: ProcessObj
	})
}

// 修改流程顺序 processArr 改变顺序后的所有 流程
export function changeProcessOrder(processArr) {
	return Request({
		url: `/user/process/order`,
		method: 'PUT',
		data: processArr
	})
}
// 按照流程id批量删除流程 processIdArr
export function deleteProcess(processIdArr) {
	return Request({
		url: `/user/process/detail/${processIdArr.join()}`,
		method: 'DELETE',
	})
}

//  增加流程细则 
// detailObj:{
//     "content": "string",  流程细则内容
//     "id": 0,  流程细则id , 新增默认null
//     "processId": 0, 流程id
//     "title": "string"  流程细则标题
// }
export function addProcessDetail(detailObj) {
	return Request({
		url: '/user/process/detail',
		method: 'POST',
		data: detailObj
	})
}
// 根据流程细则id修改流程细则 , detailObj 修改后的
export function changeProcessDetail(detailObj) {
	return Request({
		url: '/user/process/detail',
		method: 'PUT',
		data: detailObj
	})
}
// 改变流程细则顺序  detailArr 改变顺序后的所有 流程细则
export function changeProcessDetailOrder(detailArr) {
	return Request({
		url: '/user/process/detail/order',
		method: 'POST',
		data: detailArr
	})
}
// 根据id批量删除流程细则 detaiIdlArr,数组[0,1,2]
export function deleteProcessDetail(detailIdlArr) {
	return Request({
		url: `/user/process/detail/${detailIdlArr.join()}`,
		method: 'DELETE',
	})
}
// 根据地址条件查询商家
export function getMerchants(city, district) {
	return Request({
		url: `/user/process/merchants`,
		method: 'GET',
		data: {
			city,
			district
		}
	})
}