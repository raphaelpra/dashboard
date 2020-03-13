webpackHotUpdate("static/development/pages/index.js",{

/***/ "./layouts/mobile.js":
/*!***************************!*\
  !*** ./layouts/mobile.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_dates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/dates */ "./lib/dates.js");
/* harmony import */ var _components_date_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/date-nav */ "./components/date-nav.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/menu */ "./components/menu.js");
/* harmony import */ var _components_react_map_gl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/react-map-gl */ "./components/react-map-gl/index.js");
/* harmony import */ var _components_statistics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/statistics */ "./components/statistics.js");
/* harmony import */ var _components_confirmed_chart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/confirmed-chart */ "./components/confirmed-chart.js");
/* harmony import */ var _components_descritpion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/descritpion */ "./components/descritpion.js");

var _jsxFileName = "/Users/Theoofe/Living-Data/covid19-dashboard/layouts/mobile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var VIEWS = {
  map: function map(_ref) {
    var viewport = _ref.viewport,
        date = _ref.date,
        regionsReport = _ref.regionsReport,
        setViewport = _ref.setViewport;
    return __jsx(_components_react_map_gl__WEBPACK_IMPORTED_MODULE_6__["default"], {
      viewport: viewport,
      date: date,
      regions: regionsReport,
      onViewportChange: setViewport,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    });
  },
  stats: function stats(_ref2) {
    var date = _ref2.date,
        franceReport = _ref2.franceReport;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_statistics__WEBPACK_IMPORTED_MODULE_7__["default"], {
      report: franceReport,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), franceReport && franceReport.history && __jsx(_components_confirmed_chart__WEBPACK_IMPORTED_MODULE_8__["default"], {
      data: franceReport.history.filter(function (r) {
        return Object(_lib_dates__WEBPACK_IMPORTED_MODULE_3__["previousDates"])(date, r.date);
      }),
      height: 300,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }));
  },
  description: function description() {
    return __jsx(_components_descritpion__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    });
  }
};

var MobilePage = function MobilePage(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('map'),
      selectedView = _useState[0],
      setSelectedView = _useState[1];

  return __jsx("div", {
    className: "jsx-2805825261" + " " + 'mobile-page-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_components_date_nav__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selectedView: selectedView,
    selectView: setSelectedView,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, VIEWS[selectedView](props)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2805825261",
    __self: this
  }, ".mobile-page-container.jsx-2805825261{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2xheW91dHMvbW9iaWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDa0IsQUFHdUIsWUFDZCIsImZpbGUiOiIvVXNlcnMvVGhlb29mZS9MaXZpbmctRGF0YS9jb3ZpZDE5LWRhc2hib2FyZC9sYXlvdXRzL21vYmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHtwcmV2aW91c0RhdGVzfSBmcm9tICcuLi9saWIvZGF0ZXMnXG5cbmltcG9ydCBEYXRlTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvZGF0ZS1uYXYnXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL21lbnUnXG5pbXBvcnQgUmVhY3RNYXBHbCBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LW1hcC1nbCdcbmltcG9ydCBTdGF0aXN0aWNzIGZyb20gJy4uL2NvbXBvbmVudHMvc3RhdGlzdGljcydcbmltcG9ydCBDb25maXJtZWRDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL2NvbmZpcm1lZC1jaGFydCdcbmltcG9ydCBEZXNjcmlwdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2Rlc2NyaXRwaW9uJ1xuXG5jb25zdCBWSUVXUyA9IHtcbiAgbWFwOiAoe3ZpZXdwb3J0LCBkYXRlLCByZWdpb25zUmVwb3J0LCBzZXRWaWV3cG9ydH0pID0+IChcbiAgICA8UmVhY3RNYXBHbFxuICAgICAgdmlld3BvcnQ9e3ZpZXdwb3J0fVxuICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgIHJlZ2lvbnM9e3JlZ2lvbnNSZXBvcnR9XG4gICAgICBvblZpZXdwb3J0Q2hhbmdlPXtzZXRWaWV3cG9ydH0gLz5cbiAgKSxcbiAgc3RhdHM6ICh7ZGF0ZSwgZnJhbmNlUmVwb3J0fSkgPT4gKFxuICAgIDw+XG4gICAgICA8U3RhdGlzdGljcyByZXBvcnQ9e2ZyYW5jZVJlcG9ydH0gLz5cblxuICAgICAge2ZyYW5jZVJlcG9ydCAmJiBmcmFuY2VSZXBvcnQuaGlzdG9yeSAmJiAoXG4gICAgICAgIDxDb25maXJtZWRDaGFydCBkYXRhPXtmcmFuY2VSZXBvcnQuaGlzdG9yeS5maWx0ZXIociA9PiBwcmV2aW91c0RhdGVzKGRhdGUsIHIuZGF0ZSkpfSBoZWlnaHQ9ezMwMH0gLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICksXG4gIGRlc2NyaXB0aW9uOiAoKSA9PiA8RGVzY3JpcHRpb24gLz5cbn1cblxuY29uc3QgTW9iaWxlUGFnZSA9IHByb3BzID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkVmlldywgc2V0U2VsZWN0ZWRWaWV3XSA9IHVzZVN0YXRlKCdtYXAnKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J21vYmlsZS1wYWdlLWNvbnRhaW5lcic+XG4gICAgICA8RGF0ZU5hdiB7Li4ucHJvcHN9IC8+XG4gICAgICA8TWVudSBzZWxlY3RlZFZpZXc9e3NlbGVjdGVkVmlld30gc2VsZWN0Vmlldz17c2V0U2VsZWN0ZWRWaWV3fT5cbiAgICAgICAge1ZJRVdTW3NlbGVjdGVkVmlld10ocHJvcHMpfVxuICAgICAgPC9NZW51PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tb2JpbGUtcGFnZS1jb250YWluZXIge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZVBhZ2VcbiJdfQ== */\n/*@ sourceURL=/Users/Theoofe/Living-Data/covid19-dashboard/layouts/mobile.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MobilePage);

/***/ })

})
//# sourceMappingURL=index.js.6948565bf76939257960.hot-update.js.map