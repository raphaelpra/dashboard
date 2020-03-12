webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/confirmed-chart.js":
/*!***************************************!*\
  !*** ./components/confirmed-chart.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
var _jsxFileName = "/Users/jerome/opencovid19-fr/dashboard/components/confirmed-chart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var options = {
  tooltips: {
    mode: 'index'
  },
  scales: {
    xAxes: [{
      stacked: true
    }],
    yAxes: [{
      stacked: true
    }]
  }
};

var formatData = function formatData(data) {
  var datasets = [];

  if (data.some(function (h) {
    return h.casConfirmes;
  })) {
    datasets.push({
      label: 'Cas confirmés',
      data: data.map(function (h) {
        return h.casConfirmes;
      }),
      backgroundColor: _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].orange
    });
  }

  if (data.some(function (h) {
    return h.deces;
  })) {
    console.log(data.filter(function (h) {
      return h.deces;
    }));
    datasets.push({
      label: 'Décès',
      data: data.map(function (h) {
        return h.deces;
      }),
      backgroundColor: _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].red
    });
  }

  return {
    labels: data.map(function (h) {
      return h.date;
    }),
    datasets: datasets
  };
};

var ConfirmedChart = function ConfirmedChart(_ref) {
  var data = _ref.data;
  return __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Bar"], {
    data: formatData(data),
    options: options,
    height: 250,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  });
};

ConfirmedChart.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ConfirmedChart);

/***/ })

})
//# sourceMappingURL=index.js.ce2891e8dddefc8805c0.hot-update.js.map