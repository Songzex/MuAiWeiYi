<template>
		<view class="body">
		    <view class="header">
		      <view 
			  class="tou1">
					<view class="adv">
						 <img 
						 class="touxiang"
						 :src="$imagePreUrl+ 'wome.png'"
						 alt="头像" 
						 style="width: 100px;
						 border-radius:100px;
						 box-shadow: 8px 1px 2px 0.2px #888888;
						 height: 100px;"
						>
						<view style="display: flex;
						position: relative;
						top: -13px;
						right: -12px;
						">
							<image
							:src="$imagePreUrl+ 'hong_xuanzhang.png'"
							alt="勋章" 
							style="width: 30px;
							z-index: 2;
							border-radius:100px;
							height: 30px;"
							></image>
							<view style="width: 111px;
							z-index: 1;
							left: -23px;
							position: relative;
							height: 24px;
							color: #ff057e;
							font-size: 15px;
							background-color: #faa9ff;
							border-radius: 45px;
							">爱心红娘</view>
						</view>
					</view>
		            <view class="tou11">
						<view
						style="
						font-weight: 43px;
						font-size: clamp(5px, 4vw, 28px); /* 最小 12px，最大 18px，动态调整 */
						white-space: nowrap; /* 防止换行 */
						overflow: hidden;
						text-overflow: ellipsis; /* 超出时显示省略号 */
						"
						>宋先生******9</view>
						<view style="font-size: 12px;
						font-size: clamp(5px, 4vw, 12px); /* 最小 12px，最大 18px，动态调整 */
						white-space: nowrap; /* 防止换行 */
						overflow: hidden;
						text-overflow: ellipsis; /* 超出时显示省略号 */
						color: #ff1100;
						">ID: 432322321</view >						
					</view>
		            <view class="heads">
						<view style="position: relative;
						left: 23px;
						"><image
						style="width: 40px;
						height: 40px;"
							:src="$imagePreUrl+ 'hong_shezhi.png'"
							alt="头像" 
							></image></view >
						<view class="xinjis">
							<view>
								<image
								:src="$imagePreUrl+ 'hong_jifens.png'"
								style="width: 26px;
								z-index: 6;
								border-radius:100px;
								position: relative;
								height: 26px;"
								></image>
							</view>
							<text 
							class="text"
							style="background-color: aliceblue;
							border-radius: 12px;
							position: relative;
							padding-left: 12px;
							box-shadow: 8px 1px 2px 0.2px #888888;
					        z-index: 2;
							font-size: 14px;
						    font-size: clamp(5px, 4vw, 12px); /* 最小 12px，最大 18px，动态调整 */
						    white-space: nowrap; /* 防止换行 */
						    overflow: hidden;
						    text-overflow: ellipsis; /* 超出时显示省略号 */
							left: -12px;
							">120等级</text>
							</view >
						<view class="jifen"><view>
								<image
									:src="$imagePreUrl+ 'hong_jifens.png'"
									style="width: 30px;
								    position: relative;
									border-radius:100px;
									z-index: 2;
									height: 30px;"
									></image>
							</view>
							<text 
							class="text"
							style="background-color: aliceblue;
										border-radius: 12px;
										position: relative;
										padding-left: 12px;
										z-index: 1;
										box-shadow: 8px 1px 2px 0.2px #888888;
										font-size: 14px;
										font-size: clamp(5px, 4vw, 12px); /* 最小 12px，最大 18px，动态调整 */
										  white-space: nowrap; /* 防止换行 */
										  overflow: hidden;
										  text-overflow: ellipsis; /* 超出时显示省略号 */
										left: -12px;
										">120000积分</text>
							</view >
					</view>
		        </view>
		</view>
		    <view class="banner">
		       <view class="banneritem1">
				   <img :src="$imagePreUrl+ 'hong_kaitongmendian.png'"
				    alt="头像" 
				    style="width: 30px;
				    border-radius:20px;
				    height: 30px;"
				   >
				   <view>开通实体门店 享受双倍收益</view>
				   <view style="
				   width: 71px;
				   background-color: #ffbb1a;
				   height: 29px;
				   border-radius: 12px;
				   display: flex;
				   justify-content: center;
				   align-items: center;
				   text-align: center;
				   font-size: 13px;
				   color: aliceblue;">去开通</view>
			   </view>
				<!--    -->
		    </view>
			<view class="banner2">
				<view class="banner2item">
					 <view>
						 <img :src="$imagePreUrl+ 'hong_rishouyi.png'"
						  alt="头像" 
						 	style="width: 50px;
						 	border-radius:50px;
						 	 height: 50px;">
					 </view>
					<view>
						今日收益
					</view>
					</view>
				<view class="banner2item">
					<view>
						 <img :src="$imagePreUrl+ 'hong_yueshouyi.png'"
						  alt="头像" 
						 	style="width: 50px;
						 	border-radius:50px;
						 	 height: 50px;">
					 </view>
					<view>
						本月收益
					</view>
					</view>
				<view class="banner2item">
					<view>
						 <img :src="$imagePreUrl+ 'hong_yeji.png'"
						  alt="头像" 
						 	style="width: 50px;
						 	border-radius:50px;
						 	 height: 50px;">
					 </view>
					<view>
						本月业绩
					</view>
					</view>
				<view class="banner2item" @click="toNav('/pages/tixian/tixian')">
					<view>
						 <img :src="$imagePreUrl+ 'hong_tixian.png'"
						  alt="头像" 
						 	style="width: 50px;
						 	border-radius:50px;
						 	height: 50px;">
					 </view>
					<view>
						我的提现
					</view>
					</view>
			</view>
		    <view class="banner3">

				<view class="banner2item">
					 <view>
						 <img :src="$imagePreUrl+ 'hong_qianbao.png'"
						  alt="头像" 
						 	style="width: 50px;
						 	border-radius:50px;
						 	 height: 50px;">
					 </view>
					<view>
						我的钱包
					</view>
					</view>
				<view class="banner2item">
					<view>
						 <img :src="$imagePreUrl+ 'hong_huiyuan.png'"
						  alt="头像" 
						 	style="width: 50px;
						 	border-radius:50px;
						 	 height: 50px;">
					 </view>
					<view>
						我的会员
					</view>
					</view>
				<view class="banner2item">
					<view>
						 <img :src="$imagePreUrl+ 'hong_all_huiyuan.png'"
						  alt="头像" 
						 	style="width: 50px;
						 	border-radius:50px;
						 	 height: 50px;">
					 </view>
					<view>
						全网会员
					</view>
					</view>
				<view class="banner2item" @click="toNav('/pages/qianjindu/qianjindu')">
					<view>
						 <img :src="$imagePreUrl+ 'hong_qianxianjindu.png'"
						  alt="头像" 
						 	style="width: 50px;
						 	border-radius:50px;
						 	 height: 50px;">
					 </view>
					<view>
						牵线进度
					</view>
					</view>

		    </view>
		
		    <view class="banner4">
				<view class="banner2item">
									 <view>
										 <img :src="$imagePreUrl+ 'hong_fenxiang.png'"
										  alt="头像" 
										 	style="width: 50px;
										 	border-radius:50px;
										 	 height: 50px;">
									 </view>
									<view>
										分享获客
									</view>
									</view>
									<view class="banner2item">
										<view>
											 <img :src="$imagePreUrl+ 'hong_mendianxinxi.png'"
											  alt="头像" 
											 	style="width: 50px;
											 	border-radius:50px;
											 	 height: 50px;">
										 </view>
										<view>
											门店信息
										</view>
										</view>
								<view class="banner2item" @click="toNav('/pages/personip/personip')">
									<view>
										 <img :src="$imagePreUrl+ 'hong_ip.png'"
										  alt="头像" 
										 	style="width: 50px;
										 	border-radius:50px;
										 	 height: 50px;">
									 </view>
									<view>
										个人ip
									</view>
									</view>
								<view class="banner2item">
									<view>
										 <img :src="$imagePreUrl+ 'hong_yunying.png'"
										  alt="头像" 
										 	style="width: 50px;
										 	border-radius:50px;
										 	 height: 50px;">
									 </view>
									<view>
										运营支撑
									</view>
									</view>
								<view class="banner2item">
									<view>
										 <img :src="$imagePreUrl+ 'hong_dingdan.png'"
										  alt="头像" 
										 	style="width: 50px;
										 	border-radius:50px;
										 	 height: 50px;">
									 </view>
									<view>
										业绩订单
									</view>
									</view>
									<view class="banner2item">
														 <view>
															 <img :src="$imagePreUrl+ 'hong_tuandui.png'"
															  alt="头像" 
															 	style="width: 50px;
															 	border-radius:50px;
															 	 height: 50px;">
														 </view>
														<view>
															我的团队
														</view>
														</view>
													<view class="banner2item">
														<view>
															 <img :src="$imagePreUrl+ 'hong_zhoubian.png'"
															  alt="头像" 
															 	style="width: 50px;
															 	border-radius:50px;
															 	 height: 50px;">
														 </view>
														<view>
															周边兑换
														</view>
														</view>
													<view class="banner2item">
														<view>
															 <img :src="$imagePreUrl+ 'hong_kefu.png'"
															  alt="头像" 
															 	style="width: 50px;
															 	border-radius:50px;
															 	 height: 50px;">
														 </view>
														<view>
															客服中心
														</view>
														</view>
												
		    </view>
		    <view class="footer">
		        <view>热线电话: 192 5133 9520 客服在线时间: 8:00 - 22:00</view >
		    </view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toNav(url){
				uni.navigateTo({
					url:url
				});
			}
		}
	}
