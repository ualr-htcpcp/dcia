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
      name: "Programming I Assignment 1 F19",
      studentOutcomes: [so2],
    },
    {
      name: "Programming I Assignment 2 F19",
      studentOutcomes: [so1, so2],
    },
    {
      name: "Programming I Quiz 1 F19",
      studentOutcomes: [so1],
    },
    {
      name: "Programming I Assignment 3 F19",
      studentOutcomes: [so1],
    },
    {
      name: "Capstone Project F19",
      studentOutcomes: [so5],
    },
    {
      name: "Request For Proposal F19",
      studentOutcomes: [so5, so6],
    },
    {
      name: "Skills Survey F19",
      studentOutcomes: [so6],
    },
    {
      name: "First Year Experience for Computing Majors Assignment 1 F19",
      studentOutcomes: [so4, so5],
    },
    {
      name: "First Year Experience for Computing Majors Assignment 2 F19",
      studentOutcomes: [so5],
    },
    {
      name: "First Year Experience for Computing Majors Quiz 1 F19",
      studentOutcomes: [so4],
    },
    {
      name: "First Year Experience for Computing Majors Quiz 2 F19",
      studentOutcomes: [so4, so5],
    },
    {
      name: "First Year Experience for Computing Majors Assignment 3 F19",
      studentOutcomes: [so4],
    },
    {
      name: "Algorithms Quiz 1 F19",
      studentOutcomes: [so6],
    },
    {
      name: "Algorithms Quiz 2 F19",
      studentOutcomes: [so3],
    },
    {
      name: "Algorithms Quiz 3 F19",
      studentOutcomes: [so3, so6],
    },
    {
      name: "Algorithms Quiz 4 F19",
      studentOutcomes: [so3, so6],
    },
    {
      name: "Computer Organization Exercise 1 F19",
      studentOutcomes: [so1],
    },
    {
      name: "Computer Organization Exercise 2 F19",
      studentOutcomes: [so4],
    },
    {
      name: "Computer Organization Exercise 3 F19",
      studentOutcomes: [so1, so4],
    },
    {
      name: "Computer Organization Exercise 4 F19",
      studentOutcomes: [so1],
    },
    {
      name: "Computer Organization Final F19",
      studentOutcomes: [so4],
    },
    {
      name: "Operating Systems Assignment 1 F19",
      studentOutcomes: [so3, so5],
    },
    {
      name: "Operating Systems Assignment 2 F19",
      studentOutcomes: [so5],
    },
    {
      name: "Operating Systems Assignment 3 F19",
      studentOutcomes: [so3],
    },
    {
      name: "Operating Systems Quiz 1 F19",
      studentOutcomes: [so5],
    },
    {
      name: "Operating Systems Assignment 4 F19",
      studentOutcomes: [so3, so5],
    },
    {
      name: "Programming Languages Assignment 1 F19",
      studentOutcomes: [so2],
    },
    {
      name: "Programming Languages Assignment 2 F19",
      studentOutcomes: [so1],
    },
    {
      name: "Programming Languages Assignment 3 F19",
      studentOutcomes: [so1, so2],
    },
    {
      name: "Programming Languages Assignment 4 F19",
      studentOutcomes: [so1],
    },
    {
      name: "Programming Languages Project F19",
      studentOutcomes: [so2],
    },
    {
      name: "Software Engineering Exercise 1 F19",
      studentOutcomes: [so4],
    },
    {
      name: "Software Engineering Exercise 2 F19",
      studentOutcomes: [so3],
    },
    {
      name: "Software Engineering Quiz 1 F19",
      studentOutcomes: [so3, so4],
    },
    {
      name: "Software Engineering Exercise 3 F19",
      studentOutcomes: [so3],
    },
    {
      name: "Software Engineering Final F19",
      studentOutcomes: [so3, so4],
    },
    {
      name: "Programming I Assignment 1 Sp20",
      studentOutcomes: [so2],
    },
    {
      name: "Programming I Assignment 2 Sp20",
      studentOutcomes: [so1, so2],
    },
    {
      name: "Programming I Quiz 1 Sp20",
      studentOutcomes: [so1],
    },
    {
      name: "Programming I Assignment 3 Sp20",
      studentOutcomes: [so1],
    },
    {
      name: "Capstone Project Sp20",
      studentOutcomes: [so5],
    },
    {
      name: "Request For Proposal Sp20",
      studentOutcomes: [so5, so6],
    },
    {
      name: "Skills Survey Sp20",
      studentOutcomes: [so6],
    },
    {
      name: "First Year Experience for Computing Majors Assignment 1 Sp20",
      studentOutcomes: [so4, so5],
    },
    {
      name: "First Year Experience for Computing Majors Assignment 2 Sp20",
      studentOutcomes: [so5],
    },
    {
      name: "First Year Experience for Computing Majors Quiz 1 Sp20",
      studentOutcomes: [so4],
    },
    {
      name: "First Year Experience for Computing Majors Quiz 2 Sp20",
      studentOutcomes: [so4, so5],
    },
    {
      name: "First Year Experience for Computing Majors Assignment 3 Sp20",
      studentOutcomes: [so4],
    },
    {
      name: "Algorithms Quiz 1 Sp20",
      studentOutcomes: [so6],
    },
    {
      name: "Algorithms Quiz 2 Sp20",
      studentOutcomes: [so3],
    },
    {
      name: "Algorithms Quiz 3 Sp20",
      studentOutcomes: [so3, so6],
    },
    {
      name: "Algorithms Quiz 4 Sp20",
      studentOutcomes: [so3, so6],
    },
    {
      name: "Computer Organization Exercise 1 Sp20",
      studentOutcomes: [so1],
    },
    {
      name: "Computer Organization Exercise 2 Sp20",
      studentOutcomes: [so4],
    },
    {
      name: "Computer Organization Exercise 3 Sp20",
      studentOutcomes: [so1, so4],
    },
    {
      name: "Computer Organization Exercise 4 Sp20",
      studentOutcomes: [so1],
    },
    {
      name: "Computer Organization Final Sp20",
      studentOutcomes: [so4],
    },
    {
      name: "Operating Systems Assignment 1 Sp20",
      studentOutcomes: [so3, so5],
    },
    {
      name: "Operating Systems Assignment 2 Sp20",
      studentOutcomes: [so5],
    },
    {
      name: "Operating Systems Assignment 3 Sp20",
      studentOutcomes: [so3],
    },
    {
      name: "Operating Systems Quiz 1 Sp20",
      studentOutcomes: [so5],
    },
    {
      name: "Operating Systems Assignment 4 Sp20",
      studentOutcomes: [so3, so5],
    },
    {
      name: "Programming Languages Assignment 1 Sp20",
      studentOutcomes: [so2],
    },
    {
      name: "Programming Languages Assignment 2 Sp20",
      studentOutcomes: [so1],
    },
    {
      name: "Programming Languages Assignment 3 Sp20",
      studentOutcomes: [so1, so2],
    },
    {
      name: "Programming Languages Assignment 4 Sp20",
      studentOutcomes: [so1],
    },
    {
      name: "Programming Languages Project Sp20",
      studentOutcomes: [so2],
    },
    {
      name: "Software Engineering Exercise 1 Sp20",
      studentOutcomes: [so4],
    },
    {
      name: "Software Engineering Exercise 2 Sp20",
      studentOutcomes: [so3],
    },
    {
      name: "Software Engineering Quiz 1 Sp20",
      studentOutcomes: [so3, so4],
    },
    {
      name: "Software Engineering Exercise 3 Sp20",
      studentOutcomes: [so3],
    },
    {
      name: "Software Engineering Final Sp20",
      studentOutcomes: [so3, so4],
    },
    {
      name: "Programming I Assignment 1 F20",
      studentOutcomes: [so2],
    },
    {
      name: "Programming I Assignment 2 F20",
      studentOutcomes: [so1, so2],
    },
    {
      name: "Programming I Quiz 1 F20",
      studentOutcomes: [so1],
    },
    {
      name: "Programming I Assignment 3 F20",
      studentOutcomes: [so1],
    },
    {
      name: "Capstone Project F20",
      studentOutcomes: [so5],
    },
    {
      name: "Request For Proposal F20",
      studentOutcomes: [so5, so6],
    },
    {
      name: "Skills Survey F20",
      studentOutcomes: [so6],
    },
    {
      name: "First Year Experience for Computing Majors Assignment 1 F20",
      studentOutcomes: [so4, so5],
    },
    {
      name: "First Year Experience for Computing Majors Assignment 2 F20",
      studentOutcomes: [so5],
    },
    {
      name: "First Year Experience for Computing Majors Quiz 1 F20",
      studentOutcomes: [so4],
    },
    {
      name: "First Year Experience for Computing Majors Quiz 2 F20",
      studentOutcomes: [so4, so5],
    },
    {
      name: "First Year Experience for Computing Majors Assignment 3 F20",
      studentOutcomes: [so4],
    },
    {
      name: "Algorithms Quiz 1 F20",
      studentOutcomes: [so6],
    },
    {
      name: "Algorithms Quiz 2 F20",
      studentOutcomes: [so3],
    },
    {
      name: "Algorithms Quiz 3 F20",
      studentOutcomes: [so3, so6],
    },
    {
      name: "Algorithms Quiz 4 F20",
      studentOutcomes: [so3, so6],
    },
    {
      name: "Computer Organization Exercise 1 F20",
      studentOutcomes: [so1],
    },
    {
      name: "Computer Organization Exercise 2 F20",
      studentOutcomes: [so4],
    },
    {
      name: "Computer Organization Exercise 3 F20",
      studentOutcomes: [so1, so4],
    },
    {
      name: "Computer Organization Exercise 4 F20",
      studentOutcomes: [so1],
    },
    {
      name: "Computer Organization Final F20",
      studentOutcomes: [so4],
    },
    {
      name: "Operating Systems Assignment 1 F20",
      studentOutcomes: [so3, so5],
    },
    {
      name: "Operating Systems Assignment 2 F20",
      studentOutcomes: [so3, so5],
    },
    {
      name: "Operating Systems Assignment 3 F20",
      studentOutcomes: [so3, so5],
    },
    {
      name: "Operating Systems Quiz 1 F20",
      studentOutcomes: [so3, so5],
    },
    {
      name: "Operating Systems Assignment 4 F20",
      studentOutcomes: [so3, so5],
    },
    {
      name: "Programming Languages Assignment 1 F20",
      studentOutcomes: [so2],
    },
    {
      name: "Programming Languages Assignment 2 F20",
      studentOutcomes: [so1],
    },
    {
      name: "Programming Languages Assignment 3 F20",
      studentOutcomes: [so1, so2],
    },
    {
      name: "Programming Languages Assignment 4 F20",
      studentOutcomes: [so1],
    },
    {
      name: "Programming Languages Project F20",
      studentOutcomes: [so2],
    },
    {
      name: "Software Engineering Exercise 1 F20",
      studentOutcomes: [so4],
    },
    {
      name: "Software Engineering Exercise 2 F20",
      studentOutcomes: [so3],
    },
    {
      name: "Software Engineering Quiz 1 F20",
      studentOutcomes: [so3, so4],
    },
    {
      name: "Software Engineering Exercise 3 F20",
      studentOutcomes: [so3],
    },
    {
      name: "Software Engineering Final F20",
      studentOutcomes: [so3, so4],
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
