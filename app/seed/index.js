require('../../env')
const mongoose = require('mongoose')
const { createEmployees } = require('./employees')

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise
var db = mongoose.connection
db.on('error', console.error)
db.once('open', run)

async function run () {
  try {
    await createEmployees()
    console.log('Employees created')
  } catch (e) {
    console.log(e.message)
  } finally {
    db.close()
  }
}
