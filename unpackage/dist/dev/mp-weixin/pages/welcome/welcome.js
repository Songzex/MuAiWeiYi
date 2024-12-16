"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      login: true,
      register: false
    };
  },
  methods: {
    toNav(url) {
      common_vendor.index.switchTab({
        url
      });
    },
    onchanges() {
      this.login = false;
    }
  }
};
if (!Array) {
  const _component_DynamicCssEffect = common_vendor.resolveComponent("DynamicCssEffect");
  _component_DynamicCssEffect();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.$imagePreUrl + "hongniangSign.png",
    b: _ctx.$imagePreUrl + "muaiweiyi.png",
    c: _ctx.$imagePreUrl + "aixin.png",
    d: $data.login
  }, $data.login ? {
    e: common_vendor.o((...args) => _ctx.iconClick && _ctx.iconClick(...args)),
    f: _ctx.value,
    g: common_vendor.o(($event) => _ctx.value = $event.detail.value)
  } : {}, {
    h: !$data.login
  }, !$data.login ? {
    i: common_vendor.o((...args) => _ctx.iconClick && _ctx.iconClick(...args)),
    j: _ctx.value,
    k: common_vendor.o(($event) => _ctx.value = $event.detail.value)
  } : {}, {
    l: !$data.login
  }, !$data.login ? {
    m: common_vendor.o((...args) => _ctx.iconClick && _ctx.iconClick(...args)),
    n: _ctx.value,
    o: common_vendor.o(($event) => _ctx.value = $event.detail.value)
  } : {}, {
    p: $data.login
  }, $data.login ? {
    q: common_vendor.o((...args) => _ctx.iconClick && _ctx.iconClick(...args)),
    r: _ctx.value,
    s: common_vendor.o(($event) => _ctx.value = $event.detail.value)
  } : {}, {
    t: !$data.login
  }, !$data.login ? {
    v: common_vendor.o((...args) => _ctx.iconClick && _ctx.iconClick(...args)),
    w: _ctx.value,
    x: common_vendor.o(($event) => _ctx.value = $event.detail.value)
  } : {}, {
    y: common_vendor.o(($event) => $options.toNav("/pages/tujian/tujian")),
    z: common_vendor.o(($event) => $options.onchanges())
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-085f0530"]]);
wx.createPage(MiniProgramPage);
