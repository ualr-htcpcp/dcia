import { Seeder } from "mongoose-data-seed";
import Instructor from "../src/models/Instructor";

const data = [
  {
    name: { first: "Albert", last: "Baker" },
  },
];

class InstructorsSeeder extends Seeder {
  async shouldRun() {
    return Instructor.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    return Promise.all(
      data.map(async (instructor) => {
        return Instructor.create(instructor);
      })
    );
  }
}

export default InstructorsSeeder;
