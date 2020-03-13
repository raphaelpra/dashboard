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
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");

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
        lineNumber: 13
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
        lineNumber: 21
      },
      __self: this
    }), franceReport && franceReport.history && __jsx(_components_confirmed_chart__WEBPACK_IMPORTED_MODULE_7__["default"], {
      data: franceReport.history.filter(function (r) {
        return date >= r.date;
      }),
      height: 300,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }));
  },
  description: function description() {
    return __jsx(_components_descritpion__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
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
      lineNumber: 35
    },
    __self: this
  }, __jsx(_components_date_nav__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectedView: selectedView,
    selectView: setSelectedView,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, VIEWS[selectedView](props)), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2805825261",
    __self: this
  }, ".mobile-page-container.jsx-2805825261{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2xheW91dHMvbW9iaWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDa0IsQUFHdUIsWUFDZCIsImZpbGUiOiIvVXNlcnMvVGhlb29mZS9MaXZpbmctRGF0YS9jb3ZpZDE5LWRhc2hib2FyZC9sYXlvdXRzL21vYmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IERhdGVOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9kYXRlLW5hdidcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvbWVudSdcbmltcG9ydCBSZWFjdE1hcEdsIGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtbWFwLWdsJ1xuaW1wb3J0IFN0YXRpc3RpY3MgZnJvbSAnLi4vY29tcG9uZW50cy9zdGF0aXN0aWNzJ1xuaW1wb3J0IENvbmZpcm1lZENoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvY29uZmlybWVkLWNoYXJ0J1xuaW1wb3J0IERlc2NyaXB0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvZGVzY3JpdHBpb24nXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuXG5jb25zdCBWSUVXUyA9IHtcbiAgbWFwOiAoe3ZpZXdwb3J0LCBkYXRlLCByZWdpb25zUmVwb3J0LCBzZXRWaWV3cG9ydH0pID0+IChcbiAgICA8UmVhY3RNYXBHbFxuICAgICAgdmlld3BvcnQ9e3ZpZXdwb3J0fVxuICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgIHJlZ2lvbnM9e3JlZ2lvbnNSZXBvcnR9XG4gICAgICBvblZpZXdwb3J0Q2hhbmdlPXtzZXRWaWV3cG9ydH0gLz5cbiAgKSxcbiAgc3RhdHM6ICh7ZGF0ZSwgZnJhbmNlUmVwb3J0fSkgPT4gKFxuICAgIDw+XG4gICAgICA8U3RhdGlzdGljcyByZXBvcnQ9e2ZyYW5jZVJlcG9ydH0gLz5cblxuICAgICAge2ZyYW5jZVJlcG9ydCAmJiBmcmFuY2VSZXBvcnQuaGlzdG9yeSAmJiAoXG4gICAgICAgIDxDb25maXJtZWRDaGFydCBkYXRhPXtmcmFuY2VSZXBvcnQuaGlzdG9yeS5maWx0ZXIociA9PiBkYXRlID49IHIuZGF0ZSl9IGhlaWdodD17MzAwfSAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKSxcbiAgZGVzY3JpcHRpb246ICgpID0+IDxEZXNjcmlwdGlvbiAvPlxufVxuXG5jb25zdCBNb2JpbGVQYWdlID0gcHJvcHMgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRWaWV3LCBzZXRTZWxlY3RlZFZpZXddID0gdXNlU3RhdGUoJ21hcCcpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbW9iaWxlLXBhZ2UtY29udGFpbmVyJz5cbiAgICAgIDxEYXRlTmF2IHsuLi5wcm9wc30gLz5cbiAgICAgIDxNZW51IHNlbGVjdGVkVmlldz17c2VsZWN0ZWRWaWV3fSBzZWxlY3RWaWV3PXtzZXRTZWxlY3RlZFZpZXd9PlxuICAgICAgICB7VklFV1Nbc2VsZWN0ZWRWaWV3XShwcm9wcyl9XG4gICAgICA8L01lbnU+XG4gICAgICA8Rm9vdGVyIC8+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1vYmlsZS1wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlUGFnZVxuIl19 */\n/*@ sourceURL=/Users/Theoofe/Living-Data/covid19-dashboard/layouts/mobile.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MobilePage);

/***/ })

})
//# sourceMappingURL=index.js.e88bb8d70bb0d962d8cf.hot-update.js.map