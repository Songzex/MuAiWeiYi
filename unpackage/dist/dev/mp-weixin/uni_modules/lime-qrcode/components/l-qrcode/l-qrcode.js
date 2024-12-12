"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_limeQrcode_components_lQrcode_props = require("./props.js");
const uni_modules_limeQrcode_components_lQrcode_useCanvas = require("./useCanvas.js");
const uni_modules_limeQrcode_components_lQrcode_qrcode = require("./qrcode.js");
const uni_modules_limeShared_addUnit_index = require("../../../lime-shared/addUnit/index.js");
const uni_modules_limeShared_createImage_index = require("../../../lime-shared/createImage/index.js");
const uni_modules_limeShared_unitConvert_index = require("../../../lime-shared/unitConvert/index.js");
const uni_modules_limeShared_debounce_vue = require("../../../lime-shared/debounce/vue.js");
const name = "l-qrcode";
const _sfc_main = common_vendor.defineComponent({
  name,
  props: uni_modules_limeQrcode_components_lQrcode_props.QRCodeProps,
  emits: ["success"],
  setup(props, { emit }) {
    const context = common_vendor.getCurrentInstance();
    const canvasId = `l-qrcode${context.uid}`;
    const styles = common_vendor.computed(() => `width: ${uni_modules_limeShared_addUnit_index.addUnit(props.size)}; height: ${uni_modules_limeShared_addUnit_index.addUnit(props.size)};`);
    let qrcode = null;
    let canvas = null;
    const qrCodeProps = common_vendor.computed(() => {
      const { value, icon, size, color, bgColor, bordered, iconSize, errorLevel, marginSize } = props;
      const imageSettings = {
        src: icon,
        x: void 0,
        y: void 0,
        height: uni_modules_limeShared_unitConvert_index.unitConvert(iconSize),
        width: uni_modules_limeShared_unitConvert_index.unitConvert(iconSize),
        excavate: true
      };
      return {
        value,
        size: uni_modules_limeShared_unitConvert_index.unitConvert(size),
        level: errorLevel,
        bgColor,
        fgColor: color,
        imageSettings: icon ? imageSettings : void 0,
        includeMargin: bordered,
        marginSize: marginSize ?? 0
      };
    });
    const canvasToTempFilePath = uni_modules_limeShared_debounce_vue.debounce((args) => {
      if (!canvas)
        return;
      const copyArgs = Object.assign({
        canvasId,
        canvas: null
      }, args);
      if (uni_modules_limeQrcode_components_lQrcode_useCanvas.isCanvas2d && props.use2d) {
        const tempFilePath = canvas.toDataURL();
        copyArgs.success({
          tempFilePath
        });
        return;
      }
      if ("toTempFilePath" in canvas) {
        canvas.toTempFilePath(copyArgs);
      } else {
        common_vendor.index.canvasToTempFilePath(copyArgs, context);
      }
    });
    const useCanvasToTempFilePath = () => {
      if (props.useCanvasToTempFilePath) {
        canvasToTempFilePath({
          success(res) {
            emit("success", res.tempFilePath);
          }
        });
      }
    };
    const propsWatch = common_vendor.watch(props, () => {
      if (qrcode) {
        qrcode.render(qrCodeProps.value);
        useCanvasToTempFilePath();
      }
    });
    common_vendor.onMounted(() => {
      uni_modules_limeQrcode_components_lQrcode_useCanvas.getCanvas(canvasId, { context }).then((res) => {
        canvas = res;
        qrcode = new uni_modules_limeQrcode_components_lQrcode_qrcode.f(res, {
          path2D: false,
          pixelRatio: uni_modules_limeQrcode_components_lQrcode_useCanvas.isCanvas2d && props.use2d ? common_vendor.index.getSystemInfoSync().pixelRatio : 1,
          createImage: uni_modules_limeShared_createImage_index.createImage
        });
        qrcode.render(qrCodeProps.value);
        useCanvasToTempFilePath();
      });
    });
    common_vendor.onUnmounted(() => {
      propsWatch && propsWatch();
    });
    return {
      canvasId,
      styles,
      props,
      canvasToTempFilePath
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.use2d
  }, _ctx.use2d ? {
    b: common_vendor.s(_ctx.styles),
    c: _ctx.canvasId,
    d: _ctx.canvasId
  } : {
    e: common_vendor.s(_ctx.styles),
    f: _ctx.canvasId,
    g: _ctx.canvasId
  }, {
    h: common_vendor.s(_ctx.styles)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
