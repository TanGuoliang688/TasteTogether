"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/dishEdit/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/dishEdit/index!./src/pages/dishEdit/index.tsx":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/dishEdit/index!./src/pages/dishEdit/index.tsx ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/menu */ "./src/services/menu.ts");
/* harmony import */ var _services_dish__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/dish */ "./src/services/dish.ts");
/* harmony import */ var _services_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/upload */ "./src/services/upload.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/dishEdit/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");











var DEFAULT_IMAGE = 'https://picsum.photos/id/292/300/300';
var DishEditPage = function DishEditPage() {
  var _categories$selectedI;
  var router = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var editId = router.params.id;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState, 2),
    categories = _useState2[0],
    setCategories = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState3, 2),
    name = _useState4[0],
    setName = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState5, 2),
    price = _useState6[0],
    setPrice = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState7, 2),
    categoryId = _useState8[0],
    setCategoryId = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState0 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState9, 2),
    description = _useState0[0],
    setDescription = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState1, 2),
    image = _useState10[0],
    setImage = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState11, 2),
    submitting = _useState12[0],
    setSubmitting = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState13, 2),
    uploading = _useState14[0],
    setUploading = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState16 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState15, 2),
    uploadProgress = _useState16[0],
    setUploadProgress = _useState16[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_services_menu__WEBPACK_IMPORTED_MODULE_2__.getMenu)().then(function (res) {
      setCategories(res.categories);
      if (res.categories.length > 0 && !categoryId) {
        setCategoryId(res.categories[0].id);
      }
      if (editId) {
        var dish = res.dishes.find(function (d) {
          return d.id === editId;
        });
        if (dish) {
          setName(dish.name);
          setPrice(String(dish.price));
          setCategoryId(dish.categoryId);
          setDescription(dish.description);
          setImage(dish.image);
        }
      }
    }).catch(function (err) {
      console.error('[DishEditPage] load failed:', err);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editId]);
  var selectedIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var idx = categories.findIndex(function (c) {
      return c.id === categoryId;
    });
    return idx < 0 ? 0 : idx;
  }, [categories, categoryId]);
  var handleChooseImage = /*#__PURE__*/function () {
    var _ref = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().m(function _callee() {
      var path, res, uploaded, _t, _t2;
      return (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!uploading) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            _context.p = 1;
            _context.n = 2;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().chooseImage({
              count: 1,
              sizeType: ['compressed'],
              sourceType: ['album', 'camera']
            });
          case 2:
            res = _context.v;
            path = res.tempFilePaths[0];
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            return _context.a(2);
          case 4:
            if (path) {
              _context.n = 5;
              break;
            }
            return _context.a(2);
          case 5:
            setUploading(true);
            setUploadProgress(0);
            _context.p = 6;
            _context.n = 7;
            return (0,_services_upload__WEBPACK_IMPORTED_MODULE_4__.uploadImage)(path, "dish_".concat(Date.now(), ".png"), setUploadProgress);
          case 7:
            uploaded = _context.v;
            setImage(uploaded);
            setUploadProgress(100);
            _context.n = 9;
            break;
          case 8:
            _context.p = 8;
            _t2 = _context.v;
            console.error('[DishEditPage] upload image failed:', _t2);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '上传失败',
              icon: 'none'
            });
          case 9:
            _context.p = 9;
            setUploading(false);
            return _context.f(9);
          case 10:
            return _context.a(2);
        }
      }, _callee, null, [[6, 8, 9, 10], [1, 3]]);
    }));
    return function handleChooseImage() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleSave = /*#__PURE__*/function () {
    var _ref2 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().m(function _callee2() {
      var priceNum, _t3;
      return (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            priceNum = Number(price);
            if (name.trim()) {
              _context2.n = 1;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '请输入菜品名称',
              icon: 'none'
            });
            return _context2.a(2);
          case 1:
            if (!(!price || isNaN(priceNum) || priceNum <= 0)) {
              _context2.n = 2;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '请输入正确的价格',
              icon: 'none'
            });
            return _context2.a(2);
          case 2:
            if (categoryId) {
              _context2.n = 3;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '请选择分类',
              icon: 'none'
            });
            return _context2.a(2);
          case 3:
            if (!submitting) {
              _context2.n = 4;
              break;
            }
            return _context2.a(2);
          case 4:
            setSubmitting(true);
            _context2.p = 5;
            _context2.n = 6;
            return (0,_services_dish__WEBPACK_IMPORTED_MODULE_3__.saveDish)({
              id: editId,
              name: name.trim(),
              price: priceNum,
              categoryId: categoryId,
              description: description.trim(),
              image: image || DEFAULT_IMAGE
            });
          case 6:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '保存成功',
              icon: 'success'
            });
            setTimeout(function () {
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack();
            }, 1000);
            _context2.n = 8;
            break;
          case 7:
            _context2.p = 7;
            _t3 = _context2.v;
            console.error('[DishEditPage] save failed:', _t3);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '保存失败',
              icon: 'none'
            });
          case 8:
            _context2.p = 8;
            setSubmitting(false);
            return _context2.f(8);
          case 9:
            return _context2.a(2);
        }
      }, _callee2, null, [[5, 7, 8, 9]]);
    }));
    return function handleSave() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].page,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].formCard,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].imageSection,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Image, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].imagePreview,
          src: image || DEFAULT_IMAGE,
          mode: "aspectFill"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].chooseBtn,
          onClick: handleChooseImage,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].chooseBtnText,
            children: uploading ? '上传中...' : '选择图片'
          })
        }), uploading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].progressWrap,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].progressTrack,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].progressBar,
              style: {
                width: "".concat(uploadProgress, "%")
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].progressText,
            children: [uploadProgress, "%"]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].field,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].label,
          children: "\u83DC\u54C1\u540D\u79F0"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Input, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].input,
          value: name,
          placeholder: "\u8BF7\u8F93\u5165\u83DC\u54C1\u540D\u79F0",
          placeholderClass: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].placeholder,
          onInput: function onInput(e) {
            return setName(e.detail.value);
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].field,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].label,
          children: "\u4EF7\u683C\uFF08\u5143\uFF09"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Input, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].input,
          type: "digit",
          value: price,
          placeholder: "\u8BF7\u8F93\u5165\u4EF7\u683C",
          placeholderClass: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].placeholder,
          onInput: function onInput(e) {
            return setPrice(e.detail.value);
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].field,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].label,
          children: "\u6240\u5C5E\u5206\u7C7B"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Picker, {
          mode: "selector",
          range: categories,
          rangeKey: "name",
          value: selectedIndex,
          onChange: function onChange(e) {
            var cat = categories[Number(e.detail.value)];
            if (cat) setCategoryId(cat.id);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].pickerValue,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
              children: ((_categories$selectedI = categories[selectedIndex]) === null || _categories$selectedI === void 0 ? void 0 : _categories$selectedI.name) || '请选择分类'
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].pickerArrow,
              children: "\u203A"
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].field,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].label,
          children: "\u83DC\u54C1\u63CF\u8FF0"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Textarea, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].textarea,
          value: description,
          placeholder: "\u8BF7\u8F93\u5165\u83DC\u54C1\u63CF\u8FF0",
          placeholderClass: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].placeholder,
          maxlength: 100,
          onInput: function onInput(e) {
            return setDescription(e.detail.value);
          }
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].footer,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].saveBtn,
        onClick: handleSave,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].saveText,
          children: submitting ? '保存中...' : '保存菜品'
        })
      })
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (DishEditPage);

