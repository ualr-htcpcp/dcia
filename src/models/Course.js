import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    courseNumber: {
      type: Number,
      min: 1000,
      max: 9999,
      required: true,
      unique: true,
    },
    studentOutcome: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "StudentOutcome",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Course || mongoose.model("Course", courseSchema);
