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
      enum: ["spring", "summer", "fall"],
    },
    isCurrent: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);

semesterSchema.index({ year: 1, term: 1 }, { unique: true });

semesterSchema.statics.getIdOnly = function (term, year) {
  return this.findOne({ term: term, year: year }).select("_id").lean();
};

export default mongoose.models?.Semester ||
  mongoose.model("Semester", semesterSchema);
