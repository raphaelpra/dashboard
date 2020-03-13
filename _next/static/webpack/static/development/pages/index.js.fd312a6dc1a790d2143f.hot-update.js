webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
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
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
var _jsxFileName = "/Users/Theoofe/Living-Data/covid19-dashboard/components/menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Menu = function Menu(_ref) {
  var selectedView = _ref.selectedView,
      selectView = _ref.selectView,
      children = _ref.children;
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["83467730", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay]]]) + " " + 'menu-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["83467730", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay]]]) + " " + 'content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, children), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["83467730", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay]]]) + " " + 'view-selector',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      return selectView('description');
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["83467730", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay]]]) + " " + "".concat(selectedView === 'description' ? 'selected' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__["FileText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), __jsx("div", {
    onClick: function onClick() {
      return selectView('map');
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["83467730", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay]]]) + " " + "".concat(selectedView === 'map' ? 'selected' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__["Map"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx("div", {
    onClick: function onClick() {
      return selectView('stats');
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["83467730", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay]]]) + " " + "".concat(selectedView === 'stats' ? 'selected' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__["BarChart"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["83467730", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay]]]) + " " + 'menu-footer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["83467730", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "[", __jsx("a", {
    href: "https://github.com/opencovid19-fr/dashboard",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["83467730", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "GitHub"), "]")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "83467730",
    dynamic: [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay],
    __self: this
  }, ".menu-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;width:100%;background-color:#fff;}.menu-container.__jsx-style-dynamic-selector .content.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;overflow-y:scroll;padding:1em;}.view-selector.__jsx-style-dynamic-selector{display:none;}.view-selector.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{padding:1em;margin:auto;}.view-selector.__jsx-style-dynamic-selector>div.selected.__jsx-style-dynamic-selector{border-top:2px solid ".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, ";}.menu-container.__jsx-style-dynamic-selector .menu-footer.__jsx-style-dynamic-selector{text-align:center;background:").concat(_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, ";padding:1em;}@media (max-width:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay, "){.menu-footer.__jsx-style-dynamic-selector{padding:0.5em 1em;}.view-selector.__jsx-style-dynamic-selector{display:grid;grid-template-columns:1fr 1fr 1fr;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2NvbXBvbmVudHMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QmtCLEFBR3dCLEFBUU4sQUFNTSxBQUlELEFBS3NDLEFBSWhDLEFBT0UsQUFJTCxZQW5CSCxDQUpkLEFBd0JzQyxLQVhJLEFBT3hDLE1BZkYsU0FYb0IsY0ErQk8sR0FoQjNCLENBZGMsT0FtQkEsS0FsQmQsT0FtQkEsSUE3QndCLHdFQXdDRCxNQXZDVCxZQUNELFdBQ1csc0JBQ3hCLDBDQXFDRSIsImZpbGUiOiIvVXNlcnMvVGhlb29mZS9MaXZpbmctRGF0YS9jb3ZpZDE5LWRhc2hib2FyZC9jb21wb25lbnRzL21lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQge0ZpbGVUZXh0LCBNYXAsIEJhckNoYXJ0fSBmcm9tICdyZWFjdC1mZWF0aGVyJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL3N0eWxlcy9jb2xvcnMnXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuXG5jb25zdCBNZW51ID0gKHtzZWxlY3RlZFZpZXcsIHNlbGVjdFZpZXcsIGNoaWxkcmVufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdtZW51LWNvbnRhaW5lcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndmlldy1zZWxlY3Rvcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzZWxlY3RlZFZpZXcgPT09ICdkZXNjcmlwdGlvbicgPyAnc2VsZWN0ZWQnIDogJyd9YH0gb25DbGljaz17KCkgPT4gc2VsZWN0VmlldygnZGVzY3JpcHRpb24nKX0+XG4gICAgICAgICAgPEZpbGVUZXh0IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c2VsZWN0ZWRWaWV3ID09PSAnbWFwJyA/ICdzZWxlY3RlZCcgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBzZWxlY3RWaWV3KCdtYXAnKX0+XG4gICAgICAgICAgPE1hcCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3NlbGVjdGVkVmlldyA9PT0gJ3N0YXRzJyA/ICdzZWxlY3RlZCcgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBzZWxlY3RWaWV3KCdzdGF0cycpfT5cbiAgICAgICAgICA8QmFyQ2hhcnQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J21lbnUtZm9vdGVyJz5cbiAgICAgICAgPGRpdj5bPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL29wZW5jb3ZpZDE5LWZyL2Rhc2hib2FyZCc+R2l0SHViPC9hPl08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWVudS1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51LWNvbnRhaW5lciAuY29udGVudCB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZpZXctc2VsZWN0b3Ige1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudmlldy1zZWxlY3RvciA+IGRpdiB7XG4gICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC52aWV3LXNlbGVjdG9yID4gZGl2LnNlbGVjdGVkIHtcbiAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgJHtjb2xvcnMuYmx1ZX07XG4gICAgICAgIH1cblxuICAgICAgICAubWVudS1jb250YWluZXIgLm1lbnUtZm9vdGVyIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5tb2JpbGVEaXNwbGF5fSkge1xuICAgICAgICAgIC5tZW51LWZvb3RlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZpZXctc2VsZWN0b3Ige1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbk1lbnUuZGVmYXVsdFByb3BzID0ge1xuICBzZWxlY3RlZFZpZXc6IG51bGwsXG4gIHNlbGVjdFZpZXc6IG51bGxcbn1cblxuTWVudS5wcm9wVHlwZXMgPSB7XG4gIHNlbGVjdGVkVmlldzogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnZGVzY3JpcHRpb24nLCAnbWFwJywgJ3N0YXRzJ1xuICBdKSxcbiAgc2VsZWN0VmlldzogUHJvcFR5cGVzLmZ1bmMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVcbiJdfQ== */\n/*@ sourceURL=/Users/Theoofe/Living-Data/covid19-dashboard/components/menu.js */")));
};

Menu.defaultProps = {
  selectedView: null,
  selectView: null
};
Menu.propTypes = {
  selectedView: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['description', 'map', 'stats']),
  selectView: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=index.js.fd312a6dc1a790d2143f.hot-update.js.map