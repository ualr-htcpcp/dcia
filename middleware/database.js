import mongoose from "mongoose";

const client = mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client) {
    await client;
    console.log("connecting to mongo");
  } else {
    console.log("mongo already connected");
  }

  return next();
}

export default database;
