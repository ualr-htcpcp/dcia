import mongoose from "mongoose";

const nameOptions = {
  type: String,
  required: true,
  trim: true,
  match: /^[a-zA-Z\s]+$/,
};

const instructorSchema = new mongoose.Schema(
  {
    name: {
      first: nameOptions,
      last: nameOptions,
    },
  },
  { timestamps: true }
);

instructorSchema.index(
  { name: 1 },
  { unique: true, collation: { locale: "en", strength: 2 } }
);

export default mongoose.models.Instructor ||
  mongoose.model("Instructor", instructorSchema);
