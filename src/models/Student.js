import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      first: String,
      last: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Student ||
  mongoose.model("Student", studentSchema);
