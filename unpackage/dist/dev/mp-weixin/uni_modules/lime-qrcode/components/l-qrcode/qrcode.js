"use strict";
function e(e2, t2) {
  if (!(e2 instanceof t2))
    throw new TypeError("Cannot call a class as a function");
}
function t(e2, t2) {
  for (var n2 = 0; t2.length > n2; n2++) {
    var r2 = t2[n2];
    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
  }
}
function n(e2, n2, r2) {
  return n2 && t(e2.prototype, n2), r2 && t(e2, r2), Object.defineProperty(e2, "prototype", { writable: false }), e2;
}
function r(e2, t2) {
  if (null == e2)
    return {};
  var n2, r2, i2 = function(e3, t3) {
    if (null == e3)
      return {};
    var n3, r3, i3 = {}, o3 = Object.keys(e3);
    for (r3 = 0; o3.length > r3; r3++)
      0 > t3.indexOf(n3 = o3[r3]) && (i3[n3] = e3[n3]);
    return i3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; o2.length > r2; r2++)
      0 > t2.indexOf(n2 = o2[r2]) && Object.prototype.propertyIsEnumerable.call(e2, n2) && (i2[n2] = e2[n2]);
  }
  return i2;
}
function i(e2, t2) {
  (null == t2 || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = Array(t2); t2 > n2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function o(e2, t2) {
  var n2 = "undefined" != typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
  if (!n2) {
    if (Array.isArray(e2) || (n2 = function(e3, t3) {
      if (e3) {
        if ("string" == typeof e3)
          return i(e3, t3);
        var n3 = Object.prototype.toString.call(e3).slice(8, -1);
        return "Object" === n3 && e3.constructor && (n3 = e3.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e3) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? i(e3, t3) : void 0;
      }
    }(e2)) || t2 && e2 && "number" == typeof e2.length) {
      n2 && (e2 = n2);
      var r2 = 0, o2 = function() {
      };
      return { s: o2, n: function() {
        return e2.length > r2 ? { done: false, value: e2[r2++] } : { done: true };
      }, e: function(e3) {
        throw e3;
      }, f: o2 };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var a2, s2 = true, u2 = false;
  return { s: function() {
    n2 = n2.call(e2);
  }, n: function() {
    var e3 = n2.next();
    return s2 = e3.done, e3;
  }, e: function(e3) {
    u2 = true, a2 = e3;
  }, f: function() {
    try {
      s2 || null == n2.return || n2.return();
    } finally {
      if (u2)
        throw a2;
    }
  } };
}
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var a;
!function(t2) {
  var r2 = function() {
    function r3(t3, n2, i3, o2) {
      if (e(this, r3), this.version = void 0, this.errorCorrectionLevel = void 0, this.size = void 0, this.mask = void 0, this.modules = [], this.isFunction = [], this.version = t3, this.errorCorrectionLevel = n2, r3.MIN_VERSION > t3 || t3 > r3.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (-1 > o2 || o2 > 7)
        throw new RangeError("Mask value out of range");
      this.size = 4 * t3 + 17;
      for (var a3 = [], u3 = 0; this.size > u3; u3++)
        a3.push(false);
      for (var l2 = 0; this.size > l2; l2++)
        this.modules.push(a3.slice()), this.isFunction.push(a3.slice());
      this.drawFunctionPatterns();
      var h2 = this.addEccAndInterleave(i3);
      if (this.drawCodewords(h2), -1 == o2)
        for (var c2 = 1e9, f2 = 0; 8 > f2; f2++) {
          this.applyMask(f2), this.drawFormatBits(f2);
          var v = this.getPenaltyScore();
          c2 > v && (o2 = f2, c2 = v), this.applyMask(f2);
        }
      s2(o2 >= 0 && 7 >= o2), this.mask = o2, this.applyMask(o2), this.drawFormatBits(o2), this.isFunction = [];
    }
    return n(r3, [{ key: "getModule", value: function(e2, t3) {
      return e2 >= 0 && this.size > e2 && t3 >= 0 && this.size > t3 && this.modules[t3][e2];
    } }, { key: "getModules", value: function() {
      return this.modules;
    } }, { key: "drawFunctionPatterns", value: function() {
      for (var e2 = 0; this.size > e2; e2++)
        this.setFunctionModule(6, e2, e2 % 2 == 0), this.setFunctionModule(e2, 6, e2 % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      for (var t3 = this.getAlignmentPatternPositions(), n2 = t3.length, r4 = 0; n2 > r4; r4++)
        for (var i3 = 0; n2 > i3; i3++)
          0 == r4 && 0 == i3 || 0 == r4 && i3 == n2 - 1 || r4 == n2 - 1 && 0 == i3 || this.drawAlignmentPattern(t3[r4], t3[i3]);
      this.drawFormatBits(0), this.drawVersion();
    } }, { key: "drawFormatBits", value: function(e2) {
      for (var t3 = this.errorCorrectionLevel.formatBits << 3 | e2, n2 = t3, r4 = 0; 10 > r4; r4++)
        n2 = n2 << 1 ^ 1335 * (n2 >>> 9);
      var i3 = 21522 ^ (t3 << 10 | n2);
      s2(i3 >>> 15 == 0);
      for (var o2 = 0; 5 >= o2; o2++)
        this.setFunctionModule(8, o2, a2(i3, o2));
      this.setFunctionModule(8, 7, a2(i3, 6)), this.setFunctionModule(8, 8, a2(i3, 7)), this.setFunctionModule(7, 8, a2(i3, 8));
      for (var u3 = 9; 15 > u3; u3++)
        this.setFunctionModule(14 - u3, 8, a2(i3, u3));
      for (var l2 = 0; 8 > l2; l2++)
        this.setFunctionModule(this.size - 1 - l2, 8, a2(i3, l2));
      for (var h2 = 8; 15 > h2; h2++)
        this.setFunctionModule(8, this.size - 15 + h2, a2(i3, h2));
      this.setFunctionModule(8, this.size - 8, true);
    } }, { key: "drawVersion", value: function() {
      if (this.version >= 7) {
        for (var e2 = this.version, t3 = 0; 12 > t3; t3++)
          e2 = e2 << 1 ^ 7973 * (e2 >>> 11);
        var n2 = this.version << 12 | e2;
        s2(n2 >>> 18 == 0);
        for (var r4 = 0; 18 > r4; r4++) {
          var i3 = a2(n2, r4), o2 = this.size - 11 + r4 % 3, u3 = Math.floor(r4 / 3);
          this.setFunctionModule(o2, u3, i3), this.setFunctionModule(u3, o2, i3);
        }
      }
    } }, { key: "drawFinderPattern", value: function(e2, t3) {
      for (var n2 = -4; 4 >= n2; n2++)
        for (var r4 = -4; 4 >= r4; r4++) {
          var i3 = Math.max(Math.abs(r4), Math.abs(n2)), o2 = e2 + r4, a3 = t3 + n2;
          o2 >= 0 && this.size > o2 && a3 >= 0 && this.size > a3 && this.setFunctionModule(o2, a3, 2 != i3 && 4 != i3);
        }
    } }, { key: "drawAlignmentPattern", value: function(e2, t3) {
      for (var n2 = -2; 2 >= n2; n2++)
        for (var r4 = -2; 2 >= r4; r4++)
          this.setFunctionModule(e2 + r4, t3 + n2, 1 != Math.max(Math.abs(r4), Math.abs(n2)));
    } }, { key: "setFunctionModule", value: function(e2, t3, n2) {
      this.modules[t3][e2] = n2, this.isFunction[t3][e2] = true;
    } }, { key: "addEccAndInterleave", value: function(e2) {
      var t3 = this.version, n2 = this.errorCorrectionLevel;
      if (e2.length != r3.getNumDataCodewords(t3, n2))
        throw new RangeError("Invalid argument");
      for (var i3 = r3.NUM_ERROR_CORRECTION_BLOCKS[n2.ordinal][t3], o2 = r3.ECC_CODEWORDS_PER_BLOCK[n2.ordinal][t3], a3 = Math.floor(r3.getNumRawDataModules(t3) / 8), u3 = i3 - a3 % i3, l2 = Math.floor(a3 / i3), h2 = [], c2 = r3.reedSolomonComputeDivisor(o2), f2 = 0, v = 0; i3 > f2; f2++) {
        var d = e2.slice(v, v + l2 - o2 + (u3 > f2 ? 0 : 1));
        v += d.length;
        var m = r3.reedSolomonComputeRemainder(d, c2);
        u3 > f2 && d.push(0), h2.push(d.concat(m));
      }
      for (var g = [], y = function(e3) {
        h2.forEach(function(t4, n3) {
          e3 == l2 - o2 && u3 > n3 || g.push(t4[e3]);
        });
      }, E = 0; h2[0].length > E; E++)
        y(E);
      return s2(g.length == a3), g;
    } }, { key: "drawCodewords", value: function(e2) {
      if (e2.length != Math.floor(r3.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      for (var t3 = 0, n2 = this.size - 1; n2 >= 1; n2 -= 2) {
        6 == n2 && (n2 = 5);
        for (var i3 = 0; this.size > i3; i3++)
          for (var o2 = 0; 2 > o2; o2++) {
            var u3 = n2 - o2, l2 = 0 == (n2 + 1 & 2) ? this.size - 1 - i3 : i3;
            !this.isFunction[l2][u3] && 8 * e2.length > t3 && (this.modules[l2][u3] = a2(e2[t3 >>> 3], 7 - (7 & t3)), t3++);
          }
      }
      s2(t3 == 8 * e2.length);
    } }, { key: "applyMask", value: function(e2) {
      if (0 > e2 || e2 > 7)
        throw new RangeError("Mask value out of range");
      for (var t3 = 0; this.size > t3; t3++)
        for (var n2 = 0; this.size > n2; n2++) {
          var r4 = void 0;
          switch (e2) {
            case 0:
              r4 = (n2 + t3) % 2 == 0;
              break;
            case 1:
              r4 = t3 % 2 == 0;
              break;
            case 2:
              r4 = n2 % 3 == 0;
              break;
            case 3:
              r4 = (n2 + t3) % 3 == 0;
              break;
            case 4:
              r4 = (Math.floor(n2 / 3) + Math.floor(t3 / 2)) % 2 == 0;
              break;
            case 5:
              r4 = n2 * t3 % 2 + n2 * t3 % 3 == 0;
              break;
            case 6:
              r4 = (n2 * t3 % 2 + n2 * t3 % 3) % 2 == 0;
              break;
            case 7:
              r4 = ((n2 + t3) % 2 + n2 * t3 % 3) % 2 == 0;
              break;
            default:
              throw Error("Unreachable");
          }
          !this.isFunction[t3][n2] && r4 && (this.modules[t3][n2] = !this.modules[t3][n2]);
        }
    } }, { key: "getPenaltyScore", value: function() {
      for (var e2 = 0, t3 = 0; this.size > t3; t3++) {
        for (var n2 = false, i3 = 0, a3 = [0, 0, 0, 0, 0, 0, 0], u3 = 0; this.size > u3; u3++)
          this.modules[t3][u3] == n2 ? 5 == ++i3 ? e2 += r3.PENALTY_N1 : i3 > 5 && e2++ : (this.finderPenaltyAddHistory(i3, a3), n2 || (e2 += this.finderPenaltyCountPatterns(a3) * r3.PENALTY_N3), n2 = this.modules[t3][u3], i3 = 1);
        e2 += this.finderPenaltyTerminateAndCount(n2, i3, a3) * r3.PENALTY_N3;
      }
      for (var l2 = 0; this.size > l2; l2++) {
        for (var h2 = false, c2 = 0, f2 = [0, 0, 0, 0, 0, 0, 0], v = 0; this.size > v; v++)
          this.modules[v][l2] == h2 ? 5 == ++c2 ? e2 += r3.PENALTY_N1 : c2 > 5 && e2++ : (this.finderPenaltyAddHistory(c2, f2), h2 || (e2 += this.finderPenaltyCountPatterns(f2) * r3.PENALTY_N3), h2 = this.modules[v][l2], c2 = 1);
        e2 += this.finderPenaltyTerminateAndCount(h2, c2, f2) * r3.PENALTY_N3;
      }
      for (var d = 0; this.size - 1 > d; d++)
        for (var m = 0; this.size - 1 > m; m++) {
          var g = this.modules[d][m];
          g == this.modules[d][m + 1] && g == this.modules[d + 1][m] && g == this.modules[d + 1][m + 1] && (e2 += r3.PENALTY_N2);
        }
      var y, E = 0, w = o(this.modules);
      try {
        for (w.s(); !(y = w.n()).done; ) {
          E = y.value.reduce(function(e3, t4) {
            return e3 + (t4 ? 1 : 0);
          }, E);
        }
      } catch (e3) {
        w.e(e3);
      } finally {
        w.f();
      }
      var M = this.size * this.size, C = Math.ceil(Math.abs(20 * E - 10 * M) / M) - 1;
      return s2(C >= 0 && 9 >= C), s2((e2 += C * r3.PENALTY_N4) >= 0 && 2568888 >= e2), e2;
    } }, { key: "getAlignmentPatternPositions", value: function() {
      if (1 == this.version)
        return [];
      for (var e2 = Math.floor(this.version / 7) + 2, t3 = 32 == this.version ? 26 : 2 * Math.ceil((4 * this.version + 4) / (2 * e2 - 2)), n2 = [6], r4 = this.size - 7; e2 > n2.length; r4 -= t3)
        n2.splice(1, 0, r4);
      return n2;
    } }, { key: "finderPenaltyCountPatterns", value: function(e2) {
      var t3 = e2[1];
      s2(3 * this.size >= t3);
      var n2 = t3 > 0 && e2[2] == t3 && e2[3] == 3 * t3 && e2[4] == t3 && e2[5] == t3;
      return (!n2 || 4 * t3 > e2[0] || t3 > e2[6] ? 0 : 1) + (!n2 || 4 * t3 > e2[6] || t3 > e2[0] ? 0 : 1);
    } }, { key: "finderPenaltyTerminateAndCount", value: function(e2, t3, n2) {
      return e2 && (this.finderPenaltyAddHistory(t3, n2), t3 = 0), this.finderPenaltyAddHistory(t3 += this.size, n2), this.finderPenaltyCountPatterns(n2);
    } }, { key: "finderPenaltyAddHistory", value: function(e2, t3) {
      0 == t3[0] && (e2 += this.size), t3.pop(), t3.unshift(e2);
    } }], [{ key: "encodeText", value: function(e2, n2) {
      var i3 = t2.QrSegment.makeSegments(e2);
      return r3.encodeSegments(i3, n2);
    } }, { key: "encodeBinary", value: function(e2, n2) {
      var i3 = t2.QrSegment.makeBytes(e2);
      return r3.encodeSegments([i3], n2);
    } }, { key: "encodeSegments", value: function(e2, t3) {
      var n2, a3, l2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, h2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 40, c2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1, f2 = 5 >= arguments.length || void 0 === arguments[5] || arguments[5];
      if (r3.MIN_VERSION > l2 || l2 > h2 || h2 > r3.MAX_VERSION || -1 > c2 || c2 > 7)
        throw new RangeError("Invalid value");
      for (n2 = l2; ; n2++) {
        var v = 8 * r3.getNumDataCodewords(n2, t3), d = u2.getTotalBits(e2, n2);
        if (v >= d) {
          a3 = d;
          break;
        }
        if (n2 >= h2)
          throw new RangeError("Data too long");
      }
      for (var m = 0, g = [r3.Ecc.MEDIUM, r3.Ecc.QUARTILE, r3.Ecc.HIGH]; g.length > m; m++) {
        var y = g[m];
        f2 && a3 <= 8 * r3.getNumDataCodewords(n2, y) && (t3 = y);
      }
      var E, w = [], M = o(e2);
      try {
        for (M.s(); !(E = M.n()).done; ) {
          var C = E.value;
          i2(C.mode.modeBits, 4, w), i2(C.numChars, C.mode.numCharCountBits(n2), w);
          var R, A = o(C.getData());
          try {
            for (A.s(); !(R = A.n()).done; ) {
              var p = R.value;
              w.push(p);
            }
          } catch (e3) {
            A.e(e3);
          } finally {
            A.f();
          }
        }
      } catch (e3) {
        M.e(e3);
      } finally {
        M.f();
      }
      s2(w.length == a3);
      var P = 8 * r3.getNumDataCodewords(n2, t3);
      s2(P >= w.length), i2(0, Math.min(4, P - w.length), w), i2(0, (8 - w.length % 8) % 8, w), s2(w.length % 8 == 0);
      for (var N = 236; P > w.length; N ^= 253)
        i2(N, 8, w);
      for (var k = []; w.length > 8 * k.length; )
        k.push(0);
      return w.forEach(function(e3, t4) {
        return k[t4 >>> 3] |= e3 << 7 - (7 & t4);
      }), new r3(n2, t3, k, c2);
    } }, { key: "getNumRawDataModules", value: function(e2) {
      if (r3.MIN_VERSION > e2 || e2 > r3.MAX_VERSION)
        throw new RangeError("Version number out of range");
      var t3 = (16 * e2 + 128) * e2 + 64;
      if (e2 >= 2) {
        var n2 = Math.floor(e2 / 7) + 2;
        t3 -= (25 * n2 - 10) * n2 - 55, 7 > e2 || (t3 -= 36);
      }
      return s2(t3 >= 208 && 29648 >= t3), t3;
    } }, { key: "getNumDataCodewords", value: function(e2, t3) {
      return Math.floor(r3.getNumRawDataModules(e2) / 8) - r3.ECC_CODEWORDS_PER_BLOCK[t3.ordinal][e2] * r3.NUM_ERROR_CORRECTION_BLOCKS[t3.ordinal][e2];
    } }, { key: "reedSolomonComputeDivisor", value: function(e2) {
      if (1 > e2 || e2 > 255)
        throw new RangeError("Degree out of range");
      for (var t3 = [], n2 = 0; e2 - 1 > n2; n2++)
        t3.push(0);
      t3.push(1);
      for (var i3 = 1, o2 = 0; e2 > o2; o2++) {
        for (var a3 = 0; t3.length > a3; a3++)
          t3[a3] = r3.reedSolomonMultiply(t3[a3], i3), t3.length > a3 + 1 && (t3[a3] ^= t3[a3 + 1]);
        i3 = r3.reedSolomonMultiply(i3, 2);
      }
      return t3;
    } }, { key: "reedSolomonComputeRemainder", value: function(e2, t3) {
      var n2, i3 = t3.map(function(e3) {
        return 0;
      }), a3 = o(e2);
      try {
        var s3 = function() {
          var e3 = n2.value ^ i3.shift();
          i3.push(0), t3.forEach(function(t4, n3) {
            return i3[n3] ^= r3.reedSolomonMultiply(t4, e3);
          });
        };
        for (a3.s(); !(n2 = a3.n()).done; )
          s3();
      } catch (e3) {
        a3.e(e3);
      } finally {
        a3.f();
      }
      return i3;
    } }, { key: "reedSolomonMultiply", value: function(e2, t3) {
      if (e2 >>> 8 != 0 || t3 >>> 8 != 0)
        throw new RangeError("Byte out of range");
      for (var n2 = 0, r4 = 7; r4 >= 0; r4--)
        n2 = n2 << 1 ^ 285 * (n2 >>> 7), n2 ^= (t3 >>> r4 & 1) * e2;
      return s2(n2 >>> 8 == 0), n2;
    } }]), r3;
  }();
  function i2(e2, t3, n2) {
    if (0 > t3 || t3 > 31 || e2 >>> t3 != 0)
      throw new RangeError("Value out of range");
    for (var r3 = t3 - 1; r3 >= 0; r3--)
      n2.push(e2 >>> r3 & 1);
  }
  function a2(e2, t3) {
    return 0 != (e2 >>> t3 & 1);
  }
  function s2(e2) {
    if (!e2)
      throw Error("Assertion error");
  }
  r2.MIN_VERSION = 1, r2.MAX_VERSION = 40, r2.PENALTY_N1 = 3, r2.PENALTY_N2 = 3, r2.PENALTY_N3 = 40, r2.PENALTY_N4 = 10, r2.ECC_CODEWORDS_PER_BLOCK = [[-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]], r2.NUM_ERROR_CORRECTION_BLOCKS = [[-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25], [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49], [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68], [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]], t2.QrCode = r2;
  var u2 = function() {
    function t3(n2, r3, i3) {
      if (e(this, t3), this.mode = void 0, this.numChars = void 0, this.bitData = void 0, this.mode = n2, this.numChars = r3, this.bitData = i3, 0 > r3)
        throw new RangeError("Invalid argument");
      this.bitData = i3.slice();
    }
    return n(t3, [{ key: "getData", value: function() {
      return this.bitData.slice();
    } }], [{ key: "makeBytes", value: function(e2) {
      var n2, r3 = [], a3 = o(e2);
      try {
        for (a3.s(); !(n2 = a3.n()).done; ) {
          i2(n2.value, 8, r3);
        }
      } catch (e3) {
        a3.e(e3);
      } finally {
        a3.f();
      }
      return new t3(t3.Mode.BYTE, e2.length, r3);
    } }, { key: "makeNumeric", value: function(e2) {
      if (!t3.isNumeric(e2))
        throw new RangeError("String contains non-numeric characters");
      for (var n2 = [], r3 = 0; e2.length > r3; ) {
        var o2 = Math.min(e2.length - r3, 3);
        i2(parseInt(e2.substring(r3, r3 + o2), 10), 3 * o2 + 1, n2), r3 += o2;
      }
      return new t3(t3.Mode.NUMERIC, e2.length, n2);
    } }, { key: "makeAlphanumeric", value: function(e2) {
      if (!t3.isAlphanumeric(e2))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      var n2, r3 = [];
      for (n2 = 0; e2.length >= n2 + 2; n2 += 2) {
        var o2 = 45 * t3.ALPHANUMERIC_CHARSET.indexOf(e2.charAt(n2));
        i2(o2 += t3.ALPHANUMERIC_CHARSET.indexOf(e2.charAt(n2 + 1)), 11, r3);
      }
      return e2.length > n2 && i2(t3.ALPHANUMERIC_CHARSET.indexOf(e2.charAt(n2)), 6, r3), new t3(t3.Mode.ALPHANUMERIC, e2.length, r3);
    } }, { key: "makeSegments", value: function(e2) {
      return "" == e2 ? [] : t3.isNumeric(e2) ? [t3.makeNumeric(e2)] : t3.isAlphanumeric(e2) ? [t3.makeAlphanumeric(e2)] : [t3.makeBytes(t3.toUtf8ByteArray(e2))];
    } }, { key: "makeEci", value: function(e2) {
      var n2 = [];
      if (0 > e2)
        throw new RangeError("ECI assignment value out of range");
      if (128 > e2)
        i2(e2, 8, n2);
      else if (16384 > e2)
        i2(2, 2, n2), i2(e2, 14, n2);
      else {
        if (e2 >= 1e6)
          throw new RangeError("ECI assignment value out of range");
        i2(6, 3, n2), i2(e2, 21, n2);
      }
      return new t3(t3.Mode.ECI, 0, n2);
    } }, { key: "isNumeric", value: function(e2) {
      return t3.NUMERIC_REGEX.test(e2);
    } }, { key: "isAlphanumeric", value: function(e2) {
      return t3.ALPHANUMERIC_REGEX.test(e2);
    } }, { key: "getTotalBits", value: function(e2, t4) {
      var n2, r3 = 0, i3 = o(e2);
      try {
        for (i3.s(); !(n2 = i3.n()).done; ) {
          var a3 = n2.value, s3 = a3.mode.numCharCountBits(t4);
          if (a3.numChars >= 1 << s3)
            return 1 / 0;
          r3 += 4 + s3 + a3.bitData.length;
        }
      } catch (e3) {
        i3.e(e3);
      } finally {
        i3.f();
      }
      return r3;
    } }, { key: "toUtf8ByteArray", value: function(e2) {
      e2 = encodeURI(e2);
      for (var t4 = [], n2 = 0; e2.length > n2; n2++)
        "%" != e2.charAt(n2) ? t4.push(e2.charCodeAt(n2)) : (t4.push(parseInt(e2.substring(n2 + 1, n2 + 3), 16)), n2 += 2);
      return t4;
    } }]), t3;
  }();
  u2.NUMERIC_REGEX = /^[0-9]*$/, u2.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, u2.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", t2.QrSegment = u2;
}(a || (a = {})), function(t2) {
  !function(t3) {
    var r2 = n(function t4(n2, r3) {
      e(this, t4), this.ordinal = void 0, this.formatBits = void 0, this.ordinal = n2, this.formatBits = r3;
    });
    r2.LOW = new r2(0, 1), r2.MEDIUM = new r2(1, 0), r2.QUARTILE = new r2(2, 3), r2.HIGH = new r2(3, 2), t3.Ecc = r2;
  }(t2.QrCode || (t2.QrCode = {}));
}(a || (a = {})), function(t2) {
  !function(t3) {
    var r2 = function() {
      function t4(n2, r3) {
        e(this, t4), this.modeBits = void 0, this.numBitsCharCount = void 0, this.modeBits = n2, this.numBitsCharCount = r3;
      }
      return n(t4, [{ key: "numCharCountBits", value: function(e2) {
        return this.numBitsCharCount[Math.floor((e2 + 7) / 17)];
      } }]), t4;
    }();
    r2.NUMERIC = new r2(1, [10, 12, 14]), r2.ALPHANUMERIC = new r2(2, [9, 11, 13]), r2.BYTE = new r2(4, [8, 16, 16]), r2.KANJI = new r2(8, [8, 10, 12]), r2.ECI = new r2(7, [0, 0, 0]), t3.Mode = r2;
  }(t2.QrSegment || (t2.QrSegment = {}));
}(a || (a = {}));
var s = a, u = ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "marginSize", "imageSettings"], l = { L: s.QrCode.Ecc.LOW, M: s.QrCode.Ecc.MEDIUM, Q: s.QrCode.Ecc.QUARTILE, H: s.QrCode.Ecc.HIGH };
function h(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n2 = [];
  return e2.forEach(function(e3, r2) {
    var i2 = null;
    e3.forEach(function(o2, a2) {
      if (!o2 && null !== i2)
        return n2.push("M".concat(i2 + t2, " ").concat(r2 + t2, "h").concat(a2 - i2, "v1H").concat(i2 + t2, "z")), void (i2 = null);
      if (a2 !== e3.length - 1)
        o2 && null === i2 && (i2 = a2);
      else {
        if (!o2)
          return;
        n2.push(null === i2 ? "M".concat(a2 + t2, ",").concat(r2 + t2, " h1v1H").concat(a2 + t2, "z") : "M".concat(i2 + t2, ",").concat(r2 + t2, " h").concat(a2 + 1 - i2, "v1H").concat(i2 + t2, "z"));
      }
    });
  }), n2.join("");
}
function c(e2, t2) {
  return e2.slice().map(function(e3, n2) {
    return t2.y > n2 || n2 >= t2.y + t2.h ? e3 : e3.map(function(e4, n3) {
      return (t2.x > n3 || n3 >= t2.x + t2.w) && e4;
    });
  });
}
var f = function() {
  function t2(n2, r2) {
    var i2 = this;
    for (var o2 in e(this, t2), this.canvas = void 0, this.pixelRatio = "undefined" != typeof window ? window.devicePixelRatio : 1, this.path2D = true, this.SUPPORTS_PATH2D = void 0, this.createImage = function() {
      return new Image();
    }, this.createPath2D = function() {
      var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, t3 = "createPath2D";
      return i2.canvas && t3 in i2.canvas ? i2.canvas[t3](e2) : new Path2D(e2);
    }, this.canvas = n2, r2)
      o2 in this && (this[o2] = r2[o2]);
    this.SUPPORTS_PATH2D = function() {
      try {
        i2.createPath2D();
      } catch (e2) {
        return false;
      }
      return true;
    }();
  }
  return n(t2, [{ key: "render", value: function(e2, t3) {
    var n2 = this, i2 = e2.value, o2 = e2.size, a2 = void 0 === o2 ? 128 : o2, f2 = e2.level, v = void 0 === f2 ? "L" : f2, d = e2.bgColor, m = void 0 === d ? "#FFFFFF" : d, g = e2.fgColor, y = void 0 === g ? "#000000" : g, E = e2.includeMargin, w = void 0 !== E && E, M = e2.marginSize, C = e2.imageSettings, R = (r(e2, u), null == C ? void 0 : C.src), A = this.canvas, p = A.getContext("2d");
    if (p && i2) {
      var P = s.QrCode.encodeText(i2, l[v]).getModules(), N = function(e3, t4) {
        return null != t4 ? Math.floor(t4) : e3 ? 4 : 0;
      }(w, M), k = P.length + 2 * N, S = function(e3, t4, n3, r2) {
        if (null == r2)
          return null;
        var i3 = e3.length + 2 * n3, o3 = Math.floor(0.1 * t4), a3 = i3 / t4, s2 = (r2.width || o3) * a3, u2 = (r2.height || o3) * a3, l2 = null == r2.x ? e3.length / 2 - s2 / 2 : r2.x * a3, h2 = null == r2.y ? e3.length / 2 - u2 / 2 : r2.y * a3, c2 = null;
        if (r2.excavate) {
          var f3 = Math.floor(l2), v2 = Math.floor(h2);
          c2 = { x: f3, y: v2, w: Math.ceil(s2 + l2 - f3), h: Math.ceil(u2 + h2 - v2) };
        }
        return { x: l2, y: h2, h: u2, w: s2, excavation: c2 };
      }(P, a2, N, C), I = function() {
        var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, r2 = null != S && null !== e3 && e3.complete && 0 !== e3.naturalHeight && 0 !== e3.naturalWidth;
        r2 && null != S.excavation && (P = c(P, S.excavation)), t3 && t3(P);
        var i3 = n2.pixelRatio;
        p.clearRect(0, 0, A.width, A.height), p.setTransform(1, 0, 0, 1, 0, 0), A.height = A.width = a2 * i3;
        var o3 = a2 / k * i3;
        if (p.scale(o3, o3), p.fillStyle = m, p.fillRect(0, 0, k, k), p.fillStyle = y, n2.SUPPORTS_PATH2D && n2.path2D) {
          var s2 = n2.createPath2D(h(P, N));
          p.fill(s2);
        } else
          P.forEach(function(e4, t4) {
            e4.forEach(function(e5, n3) {
              e5 && p.fillRect(n3 + N, t4 + N, 1, 1);
            });
          });
        var u2 = (null == e3 ? void 0 : e3.path) || e3;
        r2 && p.drawImage(u2, S.x + N, S.y + N, S.w, S.h), "draw" in p && p.draw();
      };
      if (R) {
        var b = this.createImage(A);
        b.onload = function() {
          I(b);
        }, b.onerror = function(e3) {
          I(), console.warn(e3);
        }, b.src = R;
      } else
        I();
    }
  } }]), t2;
}();
exports.f = f;
