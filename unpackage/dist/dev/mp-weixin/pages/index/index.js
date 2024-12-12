"use strict";
const store_index = require("../../store/index.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello",
      topic: []
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
  },
  mounted() {
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($options.token),
    b: common_vendor.o(($event) => $options.setTokens()),
    c: common_vendor.f($data.topic, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.introduce),
        b: item
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
