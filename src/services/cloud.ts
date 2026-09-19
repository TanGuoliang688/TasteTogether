import Taro from '@tarojs/taro';
import login from '../data/login';
import getMenu from '../data/getMenu';
import getOrders from '../data/getOrders';
import createOrder from '../data/createOrder';
import saveDish from '../data/saveDish';
import deleteDish from '../data/deleteDish';
import updateDishStatus from '../data/updateDishStatus';
import saveCategory from '../data/saveCategory';
import deleteCategory from '../data/deleteCategory';
import updateCategorySort from '../data/updateCategorySort';

const isWeapp = process.env.TARO_ENV === 'weapp';

// 使用静态映射而非动态 import，避免小程序端动态加载失败
const mockMap: Record<string, (data?: Record<string, any>) => any> = {
  login,
  getMenu,
  getOrders,
  createOrder,
  saveDish,
  deleteDish,
  updateDishStatus,
  saveCategory,
  deleteCategory,
  updateCategorySort,
};

function callMock<T = any>(name: string, data?: Record<string, any>): T {
  const fn = mockMap[name];
  if (!fn) {
    throw new Error(`本地数据模块不存在: ${name}`);
  }
  return fn(data) as T;
}

export async function callFunction<T = any>(
  name: string,
  data?: Record<string, any>
): Promise<T> {
  if (!isWeapp) {
    return callMock<T>(name, data);
  }

  try {
    const res = await Taro.cloud.callFunction({ name, data });
    const result = res.result as { code: number; message: string; data: T };
    if (result.code !== 0) {
      console.warn(`[Cloud] ${name} 返回异常，降级为本地数据:`, result.message);
      return callMock<T>(name, data);
    }
    return result.data;
  } catch (err) {
    console.warn(`[Cloud] ${name} 调用失败，降级为本地数据:`, err);
    return callMock<T>(name, data);
  }
}

export function getDatabase() {
  if (!isWeapp) {
    return null;
  }
  return Taro.cloud.database();
}