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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2498483166", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + 'menu-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2498483166", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + 'menu-header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    onClick: previousReport,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2498483166", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + "report-nav ".concat(previousReport ? '' : 'disabled'),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2498483166", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Donn\xE9es du ", formatedDate), __jsx("div", {
    onClick: nextReport,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2498483166", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + "report-nav ".concat(nextReport ? '' : 'disabled'),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2498483166", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + 'content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2498483166", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "L\u2018information officielle sur la progression de l\u2019\xE9pid\xE9mie en France est tr\xE8s fragment\xE9e."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2498483166", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.santepubliquefrance.fr",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2498483166", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Sant\xE9 publique France"), " propose un point \xE9pid\xE9miologique quotidien, qui comprend les chiffres-cl\xE9s nationaux, et le nombre de cas confirm\xE9s par r\xE9gion."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2498483166", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Les agences r\xE9gionales de sant\xE9 et les pr\xE9fectures publient de leur c\xF4t\xE9 des informations au niveau d\xE9partemental, ainsi que le nombre de personnes d\xE9c\xE9d\xE9es ou en r\xE9animation."), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2498483166", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + 'stats',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2498483166", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + 'counters',
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2498483166", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + 'menu-footer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2498483166", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Suivi de l\u2019\xE9pid\xE9mie de nouveau coronavirus")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2498483166",
    dynamic: [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay],
    __self: this
  }, ".menu-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;width:100%;}.menu-container.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{padding:1em;}.menu-container.__jsx-style-dynamic-selector .menu-header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:nowrap;-ms-flex-flow:nowrap;flex-flow:nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;box-shadow:0 1px 4px ".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, ";}.report-nav.disabled.__jsx-style-dynamic-selector{color:").concat(_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, ";}.report-nav.disabled.__jsx-style-dynamic-selector:hover{cursor:initial;}.report-nav.__jsx-style-dynamic-selector:hover{cursor:pointer;backgroundColor:").concat(_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, ";}.menu-container.__jsx-style-dynamic-selector .content.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;overflow-y:scroll;}.menu-container.__jsx-style-dynamic-selector .content.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{font-size:0.9em;}.menu-container.__jsx-style-dynamic-selector .stats.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;}.counters.__jsx-style-dynamic-selector{display:grid;grid-template-columns:1fr 1fr;}.menu-container.__jsx-style-dynamic-selector .menu-footer.__jsx-style-dynamic-selector{text-align:center;background:").concat(_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, ";}@media (max-width:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay, "){.menu-container.__jsx-style-dynamic-selector .menu-header.__jsx-style-dynamic-selector{font-size:small;}.menu-container.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{padding:0.5em 1em;}.menu-container.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{margin:0.2em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJvbWUvb3BlbmNvdmlkMTktZnIvZGFzaGJvYXJkL2NvbXBvbmVudHMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RGtCLEFBR3dCLEFBT0QsQUFJQyxBQVNzQixBQUlwQixBQUlBLEFBS1IsQUFLUyxBQUlULEFBSU0sQUFLSyxBQU1BLEFBSUUsQUFJTCxZQXpEakIsQ0F1Q2dDLEFBbUI5QixFQXpDRixBQUkrQyxDQVUvQyxBQW1CRSxFQU53QyxBQVV4QyxlQTVCa0IsQUFTcEIsRUF0QkEsUUEyQkEsUUFiQSxPQWtCQSxFQXZCQSxjQTdCd0IsQUFXTCwrREFDYSxlQVhsQixZQUNELFdBQ2IsNkVBVXFCLDZGQUNELGtCQUNnQyxrREFDcEQiLCJmaWxlIjoiL1VzZXJzL2plcm9tZS9vcGVuY292aWQxOS1mci9kYXNoYm9hcmQvY29tcG9uZW50cy9tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHtDaGV2cm9uTGVmdCwgQ2hldnJvblJpZ2h0fSBmcm9tICdyZWFjdC1mZWF0aGVyJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL3N0eWxlcy9jb2xvcnMnXG5cbmltcG9ydCBDb3VudGVyIGZyb20gJy4vY291bnRlcidcbmltcG9ydCBDb25maXJtZWRDaGFydCBmcm9tICcuL2NvbmZpcm1lZC1jaGFydCdcblxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcblxuaW1wb3J0IHtwcmV2aW91c0RhdGVzfSBmcm9tICcuLi9saWIvZGF0ZXMnXG5cbmNvbnN0IGZvcm1hdERhdGUgPSBpc29TdHJpbmcgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoaXNvU3RyaW5nKVxuXG4gIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpXG59XG5cbmNvbnN0IE1lbnUgPSAoe2RhdGUsIHJlcG9ydCwgcHJldmlvdXNSZXBvcnQsIG5leHRSZXBvcnR9KSA9PiB7XG4gIGNvbnN0IGZvcm1hdGVkRGF0ZSA9IGZvcm1hdERhdGUoZGF0ZSlcbiAgY29uc3Qge2Nhc0NvbmZpcm1lcywgZGVjZXMsIGhpc3Rvcnl9ID0gcmVwb3J0IHx8IHt9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbWVudS1jb250YWluZXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J21lbnUtaGVhZGVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ByZXBvcnQtbmF2ICR7cHJldmlvdXNSZXBvcnQgPyAnJyA6ICdkaXNhYmxlZCd9YH0gb25DbGljaz17cHJldmlvdXNSZXBvcnR9PjxDaGV2cm9uTGVmdCAvPjwvZGl2PlxuICAgICAgICA8aDI+RG9ubsOpZXMgZHUge2Zvcm1hdGVkRGF0ZX08L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJlcG9ydC1uYXYgJHtuZXh0UmVwb3J0ID8gJycgOiAnZGlzYWJsZWQnfWB9IG9uQ2xpY2s9e25leHRSZXBvcnR9PjxDaGV2cm9uUmlnaHQgLz48L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEzigJhpbmZvcm1hdGlvbiBvZmZpY2llbGxlIHN1ciBsYSBwcm9ncmVzc2lvbiBkZSBs4oCZw6lwaWTDqW1pZSBlbiBGcmFuY2UgZXN0IHRyw6hzIGZyYWdtZW50w6llLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LnNhbnRlcHVibGlxdWVmcmFuY2UuZnInPlNhbnTDqSBwdWJsaXF1ZSBGcmFuY2U8L2E+IHByb3Bvc2UgdW4gcG9pbnQgw6lwaWTDqW1pb2xvZ2lxdWUgcXVvdGlkaWVuLCBxdWkgY29tcHJlbmQgbGVzIGNoaWZmcmVzLWNsw6lzIG5hdGlvbmF1eCwgZXQgbGUgbm9tYnJlIGRlIGNhcyBjb25maXJtw6lzIHBhciByw6lnaW9uLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIExlcyBhZ2VuY2VzIHLDqWdpb25hbGVzIGRlIHNhbnTDqSBldCBsZXMgcHLDqWZlY3R1cmVzIHB1YmxpZW50IGRlIGxldXIgY8O0dMOpIGRlcyBpbmZvcm1hdGlvbnMgYXUgbml2ZWF1IGTDqXBhcnRlbWVudGFsLCBhaW5zaSBxdWUgbGUgbm9tYnJlIGRlIHBlcnNvbm5lcyBkw6ljw6lkw6llcyBvdSBlbiByw6lhbmltYXRpb24uXG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RhdHMnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb3VudGVycyc+XG4gICAgICAgICAgICA8Q291bnRlciB2YWx1ZT17Y2FzQ29uZmlybWVzIHx8ICc/J30gbGFiZWw9J2NhcyBjb25maXJtw6lzJyBjb2xvcj0nb3JhbmdlJyAvPlxuICAgICAgICAgICAgPENvdW50ZXIgdmFsdWU9e2RlY2VzIHx8ICc/J30gbGFiZWw9J2TDqWPDqHMnIGNvbG9yPSdyZWQnIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtoaXN0b3J5ICYmIChcbiAgICAgICAgICA8Q29uZmlybWVkQ2hhcnQgZGF0YT17aGlzdG9yeS5maWx0ZXIociA9PiBwcmV2aW91c0RhdGVzKGRhdGUsIHIuZGF0ZSkpfSAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZW51LWZvb3Rlcic+XG4gICAgICAgIDxkaXY+U3VpdmkgZGUgbOKAmcOpcGlkw6ltaWUgZGUgbm91dmVhdSBjb3JvbmF2aXJ1czwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tZW51LWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51LWNvbnRhaW5lciA+IGRpdiB7XG4gICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lbnUtY29udGFpbmVyIC5tZW51LWhlYWRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWZsb3c6IG5vd3JhcDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNHB4ICR7Y29sb3JzLmxpZ2h0R3JleX07XG4gICAgICAgIH1cblxuICAgICAgICAucmVwb3J0LW5hdi5kaXNhYmxlZCB7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmxpZ2h0ZXJHcmV5fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXBvcnQtbmF2LmRpc2FibGVkOmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IGluaXRpYWw7XG4gICAgICAgIH1cblxuICAgICAgICAucmVwb3J0LW5hdjpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJHtjb2xvcnMuZ3JleX07XG4gICAgICAgIH1cblxuICAgICAgICAubWVudS1jb250YWluZXIgLmNvbnRlbnQge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lbnUtY29udGFpbmVyIC5jb250ZW50IHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgIH1cblxuICAgICAgICAubWVudS1jb250YWluZXIgLnN0YXRzIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvdW50ZXJzIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51LWNvbnRhaW5lciAubWVudS1mb290ZXIge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy5saWdodEdyZXl9O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUubW9iaWxlRGlzcGxheX0pIHtcbiAgICAgICAgICAubWVudS1jb250YWluZXIgLm1lbnUtaGVhZGVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1lbnUtY29udGFpbmVyID4gZGl2IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVudS1jb250YWluZXIgaDIge1xuICAgICAgICAgICAgbWFyZ2luOiAwLjJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuTWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gIHJlcG9ydDoge30sXG4gIHByZXZpb3VzUmVwb3J0OiBudWxsLFxuICBuZXh0UmVwb3J0OiBudWxsXG59XG5cbk1lbnUucHJvcFR5cGVzID0ge1xuICBkYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHJlcG9ydDogUHJvcFR5cGVzLm9iamVjdCxcbiAgcHJldmlvdXNSZXBvcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBuZXh0UmVwb3J0OiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51XG4iXX0= */\n/*@ sourceURL=/Users/jerome/opencovid19-fr/dashboard/components/menu.js */")));
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
//# sourceMappingURL=index.js.0aec55bba9c64fecf369.hot-update.js.map