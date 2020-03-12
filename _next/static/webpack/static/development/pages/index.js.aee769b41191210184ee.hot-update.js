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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2963241475", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + 'menu-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2963241475", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + 'menu-header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    onClick: previousReport,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2963241475", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + "report-nav ".concat(previousReport ? '' : 'disabled'),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2963241475", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Donn\xE9es du ", formatedDate), __jsx("div", {
    onClick: nextReport,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2963241475", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + "report-nav ".concat(nextReport ? '' : 'disabled'),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2963241475", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + 'content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2963241475", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "L\u2018information officielle sur la progression de l\u2019\xE9pid\xE9mie en France est tr\xE8s fragment\xE9e."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2963241475", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.santepubliquefrance.fr",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2963241475", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Sant\xE9 publique France"), " propose un point \xE9pid\xE9miologique quotidien, qui comprend les chiffres-cl\xE9s nationaux, et le nombre de cas confirm\xE9s par r\xE9gion."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2963241475", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Les agences r\xE9gionales de sant\xE9 et les pr\xE9fectures publient de leur c\xF4t\xE9 des informations au niveau d\xE9partemental, ainsi que le nombre de personnes d\xE9c\xE9d\xE9es ou en r\xE9animation."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2963241475", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Cet outil contributif tente de proposer une ", __jsx("a", {
    href: "https://www.data.gouv.fr/fr/datasets/chiffres-cles-concernant-lepidemie-de-covid19-en-france/",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2963241475", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "vision consolid\xE9e"), " des donn\xE9es officielles disponibles."), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2963241475", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + 'stats',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2963241475", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + 'counters',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_counter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: casConfirmes || '?',
    label: "cas confirm\xE9s",
    color: "orange",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx(_counter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: deces || '?',
    label: "d\xE9c\xE8s",
    color: "red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))), history && __jsx(_confirmed_chart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: history.filter(function (r) {
      return Object(_lib_dates__WEBPACK_IMPORTED_MODULE_8__["previousDates"])(date, r.date);
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2963241475", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]) + " " + 'menu-footer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2963241475", [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Suivi de l\u2019\xE9pid\xE9mie de nouveau coronavirus")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2963241475",
    dynamic: [_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay],
    __self: this
  }, ".menu-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;width:100%;}.menu-container.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{padding:1em;}.menu-container.__jsx-style-dynamic-selector .menu-header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:nowrap;-ms-flex-flow:nowrap;flex-flow:nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;box-shadow:0 1px 4px ".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, ";}.report-nav.disabled.__jsx-style-dynamic-selector{color:").concat(_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lighterGrey, ";}.report-nav.disabled.__jsx-style-dynamic-selector:hover{cursor:initial;}.report-nav.__jsx-style-dynamic-selector:hover{cursor:pointer;backgroundColor:").concat(_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].grey, ";}.menu-container.__jsx-style-dynamic-selector .content.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;overflow-y:scroll;}.menu-container.__jsx-style-dynamic-selector .content.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{font-size:0.85em;}.menu-container.__jsx-style-dynamic-selector .stats.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;}.counters.__jsx-style-dynamic-selector{display:grid;grid-template-columns:1fr 1fr;}.menu-container.__jsx-style-dynamic-selector .menu-footer.__jsx-style-dynamic-selector{text-align:center;background:").concat(_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].lightGrey, ";}@media (max-width:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].mobileDisplay, "){.menu-container.__jsx-style-dynamic-selector .menu-header.__jsx-style-dynamic-selector{font-size:small;}.menu-container.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{padding:0.5em 1em;}.menu-container.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{margin:0.2em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJvbWUvb3BlbmNvdmlkMTktZnIvZGFzaGJvYXJkL2NvbXBvbmVudHMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RGtCLEFBR3dCLEFBT0QsQUFJQyxBQVNzQixBQUlwQixBQUlBLEFBS1IsQUFLVSxBQUlWLEFBSU0sQUFLSyxBQU1BLEFBSUUsQUFJTCxZQXpEakIsQ0F1Q2dDLEFBbUI5QixFQXpDRixBQUkrQyxDQTZCN0MsQ0FuQkYsQ0FhMEMsQUFVeEMsZUE1QmtCLEFBU3BCLEVBdEJBLFFBMkJBLFFBYkEsT0FrQkEsRUF2QkEsY0E3QndCLEFBV0wsK0RBQ2EsZUFYbEIsWUFDRCxXQUNiLDZFQVVxQiw2RkFDRCxrQkFDZ0Msa0RBQ3BEIiwiZmlsZSI6Ii9Vc2Vycy9qZXJvbWUvb3BlbmNvdmlkMTktZnIvZGFzaGJvYXJkL2NvbXBvbmVudHMvbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7Q2hldnJvbkxlZnQsIENoZXZyb25SaWdodH0gZnJvbSAncmVhY3QtZmVhdGhlcidcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9zdHlsZXMvY29sb3JzJ1xuXG5pbXBvcnQgQ291bnRlciBmcm9tICcuL2NvdW50ZXInXG5pbXBvcnQgQ29uZmlybWVkQ2hhcnQgZnJvbSAnLi9jb25maXJtZWQtY2hhcnQnXG5cbmltcG9ydCB0aGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXG5cbmltcG9ydCB7cHJldmlvdXNEYXRlc30gZnJvbSAnLi4vbGliL2RhdGVzJ1xuXG5jb25zdCBmb3JtYXREYXRlID0gaXNvU3RyaW5nID0+IHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGlzb1N0cmluZylcblxuICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKVxufVxuXG5jb25zdCBNZW51ID0gKHtkYXRlLCByZXBvcnQsIHByZXZpb3VzUmVwb3J0LCBuZXh0UmVwb3J0fSkgPT4ge1xuICBjb25zdCBmb3JtYXRlZERhdGUgPSBmb3JtYXREYXRlKGRhdGUpXG4gIGNvbnN0IHtjYXNDb25maXJtZXMsIGRlY2VzLCBoaXN0b3J5fSA9IHJlcG9ydCB8fCB7fVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J21lbnUtY29udGFpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZW51LWhlYWRlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcmVwb3J0LW5hdiAke3ByZXZpb3VzUmVwb3J0ID8gJycgOiAnZGlzYWJsZWQnfWB9IG9uQ2xpY2s9e3ByZXZpb3VzUmVwb3J0fT48Q2hldnJvbkxlZnQgLz48L2Rpdj5cbiAgICAgICAgPGgyPkRvbm7DqWVzIGR1IHtmb3JtYXRlZERhdGV9PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ByZXBvcnQtbmF2ICR7bmV4dFJlcG9ydCA/ICcnIDogJ2Rpc2FibGVkJ31gfSBvbkNsaWNrPXtuZXh0UmVwb3J0fT48Q2hldnJvblJpZ2h0IC8+PC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxuICAgICAgICA8cD5cbiAgICAgICAgICBM4oCYaW5mb3JtYXRpb24gb2ZmaWNpZWxsZSBzdXIgbGEgcHJvZ3Jlc3Npb24gZGUgbOKAmcOpcGlkw6ltaWUgZW4gRnJhbmNlIGVzdCB0csOocyBmcmFnbWVudMOpZS5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5zYW50ZXB1YmxpcXVlZnJhbmNlLmZyJz5TYW50w6kgcHVibGlxdWUgRnJhbmNlPC9hPiBwcm9wb3NlIHVuIHBvaW50IMOpcGlkw6ltaW9sb2dpcXVlIHF1b3RpZGllbiwgcXVpIGNvbXByZW5kIGxlcyBjaGlmZnJlcy1jbMOpcyBuYXRpb25hdXgsIGV0IGxlIG5vbWJyZSBkZSBjYXMgY29uZmlybcOpcyBwYXIgcsOpZ2lvbi5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBMZXMgYWdlbmNlcyByw6lnaW9uYWxlcyBkZSBzYW50w6kgZXQgbGVzIHByw6lmZWN0dXJlcyBwdWJsaWVudCBkZSBsZXVyIGPDtHTDqSBkZXMgaW5mb3JtYXRpb25zIGF1IG5pdmVhdSBkw6lwYXJ0ZW1lbnRhbCwgYWluc2kgcXVlIGxlIG5vbWJyZSBkZSBwZXJzb25uZXMgZMOpY8OpZMOpZXMgb3UgZW4gcsOpYW5pbWF0aW9uLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIENldCBvdXRpbCBjb250cmlidXRpZiB0ZW50ZSBkZSBwcm9wb3NlciB1bmUgPGEgaHJlZj0naHR0cHM6Ly93d3cuZGF0YS5nb3V2LmZyL2ZyL2RhdGFzZXRzL2NoaWZmcmVzLWNsZXMtY29uY2VybmFudC1sZXBpZGVtaWUtZGUtY292aWQxOS1lbi1mcmFuY2UvJz52aXNpb24gY29uc29saWTDqWU8L2E+IGRlcyBkb25uw6llcyBvZmZpY2llbGxlcyBkaXNwb25pYmxlcy5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdGF0cyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvdW50ZXJzJz5cbiAgICAgICAgICAgIDxDb3VudGVyIHZhbHVlPXtjYXNDb25maXJtZXMgfHwgJz8nfSBsYWJlbD0nY2FzIGNvbmZpcm3DqXMnIGNvbG9yPSdvcmFuZ2UnIC8+XG4gICAgICAgICAgICA8Q291bnRlciB2YWx1ZT17ZGVjZXMgfHwgJz8nfSBsYWJlbD0nZMOpY8OocycgY29sb3I9J3JlZCcgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2hpc3RvcnkgJiYgKFxuICAgICAgICAgIDxDb25maXJtZWRDaGFydCBkYXRhPXtoaXN0b3J5LmZpbHRlcihyID0+IHByZXZpb3VzRGF0ZXMoZGF0ZSwgci5kYXRlKSl9IC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J21lbnUtZm9vdGVyJz5cbiAgICAgICAgPGRpdj5TdWl2aSBkZSBs4oCZw6lwaWTDqW1pZSBkZSBub3V2ZWF1IGNvcm9uYXZpcnVzPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1lbnUtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lbnUtY29udGFpbmVyID4gZGl2IHtcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIH1cblxuICAgICAgICAubWVudS1jb250YWluZXIgLm1lbnUtaGVhZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZmxvdzogbm93cmFwO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCA0cHggJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXBvcnQtbmF2LmRpc2FibGVkIHtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnMubGlnaHRlckdyZXl9O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlcG9ydC1uYXYuZGlzYWJsZWQ6aG92ZXIge1xuICAgICAgICAgIGN1cnNvcjogaW5pdGlhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXBvcnQtbmF2OmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAke2NvbG9ycy5ncmV5fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51LWNvbnRhaW5lciAuY29udGVudCB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIH1cblxuICAgICAgICAubWVudS1jb250YWluZXIgLmNvbnRlbnQgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgICAgIH1cblxuICAgICAgICAubWVudS1jb250YWluZXIgLnN0YXRzIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvdW50ZXJzIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51LWNvbnRhaW5lciAubWVudS1mb290ZXIge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy5saWdodEdyZXl9O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUubW9iaWxlRGlzcGxheX0pIHtcbiAgICAgICAgICAubWVudS1jb250YWluZXIgLm1lbnUtaGVhZGVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1lbnUtY29udGFpbmVyID4gZGl2IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVudS1jb250YWluZXIgaDIge1xuICAgICAgICAgICAgbWFyZ2luOiAwLjJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuTWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gIHJlcG9ydDoge30sXG4gIHByZXZpb3VzUmVwb3J0OiBudWxsLFxuICBuZXh0UmVwb3J0OiBudWxsXG59XG5cbk1lbnUucHJvcFR5cGVzID0ge1xuICBkYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHJlcG9ydDogUHJvcFR5cGVzLm9iamVjdCxcbiAgcHJldmlvdXNSZXBvcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBuZXh0UmVwb3J0OiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51XG4iXX0= */\n/*@ sourceURL=/Users/jerome/opencovid19-fr/dashboard/components/menu.js */")));
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
//# sourceMappingURL=index.js.aee769b41191210184ee.hot-update.js.map