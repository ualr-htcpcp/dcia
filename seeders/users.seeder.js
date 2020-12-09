import { Seeder } from "mongoose-data-seed";
import Instructor from "../src/models/Instructor";
import User from "../src/models/User";
import { createExpirationDate, hashPassword } from "../src/utils/auth";
import { fakeTimestamps } from "../src/utils/faker";

const data = [
  {
    email: "instructor@example.com",
    password: "instructor",
    accessLevel: "instructor",
  },
  {
    email: "admin@example.com",
    password: "admin",
    accessLevel: "admin",
  },
  {
    email: "revoked@example.com",
    password: "revoked",
    accessLevel: "revoked",
  },
  {
    email: "htcpcp.dcia@gmail.com",
    password: "root1",
    accessLevel: "root",
  },
  {
    email: "resetme@example.com",
    password: "forgot",
    accessLevel: "admin",
    passwordReset: {
      token: "abcdefg",
      expiration: createExpirationDate(new Date()),
    },
  },
  {
    email: "expired@example.com",
    password: "forgot",
    accessLevel: "instructor",
    passwordReset: {
      token: "abcdefg1234",
      expiration: new Date("01-01-2020"),
    },
  },
];

class UsersSeeder extends Seeder {
  async shouldRun() {
    return User.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    return Promise.all(
      data.map(async (user) => {
        let instructor = null;
        if (user.accessLevel === "instructor") {
          instructor = await Instructor.aggregate([{ $sample: { size: 1 } }]);
          instructor = instructor[0]._id;
        }
        return User.collection.insertOne({
          ...user,
          password: await hashPassword(user.password),
          instructor,
          ...fakeTimestamps(),
        });
      })
    );
  }
}

export default UsersSeeder;
