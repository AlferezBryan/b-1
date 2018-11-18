const Employee = require('../models/staff/Employee')

async function createEmployees () {
  const employees = await Employee.create([
    { name: 'Bryan', auth: { email: 'baae.1996@gmail.com', password: '123456' } }
  ])
  return employees.map(a => a._id)
}

module.exports = { createEmployees }
