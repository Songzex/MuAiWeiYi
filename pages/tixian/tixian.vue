<template>
	<view class="u1">
		<view class="u2">
			<view class="ketixian">可提现金额</view>
			<view class="kejin">10000元</view>
			<view class="tixian">
					<view  class="tixianbtn">
						<button class="tiixanbut">提现</button>
					</view>
			</view>
		</view>
	</view>
	<view class="u3">
		<view>收入来源</view>
		<view>收入金额</view>
		<view>体现时间</view>
	</view>
	  <view class="divider"/>
	  <view class="shuju" v-for="(item ,index) in 4":key="index
	  ">
		  <view class="huo">xxxxxxx活动</view>
		  <view class="jin">1200元</view>
		  <view class="date">2024-11-01 15:20</view>
	  </view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.divider{
		 margin-top: 0.8rem;
		 background: #a1a39d;
		 width: 100%;
		 height: 1upx;
		}
.html{
		font-size: 16px;
	}
.u1{
	background-color: #e8e8e8;
	width: 100%;
	height: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 1rem;
	padding-bottom: 1rem;
	
}
.u2{
	width: 90%;
	height: 13rem;
	background: linear-gradient(120deg,#CDE6EE 37.21%,#DECAF1 100%,#FFFFFF 100%);  
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	row-gap: 2rem;
	padding-left: 1rem;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
}
.u3{
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	margin-top: 1rem;
	font-size: 1rem;
	color: #7d7f7a;
}
.shuju{
	display: grid;
	grid-template-columns: 1fr 1fr 1fr ;
	justify-content: flex-start;
	align-items: center;
	margin-top: 0.3rem;
}
.date{
	font-size: 0.7rem;
	text-align: center;
}
.jin{
	text-align: center;
}
.huo{
	text-align: center;
}
.ketixian{
	font-size: 1.3rem;
	height: 35%;
}
.kejin{
	height: 35%;
	text-align: center;
	width: 100%;
	font-size: 2rem;
}
.tixian{
	height: 30%;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
	column-gap: 0.2rem;
}
.tixianbtn{
	margin-right:10px;
}
.tiixanbut{
	border: 1px solid #7b8df1;
	width: 122rpx;
	font-size: 25rpx;
	border-radius: 34px;
}
@media screen  and (max-width:320px){
	.shuju{
		display: grid;
		grid-template-columns: 1fr 1fr 1fr ;
		justify-content: center;
		align-items: center;
		margin-top: 0.3rem;
	}
	.date{
		font-size: 0.7rem;
	}
}
</style>
