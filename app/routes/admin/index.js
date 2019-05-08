const Router = require('koa-router')
const Employee = require('../../models/staff/Employee')
const koaJwt = require('koa-jwt')
const router = new Router()

router.get('/', async ctx => {
  ctx.body = { message: 'Employee' }
})

// Expose auth routes
router.use('/auth', ...require('./auth'))

// Enable JWT for the next routes
router.use(koaJwt({ secret: process.env.APP_SECRET, key: 'jwtdata' }))

// Set employee
router.use(async (ctx, next) => {
  const { id } = ctx.state.jwtdata
  const employee = await Employee.findOne({ _id: id })
  ctx.assert(employee, 401, 'Employee doesn\'t exist!')
  ctx.state.employee = employee
  await next()
})

// Children routes
const children = [
  // '/courses',
  '/staff/employees',
  '/staff/status',
  // '/posts',
  // '/post-categories',
  '/account'
]

for (let r of children) {
  router.use(r, ...require('.' + r))
}

// Export
module.exports = [router.routes(), router.allowedMethods()]
