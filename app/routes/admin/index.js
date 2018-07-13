const Router = require('koa-router')
const Employee = require('../../models/Employee')
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
  // '/posts',
  // '/post-categories',
  ...[
    '/form'
  ].map(p => '/contact' + p),
  ...[
    '/natural-region',
    '/region',
    '/province',
    '/district',
    '/tourist-place'
  ].map(p => '/basics' + p),
  ...['/adventure-type',
    '/adventure-module',
    '/adventure',
    '/lodging',
    '/nightlife',
    '/tickets',
    '/restaurant'
  ].map(p => '/business' + p),
  '/account'
]

for (let r of children) {
  router.use(r, ...require('.' + r))
}

// Export
module.exports = [router.routes(), router.allowedMethods()]