/***/ }),

/***/ "./src/pages/dishEdit/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/dishEdit/index.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dishEdit_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/dishEdit/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/dishEdit/index!./src/pages/dishEdit/index.tsx");


var config = {"navigationBarTitleText":"编辑菜品"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dishEdit_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/dishEdit/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dishEdit_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dishEdit_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dishEdit_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dishEdit_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/services/upload.ts":
/*!********************************!*\
  !*** ./src/services/upload.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uploadImage": function() { return /* binding */ uploadImage; }
/* harmony export */ });
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);

var isWeapp = "weapp" === 'weapp';

/**
 * 上传图片。微信环境优先上传到云存储，失败时降级为本地路径；
 * 其余环境直接返回本地路径。
 * @param onProgress 上传进度回调（0-100）
 */
function uploadImage(filePath, fileName, onProgress) {
  if (!isWeapp) {
    // H5 / 其他环境：无真实上传，模拟快速进度并返回本地路径
    onProgress === null || onProgress === void 0 || onProgress(30);
    return new Promise(function (resolve) {
      setTimeout(function () {
        onProgress === null || onProgress === void 0 || onProgress(100);
        resolve(filePath);
      }, 150);
    });
  }

  // 微信环境：真实上传到云存储，通过回调风格拿到 UploadTask 以监听进度
  return new Promise(function (resolve) {
    var uploadTask;
    try {
      uploadTask = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().cloud.uploadFile({
        cloudPath: "dishes/".concat(fileName),
        filePath: filePath,
        success: function success(res) {
          onProgress === null || onProgress === void 0 || onProgress(100);
          resolve(res.fileID);
        },
        fail: function fail(err) {
          console.warn('[Upload] 云存储上传失败，降级为本地路径:', err);
          onProgress === null || onProgress === void 0 || onProgress(100);
          resolve(filePath);
        }
      });
    } catch (err) {
      console.warn('[Upload] 云存储不可用，降级为本地路径:', err);
      onProgress === null || onProgress === void 0 || onProgress(100);
      resolve(filePath);
      return;
    }
    if (onProgress && uploadTask && typeof uploadTask.onProgressUpdate === 'function') {
      uploadTask.onProgressUpdate(function (res) {
        onProgress(res.progress);
      });
    }
  });
}

/***/ }),

/***/ "./src/pages/dishEdit/index.module.scss":
/*!**********************************************!*\
  !*** ./src/pages/dishEdit/index.module.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"page":"index-module__page___PPHly","formCard":"index-module__formCard___UguxD","imageSection":"index-module__imageSection___eIM4L","imagePreview":"index-module__imagePreview___QE9eL","chooseBtn":"index-module__chooseBtn___Er5d6","chooseBtnText":"index-module__chooseBtnText___c9Gl3","progressWrap":"index-module__progressWrap___oERic","progressTrack":"index-module__progressTrack___UdRjy","progressBar":"index-module__progressBar___yZXXi","progressText":"index-module__progressText___ycMBz","field":"index-module__field___RWDKD","label":"index-module__label___oLDhe","input":"index-module__input___jKDaf","textarea":"index-module__textarea___c884X","pickerValue":"index-module__pickerValue___WdlNd","placeholder":"index-module__placeholder___kd6nX","pickerArrow":"index-module__pickerArrow___bUOR4","footer":"index-module__footer___cMBKw","saveBtn":"index-module__saveBtn___muDWl","saveText":"index-module__saveText___DcP45"});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/dishEdit/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map