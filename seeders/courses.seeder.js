import { Seeder } from "mongoose-data-seed";
import Course from "../src/models/Course";

const data = [
  {
    title: "Programming1",
    courseNumber: 1500,
    studentOutcome: [0, 1, 2],
  },
];

class CoursesSeeder extends Seeder {
  async shouldRun() {
    return Course.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    return Promise.all(
      data.map(async (course) => {
        return Course.create(course);
      })
    );
  }
}

export default CoursesSeeder;
