webpackHotUpdate("static/development/pages/classified/s.js",{

/***/ "./node_modules/blueimp-md5/js/md5.js":
/*!********************************************!*\
  !*** ./node_modules/blueimp-md5/js/md5.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/* global define */

/* eslint-disable strict */

;(function($) {
  'use strict'

  /**
   * Add integers, wrapping at 2^32.
   * This uses 16-bit operations internally to work around bugs in interpreters.
   *
   * @param {number} x First integer
   * @param {number} y Second integer
   * @returns {number} Sum
   */
  function safeAdd(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff)
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16)
    return (msw << 16) | (lsw & 0xffff)
  }

  /**
   * Bitwise rotate a 32-bit number to the left.
   *
   * @param {number} num 32-bit number
   * @param {number} cnt Rotation count
   * @returns {number} Rotated number
   */
  function bitRotateLeft(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt))
  }

  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} q q
   * @param {number} a a
   * @param {number} b b
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b)
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5ff(a, b, c, d, x, s, t) {
    return md5cmn((b & c) | (~b & d), a, b, x, s, t)
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5gg(a, b, c, d, x, s, t) {
    return md5cmn((b & d) | (c & ~d), a, b, x, s, t)
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t)
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t)
  }

  /**
   * Calculate the MD5 of an array of little-endian words, and a bit length.
   *
   * @param {Array} x Array of little-endian words
   * @param {number} len Bit length
   * @returns {Array<number>} MD5 Array
   */
  function binlMD5(x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << len % 32
    x[(((len + 64) >>> 9) << 4) + 14] = len

    var i
    var olda
    var oldb
    var oldc
    var oldd
    var a = 1732584193
    var b = -271733879
    var c = -1732584194
    var d = 271733878

    for (i = 0; i < x.length; i += 16) {
      olda = a
      oldb = b
      oldc = c
      oldd = d

      a = md5ff(a, b, c, d, x[i], 7, -680876936)
      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586)
      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819)
      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330)
      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897)
      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426)
      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341)
      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983)
      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416)
      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417)
      c = md5ff(c, d, a, b, x[i + 10], 17, -42063)
      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162)
      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682)
      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101)
      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290)
      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329)

      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510)
      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632)
      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713)
      b = md5gg(b, c, d, a, x[i], 20, -373897302)
      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691)
      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083)
      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335)
      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848)
      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438)
      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690)
      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961)
      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501)
      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467)
      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784)
      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473)
      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734)

      a = md5hh(a, b, c, d, x[i + 5], 4, -378558)
      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463)
      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562)
      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556)
      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060)
      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353)
      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632)
      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640)
      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174)
      d = md5hh(d, a, b, c, x[i], 11, -358537222)
      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979)
      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189)
      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487)
      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835)
      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520)
      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651)

      a = md5ii(a, b, c, d, x[i], 6, -198630844)
      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415)
      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905)
      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055)
      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571)
      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606)
      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523)
      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799)
      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359)
      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744)
      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380)
      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649)
      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070)
      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379)
      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259)
      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551)

      a = safeAdd(a, olda)
      b = safeAdd(b, oldb)
      c = safeAdd(c, oldc)
      d = safeAdd(d, oldd)
    }
    return [a, b, c, d]
  }

  /**
   * Convert an array of little-endian words to a string
   *
   * @param {Array<number>} input MD5 Array
   * @returns {string} MD5 string
   */
  function binl2rstr(input) {
    var i
    var output = ''
    var length32 = input.length * 32
    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode((input[i >> 5] >>> i % 32) & 0xff)
    }
    return output
  }

  /**
   * Convert a raw string to an array of little-endian words
   * Characters >255 have their high-byte silently ignored.
   *
   * @param {string} input Raw input string
   * @returns {Array<number>} Array of little-endian words
   */
  function rstr2binl(input) {
    var i
    var output = []
    output[(input.length >> 2) - 1] = undefined
    for (i = 0; i < output.length; i += 1) {
      output[i] = 0
    }
    var length8 = input.length * 8
    for (i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32
    }
    return output
  }

  /**
   * Calculate the MD5 of a raw string
   *
   * @param {string} s Input string
   * @returns {string} Raw MD5 string
   */
  function rstrMD5(s) {
    return binl2rstr(binlMD5(rstr2binl(s), s.length * 8))
  }

  /**
   * Calculates the HMAC-MD5 of a key and some data (raw strings)
   *
   * @param {string} key HMAC key
   * @param {string} data Raw input string
   * @returns {string} Raw MD5 string
   */
  function rstrHMACMD5(key, data) {
    var i
    var bkey = rstr2binl(key)
    var ipad = []
    var opad = []
    var hash
    ipad[15] = opad[15] = undefined
    if (bkey.length > 16) {
      bkey = binlMD5(bkey, key.length * 8)
    }
    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636
      opad[i] = bkey[i] ^ 0x5c5c5c5c
    }
    hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8)
    return binl2rstr(binlMD5(opad.concat(hash), 512 + 128))
  }

  /**
   * Convert a raw string to a hex string
   *
   * @param {string} input Raw input string
   * @returns {string} Hex encoded string
   */
  function rstr2hex(input) {
    var hexTab = '0123456789abcdef'
    var output = ''
    var x
    var i
    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i)
      output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f)
    }
    return output
  }

  /**
   * Encode a string as UTF-8
   *
   * @param {string} input Input string
   * @returns {string} UTF8 string
   */
  function str2rstrUTF8(input) {
    return unescape(encodeURIComponent(input))
  }

  /**
   * Encodes input string as raw MD5 string
   *
   * @param {string} s Input string
   * @returns {string} Raw MD5 string
   */
  function rawMD5(s) {
    return rstrMD5(str2rstrUTF8(s))
  }
  /**
   * Encodes input string as Hex encoded string
   *
   * @param {string} s Input string
   * @returns {string} Hex encoded string
   */
  function hexMD5(s) {
    return rstr2hex(rawMD5(s))
  }
  /**
   * Calculates the raw HMAC-MD5 for the given key and data
   *
   * @param {string} k HMAC key
   * @param {string} d Input string
   * @returns {string} Raw MD5 string
   */
  function rawHMACMD5(k, d) {
    return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d))
  }
  /**
   * Calculates the Hex encoded HMAC-MD5 for the given key and data
   *
   * @param {string} k HMAC key
   * @param {string} d Input string
   * @returns {string} Raw MD5 string
   */
  function hexHMACMD5(k, d) {
    return rstr2hex(rawHMACMD5(k, d))
  }

  /**
   * Calculates MD5 value for a given string.
   * If a key is provided, calculates the HMAC-MD5 value.
   * Returns a Hex encoded string unless the raw argument is given.
   *
   * @param {string} string Input string
   * @param {string} [key] HMAC key
   * @param {boolean} [raw] Raw output switch
   * @returns {string} MD5 output
   */
  function md5(string, key, raw) {
    if (!key) {
      if (!raw) {
        return hexMD5(string)
      }
      return rawMD5(string)
    }
    if (!raw) {
      return hexHMACMD5(key, string)
    }
    return rawHMACMD5(key, string)
  }

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return md5
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
})(this)


