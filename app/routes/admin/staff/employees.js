const Router = require('koa-router')
const Employee = require('../../../models/staff/Employee')

const router = new Router()

router.get('/', async ctx => {
  ctx.body = await Employee.find({}, '-auth.password')
})

// router.post('/', async ctx => {
//   await Employee.create(ctx.request.body)
//   ctx.body = { message: 'Creado' }
// })

router.put('/:_id', async ctx => {
  const employee = await Employee.findOne(ctx.params)
  ctx.assert(employee, 404)
  await employee.save()
  ctx.body = { message: 'Actualizado!' }
})

router.del('/:_id', async ctx => {
  const { n } = await Employee.remove(ctx.params)
  ctx.assert(n, 404)
  ctx.body = { message: 'Eliminado' }
})

module.exports = [
  router.routes(),
  router.allowedMethods()
]
