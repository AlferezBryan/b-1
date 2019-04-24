const mongoose = require('mongoose')
const authSchema = require('./_auth')

var employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  auth: {
    type: authSchema,
    required: true
  },
  avatar: {
    type: String,
    required: true,
    default: 'https://placehold.it/400'
  },
  height: {
    type: String,
    deafult: ''
  },
  width: {
    type: String,
    deafult: ''
  },
  style: {
    type: String,
    deafult: ''
  },
  age: {
    type: String,
    deafult: ''
  },
  illness1: {
    type: Boolean,
    deafult: false
  },
  illness2: {
    type: Boolean,
    deafult: false
  },
  illness3: {
    type: Boolean,
    deafult: false
  },
  illness4: {
    type: Boolean,
    deafult: false
  },
  diet: {
    type: String,
    deafult: ''
  }
}, {
  toJSON: { virtuals: true }
})

module.exports = mongoose.model('Employee', employeeSchema)
