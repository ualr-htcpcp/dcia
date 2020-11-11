import { Seeder } from "mongoose-data-seed";
import CourseInstance from "../src/models/CourseInstance";
import Instructor from "../src/models/Instructor";
import Semester from "../src/models/Semester";

const data = async () => {
  const spring2020 = await Semester.findOne({ year: 2020, term: "spring" });
  const instructor = await Instructor.findOne();

  return [
    {
      instructor,
      students: [
        "5fa381fafd82c8531cc5ba98",
        "5fa381fafd82c8531cc5ba99",
        "5fa381fafd82c8531cc5ba9a",
      ],
      semester: spring2020,
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
      semester: spring2020,
      course: "5fa392e0ffa7b821441e642f",
      studentWorkProject: [
        "5fa39717f595613fe465de44",
        "5fa39717f595613fe465de45",
        "5fa39717f595613fe465de45",
      ],
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
