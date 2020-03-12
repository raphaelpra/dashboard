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
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./counter */ "./components/counter.js");
/* harmony import */ var _confirmed_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirmed-chart */ "./components/confirmed-chart.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var _lib_dates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/dates */ "./lib/dates.js");
var _jsxFileName = "/Users/jerome/opencovid19-fr/dashboard/components/menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var formatDate = function formatDate(isoString) {
  var date = new Date(isoString);
  return date.toLocaleDateString();
};

var Menu = function Menu(_ref) {
  var date = _ref.date,
      report = _ref.report,
      previousReport = _ref.previousReport,
      nextReport = _ref.nextReport;
  var formatedDate = formatDate(date);

  var _ref2 = report || {},
      casConfirmes = _ref2.casConfirmes,
      deces = _ref2.deces,
      history = _ref2.history;

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3725643684", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + 'menu-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3725643684", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + 'menu-header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    onClick: previousReport,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3725643684", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + "report-nav ".concat(previousReport ? '' : 'disabled'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__["ChevronLeft"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3725643684", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Donn\xE9es du ", formatedDate), __jsx("div", {
    onClick: nextReport,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3725643684", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + "report-nav ".concat(nextReport ? '' : 'disabled'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__["ChevronRight"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3725643684", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + 'content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3725643684", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "L\u2018information officielle sur la progression de l\u2019\xE9pid\xE9mie en France est tr\xE8s fragment\xE9e."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3725643684", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.santepubliquefrance.fr",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3725643684", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Sant\xE9 publique France"), " propose un point \xE9pid\xE9miologique quotidien, qui comprend les chiffres-cl\xE9s nationaux, et le nombre de cas confirm\xE9s par r\xE9gion."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3725643684", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Les agences r\xE9gionales de sant\xE9 et les pr\xE9fectures publient de leur c\xF4t\xE9 des informations au niveau d\xE9partemental, ainsi que le nombre de personnes d\xE9c\xE9d\xE9es ou en r\xE9animation."), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3725643684", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + 'stats',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3725643684", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + 'counters',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(_counter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: casConfirmes || '?',
    label: "cas confirm\xE9s",
    color: "orange",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx(_counter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: deces || '?',
    label: "d\xE9c\xE8s",
    color: "red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }))), history && __jsx(_confirmed_chart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: history.filter(function (r) {
      return Object(_lib_dates__WEBPACK_IMPORTED_MODULE_8__["previousDates"])(date, r.date);
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3725643684", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + 'menu-footer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3725643684", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Suivi de l\u2019\xE9pid\xE9mie de nouveau coronavirus")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3725643684",
    dynamic: [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay],
    __self: this
  }, ".menu-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;width:100%;}.menu-container.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{padding:1em;}.menu-container.__jsx-style-dynamic-selector .menu-header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:nowrap;-ms-flex-flow:nowrap;flex-flow:nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;box-shadow:0 1px 4px ".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, ";}.report-nav.disabled.__jsx-style-dynamic-selector{color:").concat(_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, ";}.report-nav.disabled.__jsx-style-dynamic-selector:hover{cursor:initial;}.report-nav.__jsx-style-dynamic-selector:hover{cursor:pointer;backgroundColor:").concat(_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, ";}.menu-container.__jsx-style-dynamic-selector .content.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;overflow-y:scroll;text-size:0.7em;}.menu-container.__jsx-style-dynamic-selector .stats.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;}.counters.__jsx-style-dynamic-selector{display:grid;grid-template-columns:1fr 1fr;}.menu-container.__jsx-style-dynamic-selector .menu-footer.__jsx-style-dynamic-selector{text-align:center;background:").concat(_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, ";}@media (max-width:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay, "){.menu-container.__jsx-style-dynamic-selector .menu-header.__jsx-style-dynamic-selector{font-size:small;}.menu-container.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{padding:0.5em 1em;}.menu-container.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{margin:0.2em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJvbWUvb3BlbmNvdmlkMTktZnIvZGFzaGJvYXJkL2NvbXBvbmVudHMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RGtCLEFBR3dCLEFBT0QsQUFJQyxBQVNzQixBQUlwQixBQUlBLEFBS1IsQUFNQSxBQUlNLEFBS0ssQUFNQSxBQUlFLEFBSUwsWUF0RGpCLENBb0NnQyxBQW1COUIsRUF0Q0YsQUFJK0MsQ0EwQjdDLEVBTndDLEFBVXhDLGVBekJrQixBQU1wQixFQW5CQSxRQXdCQSxRQVZrQixPQWVsQixFQXBCQSxPQU1BLE9BbkN3QixBQVdMLCtEQUNhLGVBWGxCLFlBQ0QsV0FDYiw2RUFVcUIsNkZBQ0Qsa0JBQ2dDLGtEQUNwRCIsImZpbGUiOiIvVXNlcnMvamVyb21lL29wZW5jb3ZpZDE5LWZyL2Rhc2hib2FyZC9jb21wb25lbnRzL21lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQge0NoZXZyb25MZWZ0LCBDaGV2cm9uUmlnaHR9IGZyb20gJ3JlYWN0LWZlYXRoZXInXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vc3R5bGVzL2NvbG9ycydcblxuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi9jb3VudGVyJ1xuaW1wb3J0IENvbmZpcm1lZENoYXJ0IGZyb20gJy4vY29uZmlybWVkLWNoYXJ0J1xuXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuXG5pbXBvcnQge3ByZXZpb3VzRGF0ZXN9IGZyb20gJy4uL2xpYi9kYXRlcydcblxuY29uc3QgZm9ybWF0RGF0ZSA9IGlzb1N0cmluZyA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShpc29TdHJpbmcpXG5cbiAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKClcbn1cblxuY29uc3QgTWVudSA9ICh7ZGF0ZSwgcmVwb3J0LCBwcmV2aW91c1JlcG9ydCwgbmV4dFJlcG9ydH0pID0+IHtcbiAgY29uc3QgZm9ybWF0ZWREYXRlID0gZm9ybWF0RGF0ZShkYXRlKVxuICBjb25zdCB7Y2FzQ29uZmlybWVzLCBkZWNlcywgaGlzdG9yeX0gPSByZXBvcnQgfHwge31cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdtZW51LWNvbnRhaW5lcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVudS1oZWFkZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJlcG9ydC1uYXYgJHtwcmV2aW91c1JlcG9ydCA/ICcnIDogJ2Rpc2FibGVkJ31gfSBvbkNsaWNrPXtwcmV2aW91c1JlcG9ydH0+PENoZXZyb25MZWZ0IC8+PC9kaXY+XG4gICAgICAgIDxoMj5Eb25uw6llcyBkdSB7Zm9ybWF0ZWREYXRlfTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcmVwb3J0LW5hdiAke25leHRSZXBvcnQgPyAnJyA6ICdkaXNhYmxlZCd9YH0gb25DbGljaz17bmV4dFJlcG9ydH0+PENoZXZyb25SaWdodCAvPjwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgTOKAmGluZm9ybWF0aW9uIG9mZmljaWVsbGUgc3VyIGxhIHByb2dyZXNzaW9uIGRlIGzigJnDqXBpZMOpbWllIGVuIEZyYW5jZSBlc3QgdHLDqHMgZnJhZ21lbnTDqWUuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cuc2FudGVwdWJsaXF1ZWZyYW5jZS5mcic+U2FudMOpIHB1YmxpcXVlIEZyYW5jZTwvYT4gcHJvcG9zZSB1biBwb2ludCDDqXBpZMOpbWlvbG9naXF1ZSBxdW90aWRpZW4sIHF1aSBjb21wcmVuZCBsZXMgY2hpZmZyZXMtY2zDqXMgbmF0aW9uYXV4LCBldCBsZSBub21icmUgZGUgY2FzIGNvbmZpcm3DqXMgcGFyIHLDqWdpb24uXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgTGVzIGFnZW5jZXMgcsOpZ2lvbmFsZXMgZGUgc2FudMOpIGV0IGxlcyBwcsOpZmVjdHVyZXMgcHVibGllbnQgZGUgbGV1ciBjw7R0w6kgZGVzIGluZm9ybWF0aW9ucyBhdSBuaXZlYXUgZMOpcGFydGVtZW50YWwsIGFpbnNpIHF1ZSBsZSBub21icmUgZGUgcGVyc29ubmVzIGTDqWPDqWTDqWVzIG91IGVuIHLDqWFuaW1hdGlvbi5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdGF0cyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvdW50ZXJzJz5cbiAgICAgICAgICAgIDxDb3VudGVyIHZhbHVlPXtjYXNDb25maXJtZXMgfHwgJz8nfSBsYWJlbD0nY2FzIGNvbmZpcm3DqXMnIGNvbG9yPSdvcmFuZ2UnIC8+XG4gICAgICAgICAgICA8Q291bnRlciB2YWx1ZT17ZGVjZXMgfHwgJz8nfSBsYWJlbD0nZMOpY8OocycgY29sb3I9J3JlZCcgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2hpc3RvcnkgJiYgKFxuICAgICAgICAgIDxDb25maXJtZWRDaGFydCBkYXRhPXtoaXN0b3J5LmZpbHRlcihyID0+IHByZXZpb3VzRGF0ZXMoZGF0ZSwgci5kYXRlKSl9IC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J21lbnUtZm9vdGVyJz5cbiAgICAgICAgPGRpdj5TdWl2aSBkZSBs4oCZw6lwaWTDqW1pZSBkZSBub3V2ZWF1IGNvcm9uYXZpcnVzPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1lbnUtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lbnUtY29udGFpbmVyID4gZGl2IHtcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIH1cblxuICAgICAgICAubWVudS1jb250YWluZXIgLm1lbnUtaGVhZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZmxvdzogbm93cmFwO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCA0cHggJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXBvcnQtbmF2LmRpc2FibGVkIHtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnMubGlnaHRlckdyZXl9O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlcG9ydC1uYXYuZGlzYWJsZWQ6aG92ZXIge1xuICAgICAgICAgIGN1cnNvcjogaW5pdGlhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXBvcnQtbmF2OmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAke2NvbG9ycy5ncmV5fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51LWNvbnRhaW5lciAuY29udGVudCB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgdGV4dC1zaXplOiAwLjdlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51LWNvbnRhaW5lciAuc3RhdHMge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAuY291bnRlcnMge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lbnUtY29udGFpbmVyIC5tZW51LWZvb3RlciB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLmxpZ2h0R3JleX07XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5tb2JpbGVEaXNwbGF5fSkge1xuICAgICAgICAgIC5tZW51LWNvbnRhaW5lciAubWVudS1oZWFkZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVudS1jb250YWluZXIgPiBkaXYge1xuICAgICAgICAgICAgcGFkZGluZzogMC41ZW0gMWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZW51LWNvbnRhaW5lciBoMiB7XG4gICAgICAgICAgICBtYXJnaW46IDAuMmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5NZW51LmRlZmF1bHRQcm9wcyA9IHtcbiAgcmVwb3J0OiB7fSxcbiAgcHJldmlvdXNSZXBvcnQ6IG51bGwsXG4gIG5leHRSZXBvcnQ6IG51bGxcbn1cblxuTWVudS5wcm9wVHlwZXMgPSB7XG4gIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcmVwb3J0OiBQcm9wVHlwZXMub2JqZWN0LFxuICBwcmV2aW91c1JlcG9ydDogUHJvcFR5cGVzLmZ1bmMsXG4gIG5leHRSZXBvcnQ6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVcbiJdfQ== */\n/*@ sourceURL=/Users/jerome/opencovid19-fr/dashboard/components/menu.js */")));
};

Menu.defaultProps = {
  report: {},
  previousReport: null,
  nextReport: null
};
Menu.propTypes = {
  date: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  report: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  previousReport: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  nextReport: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=index.js.9a9a7e5ebd47d7f042f5.hot-update.js.map