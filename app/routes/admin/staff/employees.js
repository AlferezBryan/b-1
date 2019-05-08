const Router = require('koa-router')
const Employee = require('../../../models/staff/Employee')
const Status = require('../../../models/staff/Status')
const _ = require('lodash')

const router = new Router()

router.get('/', async ctx => {
  ctx.body = await Employee.find({}, '-auth.password')
})

router.get('/:_id', async ctx => {
  const form = await Employee.findOne(ctx.params)
  ctx.assert(form, 404)
  ctx.body = form
})

// router.post('/', async ctx => {
//   await Employee.create(ctx.request.body)
//   ctx.body = { message: 'Creado' }
// })

router.put('/:_id', async ctx => {
  const employee = await Employee.findOne(ctx.params)
  const body1 = _.pick(ctx.request.body, ['name', 'gender'])
  _.merge(employee, body1)
  await employee.save()
  const body2 = _.pick(ctx.request.body, ['height', 'age', 'width', 'style', 'illness1', 'illness2', 'illness3', 'illness4', 'tmb', 'imc'])
  body2.userID = ctx.params._id
  console.log(body2);
  await Status.create(body2)
  const xd = await Status.findOne({"userID": ctx.params._id})
  console.log(xd);
  //   ctx.body = { message: 'Creado' }

  // console.log(employee);
  // console.log(body);
  // const { employee } = ctx.state
  // _.merge(employee, body)
  // await employee.save()

  // const employee = await Employee.findOne(ctx.params)
  // ctx.assert(employee, 404)
  // await employee.save()
  // console.log(employee);
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
