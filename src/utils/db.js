import mongoose from "mongoose";

export const connect = () => mongoose.connect(process.env.MONGO_URL);
