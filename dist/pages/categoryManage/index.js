"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/categoryManage/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/categoryManage/index!./src/pages/categoryManage/index.tsx":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/categoryManage/index!./src/pages/categoryManage/index.tsx ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/menu */ "./src/services/menu.ts");
/* harmony import */ var _services_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/category */ "./src/services/category.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/categoryManage/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");











var CategoryManagePage = function CategoryManagePage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState, 2),
    categories = _useState2[0],
    setCategories = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState3, 2),
    dishCounts = _useState4[0],
    setDishCounts = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState5, 2),
    nameInput = _useState6[0],
    setNameInput = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState7, 2),
    editingId = _useState8[0],
    setEditingId = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState9, 2),
    saving = _useState0[0],
    setSaving = _useState0[1];
  var load = /*#__PURE__*/function () {
    var _ref = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().m(function _callee() {
      var res, counts, _t;
      return (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return (0,_services_menu__WEBPACK_IMPORTED_MODULE_3__.getMenu)();
          case 1:
            res = _context.v;
            setCategories(res.categories);
            counts = {};
            res.dishes.forEach(function (d) {
              counts[d.categoryId] = (counts[d.categoryId] || 0) + 1;
            });
            setDishCounts(counts);
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.error('[CategoryManagePage] load failed:', _t);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '加载分类失败',
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
  var resetEdit = function resetEdit() {
    setEditingId(null);
    setNameInput('');
  };
  var handleSave = /*#__PURE__*/function () {
    var _ref2 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().m(function _callee2() {
      var name, _t2;
      return (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            name = nameInput.trim();
            if (name) {
              _context2.n = 1;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '请输入分类名称',
              icon: 'none'
            });
            return _context2.a(2);
          case 1:
            if (!saving) {
              _context2.n = 2;
              break;
            }
            return _context2.a(2);
          case 2:
            setSaving(true);
            _context2.p = 3;
            _context2.n = 4;
            return (0,_services_category__WEBPACK_IMPORTED_MODULE_4__.saveCategory)(editingId ? {
              id: editingId,
              name: name
            } : {
              name: name
            });
          case 4:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: editingId ? '已保存' : '已新增',
              icon: 'success'
            });
            resetEdit();
            load();
            _context2.n = 6;
            break;
          case 5:
            _context2.p = 5;
            _t2 = _context2.v;
            console.error('[CategoryManagePage] save failed:', _t2);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '保存失败',
              icon: 'none'
            });
          case 6:
            _context2.p = 6;
            setSaving(false);
            return _context2.f(6);
          case 7:
            return _context2.a(2);
        }
      }, _callee2, null, [[3, 5, 6, 7]]);
    }));
    return function handleSave() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleEdit = function handleEdit(cat) {
    setEditingId(cat.id);
    setNameInput(cat.name);
  };
  var handleDelete = function handleDelete(cat) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
      title: '删除分类',
      content: "\u786E\u5B9A\u5220\u9664\u300C".concat(cat.name, "\u300D\u5417\uFF1F"),
      confirmColor: '#f53f3f',
      success: function () {
        var _success = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().m(function _callee3(res) {
          var _t3;
          return (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().w(function (_context3) {
            while (1) switch (_context3.p = _context3.n) {
              case 0:
                if (res.confirm) {
                  _context3.n = 1;
                  break;
                }
                return _context3.a(2);
              case 1:
                _context3.p = 1;
                _context3.n = 2;
                return (0,_services_category__WEBPACK_IMPORTED_MODULE_4__.deleteCategory)(cat.id);
              case 2:
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                  title: '已删除',
                  icon: 'success'
                });
                if (editingId === cat.id) resetEdit();
                load();
                _context3.n = 4;
                break;
              case 3:
                _context3.p = 3;
                _t3 = _context3.v;
                console.error('[CategoryManagePage] delete failed:', _t3);
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                  title: (_t3 === null || _t3 === void 0 ? void 0 : _t3.message) || '删除失败',
                  icon: 'none'
                });
              case 4:
                return _context3.a(2);
            }
          }, _callee3, null, [[1, 3]]);
        }));
        function success(_x) {
          return _success.apply(this, arguments);
        }
        return success;
      }()
    });
  };
  var swapSort = /*#__PURE__*/function () {
    var _ref3 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().m(function _callee4(fromIndex, toIndex) {
      var a, b, _t4;
      return (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            a = categories[fromIndex];
            b = categories[toIndex];
            if (!(!a || !b)) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2);
          case 1:
            _context4.p = 1;
            _context4.n = 2;
            return (0,_services_category__WEBPACK_IMPORTED_MODULE_4__.updateCategorySort)(a.id, b.sort);
          case 2:
            _context4.n = 3;
            return (0,_services_category__WEBPACK_IMPORTED_MODULE_4__.updateCategorySort)(b.id, a.sort);
          case 3:
            load();
            _context4.n = 5;
            break;
          case 4:
            _context4.p = 4;
            _t4 = _context4.v;
            console.error('[CategoryManagePage] reorder failed:', _t4);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '排序失败',
              icon: 'none'
            });
          case 5:
            return _context4.a(2);
        }
      }, _callee4, null, [[1, 4]]);
    }));
    return function swapSort(_x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleMoveUp = function handleMoveUp(index) {
    if (index <= 0) return;
    swapSort(index, index - 1);
  };
  var handleMoveDown = function handleMoveDown(index) {
    if (index >= categories.length - 1) return;
    swapSort(index, index + 1);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].page,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].formBar,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Input, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].input,
        value: nameInput,
        placeholder: "\u8F93\u5165\u5206\u7C7B\u540D\u79F0",
        placeholderClass: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].placeholder,
        onInput: function onInput(e) {
          return setNameInput(e.detail.value);
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].submitBtn,
        onClick: handleSave,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].submitText,
          children: saving ? '保存中...' : editingId ? '保存' : '新增'
        })
      })]
    }), editingId && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].cancelEdit,
      onClick: resetEdit,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].cancelEditText,
        children: "\u53D6\u6D88\u7F16\u8F91"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.ScrollView, {
      scrollY: true,
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].list,
      children: [categories.map(function (cat, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].orderBtns,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].orderBtn, index === 0 && _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].orderBtnDisabled),
              onClick: function onClick() {
                return handleMoveUp(index);
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].orderBtnText,
                children: "\u2191"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].orderBtn, index === categories.length - 1 && _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].orderBtnDisabled),
              onClick: function onClick() {
                return handleMoveDown(index);
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].orderBtnText,
                children: "\u2193"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].info,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].name,
              children: cat.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].count,
              children: [dishCounts[cat.id] || 0, " \u9053\u83DC\u54C1"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].actions,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].editBtn,
              onClick: function onClick() {
                return handleEdit(cat);
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].editText,
                children: "\u7F16\u8F91"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].deleteBtn,
              onClick: function onClick() {
                return handleDelete(cat);
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].deleteText,
                children: "\u5220\u9664"
              })
            })]
          })]
        }, cat.id);
      }), categories.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].empty,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].emptyText,
          children: "\u6682\u65E0\u5206\u7C7B\uFF0C\u8BF7\u65B0\u589E"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].listBottom
      })]
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (CategoryManagePage);

