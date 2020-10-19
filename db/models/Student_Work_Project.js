const mongoose = require('mongoose')

const studentWorkProject = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    courseNumber: {
      type: Number,
      required: True,
      min: 1000,
      max: 9999
    },
    type: {
      type: String,
      enum: ['Assignment', 'Test', 'Project'],
      required: true,
    },
    studentWorkProjectID: {
      type: String,
      required: true,
      unique: true
    },
    classInstance: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'classInstance'
    },
    studentWorkProject: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'studentWorkProject'
    }
  }, {timestamps: true})

  const StudentWorkProject = mongoose.model('studentWorkProject', studentWorkProject)