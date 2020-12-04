import { Seeder } from "mongoose-data-seed";
import CourseInstance from "../src/models/CourseInstance";
import Instructor from "../src/models/Instructor";
import Student from "../src/models/Student";
import Semester from "../src/models/Semester";
import Course from "../src/models/Course";
import StudentWorkProject from "../src/models/StudentWorkProject";

const data = async () => {
  const instructors = await Instructor.find({});
  const student = await Student.find({});
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
      students: [
        student[0],
        student[1],
        student[2],
        student[3],
        student[4],
        student[5],
        student[6],
        student[7],
      ],
      semester: fall2020,
      course: programming1,
      studentWorkProjects: [
        programming_I_assignment_1,
        programming_I_assignment_2,
        programming_I_quiz_1,
        programming_I_assignment_3,
      ],
    },
    {
      instructor: instructors[0],
      students: [
        student[8],
        student[9],
        student[10],
        student[11],
        student[12],
        student[13],
        student[14],
        student[15],
      ],
      semester: spring2020,
      course: programming1,
      studentWorkProjects: [
        programming_I_assignment_1,
        programming_I_assignment_2,
        programming_I_quiz_1,
        programming_I_assignment_3,
      ],
    },
    {
      instructor: instructors[1],
      students: [
        student[16],
        student[17],
        student[18],
        student[19],
        student[20],
        student[21],
        student[22],
        student[23],
      ],
      semester: fall2019,
      course: programming1,
      studentWorkProjects: [
        programming_I_assignment_1,
        programming_I_assignment_2,
        programming_I_quiz_1,
        programming_I_assignment_3,
      ],
    },
    {
      instructor: instructors[0],
      students: [
        student[8],
        student[9],
        student[10],
        student[11],
        student[12],
        student[13],
        student[14],
        student[15],
      ],
      semester: fall2020,
      course: capstone,
      studentWorkProjects: [
        capstone_skill_survey,
        capstone_request_for_proposal,
        capstone_project,
      ],
    },
    {
      instructor: instructors[0],
      students: [
        student[16],
        student[17],
        student[18],
        student[19],
        student[20],
        student[21],
        student[22],
        student[23],
      ],
      semester: spring2020,
      course: capstone,
      studentWorkProjects: [
        capstone_skill_survey,
        capstone_request_for_proposal,
        capstone_project,
      ],
    },
    {
      instructor: instructors[2],
      students: [
        student[24],
        student[25],
        student[26],
        student[27],
        student[28],
        student[29],
        student[30],
        student[31],
      ],
      semester: fall2019,
      course: capstone,
      studentWorkProjects: [
        capstone_skill_survey,
        capstone_request_for_proposal,
        capstone_project,
      ],
    },
    {
      instructor: instructors[3],
      students: [
        student[0],
        student[1],
        student[2],
        student[3],
        student[4],
        student[5],
        student[6],
        student[7],
      ],
      semester: fall2020,
      course: firstYear,
      studentWorkProjects: [
        first_year_experience_assignment_1,
        first_year_experience_assignment_2,
        first_year_experience_quiz_1,
        first_year_experience_quiz_2,
        first_year_experience_assignment_3,
      ],
    },
    {
      instructor: instructors[3],
      students: [
        student[8],
        student[9],
        student[10],
        student[11],
        student[12],
        student[13],
        student[14],
        student[15],
      ],
      semester: spring2020,
      course: firstYear,
      studentWorkProjects: [
        first_year_experience_assignment_1,
        first_year_experience_assignment_2,
        first_year_experience_quiz_1,
        first_year_experience_quiz_2,
        first_year_experience_assignment_3,
      ],
    },
    {
      instructor: instructors[3],
      students: [
        student[16],
        student[17],
        student[18],
        student[19],
        student[20],
        student[21],
        student[22],
        student[23],
      ],
      semester: fall2019,
      course: firstYear,
      studentWorkProjects: [
        first_year_experience_assignment_1,
        first_year_experience_assignment_2,
        first_year_experience_quiz_1,
        first_year_experience_quiz_2,
        first_year_experience_assignment_3,
      ],
    },
    {
      instructor: instructors[1],
      students: [
        student[0],
        student[1],
        student[2],
        student[3],
        student[4],
        student[5],
        student[6],
        student[7],
      ],
      semester: fall2020,
      course: computerOrganization,
      studentWorkProjects: [
        computer_organization_exercise_1,
        computer_organization_exercise_2,
        computer_organization_exercise_3,
        computer_organization_exercise_4,
        computer_organization_final,
      ],
    },
    {
      instructor: instructors[1],
      students: [
        student[8],
        student[9],
        student[10],
        student[11],
        student[12],
        student[13],
        student[14],
        student[15],
      ],
      semester: spring2020,
      course: computerOrganization,
      studentWorkProjects: [
        computer_organization_exercise_1,
        computer_organization_exercise_2,
        computer_organization_exercise_3,
        computer_organization_exercise_4,
        computer_organization_final,
      ],
    },
    {
      instructor: instructors[4],
      students: [
        student[16],
        student[17],
        student[18],
        student[19],
        student[20],
        student[21],
        student[22],
        student[23],
      ],
      semester: spring2020,
      course: operatingSystems,
      studentWorkProjects: [
        operating_systems_assignment_1,
        operating_systems_assignment_2,
        operating_systems_assignment_3,
        operating_systems_quiz_1,
        operating_systems_assignment_4,
      ],
    },
    {
      instructor: instructors[4],
      students: [
        student[24],
        student[25],
        student[26],
        student[27],
        student[28],
        student[29],
        student[30],
        student[31],
      ],
      semester: fall2019,
      course: operatingSystems,
      studentWorkProjects: [
        operating_systems_assignment_1,
        operating_systems_assignment_2,
        operating_systems_assignment_3,
        operating_systems_quiz_1,
        operating_systems_assignment_4,
      ],
    },
    {
      instructor: instructors[3],
      students: [
        student[8],
        student[9],
        student[10],
        student[11],
        student[12],
        student[13],
        student[14],
        student[15],
      ],
      semester: fall2020,
      course: programmingLanguages,
      studentWorkProjects: [
        programming_languages_assignment_1,
        programming_languages_assignment_2,
        programming_languages_assignment_3,
        programming_languages_assignment_4,
        programming_languages_project,
      ],
    },
    {
      instructor: instructors[0],
      students: [
        student[24],
        student[25],
        student[26],
        student[27],
        student[28],
        student[29],
        student[30],
        student[31],
      ],
      semester: fall2019,
      course: programmingLanguages,
      studentWorkProjects: [
        programming_languages_assignment_1,
        programming_languages_assignment_2,
        programming_languages_assignment_3,
        programming_languages_assignment_4,
        programming_languages_project,
      ],
    },
    {
      instructor: instructors[2],
      students: [
        student[8],
        student[9],
        student[10],
        student[11],
        student[12],
        student[13],
        student[14],
        student[15],
      ],
      semester: fall2020,
      course: softwareEngineering,
      studentWorkProjects: [
        software_engineering_exercise_1,
        software_engineering_exercise_2,
        software_engineering_quiz_1,
        software_engineering_exercise_3,
        software_engineering_final,
      ],
    },
    {
      instructor: instructors[2],
      students: [
        student[16],
        student[17],
        student[18],
        student[19],
        student[20],
        student[21],
        student[22],
        student[23],
      ],
      semester: spring2020,
      course: softwareEngineering,
      studentWorkProjects: [
        software_engineering_exercise_1,
        software_engineering_exercise_2,
        software_engineering_quiz_1,
        software_engineering_exercise_3,
        software_engineering_final,
      ],
    },
    {
      instructor: instructors[5],
      students: [
        student[8],
        student[9],
        student[10],
        student[11],
        student[12],
        student[13],
        student[14],
        student[15],
      ],
      semester: spring2020,
      course: algorithm,
      studentWorkProjects: [
        algorithms_quiz_1,
        algorithms_quiz_2,
        algorithms_quiz_3,
        algorithms_quiz_4,
      ],
    },
    {
      instructor: instructors[5],
      students: [
        student[16],
        student[17],
        student[18],
        student[19],
        student[20],
        student[21],
        student[22],
        student[23],
      ],
      semester: fall2019,
      course: algorithm,
      studentWorkProjects: [
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
