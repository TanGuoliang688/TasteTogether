const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()

exports.main = async (event, context) => {
  try {
    const [categoriesRes, dishesRes] = await Promise.all([
      db.collection('categories').orderBy('sort', 'asc').get(),
      db.collection('dishes').get(),
    ])
    return {
      code: 0,
      message: 'success',
      data: {
        categories: categoriesRes.data,
        dishes: dishesRes.data,
      },
    }
  } catch (err) {
    console.error('[getMenu] error:', err)
    return { code: -1, message: err.message || '服务异常', data: null }
  }
}