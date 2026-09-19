"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/order/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/order/index!./src/pages/order/index.tsx":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/order/index!./src/pages/order/index.tsx ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/order */ "./src/services/order.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/order/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");










var filters = [{
  key: 'all',
  label: '全部'
}, {
  key: 'pending',
  label: '进行中'
}, {
  key: 'completed',
  label: '已完成'
}, {
  key: 'cancelled',
  label: '已取消'
}];
var statusText = {
  pending: '进行中',
  completed: '已完成',
  cancelled: '已取消'
};
function formatTime(ts) {
  var d = new Date(ts);
  var pad = function pad(n) {
    return n < 10 ? "0".concat(n) : "".concat(n);
  };
  return "".concat(d.getFullYear(), "-").concat(pad(d.getMonth() + 1), "-").concat(pad(d.getDate()), " ").concat(pad(d.getHours()), ":").concat(pad(d.getMinutes()));
}
var OrderPage = function OrderPage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all'),
    _useState2 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState3, 2),
    orders = _useState4[0],
    setOrders = _useState4[1];
  var load = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/function () {
    var _ref = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])(/*#__PURE__*/(0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().m(function _callee(key) {
      var status, res, _t;
      return (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            status = key === 'all' ? undefined : key;
            _context.n = 1;
            return (0,_services_order__WEBPACK_IMPORTED_MODULE_3__.getOrders)(status);
          case 1:
            res = _context.v;
            setOrders(res.orders);
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.error('[OrderPage] load orders failed:', _t);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '加载订单失败',
              icon: 'none'
            });
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), []);
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useDidShow)(function () {
    load(active);
  });
  var handleFilter = function handleFilter(key) {
    setActive(key);
    load(key);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].page,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filters,
      children: filters.map(function (f) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterItem, active === f.key && _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterItemActive),
          onClick: function onClick() {
            return handleFilter(f.key);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterText, active === f.key && _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterTextActive),
            children: f.label
          })
        }, f.key);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.ScrollView, {
      scrollY: true,
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].list,
      children: orders.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].empty,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].emptyText,
          children: "\u6682\u65E0\u8BA2\u5355"
        })
      }) : orders.map(function (order) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].orderCard,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].orderHeader,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].orderNo,
              children: order.orderNo
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
              className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].orderStatus, order.status === 'pending' && _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].statusPending, order.status === 'completed' && _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].statusCompleted, order.status === 'cancelled' && _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].statusCancelled),
              children: statusText[order.status]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].orderBody,
            children: order.items.map(function (item) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].orderItem,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].orderItemName,
                  children: item.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].orderItemQty,
                  children: ["x", item.quantity]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].orderItemPrice,
                  children: ["\xA5", item.price]
                })]
              }, item.dishId);
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].orderFooter,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].tableNo,
              children: ["\u684C\u53F7 ", order.tableNo]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].orderTotalWrap,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].orderTotalLabel,
                children: "\u5408\u8BA1"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].orderTotalPrice,
                children: ["\xA5", order.totalPrice]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].orderTime,
            children: formatTime(order.createTime)
          })]
        }, order.id);
      })
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (OrderPage);

/***/ }),

/***/ "./src/pages/order/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/order/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_order_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/order/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/order/index!./src/pages/order/index.tsx");


var config = {"navigationBarTitleText":"订单"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_order_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/order/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_order_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_order_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_order_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_order_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/pages/order/index.module.scss":
/*!*******************************************!*\
  !*** ./src/pages/order/index.module.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"page":"index-module__page___iIRF5","filters":"index-module__filters___pRVtF","filterItem":"index-module__filterItem___ezbqL","filterItemActive":"index-module__filterItemActive___nmoN0","filterText":"index-module__filterText___FXo5T","filterTextActive":"index-module__filterTextActive___d5io7","list":"index-module__list___XfnUw","empty":"index-module__empty___u2fGv","emptyText":"index-module__emptyText___JP9sD","orderCard":"index-module__orderCard___ERfvW","orderHeader":"index-module__orderHeader___i1JTP","orderNo":"index-module__orderNo___ko6E8","orderStatus":"index-module__orderStatus___sNEQb","statusPending":"index-module__statusPending___tBd1P","statusCompleted":"index-module__statusCompleted___gumw2","statusCancelled":"index-module__statusCancelled___c2Ci4","orderBody":"index-module__orderBody___mrfC3","orderItem":"index-module__orderItem___yr_gA","orderItemName":"index-module__orderItemName___eH5dL","orderItemQty":"index-module__orderItemQty___RSgsG","orderItemPrice":"index-module__orderItemPrice___rcgf7","orderFooter":"index-module__orderFooter___jDHy2","tableNo":"index-module__tableNo___tuzsb","orderTotalWrap":"index-module__orderTotalWrap___JYqUL","orderTotalLabel":"index-module__orderTotalLabel___cvJMi","orderTotalPrice":"index-module__orderTotalPrice___AR2yd","orderTime":"index-module__orderTime___ufVRc"});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/order/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map