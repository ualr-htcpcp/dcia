import mongoose from "mongoose";

const assessment = new mongoose.Schema({
    score: {
      type: Number,
      required: true,
      enum: [0, 1, 2, 3, 4]
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Student'
    },
    studentWorkProject: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'StudentWorkProject'
    }
  }, {timestamps: true})

export const Assessment = mongoose.model('Assessment', assessmentSchema)