"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/components/QuantityStepper/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/QuantityStepper/index.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/QuantityStepper/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");




var QuantityStepper = function QuantityStepper(_ref) {
  var value = _ref.value,
    onDecrease = _ref.onDecrease,
    onIncrease = _ref.onIncrease;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].stepper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].btn,
      onClick: onDecrease,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].btnMinus,
        children: "-"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].value,
      children: value
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].btn,
      onClick: onIncrease,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].btnPlus,
        children: "+"
      })
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (QuantityStepper);

/***/ }),

/***/ "./src/data/createOrder.ts":
/*!*********************************!*\
  !*** ./src/data/createOrder.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createOrder; }
/* harmony export */ });
/* harmony import */ var _orderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderStore */ "./src/data/orderStore.ts");

function createOrder(data) {
  var order = {
    id: "o_".concat(Date.now()),
    orderNo: "NO".concat(Date.now()),
    tableNo: data.tableNo || 'A01',
    items: data.items,
    totalPrice: data.totalPrice,
    status: 'pending',
    createTime: Date.now()
  };
  (0,_orderStore__WEBPACK_IMPORTED_MODULE_0__.saveOrder)(order);
  return {
    orderId: order.id
  };
}

/***/ }),

/***/ "./src/data/deleteCategory.ts":
/*!************************************!*\
  !*** ./src/data/deleteCategory.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ deleteCategoryMock; }
/* harmony export */ });
/* harmony import */ var _dishStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dishStore */ "./src/data/dishStore.ts");

function deleteCategoryMock(data) {
  (0,_dishStore__WEBPACK_IMPORTED_MODULE_0__.deleteCategory)(data.id);
  return {
    deleted: true
  };
}

/***/ }),

/***/ "./src/data/deleteDish.ts":
/*!********************************!*\
  !*** ./src/data/deleteDish.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ deleteDishMock; }
/* harmony export */ });
/* harmony import */ var _dishStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dishStore */ "./src/data/dishStore.ts");

function deleteDishMock(data) {
  (0,_dishStore__WEBPACK_IMPORTED_MODULE_0__.deleteDish)(data.id);
  return {
    deleted: true
  };
}

/***/ }),

/***/ "./src/data/dishStore.ts":
/*!*******************************!*\
  !*** ./src/data/dishStore.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteCategory": function() { return /* binding */ deleteCategory; },
/* harmony export */   "deleteDish": function() { return /* binding */ deleteDish; },
/* harmony export */   "getMenuData": function() { return /* binding */ getMenuData; },
/* harmony export */   "saveCategory": function() { return /* binding */ saveCategory; },
/* harmony export */   "saveDish": function() { return /* binding */ saveDish; },
/* harmony export */   "updateCategorySort": function() { return /* binding */ updateCategorySort; },
/* harmony export */   "updateDishStatus": function() { return /* binding */ updateDishStatus; }
/* harmony export */ });
/* unused harmony export getCategories */
/* harmony import */ var D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");


