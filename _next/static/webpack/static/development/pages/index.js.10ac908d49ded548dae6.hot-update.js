webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var typestyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! typestyle */ "./node_modules/typestyle/lib.es2015/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ "./utils.ts");
/* harmony import */ var _components_HStack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/HStack */ "./components/HStack.tsx");
/* harmony import */ var _components_VStack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/VStack */ "./components/VStack.tsx");
/* harmony import */ var _components_Spacer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Spacer */ "./components/Spacer.tsx");
/* harmony import */ var _components_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ResponsiveContainer */ "./components/ResponsiveContainer.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.tsx");


var _jsxFileName = "/Users/yiqinzhao/Desktop/coden/yiqinzhao-src/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;












var s = {
  social: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    width: "80px"
  }, Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["media"])({
    minWidth: 320,
    maxWidth: 480
  }, {
    display: "none"
  })),
  heroContainer: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({}, Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["media"])({
    minWidth: 320,
    maxWidth: 480
  }, {
    flexDirection: "column",
    position: "relative"
  })),
  sign: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    position: "absolute",
    width: "80px",
    left: "0",
    top: "80vh"
  }, Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["media"])({
    minWidth: 320,
    maxWidth: 480
  }, {
    display: "none"
  })),
  socialIconContainer: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    padding: "30px 35px 30px 5px",
    boxSizing: "border-box"
  }),
  socialIcon: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    color: "rgba(0, 0, 0, 0.4)",
    margin: "10px 0",
    transition: "color linear 300ms",
    "$nest": {
      "&:hover": {
        color: "rgba(0, 0, 0, 0.8)"
      }
    }
  }),
  selfie: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    width: "35%"
  }, Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["media"])({
    minWidth: 320,
    maxWidth: 480
  }, {
    width: "100%",
    maxHeight: "100vw",
    overflow: "hidden"
  })),
  selfieImage: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({}, Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["media"])({
    minWidth: 320,
    maxWidth: 480
  }, {
    // marginTop: "-30px" // Blue theme
    marginTop: "-20px" // Orange theme

  })),
  slogan: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    flexGrow: 1,
    display: "flex",
    justifyContent: "center !important",
    alignItems: "center"
  }, Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["media"])({
    minWidth: 320,
    maxWidth: 480
  }, {
    width: "100%",
    padding: "2rem 0 0.5rem 0",
    background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 66%)",
    position: "absolute",
    bottom: 0
  })),
  sloganYiqin: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    // Blue gradient
    // background: "linear-gradient(45deg, rgba(126,219,205,1) 2%, rgba(102,181,229,1) 11%, rgba(129,164,239,1) 80%, rgba(209,211,213,1) 100%)",
    // Orange gradient
    background: "linear-gradient(90deg, rgba(238,117,81,1) 0%, rgba(237,103,79,1) 35%, rgba(242,177,135,1) 77%, rgba(255,173,105,1) 100%)",
    "-webkit-background-clip": "text !important",
    "-webkit-text-fill-color": "transparent",
    fontSize: "6rem",
    fontWeight: "bold",
    lineHeight: "6rem"
  }, Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["media"])({
    minWidth: 320,
    maxWidth: 480
  }, {
    fontSize: "4rem",
    lineHeight: "3rem"
  })),
  sloganIntro: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    color: "black",
    fontSize: "2rem",
    marginLeft: "1.3rem",
    fontWeight: "bold",
    lineHeight: "2rem"
  }, Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["media"])({
    minWidth: 320,
    maxWidth: 480
  }, {
    fontSize: "1.3rem",
    lineHeight: "2rem",
    marginLeft: "0.85rem",
    color: "white"
  })),
  discoverBlock: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    flexGrow: 1,
    display: "flex",
    alignItems: "flex-end",
    position: "relative"
  }, Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["media"])({
    minWidth: 320,
    maxWidth: 480
  }, {
    display: "none"
  })),
  discover: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    position: "absolute",
    left: "-2.6em",
    transform: "rotate(-90deg)",
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.4)"
  }),
  sloganImage: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    width: "75%"
  }, Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["media"])({
    minWidth: 320,
    maxWidth: 480
  }, {
    width: "95%"
  })),
  firstRight: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    flexGrow: 1,
    justifyContent: "flex-end"
  }),
  firstRightBorder: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    height: "85%"
  }),
  textResponsiveContainer: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    width: "calc(100% - 40px)",
    marginLeft: "40px"
  }, Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["media"])({
    minWidth: 768
  }, {
    maxWidth: "1160px"
  }), Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["media"])({
    minWidth: 320,
    maxWidth: 480
  }, {
    width: "100%",
    marginLeft: 0
  })),
  grey: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    backgroundColor: "#F5F5F5"
  }),
  textBlock: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    padding: "30px 40px",
    boxSizing: "border-box"
  }),
  titleText: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    margin: 0,
    textTransform: "uppercase"
  }),
  subtitleText: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    color: _utils__WEBPACK_IMPORTED_MODULE_8__["TINT_COLOR"],
    margin: 0
  }),
  intro: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    lineHeight: 1.5
  }),
  leftBordered: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    borderLeft: "0.5px dashed rgba(0, 0, 0, 0.2)"
  }, Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["media"])({
    minWidth: 320,
    maxWidth: 480
  }, {
    borderLeft: "none"
  })),
  moreNews: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    color: _utils__WEBPACK_IMPORTED_MODULE_8__["TINT_COLOR"],
    fontWeight: "bold"
  }),
  linksListItemContainer: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    flexWrap: "wrap"
  }),
  linksListContainer: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    marginTop: "20px"
  }),
  linksListItemImage: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    width: "50px"
  }),
  linksListItemText: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    lineHeight: "50px",
    fontSize: "1.1rem",
    padding: "0 20px",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    margin: "0 10px 0 5px",
    textAlign: "center"
  }, Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["media"])({
    minWidth: 320,
    maxWidth: 480
  }, {
    width: "100%",
    margin: "0 0 0 5px"
  })),
  linksListItemHyper: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({}, Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["media"])({
    minWidth: 320,
    maxWidth: 480
  }, {
    width: "100%",
    marginBottom: "5px"
  })),
  linksListItemContent: Object(typestyle__WEBPACK_IMPORTED_MODULE_5__["style"])({
    height: "50px"
  })
};

