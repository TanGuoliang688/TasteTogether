const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()

async function getMaxSort() {
  const res = await db.collection('categories').orderBy('sort', 'desc').limit(1).get()
  return res.data.length ? res.data[0].sort : 0
}

exports.main = async (event) => {
  try {
    const { id, name, sort } = event
    if (!name || !String(name).trim()) {
      return { code: -1, message: '分类名称不能为空', data: null }
    }
    const trimmedName = String(name).trim()

    if (id) {
      const payload = { name: trimmedName }
      if (typeof sort === 'number') payload.sort = sort
      await db.collection('categories').doc(id).update({ data: payload })
      return { code: 0, message: 'success', data: { categoryId: id } }
    }

    const targetSort = typeof sort === 'number' ? sort : (await getMaxSort()) + 1
    const res = await db.collection('categories').add({
      data: { name: trimmedName, sort: targetSort, createTime: db.serverDate() },
    })
    return { code: 0, message: 'success', data: { categoryId: res._id } }
  } catch (err) {
    console.error('[saveCategory] error:', err)
    return { code: -1, message: err.message || '服务异常', data: null }
  }
}