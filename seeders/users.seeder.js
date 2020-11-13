import { Seeder } from "mongoose-data-seed";
import User from "../src/models/User";
import { hashPassword } from "../src/utils/auth";

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
    email: "cxchiang@ualr.edu",
    password: "password",
    accessLevel: "instructor",
  },
  {
    email: "pdhuff@ualr.edu",
    password: "password",
    accessLevel: "instructor",
  },
  {
    email: "mgmilanova@ualr.edu",
    password: "password",
    accessLevel: "instructor",
  },
  {
    email: "smorme@ualr.edu",
    password: "password",
    accessLevel: "instructor",
  },
  {
    email: "jpspringer@ualr.edu",
    password: "password",
    accessLevel: "instructor",
  },
  {
    email: "bwkeltch@ualr.edu",
    password: "password",
    accessLevel: "instructor",
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
        return User.create({
          ...user,
          password: await hashPassword(user.password),
        });
      })
    );
  }
}

export default UsersSeeder;
