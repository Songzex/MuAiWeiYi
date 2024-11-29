<template>
	<view class="content">
		<view>
				<text>{{token}}</text>
				<button @click="setTokens()">增加</button>
			</view>
	</view>
</template>

<script>
	import store from '@/store/index.js';//需要引入store
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
            setTokens(){
				const token ="我是token"
				store.commit("setToken",token)
			}
		},
		computed: {
					username() {
						return store.state.username
					},
					token(){
						return store.state.token
					}
				}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
