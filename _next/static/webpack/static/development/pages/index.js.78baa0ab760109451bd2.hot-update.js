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
    className: "jsx-1132531340" + " " + 'mobile-page-container',
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
    id: "1132531340",
    __self: this
  }, ".mobile-page-container.jsx-1132531340{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:90%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2xheW91dHMvbW9iaWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDa0IsQUFHd0IsMEVBQ1MsOEVBQ1osV0FDWiIsImZpbGUiOiIvVXNlcnMvVGhlb29mZS9MaXZpbmctRGF0YS9jb3ZpZDE5LWRhc2hib2FyZC9sYXlvdXRzL21vYmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IERhdGVOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9kYXRlLW5hdidcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvbWVudSdcbmltcG9ydCBSZWFjdE1hcEdsIGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtbWFwLWdsJ1xuaW1wb3J0IFN0YXRpc3RpY3MgZnJvbSAnLi4vY29tcG9uZW50cy9zdGF0aXN0aWNzJ1xuaW1wb3J0IENvbmZpcm1lZENoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvY29uZmlybWVkLWNoYXJ0J1xuaW1wb3J0IERlc2NyaXB0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvZGVzY3JpdHBpb24nXG5cbmNvbnN0IFZJRVdTID0ge1xuICBtYXA6ICh7dmlld3BvcnQsIGRhdGUsIHJlZ2lvbnNSZXBvcnQsIHNldFZpZXdwb3J0fSkgPT4gKFxuICAgIDxSZWFjdE1hcEdsXG4gICAgICB2aWV3cG9ydD17dmlld3BvcnR9XG4gICAgICBkYXRlPXtkYXRlfVxuICAgICAgcmVnaW9ucz17cmVnaW9uc1JlcG9ydH1cbiAgICAgIG9uVmlld3BvcnRDaGFuZ2U9e3NldFZpZXdwb3J0fSAvPlxuICApLFxuICBzdGF0czogKHtkYXRlLCBmcmFuY2VSZXBvcnR9KSA9PiAoXG4gICAgPD5cbiAgICAgIDxTdGF0aXN0aWNzIHJlcG9ydD17ZnJhbmNlUmVwb3J0fSAvPlxuXG4gICAgICB7ZnJhbmNlUmVwb3J0ICYmIGZyYW5jZVJlcG9ydC5oaXN0b3J5ICYmIChcbiAgICAgICAgPENvbmZpcm1lZENoYXJ0IGRhdGE9e2ZyYW5jZVJlcG9ydC5oaXN0b3J5LmZpbHRlcihyID0+IGRhdGUgPj0gci5kYXRlKX0gaGVpZ2h0PXszMDB9IC8+XG4gICAgICApfVxuICAgIDwvPlxuICApLFxuICBkZXNjcmlwdGlvbjogKCkgPT4gPERlc2NyaXB0aW9uIC8+XG59XG5cbmNvbnN0IE1vYmlsZVBhZ2UgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZFZpZXcsIHNldFNlbGVjdGVkVmlld10gPSB1c2VTdGF0ZSgnbWFwJylcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdtb2JpbGUtcGFnZS1jb250YWluZXInPlxuICAgICAgPERhdGVOYXYgey4uLnByb3BzfSAvPlxuICAgICAgPE1lbnUgc2VsZWN0ZWRWaWV3PXtzZWxlY3RlZFZpZXd9IHNlbGVjdFZpZXc9e3NldFNlbGVjdGVkVmlld30+XG4gICAgICAgIHtWSUVXU1tzZWxlY3RlZFZpZXddKHByb3BzKX1cbiAgICAgIDwvTWVudT5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubW9iaWxlLXBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgaGVpZ2h0IDkwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZVBhZ2VcbiJdfQ== */\n/*@ sourceURL=/Users/Theoofe/Living-Data/covid19-dashboard/layouts/mobile.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MobilePage);

/***/ })

})
//# sourceMappingURL=index.js.78baa0ab760109451bd2.hot-update.js.map