import mongoose from "mongoose";

const semesterSchema = new mongoose.Schema(
  {
    year: {
      type: Number,
      required: true,
      min: 1927,
      max: 3027,
    },
    term: {
      type: String,
      required: true,
      enum: ["Fall", "Spring", "Summer"],
    },
    isCurrent: {
      boolean: false,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Semester ||
  mongoose.model("Semester", semesterSchema);
