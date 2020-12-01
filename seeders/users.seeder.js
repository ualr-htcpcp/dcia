import { Seeder } from "mongoose-data-seed";
import User from "../src/models/User";
import Instructor from "../src/models/Instructor";
import { hashPassword } from "../src/utils/auth";

const data = async () => {
  const instructors = await Instructor.find({});
  return [
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
      email: "test@example.com",
      password: "password",
      accessLevel: "instructor",
      instructor: instructors[1],
    },
  ];
};
class UsersSeeder extends Seeder {
  async shouldRun() {
    return User.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    const users = await data();

    return Promise.all(
      users.map(async (user) => {
        return User.create({
          ...user,
          password: await hashPassword(user.password),
        });
      })
    );
  }
}

export default UsersSeeder;
