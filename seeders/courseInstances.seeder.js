import { Seeder } from "mongoose-data-seed";
import CourseInstance from "../src/models/CourseInstance";
import Instructor from "../src/models/Instructor";
import Student from "../src/models/Student";
import Semester from "../src/models/Semester";
import Course from "../src/models/Course";
import StudentWorkProject from "../src/models/StudentWorkProject";

const data = async () => {
  const instructors = await Instructor.find({});
  const students = await Student.find({});
  const fall2020 = await Semester.findOne({ year: 2020, term: "Fall" });
  const spring2020 = await Semester.findOne({ year: 2020, term: "Spring" });
  const fall2019 = await Semester.findOne({ year: 2019, term: "Fall" });
  const programming1 = await Course.findOne({ title: "Programming I" });
  const capstone = await Course.findOne({ title: "Capstone Project" });
  const firstYear = await Course.findOne({
    title: "First Year Experience for Computing Majors",
  });
  const algorithm = await Course.findOne({ title: "Algorithms" });
  const computerOrganization = await Course.findOne({
    title: "Computer Organization",
  });
  const operatingSystems = await Course.findOne({
    title: "Operating Systems",
  });
  const programmingLanguages = await Course.findOne({
    title: "Programming Languages",
  });
  const softwareEngineering = await Course.findOne({
    title: "Software Engineering",
  });
  const programming_I_assignment_1 = await StudentWorkProject.findOne({
    name: "Programming I Assignment 1",
  });
  const programming_I_assignment_2 = await StudentWorkProject.findOne({
    name: "Programming I Assignment 2",
  });
  const programming_I_quiz_1 = await StudentWorkProject.findOne({
    name: "Programming I Quiz 1",
  });
  const programming_I_assignment_3 = await StudentWorkProject.findOne({
    name: "Programming I Assignment 3",
  });
  const capstone_skill_survey = await StudentWorkProject.findOne({
    name: "Skills Survey",
  });
  const capstone_request_for_proposal = await StudentWorkProject.findOne({
    name: "Request For Proposal",
  });
  const capstone_project = await StudentWorkProject.findOne({
    name: "Capstone Project",
  });
  const first_year_experience_assignment_1 = await StudentWorkProject.findOne({
    name: "First Year Experience for Computing Majors Assignment 1",
  });
  const first_year_experience_assignment_2 = await StudentWorkProject.findOne({
    name: "First Year Experience for Computing Majors Assignment 2",
  });
  const first_year_experience_quiz_1 = await StudentWorkProject.findOne({
    name: "First Year Experience for Computing Majors Quiz 1",
  });
  const first_year_experience_quiz_2 = await StudentWorkProject.findOne({
    name: "First Year Experience for Computing Majors Quiz 2",
  });
  const first_year_experience_assignment_3 = await StudentWorkProject.findOne({
    name: "First Year Experience for Computing Majors Assignment 3",
  });
  const algorithms_quiz_1 = await StudentWorkProject.findOne({
    name: "Algorithms Quiz 1",
  });
  const algorithms_quiz_2 = await StudentWorkProject.findOne({
    name: "Algorithms Quiz 2",
  });
  const algorithms_quiz_3 = await StudentWorkProject.findOne({
    name: "Algorithms Quiz 3",
  });
  const algorithms_quiz_4 = await StudentWorkProject.findOne({
    name: "Algorithms Quiz 4",
  });
  const computer_organization_exercise_1 = await StudentWorkProject.findOne({
    name: "Computer Organization Exercise 1",
  });
  const computer_organization_exercise_2 = await StudentWorkProject.findOne({
    name: "Computer Organization Exercise 2",
  });
  const computer_organization_exercise_3 = await StudentWorkProject.findOne({
    name: "Computer Organization Exercise 3",
  });
  const computer_organization_exercise_4 = await StudentWorkProject.findOne({
    name: "Computer Organization Exercise 4",
  });
  const computer_organization_final = await StudentWorkProject.findOne({
    name: "Computer Organization Final",
  });
  const operating_systems_assignment_1 = await StudentWorkProject.findOne({
    name: "Operating Systems Assignment 1",
  });
  const operating_systems_assignment_2 = await StudentWorkProject.findOne({
    name: "Operating Systems Assignment 2",
  });
  const operating_systems_assignment_3 = await StudentWorkProject.findOne({
    name: "Operating Systems Assignment 3",
  });
  const operating_systems_quiz_1 = await StudentWorkProject.findOne({
    name: "Operating Systems Quiz 1",
  });
  const operating_systems_assignment_4 = await StudentWorkProject.findOne({
    name: "Operating Systems Assignment 4",
  });
  const programming_languages_assignment_1 = await StudentWorkProject.findOne({
    name: "Programming Languages Assignment 1",
  });
  const programming_languages_assignment_2 = await StudentWorkProject.findOne({
    name: "Programming Languages Assignment 2",
  });
  const programming_languages_assignment_3 = await StudentWorkProject.findOne({
    name: "Programming Languages Assignment 3",
  });
  const programming_languages_assignment_4 = await StudentWorkProject.findOne({
    name: "Programming Languages Assignment 4",
  });
  const programming_languages_project = await StudentWorkProject.findOne({
    name: "Programming Languages Project",
  });
  const software_engineering_exercise_1 = await StudentWorkProject.findOne({
    name: "Software Engineering Exercise 1",
  });
  const software_engineering_exercise_2 = await StudentWorkProject.findOne({
    name: "Software Engineering Exercise 2",
  });
  const software_engineering_quiz_1 = await StudentWorkProject.findOne({
    name: "Software Engineering Quiz 1",
  });
  const software_engineering_exercise_3 = await StudentWorkProject.findOne({
    name: "Software Engineering Exercise 3",
  });
  const software_engineering_final = await StudentWorkProject.findOne({
    name: "Software Engineering Final",
  });

  return [
    {
      instructor: instructors[0],
      student: [
        students[0],
        students[1],
        students[2],
        students[3],
        students[4],
        students[5],
        students[6],
        students[7],
      ],
      semester: fall2020,
      course: programming1,
      studentWorkProject: [
        programming_I_assignment_1,
        programming_I_assignment_2,
        programming_I_quiz_1,
        programming_I_assignment_3,
      ],
    },
    {
      instructor: instructors[0],
      student: [
        students[8],
        students[9],
        students[10],
        students[11],
        students[12],
        students[13],
        students[14],
        students[15],
      ],
      semester: spring2020,
      course: programming1,
      studentWorkProject: [
        programming_I_assignment_1,
        programming_I_assignment_2,
        programming_I_quiz_1,
        programming_I_assignment_3,
      ],
    },
    {
      instructor: instructors[1],
      student: [
        students[16],
        students[17],
        students[18],
        students[19],
        students[20],
        students[21],
        students[22],
        students[23],
      ],
      semester: fall2019,
      course: programming1,
      studentWorkProject: [
        programming_I_assignment_1,
        programming_I_assignment_2,
        programming_I_quiz_1,
        programming_I_assignment_3,
      ],
    },
    {
      instructor: instructors[0],
      student: [
        students[8],
        students[9],
        students[10],
        students[11],
        students[12],
        students[13],
        students[14],
        students[15],
      ],
      semester: fall2020,
      course: capstone,
      studentWorkProject: [
        capstone_skill_survey,
        capstone_request_for_proposal,
        capstone_project,
      ],
    },
    {
      instructor: instructors[0],
      student: [
        students[16],
        students[17],
        students[18],
        students[19],
        students[20],
        students[21],
        students[22],
        students[23],
      ],
      semester: spring2020,
      course: capstone,
      studentWorkProject: [
        capstone_skill_survey,
        capstone_request_for_proposal,
        capstone_project,
      ],
    },
    {
      instructor: instructors[2],
      student: [
        students[24],
        students[25],
        students[26],
        students[27],
        students[28],
        students[29],
        students[30],
        students[31],
      ],
      semester: fall2019,
      course: capstone,
      studentWorkProject: [
        capstone_skill_survey,
        capstone_request_for_proposal,
        capstone_project,
      ],
    },
    {
      instructor: instructors[3],
      student: [
        students[0],
        students[1],
        students[2],
        students[3],
        students[4],
        students[5],
        students[6],
        students[7],
      ],
      semester: fall2020,
      course: firstYear,
      studentWorkProject: [
        first_year_experience_assignment_1,
        first_year_experience_assignment_2,
        first_year_experience_quiz_1,
        first_year_experience_quiz_2,
        first_year_experience_assignment_3,
      ],
    },
    {
      instructor: instructors[3],
      student: [
        students[8],
        students[9],
        students[10],
        students[11],
        students[12],
        students[13],
        students[14],
        students[15],
      ],
      semester: spring2020,
      course: firstYear,
      studentWorkProject: [
        first_year_experience_assignment_1,
        first_year_experience_assignment_2,
        first_year_experience_quiz_1,
        first_year_experience_quiz_2,
        first_year_experience_assignment_3,
      ],
    },
    {
      instructor: instructors[3],
      student: [
        students[16],
        students[17],
        students[18],
        students[19],
        students[20],
        students[21],
        students[22],
        students[23],
      ],
      semester: fall2019,
      course: firstYear,
      studentWorkProject: [
        first_year_experience_assignment_1,
        first_year_experience_assignment_2,
        first_year_experience_quiz_1,
        first_year_experience_quiz_2,
        first_year_experience_assignment_3,
      ],
    },
    {
      instructor: instructors[1],
      student: [
        students[0],
        students[1],
        students[2],
        students[3],
        students[4],
        students[5],
        students[6],
        students[7],
      ],
      semester: fall2020,
      course: computerOrganization,
      studentWorkProject: [
        computer_organization_exercise_1,
        computer_organization_exercise_2,
        computer_organization_exercise_3,
        computer_organization_exercise_4,
        computer_organization_final,
      ],
    },
    {
      instructor: instructors[1],
      student: [
        students[8],
        students[9],
        students[10],
        students[11],
        students[12],
        students[13],
        students[14],
        students[15],
      ],
      semester: spring2020,
      course: computerOrganization,
      studentWorkProject: [
        computer_organization_exercise_1,
        computer_organization_exercise_2,
        computer_organization_exercise_3,
        computer_organization_exercise_4,
        computer_organization_final,
      ],
    },
    {
      instructor: instructors[4],
      student: [
        students[16],
        students[17],
        students[18],
        students[19],
        students[20],
        students[21],
        students[22],
        students[23],
      ],
      semester: spring2020,
      course: operatingSystems,
      studentWorkProject: [
        operating_systems_assignment_1,
        operating_systems_assignment_2,
        operating_systems_assignment_3,
        operating_systems_quiz_1,
        operating_systems_assignment_4,
      ],
    },
    {
      instructor: instructors[4],
      student: [
        students[24],
        students[25],
        students[26],
        students[27],
        students[28],
        students[29],
        students[30],
        students[31],
      ],
      semester: fall2019,
      course: operatingSystems,
      studentWorkProject: [
        operating_systems_assignment_1,
        operating_systems_assignment_2,
        operating_systems_assignment_3,
        operating_systems_quiz_1,
        operating_systems_assignment_4,
      ],
    },
    {
      instructor: instructors[3],
      student: [
        students[8],
        students[9],
        students[10],
        students[11],
        students[12],
        students[13],
        students[14],
        students[15],
      ],
      semester: fall2020,
      course: programmingLanguages,
      studentWorkProject: [
        programming_languages_assignment_1,
        programming_languages_assignment_2,
        programming_languages_assignment_3,
        programming_languages_assignment_4,
        programming_languages_project,
      ],
    },
    {
      instructor: instructors[0],
      student: [
        students[24],
        students[25],
        students[26],
        students[27],
        students[28],
        students[29],
        students[30],
        students[31],
      ],
      semester: fall2019,
      course: programmingLanguages,
      studentWorkProject: [
        programming_languages_assignment_1,
        programming_languages_assignment_2,
        programming_languages_assignment_3,
        programming_languages_assignment_4,
        programming_languages_project,
      ],
    },
    {
      instructor: instructors[2],
      student: [
        students[8],
        students[9],
        students[10],
        students[11],
        students[12],
        students[13],
        students[14],
        students[15],
      ],
      semester: fall2020,
      course: softwareEngineering,
      studentWorkProject: [
        software_engineering_exercise_1,
        software_engineering_exercise_2,
        software_engineering_quiz_1,
        software_engineering_exercise_3,
        software_engineering_final,
      ],
    },
    {
      instructor: instructors[2],
      student: [
        students[16],
        students[17],
        students[18],
        students[19],
        students[20],
        students[21],
        students[22],
        students[23],
      ],
      semester: spring2020,
      course: softwareEngineering,
      studentWorkProject: [
        software_engineering_exercise_1,
        software_engineering_exercise_2,
        software_engineering_quiz_1,
        software_engineering_exercise_3,
        software_engineering_final,
      ],
    },
    {
      instructor: instructors[5],
      student: [
        students[8],
        students[9],
        students[10],
        students[11],
        students[12],
        students[13],
        students[14],
        students[15],
      ],
      semester: spring2020,
      course: algorithm,
      studentWorkProject: [
        algorithms_quiz_1,
        algorithms_quiz_2,
        algorithms_quiz_3,
        algorithms_quiz_4,
      ],
    },
    {
      instructor: instructors[5],
      student: [
        students[16],
        students[17],
        students[18],
        students[19],
        students[20],
        students[21],
        students[22],
        students[23],
      ],
      semester: fall2019,
      course: algorithm,
      studentWorkProject: [
        algorithms_quiz_1,
        algorithms_quiz_2,
        algorithms_quiz_3,
        algorithms_quiz_4,
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
