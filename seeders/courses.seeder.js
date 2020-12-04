import { Seeder } from "mongoose-data-seed";
import Course from "../src/models/Course";
import StudentOutcome from "../src/models/StudentOutcome";

const data = async () => {
  const so1 = await StudentOutcome.findOne({ studentOutcomeNumber: 1 });
  const so2 = await StudentOutcome.findOne({ studentOutcomeNumber: 2 });
  const so3 = await StudentOutcome.findOne({ studentOutcomeNumber: 3 });
  const so4 = await StudentOutcome.findOne({ studentOutcomeNumber: 4 });
  const so5 = await StudentOutcome.findOne({ studentOutcomeNumber: 5 });
  const so6 = await StudentOutcome.findOne({ studentOutcomeNumber: 6 });
  return [
    {
      title: "Programming I",
      courseNumber: 1375,
      studentOutcomes: [so1, so2],
    },
    {
      title: "Capstone Project",
      courseNumber: 4392,
      studentOutcomes: [so5, so6],
    },
    {
      title: "First Year Experience for Computing Majors",
      courseNumber: 1105,
      studentOutcomes: [so1, so3],
    },
    {
      title: "Algorithms",
      courseNumber: 2380,
      studentOutcomes: [so1, so2],
    },
    {
      title: "Computer Organization",
      courseNumber: 2482,
      studentOutcomes: [so1, so4],
    },
    {
      title: "Operating Systems",
      courseNumber: 3380,
      studentOutcomes: [so3, so4],
    },
    {
      title: "Programming Languages",
      courseNumber: 3383,
      studentOutcomes: [so4, so6],
    },
    {
      title: "Software Engineering",
      courseNumber: 4373,
      studentOutcomes: [so3, so5],
    },
  ];
};
class CoursesSeeder extends Seeder {
  async shouldRun() {
    return Course.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    const courses = await data();

    return Promise.all(
      courses.map(async (course) => {
        return Course.create(course);
      })
    );
  }
}

export default CoursesSeeder;
