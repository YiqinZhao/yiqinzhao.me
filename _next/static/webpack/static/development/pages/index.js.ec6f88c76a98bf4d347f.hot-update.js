webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var typestyle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! typestyle */ "./node_modules/typestyle/lib.es2015/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./utils.ts");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _VStack__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./VStack */ "./components/VStack.tsx");
/* harmony import */ var _HStack__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./HStack */ "./components/HStack.tsx");







var _jsxFileName = "/Users/yiqinzhao/Desktop/coden/yiqinzhao-src/components/Header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;









var s = {
  container: Object(typestyle__WEBPACK_IMPORTED_MODULE_9__["style"])({
    width: "100%",
    padding: "30px 0",
    margin: "0 auto",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    transition: "box-shadow cubic-bezier(.3,0,.1,1) 800ms"
  }, Object(typestyle__WEBPACK_IMPORTED_MODULE_9__["media"])({
    minWidth: 768
  }, {
    maxWidth: "1200px"
  }), Object(typestyle__WEBPACK_IMPORTED_MODULE_9__["media"])({
    minWidth: 320,
    maxWidth: 480
  }, {
    padding: "15px 20px",
    position: "fixed",
    zIndex: 3,
    top: "0",
    left: "0",
    backgroundColor: "#FFFFFF"
  })),
  qin: Object(typestyle__WEBPACK_IMPORTED_MODULE_9__["style"])({
    width: "40px",
    height: "40px",
    border: "1px solid rgba(0, 0, 0, 0.4)",
    cursor: "pointer"
  }, Object(typestyle__WEBPACK_IMPORTED_MODULE_9__["media"])({
    minWidth: 320,
    maxWidth: 480
  }, {
    width: "30px",
    height: "30px"
  })),
  qinWrapper: Object(typestyle__WEBPACK_IMPORTED_MODULE_9__["style"])({
    fontSize: 0
  }),
  nav: Object(typestyle__WEBPACK_IMPORTED_MODULE_9__["style"])({}, Object(typestyle__WEBPACK_IMPORTED_MODULE_9__["media"])({
    minWidth: 320,
    maxWidth: 480
  }, {
    display: "none"
  })),
  menu: Object(typestyle__WEBPACK_IMPORTED_MODULE_9__["style"])({
    display: "flex",
    justifyContent: "flex-end",
    listStyleType: "none",
    padding: "0"
  }),
  bar: Object(typestyle__WEBPACK_IMPORTED_MODULE_9__["style"])({
    display: "none"
  }, Object(typestyle__WEBPACK_IMPORTED_MODULE_9__["media"])({
    minWidth: 320,
    maxWidth: 480
  }, {
    display: "block",
    width: "18px",
    height: "32px",
    color: "rgba(0, 0, 0, 0.8)",
    paddingTop: "5px",
    boxSizing: "border-box"
  })),
  menuItem: Object(typestyle__WEBPACK_IMPORTED_MODULE_9__["style"])({
    padding: "0 0 0 20px",
    letterSpacing: "0.05rem",
    textTransform: "uppercase",
    transition: "color linear 200ms",
    cursor: "pointer",
    "$nest": {
      "&:hover": {
        color: _utils__WEBPACK_IMPORTED_MODULE_10__["TINT_COLOR"]
      }
    }
  }),
  menuItemActive: Object(typestyle__WEBPACK_IMPORTED_MODULE_9__["style"])({
    color: _utils__WEBPACK_IMPORTED_MODULE_10__["TINT_COLOR"]
  }),
  menuPop: Object(typestyle__WEBPACK_IMPORTED_MODULE_9__["style"])({
    width: "100vw",
    height: "100vh",
    position: "fixed",
    left: "0",
    top: "-100vh",
    zIndex: 2,
    backgroundColor: "white",
    transition: "all cubic-bezier(.3,0,.1,1) 800ms",
    transform: "translate3d(0, 0, 0)"
  }),
  menuPopShow: Object(typestyle__WEBPACK_IMPORTED_MODULE_9__["style"])({
    transform: "translate3d(0, 100vh, 0)"
  }),
  menuPoppedContainerEffect: Object(typestyle__WEBPACK_IMPORTED_MODULE_9__["style"])({
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
  }),
  menuPopped: Object(typestyle__WEBPACK_IMPORTED_MODULE_9__["style"])({
    marginTop: "70px",
    listStyle: "none"
  }),
  menuPoppedItem: Object(typestyle__WEBPACK_IMPORTED_MODULE_9__["style"])({
    padding: "20px 0 5px 0",
    letterSpacing: "0.05rem",
    textTransform: "uppercase",
    borderBottom: "0.5px solid rgba(0, 0, 0, 0.15)",
    transition: "color linear 200ms",
    cursor: "pointer",
    "$nest": {
      "&:hover": {
        color: _utils__WEBPACK_IMPORTED_MODULE_10__["TINT_COLOR"]
      }
    }
  }),
  socialContainer: Object(typestyle__WEBPACK_IMPORTED_MODULE_9__["style"])({
    paddingLeft: "40px",
    marginTop: "40px"
  }),
  socialIconWrapper: Object(typestyle__WEBPACK_IMPORTED_MODULE_9__["style"])({
    width: "2rem",
    marginRight: "1rem"
  }),
  socialIcon: Object(typestyle__WEBPACK_IMPORTED_MODULE_9__["style"])({
    color: "rgba(0, 0, 0, 0.4)",
    margin: "10px 0",
    transition: "color linear 300ms",
    "$nest": {
      "&:hover": {
        color: "rgba(0, 0, 0, 0.8)"
      }
    }
  })
};

