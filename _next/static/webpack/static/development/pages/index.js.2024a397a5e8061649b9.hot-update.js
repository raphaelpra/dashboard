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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_date_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/date-nav */ "./components/date-nav.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/menu */ "./components/menu.js");
/* harmony import */ var _components_react_map_gl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/react-map-gl */ "./components/react-map-gl/index.js");
/* harmony import */ var _components_statistics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/statistics */ "./components/statistics.js");
/* harmony import */ var _components_confirmed_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/confirmed-chart */ "./components/confirmed-chart.js");
/* harmony import */ var _components_descritpion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/descritpion */ "./components/descritpion.js");

var _jsxFileName = "/Users/Theoofe/Living-Data/covid19-dashboard/layouts/mobile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var VIEWS = {
  map: function map(_ref) {
    var viewport = _ref.viewport,
        date = _ref.date,
        regionsReport = _ref.regionsReport,
        setViewport = _ref.setViewport;
    return __jsx(_components_react_map_gl__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_statistics__WEBPACK_IMPORTED_MODULE_5__["default"], {
      report: franceReport,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), franceReport && franceReport.history && __jsx(_components_confirmed_chart__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
    return __jsx(_components_descritpion__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    });
  }
};

var MobilePage = function MobilePage(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('map'),
      selectedView = _useState[0],
      setSelectedView = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_date_nav__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedView: selectedView,
    selectView: setSelectedView,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, VIEWS[selectedView](props)));
};

/* harmony default export */ __webpack_exports__["default"] = (MobilePage);

/***/ })

})
//# sourceMappingURL=index.js.2024a397a5e8061649b9.hot-update.js.map