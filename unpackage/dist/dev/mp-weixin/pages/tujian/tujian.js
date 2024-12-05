"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _component_uni_notice_bar = common_vendor.resolveComponent("uni-notice-bar");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  (_component_uni_notice_bar + _component_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      ["show-icon"]: true,
      scrollable: true,
      text: "uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"
    }),
    b: common_vendor.p({
      title: "文字滚动",
      subTitle: "使用 scrollable 属性使通告滚动,此时 single 属性将失效,始终单行显示",
      type: "line"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
