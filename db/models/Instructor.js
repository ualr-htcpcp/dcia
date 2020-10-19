const mongoose = require('mongoose')

const instructor = new mongoose.Schema({
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
      required: true,
      unique: true
    },
    credentials: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'credentials'
    },
    classInstance: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'classInstance'
    }
  }, {timestamps: true})

  const Instructor = mongoose.model('instructor', instructor)