</script>

<style>
	.tou1{
		margin-top: 2rem;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		gap: 11rpx;
		height: 417.8571rpx;
	}
	.tou11{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		font-weight: 39.2857rpx;
		font-size: 33.9286rpx;
		gap: 21.4286rpx;
	}
	.banneritem1{
		margin-top: -17.8571rpx;
		display: flex;
		flex-direction: row;
		gap: 3rpx;
		justify-content: space-around;
		align-items: center;
	}
	.banneritem2{
		width: 100%;
		background-color: #fff;
		padding: 0;
		margin: 0;
		flex-direction: column;
		justify-content: center;
	}
 .body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
			
        }
        .header {
            background: linear-gradient(90deg,#ACE0F9 21.86%,#f4c7f7 100%),linear-gradient(120deg,#D6C9E2 29.36%,#8EC5FC 100%);
            padding: 0px;
            text-align: center;
            border-bottom: 1px solid #ddd;
			display: flex;
			flex-direction: column;
			height: 74%;
        }
        .header img {
            border-radius: 50%;
        }
        .header .info {
            margin-top: 17.8571rpx;
        }
        .banner {
			position: relative;
			border-radius: 57.1429rpx;
			margin-left: 2%;
			margin-right: 2%;
			top: -103.5714rpx;
            background-color: #4a90e2;
            color: white;
            padding: 35.7143rpx;
            text-align: center;
			height: 183.9286rpx;
        }
		.banner2 {
			position: relative;
			border-radius: 39.2857rpx;
			margin-left: 2%;
			margin-right: 2%;
			top: -266.0714rpx;
		    background-color: #ffffff;
		    color: black;
		    padding: 35.7143rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			gap: 21.4286rpx;
		    font-weight: 41.0714rpx;
			height: 166.0714rpx;
		}
		.banner3 {
			position: relative;
			border-radius: 39.2857rpx;
			margin-left: 2%;
			margin-right: 2%;
			top: -212.5rpx;
		    background-color: #ffffff;
		    color: black;
		    padding: 35.7143rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			gap: 21.4286rpx;
		    font-weight: 41.0714rpx;
			height: auto;
		}
		.banner4 {
			flex-wrap: wrap;
			position: relative;
			border-radius: 39.2857rpx;
			margin-left: 2%;
			margin-right: 2%;
			top: -176.7857rpx;
		    background-color: #ffffff;
		    color: black;
		    padding: 35.7143rpx;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr ;
			justify-content: space-around;
			gap: 28.5714rpx;
		    font-weight: 41.0714rpx;
			height: auto;
		}
        .banner button {
            background-color: #ffcc00;
            border: none;
            padding: 17.8571rpx 35.7143rpx;
            color: white;
            font-size: 28.5714rpx;
            cursor: pointer;
        }
        .section {
            margin: 35.7143rpx;
            padding: 17.8571rpx;
            background-color: white;
            border-radius: 8.9286rpx;
            box-shadow: 0 3.5714rpx 7.1429rpx rgba(0,0,0,0.1);
        }
        .section .item {
            display: inline-block;
            width: 20%;
            margin: 1%;
            text-align: center;
        }
        .footer {
            background-color: #fff;
            padding: 0px;
            text-align: center;
            border-top: 1.7857rpx solid #ddd;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
		.banner2item{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.xinjis{
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
		}
		.jifen{
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
		}
		
		/* @media (max-width: 320px) {
		.banner2item{
			font-size: 12px;
		}
		.footer{
			font-size: 12px;
		}
		.text{
			font-size: 12px;
			
		}
		.banneritem1{
			font-size: 13px;
		}
		.tou1{
			margin-top: 2rem;
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
			gap: 1px;
			height: 234px;
		}
		.adv{
			width: 44%;
		}
		} */
</style>
