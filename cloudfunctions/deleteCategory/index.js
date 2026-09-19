const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()

exports.main = async (event) => {
  try {
    const { id } = event
    if (!id) {
      return { code: -1, message: '缺少分类 id', data: null }
    }
    const countRes = await db.collection('dishes').where({ categoryId: id }).count()
    if (countRes.total > 0) {
      return { code: -1, message: '该分类下还有菜品，无法删除', data: null }
    }
    await db.collection('categories').doc(id).remove()
    return { code: 0, message: 'success', data: { deleted: true } }
  } catch (err) {
    console.error('[deleteCategory] error:', err)
    return { code: -1, message: err.message || '服务异常', data: null }
  }
}