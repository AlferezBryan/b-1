const Router = require('koa-router')
const jwt = require('jsonwebtoken')
const Employee = require('../../models/staff/Employee')

const router = new Router()

router.post('/login', login)

module.exports = [
  router.routes(),
  router.allowedMethods()
]

async function login (ctx, next) {
  const body = ctx.request.body
  const employee = await Employee.findOne({ 'auth.email': body.email })
  ctx.assert(employee, 401, 'Auth failed! (Employee not found)')
  const match = await employee.auth.comparePassword(body.password)
  ctx.assert(match, 401, 'Auth failed! Wrong password')
  const token = jwt.sign({ id: employee._id, type: 'employee' }, process.env.APP_SECRET)
  ctx.body = { token, message: 'Auth success' }
}
