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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["519619387", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + 'menu-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["519619387", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + 'menu-header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    onClick: previousReport,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["519619387", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + "report-nav ".concat(previousReport ? '' : 'disabled'),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["519619387", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Donn\xE9es du ", formatedDate), __jsx("div", {
    onClick: nextReport,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["519619387", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + "report-nav ".concat(nextReport ? '' : 'disabled'),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["519619387", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + 'content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["519619387", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "L\u2018information officielle sur la progression de l\u2019\xE9pid\xE9mie en France est tr\xE8s fragment\xE9e. ", __jsx("a", {
    href: "https://www.santepubliquefrance.fr",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["519619387", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Sant\xE9 publique France"), " propose un point \xE9pid\xE9miologique quotidien, qui comprend les chiffres-cl\xE9s nationaux, et le nombre de cas confirm\xE9s par r\xE9gion. Les agences r\xE9gionales de sant\xE9 et les pr\xE9fectures publient de leur c\xF4t\xE9 des informations au niveau d\xE9partemental, ainsi que le nombre de personnes d\xE9c\xE9d\xE9es ou en r\xE9animation."), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["519619387", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + 'stats',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["519619387", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + 'counters',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_counter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: casConfirmes || '?',
    label: "cas confirm\xE9s",
    color: "orange",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(_counter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: deces || '?',
    label: "d\xE9c\xE8s",
    color: "red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }))), history && __jsx(_confirmed_chart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: history.filter(function (r) {
      return Object(_lib_dates__WEBPACK_IMPORTED_MODULE_8__["previousDates"])(date, r.date);
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["519619387", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + 'menu-footer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["519619387", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Suivi de l\u2019\xE9pid\xE9mie de nouveau coronavirus")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "519619387",
    dynamic: [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay],
    __self: this
  }, ".menu-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;width:100%;}.menu-container.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{padding:1em;}.menu-container.__jsx-style-dynamic-selector .menu-header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:nowrap;-ms-flex-flow:nowrap;flex-flow:nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;box-shadow:0 1px 4px ".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, ";}.report-nav.disabled.__jsx-style-dynamic-selector{color:").concat(_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, ";}.report-nav.disabled.__jsx-style-dynamic-selector:hover{cursor:initial;}.report-nav.__jsx-style-dynamic-selector:hover{cursor:pointer;backgroundColor:").concat(_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, ";}.menu-container.__jsx-style-dynamic-selector .content.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;overflow-y:scroll;}.menu-container.__jsx-style-dynamic-selector .stats.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;}.counters.__jsx-style-dynamic-selector{display:grid;grid-template-columns:1fr 1fr;}.menu-container.__jsx-style-dynamic-selector .menu-footer.__jsx-style-dynamic-selector{text-align:center;background:").concat(_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, ";}@media (max-width:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay, "){.menu-container.__jsx-style-dynamic-selector .menu-header.__jsx-style-dynamic-selector{font-size:small;}.menu-container.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{padding:0.5em 1em;}.menu-container.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{margin:0.2em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJvbWUvb3BlbmNvdmlkMTktZnIvZGFzaGJvYXJkL2NvbXBvbmVudHMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRGtCLEFBR3dCLEFBT0QsQUFJQyxBQVNzQixBQUlwQixBQUlBLEFBS1IsQUFLQSxBQUlNLEFBS0ssQUFNQSxBQUlFLEFBSUwsWUFyRGpCLENBbUNnQyxBQW1COUIsRUFyQ0YsQUFJK0MsQ0F5QjdDLEVBTndDLEFBVXhDLGVBeEJrQixBQUtwQixFQWxCQSxRQXVCQSxRQVRBLE9BY0EsRUFuQkEsY0E3QndCLEFBV0wsK0RBQ2EsZUFYbEIsWUFDRCxXQUNiLDZFQVVxQiw2RkFDRCxrQkFDZ0Msa0RBQ3BEIiwiZmlsZSI6Ii9Vc2Vycy9qZXJvbWUvb3BlbmNvdmlkMTktZnIvZGFzaGJvYXJkL2NvbXBvbmVudHMvbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7Q2hldnJvbkxlZnQsIENoZXZyb25SaWdodH0gZnJvbSAncmVhY3QtZmVhdGhlcidcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9zdHlsZXMvY29sb3JzJ1xuXG5pbXBvcnQgQ291bnRlciBmcm9tICcuL2NvdW50ZXInXG5pbXBvcnQgQ29uZmlybWVkQ2hhcnQgZnJvbSAnLi9jb25maXJtZWQtY2hhcnQnXG5cbmltcG9ydCB0aGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXG5cbmltcG9ydCB7cHJldmlvdXNEYXRlc30gZnJvbSAnLi4vbGliL2RhdGVzJ1xuXG5jb25zdCBmb3JtYXREYXRlID0gaXNvU3RyaW5nID0+IHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGlzb1N0cmluZylcblxuICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKVxufVxuXG5jb25zdCBNZW51ID0gKHtkYXRlLCByZXBvcnQsIHByZXZpb3VzUmVwb3J0LCBuZXh0UmVwb3J0fSkgPT4ge1xuICBjb25zdCBmb3JtYXRlZERhdGUgPSBmb3JtYXREYXRlKGRhdGUpXG4gIGNvbnN0IHtjYXNDb25maXJtZXMsIGRlY2VzLCBoaXN0b3J5fSA9IHJlcG9ydCB8fCB7fVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J21lbnUtY29udGFpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZW51LWhlYWRlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcmVwb3J0LW5hdiAke3ByZXZpb3VzUmVwb3J0ID8gJycgOiAnZGlzYWJsZWQnfWB9IG9uQ2xpY2s9e3ByZXZpb3VzUmVwb3J0fT48Q2hldnJvbkxlZnQgLz48L2Rpdj5cbiAgICAgICAgPGgyPkRvbm7DqWVzIGR1IHtmb3JtYXRlZERhdGV9PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ByZXBvcnQtbmF2ICR7bmV4dFJlcG9ydCA/ICcnIDogJ2Rpc2FibGVkJ31gfSBvbkNsaWNrPXtuZXh0UmVwb3J0fT48Q2hldnJvblJpZ2h0IC8+PC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxuICAgICAgICA8cD5cbiAgICAgICAgICBM4oCYaW5mb3JtYXRpb24gb2ZmaWNpZWxsZSBzdXIgbGEgcHJvZ3Jlc3Npb24gZGUgbOKAmcOpcGlkw6ltaWUgZW4gRnJhbmNlIGVzdCB0csOocyBmcmFnbWVudMOpZS4gPGEgaHJlZj0naHR0cHM6Ly93d3cuc2FudGVwdWJsaXF1ZWZyYW5jZS5mcic+U2FudMOpIHB1YmxpcXVlIEZyYW5jZTwvYT4gcHJvcG9zZSB1biBwb2ludCDDqXBpZMOpbWlvbG9naXF1ZSBxdW90aWRpZW4sIHF1aSBjb21wcmVuZCBsZXMgY2hpZmZyZXMtY2zDqXMgbmF0aW9uYXV4LCBldCBsZSBub21icmUgZGUgY2FzIGNvbmZpcm3DqXMgcGFyIHLDqWdpb24uIExlcyBhZ2VuY2VzIHLDqWdpb25hbGVzIGRlIHNhbnTDqSBldCBsZXMgcHLDqWZlY3R1cmVzIHB1YmxpZW50IGRlIGxldXIgY8O0dMOpIGRlcyBpbmZvcm1hdGlvbnMgYXUgbml2ZWF1IGTDqXBhcnRlbWVudGFsLCBhaW5zaSBxdWUgbGUgbm9tYnJlIGRlIHBlcnNvbm5lcyBkw6ljw6lkw6llcyBvdSBlbiByw6lhbmltYXRpb24uXG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RhdHMnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb3VudGVycyc+XG4gICAgICAgICAgICA8Q291bnRlciB2YWx1ZT17Y2FzQ29uZmlybWVzIHx8ICc/J30gbGFiZWw9J2NhcyBjb25maXJtw6lzJyBjb2xvcj0nb3JhbmdlJyAvPlxuICAgICAgICAgICAgPENvdW50ZXIgdmFsdWU9e2RlY2VzIHx8ICc/J30gbGFiZWw9J2TDqWPDqHMnIGNvbG9yPSdyZWQnIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtoaXN0b3J5ICYmIChcbiAgICAgICAgICA8Q29uZmlybWVkQ2hhcnQgZGF0YT17aGlzdG9yeS5maWx0ZXIociA9PiBwcmV2aW91c0RhdGVzKGRhdGUsIHIuZGF0ZSkpfSAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZW51LWZvb3Rlcic+XG4gICAgICAgIDxkaXY+U3VpdmkgZGUgbOKAmcOpcGlkw6ltaWUgZGUgbm91dmVhdSBjb3JvbmF2aXJ1czwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tZW51LWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51LWNvbnRhaW5lciA+IGRpdiB7XG4gICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lbnUtY29udGFpbmVyIC5tZW51LWhlYWRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWZsb3c6IG5vd3JhcDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNHB4ICR7Y29sb3JzLmxpZ2h0R3JleX07XG4gICAgICAgIH1cblxuICAgICAgICAucmVwb3J0LW5hdi5kaXNhYmxlZCB7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmxpZ2h0ZXJHcmV5fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXBvcnQtbmF2LmRpc2FibGVkOmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IGluaXRpYWw7XG4gICAgICAgIH1cblxuICAgICAgICAucmVwb3J0LW5hdjpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJHtjb2xvcnMuZ3JleX07XG4gICAgICAgIH1cblxuICAgICAgICAubWVudS1jb250YWluZXIgLmNvbnRlbnQge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lbnUtY29udGFpbmVyIC5zdGF0cyB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3VudGVycyB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgIH1cblxuICAgICAgICAubWVudS1jb250YWluZXIgLm1lbnUtZm9vdGVyIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLm1vYmlsZURpc3BsYXl9KSB7XG4gICAgICAgICAgLm1lbnUtY29udGFpbmVyIC5tZW51LWhlYWRlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZW51LWNvbnRhaW5lciA+IGRpdiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1lbnUtY29udGFpbmVyIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMC4yZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbk1lbnUuZGVmYXVsdFByb3BzID0ge1xuICByZXBvcnQ6IHt9LFxuICBwcmV2aW91c1JlcG9ydDogbnVsbCxcbiAgbmV4dFJlcG9ydDogbnVsbFxufVxuXG5NZW51LnByb3BUeXBlcyA9IHtcbiAgZGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICByZXBvcnQ6IFByb3BUeXBlcy5vYmplY3QsXG4gIHByZXZpb3VzUmVwb3J0OiBQcm9wVHlwZXMuZnVuYyxcbiAgbmV4dFJlcG9ydDogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudVxuIl19 */\n/*@ sourceURL=/Users/jerome/opencovid19-fr/dashboard/components/menu.js */")));
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
//# sourceMappingURL=index.js.f466ab4de1ee04c18a7f.hot-update.js.map