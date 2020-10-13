import mongoose from "mongoose";
const { Schema } = mongoose;

const RegistrationRequestSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    accessLevel: {
      type: String,
      enum: ["instructor", "admin"],
      required: true,
    },
    requestStatus: {
      type: String,
      enum: ["pending", "approved", "denied"],
      default: "pending",
      required: true,
    },
  },
  { timestamps: true }
);

/**
  For some reason using const RegistrationRequest = mongoose.model("RegistrationRequest", RegistrationRequestSchema);
  gives the error: OverwriteModelError: Cannot overwrite `RegistrationRequest` model once compiled.

  I found the solution below in a Github comment, and don't see the error now.
  If you have a better solution, please let me know!
*/
const RegistrationRequest =
  mongoose.models.RegistrationRequest ||
  mongoose.model("RegistrationRequest", RegistrationRequestSchema);
export default RegistrationRequest;
