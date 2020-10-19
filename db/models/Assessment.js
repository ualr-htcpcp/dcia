const mongoose = require('mongoose')

const assessment = new mongoose.Schema({
    tNumber: {
      type: Number,
      required: true,
      min: 0,
      max: 99999999
    },
    studentOutcomeNumber: {
      type: [Number],
      required: true,
    },
    studentWorkProjectID: {
      type: String,
      required: true
    },
    score: {
      type: Number,
      required: true,
      enum: [0, 1, 2, 3, 4]
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'student'
    },
    studentWorkProject: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'studentWorkProject'
    },
    studentOutcome: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'studentOutcome'
    }]
  }, {timestamps: true})

const Assessment = mongoose.model('assessment', assessment)