"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/dishDetail/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/dishDetail/index!./src/pages/dishDetail/index.tsx":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/dishDetail/index!./src/pages/dishDetail/index.tsx ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_QuantityStepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/QuantityStepper */ "./src/components/QuantityStepper/index.tsx");
/* harmony import */ var _services_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/menu */ "./src/services/menu.ts");
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/cart */ "./src/store/cart.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/dishDetail/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");









var DishDetailPage = function DishDetailPage() {
  var router = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState, 2),
    dish = _useState2[0],
    setDish = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState4 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState3, 2),
    qty = _useState4[0],
    setQty = _useState4[1];
  var addItemWithQuantity = (0,_store_cart__WEBPACK_IMPORTED_MODULE_4__.useCartStore)(function (s) {
    return s.addItemWithQuantity;
  });
  var dishId = router.params.id;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!dishId) return;
    (0,_services_menu__WEBPACK_IMPORTED_MODULE_3__.getMenu)().then(function (res) {
      var found = res.dishes.find(function (d) {
        return d.id === dishId;
      });
      if (found) setDish(found);
    }).catch(function (err) {
      console.error('[DishDetailPage] load dish failed:', err);
    });
  }, [dishId]);
  var handleAdd = function handleAdd() {
    if (!dish) return;
    addItemWithQuantity(dish, qty);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
      title: '已加入购物车',
      icon: 'success'
    });
    setTimeout(function () {
      return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack();
    }, 1200);
  };
  if (!dish) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].loading,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].loadingText,
        children: "\u52A0\u8F7D\u4E2D..."
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].page,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].image,
      src: dish.image,
      mode: "aspectFill"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].body,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].titleRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].name,
          children: dish.name
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].priceWrap,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].priceSymbol,
            children: "\xA5"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].price,
            children: dish.price
          })]
        })]
      }), dish.tags && dish.tags.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].tags,
        children: dish.tags.map(function (tag) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].tag,
            children: tag
          }, tag);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].desc,
        children: dish.description
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].sales,
        children: ["\u6708\u552E ", dish.sales, " \u4EFD"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].footer,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].qtyBox,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].qtyLabel,
          children: "\u6570\u91CF"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_QuantityStepper__WEBPACK_IMPORTED_MODULE_2__["default"], {
          value: qty,
          onDecrease: function onDecrease() {
            return setQty(function (n) {
              return Math.max(1, n - 1);
            });
          },
          onIncrease: function onIncrease() {
            return setQty(function (n) {
              return n + 1;
            });
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].addBtn,
        onClick: handleAdd,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].addText,
          children: "\u52A0\u5165\u8D2D\u7269\u8F66"
        })
      })]
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (DishDetailPage);

/***/ }),

/***/ "./src/pages/dishDetail/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/dishDetail/index.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dishDetail_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/dishDetail/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/dishDetail/index!./src/pages/dishDetail/index.tsx");


var config = {"navigationBarTitleText":"菜品详情"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dishDetail_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/dishDetail/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dishDetail_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dishDetail_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dishDetail_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dishDetail_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/pages/dishDetail/index.module.scss":
/*!************************************************!*\
  !*** ./src/pages/dishDetail/index.module.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"page":"index-module__page___POs9F","loading":"index-module__loading___CujaA","loadingText":"index-module__loadingText___rDcJU","image":"index-module__image___EcLPN","body":"index-module__body___S_MrP","titleRow":"index-module__titleRow___TtrgE","name":"index-module__name___LzkMq","priceWrap":"index-module__priceWrap___YSZUX","priceSymbol":"index-module__priceSymbol___z0eQ6","price":"index-module__price___LsOIg","tags":"index-module__tags___AeBt6","tag":"index-module__tag___bixzy","desc":"index-module__desc___p3Sfd","sales":"index-module__sales___dcBLL","footer":"index-module__footer___S2IoK","qtyBox":"index-module__qtyBox___pGbzX","qtyLabel":"index-module__qtyLabel___ENnAu","addBtn":"index-module__addBtn___Zhw41","addText":"index-module__addText___edxtT"});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/dishDetail/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map