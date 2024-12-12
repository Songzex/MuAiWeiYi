"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_jindu2 = common_vendor.resolveComponent("jindu");
  _easycom_jindu2();
}
const _easycom_jindu = () => "../../components/jindu/jindu.js";
if (!Math) {
  _easycom_jindu();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
