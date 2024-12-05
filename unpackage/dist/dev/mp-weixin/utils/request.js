"use strict";
const common_vendor = require("../common/vendor.js");
const store_index = require("../store/index.js");
function request({ url, data, method = "GET", contentType = 1 }) {
  let header = {
    "content-type": contentType === 1 ? "application/json" : "application/x-www-form-urlencoded"
    // 'Access-Control-Allow-Origin': '*',// 设置跨域允许的源，通常情况下这样设置并不生效，需要在服务端设置
  };
  let baseUrl = "http://localhost:8082";
  const token = store_index.store.state.token;
  console.log("token  " + token);
  if (token) {
    header.token = token;
  }
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: baseUrl + url,
      data,
      method,
      header,
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else if (res.statusCode === 401) {
          common_vendor.index.showToast({
            icon: "none",
            title: "未登录或登录状态已超时",
            duration: 1500
          });
        } else if (res.statusCode === 405) {
          common_vendor.index.showToast({
            icon: "none",
            title: "请求方法错误",
            duration: 1500
          });
        } else if (res.status === 500) {
          common_vendor.index.showToast({
            icon: "none",
            title: "你的网络出错了" + res.message,
            duration: 1500
          });
        } else {
          common_vendor.index.showToast({
            icon: "none",
            title: "不好意思",
            duration: 1500
          });
        }
      },
      fail: (err) => {
        console.log("err:", err);
        common_vendor.index.showToast({
          icon: "none",
          title: err.errMsg,
          duration: 1500
        });
        reject(err);
      }
    });
  });
}
const request$1 = { request };
exports.request = request$1;
