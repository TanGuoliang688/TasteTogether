# TasteTogether - 味来小馆点餐小程序

一款基于 Taro + React + TypeScript 开发的微信小程序点餐系统，支持顾客在线点餐和商家菜品管理。

## 功能特性

### 顾客端
- **菜单浏览** - 分类展示菜品，支持轮播 Banner 推荐
- **购物车** - 添加/减少菜品，实时计算总价
- **在线下单** - 确认购物车后一键提交订单
- **订单管理** - 查看全部订单，按状态（进行中/已完成/已取消）筛选
- **个人中心** - 展示累计订单数，快捷入口

### 商家端
- **菜品管理** - 新增、编辑、删除菜品，支持上下架和售罄标记
- **分类管理** - 新增、编辑、删除分类，支持拖拽排序
- **菜品详情** - 查看菜品完整信息

## 技术栈

| 技术 | 说明 |
|------|------|
| [Taro](https://taro.zone) 4.1.9 | 跨端开发框架 |
| React 18 | UI 框架 |
| TypeScript | 类型安全 |
| Zustand | 轻量状态管理 |
| Sass (CSS Modules) | 样式方案 |
| 微信云开发 | 后端服务（云函数 + 云数据库） |

## 项目结构

```
TasteTogether/
├── cloudfunctions/          # 微信云函数
│   ├── createOrder/         # 创建订单
│   ├── deleteCategory/      # 删除分类
│   ├── deleteDish/          # 删除菜品
│   ├── getMenu/             # 获取菜单
│   ├── getOrders/           # 获取订单列表
│   ├── login/               # 用户登录
│   ├── saveCategory/        # 保存分类
│   ├── saveDish/            # 保存菜品
│   ├── updateCategorySort/  # 更新分类排序
│   └── updateDishStatus/    # 更新菜品状态
├── src/
│   ├── assets/tabbar/       # TabBar 图标
│   ├── components/          # 公共组件
│   │   ├── DishCard/        # 菜品卡片
│   │   └── QuantityStepper/ # 数量步进器
│   ├── data/                # 本地 Mock 数据层
│   ├── pages/               # 页面
│   │   ├── menu/            # 点餐页（首页）
│   │   ├── order/           # 订单页
│   │   ├── mine/            # 我的
│   │   ├── dishDetail/      # 菜品详情
│   │   ├── dishManage/      # 菜品管理
│   │   ├── dishEdit/        # 菜品编辑
│   │   └── categoryManage/  # 分类管理
│   ├── services/            # 服务层（云函数调用）
│   ├── store/               # Zustand 状态管理
│   ├── styles/              # 全局样式变量
│   └── types/               # TypeScript 类型定义
├── config/                  # Taro 构建配置
├── project.config.json      # 微信小程序项目配置
└── package.json
```

## 快速开始

### 环境要求

- Node.js >= 18
- npm >= 8
- [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

### 安装依赖

```bash
npm install --legacy-peer-deps
```

### 开发模式

```bash
npm run dev:weapp
```

编译输出到 `dist/` 目录，支持热更新监听。

### 生产构建

```bash
npm run build:weapp
```

### 其他平台

```bash
npm run dev:h5       # H5
npm run dev:alipay   # 支付宝小程序
npm run dev:tt       # 抖音小程序
```

## 部署指南

### 微信云开发部署

1. 使用微信开发者工具导入项目根目录
2. 点击顶部「云开发」按钮，开通云开发环境
3. 在云开发控制台创建数据库集合：`orders`、`dishes`、`categories`
4. 右键 `cloudfunctions` 下的每个云函数目录 → 「上传并部署：云端安装依赖」
5. 点击「预览」扫码测试，或点击「上传」发布体验版

### 体验版设置

1. 登录 [微信公众平台](https://mp.weixin.qq.com)
2. 管理 → 版本管理 → 开发版本 → 「选为体验版」
3. 管理 → 成员管理 → 添加体验成员微信号
4. 扫描体验版二维码即可在手机上使用

## 数据策略

项目采用**云开发优先 + 本地存储降级**的双重数据策略：

- **云函数可用时**：数据存储在微信云数据库，支持多用户数据互通
- **云函数不可用时**：自动降级为本地 Storage 持久化，单设备数据不丢失

## 页面预览

| 页面 | 路径 | 说明 |
|------|------|------|
| 点餐 | `pages/menu/index` | 首页，分类浏览 + 购物车 + 下单 |
| 订单 | `pages/order/index` | 订单列表，按状态筛选 |
| 我的 | `pages/mine/index` | 个人中心，功能入口 |
| 菜品详情 | `pages/dishDetail/index` | 菜品大图 + 描述 |
| 菜品管理 | `pages/dishManage/index` | 商家端菜品 CRUD |
| 菜品编辑 | `pages/dishEdit/index` | 新增/编辑菜品表单 |
| 分类管理 | `pages/categoryManage/index` | 商家端分类 CRUD |

## License

MIT