/***/ }),

/***/ "./pages/classified/s.tsx":
/*!********************************!*\
  !*** ./pages/classified/s.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var typestyle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! typestyle */ "./node_modules/typestyle/lib.es2015/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_HStack__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/HStack */ "./components/HStack.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.tsx");
/* harmony import */ var _components_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/ResponsiveContainer */ "./components/ResponsiveContainer.tsx");
/* harmony import */ var _components_Spacer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/Spacer */ "./components/Spacer.tsx");
/* harmony import */ var _components_MarkdownView__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/MarkdownView */ "./components/MarkdownView.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../utils */ "./utils.ts");
/* harmony import */ var blueimp_md5__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! blueimp-md5 */ "./node_modules/blueimp-md5/js/md5.js");
/* harmony import */ var blueimp_md5__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(blueimp_md5__WEBPACK_IMPORTED_MODULE_23__);












var _jsxFileName = "/Users/yiqinzhao/Desktop/coden/yiqinzhao-src/pages/classified/s.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement;












var s = {
  titleContainer: Object(typestyle__WEBPACK_IMPORTED_MODULE_14__["style"])({
    width: "100%",
    marginBottom: "30px"
  }),
  title: Object(typestyle__WEBPACK_IMPORTED_MODULE_14__["style"])({
    margin: "0 0 10px 0",
    fontSize: "3rem"
  }),
  meta: Object(typestyle__WEBPACK_IMPORTED_MODULE_14__["style"])({
    width: "100%",
    borderBottom: "1px dashed rgba(0, 0, 0, 0.4)"
  }),
  category: Object(typestyle__WEBPACK_IMPORTED_MODULE_14__["style"])({
    fontWeight: "bold",
    lineHeight: "2rem"
  }),
  date: Object(typestyle__WEBPACK_IMPORTED_MODULE_14__["style"])({
    marginLeft: "10px",
    lineHeight: "2rem"
  }),
  passwordField: Object(typestyle__WEBPACK_IMPORTED_MODULE_14__["style"])({
    width: "100%",
    height: "3rem",
    border: "0.5px solid rgba(0, 0, 0, 0.2)",
    fontSize: "1.1rem",
    padding: "0 0.7rem",
    boxSizing: "border-box",
    transition: "box-shadow linear 300ms",
    textAlign: "center",
    "$nest": {
      "&:focus": {
        outlineWidth: "0",
        boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)"
      }
    }
  }),
  button: Object(typestyle__WEBPACK_IMPORTED_MODULE_14__["style"])({
    width: "100%",
    maxWidth: "400px",
    fontSize: "0.9rem",
    border: "none",
    boxShadow: "0 5px 12px rgb(134, 186, 251)",
    padding: "0.6rem 0.8rem",
    backgroundColor: "#74b0fb",
    color: "#FFFFFF",
    fontWeight: "bold",
    transition: "box-shadow linear 100ms",
    borderRadius: "3px",
    cursor: "pointer",
    marginTop: "2rem",
    "$nest": {
      "&:focus": {
        outlineWidth: "0"
      },
      "&:active": {
        boxShadow: "0 2px 6px rgb(134, 186, 251)",
        backgroundColor: "#86bafb",
        color: "#FEFEFE",
        "-webkit-tap-highlight-color": "transparent"
      }
    }
  }),
  bodyLoading: Object(typestyle__WEBPACK_IMPORTED_MODULE_14__["style"])({
    fontFamily: "Impact, sans-serif",
    fontSize: "1.8rem",
    color: "#5696E7"
  }),
  watermark: Object(typestyle__WEBPACK_IMPORTED_MODULE_14__["style"])({
    position: "fixed",
    left: "-20vw",
    top: "0",
    width: "100vw",
    height: "113px",
    fontSize: "1.25rem",
    color: "rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    zIndex: 10
  }, Object(typestyle__WEBPACK_IMPORTED_MODULE_14__["media"])({
    minWidth: 320,
    maxWidth: 480
  }, {
    left: "0",
    height: "62px"
  })),
  ert: Object(typestyle__WEBPACK_IMPORTED_MODULE_14__["style"])({
    marginLeft: "10px",
    lineHeight: "2rem",
    opacity: 0.4
  })
};

