const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()

exports.main = async (event) => {
  try {
    const { id, sort } = event
    if (!id || typeof sort !== 'number') {
      return { code: -1, message: '参数错误', data: null }
    }
    await db.collection('categories').doc(id).update({ data: { sort } })
    return { code: 0, message: 'success', data: { categoryId: id } }
  } catch (err) {
    console.error('[updateCategorySort] error:', err)
    return { code: -1, message: err.message || '服务异常', data: null }
  }
}