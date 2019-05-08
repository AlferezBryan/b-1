const Router = require('koa-router')
const Status = require('../../../models/staff/Status')
const _ = require('lodash')

const router = new Router()

router.get('/', async ctx => {
  ctx.body = await Status.find().sort({userID: 1, createdAt:1})
})

router.get('/:userID', async ctx => {
  const form = await Status.findOne(ctx.params).sort({createdAt:-1})
  ctx.assert(form, 404)
  ctx.body = form
})

module.exports = [
  router.routes(),
  router.allowedMethods()
]
