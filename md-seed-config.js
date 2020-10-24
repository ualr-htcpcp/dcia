import mongoose from "mongoose";
import RegistrationRequests from "./seeders/registrationrequests.seeder";
import Users from "./seeders/users.seeder";

mongoose.set("useCreateIndex", true);

const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017/dcia";

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
export const seedersList = {
  RegistrationRequests,
  Users,
};

/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
export const connect = async () =>
  await mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
export const dropdb = async () => mongoose.connection.db.dropDatabase();
