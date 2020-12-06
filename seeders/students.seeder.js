import { Seeder } from "mongoose-data-seed";
import Student from "../src/models/Student";
import faker from "faker";

var student;
const data = [];
for (let i = 0; i < 40; i++) {
  student = {
    name: { first: faker.name.firstName(), last: faker.name.lastName() },
  };
  data[i] = student;
}

class StudentsSeeder extends Seeder {
  async shouldRun() {
    return Student.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    return Promise.all(
      data.map(async (student) => {
        return Student.create(student);
      })
    );
  }
}

export default StudentsSeeder;
