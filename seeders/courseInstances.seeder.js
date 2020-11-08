import { Seeder } from "mongoose-data-seed";
import CourseInstance from "../src/models/CourseInstance";
import Instructor from "../src/models/Instructor";
import Student from "../src/models/Student";
import Semester from "../src/models/Semester";
import Course from "../src/models/Course";
import StudentWorkProject from "../src/models/StudentWorkProject";

const data = async () => {
  const albertBaker = await Instructor.findOne({ name: {first: "Albert", last: "Baker"} });
  const billyMaddison = await Student.findOne({ tNumber: 12345670 });
  const johnyWalker = await Student.findOne({ tNumber: 62589261 });
  const someGuy = await Student.findOne({ tNumber: 9787775 });
  const programming1 = await Course.findOne({ courseNumber: 1500 });
  const capstone = await Course.findOne({ courseNumber: 4321 });
  const prog1Assignment1 = await StudentWorkProject.findOne({ name: "Prog1 Assignment 1" });
  const prog1Assignment2 = await StudentWorkProject.findOne({ name: "Prog1 Assignment 2" });
  const prog1Quiz1 = await StudentWorkProject.findOne({ name: "Prog1 Quiz 1" });
  const capAssignment1 = await StudentWorkProject.findOne({ name: "Cap Assignment 1" });
  const capAssignment2 = await StudentWorkProject.findOne({ name: "Cap Assignment 2" });
  const capQuiz1 = await StudentWorkProject.findOne({ name: "Cap Quiz 1" });
  const spring2020 = await Semester.findOne({ year: 2020, term: "Spring" });
  const fall2020 = await Semester.findOne({ year: 2020, term: "Fall" });
  return [
    {
      instructor: albertBaker,
      students: [billyMaddison, johnyWalker, someGuy],
      semester: spring2020,
      course: programming1,
      studentWorkProject: [prog1Assignment1, prog1Assignment2, prog1Quiz1],
    },
    {
      instructor: albertBaker,
      students: [billyMaddison, johnyWalker, someGuy],
      semester: fall2020,
      course: capstone,
      studentWorkProject: [capAssignment1, capAssignment2, capQuiz1],
    },
  ];
};

class CourseInstancesSeeder extends Seeder {
  async shouldRun() {
    return CourseInstance.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    const courseInstances = await data();

    return Promise.all(
      courseInstances.map(async (courseInstance) => {
        return CourseInstance.create(courseInstance);
      })
    );
  }
}

export default CourseInstancesSeeder;
