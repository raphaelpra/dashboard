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
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _components_date_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/date-nav */ "./components/date-nav.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/menu */ "./components/menu.js");
/* harmony import */ var _components_react_map_gl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/react-map-gl */ "./components/react-map-gl/index.js");
/* harmony import */ var _components_statistics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/statistics */ "./components/statistics.js");
/* harmony import */ var _components_confirmed_chart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/confirmed-chart */ "./components/confirmed-chart.js");
/* harmony import */ var _components_descritpion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/descritpion */ "./components/descritpion.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");

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
        return date >= r.date;
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
    className: "jsx-2490650624" + " " + 'mobile-page-container',
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
  }, VIEWS[selectedView](props)), __jsx("div", {
    className: "jsx-2490650624" + " " + 'view-selector',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      return selectView('description');
    },
    className: "jsx-2490650624" + " " + "".concat(selectedView === 'description' ? 'selected' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__["FileText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), __jsx("div", {
    onClick: function onClick() {
      return selectView('map');
    },
    className: "jsx-2490650624" + " " + "".concat(selectedView === 'map' ? 'selected' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__["Map"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), __jsx("div", {
    onClick: function onClick() {
      return selectView('stats');
    },
    className: "jsx-2490650624" + " " + "".concat(selectedView === 'stats' ? 'selected' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__["BarChart"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2490650624",
    __self: this
  }, ".mobile-page-container.jsx-2490650624{height:100%;}.view-selector.jsx-2490650624{display:none;}.view-selector.jsx-2490650624>div.jsx-2490650624{padding:1em;margin:auto;}.view-selector.jsx-2490650624>div.selected.jsx-2490650624{border-top:2px solid ".concat(colors.blue, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2xheW91dHMvbW9iaWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEa0IsQUFHdUIsQUFJQyxBQUlELEFBS3NDLFlBWnBELEFBUWMsQ0FKZCxXQUtBLDBCQUlBIiwiZmlsZSI6Ii9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2xheW91dHMvbW9iaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtGaWxlVGV4dCwgTWFwLCBCYXJDaGFydH0gZnJvbSAncmVhY3QtZmVhdGhlcidcblxuaW1wb3J0IERhdGVOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9kYXRlLW5hdidcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvbWVudSdcbmltcG9ydCBSZWFjdE1hcEdsIGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtbWFwLWdsJ1xuaW1wb3J0IFN0YXRpc3RpY3MgZnJvbSAnLi4vY29tcG9uZW50cy9zdGF0aXN0aWNzJ1xuaW1wb3J0IENvbmZpcm1lZENoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvY29uZmlybWVkLWNoYXJ0J1xuaW1wb3J0IERlc2NyaXB0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvZGVzY3JpdHBpb24nXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuXG5jb25zdCBWSUVXUyA9IHtcbiAgbWFwOiAoe3ZpZXdwb3J0LCBkYXRlLCByZWdpb25zUmVwb3J0LCBzZXRWaWV3cG9ydH0pID0+IChcbiAgICA8UmVhY3RNYXBHbFxuICAgICAgdmlld3BvcnQ9e3ZpZXdwb3J0fVxuICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgIHJlZ2lvbnM9e3JlZ2lvbnNSZXBvcnR9XG4gICAgICBvblZpZXdwb3J0Q2hhbmdlPXtzZXRWaWV3cG9ydH0gLz5cbiAgKSxcbiAgc3RhdHM6ICh7ZGF0ZSwgZnJhbmNlUmVwb3J0fSkgPT4gKFxuICAgIDw+XG4gICAgICA8U3RhdGlzdGljcyByZXBvcnQ9e2ZyYW5jZVJlcG9ydH0gLz5cblxuICAgICAge2ZyYW5jZVJlcG9ydCAmJiBmcmFuY2VSZXBvcnQuaGlzdG9yeSAmJiAoXG4gICAgICAgIDxDb25maXJtZWRDaGFydCBkYXRhPXtmcmFuY2VSZXBvcnQuaGlzdG9yeS5maWx0ZXIociA9PiBkYXRlID49IHIuZGF0ZSl9IGhlaWdodD17MzAwfSAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKSxcbiAgZGVzY3JpcHRpb246ICgpID0+IDxEZXNjcmlwdGlvbiAvPlxufVxuXG5jb25zdCBNb2JpbGVQYWdlID0gcHJvcHMgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRWaWV3LCBzZXRTZWxlY3RlZFZpZXddID0gdXNlU3RhdGUoJ21hcCcpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbW9iaWxlLXBhZ2UtY29udGFpbmVyJz5cbiAgICAgIDxEYXRlTmF2IHsuLi5wcm9wc30gLz5cbiAgICAgIDxNZW51IHNlbGVjdGVkVmlldz17c2VsZWN0ZWRWaWV3fSBzZWxlY3RWaWV3PXtzZXRTZWxlY3RlZFZpZXd9PlxuICAgICAgICB7VklFV1Nbc2VsZWN0ZWRWaWV3XShwcm9wcyl9XG4gICAgICA8L01lbnU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndmlldy1zZWxlY3Rvcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzZWxlY3RlZFZpZXcgPT09ICdkZXNjcmlwdGlvbicgPyAnc2VsZWN0ZWQnIDogJyd9YH0gb25DbGljaz17KCkgPT4gc2VsZWN0VmlldygnZGVzY3JpcHRpb24nKX0+XG4gICAgICAgICAgPEZpbGVUZXh0IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c2VsZWN0ZWRWaWV3ID09PSAnbWFwJyA/ICdzZWxlY3RlZCcgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBzZWxlY3RWaWV3KCdtYXAnKX0+XG4gICAgICAgICAgPE1hcCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3NlbGVjdGVkVmlldyA9PT0gJ3N0YXRzJyA/ICdzZWxlY3RlZCcgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBzZWxlY3RWaWV3KCdzdGF0cycpfT5cbiAgICAgICAgICA8QmFyQ2hhcnQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgLz5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubW9iaWxlLXBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAudmlldy1zZWxlY3RvciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC52aWV3LXNlbGVjdG9yID4gZGl2IHtcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZpZXctc2VsZWN0b3IgPiBkaXYuc2VsZWN0ZWQge1xuICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAke2NvbG9ycy5ibHVlfTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZVBhZ2VcbiJdfQ== */\n/*@ sourceURL=/Users/Theoofe/Living-Data/covid19-dashboard/layouts/mobile.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (MobilePage);

/***/ })

})
//# sourceMappingURL=index.js.bd875e8d09a5542a47b3.hot-update.js.map