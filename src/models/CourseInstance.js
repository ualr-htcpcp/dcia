import mongoose from "mongoose";

const courseInstanceSchema = new mongoose.Schema(
  {
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Instructor",
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Student",
      },
    ],
    semester: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Semester",
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Course",
    },
    studentWorkProjects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "StudentWorkProject",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.CourseInstance ||
  mongoose.model("CourseInstance", courseInstanceSchema);
