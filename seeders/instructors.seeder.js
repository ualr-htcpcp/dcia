import { Seeder } from "mongoose-data-seed";
import Instructor from "../src/models/Instructor";

const data = [
  {
    name: { first: "Albert", last: "Baker" },
    user: "5fa3767d3c24ec15845f7562",
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