/***/ }),

/***/ "./src/pages/categoryManage/index.tsx":
/*!********************************************!*\
  !*** ./src/pages/categoryManage/index.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_categoryManage_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/categoryManage/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/categoryManage/index!./src/pages/categoryManage/index.tsx");


var config = {"navigationBarTitleText":"分类管理"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_categoryManage_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/categoryManage/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_categoryManage_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_categoryManage_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_categoryManage_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_categoryManage_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/services/category.ts":
/*!**********************************!*\
  !*** ./src/services/category.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteCategory": function() { return /* binding */ deleteCategory; },
/* harmony export */   "saveCategory": function() { return /* binding */ saveCategory; },
/* harmony export */   "updateCategorySort": function() { return /* binding */ updateCategorySort; }
/* harmony export */ });
/* harmony import */ var _cloud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cloud */ "./src/services/cloud.ts");

function saveCategory(data) {
  return (0,_cloud__WEBPACK_IMPORTED_MODULE_0__.callFunction)('saveCategory', data);
}
function deleteCategory(id) {
  return (0,_cloud__WEBPACK_IMPORTED_MODULE_0__.callFunction)('deleteCategory', {
    id: id
  });
}
function updateCategorySort(id, sort) {
  return (0,_cloud__WEBPACK_IMPORTED_MODULE_0__.callFunction)('updateCategorySort', {
    id: id,
    sort: sort
  });
}

/***/ }),

/***/ "./src/pages/categoryManage/index.module.scss":
/*!****************************************************!*\
  !*** ./src/pages/categoryManage/index.module.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"page":"index-module__page___rpNax","formBar":"index-module__formBar___d806c","input":"index-module__input____6My3","placeholder":"index-module__placeholder___OzP2y","submitBtn":"index-module__submitBtn___EoMng","submitText":"index-module__submitText___z4SK4","cancelEdit":"index-module__cancelEdit___IdVOJ","cancelEditText":"index-module__cancelEditText___pP94Q","list":"index-module__list___fEksM","row":"index-module__row___szikn","orderBtns":"index-module__orderBtns___Znj7f","orderBtn":"index-module__orderBtn___ggdYS","orderBtnDisabled":"index-module__orderBtnDisabled___Dba0j","orderBtnText":"index-module__orderBtnText___TQ0XI","info":"index-module__info___odys2","name":"index-module__name___NXgki","count":"index-module__count___ISQk3","actions":"index-module__actions___bDnOT","editBtn":"index-module__editBtn___Wg8J4","deleteBtn":"index-module__deleteBtn___Ku3cB","editText":"index-module__editText___shiQb","deleteText":"index-module__deleteText___ttKg7","empty":"index-module__empty___zjcid","emptyText":"index-module__emptyText___YECEr","listBottom":"index-module__listBottom___d2UHh"});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/categoryManage/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map