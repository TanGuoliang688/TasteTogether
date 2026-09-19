const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()

exports.main = async (event, context) => {
  try {
    const { id, name, price, categoryId, description, image } = event
    const payload = { name, price, categoryId, description, image }

    if (id) {
      await db.collection('dishes').doc(id).update({ data: payload })
      return { code: 0, message: 'success', data: { dishId: id } }
    }

    const res = await db.collection('dishes').add({
      data: { ...payload, sales: 0, createTime: db.serverDate() },
    })
    return { code: 0, message: 'success', data: { dishId: res._id } }
  } catch (err) {
    console.error('[saveDish] error:', err)
    return { code: -1, message: err.message || '服务异常', data: null }
  }
}