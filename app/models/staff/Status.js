const mongoose = require('mongoose')

var statusSchema = new mongoose.Schema({
  userID: {
    type: String,
  },
  age: {
    type: String,
    default: ''
  },
  height: {
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
  timestamps: true,
  toJSON: { virtuals: true }
})

module.exports = mongoose.model('Status', statusSchema)
