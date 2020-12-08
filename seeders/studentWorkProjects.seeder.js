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
      name: "Programming I Assignment 1",
      studentOutcomes: [so1, so2],
    },
    {
      name: "Programming I Assignment 2",
      studentOutcomes: [so1, so2],
    },
    {
      name: "Programming I Quiz 1",
      studentOutcomes: [so1, so2],
    },
    {
      name: "Programming I Assignment 3",
      studentOutcomes: [so1, so2],
    },
    {
      name: "Capstone Project",
      studentOutcomes: [so5, so6],
    },
    {
      name: "Request For Proposal",
      studentOutcomes: [so5, so6],
    },
    {
      name: "Skills Survey",
      studentOutcomes: [so5, so6],
    },
    {
      name: "First Year Experience for Computing Majors Assignment 1",
      studentOutcomes: [so1, so3],
    },
    {
      name: "First Year Experience for Computing Majors Assignment 2",
      studentOutcomes: [so1, so3],
    },
    {
      name: "First Year Experience for Computing Majors Quiz 1",
      studentOutcomes: [so1, so3],
    },
    {
      name: "First Year Experience for Computing Majors Quiz 2",
      studentOutcomes: [so1, so3],
    },
    {
      name: "First Year Experience for Computing Majors Assignment 3",
      studentOutcomes: [so1, so3],
    },
    {
      name: "Algorithms Quiz 1",
      studentOutcomes: [so1, so2],
    },
    {
      name: "Algorithms Quiz 2",
      studentOutcomes: [so1, so2],
    },
    {
      name: "Algorithms Quiz 3",
      studentOutcomes: [so1, so2],
    },
    {
      name: "Algorithms Quiz 4",
      studentOutcomes: [so1, so2],
    },
    {
      name: "Computer Organization Exercise 1",
      studentOutcomes: [so1, so4],
    },
    {
      name: "Computer Organization Exercise 2",
      studentOutcomes: [so1, so4],
    },
    {
      name: "Computer Organization Exercise 3",
      studentOutcomes: [so1, so4],
    },
    {
      name: "Computer Organization Exercise 4",
      studentOutcomes: [so1, so4],
    },
    {
      name: "Computer Organization Final",
      studentOutcomes: [so1, so4],
    },
    {
      name: "Operating Systems Assignment 1",
      studentOutcomes: [so3, so4],
    },
    {
      name: "Operating Systems Assignment 2",
      studentOutcomes: [so3, so4],
    },
    {
      name: "Operating Systems Assignment 3",
      studentOutcomes: [so3, so4],
    },
    {
      name: "Operating Systems Quiz 1",
      studentOutcomes: [so3, so4],
    },
    {
      name: "Operating Systems Assignment 4",
      studentOutcomes: [so3, so4],
    },
    {
      name: "Programming Languages Assignment 1",
      studentOutcomes: [so4, so6],
    },
    {
      name: "Programming Languages Assignment 2",
      studentOutcomes: [so4, so6],
    },
    {
      name: "Programming Languages Assignment 3",
      studentOutcomes: [so4, so6],
    },
    {
      name: "Programming Languages Assignment 4",
      studentOutcomes: [so4, so6],
    },
    {
      name: "Programming Languages Project",
      studentOutcomes: [so4, so6],
    },
    {
      name: "Software Engineering Exercise 1",
      studentOutcomes: [so3, so5],
    },
    {
      name: "Software Engineering Exercise 2",
      studentOutcomes: [so3, so5],
    },
    {
      name: "Software Engineering Quiz 1",
      studentOutcomes: [so3, so5],
    },
    {
      name: "Software Engineering Exercise 3",
      studentOutcomes: [so3, so5],
    },
    {
      name: "Software Engineering Final",
      studentOutcomes: [so3, so5],
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
