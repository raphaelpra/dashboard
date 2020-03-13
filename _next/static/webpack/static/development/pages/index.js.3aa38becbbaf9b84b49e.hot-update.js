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
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
var _jsxFileName = "/Users/Theoofe/Living-Data/covid19-dashboard/layouts/screen.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var ScreenPage = function ScreenPage(_ref) {
  var date = _ref.date,
      franceReport = _ref.franceReport,
      regionsReport = _ref.regionsReport,
      prev = _ref.prev,
      next = _ref.next,
      viewport = _ref.viewport,
      setViewport = _ref.setViewport;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2080488717", [_styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey]]]) + " " + 'menu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_components_date_nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    date: date,
    prev: prev,
    next: next,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    date: date,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_descritpion__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_components_statistics__WEBPACK_IMPORTED_MODULE_5__["default"], {
    report: franceReport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), franceReport && franceReport.history && __jsx(_components_confirmed_chart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: franceReport.history.filter(function (r) {
      return date >= r.date;
    }),
    height: 300,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2080488717", [_styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey]]]) + " " + 'map',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_components_react_map_gl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    viewport: viewport,
    date: date,
    regions: regionsReport,
    onViewportChange: setViewport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2080488717",
    dynamic: [_styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey],
    __self: this
  }, ".menu.__jsx-style-dynamic-selector{z-index:1;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:400px;height:100%;box-shadow:0 1px 4px ".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_9__["default"].lightGrey, ";}.map.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2xheW91dHMvc2NyZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDa0IsQUFHdUIsQUFVSixVQVRZLGtCQUNMLEtBU0QsWUFDZCx5REFUd0IsOEVBQ04sZ0JBQ0osWUFDc0Msa0RBQ3BEIiwiZmlsZSI6Ii9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2xheW91dHMvc2NyZWVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgRGF0ZU5hdiBmcm9tICcuLi9jb21wb25lbnRzL2RhdGUtbmF2J1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9tZW51J1xuaW1wb3J0IFJlYWN0TWFwR2wgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC1tYXAtZ2wnXG5pbXBvcnQgU3RhdGlzdGljcyBmcm9tICcuLi9jb21wb25lbnRzL3N0YXRpc3RpY3MnXG5pbXBvcnQgQ29uZmlybWVkQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9jb25maXJtZWQtY2hhcnQnXG5pbXBvcnQgRGVzY3JpcHRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9kZXNjcml0cGlvbidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vc3R5bGVzL2NvbG9ycydcblxuY29uc3QgU2NyZWVuUGFnZSA9ICh7ZGF0ZSwgZnJhbmNlUmVwb3J0LCByZWdpb25zUmVwb3J0LCBwcmV2LCBuZXh0LCB2aWV3cG9ydCwgc2V0Vmlld3BvcnR9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZW51Jz5cbiAgICAgICAgPERhdGVOYXYgZGF0ZT17ZGF0ZX0gcHJldj17cHJldn0gbmV4dD17bmV4dH0gLz5cbiAgICAgICAgPE1lbnUgZGF0ZT17ZGF0ZX0+XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxEZXNjcmlwdGlvbiAvPlxuXG4gICAgICAgICAgICA8U3RhdGlzdGljcyByZXBvcnQ9e2ZyYW5jZVJlcG9ydH0gLz5cblxuICAgICAgICAgICAge2ZyYW5jZVJlcG9ydCAmJiBmcmFuY2VSZXBvcnQuaGlzdG9yeSAmJiAoXG4gICAgICAgICAgICAgIDxDb25maXJtZWRDaGFydCBkYXRhPXtmcmFuY2VSZXBvcnQuaGlzdG9yeS5maWx0ZXIociA9PiBkYXRlID49IHIuZGF0ZSl9IGhlaWdodD17MzAwfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgPC9NZW51PlxuXG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFwJz5cbiAgICAgICAgPFJlYWN0TWFwR2xcbiAgICAgICAgICB2aWV3cG9ydD17dmlld3BvcnR9XG4gICAgICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgICAgICByZWdpb25zPXtyZWdpb25zUmVwb3J0fVxuICAgICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9e3NldFZpZXdwb3J0fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWVudSB7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNHB4ICR7Y29sb3JzLmxpZ2h0R3JleX07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1hcCB7XG4gICAgICAgICAgICBmbGV4OjE7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmVlblBhZ2VcbiJdfQ== */\n/*@ sourceURL=/Users/Theoofe/Living-Data/covid19-dashboard/layouts/screen.js */")));
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
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");
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
    var mobileWidth = _styles_theme__WEBPACK_IMPORTED_MODULE_10__["default"].mobileDisplay.split('px')[0];
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
    var mobileWidth = _styles_theme__WEBPACK_IMPORTED_MODULE_10__["default"].mobileDisplay.split('px')[0];

    if (window.innerWidth < mobileWidth) {
      setIsMobileDevice(true);
    }

    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: "Tableau de bord de suivi de l\u2019\xE9pid\xE9mie de nouveau coronavirus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3065482437" + " " + 'main-page-container',
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
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "3065482437",
    __self: this
  }, ".main-page-container.jsx-3065482437{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlJb0IsQUFHMEIsMEVBQ0ssa0JBQ1AsV0FDQyxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHtncm91cEJ5LCB1bmlxLCBpbmRleE9mfSBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7Z2V0RGF0YX0gZnJvbSAnLi4vbGliL2FwaSdcblxuaW1wb3J0IGNlbnRlcnMgZnJvbSAnLi4vY2VudGVycy5qc29uJ1xuXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9sYXlvdXRzL21haW4nXG5cbmltcG9ydCBTY3JlZW5QYWdlIGZyb20gJy4uL2xheW91dHMvc2NyZWVuJ1xuaW1wb3J0IE1vYmlsZVBhZ2UgZnJvbSAnLi4vbGF5b3V0cy9tb2JpbGUnXG5cbmNvbnN0IGRlZmF1bHRWaWV3cG9ydCA9IHtcbiAgbGF0aXR1ZGU6IDQ2LjksXG4gIGxvbmdpdHVkZTogMS43LFxuICB6b29tOiA1XG59XG5cbmNvbnN0IE1haW5QYWdlID0gKHtkYXRhLCBkYXRlc30pID0+IHtcbiAgY29uc3QgW2lzTW9iaWxlRGV2aWNlLCBzZXRJc01vYmlsZURldmljZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUoZGF0ZXNbZGF0ZXMubGVuZ3RoIC0gMV0pXG4gIGNvbnN0IFtmcmFuY2VSZXBvcnQsIHNldEZyYW5jZVJlcG9ydF0gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgW3JlZ2lvbnNSZXBvcnQsIHNldFJlZ2lvbnNSZXBvcnRdID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IFt2aWV3cG9ydCwgc2V0Vmlld3BvcnRdID0gdXNlU3RhdGUoZGVmYXVsdFZpZXdwb3J0KVxuXG4gIGNvbnN0IGRhdGVJZHggPSBpbmRleE9mKGRhdGVzLCBkYXRlKVxuXG4gIGNvbnN0IHByZXZpb3VzUmVwb3J0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IGlkeCA9IGluZGV4T2YoZGF0ZXMsIGRhdGUpXG4gICAgY29uc3QgcHJldmlvdXNJZHggPSBpZHggLSAxXG5cbiAgICBpZiAocHJldmlvdXNJZHggPj0gMCkge1xuICAgICAgc2V0RGF0ZShkYXRlc1twcmV2aW91c0lkeF0pXG4gICAgfVxuICB9LCBbZGF0ZXMsIGRhdGVdKVxuXG4gIGNvbnN0IG5leHRSZXBvcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgaWR4ID0gaW5kZXhPZihkYXRlcywgZGF0ZSlcbiAgICBjb25zdCBuZXh0SWR4ID0gaWR4ICsgMVxuICAgIGlmIChuZXh0SWR4IDw9IGRhdGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHNldERhdGUoZGF0ZXNbbmV4dElkeF0pXG4gICAgfVxuICB9LCBbZGF0ZXMsIGRhdGVdKVxuXG4gIGNvbnN0IGdldEZyYW5jZVJlcG9ydCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCByZXBvcnRzID0gZGF0YS5maWx0ZXIoKGl0ZW0gPT4gaXRlbS5ub20gPT09ICdGcmFuY2UnKSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucmVwb3J0cy5maW5kKHIgPT4gci5kYXRlID09PSBkYXRlKSxcbiAgICAgIGhpc3Rvcnk6IHJlcG9ydHNcbiAgICB9XG4gIH0sIFtkYXRlLCBkYXRhXSlcblxuICBjb25zdCBnZXRSZWdpb25zUmVwb3J0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHJlZ2lvbnMgPSBkYXRhLmZpbHRlcigoaXRlbSA9PiBpdGVtLmNvZGUuaW5jbHVkZXMoJ1JFRycpKSlcbiAgICBjb25zdCBieUNvZGUgPSBncm91cEJ5KHJlZ2lvbnMsICdjb2RlJylcblxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnRmVhdHVyZUNvbGxlY3Rpb24nLFxuICAgICAgZmVhdHVyZXM6IE9iamVjdC5rZXlzKGJ5Q29kZSkubWFwKGNvZGUgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6ICdGZWF0dXJlJyxcbiAgICAgICAgICBnZW9tZXRyeToge1xuICAgICAgICAgICAgdHlwZTogJ1BvaW50JyxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjZW50ZXJzW2NvZGVdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAuLi5ieUNvZGVbY29kZV0uZmluZChyID0+IHIuZGF0ZSA9PT0gZGF0ZSksXG4gICAgICAgICAgICBoaXN0b3J5OiBieUNvZGVbY29kZV0uZmlsdGVyKHIgPT4gZGF0ZSA+PSByLmRhdGUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KS5maWx0ZXIoaSA9PiBCb29sZWFuKGkpKVxuICAgIH1cbiAgfSwgW2RhdGUsIGRhdGFdKVxuXG4gIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICBjb25zdCBtb2JpbGVXaWR0aCA9IHRoZW1lLm1vYmlsZURpc3BsYXkuc3BsaXQoJ3B4JylbMF1cbiAgICBzZXRJc01vYmlsZURldmljZSh3aW5kb3cuaW5uZXJXaWR0aCA8IG1vYmlsZVdpZHRoKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7bGF0aXR1ZGUsIGxvbmdpdHVkZX0gPSB2aWV3cG9ydFxuICAgIHNldFZpZXdwb3J0KHtcbiAgICAgIGxhdGl0dWRlLFxuICAgICAgbG9uZ2l0dWRlLFxuICAgICAgem9vbTogaXNNb2JpbGVEZXZpY2UgPyA0LjMgOiA1XG4gICAgfSlcbiAgfSwgW2lzTW9iaWxlRGV2aWNlXSkgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZyYW5jZVJlcG9ydCA9IGdldEZyYW5jZVJlcG9ydCgpXG4gICAgc2V0RnJhbmNlUmVwb3J0KGZyYW5jZVJlcG9ydClcblxuICAgIGNvbnN0IHJlZ2lvbnNSZXBvcnQgPSBnZXRSZWdpb25zUmVwb3J0KClcbiAgICBzZXRSZWdpb25zUmVwb3J0KHJlZ2lvbnNSZXBvcnQpXG4gIH0sIFtkYXRlLCBnZXRGcmFuY2VSZXBvcnQsIGdldFJlZ2lvbnNSZXBvcnRdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbW9iaWxlV2lkdGggPSB0aGVtZS5tb2JpbGVEaXNwbGF5LnNwbGl0KCdweCcpWzBdXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgbW9iaWxlV2lkdGgpIHtcbiAgICAgIHNldElzTW9iaWxlRGV2aWNlKHRydWUpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSB0aXRsZT0nVGFibGVhdSBkZSBib3JkIGRlIHN1aXZpIGRlIGzigJnDqXBpZMOpbWllIGRlIG5vdXZlYXUgY29yb25hdmlydXMnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4tcGFnZS1jb250YWluZXInPlxuICAgICAgICB7aXNNb2JpbGVEZXZpY2UgPyAoXG4gICAgICAgICAgPE1vYmlsZVBhZ2VcbiAgICAgICAgICAgIGRhdGU9e2RhdGV9XG4gICAgICAgICAgICBmcmFuY2VSZXBvcnQ9e2ZyYW5jZVJlcG9ydH1cbiAgICAgICAgICAgIHJlZ2lvbnNSZXBvcnQ9e3JlZ2lvbnNSZXBvcnR9XG4gICAgICAgICAgICBwcmV2PXtkYXRlSWR4ID4gMCA/IHByZXZpb3VzUmVwb3J0IDogbnVsbH1cbiAgICAgICAgICAgIG5leHQ9e2RhdGVJZHggPCBkYXRlcy5sZW5ndGggLSAxID8gbmV4dFJlcG9ydCA6IG51bGx9XG4gICAgICAgICAgICBzZXRWaWV3cG9ydD17c2V0Vmlld3BvcnR9XG4gICAgICAgICAgICB2aWV3cG9ydD17dmlld3BvcnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8U2NyZWVuUGFnZVxuICAgICAgICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgICAgICAgIGZyYW5jZVJlcG9ydD17ZnJhbmNlUmVwb3J0fVxuICAgICAgICAgICAgcmVnaW9uc1JlcG9ydD17cmVnaW9uc1JlcG9ydH1cbiAgICAgICAgICAgIHByZXY9e2RhdGVJZHggPiAwID8gcHJldmlvdXNSZXBvcnQgOiBudWxsfVxuICAgICAgICAgICAgbmV4dD17ZGF0ZUlkeCA8IGRhdGVzLmxlbmd0aCAtIDEgPyBuZXh0UmVwb3J0IDogbnVsbH1cbiAgICAgICAgICAgIHNldFZpZXdwb3J0PXtzZXRWaWV3cG9ydH1cbiAgICAgICAgICAgIHZpZXdwb3J0PXt2aWV3cG9ydH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWFpbi1wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BhZ2U+XG4gIClcbn1cblxuTWFpblBhZ2UucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgZGF0ZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59XG5cbk1haW5QYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGEoKVxuXG4gIHJldHVybiB7XG4gICAgZGF0YSxcbiAgICBkYXRlczogdW5pcShkYXRhLmZpbHRlcihyID0+IHIuY29kZSA9PT0gJ0ZSQScpLm1hcChyID0+IHIuZGF0ZSkpLnNvcnQoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlXG4iXX0= */\n/*@ sourceURL=/Users/Theoofe/Living-Data/covid19-dashboard/pages/index.js */")));
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
//# sourceMappingURL=index.js.3aa38becbbaf9b84b49e.hot-update.js.map