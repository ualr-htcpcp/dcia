import mongoose from "mongoose";
import { NAME_REGEX } from "../utils/validation";

const nameOptions = {
  type: String,
  required: true,
  trim: true,
  match: NAME_REGEX,
};

const studentSchema = new mongoose.Schema(
  {
    name: {
      first: nameOptions,
      last: nameOptions,
    },
  },
  { timestamps: true }
);

studentSchema.index(
  { name: 1 },
  { unique: true, collation: { locale: "en", strength: 2 } }
);

export default mongoose.models.Student ||
  mongoose.model("Student", studentSchema);
