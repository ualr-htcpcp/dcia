const mongoose = require('mongoose')

const course = new mongoose.Schema({
    title: { 
      type: String,
      required: true
    },
    departmentID: {
      type: String,
      required: true
    },
    courseNumber: {
      type: Number,
      min: 1000,
      max: 9999,
      required: true,
      unique: true
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'department'
    },
    classInstance: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'classInstance'
    },
    studentOutcome: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'studentOutcome'
    }
  }, {timestamps: true})

const Course = mongoose.model('course', course)