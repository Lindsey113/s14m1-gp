const db = require('../../data/db-config')

module.exports = {
  checkId,
  checkPayload,
}

async function checkId(req, res, next) {
  const shipper = await db('shippers').where('shipperid', req.params.id).first()
  if(!shipper){
    next({ status: 404, message: "That ID does not exist"})
  } else {
    next()
  }
}

function checkPayload(req, res, next) {
  if(!req.body.phone || !req.body.ShipperName) {
    next({ status: 422, message: "Phone and shipper name are required"})
  } else {
    next()
  }
}
