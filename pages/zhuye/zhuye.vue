<template>
  <view class="page">
    <scroll-view class="scroll-container" scroll-y @scroll="onScroll" style="height: 100vh;">
      <view class="top-container" :style="topContainerStyle">
        <view class="top-content" :style="contentStyle">
          <text class="top-text">24岁 女</text>
          <image
          		:style="textStyle"
          						class="avater"
          						 :src="$imagePreUrl+ 'wome.png'"
          						 ></image>
          		<view class="top-text" :style="textStyle">
          			猪猪腻子			
          		</view>
				 <image v-if="true"
				 :style="textStyle"
				 :src="$imagePreUrl+ 'newsfb.png'"
				 class="biaoshi"
					></image>
        </view>
      </view>
	<view class="content">
		 <view class="item1">
			 <view
			 class="item1"
			 style="margin-top: -19px;
			  font-size: 24rpx;
			  font-weight: bold;
			  background-color: #edf5f9;
			  border-radius: 23px;
			  align-items: center;
			 background: linear-gradient(90deg,#ffffff 61.86%,#ACE0F9 100%),linear-gradient(120deg,#D6C9E2 29.36%,#8EC5FC 100%);"
			 >
				<view class="t-icon t-icon-tonggao"></view>
				 <text>基本信息</text>
			 </view>
		   </view>
	        <view  
			class="item2"
			style="margin-top: 12px;">
				<text>
					向下滚动，上方内容会缩小并最终固定到顶部。向下滚动，上方内容会缩小并最终固定到顶部。向下滚动，上方内容会缩小并最终固定到顶部。
				</text>
				<view>
				向下滚动，上方内容会缩小并最终固定到顶部。
				</view>
				<view>
				向下滚动，上方内容会缩小并最终固定到顶部。
				</view>
			</view>
	      </view>
		  
		  <view class="content">
		  	 <view class="item1">
		  				 <view
		  				 class="item1"
		  				 style="margin-top: -19px;
		  				  font-size: 24rpx;
		  				  font-weight: bold;
		  				  background-color: blueviolet;
		  				  border-radius: 23px;
		  				  align-items: center;
		  				 background: linear-gradient(90deg,#ffffff 61.86%,#ACE0F9 100%),linear-gradient(120deg,#D6C9E2 29.36%,#8EC5FC 100%);"
		  				 >
		  					<view class="t-icon t-icon-caiyi"></view>
		  					 <text>兴趣爱好</text>
		  				 </view>
		  			   </view>
		          <view  
		  		class="item2"
		  		style="margin-top: 12px;">
		  			<text>
		  				向下滚动，上方内容会缩小并最终固定到顶部。向下滚动，上方内容会缩小并最终固定到顶部。
		  			</text>
		  			<view>
		  			向下滚动，上方内容会缩小并最终固定到顶部。
		  			</view>
		  			<view>
		  			向下滚动，上方内容会缩小并最终固定到顶部。
		  			</view>
		  		</view>
		        </view>
		<view class="content">
				<view class="item1">
						  				 <view
						  				 class="item1"
						  				 style="margin-top: -19px;
						  				  font-size: 24rpx;
						  				  font-weight: bold;
						  				  background-color: blueviolet;
						  				  border-radius: 23px;
						  				  align-items: center;
						  				 background: linear-gradient(90deg,#ffffff 61.86%,#ACE0F9 100%),linear-gradient(120deg,#D6C9E2 29.36%,#8EC5FC 100%);"
						  				 >
						  					<view class="t-icon t-icon-jishiliaotian"></view>
						  					 <text>关于我</text>
						  				 </view>
						  			   </view>
			        <view  
					class="item2"
					style="margin-top: 12px;">
						<text>
							向下滚动，上方内容会缩小并最终固定到顶部。向下滚动，上方内容会缩小并最终固定到顶部。
							向下滚动，上方内容会缩小并最终固定到顶部。
							向下滚动，上方内容会缩小并最终固定到顶部。
							向下滚动，上方内容会缩小并最终固定到顶部。
						</text>
						<view>
						向下滚动，上方内容会缩小并最终固定到顶部。
						</view>
						<view>
						向下滚动，上方内容会缩小并最终固定到顶部。
						</view>
					</view>
			      </view>
<view class="content">
			<view class="item1">
						  				 <view
						  				 class="item1"
						  				 style="margin-top: -19px;
						  				  font-size: 24rpx;
						  				  font-weight: bold;
						  				  background-color: blueviolet;
						  				  border-radius: 23px;
						  				  align-items: center;
						  				 background: linear-gradient(90deg,#ffffff 61.86%,#ACE0F9 100%),linear-gradient(120deg,#D6C9E2 29.36%,#8EC5FC 100%);"
						  				 >
						  					<view class="t-icon t-icon-xiangqin"></view>
						  					 <text>心仪的Ta</text>
						  				 </view>
						  			   </view>
			        <view  
					class="item2"
					style="margin-top: 12px;">
						<text>
							向下滚动，上方内容会缩小并最终固定到顶部。向下滚动，上方内容会缩小并最终固定到顶部。
							向下滚动，上方内容会缩小并最终固定到顶部。
							向下滚动，上方内容会缩小并最终固定到顶部。
							向下滚动，上方内容会缩小并最终固定到顶部。
						</text>
						<view>
						向下滚动，上方内容会缩小并最终固定到顶部。
						</view>
						<view>
						向下滚动，上方内容会缩小并最终固定到顶部。
						</view>
					</view>
			      </view>							  
    </scroll-view>
  </view>
  <xuanfu></xuanfu>
</template>

<script>
export default {
  data() {
    return {
      scrollY: 0, // 当前滚动的位置
      threshold: 200, // 滚动切换的阈值
      minHeight: 120, // 最小高度
      maxHeight: 300, // 最大高度
      lastScrollY: 0, // 上次的滚动位置
    };
  },
  computed: {
    topContainerStyle() {
      let height = this.maxHeight - this.scrollY; // 高度随滚动减少
      height = height < this.minHeight ? this.minHeight : height; // 防止高度小于最小高度

      // 判断是否达到指定的滚动阈值，达到后固定
      let position = 'sticky';
      let top = '0';
      if (this.scrollY > this.threshold) {
        position = 'fixed';
        top = '0';
      }

      return {
        height: `${height}px`,
        position: position,
        top: top, // 如果滚动超过阈值，固定在顶部
        zIndex: 1,
        willChange: 'height, transform', // 告诉浏览器会变动这些属性
      };
    },
    contentStyle() {
      // 根据滚动距离缩放内容
      const scale = Math.max(0.75, 1 - this.scrollY / this.threshold); // 缩放比例，最小为0.5
      return {
        transform: `scale(${scale})`, // 使用scale缩放内容
        transformOrigin: 'center', // 确保从中心缩放
        transition: 'transform 0.1s ease-out', // 添加平滑过渡
      };
    },
  },
  methods: {
    onScroll(event) {
      const scrollY = event.detail.scrollTop;
      // 限制滚动更新频率，防止频繁更新
      if (Math.abs(scrollY - this.lastScrollY) > 1) {
        this.lastScrollY = scrollY;
        this.scrollY = scrollY;
      }
    },
  },
};
</script>

<style scoped>
	.item1{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.t-icon {
	    width: 40rpx; 
	    height: 40rpx;
	}
	.avater{
		width: 178.5714rpx;
		height: 178.5714rpx;
		border-radius: 80.3571rpx;
		box-shadow: 14.2857rpx 1.7857rpx 3.5714rpx 0.2px #888888;
	}
.page {
  background: #f4f4f4;
  height: 100vh; /* 页面高度为视窗高度 */
  font-size: 16rpx;
}

.scroll-container {
  height: 100%; /* 确保scroll-view占满全高 */
  overflow-y: auto; /* 启用垂直滚动 */
}

.top-container {
  width: 100%;
  background-image: url('http://qn.muaiweiyi.com/caiyun.png');
  background-repeat: repeat; /* 设置重复平铺 */
  background-size: cover; /* 让图片等比例缩放以完整显示在容器内 */
  background-repeat: no-repeat;
  display: flex;
  color: white;
  font-size: 24rpx;
  transition: height 0.2s ease-out;
  border-radius: 0px 0px 10px 10px;
}

.top-content {
  margin-top: 33.9286rpx;
  display: flex;
  gap: 21.4286rpx;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease-out;
  width: 100%;
}

.top-text {
  transition: transform 0.2s ease-out;
  background-color: #f1f1f1;
  color: #acacac;
  border-radius: 21.4286rpx;
  font-size: 24rpx;
}
.biaoshi{
	width: 62.5rpx;
	height: 62.5rpx;
	opacity: 5;
	border-radius: 80.3571rpx;
}
.top-image {
  transition: transform 0.2s ease-out;
  width: 142.8571rpx; /* 图片宽度 */
  height: 142.8571rpx; /* 图片高度 */
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 35.7143rpx;
  background: white;
  padding-top: 71.4286rpx;
  box-sizing: border-box;
  background-color: #fcffff;
  border-radius: 26.7857rpx;
  margin-right: 1%;
  margin-left: 2%;
  margin-top: 21.4286rpx;
}
</style>
