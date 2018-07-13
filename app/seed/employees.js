const Employee = require('../models/staff/Employee')

async function createEmployees () {
  const employees = await Employee.create([
    { name: 'Darky', auth: { email: 'develop@prodequa.com', password: 'pdqpassword' } },
    { name: 'Carlos Duran', auth: { email: 'carlos@prodequa.com', password: 'pdqpassword' } },
    { name: 'Karin Dreyer', auth: { email: 'karin@prodequa.com', password: 'pdqpassword' } },
    { name: 'Dana Michelle', auth: { email: 'dana@prodequa.com', password: 'pdqpassword' } },
    { name: 'Lucero Díaz', auth: { email: 'lucero@prodequa.com', password: 'pdqpassword' } },
    { name: 'Catherine Mostacero', auth: { email: 'catherine@prodequa.com', password: 'pdqpassword' } }
  ])
  return employees.map(a => a._id)
}

module.exports = { createEmployees }
