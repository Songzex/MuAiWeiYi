"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_limeShared_getRect_vue = require("../../../lime-shared/getRect/vue.js");
const uni_modules_limeShared_canIUseCanvas2d_index = require("../../../lime-shared/canIUseCanvas2d/index.js");
const isCanvas2d = uni_modules_limeShared_canIUseCanvas2d_index.canIUseCanvas2d();
async function getCanvas(canvasId, options) {
  let { context } = options;
  if (context.proxy)
    context = context.proxy;
  return uni_modules_limeShared_getRect_vue.getRect("#" + canvasId, context, isCanvas2d).then((res) => {
    if (res.node) {
      return res.node;
    } else {
      const ctx = common_vendor.index.createCanvasContext(canvasId, context);
      return {
        getContext(type) {
          if (type == "2d") {
            return ctx;
          }
        },
        width: res.width,
        height: res.height
      };
    }
  });
}
exports.getCanvas = getCanvas;
exports.isCanvas2d = isCanvas2d;
