const Router = require('koa-router')
const Employee = require('../../models/staff/Employee')
const router = new Router()

router.get('/', async ctx => {
  ctx.body = { message: 'Site' }
})

// Children routes
const children = [
  '/register'
]

for (let r of children) {
  router.use(r, ...require('.' + r))
}

// Export
module.exports = [router.routes(), router.allowedMethods()]
