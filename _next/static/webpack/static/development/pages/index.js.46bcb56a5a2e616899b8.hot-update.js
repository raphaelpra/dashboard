webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/menu */ "./components/menu.js");
/* harmony import */ var _components_react_map_gl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/react-map-gl */ "./components/react-map-gl/index.js");
/* harmony import */ var _components_confirmed_chart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/confirmed-chart */ "./components/confirmed-chart.js");
/* harmony import */ var _components_statistics__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/statistics */ "./components/statistics.js");
/* harmony import */ var _components_descritpion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/descritpion */ "./components/descritpion.js");
/* harmony import */ var _components_date_nav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/date-nav */ "./components/date-nav.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
/* harmony import */ var _lib_dates__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../lib/dates */ "./lib/dates.js");
/* harmony import */ var _layouts_mobile__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../layouts/mobile */ "./layouts/mobile.js");





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
              return Object(_lib_dates__WEBPACK_IMPORTED_MODULE_19__["previousDates"])(date, r.date);
            })
          })
        };
      }).filter(function (i) {
        return Boolean(i);
      })
    };
  }, [date, data]);

  var handleResize = function handleResize() {
    var mobileWidth = _styles_theme__WEBPACK_IMPORTED_MODULE_17__["default"].mobileDisplay.split('px')[0];
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
  }, [viewport, isMobileDevice]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var franceReport = getFranceReport();
    setFranceReport(franceReport);
    var regionsReport = getRegionsReport();
    setRegionsReport(regionsReport);
  }, [date, getFranceReport, getRegionsReport]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var mobileWidth = _styles_theme__WEBPACK_IMPORTED_MODULE_17__["default"].mobileDisplay.split('px')[0];

    if (window.innerWidth < mobileWidth) {
      setIsMobileDevice(true);
    }

    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Tableau de bord de suivi de l\u2019\xE9pid\xE9mie de nouveau coronavirus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["338887328", [_styles_colors__WEBPACK_IMPORTED_MODULE_18__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_17__["default"].mobileDisplay, _styles_colors__WEBPACK_IMPORTED_MODULE_18__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_17__["default"].mobileDisplay]]]) + " " + 'main-page-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, isMobileDevice ? __jsx(_layouts_mobile__WEBPACK_IMPORTED_MODULE_20__["default"], {
    date: date,
    franceReport: franceReport,
    regionsReport: regionsReport,
    prev: previousReport,
    next: nextReport,
    setViewport: setViewport,
    viewport: viewport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["338887328", [_styles_colors__WEBPACK_IMPORTED_MODULE_18__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_17__["default"].mobileDisplay, _styles_colors__WEBPACK_IMPORTED_MODULE_18__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_17__["default"].mobileDisplay]]]) + " " + 'menu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    date: date,
    previousReport: dateIdx > 0 ? previousReport : null,
    nextReport: dateIdx < dates.length - 1 ? nextReport : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(_components_date_nav__WEBPACK_IMPORTED_MODULE_16__["default"], {
    date: date,
    prev: previousReport,
    next: nextReport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(_components_descritpion__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), __jsx(_components_statistics__WEBPACK_IMPORTED_MODULE_14__["default"], {
    report: franceReport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }), franceReport && franceReport.history && __jsx(_components_confirmed_chart__WEBPACK_IMPORTED_MODULE_13__["default"], {
    data: franceReport.history.filter(function (r) {
      return Object(_lib_dates__WEBPACK_IMPORTED_MODULE_19__["previousDates"])(date, r.date);
    }),
    height: 300,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  })))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["338887328", [_styles_colors__WEBPACK_IMPORTED_MODULE_18__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_17__["default"].mobileDisplay, _styles_colors__WEBPACK_IMPORTED_MODULE_18__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_17__["default"].mobileDisplay]]]) + " " + 'map',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx(_components_react_map_gl__WEBPACK_IMPORTED_MODULE_12__["default"], {
    viewport: viewport,
    date: date,
    regions: regionsReport,
    onViewportChange: setViewport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "338887328",
    dynamic: [_styles_colors__WEBPACK_IMPORTED_MODULE_18__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_17__["default"].mobileDisplay, _styles_colors__WEBPACK_IMPORTED_MODULE_18__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_17__["default"].mobileDisplay],
    __self: this
  }, ".menu.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;z-index:1;max-width:400px;box-shadow:0 1px 4px ".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_18__["default"].lightGrey, ";}.map.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;height:100%;}@media (max-width:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_17__["default"].mobileDisplay, "){.map.__jsx-style-dynamic-selector{height:60%;}.menu.__jsx-style-dynamic-selector{-webkit-flex:0;-ms-flex:0;flex:0;height:40%;max-width:none;box-shadow:0 -1px 4px ").concat(_styles_colors__WEBPACK_IMPORTED_MODULE_18__["default"].lightGrey, ";}}.main-page-container.__jsx-style-dynamic-selector{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;width:100%;}@media (max-width:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_17__["default"].mobileDisplay, "){.main-page-container.__jsx-style-dynamic-selector{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNLb0IsQUFHd0IsQUFPRCxBQU1PLEFBSUosQUFTSyxBQVFjLFdBcEI1QixPQWFTLGVBMUJDLEFBT0UsQUFVQyxVQWhCRyxDQWlCQyxDQVZuQixjQU5vRCxBQWlCRyxpQ0FRN0MsVUFPWixFQU5XLEtBekJULENBaUJFLEtBU04iLCJmaWxlIjoiL1VzZXJzL1RoZW9vZmUvTGl2aW5nLURhdGEvY292aWQxOS1kYXNoYm9hcmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQge2dyb3VwQnksIHVuaXEsIGluZGV4T2Z9IGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtnZXREYXRhfSBmcm9tICcuLi9saWIvYXBpJ1xuXG5pbXBvcnQgY2VudGVycyBmcm9tICcuLi9jZW50ZXJzLmpzb24nXG5cbmltcG9ydCBQYWdlIGZyb20gJy4uL2xheW91dHMvbWFpbidcblxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9tZW51J1xuaW1wb3J0IFJlYWN0TWFwR2wgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC1tYXAtZ2wnXG5pbXBvcnQgQ29uZmlybWVkQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9jb25maXJtZWQtY2hhcnQnXG5pbXBvcnQgU3RhdGlzdGljcyBmcm9tICcuLi9jb21wb25lbnRzL3N0YXRpc3RpY3MnXG5pbXBvcnQgRGVzY3JpcHRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9kZXNjcml0cGlvbidcblxuaW1wb3J0IERhdGVOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9kYXRlLW5hdidcblxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vc3R5bGVzL2NvbG9ycydcblxuaW1wb3J0IHtwcmV2aW91c0RhdGVzfSBmcm9tICcuLi9saWIvZGF0ZXMnXG5pbXBvcnQgTW9iaWxlUGFnZSBmcm9tICcuLi9sYXlvdXRzL21vYmlsZSdcblxuY29uc3QgZGVmYXVsdFZpZXdwb3J0ID0ge1xuICBsYXRpdHVkZTogNDYuOSxcbiAgbG9uZ2l0dWRlOiAxLjcsXG4gIHpvb206IDVcbn1cblxuY29uc3QgTWFpblBhZ2UgPSAoe2RhdGEsIGRhdGVzfSkgPT4ge1xuICBjb25zdCBbaXNNb2JpbGVEZXZpY2UsIHNldElzTW9iaWxlRGV2aWNlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShkYXRlc1tkYXRlcy5sZW5ndGggLSAxXSlcbiAgY29uc3QgW2ZyYW5jZVJlcG9ydCwgc2V0RnJhbmNlUmVwb3J0XSA9IHVzZVN0YXRlKHt9KVxuICBjb25zdCBbcmVnaW9uc1JlcG9ydCwgc2V0UmVnaW9uc1JlcG9ydF0gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgW3ZpZXdwb3J0LCBzZXRWaWV3cG9ydF0gPSB1c2VTdGF0ZShkZWZhdWx0Vmlld3BvcnQpXG5cbiAgY29uc3QgZGF0ZUlkeCA9IGluZGV4T2YoZGF0ZXMsIGRhdGUpXG5cbiAgY29uc3QgcHJldmlvdXNSZXBvcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgaWR4ID0gaW5kZXhPZihkYXRlcywgZGF0ZSlcbiAgICBjb25zdCBwcmV2aW91c0lkeCA9IGlkeCAtIDFcblxuICAgIGlmIChwcmV2aW91c0lkeCA+PSAwKSB7XG4gICAgICBzZXREYXRlKGRhdGVzW3ByZXZpb3VzSWR4XSlcbiAgICB9XG4gIH0sIFtkYXRlcywgZGF0ZV0pXG5cbiAgY29uc3QgbmV4dFJlcG9ydCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBpZHggPSBpbmRleE9mKGRhdGVzLCBkYXRlKVxuICAgIGNvbnN0IG5leHRJZHggPSBpZHggKyAxXG4gICAgaWYgKG5leHRJZHggPD0gZGF0ZXMubGVuZ3RoIC0gMSkge1xuICAgICAgc2V0RGF0ZShkYXRlc1tuZXh0SWR4XSlcbiAgICB9XG4gIH0sIFtkYXRlcywgZGF0ZV0pXG5cbiAgY29uc3QgZ2V0RnJhbmNlUmVwb3J0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHJlcG9ydHMgPSBkYXRhLmZpbHRlcigoaXRlbSA9PiBpdGVtLm5vbSA9PT0gJ0ZyYW5jZScpKVxuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXBvcnRzLmZpbmQociA9PiByLmRhdGUgPT09IGRhdGUpLFxuICAgICAgaGlzdG9yeTogcmVwb3J0c1xuICAgIH1cbiAgfSwgW2RhdGUsIGRhdGFdKVxuXG4gIGNvbnN0IGdldFJlZ2lvbnNSZXBvcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgcmVnaW9ucyA9IGRhdGEuZmlsdGVyKChpdGVtID0+IGl0ZW0uY29kZS5pbmNsdWRlcygnUkVHJykpKVxuICAgIGNvbnN0IGJ5Q29kZSA9IGdyb3VwQnkocmVnaW9ucywgJ2NvZGUnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdGZWF0dXJlQ29sbGVjdGlvbicsXG4gICAgICBmZWF0dXJlczogT2JqZWN0LmtleXMoYnlDb2RlKS5tYXAoY29kZSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHlwZTogJ0ZlYXR1cmUnLFxuICAgICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICB0eXBlOiAnUG9pbnQnLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNlbnRlcnNbY29kZV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIC4uLmJ5Q29kZVtjb2RlXS5maW5kKHIgPT4gci5kYXRlID09PSBkYXRlKSxcbiAgICAgICAgICAgIGhpc3Rvcnk6IGJ5Q29kZVtjb2RlXS5maWx0ZXIociA9PiBwcmV2aW91c0RhdGVzKGRhdGUsIHIuZGF0ZSkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KS5maWx0ZXIoaSA9PiBCb29sZWFuKGkpKVxuICAgIH1cbiAgfSwgW2RhdGUsIGRhdGFdKVxuXG4gIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICBjb25zdCBtb2JpbGVXaWR0aCA9IHRoZW1lLm1vYmlsZURpc3BsYXkuc3BsaXQoJ3B4JylbMF1cbiAgICBzZXRJc01vYmlsZURldmljZSh3aW5kb3cuaW5uZXJXaWR0aCA8IG1vYmlsZVdpZHRoKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7bGF0aXR1ZGUsIGxvbmdpdHVkZX0gPSB2aWV3cG9ydFxuICAgIHNldFZpZXdwb3J0KHtcbiAgICAgIGxhdGl0dWRlLFxuICAgICAgbG9uZ2l0dWRlLFxuICAgICAgem9vbTogaXNNb2JpbGVEZXZpY2UgPyA0LjMgOiA1XG4gICAgfSlcbiAgfSwgW3ZpZXdwb3J0LCBpc01vYmlsZURldmljZV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmcmFuY2VSZXBvcnQgPSBnZXRGcmFuY2VSZXBvcnQoKVxuICAgIHNldEZyYW5jZVJlcG9ydChmcmFuY2VSZXBvcnQpXG5cbiAgICBjb25zdCByZWdpb25zUmVwb3J0ID0gZ2V0UmVnaW9uc1JlcG9ydCgpXG4gICAgc2V0UmVnaW9uc1JlcG9ydChyZWdpb25zUmVwb3J0KVxuICB9LCBbZGF0ZSwgZ2V0RnJhbmNlUmVwb3J0LCBnZXRSZWdpb25zUmVwb3J0XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG1vYmlsZVdpZHRoID0gdGhlbWUubW9iaWxlRGlzcGxheS5zcGxpdCgncHgnKVswXVxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IG1vYmlsZVdpZHRoKSB7XG4gICAgICBzZXRJc01vYmlsZURldmljZSh0cnVlKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSlcbiAgICB9XG4gIH0sIFtdKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgdGl0bGU9J1RhYmxlYXUgZGUgYm9yZCBkZSBzdWl2aSBkZSBs4oCZw6lwaWTDqW1pZSBkZSBub3V2ZWF1IGNvcm9uYXZpcnVzJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluLXBhZ2UtY29udGFpbmVyJz5cbiAgICAgICAge2lzTW9iaWxlRGV2aWNlID8gKFxuICAgICAgICAgIDxNb2JpbGVQYWdlXG4gICAgICAgICAgICBkYXRlPXtkYXRlfVxuICAgICAgICAgICAgZnJhbmNlUmVwb3J0PXtmcmFuY2VSZXBvcnR9XG4gICAgICAgICAgICByZWdpb25zUmVwb3J0PXtyZWdpb25zUmVwb3J0fVxuICAgICAgICAgICAgcHJldj17cHJldmlvdXNSZXBvcnR9XG4gICAgICAgICAgICBuZXh0PXtuZXh0UmVwb3J0fVxuICAgICAgICAgICAgc2V0Vmlld3BvcnQ9e3NldFZpZXdwb3J0fVxuICAgICAgICAgICAgdmlld3BvcnQ9e3ZpZXdwb3J0fVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZW51Jz5cbiAgICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgICBkYXRlPXtkYXRlfVxuICAgICAgICAgICAgICAgIHByZXZpb3VzUmVwb3J0PXtkYXRlSWR4ID4gMCA/IHByZXZpb3VzUmVwb3J0IDogbnVsbH1cbiAgICAgICAgICAgICAgICBuZXh0UmVwb3J0PXtkYXRlSWR4IDwgZGF0ZXMubGVuZ3RoIC0gMSA/IG5leHRSZXBvcnQgOiBudWxsfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPERhdGVOYXYgZGF0ZT17ZGF0ZX0gcHJldj17cHJldmlvdXNSZXBvcnR9IG5leHQ9e25leHRSZXBvcnR9IC8+XG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbiAvPlxuXG4gICAgICAgICAgICAgICAgICA8U3RhdGlzdGljcyByZXBvcnQ9e2ZyYW5jZVJlcG9ydH0gLz5cblxuICAgICAgICAgICAgICAgICAge2ZyYW5jZVJlcG9ydCAmJiBmcmFuY2VSZXBvcnQuaGlzdG9yeSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxDb25maXJtZWRDaGFydCBkYXRhPXtmcmFuY2VSZXBvcnQuaGlzdG9yeS5maWx0ZXIociA9PiBwcmV2aW91c0RhdGVzKGRhdGUsIHIuZGF0ZSkpfSBoZWlnaHQ9ezMwMH0gLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFwJz5cbiAgICAgICAgICAgICAgPFJlYWN0TWFwR2xcbiAgICAgICAgICAgICAgICB2aWV3cG9ydD17dmlld3BvcnR9XG4gICAgICAgICAgICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgICAgICAgICAgICByZWdpb25zPXtyZWdpb25zUmVwb3J0fVxuICAgICAgICAgICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9e3NldFZpZXdwb3J0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAke2NvbG9ycy5saWdodEdyZXl9O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLm1hcCB7XG4gICAgICAgICAgICAgICAgZmxleDoxO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLm1vYmlsZURpc3BsYXl9KSB7XG4gICAgICAgICAgICAgICAgLm1hcCB7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubWVudSB7XG4gICAgICAgICAgICAgICAgICBmbGV4OiAwO1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCU7XG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIC0xcHggNHB4ICR7Y29sb3JzLmxpZ2h0R3JleX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgIC5tYWluLXBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5tb2JpbGVEaXNwbGF5fSkge1xuICAgICAgICAgICAgLm1haW4tcGFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BhZ2U+XG4gIClcbn1cblxuTWFpblBhZ2UucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgZGF0ZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59XG5cbk1haW5QYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGEoKVxuXG4gIHJldHVybiB7XG4gICAgZGF0YSxcbiAgICBkYXRlczogdW5pcShkYXRhLmZpbHRlcihyID0+IHIuY29kZSA9PT0gJ0ZSQScpLm1hcChyID0+IHIuZGF0ZSkpLnNvcnQoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlXG4iXX0= */\n/*@ sourceURL=/Users/Theoofe/Living-Data/covid19-dashboard/pages/index.js */"))));
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
//# sourceMappingURL=index.js.46bcb56a5a2e616899b8.hot-update.js.map