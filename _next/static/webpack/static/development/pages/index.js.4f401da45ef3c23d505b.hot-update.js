webpackHotUpdate("static/development/pages/index.js",{

/***/ "./layouts/screen.js":
/*!***************************!*\
  !*** ./layouts/screen.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_date_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/date-nav */ "./components/date-nav.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/menu */ "./components/menu.js");
/* harmony import */ var _components_react_map_gl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/react-map-gl */ "./components/react-map-gl/index.js");
/* harmony import */ var _components_statistics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/statistics */ "./components/statistics.js");
/* harmony import */ var _components_confirmed_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/confirmed-chart */ "./components/confirmed-chart.js");
/* harmony import */ var _components_descritpion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/descritpion */ "./components/descritpion.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
var _jsxFileName = "/Users/Theoofe/Living-Data/covid19-dashboard/layouts/screen.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var ScreenPage = function ScreenPage(_ref) {
  var date = _ref.date,
      franceReport = _ref.franceReport,
      regionsReport = _ref.regionsReport,
      viewport = _ref.viewport,
      setViewport = _ref.setViewport;
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2232891456", [_styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_8__["default"].mobileDisplay, _styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2232891456", [_styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_8__["default"].mobileDisplay, _styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey]]]) + " " + 'menu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    date: date,
    previousReport: dateIdx > 0 ? previousReport : null,
    nextReport: dateIdx < dates.length - 1 ? nextReport : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_components_date_nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    date: date,
    prev: previousReport,
    next: nextReport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_descritpion__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(_components_statistics__WEBPACK_IMPORTED_MODULE_5__["default"], {
    report: franceReport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), franceReport && franceReport.history && __jsx(_components_confirmed_chart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: franceReport.history.filter(function (r) {
      return date >= r.date;
    }),
    height: 300,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2232891456", [_styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_8__["default"].mobileDisplay, _styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey]]]) + " " + 'map',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_components_react_map_gl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    viewport: viewport,
    date: date,
    regions: regionsReport,
    onViewportChange: setViewport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2232891456",
    dynamic: [_styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_8__["default"].mobileDisplay, _styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey],
    __self: this
  }, ".menu.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;z-index:1;max-width:400px;box-shadow:0 1px 4px ".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey, ";}.map.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;height:100%;}@media (max-width:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_8__["default"].mobileDisplay, "){.map.__jsx-style-dynamic-selector{height:60%;}.menu.__jsx-style-dynamic-selector{-webkit-flex:0;-ms-flex:0;flex:0;height:40%;max-width:none;box-shadow:0 -1px 4px ").concat(_styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey, ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2xheW91dHMvc2NyZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDa0IsQUFHb0IsQUFPRCxBQU1PLEFBSUosV0FIVCxzQkFiVSxBQU9FLEFBVUMsVUFoQkcsQ0FpQkMsQ0FWbkIsY0FOb0QsQUFpQkcsa0RBaEJ2RCxDQWlCRSIsImZpbGUiOiIvVXNlcnMvVGhlb29mZS9MaXZpbmctRGF0YS9jb3ZpZDE5LWRhc2hib2FyZC9sYXlvdXRzL3NjcmVlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IERhdGVOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9kYXRlLW5hdidcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvbWVudSdcbmltcG9ydCBSZWFjdE1hcEdsIGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtbWFwLWdsJ1xuaW1wb3J0IFN0YXRpc3RpY3MgZnJvbSAnLi4vY29tcG9uZW50cy9zdGF0aXN0aWNzJ1xuaW1wb3J0IENvbmZpcm1lZENoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvY29uZmlybWVkLWNoYXJ0J1xuaW1wb3J0IERlc2NyaXB0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvZGVzY3JpdHBpb24nXG5cbmltcG9ydCB0aGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL3N0eWxlcy9jb2xvcnMnXG5cbmNvbnN0IFNjcmVlblBhZ2UgPSAoe2RhdGUsIGZyYW5jZVJlcG9ydCwgcmVnaW9uc1JlcG9ydCwgdmlld3BvcnQsIHNldFZpZXdwb3J0fSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVudSc+XG4gICAgICAgIDxNZW51XG4gICAgICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgICAgICBwcmV2aW91c1JlcG9ydD17ZGF0ZUlkeCA+IDAgPyBwcmV2aW91c1JlcG9ydCA6IG51bGx9XG4gICAgICAgICAgbmV4dFJlcG9ydD17ZGF0ZUlkeCA8IGRhdGVzLmxlbmd0aCAtIDEgPyBuZXh0UmVwb3J0IDogbnVsbH1cbiAgICAgICAgPlxuICAgICAgICAgIDxEYXRlTmF2IGRhdGU9e2RhdGV9IHByZXY9e3ByZXZpb3VzUmVwb3J0fSBuZXh0PXtuZXh0UmVwb3J0fSAvPlxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8RGVzY3JpcHRpb24gLz5cblxuICAgICAgICAgICAgPFN0YXRpc3RpY3MgcmVwb3J0PXtmcmFuY2VSZXBvcnR9IC8+XG5cbiAgICAgICAgICAgIHtmcmFuY2VSZXBvcnQgJiYgZnJhbmNlUmVwb3J0Lmhpc3RvcnkgJiYgKFxuICAgICAgICAgICAgICA8Q29uZmlybWVkQ2hhcnQgZGF0YT17ZnJhbmNlUmVwb3J0Lmhpc3RvcnkuZmlsdGVyKHIgPT4gZGF0ZSA+PSByLmRhdGUpfSBoZWlnaHQ9ezMwMH0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgIDwvTWVudT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFwJz5cbiAgICAgICAgPFJlYWN0TWFwR2xcbiAgICAgICAgICB2aWV3cG9ydD17dmlld3BvcnR9XG4gICAgICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgICAgICByZWdpb25zPXtyZWdpb25zUmVwb3J0fVxuICAgICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9e3NldFZpZXdwb3J0fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWVudSB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCA0cHggJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWFwIHtcbiAgICAgICAgICAgIGZsZXg6MTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5tb2JpbGVEaXNwbGF5fSkge1xuICAgICAgICAgICAgLm1hcCB7XG4gICAgICAgICAgICAgIGhlaWdodDogNjAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVudSB7XG4gICAgICAgICAgICAgIGZsZXg6IDA7XG4gICAgICAgICAgICAgIGhlaWdodDogNDAlO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTFweCA0cHggJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NyZWVuUGFnZVxuIl19 */\n/*@ sourceURL=/Users/Theoofe/Living-Data/covid19-dashboard/layouts/screen.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (ScreenPage);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var lodash_indexOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/indexOf */ "./node_modules/lodash/indexOf.js");
/* harmony import */ var lodash_indexOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_indexOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/uniq */ "./node_modules/lodash/uniq.js");
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/groupBy */ "./node_modules/lodash/groupBy.js");
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _centers_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../centers.json */ "./centers.json");
var _centers_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../centers.json */ "./centers.json", 1);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var _layouts_screen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../layouts/screen */ "./layouts/screen.js");
/* harmony import */ var _layouts_mobile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../layouts/mobile */ "./layouts/mobile.js");





