"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/dishManage/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/dishManage/index!./src/pages/dishManage/index.tsx":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/dishManage/index!./src/pages/dishManage/index.tsx ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/menu */ "./src/services/menu.ts");
/* harmony import */ var _services_dish__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/dish */ "./src/services/dish.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/dishManage/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");










var DishManagePage = function DishManagePage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
    categories = _useState2[0],
    setCategories = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState3, 2),
    dishes = _useState4[0],
    setDishes = _useState4[1];
  var load = /*#__PURE__*/function () {
    var _ref = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])(/*#__PURE__*/(0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().m(function _callee() {
      var res, _t;
      return (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return (0,_services_menu__WEBPACK_IMPORTED_MODULE_2__.getMenu)();
          case 1:
            res = _context.v;
            setCategories(res.categories);
            setDishes(res.dishes);
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.error('[DishManagePage] load dishes failed:', _t);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '加载菜单失败',
              icon: 'none'
            });
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function load() {
      return _ref.apply(this, arguments);
    };
  }();
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useDidShow)(function () {
    load();
  });
  var handleAdd = function handleAdd() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: '/pages/dishEdit/index'
    });
  };
  var handleGoCategory = function handleGoCategory() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: '/pages/categoryManage/index'
    });
  };
  var handleEdit = function handleEdit(id) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: "/pages/dishEdit/index?id=".concat(id)
    });
  };
  var handleDelete = function handleDelete(dish) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
      title: '删除菜品',
      content: "\u786E\u5B9A\u5220\u9664\u300C".concat(dish.name, "\u300D\u5417\uFF1F"),
      confirmColor: '#f53f3f',
      success: function () {
        var _success = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])(/*#__PURE__*/(0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().m(function _callee2(res) {
          var _t2;
          return (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().w(function (_context2) {
            while (1) switch (_context2.p = _context2.n) {
              case 0:
                if (res.confirm) {
                  _context2.n = 1;
                  break;
                }
                return _context2.a(2);
              case 1:
                _context2.p = 1;
                _context2.n = 2;
                return (0,_services_dish__WEBPACK_IMPORTED_MODULE_3__.deleteDish)(dish.id);
              case 2:
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                  title: '已删除',
                  icon: 'success'
                });
                load();
                _context2.n = 4;
                break;
              case 3:
                _context2.p = 3;
                _t2 = _context2.v;
                console.error('[DishManagePage] delete dish failed:', _t2);
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                  title: '删除失败',
                  icon: 'none'
                });
              case 4:
                return _context2.a(2);
            }
          }, _callee2, null, [[1, 3]]);
        }));
        function success(_x) {
          return _success.apply(this, arguments);
        }
        return success;
      }()
    });
  };
  var handleToggleSale = /*#__PURE__*/function () {
    var _ref2 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])(/*#__PURE__*/(0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().m(function _callee3(dish, value) {
      var _t3;
      return (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            _context3.n = 1;
            return (0,_services_dish__WEBPACK_IMPORTED_MODULE_3__.updateDishStatus)(dish.id, {
              onSale: value
            });
          case 1:
            load();
            _context3.n = 3;
            break;
          case 2:
            _context3.p = 2;
            _t3 = _context3.v;
            console.error('[DishManagePage] update onSale failed:', _t3);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '操作失败',
              icon: 'none'
            });
          case 3:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 2]]);
    }));
    return function handleToggleSale(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleToggleSoldOut = /*#__PURE__*/function () {
    var _ref3 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])(/*#__PURE__*/(0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().m(function _callee4(dish, value) {
      var _t4;
      return (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            _context4.n = 1;
            return (0,_services_dish__WEBPACK_IMPORTED_MODULE_3__.updateDishStatus)(dish.id, {
              soldOut: value
            });
          case 1:
            load();
            _context4.n = 3;
            break;
          case 2:
            _context4.p = 2;
            _t4 = _context4.v;
            console.error('[DishManagePage] update soldOut failed:', _t4);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '操作失败',
              icon: 'none'
            });
          case 3:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 2]]);
    }));
    return function handleToggleSoldOut(_x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].page,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].topBar,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].total,
        children: ["\u5171 ", dishes.length, " \u9053\u83DC\u54C1"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].topActions,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].catBtn,
          onClick: handleGoCategory,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].catBtnText,
            children: "\u5206\u7C7B\u7BA1\u7406"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].addBtn,
          onClick: handleAdd,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].addBtnText,
            children: "+ \u65B0\u589E\u83DC\u54C1"
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.ScrollView, {
      scrollY: true,
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].list,
      children: [categories.map(function (cat) {
        var list = dishes.filter(function (d) {
          return d.categoryId === cat.id;
        });
        if (list.length === 0) return null;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].section,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].sectionTitle,
            children: cat.name
          }), list.map(function (dish) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].dishRow,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].dishMain,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Image, {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].dishImage,
                  src: dish.image,
                  mode: "aspectFill"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].dishInfo,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
                    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].dishNameRow,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].dishName,
                      children: dish.name
                    }), dish.soldOut && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].badgeSoldOut,
                      children: "\u552E\u7F44"
                    }), dish.onSale === false && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].badgeOff,
                      children: "\u5DF2\u4E0B\u67B6"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].dishPrice,
                    children: ["\xA5", dish.price]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].actions,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
                    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].editBtn,
                    onClick: function onClick() {
                      return handleEdit(dish.id);
                    },
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].editText,
                      children: "\u7F16\u8F91"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
                    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].deleteBtn,
                    onClick: function onClick() {
                      return handleDelete(dish);
                    },
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].deleteText,
                      children: "\u5220\u9664"
                    })
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].statusRow,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].switchItem,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].switchLabel,
                    children: "\u4E0A\u67B6"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Switch, {
                    checked: dish.onSale !== false,
                    color: "#ff6b35",
                    onChange: function onChange(e) {
                      return handleToggleSale(dish, e.detail.value);
                    }
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].switchItem,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].switchLabel,
                    children: "\u552E\u7F44"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Switch, {
                    checked: !!dish.soldOut,
                    color: "#f53f3f",
                    onChange: function onChange(e) {
                      return handleToggleSoldOut(dish, e.detail.value);
                    }
                  })]
                })]
              })]
            }, dish.id);
          })]
        }, cat.id);
      }), dishes.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].empty,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].emptyText,
          children: "\u6682\u65E0\u83DC\u54C1"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].listBottom
      })]
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (DishManagePage);

