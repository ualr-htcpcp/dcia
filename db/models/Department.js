const mongoose = require('mongoose')

const department = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true,
      unique: true
    },
    studentOutcome: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'studentOutcome'
    }, 
    instructors: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'instructors'
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'course'
    }
  }, {timestamps: true})

const Department =  mongoose.model('department', department)