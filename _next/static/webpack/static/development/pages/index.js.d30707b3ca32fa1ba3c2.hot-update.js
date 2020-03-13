webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/date-nav.js":
/*!********************************!*\
  !*** ./components/date-nav.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
var _jsxFileName = "/Users/Theoofe/Living-Data/covid19-dashboard/components/date-nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2712668934", [_styles_colors__WEBPACK_IMPORTED_MODULE_5__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_5__["default"].lighterGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].mobileDisplay]]]) + " " + 'menu-header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    onClick: prev,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2712668934", [_styles_colors__WEBPACK_IMPORTED_MODULE_5__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_5__["default"].lighterGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].mobileDisplay]]]) + " " + "report-nav ".concat(prev ? '' : 'disabled'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__["ChevronLeft"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2712668934", [_styles_colors__WEBPACK_IMPORTED_MODULE_5__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_5__["default"].lighterGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Donn\xE9es du ", formatedDate), __jsx("div", {
    onClick: next,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2712668934", [_styles_colors__WEBPACK_IMPORTED_MODULE_5__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_5__["default"].lighterGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].mobileDisplay]]]) + " " + "report-nav ".concat(next ? '' : 'disabled'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__["ChevronRight"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2712668934",
    dynamic: [_styles_colors__WEBPACK_IMPORTED_MODULE_5__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_5__["default"].lighterGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].mobileDisplay],
    __self: this
  }, ".menu-header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:nowrap;-ms-flex-flow:nowrap;flex-flow:nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;box-shadow:0 1px 4px ".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_5__["default"].lightGrey, ";padding:1em;}.report-nav.disabled.__jsx-style-dynamic-selector{color:").concat(_styles_colors__WEBPACK_IMPORTED_MODULE_5__["default"].lighterGrey, ";}.report-nav.disabled.__jsx-style-dynamic-selector:hover{cursor:initial;}.report-nav.__jsx-style-dynamic-selector:hover{cursor:pointer;}@media (max-width:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].mobileDisplay, "){.menu-header.__jsx-style-dynamic-selector{font-size:small;padding:0.5em 1em;}.menu-header.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{margin:0.2em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2NvbXBvbmVudHMvZGF0ZS1uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JrQixBQUd3QixBQVVzQixBQUlwQixBQUlBLEFBS0csQUFLSCxhQUNmLEVBZEYsQUFJQSxDQUtzQixrQkFDcEIsQ0FkRix1Q0FWbUIsK0RBQ2EsbUhBQ1gsNkZBQ0Qsa0JBQ2dDLGtEQUN0QyxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2NvbXBvbmVudHMvZGF0ZS1uYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQge0NoZXZyb25MZWZ0LCBDaGV2cm9uUmlnaHR9IGZyb20gJ3JlYWN0LWZlYXRoZXInXG5cbmltcG9ydCB0aGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL3N0eWxlcy9jb2xvcnMnXG5cbmNvbnN0IGZvcm1hdERhdGUgPSBpc29TdHJpbmcgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoaXNvU3RyaW5nKVxuXG4gIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpXG59XG5cbmNvbnN0IERhdGVOYXYgPSAoe2RhdGUsIHByZXYsIG5leHR9KSA9PiB7XG4gIGNvbnN0IGZvcm1hdGVkRGF0ZSA9IGZvcm1hdERhdGUoZGF0ZSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdtZW51LWhlYWRlcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHJlcG9ydC1uYXYgJHtwcmV2ID8gJycgOiAnZGlzYWJsZWQnfWB9IG9uQ2xpY2s9e3ByZXZ9PjxDaGV2cm9uTGVmdCAvPjwvZGl2PlxuICAgICAgPGgyPkRvbm7DqWVzIGR1IHtmb3JtYXRlZERhdGV9PC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcmVwb3J0LW5hdiAke25leHQgPyAnJyA6ICdkaXNhYmxlZCd9YH0gb25DbGljaz17bmV4dH0+PENoZXZyb25SaWdodCAvPjwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tZW51LWhlYWRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWZsb3c6IG5vd3JhcDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNHB4ICR7Y29sb3JzLmxpZ2h0R3JleX07XG4gICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlcG9ydC1uYXYuZGlzYWJsZWQge1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5saWdodGVyR3JleX07XG4gICAgICAgIH1cblxuICAgICAgICAucmVwb3J0LW5hdi5kaXNhYmxlZDpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBpbml0aWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlcG9ydC1uYXY6aG92ZXIge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLm1vYmlsZURpc3BsYXl9KSB7XG4gICAgICAgICAgLm1lbnUtaGVhZGVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1lbnUtaGVhZGVyIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMC4yZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuRGF0ZU5hdi5kZWZhdWx0UHJvcHMgPSB7XG4gIHByZXY6IG51bGwsXG4gIG5leHQ6IG51bGxcbn1cblxuRGF0ZU5hdi5wcm9wVHlwZXMgPSB7XG4gIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcHJldjogUHJvcFR5cGVzLmZ1bmMsXG4gIG5leHQ6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVOYXZcbiJdfQ== */\n/*@ sourceURL=/Users/Theoofe/Living-Data/covid19-dashboard/components/date-nav.js */")));
};

DateNav.defaultProps = {
  prev: null,
  next: null
};
DateNav.propTypes = {
  date: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  prev: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  next: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (DateNav);

/***/ })

})
//# sourceMappingURL=index.js.d30707b3ca32fa1ba3c2.hot-update.js.map