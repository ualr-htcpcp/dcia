import mongoose from "mongoose";
const { Schema } = mongoose;
import { hashPassword } from "../utils/auth";
import { sendRegistrationConfirmation } from "../utils/email";

const RegistrationRequestSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    accessLevel: {
      type: String,
      enum: ["instructor", "admin"],
      required: [true, "Access Level is required"],
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

// Hash password when password changes
RegistrationRequestSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();
    const hashed = await hashPassword(this.password);
    this.password = hashed;
    return next();
  } catch (err) {
    return next(err);
  }
});

RegistrationRequestSchema.pre("save", function (next) {
  this.wasNew = this.isNew;
  next();
});

RegistrationRequestSchema.post("save", async function () {
  if (this.wasNew) {
    // Send success email to user
    try {
      const sent = await sendRegistrationConfirmation(this.email);

      if (!sent) {
        throw new Error("Error sending notification email to new user.");
      }
    } catch (err) {
      console.log(err);
    }
  }
});

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
