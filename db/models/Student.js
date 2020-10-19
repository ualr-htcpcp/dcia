const mongoose = require('mongoose')

const student =  new mongoose.Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName : { 
      type: String,
      required: true
    },
    tNumber: {
      type: Number,
      required: true,
      unigue: true,
      min: 0,
      max: 99999999
    },
    classInstance: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'classInstance'
    }
  }, {timestamps: true})

  const Student = mongoose.model('student', student)