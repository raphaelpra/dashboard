webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/statistics.js":
/*!**********************************!*\
  !*** ./components/statistics.js ***!
  \**********************************/
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
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counter */ "./components/counter.js");
var _jsxFileName = "/Users/Theoofe/Living-Data/covid19-dashboard/components/statistics.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Statistics = function Statistics(_ref) {
  var report = _ref.report;

  var _ref2 = report || {},
      casConfirmes = _ref2.casConfirmes,
      deces = _ref2.deces;

  return __jsx("div", {
    className: "jsx-3348446089" + " " + 'stats',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3348446089" + " " + 'counters',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_counter__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: casConfirmes || '?',
    label: "cas confirm\xE9s",
    color: "orange",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_counter__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: deces || '?',
    label: "d\xE9c\xE8s",
    color: "red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3348446089",
    __self: this
  }, ".stats.jsx-3348446089{-webkit-flex:1;-ms-flex:1;flex:1;padding:1em;}.counters.jsx-3348446089{display:grid;grid-template-columns:1fr 1fr;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2NvbXBvbmVudHMvc3RhdGlzdGljcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFja0IsQUFHa0IsQUFLTSxhQUNpQixvQkFMbEIsVUFNZCxFQUxBIiwiZmlsZSI6Ii9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2NvbXBvbmVudHMvc3RhdGlzdGljcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi9jb3VudGVyJ1xuXG5jb25zdCBTdGF0aXN0aWNzID0gKHtyZXBvcnR9KSA9PiB7XG4gIGNvbnN0IHtjYXNDb25maXJtZXMsIGRlY2VzfSA9IHJlcG9ydCB8fCB7fVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3N0YXRzJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb3VudGVycyc+XG4gICAgICAgIDxDb3VudGVyIHZhbHVlPXtjYXNDb25maXJtZXMgfHwgJz8nfSBsYWJlbD0nY2FzIGNvbmZpcm3DqXMnIGNvbG9yPSdvcmFuZ2UnIC8+XG4gICAgICAgIDxDb3VudGVyIHZhbHVlPXtkZWNlcyB8fCAnPyd9IGxhYmVsPSdkw6ljw6hzJyBjb2xvcj0ncmVkJyAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zdGF0cyB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY291bnRlcnMge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuU3RhdGlzdGljcy5kZWZhdWx0UHJvcHMgPSB7XG4gIHJlcG9ydDoge31cbn1cblxuU3RhdGlzdGljcy5wcm9wVHlwZXMgPSB7XG4gIHJlcG9ydDogUHJvcFR5cGVzLm9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0aXN0aWNzXG4iXX0= */\n/*@ sourceURL=/Users/Theoofe/Living-Data/covid19-dashboard/components/statistics.js */"));
};

Statistics.defaultProps = {
  report: {}
};
Statistics.propTypes = {
  report: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Statistics);

/***/ })

})
//# sourceMappingURL=index.js.0a51efeac07d4ae1ddf8.hot-update.js.map