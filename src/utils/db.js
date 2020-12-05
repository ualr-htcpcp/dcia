import mongoose from "mongoose";

export const connect = () => {
  if (process.env.NODE_ENV === "development") {
    mongoose.set("debug", true);
  }
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};