var categories = [{
  id: 'c1',
  name: '招牌热菜',
  sort: 1
}, {
  id: 'c2',
  name: '凉菜',
  sort: 2
}, {
  id: 'c3',
  name: '主食',
  sort: 3
}, {
  id: 'c4',
  name: '汤品',
  sort: 4
}, {
  id: 'c5',
  name: '饮品甜点',
  sort: 5
}];
var dishes = [{
  id: 'd1',
  categoryId: 'c1',
  name: '招牌红烧肉',
  price: 48,
  image: 'https://picsum.photos/id/292/300/300',
  description: '肥而不腻，入口即化，选用优质五花肉慢火炖制。',
  sales: 1200,
  tags: ['招牌', '热销']
}, {
  id: 'd2',
  categoryId: 'c1',
  name: '糖醋里脊',
  price: 38,
  image: 'https://picsum.photos/id/312/300/300',
  description: '外酥里嫩，酸甜可口，经典家常味道。',
  sales: 986,
  tags: ['人气']
}, {
  id: 'd3',
  categoryId: 'c1',
  name: '宫保鸡丁',
  price: 32,
  image: 'https://picsum.photos/id/326/300/300',
  description: '鸡肉滑嫩，花生香脆，微辣鲜香。',
  sales: 1102,
  tags: ['微辣']
}, {
  id: 'd4',
  categoryId: 'c1',
  name: '水煮鱼',
  price: 58,
  image: 'https://picsum.photos/id/401/300/300',
  description: '鱼肉鲜嫩，麻辣过瘾，配菜丰富。',
  sales: 860,
  tags: ['麻辣']
}, {
  id: 'd5',
  categoryId: 'c2',
  name: '凉拌黄瓜',
  price: 16,
  image: 'https://picsum.photos/id/431/300/300',
  description: '清脆爽口，蒜香浓郁，开胃解腻。',
  sales: 620
}, {
  id: 'd6',
  categoryId: 'c2',
  name: '口水鸡',
  price: 28,
  image: 'https://picsum.photos/id/570/300/300',
  description: '麻辣鲜香，鸡肉细嫩，回味悠长。',
  sales: 720,
  tags: ['麻辣']
}, {
  id: 'd7',
  categoryId: 'c2',
  name: '皮蛋豆腐',
  price: 18,
  image: 'https://picsum.photos/id/580/300/300',
  description: '嫩滑豆腐搭配皮蛋，清凉爽口。',
  sales: 430
}, {
  id: 'd8',
  categoryId: 'c3',
  name: '扬州炒饭',
  price: 22,
  image: 'https://picsum.photos/id/625/300/300',
  description: '粒粒分明，配料丰富，香气扑鼻。',
  sales: 950
}, {
  id: 'd9',
  categoryId: 'c3',
  name: '手工水饺',
  price: 26,
  image: 'https://picsum.photos/id/835/300/300',
  description: '皮薄馅大，现包现煮，鲜嫩多汁。',
  sales: 780,
  tags: ['手工']
}, {
  id: 'd10',
  categoryId: 'c3',
  name: '番茄鸡蛋面',
  price: 18,
  image: 'https://picsum.photos/id/1080/300/300',
  description: '酸甜开胃，面条筋道，家的味道。',
  sales: 540
}, {
  id: 'd11',
  categoryId: 'c4',
  name: '番茄蛋花汤',
  price: 12,
  image: 'https://picsum.photos/id/312/300/300',
  description: '清爽酸甜，番茄浓郁，营养暖胃。',
  sales: 460
}, {
  id: 'd12',
  categoryId: 'c4',
  name: '老火鸡汤',
  price: 30,
  image: 'https://picsum.photos/id/326/300/300',
  description: '慢火炖煮数小时，汤汁醇厚滋补。',
  sales: 390,
  tags: ['滋补']
}, {
  id: 'd13',
  categoryId: 'c5',
  name: '鲜榨橙汁',
  price: 15,
  image: 'https://picsum.photos/id/401/300/300',
  description: '新鲜现榨，VC满满，酸甜可口。',
  sales: 610
}, {
  id: 'd14',
  categoryId: 'c5',
  name: '冰镇酸梅汤',
  price: 10,
  image: 'https://picsum.photos/id/431/300/300',
  description: '生津止渴，酸甜冰爽，解腻神器。',
  sales: 520
}, {
  id: 'd15',
  categoryId: 'c5',
  name: '红豆双皮奶',
  price: 14,
  image: 'https://picsum.photos/id/570/300/300',
  description: '奶香浓郁，红豆绵密，入口即化。',
  sales: 350
}];
function getCategories() {
  return (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(categories).sort(function (a, b) {
    return a.sort - b.sort;
  });
}
function getMenuData() {
  return {
    categories: getCategories(),
    dishes: dishes
  };
}
function saveDish(input) {
  var _input$onSale, _input$soldOut;
  var payload = {
    categoryId: input.categoryId,
    name: input.name,
    price: input.price,
    description: input.description,
    image: input.image,
    tags: input.tags || []
  };
  if (input.id) {
    var idx = dishes.findIndex(function (d) {
      return d.id === input.id;
    });
    if (idx >= 0) {
      var updated = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dishes[idx]), payload);
      if (input.onSale !== undefined) updated.onSale = input.onSale;
      if (input.soldOut !== undefined) updated.soldOut = input.soldOut;
      dishes = dishes.map(function (d, i) {
        return i === idx ? updated : d;
      });
      return updated;
    }
  }
  var dish = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    id: "d_".concat(Date.now())
  }, payload), {}, {
    sales: 0,
    onSale: (_input$onSale = input.onSale) !== null && _input$onSale !== void 0 ? _input$onSale : true,
    soldOut: (_input$soldOut = input.soldOut) !== null && _input$soldOut !== void 0 ? _input$soldOut : false
  });
  dishes = [dish].concat((0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dishes));
  return dish;
}
function deleteDish(id) {
  dishes = dishes.filter(function (d) {
    return d.id !== id;
  });
}
function updateDishStatus(id, data) {
  var idx = dishes.findIndex(function (d) {
    return d.id === id;
  });
  if (idx < 0) return undefined;
  var updated = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dishes[idx]);
  if (data.onSale !== undefined) updated.onSale = data.onSale;
  if (data.soldOut !== undefined) updated.soldOut = data.soldOut;
  dishes = dishes.map(function (d, i) {
    return i === idx ? updated : d;
  });
  return updated;
}
function saveCategory(input) {
  var _input$sort2;
  if (input.id) {
    var idx = categories.findIndex(function (c) {
      return c.id === input.id;
    });
    if (idx >= 0) {
      var _input$sort;
      var updated = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, categories[idx]), {}, {
        name: input.name,
        sort: (_input$sort = input.sort) !== null && _input$sort !== void 0 ? _input$sort : categories[idx].sort
      });
      categories = categories.map(function (c, i) {
        return i === idx ? updated : c;
      });
      return updated;
    }
  }
  var maxSort = categories.length ? Math.max.apply(Math, (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(categories.map(function (c) {
    return c.sort;
  }))) : 0;
  var category = {
    id: "c_".concat(Date.now()),
    name: input.name,
    sort: (_input$sort2 = input.sort) !== null && _input$sort2 !== void 0 ? _input$sort2 : maxSort + 1
  };
  categories = [].concat((0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(categories), [category]);
  return category;
}
function deleteCategory(id) {
  if (dishes.some(function (d) {
    return d.categoryId === id;
  })) {
    throw new Error('该分类下还有菜品，无法删除');
  }
  categories = categories.filter(function (c) {
    return c.id !== id;
  });
}
function updateCategorySort(id, sort) {
  var idx = categories.findIndex(function (c) {
    return c.id === id;
  });
  if (idx < 0) return undefined;
  var updated = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, categories[idx]), {}, {
    sort: sort
  });
  categories = categories.map(function (c, i) {
    return i === idx ? updated : c;
  });
  return updated;
}

