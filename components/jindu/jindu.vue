<template>
	<view>
		<uni-steps :options="list2" active-color="#007AFF" :active="active" direction="row" />
		<button type="primary" size="mini" style="margin: 30px 10px; width: 100px;" @click="change">
		改变状态</button>		
	</view>
</template>

<script>
	export default {
		name:"jindu",
		data() {
			return {
				active: 1,
				list2: [{
									title: '买家下单',
									desc: '2018-11-11'
								}, {
									title: '卖家发货',
									desc: '2018-11-12'
								}, {
									title: '买家签收',
									desc: '2018-11-13'
								}, {
									title: '交易完成',
									desc: '2018-11-14'
								}]
			};
		},
		methods:{
			change() {
				if (this.active < this.list2.length - 1) {
					this.active += 1
				} else {
			this.active = 0
		}
	}
		}
	}
</script>

<style>
.status-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 92rpx;
		margin: 30rpx;
		background-color: #007AFF;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 15px;
		flex-direction: row;
	}
</style>