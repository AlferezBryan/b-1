const Router = require('koa-router')
const _ = require('lodash')

const router = new Router()

router.get('/', async ctx => {
  const employee = _.omit(ctx.state.employee.toJSON(), 'auth.password')
  ctx.body = { user: employee }
})

router.put('/', async ctx => {
  const body = _.pick(ctx.request.body, ['name', 'charge', 'auth.password', 'avatar'])
  const { employee } = ctx.state
  _.merge(employee, body)
  await employee.save()
  _.unset(employee, 'auth.password')
  ctx.body = { message: 'Actualizado', employee }
})

module.exports = [
  router.routes(),
  router.allowedMethods()
]
