"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toNav(url) {
      common_vendor.index.switchTab({
        url
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _ctx.$imagePreUrl + "hongniangSign.png",
    b: _ctx.$imagePreUrl + "muaiweiyi.png",
    c: _ctx.$imagePreUrl + "aixin.png",
    d: common_vendor.o((...args) => _ctx.iconClick && _ctx.iconClick(...args)),
    e: _ctx.value,
    f: common_vendor.o(($event) => _ctx.value = $event.detail.value),
    g: common_vendor.o((...args) => _ctx.iconClick && _ctx.iconClick(...args)),
    h: _ctx.value,
    i: common_vendor.o(($event) => _ctx.value = $event.detail.value),
    j: common_vendor.o(($event) => $options.toNav("/pages/tujian/tujian"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-085f0530"]]);
wx.createPage(MiniProgramPage);