var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _React$Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onMenuIconClick", function () {
      _this.setState({
        showMenu: !_this.state.showMenu
      });
    });

    _this.state = {
      showMenu: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var menu = ["home", "news", "projects", "publication", "articles", "cv"];
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["clsConcat"])(s.menuPop, this.state.showMenu ? s.menuPopShow : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, __jsx("ul", {
        className: s.menuPopped,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, menu.map(function (v, i) {
        return __jsx("a", {
          key: i,
          href: v === "home" ? "/" : v === "cv" ? "/cv.pdf" : "/".concat(v),
          target: v === "cv" ? "_blank" : "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }, __jsx("li", {
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["clsConcat"])(s.menuPoppedItem, _this2.props.active === v ? s.menuItemActive : ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          },
          __self: this
        }, v));
      })), __jsx(_VStack__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: s.socialContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, "Find me on internet:"), __jsx(_HStack__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, __jsx("a", {
        href: "https://weibo.com/Spartan093",
        target: "_blank",
        className: s.socialIconWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
        className: s.socialIcon,
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faWeibo"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      })), __jsx("a", {
        href: "https://github.com/YiqinZhao",
        target: "_blank",
        className: s.socialIconWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
        className: s.socialIcon,
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faGithub"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }))))), __jsx("header", {
        id: "header",
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["clsConcat"])(s.container, this.state.showMenu ? s.menuPoppedContainerEffect : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, __jsx("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.15.10/build/styles/default.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }), __jsx("script", {
        src: "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.15.10/build/highlight.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "/css/base.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }), __jsx("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }), __jsx("meta", {
        name: "apple-mobile-web-app-status-bar-style",
        content: "default",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }), __jsx("meta", {
        name: "apple-mobile-web-app-title",
        content: "YiqinZhao",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }), __jsx("link", {
        href: "/splashscreens/iphone5_splash.png",
        media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }), __jsx("link", {
        href: "/splashscreens/iphone6_splash.png",
        media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }), __jsx("link", {
        href: "/splashscreens/iphoneplus_splash.png",
        media: "(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)",
        rel: "apple-touch-startup-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }), __jsx("link", {
        href: "/splashscreens/iphonex_splash.png",
        media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)",
        rel: "apple-touch-startup-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }), __jsx("link", {
        href: "/splashscreens/iphonexr_splash.png",
        media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }), __jsx("link", {
        href: "/splashscreens/iphonexsmax_splash.png",
        media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)",
        rel: "apple-touch-startup-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }), __jsx("link", {
        href: "/splashscreens/ipad_splash.png",
        media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }), __jsx("link", {
        href: "/splashscreens/ipadpro1_splash.png",
        media: "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }), __jsx("link", {
        href: "/splashscreens/ipadpro3_splash.png",
        media: "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }), __jsx("link", {
        href: "/splashscreens/ipadpro2_splash.png",
        media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/icons/apple-touch-icon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }), __jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/icons/favicon-32x32.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }), __jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/icons/favicon-16x16.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }), __jsx("link", {
        rel: "manifest",
        href: "/site.webmanifest",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }), __jsx("link", {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#ffffff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }), __jsx("link", {
        rel: "shortcut icon",
        href: "/icons/favicon.ico",
        type: "image/x-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }), __jsx("meta", {
        name: "msapplication-TileColor",
        content: "#ffffff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }), __jsx("meta", {
        name: "theme-color",
        content: "#ffffff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }), __jsx("script", {
        type: "text/javascript",
        src: "/js/base.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      })), __jsx("a", {
        href: "/",
        className: s.qinWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, __jsx("img", {
        className: s.qin,
        src: "/images/qin.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      })), __jsx("nav", {
        className: s.nav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, __jsx("ul", {
        className: s.menu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, menu.map(function (v, i) {
        return __jsx("a", {
          key: i,
          href: v === "home" ? "/" : v === "cv" ? "/cv.pdf" : "/".concat(v),
          target: v === "cv" ? "_blank" : "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227
          },
          __self: this
        }, __jsx("li", {
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["clsConcat"])(s.menuItem, _this2.props.active === v ? s.menuItemActive : ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          },
          __self: this
        }, v));
      }))), __jsx("div", {
        className: s.bar,
        onClick: this.onMenuIconClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faBars"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.ec6f88c76a98bf4d347f.hot-update.js.map