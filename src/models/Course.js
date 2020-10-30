import mongoose from "mongoose";

const course = new mongoose.Schema({
    title: { 
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
    courseInstance: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'CourseInstance'
    }],
    studentOutcome: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'StudentOutcome'
    }]
  }, {timestamps: true})

export const Course = mongoose.model('Course', courseSchema)