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
    default: ''
  },
  gender: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: ''
  },
  style: {
    type: String,
    default: ''
  },
  age: {
    type: String,
    default: ''
  },
  illness1: {
    type: Boolean,
    default: false
  },
  illness2: {
    type: Boolean,
    default: false
  },
  illness3: {
    type: Boolean,
    default: false
  },
  illness4: {
    type: Boolean,
    default: false
  },
  diet: {
    type: String,
    default: ''
  },
  tmb: {
    type: String,
    default: ''
  },
  imc: {
    type: String,
    default: ''
  }
}, {
  toJSON: { virtuals: true }
})

module.exports = mongoose.model('Employee', employeeSchema)
