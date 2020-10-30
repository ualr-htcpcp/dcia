import mongoose from "mongoose";

const studentOutcome = new mongoose.Schema({
    studentOutcomeNumber: {
      type: Number,
      required: true
    },
    definition: {
      type: String,
      required: true
    }
  }, {timestamps: true})

  export const StudentOutcome = mongoose.model('StudentOutcome', studentOutcomeSchema)