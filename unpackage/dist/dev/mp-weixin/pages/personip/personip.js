"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_l_qrcode2 = common_vendor.resolveComponent("l-qrcode");
  _easycom_l_qrcode2();
}
const _easycom_l_qrcode = () => "../../uni_modules/lime-qrcode/components/l-qrcode/l-qrcode.js";
if (!Math) {
  _easycom_l_qrcode();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      value: "20222300112",
      size: "300rpx",
      icon: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA12s2Nq.img",
      iconSize: "70rpx"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
