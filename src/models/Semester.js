import mongoose from "mongoose";

const semester =  new mongoose.Schema({
    year: {
      type: Number,
      required: true,
      min: 1927,
      max: 3027,
      unique: true
    },
    term: {
      type: String,
      required: true,
      enum: ['Fall', 'Spring', 'Summer']
    }
  }, {timestamps: true})

  export const Semester = mongoose.model('Semester', semesterSchema)