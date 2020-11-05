import { Seeder } from "mongoose-data-seed";
import Course from "../src/models/Course";

const data = [
  {
    title: "Programming1",
    courseNumber: 1500,
    studentOutcome: [
      "5fa3767d3c24ec15845f7563",
      "5fa3767d3c24ec15845f7564",
      "5fa3767d3c24ec15845f7565",
    ],
  },
  {
    title: "Capstone",
    courseNumber: 4321,
    studentOutcome: [
      "5fa3767d3c24ec15845f7564",
      "5fa3767d3c24ec15845f7568",
      "5fa3767d3c24ec15845f7567",
    ],
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
