const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()

exports.main = async (event, context) => {
  try {
    const wxContext = cloud.getWXContext()
    const openid = wxContext.OPENID
    const { status } = event

    const where = status ? { _openid: openid, status } : { _openid: openid }
    const res = await db.collection('orders').where(where).orderBy('createTime', 'desc').get()

    const orders = res.data.map((o) => ({
      ...o,
      id: o._id,
      createTime: o.createTime ? new Date(o.createTime).getTime() : Date.now(),
    }))

    return { code: 0, message: 'success', data: { orders } }
  } catch (err) {
    console.error('[getOrders] error:', err)
    return { code: -1, message: err.message || '服务异常', data: null }
  }
}