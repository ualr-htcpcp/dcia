import mongoose from "mongoose";
const { Schema } = mongoose;

const RegistrationRequestSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
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
});

const RegistrationRequest =
  mongoose.models.RegistrationRequest ||
  mongoose.model("RegistrationRequest", RegistrationRequestSchema);
export default RegistrationRequest;
