import mongoose from "mongoose";
import { NAME_REGEX } from "../utils/validation";

const nameOptions = {
  type: String,
  required: true,
  trim: true,
  match: NAME_REGEX,
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
