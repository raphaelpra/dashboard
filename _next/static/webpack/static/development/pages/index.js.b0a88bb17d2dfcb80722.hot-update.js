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
      display: true,
      stacked: true,
      position: 'left',
      id: 'y-axis-1'
    }, {
      display: true,
      position: 'right',
      id: 'y-axis-2',
      gridLines: {
        drawOnChartArea: false
      }
    }]
  }
};

var formatData = function formatData(data) {
  var datasets = [];

  if (data.some(function (h) {
    return h.casConfirmes;
  })) {
    datasets.push({
      label: 'En vie',
      data: data.map(function (h) {
        return h.casConfirmes - (h.deces || 0);
      }),
      backgroundColor: _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].orange,
      yAxisID: 'y-axis-1',
      order: 2
    });
  }

  if (data.some(function (h) {
    return h.deces;
  })) {
    datasets.push({
      label: 'Décédés',
      data: data.map(function (h) {
        return h.deces;
      }),
      backgroundColor: _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].red,
      yAxisID: 'y-axis-1',
      order: 2
    });
  } // datasets.push({
  //   type: 'line',
  //   fill: false,
  //   label: 'Nouveaux cas',
  //   data: data.map((h, i) => {
  //     if (i === 0) {
  //       return null
  //     }
  //     const casConfirmesVeille = data[i - 1].casConfirmes
  //     return casConfirmesVeille ? h.casConfirmes - casConfirmesVeille : 0
  //   }),
  //   backgroundColor: colors.darkGrey,
  //   yAxisID: 'y-axis-2',
  //   order: 1
  // })


  datasets.push({
    type: 'line',
    fill: false,
    label: 'Progression relative',
    data: data.map(function (h, i) {
      if (i === 0) {
        return null;
      }

      var casConfirmesVeille = data[i - 1].casConfirmes;
      return casConfirmesVeille ? (h.casConfirmes - casConfirmesVeille) / casConfirmesVeille : 0;
    }),
    backgroundColor: _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].darkerGrey,
    yAxisID: 'y-axis-2',
    order: 1
  });
  return {
    labels: data.map(function (h) {
      return h.date;
    }),
    datasets: datasets
  };
};

var ConfirmedChart = function ConfirmedChart(_ref) {
  var data = _ref.data,
      height = _ref.height;
  return __jsx("div", {
    style: {
      padding: '1em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Bar"], {
    data: formatData(data),
    options: options,
    height: height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }));
};

ConfirmedChart.defaultProps = {
  height: null
};
ConfirmedChart.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (ConfirmedChart);

/***/ })

})
//# sourceMappingURL=index.js.b0a88bb17d2dfcb80722.hot-update.js.map