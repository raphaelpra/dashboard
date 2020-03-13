webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/react-map-gl/index.js":
/*!******************************************!*\
  !*** ./components/react-map-gl/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var _sumup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sumup */ "./components/react-map-gl/sumup.js");
/* harmony import */ var _layers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layers */ "./components/react-map-gl/layers.js");


var _jsxFileName = "/Users/Theoofe/Living-Data/covid19-dashboard/components/react-map-gl/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var settings = {
  maxZoom: 16
};

var Map = function Map(_ref) {
  var viewport = _ref.viewport,
      regions = _ref.regions,
      onViewportChange = _ref.onViewportChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      map = _useState[0],
      setMap = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      hovered = _useState2[0],
      setHovered = _useState2[1];

  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (ref) {
    if (ref) {
      setMap(ref.getMap());
    }
  }, []);

  var onHover = function onHover(event) {
    event.stopPropagation();
    var feature = event.features && event.features[0];

    var _event$lngLat = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(event.lngLat, 2),
        longitude = _event$lngLat[0],
        latitude = _event$lngLat[1];

    var hoverInfo;

    if (feature) {
      hoverInfo = {
        longitude: longitude,
        latitude: latitude,
        feature: feature
      };
    }

    setHovered(hoverInfo);
  };

  return __jsx("div", {
    className: "jsx-1501121386" + " " + 'map-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ReuseMaps: true,
    ref: mapRef
  }, viewport, {
    width: "100%",
    height: "100%",
    mapStyle: "https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/style.json"
  }, settings, {
    interactiveLayerIds: [_layers__WEBPACK_IMPORTED_MODULE_7__["regionLayer"].id],
    onViewportChange: onViewportChange,
    onHover: onHover,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_5__["Source"], {
    type: "geojson",
    id: "regions",
    data: regions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_5__["Layer"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _layers__WEBPACK_IMPORTED_MODULE_7__["regionLayer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_5__["Layer"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _layers__WEBPACK_IMPORTED_MODULE_7__["regionCountLayer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }))), hovered && __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_5__["Popup"], {
    longitude: hovered.longitude,
    latitude: hovered.latitude,
    closeButton: false,
    closeOnClick: false,
    onClose: function onClose() {
      return setHovered(null);
    },
    anchor: "top",
    offsetTop: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(_sumup__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hovered.feature.properties, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1501121386",
    __self: this
  }, ".map-container.jsx-1501121386{position:relative;width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2NvbXBvbmVudHMvcmVhY3QtbWFwLWdsL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFa0IsQUFHNkIsa0JBQ1AsV0FDQyxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2NvbXBvbmVudHMvcmVhY3QtbWFwLWdsL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdE1hcEdMLCB7U291cmNlLCBMYXllciwgUG9wdXB9IGZyb20gJ3JlYWN0LW1hcC1nbCdcblxuaW1wb3J0IFN1bVVwIGZyb20gJy4vc3VtdXAnXG5cbmltcG9ydCB7cmVnaW9uTGF5ZXIsIHJlZ2lvbkNvdW50TGF5ZXJ9IGZyb20gJy4vbGF5ZXJzJ1xuXG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgbWF4Wm9vbTogMTZcbn1cblxuY29uc3QgTWFwID0gKHt2aWV3cG9ydCwgcmVnaW9ucywgb25WaWV3cG9ydENoYW5nZX0pID0+IHtcbiAgY29uc3QgW21hcCwgc2V0TWFwXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW2hvdmVyZWQsIHNldEhvdmVyZWRdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCBtYXBSZWYgPSB1c2VDYWxsYmFjayhyZWYgPT4ge1xuICAgIGlmIChyZWYpIHtcbiAgICAgIHNldE1hcChyZWYuZ2V0TWFwKCkpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBvbkhvdmVyID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgY29uc3QgZmVhdHVyZSA9IGV2ZW50LmZlYXR1cmVzICYmIGV2ZW50LmZlYXR1cmVzWzBdXG4gICAgY29uc3QgW2xvbmdpdHVkZSwgbGF0aXR1ZGVdID0gZXZlbnQubG5nTGF0XG4gICAgbGV0IGhvdmVySW5mb1xuXG4gICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgIGhvdmVySW5mbyA9IHtcbiAgICAgICAgbG9uZ2l0dWRlLFxuICAgICAgICBsYXRpdHVkZSxcbiAgICAgICAgZmVhdHVyZVxuICAgICAgfVxuICAgIH1cblxuICAgIHNldEhvdmVyZWQoaG92ZXJJbmZvKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbWFwLWNvbnRhaW5lcic+XG4gICAgICA8UmVhY3RNYXBHTFxuICAgICAgICBSZXVzZU1hcHNcbiAgICAgICAgcmVmPXttYXBSZWZ9XG4gICAgICAgIHsuLi52aWV3cG9ydH1cbiAgICAgICAgd2lkdGg9JzEwMCUnXG4gICAgICAgIGhlaWdodD0nMTAwJSdcbiAgICAgICAgbWFwU3R5bGU9J2h0dHBzOi8vb3Blbm1hcHRpbGVzLmdlby5kYXRhLmdvdXYuZnIvc3R5bGVzL29zbS1icmlnaHQvc3R5bGUuanNvbidcbiAgICAgICAgey4uLnNldHRpbmdzfVxuICAgICAgICBpbnRlcmFjdGl2ZUxheWVySWRzPXtbcmVnaW9uTGF5ZXIuaWRdfVxuICAgICAgICBvblZpZXdwb3J0Q2hhbmdlPXtvblZpZXdwb3J0Q2hhbmdlfVxuICAgICAgICBvbkhvdmVyPXtvbkhvdmVyfVxuICAgICAgPlxuXG4gICAgICAgIDxTb3VyY2UgdHlwZT0nZ2VvanNvbicgaWQ9J3JlZ2lvbnMnIGRhdGE9e3JlZ2lvbnN9PlxuICAgICAgICAgIDxMYXllciB7Li4ucmVnaW9uTGF5ZXJ9IC8+XG4gICAgICAgICAgPExheWVyIHsuLi5yZWdpb25Db3VudExheWVyfSAvPlxuICAgICAgICA8L1NvdXJjZT5cblxuICAgICAgICB7aG92ZXJlZCAmJiAoXG4gICAgICAgICAgPFBvcHVwXG4gICAgICAgICAgICBsb25naXR1ZGU9e2hvdmVyZWQubG9uZ2l0dWRlfVxuICAgICAgICAgICAgbGF0aXR1ZGU9e2hvdmVyZWQubGF0aXR1ZGV9XG4gICAgICAgICAgICBjbG9zZUJ1dHRvbj17ZmFsc2V9XG4gICAgICAgICAgICBjbG9zZU9uQ2xpY2s9e2ZhbHNlfVxuICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SG92ZXJlZChudWxsKX1cbiAgICAgICAgICAgIGFuY2hvcj0ndG9wJ1xuICAgICAgICAgICAgb2Zmc2V0VG9wPXsyMH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U3VtVXAgey4uLmhvdmVyZWQuZmVhdHVyZS5wcm9wZXJ0aWVzfSAvPlxuICAgICAgICAgIDwvUG9wdXA+XG4gICAgICAgICl9XG4gICAgICA8L1JlYWN0TWFwR0w+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYXAtY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuTWFwLnByb3BUeXBlcyA9IHtcbiAgdmlld3BvcnQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICByZWdpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIG9uVmlld3BvcnRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwXG4iXX0= */\n/*@ sourceURL=/Users/Theoofe/Living-Data/covid19-dashboard/components/react-map-gl/index.js */"));
};

