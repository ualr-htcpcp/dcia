import mongoose from "mongoose";

const studentWorkProject = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    studentOutcome: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'StudentOutcome'
    }]
  }, {timestamps: true})

  export const StudentWorkProject = mongoose.model('StudentWorkProject', studentWorkProjectSchema)