import mongoose from "mongoose";

const studentOutcomeSchema = new mongoose.Schema(
  {
    studentOutcomeNumber: {
      type: Number,
      required: true,
    },
    definition: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.StudentOutcome ||
  mongoose.model("StudentOutcome", studentOutcomeSchema);
