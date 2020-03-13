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
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/menu */ "./components/menu.js");
/* harmony import */ var _components_react_map_gl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/react-map-gl */ "./components/react-map-gl/index.js");
/* harmony import */ var _components_statistics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/statistics */ "./components/statistics.js");
/* harmony import */ var _components_confirmed_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/confirmed-chart */ "./components/confirmed-chart.js");
/* harmony import */ var _components_descritpion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/descritpion */ "./components/descritpion.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
var _jsxFileName = "/Users/Theoofe/Living-Data/covid19-dashboard/layouts/screen.js";

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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2080488717", [_styles_colors__WEBPACK_IMPORTED_MODULE_8__["default"].lightGrey]]]) + " " + 'menu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_components_date_nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    date: date,
    prev: prev,
    next: next,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    date: date,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_descritpion__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_components_statistics__WEBPACK_IMPORTED_MODULE_5__["default"], {
    report: franceReport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), franceReport && franceReport.history && __jsx(_components_confirmed_chart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: franceReport.history,
    height: 300,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2080488717", [_styles_colors__WEBPACK_IMPORTED_MODULE_8__["default"].lightGrey]]]) + " " + 'map',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_components_react_map_gl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    viewport: viewport,
    date: date,
    regions: regionsReport,
    onViewportChange: setViewport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2080488717",
    dynamic: [_styles_colors__WEBPACK_IMPORTED_MODULE_8__["default"].lightGrey],
    __self: this
  }, ".menu.__jsx-style-dynamic-selector{z-index:1;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:400px;height:100%;box-shadow:0 1px 4px ".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_8__["default"].lightGrey, ";}.map.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2xheW91dHMvc2NyZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDa0IsQUFHdUIsQUFVSixVQVRZLGtCQUNMLEtBU0QsWUFDZCx5REFUd0IsOEVBQ04sZ0JBQ0osWUFDc0Msa0RBQ3BEIiwiZmlsZSI6Ii9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2xheW91dHMvc2NyZWVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgRGF0ZU5hdiBmcm9tICcuLi9jb21wb25lbnRzL2RhdGUtbmF2J1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9tZW51J1xuaW1wb3J0IFJlYWN0TWFwR2wgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC1tYXAtZ2wnXG5pbXBvcnQgU3RhdGlzdGljcyBmcm9tICcuLi9jb21wb25lbnRzL3N0YXRpc3RpY3MnXG5pbXBvcnQgQ29uZmlybWVkQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9jb25maXJtZWQtY2hhcnQnXG5pbXBvcnQgRGVzY3JpcHRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9kZXNjcml0cGlvbidcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9zdHlsZXMvY29sb3JzJ1xuXG5jb25zdCBTY3JlZW5QYWdlID0gKHtkYXRlLCBmcmFuY2VSZXBvcnQsIHJlZ2lvbnNSZXBvcnQsIHByZXYsIG5leHQsIHZpZXdwb3J0LCBzZXRWaWV3cG9ydH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J21lbnUnPlxuICAgICAgICA8RGF0ZU5hdiBkYXRlPXtkYXRlfSBwcmV2PXtwcmV2fSBuZXh0PXtuZXh0fSAvPlxuICAgICAgICA8TWVudSBkYXRlPXtkYXRlfT5cbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPERlc2NyaXB0aW9uIC8+XG5cbiAgICAgICAgICAgIDxTdGF0aXN0aWNzIHJlcG9ydD17ZnJhbmNlUmVwb3J0fSAvPlxuXG4gICAgICAgICAgICB7ZnJhbmNlUmVwb3J0ICYmIGZyYW5jZVJlcG9ydC5oaXN0b3J5ICYmIChcbiAgICAgICAgICAgICAgPENvbmZpcm1lZENoYXJ0IGRhdGE9e2ZyYW5jZVJlcG9ydC5oaXN0b3J5fSBoZWlnaHQ9ezMwMH0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgIDwvTWVudT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFwJz5cbiAgICAgICAgPFJlYWN0TWFwR2xcbiAgICAgICAgICB2aWV3cG9ydD17dmlld3BvcnR9XG4gICAgICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgICAgICByZWdpb25zPXtyZWdpb25zUmVwb3J0fVxuICAgICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9e3NldFZpZXdwb3J0fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWVudSB7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNHB4ICR7Y29sb3JzLmxpZ2h0R3JleX07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1hcCB7XG4gICAgICAgICAgICBmbGV4OjE7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmVlblBhZ2VcbiJdfQ== */\n/*@ sourceURL=/Users/Theoofe/Living-Data/covid19-dashboard/layouts/screen.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (ScreenPage);

/***/ })

})
//# sourceMappingURL=index.js.ca5038a0031e84aa6661.hot-update.js.map