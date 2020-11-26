import { Seeder } from "mongoose-data-seed";
import Instructor from "../src/models/Instructor";
import faker from "faker";

var instructor;
const data = [];
for (let i = 0; i < 8; i++) {
  instructor = {
    name: { first: faker.name.firstName(), last: faker.name.lastName() },
  };
  data[i] = instructor;
}

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
