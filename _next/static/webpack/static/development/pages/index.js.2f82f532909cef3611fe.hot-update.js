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
/* harmony import */ var _components_date_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/date-nav */ "./components/date-nav.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/menu */ "./components/menu.js");
/* harmony import */ var _components_react_map_gl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/react-map-gl */ "./components/react-map-gl/index.js");
/* harmony import */ var _components_statistics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/statistics */ "./components/statistics.js");
/* harmony import */ var _components_confirmed_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/confirmed-chart */ "./components/confirmed-chart.js");
/* harmony import */ var _components_descritpion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/descritpion */ "./components/descritpion.js");

var _jsxFileName = "/Users/Theoofe/Living-Data/covid19-dashboard/layouts/mobile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var VIEWS = {
  map: function map(_ref) {
    var viewport = _ref.viewport,
        date = _ref.date,
        regionsReport = _ref.regionsReport,
        setViewport = _ref.setViewport;
    return __jsx(_components_react_map_gl__WEBPACK_IMPORTED_MODULE_5__["default"], {
      viewport: viewport,
      date: date,
      regions: regionsReport,
      onViewportChange: setViewport,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    });
  },
  stats: function stats(_ref2) {
    var date = _ref2.date,
        franceReport = _ref2.franceReport;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_statistics__WEBPACK_IMPORTED_MODULE_6__["default"], {
      report: franceReport,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), franceReport && franceReport.history && __jsx(_components_confirmed_chart__WEBPACK_IMPORTED_MODULE_7__["default"], {
      data: franceReport.history.filter(function (r) {
        return date >= r.date;
      }),
      height: 300,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }));
  },
  description: function description() {
    return __jsx(_components_descritpion__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
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
    className: "jsx-2203491429" + " " + 'mobile-page-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_components_date_nav__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectedView: selectedView,
    selectView: setSelectedView,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, VIEWS[selectedView](props)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2203491429",
    __self: this
  }, ".mobile-page-container.jsx-2203491429{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2xheW91dHMvbW9iaWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDa0IsQUFHd0IsMEVBQ1MsOEVBQ2YsaUNBQ1QiLCJmaWxlIjoiL1VzZXJzL1RoZW9vZmUvTGl2aW5nLURhdGEvY292aWQxOS1kYXNoYm9hcmQvbGF5b3V0cy9tb2JpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBEYXRlTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvZGF0ZS1uYXYnXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL21lbnUnXG5pbXBvcnQgUmVhY3RNYXBHbCBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LW1hcC1nbCdcbmltcG9ydCBTdGF0aXN0aWNzIGZyb20gJy4uL2NvbXBvbmVudHMvc3RhdGlzdGljcydcbmltcG9ydCBDb25maXJtZWRDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL2NvbmZpcm1lZC1jaGFydCdcbmltcG9ydCBEZXNjcmlwdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2Rlc2NyaXRwaW9uJ1xuXG5jb25zdCBWSUVXUyA9IHtcbiAgbWFwOiAoe3ZpZXdwb3J0LCBkYXRlLCByZWdpb25zUmVwb3J0LCBzZXRWaWV3cG9ydH0pID0+IChcbiAgICA8UmVhY3RNYXBHbFxuICAgICAgdmlld3BvcnQ9e3ZpZXdwb3J0fVxuICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgIHJlZ2lvbnM9e3JlZ2lvbnNSZXBvcnR9XG4gICAgICBvblZpZXdwb3J0Q2hhbmdlPXtzZXRWaWV3cG9ydH0gLz5cbiAgKSxcbiAgc3RhdHM6ICh7ZGF0ZSwgZnJhbmNlUmVwb3J0fSkgPT4gKFxuICAgIDw+XG4gICAgICA8U3RhdGlzdGljcyByZXBvcnQ9e2ZyYW5jZVJlcG9ydH0gLz5cblxuICAgICAge2ZyYW5jZVJlcG9ydCAmJiBmcmFuY2VSZXBvcnQuaGlzdG9yeSAmJiAoXG4gICAgICAgIDxDb25maXJtZWRDaGFydCBkYXRhPXtmcmFuY2VSZXBvcnQuaGlzdG9yeS5maWx0ZXIociA9PiBkYXRlID49IHIuZGF0ZSl9IGhlaWdodD17MzAwfSAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKSxcbiAgZGVzY3JpcHRpb246ICgpID0+IDxEZXNjcmlwdGlvbiAvPlxufVxuXG5jb25zdCBNb2JpbGVQYWdlID0gcHJvcHMgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRWaWV3LCBzZXRTZWxlY3RlZFZpZXddID0gdXNlU3RhdGUoJ21hcCcpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbW9iaWxlLXBhZ2UtY29udGFpbmVyJz5cbiAgICAgIDxEYXRlTmF2IHsuLi5wcm9wc30gLz5cbiAgICAgIDxNZW51IHNlbGVjdGVkVmlldz17c2VsZWN0ZWRWaWV3fSBzZWxlY3RWaWV3PXtzZXRTZWxlY3RlZFZpZXd9PlxuICAgICAgICB7VklFV1Nbc2VsZWN0ZWRWaWV3XShwcm9wcyl9XG4gICAgICA8L01lbnU+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1vYmlsZS1wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVQYWdlXG4iXX0= */\n/*@ sourceURL=/Users/Theoofe/Living-Data/covid19-dashboard/layouts/mobile.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MobilePage);

/***/ })

})
//# sourceMappingURL=index.js.2f82f532909cef3611fe.hot-update.js.map