import mongoose from "mongoose";

const client = mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
if (process.env.NODE_ENV === "development") {
  mongoose.set("debug", true);
}

async function database(req, res, next) {
  if (!client) await client;
  req.dbClient = client;

  return next();
}

export default database;
