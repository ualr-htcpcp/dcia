import { Seeder } from "mongoose-data-seed";
import StudentOutcome from "../src/models/StudentOutcome";
import StudentWorkProject from "../src/models/StudentWorkProject";

const data = async () => {
  const so1 = await StudentOutcome.findOne({ studentOutcomeNumber: 1 });
  const so2 = await StudentOutcome.findOne({ studentOutcomeNumber: 2 });
  const so3 = await StudentOutcome.findOne({ studentOutcomeNumber: 3 });
  const so4 = await StudentOutcome.findOne({ studentOutcomeNumber: 4 });
  const so5 = await StudentOutcome.findOne({ studentOutcomeNumber: 5 });
  const so6 = await StudentOutcome.findOne({ studentOutcomeNumber: 6 });
  return [
    {
      name: "Prog1 Assignment 1",
      studentOutcome: [so1, so2],
    },
    {
      name: "Prog1 Assignment 2",
      studentOutcome: [so3, so4],
    },
    {
      name: "Prog1 Quiz 1",
      studentOutcome: [so5, so6],
    },
    {
      name: "Cap Assignment 1",
      studentOutcome: [so1, so2],
    },
    {
      name: "Cap Assignment 2",
      studentOutcome: [so3, so4],
    },
    {
      name: "Cap Quiz 1",
      studentOutcome: [so5, so6],
    },
  ];
};
class StudentWorkProjectsSeeder extends Seeder {
  async shouldRun() {
    return StudentWorkProject.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    const studentWorkProjects = await data();

    return Promise.all(
      studentWorkProjects.map(async (studentWorkProject) => {
        return StudentWorkProject.create(studentWorkProject);
      })
    );
  }
}

export default StudentWorkProjectsSeeder;