var ClassifiedArticleItem =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["default"])(ClassifiedArticleItem, _React$Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(ClassifiedArticleItem, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(_ref) {
        var req, dayjs, date;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;

                if (!req) {
                  _context.next = 5;
                  break;
                }

                dayjs = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
                date = dayjs().format("MMM D, YYYY");
                return _context.abrupt("return", {
                  date: date
                });

              case 5:
                return _context.abrupt("return", __NEXT_DATA__.props.pageProps);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function ClassifiedArticleItem(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ClassifiedArticleItem);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(ClassifiedArticleItem).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "onProceedButtonClick",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {
      var url, id, password, payload, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!_this.state.loading) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              url = new URL(window.location.href);
              id = url.searchParams.get("id");
              password = document.getElementById("password").value;

              if (!(!!password && !!id)) {
                _context2.next = 20;
                break;
              }

              if (!requestIdleCallback) {
                _context2.next = 12;
                break;
              }

              _context2.next = 9;
              return function () {
                return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve) {
                  return requestIdleCallback(function () {
                    Fingerprint2.get(function (components) {
                      resolve(components);
                    });
                  });
                });
              }();

            case 9:
              payload = _context2.sent;
              _context2.next = 15;
              break;

            case 12:
              _context2.next = 14;
              return function () {
                return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve) {
                  return requestIdleCallback(function () {
                    Fingerprint2.get(function (components) {
                      resolve(components);
                    });
                  });
                });
              }();

            case 14:
              payload = _context2.sent;

            case 15:
              payload = payload.reduce(function (obj, v) {
                return v.key !== "canvas" ? _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, obj, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])({}, v.key, v.value)) : obj;
              }, {});
              data = {
                id: id,
                password: password,
                fingerprint: blueimp_md5__WEBPACK_IMPORTED_MODULE_23___default()(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(payload)),
                payload: payload
              };
              console.log(data); // Start network job

              _this.setState({
                loading: true
              });

              isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_15___default()("".concat(_utils__WEBPACK_IMPORTED_MODULE_22__["EYRIE_URL"], "/api/classified"), {
                method: "POST",
                // *GET, POST, PUT, DELETE, etc.
                mode: "cors",
                // no-cors, *cors, same-origin
                cache: "no-cache",
                // *default, no-cache, reload, force-cache, only-if-cached
                headers: {
                  "Content-Type": "application/json"
                },
                // credentials: "include",
                redirect: "follow",
                // manual, *follow, error
                referrer: "no-referrer",
                // no-referrer, *client
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data) // body data type must match "Content-Type" header

              }).then(function (response) {
                if (response.ok) {
                  return response.json();
                } else {
                  return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.reject(response);
                }
              }).then(function (data) {
                _this.setState({
                  article: data,
                  authored: true,
                  loading: false
                });

                setTimeout(function () {
                  window.scrollTo(0, 0);
                }, 10);
                setTimeout(function () {
                  document.getElementById("embedded-music").src = data.meta.music;
                }, 500);
              })["catch"](function (err) {
                alert("Authorization failed!");

                _this.setState({
                  authored: false,
                  loading: false
                });
              });

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _this.state = {
      article: null,
      authored: false,
      loading: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(ClassifiedArticleItem, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          authored = _this$state.authored,
          article = _this$state.article,
          loading = _this$state.loading;
      var date = this.props.date;
      var title = "🔒 Require Authentication";
      var meta = !authored ? __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }) : __jsx(_components_HStack__WEBPACK_IMPORTED_MODULE_16__["default"], {
        className: s.meta,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, __jsx("div", {
        className: s.category,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, article.meta.category), __jsx("div", {
        className: s.date,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, article.meta.date), __jsx("div", {
        className: s.ert,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, Math.ceil(article.body.length / 400), "min"));
      var body = !authored ? __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, __jsx("input", {
        id: "password",
        className: s.passwordField,
        type: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "You are accessing a classified article, password authentication is required. The password should already been provided from Yiqin to you, please use it."), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, "Note:"), " Please ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, "DO NOT"), " ", __jsx("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, "redistribute"), " or ", __jsx("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, "share any information"), " from classified articles, including ", __jsx("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, "copy-paste"), ", ", __jsx("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, "screenshot"), ", ", __jsx("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, "print"), ", etc. To protect the classified information, your usage of ", __jsx("a", {
        href: "yiqinzhao.me",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, "yiqinzhao.me"), " on classified articles ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, "will be tracked"), ". By clicking the ", __jsx("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, "Proceed"), " button, you have acknowledged and agree the above regulations."), __jsx(_components_HStack__WEBPACK_IMPORTED_MODULE_16__["default"], {
        align: "flex-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, __jsx("button", {
        className: s.button,
        onClick: this.onProceedButtonClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, "Proceed"))) : __jsx(_components_MarkdownView__WEBPACK_IMPORTED_MODULE_21__["default"], {
        content: article.body,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      });
      body = loading ? __jsx("div", {
        className: s.bodyLoading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, "Loading...") : body;
      var musicSection = article && article.meta.music ? __jsx(_components_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }), __jsx("iframe", {
        id: "embedded-music",
        frameBorder: "0",
        height: "86",
        width: "330",
        src: "data:text/html,<div style='font-size: 40px; text-align: center; width: 100%; line-height: 66px; font-family: Impact, sans-serif; color: rgba(0, 0, 0, 0.1)'>Loading Music</div>",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }), __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      })) : __jsx(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null);
      var watermark = authored ? __jsx("div", {
        className: s.watermark,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, "Accessor: ", article.accessor) : __jsx(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null);
      return __jsx("div", {
        className: "classified-container main-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, "\uD83D\uDD12 ", authored ? article.meta.title : "Classified", " | YiqinZhao"), __jsx("script", {
        src: "//cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/2.1.0/fingerprint2.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }), watermark, __jsx(_components_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }), __jsx("div", {
        className: s.titleContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, __jsx("h1", {
        className: s.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, authored ? article.meta.title : title), meta), __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      })), musicSection, __jsx(_components_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }), body, __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_18__["default"], {
        date: date,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }));
    }
  }]);

  return ClassifiedArticleItem;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ClassifiedArticleItem);

/***/ })

})
//# sourceMappingURL=s.js.eaf8c65c66bde347098a.hot-update.js.map