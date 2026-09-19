import React, { useEffect } from 'react';
import Taro, { useDidShow, useDidHide } from '@tarojs/taro';
// 全局样式
import './app.scss';

function App(props: { children?: React.ReactNode }) {
  // 初始化云开发（仅微信小程序平台，不传 env 则使用默认云环境）
  useEffect(() => {
    if (process.env.TARO_ENV === 'weapp') {
      try {
        Taro.cloud.init({ traceUser: true });
      } catch (err) {
        console.warn('[App] 云开发初始化失败（将使用本地数据）:', err);
      }
    }
  }, []);

  // 对应 onShow
  useDidShow(() => {});

  // 对应 onHide
  useDidHide(() => {});

  return props.children;
}

export default App;
