const Router = require('koa-router')
const Form = require('../../../models/contact/Form')

const router = new Router()

router.get('/', async ctx => {
  ctx.body = await Form.find()
})

router.get('/:_id', async ctx => {
  const form = await Form.findOne(ctx.params)
  ctx.assert(form, 404)
  ctx.body = form
})

router.post('/', async ctx => {
  var form = await Form.create(ctx.request.body)
  ctx.body = { form, message: 'Creado' }
})

module.exports = [
  router.routes(),
  router.allowedMethods()
]
