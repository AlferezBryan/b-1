const Employee = require('../models/staff/Employee')

async function createEmployees () {
  const employees = await Employee.create([
    { name: 'Bryan', auth: { username: 'bryanxdz', password: '123' } }
  ])
  return employees.map(a => a._id)
}

module.exports = { createEmployees }
