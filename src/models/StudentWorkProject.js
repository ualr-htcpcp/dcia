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
  },
  { timestamps: true }
);

export default mongoose.models.StudentWorkProject ||
  mongoose.model("StudentWorkProject", studentWorkProjectSchema);
