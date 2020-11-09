import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema(
  {
    name: {
      first: String,
      last: String,
    },
  },
  { timestamps: true }
);

instructorSchema.index({ name: 1 }, { unique: true });

export default mongoose.models.Instructor ||
  mongoose.model("Instructor", instructorSchema);
