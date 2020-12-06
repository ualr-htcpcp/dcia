import mongoose from "mongoose";

const assessmentSchema = new mongoose.Schema(
  {
    score: {
      type: Number,
      required: true,
      enum: [0, 1, 2, 3, 4],
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Student",
    },
    studentWorkProject: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "StudentWorkProject",
    },
    studentOutcomes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "StudentOutcome",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Assessment ||
  mongoose.model("Assessment", assessmentSchema);
