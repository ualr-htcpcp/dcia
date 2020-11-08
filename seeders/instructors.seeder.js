import { Seeder } from "mongoose-data-seed";
import Instructor from "../src/models/Instructor";
import User from "../src/models/User";

const data = async () => {
  const albertBaker = await User.findOne({ email: "instructor@example.com", accessLevel: "instructor" });
  return [
    {
      name: { first: "Albert", last: "Baker" },
      user: albertBaker,
    },
  ];
};

class InstructorsSeeder extends Seeder {
  async shouldRun() {
    return Instructor.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    const instructors = await data();

    return Promise.all(
      instructors.map(async (instructor) => {
        return Instructor.create(instructor);
      })
    );
  }
}

export default InstructorsSeeder;
