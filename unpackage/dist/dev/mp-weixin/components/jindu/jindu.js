"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "jindu",
  data() {
    return {
      active: 1,
      list2: [{
        title: "买家下单",
        desc: "2018-11-11"
      }, {
        title: "卖家发货",
        desc: "2018-11-12"
      }, {
        title: "买家签收",
        desc: "2018-11-13"
      }, {
        title: "交易完成",
        desc: "2018-11-14"
      }]
    };
  },
  methods: {
    change() {
      if (this.active < this.list2.length - 1) {
        this.active += 1;
      } else {
        this.active = 0;
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_steps2 = common_vendor.resolveComponent("uni-steps");
  _easycom_uni_steps2();
}
const _easycom_uni_steps = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-steps/uni-steps.js";
if (!Math) {
  _easycom_uni_steps();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      options: $data.list2,
      ["active-color"]: "#007AFF",
      active: $data.active,
      direction: "row"
    }),
    b: common_vendor.o((...args) => $options.change && $options.change(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
