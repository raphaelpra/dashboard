webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/statistics.js":
/*!**********************************!*\
  !*** ./components/statistics.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counter */ "./components/counter.js");
var _jsxFileName = "/Users/Theoofe/Living-Data/covid19-dashboard/components/statistics.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Statistics = function Statistics(_ref) {
  var report = _ref.report;

  var _ref2 = report || {},
      casConfirmes = _ref2.casConfirmes,
      deces = _ref2.deces;

  return __jsx("div", {
    className: "stats",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "counters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_counter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: casConfirmes || '?',
    label: "cas confirm\xE9s",
    color: "orange",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_counter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: deces || '?',
    label: "d\xE9c\xE8s",
    color: "red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })));
};

Statistics.defaultProps = {
  report: {}
};
Statistics.propTypes = {
  report: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Statistics);

/***/ })

})
//# sourceMappingURL=index.js.00c975abe859b663cbe5.hot-update.js.map