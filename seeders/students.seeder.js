import { Seeder } from "mongoose-data-seed";
import Student from "../src/models/Student";

const data = [
  {
    name: { first: "Billy", last: "Maddison" },
    tNumber: 12345670,
  },
  {
    name: { first: "Johny", last: "Walker" },
    tNumber: 62589261,
  },
  {
    name: { first: "Some", last: "Guy" },
    tNumber: 9787775,
  },
];

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
