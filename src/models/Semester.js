import mongoose from "mongoose";

const semesterSchema =  new mongoose.Schema({
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

  export default mongoose.models.Semester || mongoose.model('Semester', semesterSchema)