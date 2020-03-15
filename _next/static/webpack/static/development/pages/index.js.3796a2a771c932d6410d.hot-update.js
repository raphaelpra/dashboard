webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/react-map-gl/layers.js":
/*!*******************************************!*\
  !*** ./components/react-map-gl/layers.js ***!
  \*******************************************/
/*! exports provided: regionLayer, regionCountLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regionLayer", function() { return regionLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regionCountLayer", function() { return regionCountLayer; });
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/colors */ "./styles/colors.js");

var regionLayer = {
  id: 'region',
  type: 'circle',
  source: 'regions',
  filter: ['>', 'casConfirmes', 0],
  paint: {
    'circle-opacity': 0.6,
    'circle-color': _styles_colors__WEBPACK_IMPORTED_MODULE_0__["default"].orange,
    'circle-radius': ['interpolate', ['linear'], ['number', ['get', 'casConfirmes']], 0, 10, 1800, 80]
  }
};
var regionCountLayer = {
  id: 'region-count',
  type: 'symbol',
  source: 'regions',
  filter: ['>', 'casConfirmes', 0],
  layout: {
    'text-field': '{casConfirmes}',
    'text-size': 16
  }
};

/***/ })

})
//# sourceMappingURL=index.js.3796a2a771c932d6410d.hot-update.js.map