"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toNav(url) {
      common_vendor.index.navigateTo({
        url
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _ctx.$imagePreUrl + "wome.png",
    b: _ctx.$imagePreUrl + "hong_xuanzhang.png",
    c: _ctx.$imagePreUrl + "hong_shezhi.png",
    d: _ctx.$imagePreUrl + "hong_jifens.png",
    e: _ctx.$imagePreUrl + "hong_jifens.png",
    f: _ctx.$imagePreUrl + "hong_kaitongmendian.png",
    g: _ctx.$imagePreUrl + "hong_rishouyi.png",
    h: _ctx.$imagePreUrl + "hong_yueshouyi.png",
    i: _ctx.$imagePreUrl + "hong_yeji.png",
    j: _ctx.$imagePreUrl + "hong_tixian.png",
    k: common_vendor.o(($event) => $options.toNav("/pages/tixian/tixian")),
    l: _ctx.$imagePreUrl + "hong_qianbao.png",
    m: _ctx.$imagePreUrl + "hong_huiyuan.png",
    n: _ctx.$imagePreUrl + "hong_all_huiyuan.png",
    o: _ctx.$imagePreUrl + "hong_qianxianjindu.png",
    p: common_vendor.o(($event) => $options.toNav("/pages/qianjindu/qianjindu")),
    q: _ctx.$imagePreUrl + "hong_fenxiang.png",
    r: _ctx.$imagePreUrl + "hong_mendianxinxi.png",
    s: _ctx.$imagePreUrl + "hong_ip.png",
    t: common_vendor.o(($event) => $options.toNav("/pages/personip/personip")),
    v: _ctx.$imagePreUrl + "hong_yunying.png",
    w: _ctx.$imagePreUrl + "hong_dingdan.png",
    x: _ctx.$imagePreUrl + "hong_tuandui.png",
    y: _ctx.$imagePreUrl + "hong_zhoubian.png",
    z: _ctx.$imagePreUrl + "hong_kefu.png"
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
