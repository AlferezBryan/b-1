const mongoose = require('mongoose')

var formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
})

module.exports = mongoose.model('Form', formSchema)
