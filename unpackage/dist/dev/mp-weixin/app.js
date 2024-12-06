"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const store_index = require("./store/index.js");
const utils_config = require("./utils/config.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/tujian/tujian.js";
  "./pages/my/my.js";
  "./pages/zhuye/zhuye.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.config.globalProperties.$imagePreUrl = utils_config.config.imagePreUrl;
  app.config.globalProperties.$emojiPreUrl = utils_config.config.emojiPreUrl;
  app.use(store_index.store);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
