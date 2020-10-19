const mongoose = require('mongoose')

const registrationRequest = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ['Instructor', 'Administrator']
  },
  requestNumber: {
    type: Number,
    required: true,
    min: 0,
    max: 99999,
    unique: true
  }
}, {timestamps: true})

const RegistrationRequest = mongoose.model('registrationRequest', registrationRequest)