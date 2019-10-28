webpackHotUpdate("static/development/pages/articles/[name].js",{

/***/ "./pages/articles/[name].tsx":
/*!***********************************!*\
  !*** ./pages/articles/[name].tsx ***!
  \***********************************/
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
/* harmony import */ var typestyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typestyle */ "./node_modules/typestyle/lib.es2015/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_HStack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/HStack */ "./components/HStack.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.tsx");
/* harmony import */ var _components_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ResponsiveContainer */ "./components/ResponsiveContainer.tsx");
/* harmony import */ var _components_Spacer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Spacer */ "./components/Spacer.tsx");
/* harmony import */ var _components_MarkdownView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/MarkdownView */ "./components/MarkdownView.tsx");


var _jsxFileName = "/Users/yiqinzhao/Desktop/coden/yiqinzhao-src/pages/articles/[name].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var s = {
  titleContainer: Object(typestyle__WEBPACK_IMPORTED_MODULE_4__["style"])({
    width: "100%",
    marginBottom: "30px"
  }),
  title: Object(typestyle__WEBPACK_IMPORTED_MODULE_4__["style"])({
    margin: "0 0 10px 0",
    fontSize: "3rem"
  }),
  meta: Object(typestyle__WEBPACK_IMPORTED_MODULE_4__["style"])({
    width: "100%",
    borderBottom: "1px dashed rgba(0, 0, 0, 0.4)"
  }),
  category: Object(typestyle__WEBPACK_IMPORTED_MODULE_4__["style"])({
    fontWeight: "bold",
    lineHeight: "2rem"
  }),
  date: Object(typestyle__WEBPACK_IMPORTED_MODULE_4__["style"])({
    marginLeft: "10px",
    lineHeight: "2rem"
  }),
  ert: Object(typestyle__WEBPACK_IMPORTED_MODULE_4__["style"])({
    marginLeft: "10px",
    lineHeight: "2rem"
  })
};

var ArticleItem = function ArticleItem(_ref) {
  var article = _ref.article,
      date = _ref.date;
  return __jsx("div", {
    className: "main-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, article.meta.title, " | YiqinZhao")), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    active: "articles",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(_components_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("div", {
    className: s.titleContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("h1", {
    className: s.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, article.meta.title), __jsx(_components_HStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: s.meta,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: s.category,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, article.meta.category), __jsx("div", {
    className: s.date,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, article.meta.date), __jsx("div", {
    className: s.ert,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Estimated Reading Time: ", article.body.length / 400, " min"))), __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), __jsx(_components_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx(_components_MarkdownView__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "body",
    content: article.body,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    date: date,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }));
};

ArticleItem.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var req, query, dayjs, date, res, article;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref2.req, query = _ref2.query;

            if (!req) {
              _context.next = 13;
              break;
            }

            dayjs = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
            date = dayjs().format("MMM D, YYYY");
            _context.next = 6;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("http://localhost:3000/api/articles?name=" + encodeURIComponent(query.name));

          case 6:
            res = _context.sent;
            _context.next = 9;
            return res.json();

          case 9:
            article = _context.sent;
            return _context.abrupt("return", {
              article: article,
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

/* harmony default export */ __webpack_exports__["default"] = (ArticleItem);

/***/ })

})
//# sourceMappingURL=[name].js.eff79a788fd46e2d7b07.hot-update.js.map