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
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
/* harmony import */ var _lib_dates__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/dates */ "./lib/dates.js");





var _jsxFileName = "/Users/jerome/opencovid19-fr/dashboard/pages/index.js";

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(dates[dates.length - 1]),
      date = _useState[0],
      setDate = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({}),
      franceReport = _useState2[0],
      setFranceReport = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({}),
      regionsReport = _useState3[0],
      setRegionsReport = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(defaultViewport),
      viewport = _useState4[0],
      setViewport = _useState4[1];

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
              return Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["previousDates"])(date, r.date);
            })
          })
        };
      }).filter(function (i) {
        return Boolean(i);
      })
    };
  }, [date, data]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var franceReport = getFranceReport();
    setFranceReport(franceReport);
    var regionsReport = getRegionsReport();
    setRegionsReport(regionsReport);
  }, [date, getFranceReport, getRegionsReport]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var mobileWidth = _styles_theme__WEBPACK_IMPORTED_MODULE_13__["default"].mobileDisplay.split('px')[0];

    if (window.innerWidth < mobileWidth) {
      var latitude = viewport.latitude,
          longitude = viewport.longitude;
      setViewport({
        latitude: latitude,
        longitude: longitude,
        zoom: 4.3
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Tableau de bord de suivi de l\u2019\xE9pid\xE9mie de nouveau coronavirus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1374172277", [_styles_colors__WEBPACK_IMPORTED_MODULE_14__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_13__["default"].mobileDisplay]]]) + " " + 'main-page-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1374172277", [_styles_colors__WEBPACK_IMPORTED_MODULE_14__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_13__["default"].mobileDisplay]]]) + " " + 'menu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    date: date,
    report: franceReport,
    previousReport: dateIdx > 0 ? previousReport : null,
    nextReport: dateIdx < dates.length - 1 ? nextReport : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1374172277", [_styles_colors__WEBPACK_IMPORTED_MODULE_14__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_13__["default"].mobileDisplay]]]) + " " + 'map',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx(_components_react_map_gl__WEBPACK_IMPORTED_MODULE_12__["default"], {
    viewport: viewport,
    date: date,
    regions: regionsReport,
    onViewportChange: setViewport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "1374172277",
    dynamic: [_styles_colors__WEBPACK_IMPORTED_MODULE_14__["default"].lightGrey, _styles_theme__WEBPACK_IMPORTED_MODULE_13__["default"].mobileDisplay],
    __self: this
  }, ".main-page-container.__jsx-style-dynamic-selector{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;width:100%;}.menu.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;z-index:1;max-width:400px;box-shadow:0 1px 4px ".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_14__["default"].lightGrey, ";}.map.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;height:100%;}@media (max-width:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_13__["default"].mobileDisplay, "){.main-page-container.__jsx-style-dynamic-selector{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.menu.__jsx-style-dynamic-selector{-webkit-flex:0;-ms-flex:0;flex:0;height:40%;max-width:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJvbWUvb3BlbmNvdmlkMTktZnIvZGFzaGJvYXJkL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVIa0IsQUFHNkIsQUFPWCxBQU9ELEFBTTBCLEFBSXZCLGtCQXZCSSxlQU9ILEFBT0UsQUFVQyxVQWhCRyxDQWlCQyxDQVZuQixjQU5vRCxBQWlCbEQsaUNBekJZLFVBbUJaLEVBbEJXLEtBUWIsTUFQQSIsImZpbGUiOiIvVXNlcnMvamVyb21lL29wZW5jb3ZpZDE5LWZyL2Rhc2hib2FyZC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7Z3JvdXBCeSwgdW5pcSwgaW5kZXhPZn0gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge2dldERhdGF9IGZyb20gJy4uL2xpYi9hcGknXG5cbmltcG9ydCBjZW50ZXJzIGZyb20gJy4uL2NlbnRlcnMuanNvbidcblxuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vbGF5b3V0cy9tYWluJ1xuXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL21lbnUnXG5pbXBvcnQgUmVhY3RNYXBHbCBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LW1hcC1nbCdcblxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vc3R5bGVzL2NvbG9ycydcblxuaW1wb3J0IHtwcmV2aW91c0RhdGVzfSBmcm9tICcuLi9saWIvZGF0ZXMnXG5cbmNvbnN0IGRlZmF1bHRWaWV3cG9ydCA9IHtcbiAgbGF0aXR1ZGU6IDQ2LjksXG4gIGxvbmdpdHVkZTogMS43LFxuICB6b29tOiA1XG59XG5cbmNvbnN0IE1haW5QYWdlID0gKHtkYXRhLCBkYXRlc30pID0+IHtcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUoZGF0ZXNbZGF0ZXMubGVuZ3RoIC0gMV0pXG4gIGNvbnN0IFtmcmFuY2VSZXBvcnQsIHNldEZyYW5jZVJlcG9ydF0gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgW3JlZ2lvbnNSZXBvcnQsIHNldFJlZ2lvbnNSZXBvcnRdID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IFt2aWV3cG9ydCwgc2V0Vmlld3BvcnRdID0gdXNlU3RhdGUoZGVmYXVsdFZpZXdwb3J0KVxuXG4gIGNvbnN0IGRhdGVJZHggPSBpbmRleE9mKGRhdGVzLCBkYXRlKVxuXG4gIGNvbnN0IHByZXZpb3VzUmVwb3J0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IGlkeCA9IGluZGV4T2YoZGF0ZXMsIGRhdGUpXG4gICAgY29uc3QgcHJldmlvdXNJZHggPSBpZHggLSAxXG5cbiAgICBpZiAocHJldmlvdXNJZHggPj0gMCkge1xuICAgICAgc2V0RGF0ZShkYXRlc1twcmV2aW91c0lkeF0pXG4gICAgfVxuICB9LCBbZGF0ZXMsIGRhdGVdKVxuXG4gIGNvbnN0IG5leHRSZXBvcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgaWR4ID0gaW5kZXhPZihkYXRlcywgZGF0ZSlcbiAgICBjb25zdCBuZXh0SWR4ID0gaWR4ICsgMVxuICAgIGlmIChuZXh0SWR4IDw9IGRhdGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHNldERhdGUoZGF0ZXNbbmV4dElkeF0pXG4gICAgfVxuICB9LCBbZGF0ZXMsIGRhdGVdKVxuXG4gIGNvbnN0IGdldEZyYW5jZVJlcG9ydCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCByZXBvcnRzID0gZGF0YS5maWx0ZXIoKGl0ZW0gPT4gaXRlbS5ub20gPT09ICdGcmFuY2UnKSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucmVwb3J0cy5maW5kKHIgPT4gci5kYXRlID09PSBkYXRlKSxcbiAgICAgIGhpc3Rvcnk6IHJlcG9ydHNcbiAgICB9XG4gIH0sIFtkYXRlLCBkYXRhXSlcblxuICBjb25zdCBnZXRSZWdpb25zUmVwb3J0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHJlZ2lvbnMgPSBkYXRhLmZpbHRlcigoaXRlbSA9PiBpdGVtLmNvZGUuaW5jbHVkZXMoJ1JFRycpKSlcbiAgICBjb25zdCBieUNvZGUgPSBncm91cEJ5KHJlZ2lvbnMsICdjb2RlJylcblxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnRmVhdHVyZUNvbGxlY3Rpb24nLFxuICAgICAgZmVhdHVyZXM6IE9iamVjdC5rZXlzKGJ5Q29kZSkubWFwKGNvZGUgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6ICdGZWF0dXJlJyxcbiAgICAgICAgICBnZW9tZXRyeToge1xuICAgICAgICAgICAgdHlwZTogJ1BvaW50JyxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjZW50ZXJzW2NvZGVdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAuLi5ieUNvZGVbY29kZV0uZmluZChyID0+IHIuZGF0ZSA9PT0gZGF0ZSksXG4gICAgICAgICAgICBoaXN0b3J5OiBieUNvZGVbY29kZV0uZmlsdGVyKHIgPT4gcHJldmlvdXNEYXRlcyhkYXRlLCByLmRhdGUpKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSkuZmlsdGVyKGkgPT4gQm9vbGVhbihpKSlcbiAgICB9XG4gIH0sIFtkYXRlLCBkYXRhXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZyYW5jZVJlcG9ydCA9IGdldEZyYW5jZVJlcG9ydCgpXG4gICAgc2V0RnJhbmNlUmVwb3J0KGZyYW5jZVJlcG9ydClcblxuICAgIGNvbnN0IHJlZ2lvbnNSZXBvcnQgPSBnZXRSZWdpb25zUmVwb3J0KClcbiAgICBzZXRSZWdpb25zUmVwb3J0KHJlZ2lvbnNSZXBvcnQpXG4gIH0sIFtkYXRlLCBnZXRGcmFuY2VSZXBvcnQsIGdldFJlZ2lvbnNSZXBvcnRdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbW9iaWxlV2lkdGggPSB0aGVtZS5tb2JpbGVEaXNwbGF5LnNwbGl0KCdweCcpWzBdXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgbW9iaWxlV2lkdGgpIHtcbiAgICAgIGNvbnN0IHtsYXRpdHVkZSwgbG9uZ2l0dWRlfSA9IHZpZXdwb3J0XG4gICAgICBzZXRWaWV3cG9ydCh7XG4gICAgICAgIGxhdGl0dWRlLFxuICAgICAgICBsb25naXR1ZGUsXG4gICAgICAgIHpvb206IDQuM1xuICAgICAgfSlcbiAgICB9XG4gIH0sIFtdKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgdGl0bGU9J1RhYmxlYXUgZGUgYm9yZCBkZSBzdWl2aSBkZSBs4oCZw6lwaWTDqW1pZSBkZSBub3V2ZWF1IGNvcm9uYXZpcnVzJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluLXBhZ2UtY29udGFpbmVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lbnUnPlxuICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICBkYXRlPXtkYXRlfVxuICAgICAgICAgICAgcmVwb3J0PXtmcmFuY2VSZXBvcnR9XG4gICAgICAgICAgICBwcmV2aW91c1JlcG9ydD17ZGF0ZUlkeCA+IDAgPyBwcmV2aW91c1JlcG9ydCA6IG51bGx9XG4gICAgICAgICAgICBuZXh0UmVwb3J0PXtkYXRlSWR4IDwgZGF0ZXMubGVuZ3RoIC0gMSA/IG5leHRSZXBvcnQgOiBudWxsfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFwJz5cbiAgICAgICAgICA8UmVhY3RNYXBHbFxuICAgICAgICAgICAgdmlld3BvcnQ9e3ZpZXdwb3J0fVxuICAgICAgICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgICAgICAgIHJlZ2lvbnM9e3JlZ2lvbnNSZXBvcnR9XG4gICAgICAgICAgICBvblZpZXdwb3J0Q2hhbmdlPXtzZXRWaWV3cG9ydH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFpbi1wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lbnUge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAke2NvbG9ycy5saWdodEdyZXl9O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1hcCB7XG4gICAgICAgICAgZmxleDoxO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLm1vYmlsZURpc3BsYXl9KSB7XG4gICAgICAgICAgLm1haW4tcGFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZW51IHtcbiAgICAgICAgICAgIGZsZXg6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvUGFnZT5cbiAgKVxufVxuXG5NYWluUGFnZS5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBkYXRlczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn1cblxuTWFpblBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YSgpXG5cbiAgcmV0dXJuIHtcbiAgICBkYXRhLFxuICAgIGRhdGVzOiB1bmlxKGRhdGEuZmlsdGVyKHIgPT4gci5jb2RlID09PSAnRlJBJykubWFwKHIgPT4gci5kYXRlKSkuc29ydCgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpblBhZ2VcbiJdfQ== */\n/*@ sourceURL=/Users/jerome/opencovid19-fr/dashboard/pages/index.js */")));
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
//# sourceMappingURL=index.js.433492cb391c7b05a522.hot-update.js.map