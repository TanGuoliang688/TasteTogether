const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()

exports.main = async (event, context) => {
  try {
    const { id } = event
    await db.collection('dishes').doc(id).remove()
    return { code: 0, message: 'success', data: { deleted: true } }
  } catch (err) {
    console.error('[deleteDish] error:', err)
    return { code: -1, message: err.message || '服务异常', data: null }
  }
}