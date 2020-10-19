const mongoose = require('mongoose')

const studentOutcome = new mongoose.Schema({
    studentOutcomeNumber: {
      type: Number,
      required: true,
      enum: [0, 1, 2, 3, 4]
    },
    departmentID: {
      type: String,
      required: true
    },
    definition: {
      type: String,
      required: true
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'course'  
    }
  }, {timestamps: true})

  const StudentOutcome = mongoose.model('studentOutcome', studentOutcome)