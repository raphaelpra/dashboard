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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["282963402", [selectedView === 'map' ? 0 : '1em', _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay]]]) + " " + 'menu-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["282963402", [selectedView === 'map' ? 0 : '1em', _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay]]]) + " " + 'content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, children), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["282963402", [selectedView === 'map' ? 0 : '1em', _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay]]]) + " " + 'view-selector',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      return selectView('description');
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["282963402", [selectedView === 'map' ? 0 : '1em', _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay]]]) + " " + "".concat(selectedView === 'description' ? 'selected' : ''),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["282963402", [selectedView === 'map' ? 0 : '1em', _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay]]]) + " " + "".concat(selectedView === 'map' ? 'selected' : ''),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["282963402", [selectedView === 'map' ? 0 : '1em', _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay]]]) + " " + "".concat(selectedView === 'stats' ? 'selected' : ''),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["282963402", [selectedView === 'map' ? 0 : '1em', _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay]]]) + " " + 'menu-footer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["282963402", [selectedView === 'map' ? 0 : '1em', _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "[", __jsx("a", {
    href: "https://github.com/opencovid19-fr/dashboard",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["282963402", [selectedView === 'map' ? 0 : '1em', _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "GitHub"), "]")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "282963402",
    dynamic: [selectedView === 'map' ? 0 : '1em', _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay],
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2NvbXBvbmVudHMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QmtCIiwiZmlsZSI6Ii9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2NvbXBvbmVudHMvbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7RmlsZVRleHQsIE1hcCwgQmFyQ2hhcnR9IGZyb20gJ3JlYWN0LWZlYXRoZXInXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vc3R5bGVzL2NvbG9ycydcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXG5cbmNvbnN0IE1lbnUgPSAoe3NlbGVjdGVkVmlldywgc2VsZWN0VmlldywgY2hpbGRyZW59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J21lbnUtY29udGFpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd2aWV3LXNlbGVjdG9yJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3NlbGVjdGVkVmlldyA9PT0gJ2Rlc2NyaXB0aW9uJyA/ICdzZWxlY3RlZCcgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBzZWxlY3RWaWV3KCdkZXNjcmlwdGlvbicpfT5cbiAgICAgICAgICA8RmlsZVRleHQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzZWxlY3RlZFZpZXcgPT09ICdtYXAnID8gJ3NlbGVjdGVkJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IHNlbGVjdFZpZXcoJ21hcCcpfT5cbiAgICAgICAgICA8TWFwIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c2VsZWN0ZWRWaWV3ID09PSAnc3RhdHMnID8gJ3NlbGVjdGVkJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IHNlbGVjdFZpZXcoJ3N0YXRzJyl9PlxuICAgICAgICAgIDxCYXJDaGFydCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVudS1mb290ZXInPlxuICAgICAgICA8ZGl2Pls8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vb3BlbmNvdmlkMTktZnIvZGFzaGJvYXJkJz5HaXRIdWI8L2E+XTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIHsvKiAubWVudS1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51LWNvbnRhaW5lciAuY29udGVudCB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgcGFkZGluZzogJHtzZWxlY3RlZFZpZXcgPT09ICdtYXAnID8gMCA6ICcxZW0nfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC52aWV3LXNlbGVjdG9yIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZpZXctc2VsZWN0b3IgPiBkaXYge1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAudmlldy1zZWxlY3RvciA+IGRpdi5zZWxlY3RlZCB7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICR7Y29sb3JzLmJsdWV9O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lbnUtY29udGFpbmVyIC5tZW51LWZvb3RlciB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLmxpZ2h0R3JleX07XG4gICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUubW9iaWxlRGlzcGxheX0pIHtcbiAgICAgICAgICAubWVudS1mb290ZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMC41ZW0gMWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC52aWV3LXNlbGVjdG9yIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAqL31cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuTWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gIHNlbGVjdGVkVmlldzogbnVsbCxcbiAgc2VsZWN0VmlldzogbnVsbFxufVxuXG5NZW51LnByb3BUeXBlcyA9IHtcbiAgc2VsZWN0ZWRWaWV3OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdkZXNjcmlwdGlvbicsICdtYXAnLCAnc3RhdHMnXG4gIF0pLFxuICBzZWxlY3RWaWV3OiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudVxuIl19 */\n/*@ sourceURL=/Users/Theoofe/Living-Data/covid19-dashboard/components/menu.js */"));
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
//# sourceMappingURL=index.js.cc5855388dde7c90b333.hot-update.js.map