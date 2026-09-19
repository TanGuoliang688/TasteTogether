"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/menu/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/menu/index!./src/pages/menu/index.tsx":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/menu/index!./src/pages/menu/index.tsx ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_DishCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/DishCard */ "./src/components/DishCard/index.tsx");
/* harmony import */ var _components_QuantityStepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/QuantityStepper */ "./src/components/QuantityStepper/index.tsx");
/* harmony import */ var _services_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/menu */ "./src/services/menu.ts");
/* harmony import */ var _services_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/services/order */ "./src/services/order.ts");
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store/cart */ "./src/store/cart.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/menu/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");














var banners = [{
  id: 1,
  image: 'https://picsum.photos/id/292/750/400',
  title: '招牌热菜 火热上市'
}, {
  id: 2,
  image: 'https://picsum.photos/id/326/750/400',
  title: '春日限定 · 新品尝鲜'
}, {
  id: 3,
  image: 'https://picsum.photos/id/401/750/400',
  title: '会员专享 每日特惠'
}];
var MenuPage = function MenuPage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState, 2),
    categories = _useState2[0],
    setCategories = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState3, 2),
    dishes = _useState4[0],
    setDishes = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState5, 2),
    activeCategoryId = _useState6[0],
    setActiveCategoryId = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState7, 2),
    drawerVisible = _useState8[0],
    setDrawerVisible = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState9, 2),
    submitting = _useState0[0],
    setSubmitting = _useState0[1];
  var items = (0,_store_cart__WEBPACK_IMPORTED_MODULE_7__.useCartStore)(function (s) {
    return s.items;
  });
  var increase = (0,_store_cart__WEBPACK_IMPORTED_MODULE_7__.useCartStore)(function (s) {
    return s.increase;
  });
  var decrease = (0,_store_cart__WEBPACK_IMPORTED_MODULE_7__.useCartStore)(function (s) {
    return s.decrease;
  });
  var clear = (0,_store_cart__WEBPACK_IMPORTED_MODULE_7__.useCartStore)(function (s) {
    return s.clear;
  });
  var totalPrice = (0,_store_cart__WEBPACK_IMPORTED_MODULE_7__.cartTotal)(items);
  var totalCount = (0,_store_cart__WEBPACK_IMPORTED_MODULE_7__.cartCount)(items);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_services_menu__WEBPACK_IMPORTED_MODULE_5__.getMenu)().then(function (res) {
      setCategories(res.categories);
      setDishes(res.dishes);
      if (res.categories.length > 0 && !activeCategoryId) {
        setActiveCategoryId(res.categories[0].id);
      }
    }).catch(function (err) {
      console.error('[MenuPage] load menu failed:', err);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '加载菜单失败',
        icon: 'none'
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var filteredDishes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var onSaleDishes = dishes.filter(function (d) {
      return d.onSale !== false;
    });
    if (!activeCategoryId) return onSaleDishes;
    return onSaleDishes.filter(function (d) {
      return d.categoryId === activeCategoryId;
    });
  }, [dishes, activeCategoryId]);
  var handleChooseCategory = function handleChooseCategory(id) {
    setActiveCategoryId(id);
  };
  var handleCheckout = /*#__PURE__*/function () {
    var _ref = (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])(/*#__PURE__*/(0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().m(function _callee() {
      var orderItems, _t;
      return (0,D_java_workspace_TasteTogether_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!(items.length === 0 || submitting)) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            setSubmitting(true);
            _context.p = 2;
            orderItems = items.map(function (i) {
              return {
                dishId: i.dishId,
                name: i.name,
                price: i.price,
                quantity: i.quantity
              };
            });
            _context.n = 3;
            return (0,_services_order__WEBPACK_IMPORTED_MODULE_6__.createOrder)({
              items: orderItems,
              tableNo: 'A01',
              totalPrice: totalPrice
            });
          case 3:
            clear();
            setDrawerVisible(false);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '下单成功',
              icon: 'success'
            });
            setTimeout(function () {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
                url: '/pages/order/index'
              });
            }, 1200);
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            console.error('[MenuPage] checkout failed:', _t);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '下单失败，请重试',
              icon: 'none'
            });
          case 5:
            _context.p = 5;
            setSubmitting(false);
            return _context.f(5);
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[2, 4, 5, 6]]);
    }));
    return function handleCheckout() {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].page,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].header,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].headerTop,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].shopName,
            children: "\u5473\u6765\u5C0F\u9986"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].tableInfo,
            children: "\u684C\u53F7 A01 \xB7 2 \u4F4D\u7528\u9910"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].headerBadge,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].headerBadgeText,
            children: totalCount
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Swiper, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].banner,
      circular: true,
      autoplay: true,
      indicatorDots: true,
      indicatorColor: "rgba(255,255,255,0.4)",
      indicatorActiveColor: "#ffffff",
      interval: 4000,
      children: banners.map(function (b) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.SwiperItem, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].bannerItem,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Image, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].bannerImage,
            src: b.image,
            mode: "aspectFill"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].bannerMask
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].bannerTitle,
            children: b.title
          })]
        }, b.id);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.ScrollView, {
      scrollX: true,
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].categories,
      children: categories.map(function (c) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].categoryItem, c.id === activeCategoryId && _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].categoryItemActive),
          onClick: function onClick() {
            return handleChooseCategory(c.id);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].categoryText, c.id === activeCategoryId && _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].categoryTextActive),
            children: c.name
          })
        }, c.id);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.ScrollView, {
      scrollY: true,
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].dishList,
      children: [filteredDishes.map(function (dish) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_DishCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
          dish: dish
        }, dish.id);
      }), filteredDishes.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].empty,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].emptyText,
          children: "\u6682\u65E0\u83DC\u54C1"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].listBottom
      })]
    }), totalCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].cartBar,
      onClick: function onClick() {
        return setDrawerVisible(true);
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].cartBarLeft,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].cartBadge,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].cartBadgeText,
            children: totalCount
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].cartPriceWrap,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].cartTotalLabel,
            children: "\u5408\u8BA1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].cartTotal,
            children: ["\xA5", totalPrice]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].checkoutBtn,
        onClick: function onClick(e) {
          e.stopPropagation();
          setDrawerVisible(true);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].checkoutText,
          children: "\u53BB\u4E0B\u5355"
        })
      })]
    }), drawerVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].mask,
      onClick: function onClick() {
        return setDrawerVisible(false);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].drawer, drawerVisible && _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].drawerVisible),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].drawerHeader,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].drawerTitle,
          children: "\u5DF2\u9009\u83DC\u54C1"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].clearBtn,
          onClick: function onClick() {
            return clear();
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].clearText,
            children: "\u6E05\u7A7A"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.ScrollView, {
        scrollY: true,
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].drawerList,
        children: items.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].drawerEmpty,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].drawerEmptyText,
            children: "\u8D2D\u7269\u8F66\u8FD8\u662F\u7A7A\u7684"
          })
        }) : items.map(function (item) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].drawerItem,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Image, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].drawerImage,
              src: item.image,
              mode: "aspectFill"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].drawerItemInfo,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].drawerItemName,
                children: item.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].drawerItemPrice,
                children: ["\xA5", item.price]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_QuantityStepper__WEBPACK_IMPORTED_MODULE_4__["default"], {
              value: item.quantity,
              onDecrease: function onDecrease() {
                return decrease(item.dishId);
              },
              onIncrease: function onIncrease() {
                return increase(item.dishId);
              }
            })]
          }, item.dishId);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].drawerFooter,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].drawerTotal,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].drawerTotalLabel,
            children: "\u5408\u8BA1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].drawerTotalPrice,
            children: ["\xA5", totalPrice]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].submitBtn, (items.length === 0 || submitting) && _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].submitBtnDisabled),
          onClick: handleCheckout,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].submitText,
            children: submitting ? '下单中...' : '确认下单'
          })
        })]
      })]
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (MenuPage);

