const mongoose = require('mongoose')

const semester =  new mongoose.Schema({
    year: {
      type: Number,
      required: true,
      min: 1927,
      max: 3027,
      unique: true
    },
    term: {
      type: String,
      required: true,
      enum: ['Fall', 'Spring', 'Summer']
    },
    semesterID: {
      type: String,
      required: true,
      unique: true
    },
    classInstance: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'classInstance'
    }
  }, {timestamps: true})

  const Semester = mongoose.model('semester', semester)