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
    email: "cxchiang@school.edu",
    password: "password",
    accessLevel: "instructor",
  },
  {
    email: "pdhuff@school.edu",
    password: "password",
    accessLevel: "instructor",
  },
  {
    email: "mgmilanova@school.edu",
    password: "password",
    accessLevel: "instructor",
  },
  {
    email: "smorme@school.edu",
    password: "password",
    accessLevel: "instructor",
  },
  {
    email: "jpspringer@school.edu",
    password: "password",
    accessLevel: "instructor",
  },
  {
    email: "bwkeltch@school.edu",
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
