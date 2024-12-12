<template>
  <view>
    <canvas
      canvas-id="qrcodeCanvas"
      width="200px"
      height="200px"
      style="width: 200px; height: 200px; background-color: #fff; z-index: 999;
	  z-index: 99;
	  "
    ></canvas>
  </view>
</template>

<script>
import QRCode from 'qrcode-generator';
export default {
  data() {
    return {
      content: 'https://example.com', // 这里示例设置要生成的二维码内容，你可替换为实际内容
    };
  },
  mounted() {
    // 先检查权限，权限获取成功后再执行生成二维码绘制操作
    wx.getSetting({
      success: (res) => {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success: () => {  // 使用箭头函数解决this指向问题
              console.log('获取权限成功');
              this.generateQRCode();
            },
            fail() {
              console.log('获取权限失败');
            }
          });
        } else {
          this.generateQRCode();
        }
      }
    });
  },
  methods: {
    generateQRCode() {
      const size = 200; // 二维码大小
      const typeNumber = 4; // QR Code 类型
      const errorCorrectionLevel = 'L'; // 容错等级
      const qr = QRCode(typeNumber, errorCorrectionLevel);

      qr.addData(this.content); // 添加二维码内容
      qr.make(); // 生成二维码

      const cellSize = size / qr.getModuleCount();
      const ctx = uni.createCanvasContext('qrcodeCanvas');

      // 遍历模块并绘制
      for (let row = 0; row < qr.getModuleCount(); row++) {
        for (let col = 0; col < qr.getModuleCount(); col++) {
          ctx.setFillStyle(qr.isDark(row, col)? '#000000' : '#d6d3fa'); // 设置颜色
          ctx.fillRect(
            col * cellSize, // 横向位置
            row * cellSize, // 纵向位置
            cellSize, // 宽
            cellSize // 高
          );
        }
      }

      setTimeout(() => {
        ctx.draw(false, () => {
          console.log('二维码绘制完成');
        });
      }, 100); // 简单添加延迟确保绘制操作更稳定执行
    },
  },
};
</script>

<style>

</style>