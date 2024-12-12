"use strict";
function debounce(fn, wait = 300) {
  let timer = null;
  return function(...args) {
    if (timer)
      clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}
exports.debounce = debounce;
