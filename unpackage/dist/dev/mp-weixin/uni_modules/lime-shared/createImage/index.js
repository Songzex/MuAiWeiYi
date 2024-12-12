"use strict";
const common_vendor = require("../../../common/vendor.js");
class Image {
  constructor() {
    this.currentSrc = null;
    this.naturalHeight = 0;
    this.naturalWidth = 0;
    this.width = 0;
    this.height = 0;
    this.tagName = "IMG";
    this.path = "";
    this.crossOrigin = "";
    this.referrerPolicy = "";
    this.onload = () => {
    };
    this.onerror = () => {
    };
    this.complete = false;
  }
  set src(src) {
    console.log("src", src);
    if (!src) {
      return this.onerror();
    }
    src = src.replace(/^@\//, "/");
    this.currentSrc = src;
    common_vendor.index.getImageInfo({
      src,
      success: (res) => {
        const localReg = /^\.|^\/(?=[^\/])/;
        res.path = localReg.test(src) ? `/${res.path}` : res.path;
        this.complete = true;
        this.path = res.path;
        this.naturalWidth = this.width = res.width;
        this.naturalHeight = this.height = res.height;
        this.onload();
      },
      fail: () => {
        this.onerror();
      }
    });
  }
  get src() {
    return this.currentSrc;
  }
}
function createImage(canvas) {
  if (canvas && canvas.createImage) {
    return canvas.createImage();
  } else if (this && this["tagName"] == "canvas" && !("toBlob" in this) || canvas && !("toBlob" in canvas)) {
    return new Image();
  } else
    ;
  return new Image();
}
exports.createImage = createImage;
