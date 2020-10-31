import mongoose from "mongoose";

const courseInstanceSchema = new mongoose.Schema({
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Instructor'
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Student'
    },
    semester: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Semester'
    },
    studentWorkProject: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'StudentWorkProject'
    }]
  }, {timestamps: true})

  export default mongoose.models.CourseInstance || mongoose.model('CourseInstance', courseInstanceSchema);