var HomePage = function HomePage(_ref) {
  var news = _ref.news,
      date = _ref.date;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, "Home | YiqinZhao")), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_13__["default"], {
    active: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }), __jsx("div", {
    className: s.sign,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, __jsx("img", {
    src: "/images/sign.svg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  })), __jsx(_components_HStack__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }), __jsx(_components_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    fill: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx(_components_HStack__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: s.heroContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx(_components_VStack__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: s.social,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }), __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }), __jsx(_components_VStack__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: s.socialIconContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, __jsx("a", {
    href: "https://weibo.com/Spartan093",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    className: s.socialIcon,
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faWeibo"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  })), __jsx("a", {
    href: "https://github.com/YiqinZhao",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    className: s.socialIcon,
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGithub"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  })))), __jsx(_components_VStack__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: s.selfie,
    align: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, __jsx("img", {
    className: s.selfieImage,
    src: "/images/superdry.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  })), __jsx(_components_VStack__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: s.slogan,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, __jsx(_components_VStack__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, __jsx("span", {
    className: s.sloganYiqin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, "Yiqin Zhao"), __jsx("span", {
    className: s.sloganIntro,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, "MS in CS, AR & System"))))), __jsx("div", {
    className: s.discoverBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, __jsx("div", {
    className: s.discover,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, "discover"))), __jsx(_components_HStack__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }), __jsx("div", {
    className: Object(_utils__WEBPACK_IMPORTED_MODULE_8__["clsConcat"])(s.textResponsiveContainer, s.textBlock, s.grey),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, __jsx(_components_VStack__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, __jsx("h1", {
    className: s.titleText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, "About Me"), __jsx("h3", {
    className: s.subtitleText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, "M.S. in Computer Science at WPI"), __jsx("p", {
    className: s.intro,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, "I am a first-year master student in Computer Science department at ", __jsx("a", {
    href: "https://wpi.edu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, "Worcester Polytechnic Institute (WPI)"), ", also a member of ", __jsx("a", {
    href: "https://cake-lab.github.io",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, "CakeLab"), " working with my advisor ", __jsx("a", {
    href: "https://tianguo.info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, "Prof. Tian Guo"), " on efficient deep learning and mobile augmented reality. My research interests lie in the board area of mobile system, computer vision and computer graphics. More concretely, I am interested in building new types of efficient computer graphics systems that leverage the power of deep learning to produce immersive user experience between real and digital world. Prior to WPI, I got my Bachelor's Degree in Software Engineering from ", __jsx("a", {
    href: "https://tjnu.edu.cn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, "Tianjin Normal University (TJNU)"), " in 2019. I love everything about the computer, and most technology stuff. Besides research, I love to cook and play guitar."))), __jsx(_components_VStack__WEBPACK_IMPORTED_MODULE_10__["default"], {
    align: "flex-end",
    className: Object(_utils__WEBPACK_IMPORTED_MODULE_8__["clsConcat"])(s.grey, s.firstRight),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, __jsx("div", {
    className: Object(_utils__WEBPACK_IMPORTED_MODULE_8__["clsConcat"])(s.leftBordered, s.firstRightBorder),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }))), __jsx(_components_HStack__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }), __jsx("div", {
    className: Object(_utils__WEBPACK_IMPORTED_MODULE_8__["clsConcat"])(s.textResponsiveContainer, s.textBlock),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, __jsx(_components_VStack__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, __jsx("h1", {
    className: s.titleText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, "News"), __jsx("div", {
    className: "index-news markdown",
    dangerouslySetInnerHTML: {
      __html: news.body
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }), __jsx("a", {
    href: "/news",
    className: s.moreNews,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, "More News >>"))), __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: s.leftBordered,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  })), __jsx(_components_HStack__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }), __jsx("div", {
    className: Object(_utils__WEBPACK_IMPORTED_MODULE_8__["clsConcat"])(s.textResponsiveContainer, s.textBlock),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, __jsx(_components_VStack__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, __jsx("h1", {
    className: s.titleText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, "Links"), __jsx(_components_VStack__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: s.linksListContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, __jsx(_components_HStack__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: s.linksListItemContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, __jsx("a", {
    className: s.linksListItemHyper,
    href: "http://c422.github.io",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, __jsx(_components_HStack__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: s.linksListItemContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, __jsx("img", {
    className: s.linksListItemImage,
    src: "/images/c422.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }), __jsx("div", {
    className: s.linksListItemText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, "C422 Studio"))), __jsx("a", {
    className: s.linksListItemHyper,
    href: "https://sabrina-jiang.github.io/blog/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, __jsx(_components_HStack__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: s.linksListItemContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, __jsx("img", {
    className: s.linksListItemImage,
    src: "/images/sabrina.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }), __jsx("div", {
    className: s.linksListItemText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, "Sabrina Jiang"))), __jsx("a", {
    className: s.linksListItemHyper,
    href: "https://fix.moe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, __jsx(_components_HStack__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: s.linksListItemContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, __jsx("img", {
    className: s.linksListItemImage,
    src: "/images/arabaku.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }), __jsx("div", {
    className: s.linksListItemText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, "Arabaku"))), __jsx("a", {
    className: s.linksListItemHyper,
    href: "https://kimyang.cn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, __jsx(_components_HStack__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: s.linksListItemContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, __jsx("img", {
    className: s.linksListItemImage,
    src: "/images/kim-yang.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }), __jsx("div", {
    className: s.linksListItemText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, "Kim Yang"))), __jsx("a", {
    className: s.linksListItemHyper,
    href: "https://cyberjiao.top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }, __jsx(_components_HStack__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: s.linksListItemContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, __jsx("img", {
    className: s.linksListItemImage,
    src: "/images/cyber-jiao.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }), __jsx("div", {
    className: s.linksListItemText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, "Cyber Jiao"))))))), __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: s.leftBordered,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], {
    date: date,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }));
};

HomePage.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var req, dayjs, date, res, news;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref2.req;

            if (!req) {
              _context.next = 13;
              break;
            }

            dayjs = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
            date = dayjs().format("MMM D, YYYY");
            _context.next = 6;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:3000/api/documents?name=news");

          case 6:
            res = _context.sent;
            _context.next = 9;
            return res.json();

          case 9:
            news = _context.sent;
            return _context.abrupt("return", {
              news: news,
              date: date
            });

          case 13:
            return _context.abrupt("return", __NEXT_DATA__.props.pageProps);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.10ac908d49ded548dae6.hot-update.js.map