import { Seeder } from "mongoose-data-seed";
import Assessment from "../src/models/Assessment";
import Student from "../src/models/Student";
import StudentWorkProject from "../src/models/StudentWorkProject";

const data = async () => {
  const billyMaddison = await Student.findOne({ tNumber: 12345670 });
  const johnyWalker = await Student.findOne({ tNumber: 62589261 });
  const someGuy = await Student.findOne({ tNumber: 9787775 });
  const prog1Assignment1 = await StudentWorkProject.findOne({ name: "Prog1 Assignment 1" });
  const prog1Assignment2 = await StudentWorkProject.findOne({ name: "Prog1 Assignment 2" });
  const prog1Quiz1 = await StudentWorkProject.findOne({ name: "Prog1 Quiz 1" });
  const capAssignment1 = await StudentWorkProject.findOne({ name: "Cap Assignment 1" });
  const capAssignment2 = await StudentWorkProject.findOne({ name: "Cap Assignment 2" });
  const capQuiz1 = await StudentWorkProject.findOne({ name: "Cap Quiz 1" });
  return [
    {
      score: 3,
      student: someGuy,
      studentWorkProject: prog1Assignment1,
    },
    {
      score: 2,
      student: johnyWalker,
      studentWorkProject: prog1Assignment1,
    },
    {
      score: 4,
      student: billyMaddison,
      studentWorkProject: prog1Assignment1,
    },
    {
      score: 0,
      student: someGuy,
      studentWorkProject: prog1Assignment2,
    },
    {
      score: 4,
      student: johnyWalker,
      studentWorkProject: prog1Assignment2,
    },
    {
      score: 3,
      student: billyMaddison,
      studentWorkProject: prog1Assignment2,
    },
    {
      score: 2,
      student: someGuy,
      studentWorkProject: prog1Quiz1,
    },
    {
      score: 0,
      student: johnyWalker,
      studentWorkProject: prog1Quiz1,
    },
    {
      score: 1,
      student: billyMaddison,
      studentWorkProject: prog1Quiz1,
    },
        {
      score: 3,
      student: someGuy,
      studentWorkProject: capAssignment1,
    },
    {
      score: 2,
      student: johnyWalker,
      studentWorkProject: capAssignment1,
    },
    {
      score: 4,
      student: billyMaddison,
      studentWorkProject: capAssignment1,
    },
    {
      score: 0,
      student: someGuy,
      studentWorkProject: capAssignment2,
    },
    {
      score: 4,
      student: johnyWalker,
      studentWorkProject: capAssignment2,
    },
    {
      score: 3,
      student: billyMaddison,
      studentWorkProject: capAssignment2,
    },
    {
      score: 2,
      student: someGuy,
      studentWorkProject: capQuiz1,
    },
    {
      score: 0,
      student: johnyWalker,
      studentWorkProject: capQuiz1,
    },
    {
      score: 1,
      student: billyMaddison,
      studentWorkProject: capQuiz1,
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
