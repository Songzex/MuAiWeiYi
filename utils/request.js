/**
 * 请求组件封装
 * @param {Object} url 请求地址 /banner
 *
 *
 * @param {Object} data 请求参数
 * @param {Object} method 请求的方法
 * @param {Object} contentType 请求内容类型 1=json  2=form
 */
import store from '@/store/index.js';
function request({url, data, method="GET", contentType=1}) {
	let header = {
		'content-type': contentType === 1 ? 'application/json' : 'application/x-www-form-urlencoded'
		// 'Access-Control-Allow-Origin': '*',// 设置跨域允许的源，通常情况下这样设置并不生效，需要在服务端设置
	}
	let baseUrl = "http://localhost:8082";
    const token = store.state.token; // 假设你的 token 存储在 state 中名为 token
	   console.log("token  "+token)
	    // 如果存在 token，则添加到 header 中eyyy
	    if (token) {
	        header.token = token;
	    }
	
	return new Promise((resolve, reject)=>{
		uni.request({
			url: baseUrl + url,
			data,
			method,
			header,
			success: (res) => {
				if (res.statusCode === 200) {
					//请求成功
					resolve(res.data);
				} else if (res.statusCode === 401) {
					uni.showToast({
						icon: 'none',
						title: "未登录或登录状态已超时",
						duration: 1500
					});
				} else if (res.statusCode === 405) {
					uni.showToast({
						icon: 'none',
						title: "请求方法错误",
						duration: 1500
					});
				} 
				else if (res.status === 500) {
					uni.showToast({
						icon: 'none',
						title: "你的网络出错了" + res.message,
						duration: 1500
					});
				}else {
					uni.showToast({
						icon: 'none',
						title: "不好意思",
						duration: 1500
					});
				}
			},
			fail: (err) => {
				console.log("err:", err)
				uni.showToast({
					icon: 'none',
					title: err.errMsg,
					duration: 1500
				});
				reject(err);
			}
		})
	})
}

export default {request}