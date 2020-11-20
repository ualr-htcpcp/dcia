import { Seeder } from "mongoose-data-seed";
import StudentOutcome from "../src/models/StudentOutcome";
import StudentWorkProject from "../src/models/StudentWorkProject";

const data = async () => {
  const so1 = await StudentOutcome.findOne({ number: 1 });
  const so2 = await StudentOutcome.findOne({ number: 2 });
  const so3 = await StudentOutcome.findOne({ number: 3 });
  const so4 = await StudentOutcome.findOne({ number: 4 });
  const so5 = await StudentOutcome.findOne({ number: 5 });
  const so6 = await StudentOutcome.findOne({ number: 6 });
  return [
    {
      name: "Prog1 Assignment 1",
      studentOutcomes: [so1, so2],
    },
    {
      name: "Prog1 Assignment 2",
      studentOutcomes: [so3, so4],
    },
    {
      name: "Prog1 Quiz 1",
      studentOutcomes: [so5, so6],
    },
    {
      name: "Cap Assignment 1",
      studentOutcomes: [so1, so2],
    },
    {
      name: "Cap Assignment 2",
      studentOutcomes: [so3, so4],
    },
    {
      name: "Cap Quiz 1",
      studentOutcomes: [so5, so6],
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