/***/ }),

/***/ "./src/components/DishCard/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/DishCard/index.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_QuantityStepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/QuantityStepper */ "./src/components/QuantityStepper/index.tsx");
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/cart */ "./src/store/cart.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/DishCard/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");







var DishCard = function DishCard(_ref) {
  var _items$find$quantity, _items$find;
  var dish = _ref.dish;
  var items = (0,_store_cart__WEBPACK_IMPORTED_MODULE_3__.useCartStore)(function (s) {
    return s.items;
  });
  var addItem = (0,_store_cart__WEBPACK_IMPORTED_MODULE_3__.useCartStore)(function (s) {
    return s.addItem;
  });
  var increase = (0,_store_cart__WEBPACK_IMPORTED_MODULE_3__.useCartStore)(function (s) {
    return s.increase;
  });
  var decrease = (0,_store_cart__WEBPACK_IMPORTED_MODULE_3__.useCartStore)(function (s) {
    return s.decrease;
  });
  var count = (_items$find$quantity = (_items$find = items.find(function (i) {
    return i.dishId === dish.id;
  })) === null || _items$find === void 0 ? void 0 : _items$find.quantity) !== null && _items$find$quantity !== void 0 ? _items$find$quantity : 0;
  var soldOut = !!dish.soldOut;
  var handleOpen = function handleOpen() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: "/pages/dishDetail/index?id=".concat(dish.id)
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].card,
    onClick: handleOpen,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].imageWrap,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Image, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].image,
        src: dish.image,
        mode: "aspectFill"
      }), soldOut && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].soldOutMask,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].soldOutText,
          children: "\u552E\u7F44"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].info,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].name,
        children: dish.name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].desc,
        children: dish.description
      }), dish.tags && dish.tags.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].tags,
        children: dish.tags.map(function (tag) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].tag,
            children: tag
          }, tag);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].bottom,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].priceWrap,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].priceSymbol,
            children: "\xA5"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].price,
            children: dish.price
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].sales,
            children: ["\u5DF2\u552E ", dish.sales]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].control,
          onClick: function onClick(e) {
            return e.stopPropagation();
          },
          children: soldOut ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].soldOutBtn,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].soldOutBtnText,
              children: "\u552E\u7F44"
            })
          }) : count === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].addBtn,
            onClick: function onClick() {
              return addItem(dish);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].addText,
              children: "+"
            })
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_QuantityStepper__WEBPACK_IMPORTED_MODULE_2__["default"], {
            value: count,
            onDecrease: function onDecrease() {
              return decrease(dish.id);
            },
            onIncrease: function onIncrease() {
              return increase(dish.id);
            }
          })
        })]
      })]
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (DishCard);

