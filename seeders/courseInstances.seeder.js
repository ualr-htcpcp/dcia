import { Seeder } from "mongoose-data-seed";
import CourseInstance from "../src/models/CourseInstance";

const data = [
  {
    instructor: "5fa38a3a3c781a5d10ca2cf2",
    students: [
      "5fa381fafd82c8531cc5ba98",
      "5fa381fafd82c8531cc5ba99",
      "5fa381fafd82c8531cc5ba9a",
    ],
    semester: "5fa38f4a0a2987236c430531",
    course: "5fa392e0ffa7b821441e642f",
    studentWorkProject: [
      "5fa39717f595613fe465de44",
      "5fa39717f595613fe465de45",
      "5fa39717f595613fe465de45",
    ],
  },
  {
    instructor: "5fa38a3a3c781a5d10ca2cf2",
    students: [
      "5fa381fafd82c8531cc5ba98",
      "5fa381fafd82c8531cc5ba99",
      "5fa381fafd82c8531cc5ba9a",
    ],
    semester: "5fa38f4a0a2987236c430532",
    course: "5fa392e0ffa7b821441e642f",
    studentWorkProject: [
      "5fa39717f595613fe465de44",
      "5fa39717f595613fe465de45",
      "5fa39717f595613fe465de45",
    ],
  },
];

class CourseInstancesSeeder extends Seeder {
  async shouldRun() {
    return CourseInstance.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    return Promise.all(
      data.map(async (courseInstance) => {
        return CourseInstance.create(courseInstance);
      })
    );
  }
}

export default CourseInstancesSeeder;
