const mongoose = require('mongoose')

const classInstance = new mongoose.Schema({
    semesterID: {
      type: String,
      required: true
    },
    courseNumber: {
      type: Number,
      required: true,
      min: 1000,
      max: 9999
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'instructor'
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'course'
    },
    semester: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'semester'
    },
    studentWorkProject: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'studentWorkProject'
    }
  }, {timestamps: true})

const ClassInstance = mongoose.model('classInstance', classInstance)