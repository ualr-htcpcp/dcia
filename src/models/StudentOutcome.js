import mongoose from "mongoose";

const studentOutcomeSchema = new mongoose.Schema(
  {
    number: {
      type: Number,
      required: true,
      trim: true,
      unique: true,
    },
    definition: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models?.StudentOutcome ||
  mongoose.model("StudentOutcome", studentOutcomeSchema);
