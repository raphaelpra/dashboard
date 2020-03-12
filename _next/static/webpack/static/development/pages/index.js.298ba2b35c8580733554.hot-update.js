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
/* harmony import */ var _region_sumup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./region-sumup */ "./components/react-map-gl/region-sumup.js");
/* harmony import */ var _layers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layers */ "./components/react-map-gl/layers.js");


var _jsxFileName = "/Users/jerome/opencovid19-fr/dashboard/components/react-map-gl/index.js";

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
  }, __jsx(_region_sumup__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hovered.feature.properties, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1501121386",
    __self: this
  }, ".map-container.jsx-1501121386{position:relative;width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJvbWUvb3BlbmNvdmlkMTktZnIvZGFzaGJvYXJkL2NvbXBvbmVudHMvcmVhY3QtbWFwLWdsL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFa0IsQUFHNkIsa0JBQ1AsV0FDQyxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9qZXJvbWUvb3BlbmNvdmlkMTktZnIvZGFzaGJvYXJkL2NvbXBvbmVudHMvcmVhY3QtbWFwLWdsL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdE1hcEdMLCB7U291cmNlLCBMYXllciwgUG9wdXB9IGZyb20gJ3JlYWN0LW1hcC1nbCdcblxuaW1wb3J0IFJlZ2lvblN1bXVwIGZyb20gJy4vcmVnaW9uLXN1bXVwJ1xuXG5pbXBvcnQge3JlZ2lvbkxheWVyLCByZWdpb25Db3VudExheWVyfSBmcm9tICcuL2xheWVycydcblxuY29uc3Qgc2V0dGluZ3MgPSB7XG4gIG1heFpvb206IDE2XG59XG5cbmNvbnN0IE1hcCA9ICh7dmlld3BvcnQsIHJlZ2lvbnMsIG9uVmlld3BvcnRDaGFuZ2V9KSA9PiB7XG4gIGNvbnN0IFttYXAsIHNldE1hcF0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFtob3ZlcmVkLCBzZXRIb3ZlcmVkXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgY29uc3QgbWFwUmVmID0gdXNlQ2FsbGJhY2socmVmID0+IHtcbiAgICBpZiAocmVmKSB7XG4gICAgICBzZXRNYXAocmVmLmdldE1hcCgpKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgY29uc3Qgb25Ib3ZlciA9IGV2ZW50ID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGNvbnN0IGZlYXR1cmUgPSBldmVudC5mZWF0dXJlcyAmJiBldmVudC5mZWF0dXJlc1swXVxuICAgIGNvbnN0IFtsb25naXR1ZGUsIGxhdGl0dWRlXSA9IGV2ZW50LmxuZ0xhdFxuICAgIGxldCBob3ZlckluZm9cblxuICAgIGlmIChmZWF0dXJlKSB7XG4gICAgICBob3ZlckluZm8gPSB7XG4gICAgICAgIGxvbmdpdHVkZSxcbiAgICAgICAgbGF0aXR1ZGUsXG4gICAgICAgIGZlYXR1cmVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRIb3ZlcmVkKGhvdmVySW5mbylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J21hcC1jb250YWluZXInPlxuICAgICAgPFJlYWN0TWFwR0xcbiAgICAgICAgUmV1c2VNYXBzXG4gICAgICAgIHJlZj17bWFwUmVmfVxuICAgICAgICB7Li4udmlld3BvcnR9XG4gICAgICAgIHdpZHRoPScxMDAlJ1xuICAgICAgICBoZWlnaHQ9JzEwMCUnXG4gICAgICAgIG1hcFN0eWxlPSdodHRwczovL29wZW5tYXB0aWxlcy5nZW8uZGF0YS5nb3V2LmZyL3N0eWxlcy9vc20tYnJpZ2h0L3N0eWxlLmpzb24nXG4gICAgICAgIHsuLi5zZXR0aW5nc31cbiAgICAgICAgaW50ZXJhY3RpdmVMYXllcklkcz17W3JlZ2lvbkxheWVyLmlkXX1cbiAgICAgICAgb25WaWV3cG9ydENoYW5nZT17b25WaWV3cG9ydENoYW5nZX1cbiAgICAgICAgb25Ib3Zlcj17b25Ib3Zlcn1cbiAgICAgID5cblxuICAgICAgICA8U291cmNlIHR5cGU9J2dlb2pzb24nIGlkPSdyZWdpb25zJyBkYXRhPXtyZWdpb25zfT5cbiAgICAgICAgICA8TGF5ZXIgey4uLnJlZ2lvbkxheWVyfSAvPlxuICAgICAgICAgIDxMYXllciB7Li4ucmVnaW9uQ291bnRMYXllcn0gLz5cbiAgICAgICAgPC9Tb3VyY2U+XG5cbiAgICAgICAge2hvdmVyZWQgJiYgKFxuICAgICAgICAgIDxQb3B1cFxuICAgICAgICAgICAgbG9uZ2l0dWRlPXtob3ZlcmVkLmxvbmdpdHVkZX1cbiAgICAgICAgICAgIGxhdGl0dWRlPXtob3ZlcmVkLmxhdGl0dWRlfVxuICAgICAgICAgICAgY2xvc2VCdXR0b249e2ZhbHNlfVxuICAgICAgICAgICAgY2xvc2VPbkNsaWNrPXtmYWxzZX1cbiAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldEhvdmVyZWQobnVsbCl9XG4gICAgICAgICAgICBhbmNob3I9J3RvcCdcbiAgICAgICAgICAgIG9mZnNldFRvcD17MjB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFJlZ2lvblN1bXVwIHsuLi5ob3ZlcmVkLmZlYXR1cmUucHJvcGVydGllc30gLz5cbiAgICAgICAgICA8L1BvcHVwPlxuICAgICAgICApfVxuICAgICAgPC9SZWFjdE1hcEdMPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFwLWNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbk1hcC5wcm9wVHlwZXMgPSB7XG4gIHZpZXdwb3J0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcmVnaW9uczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBvblZpZXdwb3J0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcFxuIl19 */\n/*@ sourceURL=/Users/jerome/opencovid19-fr/dashboard/components/react-map-gl/index.js */"));
};

Map.propTypes = {
  viewport: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  date: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  regions: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  onViewportChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ })

})
//# sourceMappingURL=index.js.298ba2b35c8580733554.hot-update.js.map