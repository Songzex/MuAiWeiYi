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
				<view class="banner2item">
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
				<view class="banner2item">
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
								<view class="banner2item">
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
		height: 234px;
	}
	.tou11{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		font-weight: 22px;
		font-size: 19px;
		gap: 12px;
	}
	.banneritem1{
		margin-top: -10px;
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
            margin-top: 10px;
        }
        .banner {
			position: relative;
			border-radius: 32px;
			margin-left: 2%;
			margin-right: 2%;
			top: -58px;
            background-color: #4a90e2;
            color: white;
            padding: 20px;
            text-align: center;
			height: 103px;
        }
		.banner2 {
			position: relative;
			border-radius: 22px;
			margin-left: 2%;
			margin-right: 2%;
			top: -149px;
		    background-color: #ffffff;
		    color: black;
		    padding: 20px;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			gap: 12px;
		    font-weight: 23px;
			height: 93px;
		}
		.banner3 {
			position: relative;
			border-radius: 22px;
			margin-left: 2%;
			margin-right: 2%;
			top: -119px;
		    background-color: #ffffff;
		    color: black;
		    padding: 20px;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			gap: 12px;
		    font-weight: 23px;
			height: auto;
		}
		.banner4 {
			flex-wrap: wrap;
			position: relative;
			border-radius: 22px;
			margin-left: 2%;
			margin-right: 2%;
			top: -99px;
		    background-color: #ffffff;
		    color: black;
		    padding: 20px;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr ;
			justify-content: space-around;
			gap: 16px;
		    font-weight: 23px;
			height: auto;
		}
        .banner button {
            background-color: #ffcc00;
            border: none;
            padding: 10px 20px;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }
        .section {
            margin: 20px;
            padding: 10px;
            background-color: white;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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
            border-top: 1px solid #ddd;
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
		
		@media (max-width: 320px) {
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
		}
</style>
