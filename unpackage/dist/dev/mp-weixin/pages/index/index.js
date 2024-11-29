"use strict";
const store_index = require("../../store/index.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
  },
  methods: {
    setTokens() {
      const token = "我是token";
      store_index.store.commit("setToken", token);
    }
  },
  computed: {
    username() {
      return store_index.store.state.username;
    },
    token() {
      return store_index.store.state.token;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($options.token),
    b: common_vendor.o(($event) => $options.setTokens())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
