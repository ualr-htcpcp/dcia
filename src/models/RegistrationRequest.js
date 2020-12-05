import mongoose from "mongoose";
const { Schema } = mongoose;
import { hashPassword } from "../utils/auth";
import {
  getLocationData,
  sendRegistrationConfirmation,
  sendRegistrationRequestUpdate,
  sendRootUserNotification,
} from "../utils/email";

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
    locationInformation: {
      ipAddress: String,
      location: String,
    },
  },
  { timestamps: true }
);

// Send email when requestStatus is updated
RegistrationRequestSchema.post("findOneAndUpdate", async function () {
  const update = this.getUpdate();
  const query = this.getFilter();

  if (update["$set"].requestStatus) {
    const updatedRequest = await RegistrationRequest.findOne({
      _id: query._id,
    });

    await sendRegistrationRequestUpdate(
      updatedRequest.email,
      update["$set"].requestStatus
    );
  }
});

// Add location data to request for security
RegistrationRequestSchema.pre("save", async function (next) {
  try {
    const location = await getLocationData(this.locationInformation.ipAddress);
    this.locationInformation.location = location;

    return next();
  } catch (err) {
    return next();
  }
});

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
    // Send success email to user, notify root users of new registration request
    try {
      const requestDetails = {
        email: this.email,
        accessLevel: this.accessLevel,
        ipAddress: this.locationInformation.ipAddress,
        location: this.locationInformation.location,
      };
      await sendRegistrationConfirmation(requestDetails);
      await sendRootUserNotification(requestDetails);
    } catch (err) {
      //TODO: is there better error handling we can do here?
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