/***/ }),

/***/ "./src/data/getMenu.ts":
/*!*****************************!*\
  !*** ./src/data/getMenu.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getMenu; }
/* harmony export */ });
/* harmony import */ var _dishStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dishStore */ "./src/data/dishStore.ts");

function getMenu() {
  return (0,_dishStore__WEBPACK_IMPORTED_MODULE_0__.getMenuData)();
}

/***/ }),

/***/ "./src/data/getOrders.ts":
/*!*******************************!*\
  !*** ./src/data/getOrders.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getOrders; }
/* harmony export */ });
/* harmony import */ var _orderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderStore */ "./src/data/orderStore.ts");

function getOrders(data) {
  return {
    orders: (0,_orderStore__WEBPACK_IMPORTED_MODULE_0__.listOrders)(data === null || data === void 0 ? void 0 : data.status)
  };
}

/***/ }),

/***/ "./src/data/login.ts":
/*!***************************!*\
  !*** ./src/data/login.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ login; }
/* harmony export */ });
function login() {
  return {
    openid: 'mock_openid_001'
  };
}

/***/ }),

/***/ "./src/data/orderStore.ts":
/*!********************************!*\
  !*** ./src/data/orderStore.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listOrders": function() { return /* binding */ listOrders; },
/* harmony export */   "saveOrder": function() { return /* binding */ saveOrder; }
/* harmony export */ });
/* harmony import */ var D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");

