import { Seeder } from "mongoose-data-seed";
import Assessment from "../src/models/Assessment";
import Student from "../src/models/Student";
import StudentWorkProject from "../src/models/StudentWorkProject";

const data = async () => {
  const billyMaddison = await Student.findOne({ tNumber: 12345670 });
  const johnyWalker = await Student.findOne({ tNumber: 62589261 });
  const someGuy = await Student.findOne({ tNumber: 9787775 });
  const assignment1 = await StudentWorkProject.findOne({
    name: "Assignment 1",
  });
  const assignment2 = await StudentWorkProject.findOne({
    name: "Assignment 2",
  });
  const quiz1 = await StudentWorkProject.findOne({ name: "Quiz 1" });
  return [
    {
      score: 3,
      student: someGuy,
      studentWorkProject: assignment1,
    },
    {
      score: 2,
      student: johnyWalker,
      studentWorkProject: assignment1,
    },
    {
      score: 4,
      student: billyMaddison,
      studentWorkProject: assignment1,
    },
    {
      score: 0,
      student: someGuy,
      studentWorkProject: assignment2,
    },
    {
      score: 4,
      student: johnyWalker,
      studentWorkProject: assignment2,
    },
    {
      score: 3,
      student: billyMaddison,
      studentWorkProject: assignment2,
    },
    {
      score: 2,
      student: someGuy,
      studentWorkProject: quiz1,
    },
    {
      score: 0,
      student: johnyWalker,
      studentWorkProject: quiz1,
    },
    {
      score: 1,
      student: billyMaddison,
      studentWorkProject: quiz1,
    },
  ];
};

class AssessmentsSeeder extends Seeder {
  async shouldRun() {
    return Assessment.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    const assessments = await data();

    return Promise.all(
      assessments.map(async (assessment) => {
        return Assessment.create(assessment);
      })
    );
  }
}

export default AssessmentsSeeder;
