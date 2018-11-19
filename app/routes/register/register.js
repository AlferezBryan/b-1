const Router = require('koa-router')
const Employee = require('../../models/staff/Employee')

const router = new Router()

router.post('/', async ctx => {
  await Employee.create(ctx.request.body)
  ctx.body = { message: 'Creado' }
})

// router.get('/', async ctx => {
//   ctx.body = await Employee.find({}, '-auth.password')
// })

module.exports = [
  router.routes(),
  router.allowedMethods()
]
