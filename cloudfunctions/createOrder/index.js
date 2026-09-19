const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()

exports.main = async (event, context) => {
  try {
    const wxContext = cloud.getWXContext()
    const openid = wxContext.OPENID
    const { items = [], tableNo = 'A01', totalPrice = 0 } = event

    const res = await db.collection('orders').add({
      data: {
        _openid: openid,
        orderNo: `NO${Date.now()}`,
        tableNo,
        items,
        totalPrice,
        status: 'pending',
        createTime: db.serverDate(),
      },
    })

    return { code: 0, message: 'success', data: { orderId: res._id } }
  } catch (err) {
    console.error('[createOrder] error:', err)
    return { code: -1, message: err.message || '服务异常', data: null }
  }
}