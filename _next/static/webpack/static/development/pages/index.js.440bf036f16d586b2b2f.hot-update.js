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
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
var _jsxFileName = "/Users/Theoofe/Living-Data/covid19-dashboard/components/menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Menu = function Menu(_ref) {
  var selectedView = _ref.selectedView,
      selectView = _ref.selectView,
      children = _ref.children;
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["545905990", [_styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].blue, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].mobileDisplay]]]) + " " + 'menu-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["545905990", [_styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].blue, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].mobileDisplay]]]) + " " + 'content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "545905990",
    dynamic: [_styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].blue, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].mobileDisplay],
    __self: this
  }, ".menu-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;overflow-y:scroll;background-color:#fff;}.menu-container.__jsx-style-dynamic-selector .content.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;}.view-selector.__jsx-style-dynamic-selector{display:none;}.view-selector.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{padding:0.5em;margin:auto;}.view-selector.__jsx-style-dynamic-selector>div.selected.__jsx-style-dynamic-selector{border-top:2px solid ".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].blue, ";}@media (max-width:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].mobileDisplay, "){.view-selector.__jsx-style-dynamic-selector{display:grid;grid-template-columns:1fr 1fr 1fr;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2NvbXBvbmVudHMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFha0IsQUFHd0IsQUFRTixBQUlNLEFBSUMsQUFLb0MsQUFLbkMsYUFiakIsQUFjc0MsQ0FWeEIsWUFDZCxPQVRBLGNBbUIyQixHQU4zQix3QkFyQndCLHdFQTRCRCxNQTNCZCxpQ0FDVyxrQkFDSSxzQkFDeEIsY0F5QjBCLHNCQUN4QiIsImZpbGUiOiIvVXNlcnMvVGhlb29mZS9MaXZpbmctRGF0YS9jb3ZpZDE5LWRhc2hib2FyZC9jb21wb25lbnRzL21lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vc3R5bGVzL2NvbG9ycydcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXG5cbmNvbnN0IE1lbnUgPSAoe3NlbGVjdGVkVmlldywgc2VsZWN0VmlldywgY2hpbGRyZW59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J21lbnUtY29udGFpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1lbnUtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51LWNvbnRhaW5lciAuY29udGVudCB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC52aWV3LXNlbGVjdG9yIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZpZXctc2VsZWN0b3IgPiBkaXYge1xuICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC52aWV3LXNlbGVjdG9yID4gZGl2LnNlbGVjdGVkIHtcbiAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgJHtjb2xvcnMuYmx1ZX07XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5tb2JpbGVEaXNwbGF5fSkge1xuICAgICAgICAgIC52aWV3LXNlbGVjdG9yIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuTWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gIHNlbGVjdGVkVmlldzogbnVsbCxcbiAgc2VsZWN0VmlldzogbnVsbFxufVxuXG5NZW51LnByb3BUeXBlcyA9IHtcbiAgc2VsZWN0ZWRWaWV3OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdkZXNjcmlwdGlvbicsICdtYXAnLCAnc3RhdHMnXG4gIF0pLFxuICBzZWxlY3RWaWV3OiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudVxuIl19 */\n/*@ sourceURL=/Users/Theoofe/Living-Data/covid19-dashboard/components/menu.js */")));
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
//# sourceMappingURL=index.js.440bf036f16d586b2b2f.hot-update.js.map