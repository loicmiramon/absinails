const mongoose = require('mongoose')
const {Schema} = mongoose

const contactSchema = new Schema({
  lastname: {
    type: String,
    required: true,
    trim: true
  },
  firstname: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowerCase: true,
    trim: true
  },
  phone: {
    type: String,
    trim: true,
    required: true
  },
  service: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('contact', contactSchema)