var orders = [{
  id: 'seed_1',
  orderNo: 'NO20260901001',
  tableNo: 'A03',
  items: [{
    dishId: 'd1',
    name: '招牌红烧肉',
    price: 48,
    quantity: 1
  }, {
    dishId: 'd8',
    name: '扬州炒饭',
    price: 22,
    quantity: 2
  }],
  totalPrice: 92,
  status: 'completed',
  createTime: Date.now() - 86400000
}, {
  id: 'seed_2',
  orderNo: 'NO20260902002',
  tableNo: 'B07',
  items: [{
    dishId: 'd4',
    name: '水煮鱼',
    price: 58,
    quantity: 1
  }, {
    dishId: 'd13',
    name: '鲜榨橙汁',
    price: 15,
    quantity: 2
  }],
  totalPrice: 88,
  status: 'pending',
  createTime: Date.now() - 3600000
}];
function saveOrder(order) {
  orders = [order].concat((0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(orders));
}
function listOrders(status) {
  if (!status) return orders;
  return orders.filter(function (o) {
    return o.status === status;
  });
}

/***/ }),

/***/ "./src/data/saveCategory.ts":
/*!**********************************!*\
  !*** ./src/data/saveCategory.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ saveCategoryMock; }
/* harmony export */ });
/* harmony import */ var _dishStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dishStore */ "./src/data/dishStore.ts");

function saveCategoryMock(data) {
  var category = (0,_dishStore__WEBPACK_IMPORTED_MODULE_0__.saveCategory)(data);
  return {
    categoryId: category.id,
    category: category
  };
}

/***/ }),

/***/ "./src/data/saveDish.ts":
/*!******************************!*\
  !*** ./src/data/saveDish.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ saveDishMock; }
/* harmony export */ });
/* harmony import */ var _dishStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dishStore */ "./src/data/dishStore.ts");

function saveDishMock(data) {
  var dish = (0,_dishStore__WEBPACK_IMPORTED_MODULE_0__.saveDish)(data);
  return {
    dishId: dish.id,
    dish: dish
  };
}

/***/ }),

/***/ "./src/data/updateCategorySort.ts":
/*!****************************************!*\
  !*** ./src/data/updateCategorySort.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateCategorySortMock; }
/* harmony export */ });
/* harmony import */ var _dishStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dishStore */ "./src/data/dishStore.ts");

function updateCategorySortMock(data) {
  var category = (0,_dishStore__WEBPACK_IMPORTED_MODULE_0__.updateCategorySort)(data.id, data.sort);
  return {
    categoryId: category === null || category === void 0 ? void 0 : category.id
  };
}

/***/ }),

/***/ "./src/data/updateDishStatus.ts":
/*!**************************************!*\
  !*** ./src/data/updateDishStatus.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateDishStatusMock; }
/* harmony export */ });
/* harmony import */ var _dishStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dishStore */ "./src/data/dishStore.ts");

function updateDishStatusMock(data) {
  (0,_dishStore__WEBPACK_IMPORTED_MODULE_0__.updateDishStatus)(data.id, data);
  return {
    dishId: data.id
  };
}

/***/ }),

/***/ "./src/services/cloud.ts":
/*!*******************************!*\
  !*** ./src/services/cloud.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "callFunction": function() { return /* binding */ callFunction; }
/* harmony export */ });
/* unused harmony export getDatabase */
/* harmony import */ var D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/login */ "./src/data/login.ts");
/* harmony import */ var _data_getMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/getMenu */ "./src/data/getMenu.ts");
/* harmony import */ var _data_getOrders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/getOrders */ "./src/data/getOrders.ts");
/* harmony import */ var _data_createOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/createOrder */ "./src/data/createOrder.ts");
/* harmony import */ var _data_saveDish__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/saveDish */ "./src/data/saveDish.ts");
/* harmony import */ var _data_deleteDish__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/deleteDish */ "./src/data/deleteDish.ts");
/* harmony import */ var _data_updateDishStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/updateDishStatus */ "./src/data/updateDishStatus.ts");
/* harmony import */ var _data_saveCategory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/saveCategory */ "./src/data/saveCategory.ts");
/* harmony import */ var _data_deleteCategory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/deleteCategory */ "./src/data/deleteCategory.ts");
/* harmony import */ var _data_updateCategorySort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/updateCategorySort */ "./src/data/updateCategorySort.ts");













