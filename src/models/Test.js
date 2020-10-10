import mongoose from "mongoose";
const { Schema } = mongoose;

const TestSchema = new Schema({
  content: { type: String, required: true },
});

const Test = mongoose.model("Test", TestSchema);
export default Test;
