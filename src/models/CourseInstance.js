import { connect } from "utils/db";
await connect();


const courseInstance = new mongoose.Schema({
    userSchema: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'userSchema'
    },
    courseSchema: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'courseSchema'
    },
    semesterSchema: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'semesterSchema'
    },
    studentWorkProjectSchema: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'studentWorkProjectSchema'
    }]
  }, {timestamps: true})

export const CourseInstance = mongoose.model('CourseInstance', courseInstanceSchema)