/***/ }),

/***/ "./src/pages/menu/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/menu/index.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_menu_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/menu/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/menu/index!./src/pages/menu/index.tsx");


var config = {"navigationBarTitleText":"点餐"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_menu_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/menu/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_menu_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_menu_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_menu_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_menu_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/DishCard/index.module.scss":
/*!***************************************************!*\
  !*** ./src/components/DishCard/index.module.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"card":"index-module__card___zojcF","imageWrap":"index-module__imageWrap___k5k6X","image":"index-module__image___UgAmr","soldOutMask":"index-module__soldOutMask___p4A9i","soldOutText":"index-module__soldOutText___kWw3F","info":"index-module__info___wL89B","name":"index-module__name___wR3PU","desc":"index-module__desc___NtYEY","tags":"index-module__tags___Ubg92","tag":"index-module__tag___I1wxB","bottom":"index-module__bottom___hXJsv","priceWrap":"index-module__priceWrap___geyaG","priceSymbol":"index-module__priceSymbol___VLPdU","price":"index-module__price___hvgFh","sales":"index-module__sales___I6Sn5","control":"index-module__control___oeuhi","addBtn":"index-module__addBtn___nkP3C","addText":"index-module__addText___ligm5","soldOutBtn":"index-module__soldOutBtn___DELf4","soldOutBtnText":"index-module__soldOutBtnText___wfFjJ"});

/***/ }),

/***/ "./src/pages/menu/index.module.scss":
/*!******************************************!*\
  !*** ./src/pages/menu/index.module.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"page":"index-module__page___LbZwg","header":"index-module__header___OJQB6","headerTop":"index-module__headerTop___KtGlm","shopName":"index-module__shopName___Ftbvk","tableInfo":"index-module__tableInfo___d48PJ","headerBadge":"index-module__headerBadge___GbbT6","headerBadgeText":"index-module__headerBadgeText___t3CVX","banner":"index-module__banner___E80px","bannerItem":"index-module__bannerItem____iKMF","bannerImage":"index-module__bannerImage___tsfXS","bannerMask":"index-module__bannerMask___gX9nS","bannerTitle":"index-module__bannerTitle___zFn0u","categories":"index-module__categories___umr7T","categoryItem":"index-module__categoryItem___MuYWx","categoryItemActive":"index-module__categoryItemActive___Mfnyf","categoryText":"index-module__categoryText___UY0Si","categoryTextActive":"index-module__categoryTextActive___a_goK","dishList":"index-module__dishList___RPMs9","empty":"index-module__empty___Pda8k","emptyText":"index-module__emptyText___RUc2X","listBottom":"index-module__listBottom___XX0OP","cartBar":"index-module__cartBar___L3vQj","cartBarLeft":"index-module__cartBarLeft___NZa9A","cartBadge":"index-module__cartBadge___F0LSI","cartBadgeText":"index-module__cartBadgeText___ITXID","cartPriceWrap":"index-module__cartPriceWrap___zppK2","cartTotalLabel":"index-module__cartTotalLabel___C7Spq","cartTotal":"index-module__cartTotal___o504c","checkoutBtn":"index-module__checkoutBtn___FCH_1","checkoutText":"index-module__checkoutText___lrfBV","mask":"index-module__mask___bTIwV","drawer":"index-module__drawer___y81DN","drawerVisible":"index-module__drawerVisible___FH6lm","drawerHeader":"index-module__drawerHeader___nH0pM","drawerTitle":"index-module__drawerTitle___yqVAL","clearBtn":"index-module__clearBtn___rD8Kv","clearText":"index-module__clearText___QGclv","drawerList":"index-module__drawerList___xlNhW","drawerItem":"index-module__drawerItem___KdKAn","drawerImage":"index-module__drawerImage___lCPiW","drawerItemInfo":"index-module__drawerItemInfo___KNz9J","drawerItemName":"index-module__drawerItemName___i2ab7","drawerItemPrice":"index-module__drawerItemPrice___b_WhA","drawerEmpty":"index-module__drawerEmpty___psPjG","drawerEmptyText":"index-module__drawerEmptyText___D0D4z","drawerFooter":"index-module__drawerFooter___Bevw2","drawerTotal":"index-module__drawerTotal___uqQub","drawerTotalLabel":"index-module__drawerTotalLabel___zed5u","drawerTotalPrice":"index-module__drawerTotalPrice___xyQAJ","submitBtn":"index-module__submitBtn___GHuZb","submitBtnDisabled":"index-module__submitBtnDisabled___g70at","submitText":"index-module__submitText___rDB45"});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/menu/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map