var isWeapp = "weapp" === 'weapp';

// 使用静态映射而非动态 import，避免小程序端动态加载失败
var mockMap = {
  login: _data_login__WEBPACK_IMPORTED_MODULE_10__["default"],
  getMenu: _data_getMenu__WEBPACK_IMPORTED_MODULE_1__["default"],
  getOrders: _data_getOrders__WEBPACK_IMPORTED_MODULE_2__["default"],
  createOrder: _data_createOrder__WEBPACK_IMPORTED_MODULE_3__["default"],
  saveDish: _data_saveDish__WEBPACK_IMPORTED_MODULE_4__["default"],
  deleteDish: _data_deleteDish__WEBPACK_IMPORTED_MODULE_5__["default"],
  updateDishStatus: _data_updateDishStatus__WEBPACK_IMPORTED_MODULE_6__["default"],
  saveCategory: _data_saveCategory__WEBPACK_IMPORTED_MODULE_7__["default"],
  deleteCategory: _data_deleteCategory__WEBPACK_IMPORTED_MODULE_8__["default"],
  updateCategorySort: _data_updateCategorySort__WEBPACK_IMPORTED_MODULE_9__["default"]
};
function callMock(name, data) {
  var fn = mockMap[name];
  if (!fn) {
    throw new Error("\u672C\u5730\u6570\u636E\u6A21\u5757\u4E0D\u5B58\u5728: ".concat(name));
  }
  return fn(data);
}
function callFunction(_x, _x2) {
  return _callFunction.apply(this, arguments);
}
function _callFunction() {
  _callFunction = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])(/*#__PURE__*/(0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().m(function _callee(name, data) {
    var res, result, _t;
    return (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          if (isWeapp) {
            _context.n = 1;
            break;
          }
          return _context.a(2, callMock(name, data));
        case 1:
          _context.p = 1;
          _context.n = 2;
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().cloud.callFunction({
            name: name,
            data: data
          });
        case 2:
          res = _context.v;
          result = res.result;
          if (!(result.code !== 0)) {
            _context.n = 3;
            break;
          }
          console.warn("[Cloud] ".concat(name, " \u8FD4\u56DE\u5F02\u5E38\uFF0C\u964D\u7EA7\u4E3A\u672C\u5730\u6570\u636E:"), result.message);
          return _context.a(2, callMock(name, data));
        case 3:
          return _context.a(2, result.data);
        case 4:
          _context.p = 4;
          _t = _context.v;
          console.warn("[Cloud] ".concat(name, " \u8C03\u7528\u5931\u8D25\uFF0C\u964D\u7EA7\u4E3A\u672C\u5730\u6570\u636E:"), _t);
          return _context.a(2, callMock(name, data));
      }
    }, _callee, null, [[1, 4]]);
  }));
  return _callFunction.apply(this, arguments);
}
function getDatabase() {
  if (!isWeapp) {
    return null;
  }
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().cloud.database();
}

/***/ }),

/***/ "./src/services/dish.ts":
/*!******************************!*\
  !*** ./src/services/dish.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteDish": function() { return /* binding */ deleteDish; },
/* harmony export */   "saveDish": function() { return /* binding */ saveDish; },
/* harmony export */   "updateDishStatus": function() { return /* binding */ updateDishStatus; }
/* harmony export */ });
/* harmony import */ var D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _cloud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cloud */ "./src/services/cloud.ts");


function saveDish(data) {
  return (0,_cloud__WEBPACK_IMPORTED_MODULE_0__.callFunction)('saveDish', data);
}
function deleteDish(id) {
  return (0,_cloud__WEBPACK_IMPORTED_MODULE_0__.callFunction)('deleteDish', {
    id: id
  });
}
function updateDishStatus(id, data) {
  return (0,_cloud__WEBPACK_IMPORTED_MODULE_0__.callFunction)('updateDishStatus', (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    id: id
  }, data));
}

/***/ }),

/***/ "./src/services/menu.ts":
/*!******************************!*\
  !*** ./src/services/menu.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMenu": function() { return /* binding */ getMenu; }
