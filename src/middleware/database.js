import mongoose from "mongoose";

const client = mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

async function database(req, res, next) {
  if (!client) {
    await client;
  }

  return next();
}

export default database;