/***/ }),

/***/ "./src/pages/dishManage/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/dishManage/index.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dishManage_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/dishManage/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/dishManage/index!./src/pages/dishManage/index.tsx");


var config = {"navigationBarTitleText":"菜单管理"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dishManage_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/dishManage/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dishManage_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dishManage_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dishManage_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dishManage_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/pages/dishManage/index.module.scss":
/*!************************************************!*\
  !*** ./src/pages/dishManage/index.module.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"page":"index-module__page___RYY9x","topBar":"index-module__topBar___KybvK","total":"index-module__total___bjIaL","topActions":"index-module__topActions___FUV7S","addBtn":"index-module__addBtn___mbYC_","addBtnText":"index-module__addBtnText___SBWKw","catBtn":"index-module__catBtn___qC5Rt","catBtnText":"index-module__catBtnText___GjJ7j","list":"index-module__list___ZGNFp","section":"index-module__section___FG_h8","sectionTitle":"index-module__sectionTitle___u3ku4","dishRow":"index-module__dishRow___NiDro","dishMain":"index-module__dishMain___XoQvQ","dishImage":"index-module__dishImage___n0TeU","dishInfo":"index-module__dishInfo___MVmYy","dishNameRow":"index-module__dishNameRow___TejH2","dishName":"index-module__dishName___OvY9G","badgeSoldOut":"index-module__badgeSoldOut___T8J6y","badgeOff":"index-module__badgeOff___zBCsQ","dishPrice":"index-module__dishPrice___MDeF3","statusRow":"index-module__statusRow___iftaQ","switchItem":"index-module__switchItem___FhtBb","switchLabel":"index-module__switchLabel___gyVEk","actions":"index-module__actions___ljYJo","editBtn":"index-module__editBtn___dQ_cE","deleteBtn":"index-module__deleteBtn____oSVq","editText":"index-module__editText____IDhI","deleteText":"index-module__deleteText___Lc0wO","empty":"index-module__empty___jM6bN","emptyText":"index-module__emptyText___guVPL","listBottom":"index-module__listBottom___xmwMu"});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/dishManage/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map