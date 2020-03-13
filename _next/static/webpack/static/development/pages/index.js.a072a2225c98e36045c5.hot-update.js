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
/* harmony import */ var _layouts_mobile__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../layouts/mobile */ "./layouts/mobile.js");





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
  }, [isMobileDevice]); // eslint-disable-line react-hooks/exhaustive-deps

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
  }, []);
  return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Tableau de bord de suivi de l\u2019\xE9pid\xE9mie de nouveau coronavirus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1819938479", [_styles_colors__WEBPACK_IMPORTED_MODULE_18__["default"].lightGrey]]]) + " " + 'main-page-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, isMobileDevice ? __jsx(_layouts_mobile__WEBPACK_IMPORTED_MODULE_19__["default"], {
    date: date,
    franceReport: franceReport,
    regionsReport: regionsReport,
    prev: dateIdx > 0 ? previousReport : null,
    next: dateIdx < dates.length - 1 ? nextReport : null,
    setViewport: setViewport,
    viewport: viewport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1819938479", [_styles_colors__WEBPACK_IMPORTED_MODULE_18__["default"].lightGrey]]]) + " " + 'menu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    date: date,
    previousReport: dateIdx > 0 ? previousReport : null,
    nextReport: dateIdx < dates.length - 1 ? nextReport : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx(_components_date_nav__WEBPACK_IMPORTED_MODULE_16__["default"], {
    date: date,
    prev: previousReport,
    next: nextReport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(_components_descritpion__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }), __jsx(_components_statistics__WEBPACK_IMPORTED_MODULE_14__["default"], {
    report: franceReport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }), franceReport && franceReport.history && __jsx(_components_confirmed_chart__WEBPACK_IMPORTED_MODULE_13__["default"], {
    data: franceReport.history.filter(function (r) {
      return date >= r.date;
    }),
    height: 300,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  })))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1819938479", [_styles_colors__WEBPACK_IMPORTED_MODULE_18__["default"].lightGrey]]]) + " " + 'map',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(_components_react_map_gl__WEBPACK_IMPORTED_MODULE_12__["default"], {
    viewport: viewport,
    date: date,
    regions: regionsReport,
    onViewportChange: setViewport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "1819938479",
    dynamic: [_styles_colors__WEBPACK_IMPORTED_MODULE_18__["default"].lightGrey],
    __self: this
  }, ".menu.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;z-index:1;max-width:400px;box-shadow:0 1px 4px ".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_18__["default"].lightGrey, ";}.map.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;height:100%;}.main-page-container.__jsx-style-dynamic-selector{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;width:100%;background-color:green;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFLb0IsQUFHb0IsQUFPRCxBQUtZLGtCQUNMLGVBWkgsQUFPRSxVQU5JLEVBT2xCLGNBTm9ELGlDQVd0QyxZQUNELEtBWGIsTUFZeUIsdUJBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHtncm91cEJ5LCB1bmlxLCBpbmRleE9mfSBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7Z2V0RGF0YX0gZnJvbSAnLi4vbGliL2FwaSdcblxuaW1wb3J0IGNlbnRlcnMgZnJvbSAnLi4vY2VudGVycy5qc29uJ1xuXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9sYXlvdXRzL21haW4nXG5cbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvbWVudSdcbmltcG9ydCBSZWFjdE1hcEdsIGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtbWFwLWdsJ1xuaW1wb3J0IENvbmZpcm1lZENoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvY29uZmlybWVkLWNoYXJ0J1xuaW1wb3J0IFN0YXRpc3RpY3MgZnJvbSAnLi4vY29tcG9uZW50cy9zdGF0aXN0aWNzJ1xuaW1wb3J0IERlc2NyaXB0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvZGVzY3JpdHBpb24nXG5cbmltcG9ydCBEYXRlTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvZGF0ZS1uYXYnXG5cbmltcG9ydCB0aGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL3N0eWxlcy9jb2xvcnMnXG5cbmltcG9ydCBNb2JpbGVQYWdlIGZyb20gJy4uL2xheW91dHMvbW9iaWxlJ1xuXG5jb25zdCBkZWZhdWx0Vmlld3BvcnQgPSB7XG4gIGxhdGl0dWRlOiA0Ni45LFxuICBsb25naXR1ZGU6IDEuNyxcbiAgem9vbTogNVxufVxuXG5jb25zdCBNYWluUGFnZSA9ICh7ZGF0YSwgZGF0ZXN9KSA9PiB7XG4gIGNvbnN0IFtpc01vYmlsZURldmljZSwgc2V0SXNNb2JpbGVEZXZpY2VdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKGRhdGVzW2RhdGVzLmxlbmd0aCAtIDFdKVxuICBjb25zdCBbZnJhbmNlUmVwb3J0LCBzZXRGcmFuY2VSZXBvcnRdID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IFtyZWdpb25zUmVwb3J0LCBzZXRSZWdpb25zUmVwb3J0XSA9IHVzZVN0YXRlKHt9KVxuICBjb25zdCBbdmlld3BvcnQsIHNldFZpZXdwb3J0XSA9IHVzZVN0YXRlKGRlZmF1bHRWaWV3cG9ydClcblxuICBjb25zdCBkYXRlSWR4ID0gaW5kZXhPZihkYXRlcywgZGF0ZSlcblxuICBjb25zdCBwcmV2aW91c1JlcG9ydCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBpZHggPSBpbmRleE9mKGRhdGVzLCBkYXRlKVxuICAgIGNvbnN0IHByZXZpb3VzSWR4ID0gaWR4IC0gMVxuXG4gICAgaWYgKHByZXZpb3VzSWR4ID49IDApIHtcbiAgICAgIHNldERhdGUoZGF0ZXNbcHJldmlvdXNJZHhdKVxuICAgIH1cbiAgfSwgW2RhdGVzLCBkYXRlXSlcblxuICBjb25zdCBuZXh0UmVwb3J0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IGlkeCA9IGluZGV4T2YoZGF0ZXMsIGRhdGUpXG4gICAgY29uc3QgbmV4dElkeCA9IGlkeCArIDFcbiAgICBpZiAobmV4dElkeCA8PSBkYXRlcy5sZW5ndGggLSAxKSB7XG4gICAgICBzZXREYXRlKGRhdGVzW25leHRJZHhdKVxuICAgIH1cbiAgfSwgW2RhdGVzLCBkYXRlXSlcblxuICBjb25zdCBnZXRGcmFuY2VSZXBvcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgcmVwb3J0cyA9IGRhdGEuZmlsdGVyKChpdGVtID0+IGl0ZW0ubm9tID09PSAnRnJhbmNlJykpXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlcG9ydHMuZmluZChyID0+IHIuZGF0ZSA9PT0gZGF0ZSksXG4gICAgICBoaXN0b3J5OiByZXBvcnRzXG4gICAgfVxuICB9LCBbZGF0ZSwgZGF0YV0pXG5cbiAgY29uc3QgZ2V0UmVnaW9uc1JlcG9ydCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCByZWdpb25zID0gZGF0YS5maWx0ZXIoKGl0ZW0gPT4gaXRlbS5jb2RlLmluY2x1ZGVzKCdSRUcnKSkpXG4gICAgY29uc3QgYnlDb2RlID0gZ3JvdXBCeShyZWdpb25zLCAnY29kZScpXG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcbiAgICAgIGZlYXR1cmVzOiBPYmplY3Qua2V5cyhieUNvZGUpLm1hcChjb2RlID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiAnRmVhdHVyZScsXG4gICAgICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgICAgIHR5cGU6ICdQb2ludCcsXG4gICAgICAgICAgICBjb29yZGluYXRlczogY2VudGVyc1tjb2RlXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgLi4uYnlDb2RlW2NvZGVdLmZpbmQociA9PiByLmRhdGUgPT09IGRhdGUpLFxuICAgICAgICAgICAgaGlzdG9yeTogYnlDb2RlW2NvZGVdLmZpbHRlcihyID0+IGRhdGUgPj0gci5kYXRlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSkuZmlsdGVyKGkgPT4gQm9vbGVhbihpKSlcbiAgICB9XG4gIH0sIFtkYXRlLCBkYXRhXSlcblxuICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9iaWxlV2lkdGggPSB0aGVtZS5tb2JpbGVEaXNwbGF5LnNwbGl0KCdweCcpWzBdXG4gICAgc2V0SXNNb2JpbGVEZXZpY2Uod2luZG93LmlubmVyV2lkdGggPCBtb2JpbGVXaWR0aClcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qge2xhdGl0dWRlLCBsb25naXR1ZGV9ID0gdmlld3BvcnRcbiAgICBzZXRWaWV3cG9ydCh7XG4gICAgICBsYXRpdHVkZSxcbiAgICAgIGxvbmdpdHVkZSxcbiAgICAgIHpvb206IGlzTW9iaWxlRGV2aWNlID8gNC4zIDogNVxuICAgIH0pXG4gIH0sIFtpc01vYmlsZURldmljZV0pIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmcmFuY2VSZXBvcnQgPSBnZXRGcmFuY2VSZXBvcnQoKVxuICAgIHNldEZyYW5jZVJlcG9ydChmcmFuY2VSZXBvcnQpXG5cbiAgICBjb25zdCByZWdpb25zUmVwb3J0ID0gZ2V0UmVnaW9uc1JlcG9ydCgpXG4gICAgc2V0UmVnaW9uc1JlcG9ydChyZWdpb25zUmVwb3J0KVxuICB9LCBbZGF0ZSwgZ2V0RnJhbmNlUmVwb3J0LCBnZXRSZWdpb25zUmVwb3J0XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG1vYmlsZVdpZHRoID0gdGhlbWUubW9iaWxlRGlzcGxheS5zcGxpdCgncHgnKVswXVxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IG1vYmlsZVdpZHRoKSB7XG4gICAgICBzZXRJc01vYmlsZURldmljZSh0cnVlKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgdGl0bGU9J1RhYmxlYXUgZGUgYm9yZCBkZSBzdWl2aSBkZSBs4oCZw6lwaWTDqW1pZSBkZSBub3V2ZWF1IGNvcm9uYXZpcnVzJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluLXBhZ2UtY29udGFpbmVyJz5cbiAgICAgICAge2lzTW9iaWxlRGV2aWNlID8gKFxuICAgICAgICAgIDxNb2JpbGVQYWdlXG4gICAgICAgICAgICBkYXRlPXtkYXRlfVxuICAgICAgICAgICAgZnJhbmNlUmVwb3J0PXtmcmFuY2VSZXBvcnR9XG4gICAgICAgICAgICByZWdpb25zUmVwb3J0PXtyZWdpb25zUmVwb3J0fVxuICAgICAgICAgICAgcHJldj17ZGF0ZUlkeCA+IDAgPyBwcmV2aW91c1JlcG9ydCA6IG51bGx9XG4gICAgICAgICAgICBuZXh0PXtkYXRlSWR4IDwgZGF0ZXMubGVuZ3RoIC0gMSA/IG5leHRSZXBvcnQgOiBudWxsfVxuICAgICAgICAgICAgc2V0Vmlld3BvcnQ9e3NldFZpZXdwb3J0fVxuICAgICAgICAgICAgdmlld3BvcnQ9e3ZpZXdwb3J0fVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZW51Jz5cbiAgICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgICBkYXRlPXtkYXRlfVxuICAgICAgICAgICAgICAgIHByZXZpb3VzUmVwb3J0PXtkYXRlSWR4ID4gMCA/IHByZXZpb3VzUmVwb3J0IDogbnVsbH1cbiAgICAgICAgICAgICAgICBuZXh0UmVwb3J0PXtkYXRlSWR4IDwgZGF0ZXMubGVuZ3RoIC0gMSA/IG5leHRSZXBvcnQgOiBudWxsfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPERhdGVOYXYgZGF0ZT17ZGF0ZX0gcHJldj17cHJldmlvdXNSZXBvcnR9IG5leHQ9e25leHRSZXBvcnR9IC8+XG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbiAvPlxuXG4gICAgICAgICAgICAgICAgICA8U3RhdGlzdGljcyByZXBvcnQ9e2ZyYW5jZVJlcG9ydH0gLz5cblxuICAgICAgICAgICAgICAgICAge2ZyYW5jZVJlcG9ydCAmJiBmcmFuY2VSZXBvcnQuaGlzdG9yeSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxDb25maXJtZWRDaGFydCBkYXRhPXtmcmFuY2VSZXBvcnQuaGlzdG9yeS5maWx0ZXIociA9PiBkYXRlID49IHIuZGF0ZSl9IGhlaWdodD17MzAwfSAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYXAnPlxuICAgICAgICAgICAgICA8UmVhY3RNYXBHbFxuICAgICAgICAgICAgICAgIHZpZXdwb3J0PXt2aWV3cG9ydH1cbiAgICAgICAgICAgICAgICBkYXRlPXtkYXRlfVxuICAgICAgICAgICAgICAgIHJlZ2lvbnM9e3JlZ2lvbnNSZXBvcnR9XG4gICAgICAgICAgICAgICAgb25WaWV3cG9ydENoYW5nZT17c2V0Vmlld3BvcnR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNHB4ICR7Y29sb3JzLmxpZ2h0R3JleX07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1hcCB7XG4gICAgICAgICAgICBmbGV4OjE7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1haW4tcGFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BhZ2U+XG4gIClcbn1cblxuTWFpblBhZ2UucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgZGF0ZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59XG5cbk1haW5QYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGEoKVxuXG4gIHJldHVybiB7XG4gICAgZGF0YSxcbiAgICBkYXRlczogdW5pcShkYXRhLmZpbHRlcihyID0+IHIuY29kZSA9PT0gJ0ZSQScpLm1hcChyID0+IHIuZGF0ZSkpLnNvcnQoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlXG4iXX0= */\n/*@ sourceURL=/Users/Theoofe/Living-Data/covid19-dashboard/pages/index.js */"))));
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
//# sourceMappingURL=index.js.a072a2225c98e36045c5.hot-update.js.map