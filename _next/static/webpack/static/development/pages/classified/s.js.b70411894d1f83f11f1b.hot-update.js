webpackHotUpdate("static/development/pages/classified/s.js",{

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
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var typestyle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! typestyle */ "./node_modules/typestyle/lib.es2015/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_HStack__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/HStack */ "./components/HStack.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.tsx");
/* harmony import */ var _components_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/ResponsiveContainer */ "./components/ResponsiveContainer.tsx");
/* harmony import */ var _components_Spacer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/Spacer */ "./components/Spacer.tsx");
/* harmony import */ var _components_MarkdownView__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/MarkdownView */ "./components/MarkdownView.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../utils */ "./utils.ts");











var _jsxFileName = "/Users/yiqinzhao/Desktop/coden/yiqinzhao-src/pages/classified/s.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;











var s = {
  titleContainer: Object(typestyle__WEBPACK_IMPORTED_MODULE_13__["style"])({
    width: "100%",
    marginBottom: "30px"
  }),
  title: Object(typestyle__WEBPACK_IMPORTED_MODULE_13__["style"])({
    margin: "0 0 10px 0",
    fontSize: "3rem"
  }),
  meta: Object(typestyle__WEBPACK_IMPORTED_MODULE_13__["style"])({
    width: "100%",
    borderBottom: "1px dashed rgba(0, 0, 0, 0.4)"
  }),
  category: Object(typestyle__WEBPACK_IMPORTED_MODULE_13__["style"])({
    fontWeight: "bold",
    lineHeight: "2rem"
  }),
  date: Object(typestyle__WEBPACK_IMPORTED_MODULE_13__["style"])({
    marginLeft: "10px",
    lineHeight: "2rem"
  }),
  passwordField: Object(typestyle__WEBPACK_IMPORTED_MODULE_13__["style"])({
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
  button: Object(typestyle__WEBPACK_IMPORTED_MODULE_13__["style"])({
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
  bodyLoading: Object(typestyle__WEBPACK_IMPORTED_MODULE_13__["style"])({
    fontFamily: "Impact, sans-serif",
    fontSize: "1.8rem",
    color: "#5696E7"
  }),
  watermark: Object(typestyle__WEBPACK_IMPORTED_MODULE_13__["style"])({
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
  }, Object(typestyle__WEBPACK_IMPORTED_MODULE_13__["media"])({
    minWidth: 320,
    maxWidth: 480
  }, {
    left: "0",
    height: "62px"
  })),
  ert: Object(typestyle__WEBPACK_IMPORTED_MODULE_13__["style"])({
    marginLeft: "10px",
    lineHeight: "2rem",
    opacity: 0.4
  })
};

var ClassifiedArticleItem =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(ClassifiedArticleItem, _React$Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(ClassifiedArticleItem, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(_ref) {
        var req, dayjs, date;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
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

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ClassifiedArticleItem);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ClassifiedArticleItem).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "onProceedButtonClick",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
      var url, id, password, payload, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
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
                return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve) {
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
                return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve) {
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
              console.log(payload);
              return _context2.abrupt("return");

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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(ClassifiedArticleItem, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          authored = _this$state.authored,
          article = _this$state.article,
          loading = _this$state.loading;
      var date = this.props.date;
      var title = "🔒 Require Authentication";
      var meta = !authored ? __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }) : __jsx(_components_HStack__WEBPACK_IMPORTED_MODULE_15__["default"], {
        className: s.meta,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, __jsx("div", {
        className: s.category,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, article.meta.category), __jsx("div", {
        className: s.date,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, article.meta.date), __jsx("div", {
        className: s.ert,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, Math.ceil(article.body.length / 400), "min"));
      var body = !authored ? __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, __jsx("input", {
        id: "password",
        className: s.passwordField,
        type: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, "You are accessing a classified article, password authentication is required. The password should already been provided from Yiqin to you, please use it."), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "Note:"), " Please ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "DO NOT"), " ", __jsx("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "redistribute"), " or ", __jsx("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "share any information"), " from classified articles, including ", __jsx("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "copy-paste"), ", ", __jsx("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "screenshot"), ", ", __jsx("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "print"), ", etc. To protect the classified information, your usage of ", __jsx("a", {
        href: "yiqinzhao.me",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "yiqinzhao.me"), " on classified articles ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "will be tracked"), ". By clicking the ", __jsx("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "Proceed"), " button, you have acknowledged and agree the above regulations."), __jsx(_components_HStack__WEBPACK_IMPORTED_MODULE_15__["default"], {
        align: "flex-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, __jsx("button", {
        className: s.button,
        onClick: this.onProceedButtonClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "Proceed"))) : __jsx(_components_MarkdownView__WEBPACK_IMPORTED_MODULE_20__["default"], {
        content: article.body,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      });
      body = loading ? __jsx("div", {
        className: s.bodyLoading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, "Loading...") : body;
      var musicSection = article && article.meta.music ? __jsx(_components_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
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
          lineNumber: 258
        },
        __self: this
      }), __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      })) : __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null);
      var watermark = authored ? __jsx("div", {
        className: s.watermark,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, "Accessor: ", article.accessor) : __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null);
      return __jsx("div", {
        className: "classified-container main-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, "\uD83D\uDD12 ", authored ? article.meta.title : "Classified", " | YiqinZhao"), __jsx("script", {
        src: "//cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/2.1.0/fingerprint2.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }), watermark, __jsx(_components_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }), __jsx("div", {
        className: s.titleContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, __jsx("h1", {
        className: s.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, authored ? article.meta.title : title), meta), __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      })), musicSection, __jsx(_components_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }), body, __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_17__["default"], {
        date: date,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }));
    }
  }]);

  return ClassifiedArticleItem;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ClassifiedArticleItem);

/***/ })

})
//# sourceMappingURL=s.js.b70411894d1f83f11f1b.hot-update.js.map