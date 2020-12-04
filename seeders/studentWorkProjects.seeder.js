import { Seeder } from "mongoose-data-seed";
import StudentOutcome from "../src/models/StudentOutcome";
import StudentWorkProject from "../src/models/StudentWorkProject";
import Course from "../src/models/Course";

const data = async () => {
  const so1 = await StudentOutcome.findOne({ studentOutcomeNumber: 1 });
  const so2 = await StudentOutcome.findOne({ studentOutcomeNumber: 2 });
  const so3 = await StudentOutcome.findOne({ studentOutcomeNumber: 3 });
  const so4 = await StudentOutcome.findOne({ studentOutcomeNumber: 4 });
  const so5 = await StudentOutcome.findOne({ studentOutcomeNumber: 5 });
  const so6 = await StudentOutcome.findOne({ studentOutcomeNumber: 6 });
  const programming_I = await Course.findOne({ title: "Programming I" });
  const capstone_project = await Course.findOne({ title: "Capstone Project" });
  const first_year = await Course.findOne({
    title: "First Year Experience for Computing Majors",
  });
  const algorithms = await Course.findOne({ title: "Algorithms" });
  const computer_organization = await Course.findOne({
    title: "Computer Organization",
  });
  const operating_systems = await Course.findOne({
    title: "Operating Systems",
  });
  const programming_languages = await Course.findOne({
    title: "Programming Languages",
  });
  const software_engineering = await Course.findOne({
    title: "Software Engineering",
  });
  return [
    {
      name: "Programming I Assignment 1",
      studentOutcomes: [so1, so2],
      course: programming_I,
    },
    {
      name: "Programming I Assignment 2",
      studentOutcomes: [so1, so2],
      course: programming_I,
    },
    {
      name: "Programming I Quiz 1",
      studentOutcomes: [so1, so2],
      course: programming_I,
    },
    {
      name: "Programming I Assignment 3",
      studentOutcomes: [so1, so2],
      course: programming_I,
    },
    {
      name: "Capstone Project",
      studentOutcomes: [so5, so6],
      course: capstone_project,
    },
    {
      name: "Request For Proposal",
      studentOutcomes: [so5, so6],
      course: capstone_project,
    },
    {
      name: "Skills Survey",
      studentOutcomes: [so5, so6],
      course: capstone_project,
    },
    {
      name: "First Year Experience for Computing Majors Assignment 1",
      studentOutcomes: [so1, so3],
      course: first_year,
    },
    {
      name: "First Year Experience for Computing Majors Assignment 2",
      studentOutcomes: [so1, so3],
      course: first_year,
    },
    {
      name: "First Year Experience for Computing Majors Quiz 1",
      studentOutcomes: [so1, so3],
      course: first_year,
    },
    {
      name: "First Year Experience for Computing Majors Quiz 2",
      studentOutcomes: [so1, so3],
      course: first_year,
    },
    {
      name: "First Year Experience for Computing Majors Assignment 3",
      studentOutcomes: [so1, so3],
      course: first_year,
    },
    {
      name: "Algorithms Quiz 1",
      studentOutcomes: [so1, so2],
      course: algorithms,
    },
    {
      name: "Algorithms Quiz 2",
      studentOutcomes: [so1, so2],
      course: algorithms,
    },
    {
      name: "Algorithms Quiz 3",
      studentOutcomes: [so1, so2],
      course: algorithms,
    },
    {
      name: "Algorithms Quiz 4",
      studentOutcomes: [so1, so2],
      course: algorithms,
    },
    {
      name: "Computer Organization Exercise 1",
      studentOutcomes: [so1, so4],
      course: computer_organization,
    },
    {
      name: "Computer Organization Exercise 2",
      studentOutcomes: [so1, so4],
      course: computer_organization,
    },
    {
      name: "Computer Organization Exercise 3",
      studentOutcomes: [so1, so4],
      course: computer_organization,
    },
    {
      name: "Computer Organization Exercise 4",
      studentOutcomes: [so1, so4],
      course: computer_organization,
    },
    {
      name: "Computer Organization Final",
      studentOutcomes: [so1, so4],
      course: computer_organization,
    },
    {
      name: "Operating Systems Assignment 1",
      studentOutcomes: [so3, so4],
      course: operating_systems,
    },
    {
      name: "Operating Systems Assignment 2",
      studentOutcomes: [so3, so4],
      course: operating_systems,
    },
    {
      name: "Operating Systems Assignment 3",
      studentOutcomes: [so3, so4],
      course: operating_systems,
    },
    {
      name: "Operating Systems Quiz 1",
      studentOutcomes: [so3, so4],
      course: operating_systems,
    },
    {
      name: "Operating Systems Assignment 4",
      studentOutcomes: [so3, so4],
      course: operating_systems,
    },
    {
      name: "Programming Languages Assignment 1",
      studentOutcomes: [so4, so6],
      course: programming_languages,
    },
    {
      name: "Programming Languages Assignment 2",
      studentOutcomes: [so4, so6],
      course: programming_languages,
    },
    {
      name: "Programming Languages Assignment 3",
      studentOutcomes: [so4, so6],
      course: programming_languages,
    },
    {
      name: "Programming Languages Assignment 4",
      studentOutcomes: [so4, so6],
      course: programming_languages,
    },
    {
      name: "Programming Languages Project",
      studentOutcomes: [so4, so6],
      course: programming_languages,
    },
    {
      name: "Software Engineering Exercise 1",
      studentOutcomes: [so3, so5],
      course: software_engineering,
    },
    {
      name: "Software Engineering Exercise 2",
      studentOutcomes: [so3, so5],
      course: software_engineering,
    },
    {
      name: "Software Engineering Quiz 1",
      studentOutcomes: [so3, so5],
      course: software_engineering,
    },
    {
      name: "Software Engineering Exercise 3",
      studentOutcomes: [so3, so5],
      course: software_engineering,
    },
    {
      name: "Software Engineering Final",
      studentOutcomes: [so3, so5],
      course: software_engineering,
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
