import mongoose from "mongoose";

const studentWorkProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    studentOutcomes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "StudentOutcome",
      },
    ],
    course: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Course",
    },
  },
  { timestamps: true }
);

export default mongoose.models.StudentWorkProject ||
  mongoose.model("StudentWorkProject", studentWorkProjectSchema);
