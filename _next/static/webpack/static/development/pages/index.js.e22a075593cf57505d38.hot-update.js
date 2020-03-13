webpackHotUpdate("static/development/pages/index.js",{

/***/ "./layouts/screen.js":
/*!***************************!*\
  !*** ./layouts/screen.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_date_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/date-nav */ "./components/date-nav.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/menu */ "./components/menu.js");
/* harmony import */ var _components_react_map_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/react-map-gl */ "./components/react-map-gl/index.js");
/* harmony import */ var _components_statistics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/statistics */ "./components/statistics.js");
/* harmony import */ var _components_confirmed_chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/confirmed-chart */ "./components/confirmed-chart.js");
/* harmony import */ var _components_descritpion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/descritpion */ "./components/descritpion.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
var _jsxFileName = "/Users/Theoofe/Living-Data/covid19-dashboard/layouts/screen.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var ScreenPage = function ScreenPage(_ref) {
  var date = _ref.date,
      franceReport = _ref.franceReport,
      regionsReport = _ref.regionsReport,
      prev = _ref.prev,
      next = _ref.next,
      viewport = _ref.viewport,
      setViewport = _ref.setViewport;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_components_date_nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    date: date,
    prev: prev,
    next: next,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    date: date,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_descritpion__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_components_statistics__WEBPACK_IMPORTED_MODULE_4__["default"], {
    report: franceReport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })))), __jsx("div", {
    className: "map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_components_react_map_gl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    viewport: viewport,
    date: date,
    regions: regionsReport,
    onViewportChange: setViewport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ScreenPage);

/***/ })

})
//# sourceMappingURL=index.js.e22a075593cf57505d38.hot-update.js.map