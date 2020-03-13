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
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2080488717", [_styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey]]]) + " " + 'menu',
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
  }), __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    date: date,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_descritpion__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_components_statistics__WEBPACK_IMPORTED_MODULE_5__["default"], {
    report: franceReport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), franceReport && franceReport.history && __jsx(_components_confirmed_chart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: franceReport.history.filter(function (r) {
      return date >= r.date;
    }),
    height: 300,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2080488717", [_styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey]]]) + " " + 'view-selector',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      return selectView('description');
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2080488717", [_styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey]]]) + " " + "".concat(selectedView === 'description' ? 'selected' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(FileText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx("div", {
    onClick: function onClick() {
      return selectView('map');
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2080488717", [_styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey]]]) + " " + "".concat(selectedView === 'map' ? 'selected' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(Map, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), __jsx("div", {
    onClick: function onClick() {
      return selectView('stats');
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2080488717", [_styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey]]]) + " " + "".concat(selectedView === 'stats' ? 'selected' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(BarChart, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2080488717", [_styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey]]]) + " " + 'map',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(_components_react_map_gl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    viewport: viewport,
    date: date,
    regions: regionsReport,
    onViewportChange: setViewport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2080488717",
    dynamic: [_styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey],
    __self: this
  }, ".menu.__jsx-style-dynamic-selector{z-index:1;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:400px;height:100%;box-shadow:0 1px 4px ".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey, ";}.map.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2xheW91dHMvc2NyZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEa0IsQUFHdUIsQUFVSixVQVRZLGtCQUNMLEtBU0QsWUFDZCx5REFUd0IsOEVBQ04sZ0JBQ0osWUFDc0Msa0RBQ3BEIiwiZmlsZSI6Ii9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2xheW91dHMvc2NyZWVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgRGF0ZU5hdiBmcm9tICcuLi9jb21wb25lbnRzL2RhdGUtbmF2J1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9tZW51J1xuaW1wb3J0IFJlYWN0TWFwR2wgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC1tYXAtZ2wnXG5pbXBvcnQgU3RhdGlzdGljcyBmcm9tICcuLi9jb21wb25lbnRzL3N0YXRpc3RpY3MnXG5pbXBvcnQgQ29uZmlybWVkQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9jb25maXJtZWQtY2hhcnQnXG5pbXBvcnQgRGVzY3JpcHRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9kZXNjcml0cGlvbidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vc3R5bGVzL2NvbG9ycydcblxuY29uc3QgU2NyZWVuUGFnZSA9ICh7ZGF0ZSwgZnJhbmNlUmVwb3J0LCByZWdpb25zUmVwb3J0LCBwcmV2LCBuZXh0LCB2aWV3cG9ydCwgc2V0Vmlld3BvcnR9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZW51Jz5cbiAgICAgICAgPERhdGVOYXYgZGF0ZT17ZGF0ZX0gcHJldj17cHJldn0gbmV4dD17bmV4dH0gLz5cbiAgICAgICAgPE1lbnUgZGF0ZT17ZGF0ZX0+XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxEZXNjcmlwdGlvbiAvPlxuXG4gICAgICAgICAgICA8U3RhdGlzdGljcyByZXBvcnQ9e2ZyYW5jZVJlcG9ydH0gLz5cblxuICAgICAgICAgICAge2ZyYW5jZVJlcG9ydCAmJiBmcmFuY2VSZXBvcnQuaGlzdG9yeSAmJiAoXG4gICAgICAgICAgICAgIDxDb25maXJtZWRDaGFydCBkYXRhPXtmcmFuY2VSZXBvcnQuaGlzdG9yeS5maWx0ZXIociA9PiBkYXRlID49IHIuZGF0ZSl9IGhlaWdodD17MzAwfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgPC9NZW51PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2aWV3LXNlbGVjdG9yJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c2VsZWN0ZWRWaWV3ID09PSAnZGVzY3JpcHRpb24nID8gJ3NlbGVjdGVkJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IHNlbGVjdFZpZXcoJ2Rlc2NyaXB0aW9uJyl9PlxuICAgICAgICAgICAgPEZpbGVUZXh0IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3NlbGVjdGVkVmlldyA9PT0gJ21hcCcgPyAnc2VsZWN0ZWQnIDogJyd9YH0gb25DbGljaz17KCkgPT4gc2VsZWN0VmlldygnbWFwJyl9PlxuICAgICAgICAgICAgPE1hcCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzZWxlY3RlZFZpZXcgPT09ICdzdGF0cycgPyAnc2VsZWN0ZWQnIDogJyd9YH0gb25DbGljaz17KCkgPT4gc2VsZWN0Vmlldygnc3RhdHMnKX0+XG4gICAgICAgICAgICA8QmFyQ2hhcnQgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYXAnPlxuICAgICAgICA8UmVhY3RNYXBHbFxuICAgICAgICAgIHZpZXdwb3J0PXt2aWV3cG9ydH1cbiAgICAgICAgICBkYXRlPXtkYXRlfVxuICAgICAgICAgIHJlZ2lvbnM9e3JlZ2lvbnNSZXBvcnR9XG4gICAgICAgICAgb25WaWV3cG9ydENoYW5nZT17c2V0Vmlld3BvcnR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tZW51IHtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCA0cHggJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWFwIHtcbiAgICAgICAgICAgIGZsZXg6MTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NyZWVuUGFnZVxuIl19 */\n/*@ sourceURL=/Users/Theoofe/Living-Data/covid19-dashboard/layouts/screen.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (ScreenPage);

/***/ })

})
//# sourceMappingURL=index.js.383926321ca18aec0ce4.hot-update.js.map