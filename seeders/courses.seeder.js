import { Seeder } from "mongoose-data-seed";
import Course from "../src/models/Course";
import StudentOutcome from "../src/models/StudentOutcome";

const data = async () => {
  const so1 = await StudentOutcome.findOne({ number: 1 });
  const so2 = await StudentOutcome.findOne({ number: 2 });
  const so3 = await StudentOutcome.findOne({ number: 3 });
  const so4 = await StudentOutcome.findOne({ number: 4 });
  const so5 = await StudentOutcome.findOne({ number: 5 });
  const so6 = await StudentOutcome.findOne({ number: 6 });
  return [
    {
      title: "Programming I",
      number: 1375,
      studentOutcomes: [so1, so2],
    },
    {
      title: "Capstone Project",
      number: 4392,
      studentOutcomes: [so5, so6],
    },
    {
      title: "First Year Experience for Computing Majors",
      number: 1105,
      studentOutcomes: [so1, so3],
    },
    {
      title: "Algorithms",
      number: 2380,
      studentOutcomes: [so1, so2],
    },
    {
      title: "Computer Organization",
      number: 2482,
      studentOutcomes: [so1, so4],
    },
    {
      title: "Operating Systems",
      number: 3380,
      studentOutcomes: [so3, so4],
    },
    {
      title: "Programming Languages",
      number: 3383,
      studentOutcomes: [so4, so6],
    },
    {
      title: "Software Engineering",
      number: 4373,
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
