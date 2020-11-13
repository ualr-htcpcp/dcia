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
      studentOutcome: [so1, so2],
    },
    {
      name: "Prog1 Quiz 1",
      studentOutcome: [so1, so2],
    },
    {
      name: "Prog1 Assignment 3",
      studentOutcome: [so1, so2],
    },
    {
      name: "Capstone Project",
      studentOutcome: [so5, so6],
    },
    {
      name: "RFP",
      studentOutcome: [so5, so6],
    },
    {
      name: "Skills Survey",
      studentOutcome: [so5, so6],
    },
    {
      name: "FYE Assignment 1",
      studentOutcome: [so1, so3],
    },
    {
      name: "FYE Assignment 2",
      studentOutcome: [so1, so3],
    },
    {
      name: "FYE Quiz 1",
      studentOutcome: [so1, so3],
    },
    {
      name: "FYE Quiz 2",
      studentOutcome: [so1, so3],
    },
    {
      name: "FYE Assignment 3",
      studentOutcome: [so1, so3],
    },
    {
      name: "Algorithms Quiz 1",
      studentOutcome: [so1, so2],
    },
    {
      name: "Algorithms Quiz 2",
      studentOutcome: [so1, so2],
    },
    {
      name: "Algorithms Quiz 3",
      studentOutcome: [so1, so2],
    },
    {
      name: "Algorithms Quiz 4",
      studentOutcome: [so1, so2],
    },
    {
      name: "CompOrg Exercise 1",
      studentOutcome: [so1, so4],
    },
    {
      name: "CompOrg Exercise 2",
      studentOutcome: [so1, so4],
    },
    {
      name: "CompOrg Exercise 3",
      studentOutcome: [so1, so4],
    },
    {
      name: "CompOrg Exercise 4",
      studentOutcome: [so1, so4],
    },
    {
      name: "CompOrg Final",
      studentOutcome: [so1, so4],
    },
    {
      name: "OpSys Assignment 1",
      studentOutcome: [so3, so4],
    },
    {
      name: "OpSys Assignment 2",
      studentOutcome: [so3, so4],
    },
    {
      name: "OpSys Assignment 3",
      studentOutcome: [so3, so4],
    },
    {
      name: "OpSys Quiz 1",
      studentOutcome: [so3, so4],
    },
    {
      name: "OpSys Assignment 4",
      studentOutcome: [so3, so4],
    },
    {
      name: "ProgLan Assignment 1",
      studentOutcome: [so4, so6],
    },
    {
      name: "ProgLan Assignment 2",
      studentOutcome: [so4, so6],
    },
    {
      name: "ProgLan Assignment 3",
      studentOutcome: [so4, so6],
    },
    {
      name: "ProgLan Assignment 4",
      studentOutcome: [so4, so6],
    },
    {
      name: "ProgLan Project",
      studentOutcome: [so4, so6],
    },
    {
      name: "SWE Exercise 1",
      studentOutcome: [so3, so5],
    },
    {
      name: "SWE Exercise 2",
      studentOutcome: [so3, so5],
    },
    {
      name: "SWE Quiz 1",
      studentOutcome: [so3, so5],
    },
    {
      name: "SWE Exercise 3",
      studentOutcome: [so3, so5],
    },
    {
      name: "SWE Final",
      studentOutcome: [so3, so5],
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
