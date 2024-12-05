// 页面路径：store/index.js
import { createStore } from 'vuex'
const store = createStore({
	state:{//存放状态
		"username":"foo",
		"age":18,
		"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MjgxIiwiaWF0IjoxNzMyNjk0MzMzLCJleHAiOjE3MzMyOTkxMzN9.Lu46j_uOGCwugLaHSze0DifxqA4KTdsK0-jCjZr2eCJ-YFgGNjbh14GxHJNIbrohUJqcdEe7lHrYrUisL57RSw",
	},
	mutations: {
			add(state) {
				// 变更状态
				state.age += 2
			},
			setToken(state,n) {
				// 变更状态
				state.token = token
			}
		}
})

export default store
