import mongoose from "mongoose";
const { Schema } = mongoose;
import { checkPassword } from "../utils/auth";

const UserSchema = new Schema(
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
      enum: ["instructor", "admin", "root", "revoked"],
      required: [true, "Access Level is required"],
    },
    passwordReset: {
      token: { type: String, default: null },
      expiration: { type: Date, default: null },
    },
  },
  { timestamps: true }
);

UserSchema.methods.checkPassword = function (password) {
  const passwordHash = this.password;
  return checkPassword(password, passwordHash);
};

export default mongoose.models.User || mongoose.model("User", UserSchema);
