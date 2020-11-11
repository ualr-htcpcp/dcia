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

// Send email when access level changes
UserSchema.post("findOneAndUpdate", async function () {
  try {
    const update = this.getUpdate();
    const query = this.getFilter();

    if (update["$set"].accessLevel) {
      const updatedUser = await User.findOne({
        _id: query._id,
      });

      await sendAccessLevelChange(
        updatedUser.email,
        update["$set"].accessLevel
      );
    }
  } catch (err) {
    console.log(err);
  }
});

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

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
