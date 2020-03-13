webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/date-nav.js":
/*!********************************!*\
  !*** ./components/date-nav.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
var _jsxFileName = "/Users/Theoofe/Living-Data/covid19-dashboard/components/date-nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var formatDate = function formatDate(isoString) {
  var date = new Date(isoString);
  return date.toLocaleDateString();
};

var DateNav = function DateNav(_ref) {
  var date = _ref.date,
      prev = _ref.prev,
      next = _ref.next;
  var formatedDate = formatDate(date);
  return __jsx("div", {
    className: "menu-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "report-nav ".concat(prev ? '' : 'disabled'),
    onClick: prev,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["ChevronLeft"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Donn\xE9es du ", formatedDate), __jsx("div", {
    className: "report-nav ".concat(next ? '' : 'disabled'),
    onClick: next,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["ChevronRight"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })));
};

DateNav.defaultProps = {
  prev: null,
  next: null
};
DateNav.propTypes = {
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  prev: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  next: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (DateNav);

/***/ })

})
//# sourceMappingURL=index.js.d63465bef5c17d968ead.hot-update.js.map