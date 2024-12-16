<template>
	<DynamicCssEffect></DynamicCssEffect>
	<view class="cards">
		<view class="from">
			<view class="item1">
				<view class="adv">
					<image
					class="ti1"
					:src="$imagePreUrl+ 'hongniangSign.png'"
					></image>
				</view>
				<view class="item1s">
					<view>
					<image
					class="muai"
					:src="$imagePreUrl+ 'muaiweiyi.png'"
					></image>
					</view>
					<view>
						<image
						class="aixin1"
						:src="$imagePreUrl+ 'aixin.png'"
						></image>
					</view>
				</view>
			</view>
			<view class="randl">
				<view class="tishiti">
					欢迎登录
				</view>
			<view class="iteminput">
				<input
				v-if="login"
				 class="input"
				 prefixIcon="contact" v-model="value" placeholder="请输入账号/手机号码" @iconClick="iconClick">
				</input>
				<input
				v-if="!login"
				 class="input"
				 prefixIcon="contact" v-model="value" placeholder="请输入账号/手机号码" @iconClick="iconClick">
				</input>
				<input
				v-if="!login"
				 class="input"
				 prefixIcon="contact" v-model="value" placeholder="验证码" @iconClick="iconClick">
				</input>
				<input
				 v-if="login"
				 class="input"
				 prefixIcon="contact" v-model="value" placeholder="输入密码" @iconClick="iconClick">
				</input>
				<input
				v-if="!login"
				 class="input"
				 prefixIcon="contact" v-model="value" placeholder="再次输入密码" @iconClick="iconClick">
				</input>
			</view>
				<view class="TIJAI">
					<button
					@click="toNav('/pages/tujian/tujian')"
					 class="but"
					>登录</button>
					<view class="zhuce">
						<view
						@click="onchanges()"
						>注册</view>
						<view>忘记密码</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				login:true,
				register:false,
			}
		},
		methods: {
			toNav(url){
				uni.switchTab({
					url:url
				});
			},
			onchanges(){
				this.login=false;
			}
		}
	}
</script>

<style scoped>
	.iteminput{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 12.5rpx;
	}
	.randl{
		margin-top: -16.0714rpx;
		gap: 12.5rpx;
	}
	.muai{
		display :inline-block;
		box-sizing :border-box;
		height :158rpx;
		width :433rpx;
		position :relative;
		left :0rpx;
		top: -187rpx;
		
	}
	.but{
		height: 90rpx;
		width: 192rpx;
		display: flex;
	    justify-content: center;
		align-items: center;
		border: solid #ffffff 2px;
		background-color: #eae1f1;
		border-radius: 45px;
		color: #FFFFFF;
	}
	.zhuce{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	    column-gap: 389.2857rpx;
		align-items: center;
	}
	.TIJAI{
		margin-top: 21.4286rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		column-gap: 21.4286rpx;
		border-radius: 23px;
	}
	.tishiti{
		font-size: 47rpx;
		text-align: center;
		color: #FFFFFF;
		
	}
	.from{
		display: flex;
		flex-direction: column;
		justify-content: center;
		row-gap: 89rpx;
		align-items: center;
	}
	.input{
		height: 78rpx;
		width: 426rpx;
		border: solid #ffffff 3px;
		border-radius: 45px;
	}
	.aixin1{
		width: 2.5rem;
		height: 2.5rem;
       position: relative;
		top: -77rpx;
	}
	.cards{
		width: 100vw;
		height: 100vh;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: linear-gradient(120deg,#CDE6EE 37.21%,#DECAF1 100%,#FFFFFF 100%); 
	}
	.html{
		font-size: 16rpx; 
	}
	.adv{
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
	    
	}
	.ti1{
		position: relative;
		top: -202rpx;
		width:66rem;
		height: 34.7rem;
		
	}
    .item1{
	     height: 16rem;
	}
	.item1s{
				display: flex;
				row-gap: 19px;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 100%;
				position: relative;
			 animation-duration: 3s;
			 animation-name: zoomIn;
	          position: relative;
	 		top: -887rpx;
	}
	.item2s{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		position: relative;
		animation-duration: 2s;
		animation-name: slideInDown;
		font-family: STLiti;
		font-size: 43rpx;
		color: #ffffff;
		
	
	}
	@keyframes slideInDown {
	    from {
	        transform: translate3d(0, -100%, 0);
	        visibility: visible;
	    }
	
	    to {
	        transform: translate3d(0, 0, 0);
	    }
	}

	@keyframes slidein {
	  from {
	    margin-left: 100%;
	    width: 300%;
	  }
	
	  to {
	    margin-left: 0%;
	    width: 100%;
	  }}
  @keyframes zoomIn {
      from {
          opacity: 0;
          transform: scale3d(0.3, 0.3, 0.3);
      }
  
      50% {
          opacity: 1;
      }
  }
  @media screen and (max-width:320px) {
	  .cards{
	  	width: 100%;
	  	height: 100vh;
	  	background-color: #ffffff;
	  	position: relative;
	  
	  }
	  .item1s{
	  			display: flex;
	  			flex-direction: column;
	  			justify-content: center;
	  			align-items: center;
	  			width: 100%;
	  			position: relative;
	  			top: -880rpx;
	  		 animation-duration: 3s;
	  		 animation-name: zoomIn;
	  
	  }
	  .ti1{
	  	position: relative;
	  	top: -202rpx;
	  	width:56rem;
	  	height: 29.7rem;
	  	
	  }
	  .from{
		  row-gap: 54rpx;
	  }
  	
  }
</style>
