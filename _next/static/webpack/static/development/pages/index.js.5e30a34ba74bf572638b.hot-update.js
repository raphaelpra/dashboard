webpackHotUpdate("static/development/pages/index.js",{

/***/ "./layouts/screen.js":
/*!***************************!*\
  !*** ./layouts/screen.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_date_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/date-nav */ "./components/date-nav.js");
/* harmony import */ var _components_scrollable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/scrollable */ "./components/scrollable.js");
/* harmony import */ var _components_react_map_gl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/react-map-gl */ "./components/react-map-gl/index.js");
/* harmony import */ var _components_statistics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/statistics */ "./components/statistics.js");
/* harmony import */ var _components_confirmed_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/confirmed-chart */ "./components/confirmed-chart.js");
/* harmony import */ var _components_description__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/description */ "./components/description.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
var _jsxFileName = "/Users/jerome/opencovid19-fr/dashboard/layouts/screen.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var ScreenPage = function ScreenPage(_ref) {
  var date = _ref.date,
      franceReport = _ref.franceReport,
      regionsReport = _ref.regionsReport,
      prev = _ref.prev,
      next = _ref.next,
      viewport = _ref.viewport,
      setViewport = _ref.setViewport;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1786365736", [_styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey]]]) + " " + 'menu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_components_date_nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    date: date,
    prev: prev,
    next: next,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(_components_scrollable__WEBPACK_IMPORTED_MODULE_3__["default"], {
    date: date,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_statistics__WEBPACK_IMPORTED_MODULE_5__["default"], {
    report: franceReport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), franceReport && franceReport.history && __jsx(_components_confirmed_chart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: franceReport.history.filter(function (r) {
      return date >= r.date;
    }),
    height: 200,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx(_components_description__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1786365736", [_styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey]]]) + " " + 'map',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_components_react_map_gl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    viewport: viewport,
    date: date,
    regions: regionsReport,
    onViewportChange: setViewport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1786365736",
    dynamic: [_styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey],
    __self: this
  }, ".menu.__jsx-style-dynamic-selector{z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:400px;box-shadow:0 1px 4px ".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey, ";}.map.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJvbWUvb3BlbmNvdmlkMTktZnIvZGFzaGJvYXJkL2xheW91dHMvc2NyZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDa0IsQUFHdUIsQUFRSCxVQVBNLHVCQVFELFlBQ2QsdUNBUndCLDhFQUNOLGdCQUNrQyxrREFDcEQiLCJmaWxlIjoiL1VzZXJzL2plcm9tZS9vcGVuY292aWQxOS1mci9kYXNoYm9hcmQvbGF5b3V0cy9zY3JlZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBEYXRlTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvZGF0ZS1uYXYnXG5pbXBvcnQgU2Nyb2xsYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL3Njcm9sbGFibGUnXG5pbXBvcnQgUmVhY3RNYXBHbCBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LW1hcC1nbCdcbmltcG9ydCBTdGF0aXN0aWNzIGZyb20gJy4uL2NvbXBvbmVudHMvc3RhdGlzdGljcydcbmltcG9ydCBDb25maXJtZWRDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL2NvbmZpcm1lZC1jaGFydCdcbmltcG9ydCBEZXNjcmlwdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2Rlc2NyaXB0aW9uJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9zdHlsZXMvY29sb3JzJ1xuXG5jb25zdCBTY3JlZW5QYWdlID0gKHtkYXRlLCBmcmFuY2VSZXBvcnQsIHJlZ2lvbnNSZXBvcnQsIHByZXYsIG5leHQsIHZpZXdwb3J0LCBzZXRWaWV3cG9ydH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J21lbnUnPlxuICAgICAgICA8RGF0ZU5hdiBkYXRlPXtkYXRlfSBwcmV2PXtwcmV2fSBuZXh0PXtuZXh0fSAvPlxuICAgICAgICA8U2Nyb2xsYWJsZSBkYXRlPXtkYXRlfT5cbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFN0YXRpc3RpY3MgcmVwb3J0PXtmcmFuY2VSZXBvcnR9IC8+XG5cbiAgICAgICAgICAgIHtmcmFuY2VSZXBvcnQgJiYgZnJhbmNlUmVwb3J0Lmhpc3RvcnkgJiYgKFxuICAgICAgICAgICAgICA8Q29uZmlybWVkQ2hhcnQgZGF0YT17ZnJhbmNlUmVwb3J0Lmhpc3RvcnkuZmlsdGVyKHIgPT4gZGF0ZSA+PSByLmRhdGUpfSBoZWlnaHQ9ezIwMH0gLz5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxEZXNjcmlwdGlvbiAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICA8L1Njcm9sbGFibGU+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFwJz5cbiAgICAgICAgPFJlYWN0TWFwR2xcbiAgICAgICAgICB2aWV3cG9ydD17dmlld3BvcnR9XG4gICAgICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgICAgICByZWdpb25zPXtyZWdpb25zUmVwb3J0fVxuICAgICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9e3NldFZpZXdwb3J0fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWVudSB7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNHB4ICR7Y29sb3JzLmxpZ2h0R3JleX07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1hcCB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JlZW5QYWdlXG4iXX0= */\n/*@ sourceURL=/Users/jerome/opencovid19-fr/dashboard/layouts/screen.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (ScreenPage);

/***/ })

})
//# sourceMappingURL=index.js.5e30a34ba74bf572638b.hot-update.js.map