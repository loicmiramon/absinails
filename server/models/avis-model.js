const mongoose = require('mongoose')
const { Schema } = mongoose

const avisSchema = new Schema({
  name: {
    type: String,
    required: true,
    lowerCase: true,
    trim: true
  },
  note: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true,
    trim: true,
  }
})

module.exports = mongoose.model('avis', avisSchema)