/* harmony export */ });
/* harmony import */ var _cloud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cloud */ "./src/services/cloud.ts");

function getMenu() {
  return (0,_cloud__WEBPACK_IMPORTED_MODULE_0__.callFunction)('getMenu');
}

/***/ }),

/***/ "./src/services/order.ts":
/*!*******************************!*\
  !*** ./src/services/order.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOrder": function() { return /* binding */ createOrder; },
/* harmony export */   "getOrders": function() { return /* binding */ getOrders; }
/* harmony export */ });
/* harmony import */ var _cloud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cloud */ "./src/services/cloud.ts");

function createOrder(data) {
  return (0,_cloud__WEBPACK_IMPORTED_MODULE_0__.callFunction)('createOrder', data);
}
function getOrders(status) {
  return (0,_cloud__WEBPACK_IMPORTED_MODULE_0__.callFunction)('getOrders', status ? {
    status: status
  } : {});
}

/***/ }),

/***/ "./src/store/cart.ts":
/*!***************************!*\
  !*** ./src/store/cart.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cartCount": function() { return /* binding */ cartCount; },
/* harmony export */   "cartTotal": function() { return /* binding */ cartTotal; },
/* harmony export */   "useCartStore": function() { return /* binding */ useCartStore; }
/* harmony export */ });
/* harmony import */ var D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.mjs");



var useCartStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)(function (set) {
  return {
    items: [],
    addItem: function addItem(dish) {
      return set(function (state) {
        var exist = state.items.find(function (i) {
          return i.dishId === dish.id;
        });
        if (exist) {
          return {
            items: state.items.map(function (i) {
              return i.dishId === dish.id ? (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, i), {}, {
                quantity: i.quantity + 1
              }) : i;
            })
          };
        }
        return {
          items: [].concat((0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.items), [{
            dishId: dish.id,
            name: dish.name,
            price: dish.price,
            image: dish.image,
            quantity: 1
          }])
        };
      });
    },
    addItemWithQuantity: function addItemWithQuantity(dish, quantity) {
      return set(function (state) {
        var qty = Math.max(1, quantity);
        var exist = state.items.find(function (i) {
          return i.dishId === dish.id;
        });
        if (exist) {
          return {
            items: state.items.map(function (i) {
              return i.dishId === dish.id ? (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, i), {}, {
                quantity: i.quantity + qty
              }) : i;
            })
          };
        }
        return {
          items: [].concat((0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.items), [{
            dishId: dish.id,
            name: dish.name,
            price: dish.price,
            image: dish.image,
            quantity: qty
          }])
        };
      });
    },
    increase: function increase(dishId) {
      return set(function (state) {
        return {
          items: state.items.map(function (i) {
            return i.dishId === dishId ? (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, i), {}, {
              quantity: i.quantity + 1
            }) : i;
          })
        };
      });
    },
    decrease: function decrease(dishId) {
      return set(function (state) {
        return {
          items: state.items.map(function (i) {
            return i.dishId === dishId ? (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, i), {}, {
              quantity: i.quantity - 1
            }) : i;
          }).filter(function (i) {
            return i.quantity > 0;
          })
        };
      });
    },
    removeItem: function removeItem(dishId) {
      return set(function (state) {
        return {
          items: state.items.filter(function (i) {
            return i.dishId !== dishId;
          })
        };
      });
    },
    clear: function clear() {
      return set({
        items: []
      });
    }
  };
});
function cartTotal(items) {
  return items.reduce(function (sum, i) {
    return sum + i.price * i.quantity;
  }, 0);
}
function cartCount(items) {
  return items.reduce(function (sum, i) {
    return sum + i.quantity;
  }, 0);
}

/***/ }),

/***/ "./src/components/QuantityStepper/index.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/QuantityStepper/index.module.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"stepper":"index-module__stepper___tDQJS","btn":"index-module__btn___QPOHD","btnMinus":"index-module__btnMinus___lG1wG","btnPlus":"index-module__btnPlus___vT90b","value":"index-module__value___Vl0JS"});

/***/ })

}]);
//# sourceMappingURL=common.js.map