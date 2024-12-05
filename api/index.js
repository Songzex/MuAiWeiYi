import request from "@/utils/request.js"
//获取聊天记录
export function topicDetail() {
	return request.request({
	    url: '/app/topic/list',
		method: 'GET',
		
	})
}//修改信息
export function updateuserdata(data) {
	return request.request({
	    url: '/public/updateuserdata',
		method: 'POST',
		data
	})
}
//logout
export function clearState(email) {
	return request.request({
		url: '/public/clearState',
		method: 'GET',
		data: { email: email }
	})
}

