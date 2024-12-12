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
    k: _ctx.$imagePreUrl + "hong_qianbao.png",
    l: _ctx.$imagePreUrl + "hong_huiyuan.png",
    m: _ctx.$imagePreUrl + "hong_all_huiyuan.png",
    n: _ctx.$imagePreUrl + "hong_qianxianjindu.png",
    o: common_vendor.o(($event) => $options.toNav("/pages/qianjindu/qianjindu")),
    p: _ctx.$imagePreUrl + "hong_fenxiang.png",
    q: _ctx.$imagePreUrl + "hong_mendianxinxi.png",
    r: _ctx.$imagePreUrl + "hong_ip.png",
    s: common_vendor.o(($event) => $options.toNav("/pages/personip/personip")),
    t: _ctx.$imagePreUrl + "hong_yunying.png",
    v: _ctx.$imagePreUrl + "hong_dingdan.png",
    w: _ctx.$imagePreUrl + "hong_tuandui.png",
    x: _ctx.$imagePreUrl + "hong_zhoubian.png",
    y: _ctx.$imagePreUrl + "hong_kefu.png"
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
