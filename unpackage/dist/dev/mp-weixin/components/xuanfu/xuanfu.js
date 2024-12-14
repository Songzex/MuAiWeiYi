"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  components: {},
  data() {
    return {
      title: "uni-fab",
      directionStr: "垂直",
      horizontal: "left",
      vertical: "bottom",
      direction: "horizontal",
      pattern: {
        color: "#7A7E83",
        backgroundColor: "#fff",
        selectedColor: "#007AFF",
        buttonColor: "#007AFF",
        iconColor: "#fff"
      },
      is_color_type: false,
      content: [
        {
          iconPath: "/static/image.png",
          selectedIconPath: "/static/image-active.png",
          text: "相册",
          active: false
        },
        {
          iconPath: "/static/home.png",
          selectedIconPath: "/static/home-active.png",
          text: "首页",
          active: false
        },
        {
          iconPath: "/static/star.png",
          selectedIconPath: "/static/star-active.png",
          text: "收藏",
          active: false
        }
      ]
    };
  },
  onBackPress() {
    if (this.$refs.fab.isShow) {
      this.$refs.fab.close();
      return true;
    }
    return false;
  },
  methods: {
    trigger(e) {
      console.log(e);
      this.content[e.index].active = !e.item.active;
      common_vendor.index.showModal({
        title: "提示",
        content: `您${this.content[e.index].active ? "选中了" : "取消了"}${e.item.text}`,
        success: function(res) {
          if (res.confirm) {
            console.log("用户点击确定");
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    },
    fabClick() {
      common_vendor.index.showToast({
        title: "点击了悬浮按钮",
        icon: "none"
      });
    },
    switchBtn(hor, ver) {
      if (hor === 0) {
        this.direction = this.direction === "horizontal" ? "vertical" : "horizontal";
        this.directionStr = this.direction === "horizontal" ? "垂直" : "水平";
      } else {
        this.horizontal = hor;
        this.vertical = ver;
      }
      this.$forceUpdate();
    },
    switchColor() {
      this.is_color_type = !this.is_color_type;
      if (this.is_color_type) {
        this.pattern.iconColor = "#aaa";
        this.pattern.buttonColor = "#fff";
      } else {
        this.pattern.iconColor = "#fff";
        this.pattern.buttonColor = "#007AFF";
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.s(_ctx.textStyle),
    b: _ctx.$imagePreUrl + "newbuxihaun.png"
  }, {
    c: common_vendor.s(_ctx.textStyle),
    d: _ctx.$imagePreUrl + "new2xindong.png"
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
