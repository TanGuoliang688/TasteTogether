"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/mine/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/mine/index!./src/pages/mine/index.tsx":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/mine/index!./src/pages/mine/index.tsx ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/order */ "./src/services/order.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/mine/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");







var menuItems = [{
  id: 1,
  title: '菜单管理',
  desc: '新增、编辑、删除菜品',
  url: '/pages/dishManage/index'
}, {
  id: 2,
  title: '我的优惠券',
  desc: '查看可用优惠券'
}, {
  id: 3,
  title: '联系商家',
  desc: '电话或在线咨询'
}, {
  id: 4,
  title: '关于我们',
  desc: '了解味来小馆'
}];
var MinePage = function MinePage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
    orderCount = _useState2[0],
    setOrderCount = _useState2[1];
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useDidShow)(function () {
    (0,_services_order__WEBPACK_IMPORTED_MODULE_2__.getOrders)().then(function (res) {
      return setOrderCount(res.orders.length);
    }).catch(function (err) {
      return console.error('[MinePage] load order count failed:', err);
    });
  });
  var handleItem = function handleItem(item) {
    if (item.url) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
        url: item.url
      });
    } else {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '功能开发中',
        icon: 'none'
      });
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].page,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].userCard,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Image, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].avatar,
        src: "https://picsum.photos/id/338/200/200",
        mode: "aspectFill"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].userInfo,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].nickname,
          children: "\u98DF\u5BA2"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].subtitle,
          children: "\u6B22\u8FCE\u5149\u4E34\u5473\u6765\u5C0F\u9986"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].orderCountBox,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].orderCountNum,
          children: orderCount
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].orderCountLabel,
          children: "\u7D2F\u8BA1\u8BA2\u5355"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].menuList,
      children: menuItems.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].menuItem,
          onClick: function onClick() {
            return handleItem(item);
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].menuItemInfo,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].menuItemTitle,
              children: item.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].menuItemDesc,
              children: item.desc
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].arrow,
            children: "\u203A"
          })]
        }, item.id);
      })
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (MinePage);

/***/ }),

/***/ "./src/pages/mine/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/mine/index.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mine_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/mine/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/mine/index!./src/pages/mine/index.tsx");


var config = {"navigationBarTitleText":"我的"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mine_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/mine/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mine_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mine_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mine_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mine_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/pages/mine/index.module.scss":
/*!******************************************!*\
  !*** ./src/pages/mine/index.module.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"page":"index-module__page___w_0_P","userCard":"index-module__userCard___HZQDu","avatar":"index-module__avatar___jUaOe","userInfo":"index-module__userInfo___ulJeM","nickname":"index-module__nickname___jPwQZ","subtitle":"index-module__subtitle___CnTV5","orderCountBox":"index-module__orderCountBox___Elr1M","orderCountNum":"index-module__orderCountNum___dkK5F","orderCountLabel":"index-module__orderCountLabel___RgwwY","menuList":"index-module__menuList___m2zFI","menuItem":"index-module__menuItem___nP5p5","menuItemInfo":"index-module__menuItemInfo___mIPIY","menuItemTitle":"index-module__menuItemTitle___pSJlR","menuItemDesc":"index-module__menuItemDesc___IkMWG","arrow":"index-module__arrow___G0Unp"});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/mine/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map