Map.propTypes = {
  viewport: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  date: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  regions: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  onViewportChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

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
    'circle-radius': ['interpolate', ['linear'], ['number', ['get', 'casConfirmes']], 0, 10, 1000, 100]
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

/***/ }),

/***/ "./components/react-map-gl/region-sumup.js":
false,

/***/ "./components/react-map-gl/sumup.js":
/*!******************************************!*\
  !*** ./components/react-map-gl/sumup.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _confirmed_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirmed-chart */ "./components/confirmed-chart.js");
var _jsxFileName = "/Users/Theoofe/Living-Data/covid19-dashboard/components/react-map-gl/sumup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var RegionSumup = function RegionSumup(_ref) {
  var nom = _ref.nom,
      casConfirmes = _ref.casConfirmes,
      history = _ref.history;
  return __jsx("div", {
    className: "jsx-2853009100" + " " + 'sumup-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2853009100" + " " + 'title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, nom), __jsx("div", {
    className: "jsx-2853009100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, casConfirmes, " cas confirm\xE9s"), __jsx(_confirmed_chart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: JSON.parse(history),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2853009100",
    __self: this
  }, ".sumup-container.jsx-2853009100{font-size:larger;}.title.jsx-2853009100{font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2NvbXBvbmVudHMvcmVhY3QtbWFwLWdsL3N1bXVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlnQixBQUc0QixBQUlBLGlCQUhuQixBQUlBIiwiZmlsZSI6Ii9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2NvbXBvbmVudHMvcmVhY3QtbWFwLWdsL3N1bXVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgQ29uZmlybWVkQ2hhcnQgZnJvbSAnLi4vY29uZmlybWVkLWNoYXJ0J1xuXG5jb25zdCBSZWdpb25TdW11cCA9ICh7bm9tLCBjYXNDb25maXJtZXMsIGhpc3Rvcnl9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPSdzdW11cC1jb250YWluZXInPlxuICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+e25vbX08L2Rpdj5cbiAgICA8ZGl2PntjYXNDb25maXJtZXN9IGNhcyBjb25maXJtw6lzPC9kaXY+XG5cbiAgICA8Q29uZmlybWVkQ2hhcnQgZGF0YT17SlNPTi5wYXJzZShoaXN0b3J5KX0gLz5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnN1bXVwLWNvbnRhaW5lciB7XG4gICAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5SZWdpb25TdW11cC5wcm9wVHlwZXMgPSB7XG4gIG5vbTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjYXNDb25maXJtZXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgaGlzdG9yeTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaW9uU3VtdXBcbiJdfQ== */\n/*@ sourceURL=/Users/Theoofe/Living-Data/covid19-dashboard/components/react-map-gl/sumup.js */"));
};

RegionSumup.propTypes = {
  nom: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  casConfirmes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (RegionSumup);

/***/ })

})
//# sourceMappingURL=index.js.644ecb80e109e3fbaf2b.hot-update.js.map