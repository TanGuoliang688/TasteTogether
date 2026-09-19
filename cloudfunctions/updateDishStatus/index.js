const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()

exports.main = async (event) => {
  try {
    const { id, onSale, soldOut } = event
    if (!id) {
      return { code: -1, message: '缺少菜品 id', data: null }
    }
    const payload = {}
    if (typeof onSale === 'boolean') payload.onSale = onSale
    if (typeof soldOut === 'boolean') payload.soldOut = soldOut
    if (Object.keys(payload).length === 0) {
      return { code: -1, message: '无更新内容', data: null }
    }
    await db.collection('dishes').doc(id).update({ data: payload })
    return { code: 0, message: 'success', data: { dishId: id } }
  } catch (err) {
    console.error('[updateDishStatus] error:', err)
    return { code: -1, message: err.message || '服务异常', data: null }
  }
}