var _jsxFileName = "/Users/Theoofe/Living-Data/covid19-dashboard/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var defaultViewport = {
  latitude: 46.9,
  longitude: 1.7,
  zoom: 5
};

var MainPage = function MainPage(_ref) {
  var data = _ref.data,
      dates = _ref.dates;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      isMobileDevice = _useState[0],
      setIsMobileDevice = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(dates[dates.length - 1]),
      date = _useState2[0],
      setDate = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({}),
      franceReport = _useState3[0],
      setFranceReport = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({}),
      regionsReport = _useState4[0],
      setRegionsReport = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(defaultViewport),
      viewport = _useState5[0],
      setViewport = _useState5[1];

  var dateIdx = lodash_indexOf__WEBPACK_IMPORTED_MODULE_2___default()(dates, date);

  var previousReport = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    var idx = lodash_indexOf__WEBPACK_IMPORTED_MODULE_2___default()(dates, date);

    var previousIdx = idx - 1;

    if (previousIdx >= 0) {
      setDate(dates[previousIdx]);
    }
  }, [dates, date]);
  var nextReport = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    var idx = lodash_indexOf__WEBPACK_IMPORTED_MODULE_2___default()(dates, date);

    var nextIdx = idx + 1;

    if (nextIdx <= dates.length - 1) {
      setDate(dates[nextIdx]);
    }
  }, [dates, date]);
  var getFranceReport = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    var reports = data.filter(function (item) {
      return item.nom === 'France';
    });
    return _objectSpread({}, reports.find(function (r) {
      return r.date === date;
    }), {
      history: reports
    });
  }, [date, data]);
  var getRegionsReport = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    var regions = data.filter(function (item) {
      return item.code.includes('REG');
    });

    var byCode = lodash_groupBy__WEBPACK_IMPORTED_MODULE_4___default()(regions, 'code');

    return {
      type: 'FeatureCollection',
      features: Object.keys(byCode).map(function (code) {
        return {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: _centers_json__WEBPACK_IMPORTED_MODULE_9__[code]
          },
          properties: _objectSpread({}, byCode[code].find(function (r) {
            return r.date === date;
          }), {
            history: byCode[code].filter(function (r) {
              return date >= r.date;
            })
          })
        };
      }).filter(function (i) {
        return Boolean(i);
      })
    };
  }, [date, data]);

  var handleResize = function handleResize() {
    var mobileWidth = _styles_theme__WEBPACK_IMPORTED_MODULE_11__["default"].mobileDisplay.split('px')[0];
    setIsMobileDevice(window.innerWidth < mobileWidth);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var latitude = viewport.latitude,
        longitude = viewport.longitude;
    setViewport({
      latitude: latitude,
      longitude: longitude,
      zoom: isMobileDevice ? 4.3 : 5
    });
  }, [isMobileDevice]); // eslint-disable-line react-hooks/exhaustive-deps

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var franceReport = getFranceReport();
    setFranceReport(franceReport);
    var regionsReport = getRegionsReport();
    setRegionsReport(regionsReport);
  }, [date, getFranceReport, getRegionsReport]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var mobileWidth = _styles_theme__WEBPACK_IMPORTED_MODULE_11__["default"].mobileDisplay.split('px')[0];

    if (window.innerWidth < mobileWidth) {
      setIsMobileDevice(true);
    }

    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Tableau de bord de suivi de l\u2019\xE9pid\xE9mie de nouveau coronavirus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1277708495", [_styles_theme__WEBPACK_IMPORTED_MODULE_11__["default"].mobileDisplay]]]) + " " + 'main-page-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, isMobileDevice ? __jsx(_layouts_mobile__WEBPACK_IMPORTED_MODULE_13__["default"], {
    date: date,
    franceReport: franceReport,
    regionsReport: regionsReport,
    prev: dateIdx > 0 ? previousReport : null,
    next: dateIdx < dates.length - 1 ? nextReport : null,
    setViewport: setViewport,
    viewport: viewport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }) : __jsx(_layouts_screen__WEBPACK_IMPORTED_MODULE_12__["default"], {
    date: date,
    franceReport: franceReport,
    regionsReport: regionsReport,
    prev: dateIdx > 0 ? previousReport : null,
    next: dateIdx < dates.length - 1 ? nextReport : null,
    setViewport: setViewport,
    viewport: viewport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "1277708495",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_11__["default"].mobileDisplay],
    __self: this
  }, ".main-page-container.__jsx-style-dynamic-selector{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;width:100%;}@media (max-width:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_11__["default"].mobileDisplay, "){.main-page-container.__jsx-style-dynamic-selector{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJJa0IsQUFHNkIsQUFRYyxrQkFQbkIsMEVBQ0QsVUFPWixFQU5XLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL1RoZW9vZmUvTGl2aW5nLURhdGEvY292aWQxOS1kYXNoYm9hcmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQge2dyb3VwQnksIHVuaXEsIGluZGV4T2Z9IGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtnZXREYXRhfSBmcm9tICcuLi9saWIvYXBpJ1xuXG5pbXBvcnQgY2VudGVycyBmcm9tICcuLi9jZW50ZXJzLmpzb24nXG5cbmltcG9ydCBQYWdlIGZyb20gJy4uL2xheW91dHMvbWFpbidcblxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcblxuaW1wb3J0IFNjcmVlblBhZ2UgZnJvbSAnLi4vbGF5b3V0cy9zY3JlZW4nXG5pbXBvcnQgTW9iaWxlUGFnZSBmcm9tICcuLi9sYXlvdXRzL21vYmlsZSdcblxuY29uc3QgZGVmYXVsdFZpZXdwb3J0ID0ge1xuICBsYXRpdHVkZTogNDYuOSxcbiAgbG9uZ2l0dWRlOiAxLjcsXG4gIHpvb206IDVcbn1cblxuY29uc3QgTWFpblBhZ2UgPSAoe2RhdGEsIGRhdGVzfSkgPT4ge1xuICBjb25zdCBbaXNNb2JpbGVEZXZpY2UsIHNldElzTW9iaWxlRGV2aWNlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShkYXRlc1tkYXRlcy5sZW5ndGggLSAxXSlcbiAgY29uc3QgW2ZyYW5jZVJlcG9ydCwgc2V0RnJhbmNlUmVwb3J0XSA9IHVzZVN0YXRlKHt9KVxuICBjb25zdCBbcmVnaW9uc1JlcG9ydCwgc2V0UmVnaW9uc1JlcG9ydF0gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgW3ZpZXdwb3J0LCBzZXRWaWV3cG9ydF0gPSB1c2VTdGF0ZShkZWZhdWx0Vmlld3BvcnQpXG5cbiAgY29uc3QgZGF0ZUlkeCA9IGluZGV4T2YoZGF0ZXMsIGRhdGUpXG5cbiAgY29uc3QgcHJldmlvdXNSZXBvcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgaWR4ID0gaW5kZXhPZihkYXRlcywgZGF0ZSlcbiAgICBjb25zdCBwcmV2aW91c0lkeCA9IGlkeCAtIDFcblxuICAgIGlmIChwcmV2aW91c0lkeCA+PSAwKSB7XG4gICAgICBzZXREYXRlKGRhdGVzW3ByZXZpb3VzSWR4XSlcbiAgICB9XG4gIH0sIFtkYXRlcywgZGF0ZV0pXG5cbiAgY29uc3QgbmV4dFJlcG9ydCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBpZHggPSBpbmRleE9mKGRhdGVzLCBkYXRlKVxuICAgIGNvbnN0IG5leHRJZHggPSBpZHggKyAxXG4gICAgaWYgKG5leHRJZHggPD0gZGF0ZXMubGVuZ3RoIC0gMSkge1xuICAgICAgc2V0RGF0ZShkYXRlc1tuZXh0SWR4XSlcbiAgICB9XG4gIH0sIFtkYXRlcywgZGF0ZV0pXG5cbiAgY29uc3QgZ2V0RnJhbmNlUmVwb3J0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHJlcG9ydHMgPSBkYXRhLmZpbHRlcigoaXRlbSA9PiBpdGVtLm5vbSA9PT0gJ0ZyYW5jZScpKVxuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXBvcnRzLmZpbmQociA9PiByLmRhdGUgPT09IGRhdGUpLFxuICAgICAgaGlzdG9yeTogcmVwb3J0c1xuICAgIH1cbiAgfSwgW2RhdGUsIGRhdGFdKVxuXG4gIGNvbnN0IGdldFJlZ2lvbnNSZXBvcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgcmVnaW9ucyA9IGRhdGEuZmlsdGVyKChpdGVtID0+IGl0ZW0uY29kZS5pbmNsdWRlcygnUkVHJykpKVxuICAgIGNvbnN0IGJ5Q29kZSA9IGdyb3VwQnkocmVnaW9ucywgJ2NvZGUnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdGZWF0dXJlQ29sbGVjdGlvbicsXG4gICAgICBmZWF0dXJlczogT2JqZWN0LmtleXMoYnlDb2RlKS5tYXAoY29kZSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHlwZTogJ0ZlYXR1cmUnLFxuICAgICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICB0eXBlOiAnUG9pbnQnLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNlbnRlcnNbY29kZV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIC4uLmJ5Q29kZVtjb2RlXS5maW5kKHIgPT4gci5kYXRlID09PSBkYXRlKSxcbiAgICAgICAgICAgIGhpc3Rvcnk6IGJ5Q29kZVtjb2RlXS5maWx0ZXIociA9PiBkYXRlID49IHIuZGF0ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLmZpbHRlcihpID0+IEJvb2xlYW4oaSkpXG4gICAgfVxuICB9LCBbZGF0ZSwgZGF0YV0pXG5cbiAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vYmlsZVdpZHRoID0gdGhlbWUubW9iaWxlRGlzcGxheS5zcGxpdCgncHgnKVswXVxuICAgIHNldElzTW9iaWxlRGV2aWNlKHdpbmRvdy5pbm5lcldpZHRoIDwgbW9iaWxlV2lkdGgpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHtsYXRpdHVkZSwgbG9uZ2l0dWRlfSA9IHZpZXdwb3J0XG4gICAgc2V0Vmlld3BvcnQoe1xuICAgICAgbGF0aXR1ZGUsXG4gICAgICBsb25naXR1ZGUsXG4gICAgICB6b29tOiBpc01vYmlsZURldmljZSA/IDQuMyA6IDVcbiAgICB9KVxuICB9LCBbaXNNb2JpbGVEZXZpY2VdKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZnJhbmNlUmVwb3J0ID0gZ2V0RnJhbmNlUmVwb3J0KClcbiAgICBzZXRGcmFuY2VSZXBvcnQoZnJhbmNlUmVwb3J0KVxuXG4gICAgY29uc3QgcmVnaW9uc1JlcG9ydCA9IGdldFJlZ2lvbnNSZXBvcnQoKVxuICAgIHNldFJlZ2lvbnNSZXBvcnQocmVnaW9uc1JlcG9ydClcbiAgfSwgW2RhdGUsIGdldEZyYW5jZVJlcG9ydCwgZ2V0UmVnaW9uc1JlcG9ydF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtb2JpbGVXaWR0aCA9IHRoZW1lLm1vYmlsZURpc3BsYXkuc3BsaXQoJ3B4JylbMF1cbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCBtb2JpbGVXaWR0aCkge1xuICAgICAgc2V0SXNNb2JpbGVEZXZpY2UodHJ1ZSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIHRpdGxlPSdUYWJsZWF1IGRlIGJvcmQgZGUgc3VpdmkgZGUgbOKAmcOpcGlkw6ltaWUgZGUgbm91dmVhdSBjb3JvbmF2aXJ1cyc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1wYWdlLWNvbnRhaW5lcic+XG4gICAgICAgIHtpc01vYmlsZURldmljZSA/IChcbiAgICAgICAgICA8TW9iaWxlUGFnZVxuICAgICAgICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgICAgICAgIGZyYW5jZVJlcG9ydD17ZnJhbmNlUmVwb3J0fVxuICAgICAgICAgICAgcmVnaW9uc1JlcG9ydD17cmVnaW9uc1JlcG9ydH1cbiAgICAgICAgICAgIHByZXY9e2RhdGVJZHggPiAwID8gcHJldmlvdXNSZXBvcnQgOiBudWxsfVxuICAgICAgICAgICAgbmV4dD17ZGF0ZUlkeCA8IGRhdGVzLmxlbmd0aCAtIDEgPyBuZXh0UmVwb3J0IDogbnVsbH1cbiAgICAgICAgICAgIHNldFZpZXdwb3J0PXtzZXRWaWV3cG9ydH1cbiAgICAgICAgICAgIHZpZXdwb3J0PXt2aWV3cG9ydH1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxTY3JlZW5QYWdlXG4gICAgICAgICAgICBkYXRlPXtkYXRlfVxuICAgICAgICAgICAgZnJhbmNlUmVwb3J0PXtmcmFuY2VSZXBvcnR9XG4gICAgICAgICAgICByZWdpb25zUmVwb3J0PXtyZWdpb25zUmVwb3J0fVxuICAgICAgICAgICAgcHJldj17ZGF0ZUlkeCA+IDAgPyBwcmV2aW91c1JlcG9ydCA6IG51bGx9XG4gICAgICAgICAgICBuZXh0PXtkYXRlSWR4IDwgZGF0ZXMubGVuZ3RoIC0gMSA/IG5leHRSZXBvcnQgOiBudWxsfVxuICAgICAgICAgICAgc2V0Vmlld3BvcnQ9e3NldFZpZXdwb3J0fVxuICAgICAgICAgICAgdmlld3BvcnQ9e3ZpZXdwb3J0fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWluLXBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5tb2JpbGVEaXNwbGF5fSkge1xuICAgICAgICAgIC5tYWluLXBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1BhZ2U+XG4gIClcbn1cblxuTWFpblBhZ2UucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgZGF0ZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59XG5cbk1haW5QYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGEoKVxuXG4gIHJldHVybiB7XG4gICAgZGF0YSxcbiAgICBkYXRlczogdW5pcShkYXRhLmZpbHRlcihyID0+IHIuY29kZSA9PT0gJ0ZSQScpLm1hcChyID0+IHIuZGF0ZSkpLnNvcnQoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlXG4iXX0= */\n/*@ sourceURL=/Users/Theoofe/Living-Data/covid19-dashboard/pages/index.js */")));
};

MainPage.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array.isRequired,
  dates: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array.isRequired
};

MainPage.getInitialProps = function _callee() {
  var data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_lib_api__WEBPACK_IMPORTED_MODULE_8__["getData"])());

        case 2:
          data = _context.sent;
          return _context.abrupt("return", {
            data: data,
            dates: lodash_uniq__WEBPACK_IMPORTED_MODULE_3___default()(data.filter(function (r) {
              return r.code === 'FRA';
            }).map(function (r) {
              return r.date;
            })).sort()
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (MainPage);

/***/ })

})
//# sourceMappingURL=index.js.4f401da45ef3c23d505b.hot-update.js.map