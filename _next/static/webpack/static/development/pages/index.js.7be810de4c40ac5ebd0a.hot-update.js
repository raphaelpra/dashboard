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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1472623564", [_styles_colors__WEBPACK_IMPORTED_MODULE_5__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_5__["default"].lighterGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].mobileDisplay]]]) + " " + 'menu-header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    onClick: prev,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1472623564", [_styles_colors__WEBPACK_IMPORTED_MODULE_5__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_5__["default"].lighterGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].mobileDisplay]]]) + " " + "report-nav ".concat(prev ? '' : 'disabled'),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1472623564", [_styles_colors__WEBPACK_IMPORTED_MODULE_5__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_5__["default"].lighterGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Donn\xE9es du ", formatedDate), __jsx("div", {
    onClick: next,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1472623564", [_styles_colors__WEBPACK_IMPORTED_MODULE_5__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_5__["default"].lighterGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].mobileDisplay]]]) + " " + "report-nav ".concat(next ? '' : 'disabled'),
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
    id: "1472623564",
    dynamic: [_styles_colors__WEBPACK_IMPORTED_MODULE_5__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_5__["default"].lighterGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].mobileDisplay],
    __self: this
  }, ".menu-header.__jsx-style-dynamic-selector{z-index:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:nowrap;-ms-flex-flow:nowrap;flex-flow:nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;box-shadow:0 1px 4px ".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_5__["default"].lightGrey, ";padding:1em;background-color:#fff;}.report-nav.disabled.__jsx-style-dynamic-selector{color:").concat(_styles_colors__WEBPACK_IMPORTED_MODULE_5__["default"].lighterGrey, ";}.report-nav.disabled.__jsx-style-dynamic-selector:hover{cursor:initial;}.report-nav.__jsx-style-dynamic-selector:hover{cursor:pointer;}@media (max-width:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].mobileDisplay, "){.menu-header.__jsx-style-dynamic-selector{font-size:small;padding:0.5em 1em;}.menu-header.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{margin:0.2em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2NvbXBvbmVudHMvZGF0ZS1uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JrQixBQUdxQixBQVl5QixBQUlwQixBQUlBLEFBS0csQUFLSCxVQTdCRixHQThCYixFQWRGLEFBSUEsQ0FLc0Isa0JBQ3BCLENBZEYsaURBWG1CLCtEQUNhLG1IQUNYLDZGQUNELGtCQUNnQyxrREFDdEMsWUFDVSxzQkFDeEIiLCJmaWxlIjoiL1VzZXJzL1RoZW9vZmUvTGl2aW5nLURhdGEvY292aWQxOS1kYXNoYm9hcmQvY29tcG9uZW50cy9kYXRlLW5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7Q2hldnJvbkxlZnQsIENoZXZyb25SaWdodH0gZnJvbSAncmVhY3QtZmVhdGhlcidcblxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vc3R5bGVzL2NvbG9ycydcblxuY29uc3QgZm9ybWF0RGF0ZSA9IGlzb1N0cmluZyA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShpc29TdHJpbmcpXG5cbiAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKClcbn1cblxuY29uc3QgRGF0ZU5hdiA9ICh7ZGF0ZSwgcHJldiwgbmV4dH0pID0+IHtcbiAgY29uc3QgZm9ybWF0ZWREYXRlID0gZm9ybWF0RGF0ZShkYXRlKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J21lbnUtaGVhZGVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcmVwb3J0LW5hdiAke3ByZXYgPyAnJyA6ICdkaXNhYmxlZCd9YH0gb25DbGljaz17cHJldn0+PENoZXZyb25MZWZ0IC8+PC9kaXY+XG4gICAgICA8aDI+RG9ubsOpZXMgZHUge2Zvcm1hdGVkRGF0ZX08L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2ByZXBvcnQtbmF2ICR7bmV4dCA/ICcnIDogJ2Rpc2FibGVkJ31gfSBvbkNsaWNrPXtuZXh0fT48Q2hldnJvblJpZ2h0IC8+PC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1lbnUtaGVhZGVyIHtcbiAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1mbG93OiBub3dyYXA7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAke2NvbG9ycy5saWdodEdyZXl9O1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlcG9ydC1uYXYuZGlzYWJsZWQge1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5saWdodGVyR3JleX07XG4gICAgICAgIH1cblxuICAgICAgICAucmVwb3J0LW5hdi5kaXNhYmxlZDpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBpbml0aWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlcG9ydC1uYXY6aG92ZXIge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLm1vYmlsZURpc3BsYXl9KSB7XG4gICAgICAgICAgLm1lbnUtaGVhZGVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1lbnUtaGVhZGVyIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMC4yZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuRGF0ZU5hdi5kZWZhdWx0UHJvcHMgPSB7XG4gIHByZXY6IG51bGwsXG4gIG5leHQ6IG51bGxcbn1cblxuRGF0ZU5hdi5wcm9wVHlwZXMgPSB7XG4gIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcHJldjogUHJvcFR5cGVzLmZ1bmMsXG4gIG5leHQ6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVOYXZcbiJdfQ== */\n/*@ sourceURL=/Users/Theoofe/Living-Data/covid19-dashboard/components/date-nav.js */")));
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
//# sourceMappingURL=index.js.7be810de4c40ac5ebd0a.hot-update.js.map