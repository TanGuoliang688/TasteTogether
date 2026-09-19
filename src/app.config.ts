export default defineAppConfig({
  pages: [
    'pages/menu/index',
    'pages/order/index',
    'pages/mine/index',
    'pages/dishDetail/index',
    'pages/dishManage/index',
    'pages/dishEdit/index',
    'pages/categoryManage/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTitleText: '点餐',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#ff6b35',
    backgroundColor: '#ffffff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/menu/index',
        text: '点餐',
        iconPath: 'assets/tabbar/menu.png',
        selectedIconPath: 'assets/tabbar/menu-selected.png'
      },
      {
        pagePath: 'pages/order/index',
        text: '订单',
        iconPath: 'assets/tabbar/order.png',
        selectedIconPath: 'assets/tabbar/order-selected.png'
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的',
        iconPath: 'assets/tabbar/mine.png',
        selectedIconPath: 'assets/tabbar/mine-selected.png'
      }
    ]
  }
})
