import mongoose from "mongoose";
const { Schema } = mongoose;
import { checkPassword, hashPassword } from "../utils/auth";
import {
  sendAccessLevelChange,
  sendPasswordResetConfirmation,
  sendPasswordResetEmail,
} from "../utils/email";

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

UserSchema.methods.checkResetToken = function () {
  const now = new Date();
  return now <= this.passwordReset.expiration;
};
UserSchema.methods.checkPassword = function (password) {
  const passwordHash = this.password;
  return checkPassword(password, passwordHash);
};

// Reset password, clear passwordReset token/expiry
UserSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();
    const hashed = await hashPassword(this.password);
    this.password = hashed;
    this.passwordReset.token = null;
    this.passwordReset.expiration = null;
    return next();
  } catch (err) {
    return next(err);
  }
});

// Password reset requested
UserSchema.post("save", async function (doc, next) {
  try {
    if (doc.passwordReset.token && doc.passwordReset.expiration) {
      await sendPasswordResetEmail(doc.email, doc.passwordReset.token);
    }
    next();
  } catch (err) {
    return next(err);
  }
});

// Password reset successful
UserSchema.post("save", async function (doc, next) {
  try {
    if (this.isModified("password")) {
      await sendPasswordResetConfirmation(doc.email);
    }
    next();
  } catch (err) {
    next(err);
  }
});

// Access level changed
UserSchema.post("save", async function (doc, next) {
  try {
    if (this.isModified("accessLevel")) {
      await sendAccessLevelChange(doc.email, doc.accessLevel);
    }
    next();
  } catch (err) {
    next(err);
  }
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
