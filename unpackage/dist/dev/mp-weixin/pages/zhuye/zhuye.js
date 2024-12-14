"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      scrollY: 0,
      // 当前滚动的位置
      threshold: 200,
      // 滚动切换的阈值
      minHeight: 120,
      // 最小高度
      maxHeight: 300,
      // 最大高度
      lastScrollY: 0
      // 上次的滚动位置
    };
  },
  computed: {
    topContainerStyle() {
      let height = this.maxHeight - this.scrollY;
      height = height < this.minHeight ? this.minHeight : height;
      let position = "sticky";
      let top = "0";
      if (this.scrollY > this.threshold) {
        position = "fixed";
        top = "0";
      }
      return {
        height: `${height}px`,
        position,
        top,
        // 如果滚动超过阈值，固定在顶部
        zIndex: 1,
        willChange: "height, transform"
        // 告诉浏览器会变动这些属性
      };
    },
    contentStyle() {
      const scale = Math.max(0.75, 1 - this.scrollY / this.threshold);
      return {
        transform: `scale(${scale})`,
        // 使用scale缩放内容
        transformOrigin: "center",
        // 确保从中心缩放
        transition: "transform 0.1s ease-out"
        // 添加平滑过渡
      };
    }
  },
  methods: {
    onScroll(event) {
      const scrollY = event.detail.scrollTop;
      if (Math.abs(scrollY - this.lastScrollY) > 1) {
        this.lastScrollY = scrollY;
        this.scrollY = scrollY;
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_xuanfu2 = common_vendor.resolveComponent("xuanfu");
  (_easycom_uni_icons2 + _easycom_xuanfu2)();
}
const _easycom_uni_icons = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.js";
const _easycom_xuanfu = () => "../../components/xuanfu/xuanfu.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_xuanfu)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.s(_ctx.textStyle),
    b: _ctx.$imagePreUrl + "wome.png",
    c: common_vendor.s(_ctx.textStyle)
  }, {
    d: common_vendor.s(_ctx.textStyle),
    e: _ctx.$imagePreUrl + "newsfb.png"
  }, {
    f: common_vendor.s($options.contentStyle),
    g: common_vendor.s($options.topContainerStyle),
    h: common_vendor.p({
      type: "icon-tonggao",
      size: "30"
    }),
    i: common_vendor.o((...args) => $options.onScroll && $options.onScroll(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a7ee8eaf"]]);
wx.createPage(MiniProgramPage);
