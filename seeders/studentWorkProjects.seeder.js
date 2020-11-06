import { Seeder } from "mongoose-data-seed";
import StudentWorkProject from "../src/models/StudentWorkProject";

const data = [
  {
    name: "Assignment 1",
    studentOutcome: ["5fa3767d3c24ec15845f7567", "5fa3767d3c24ec15845f7568"],
  },
  {
    name: "Assignment 2",
    studentOutcome: ["5fa3767d3c24ec15845f7568", "5fa3767d3c24ec15845f7564"],
  },
  {
    name: "Quiz 1",
    studentOutcome: ["5fa3767d3c24ec15845f7564", "5fa3767d3c24ec15845f7568"],
  },
];
class StudentWorkProjectsSeeder extends Seeder {
  async shouldRun() {
    return StudentWorkProject.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    return Promise.all(
      data.map(async (studentWorkProject) => {
        return StudentWorkProject.create(studentWorkProject);
      })
    );
  }
}

export default StudentWorkProjectsSeeder;
