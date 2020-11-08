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
  const assignment1 = await StudentWorkProject.findOne({ name: "Assignment 1" });
  const assignment2 = await StudentWorkProject.findOne({ name: "Assignment 2" });
  const quiz1 = await StudentWorkProject.findOne({ name: "Quiz 1" });
  const spring2020 = await Semester.findOne({ year: 2020, term: "Spring" });
  const fall2020 = await Semester.findOne({ year: 2020, term: "Fall" });
  return [
    {
      instructor: albertBaker,
      students: [billyMaddison, johnyWalker, someGuy],
      semester: spring2020,
      course: programming1,
      studentWorkProject: [assignment1, assignment2, quiz1],
    },
    {
      instructor: albertBaker,
      students: [billyMaddison, johnyWalker, someGuy],
      semester: fall2020,
      course: capstone,
      studentWorkProject: [assignment1, assignment2, quiz1],
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
