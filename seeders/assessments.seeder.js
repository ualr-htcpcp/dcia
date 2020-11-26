import { Seeder } from "mongoose-data-seed";
import Assessment from "../src/models/Assessment";
import Student from "../src/models/Student";
import StudentWorkProject from "../src/models/StudentWorkProject";

const data = async () => {
  const students = await Student.find({});
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
  const capstone_project = await StudentWorkProject.findOne({
    name: "Capstone Project",
  });
  const capstone_request_for_proposal = await StudentWorkProject.findOne({
    name: "Request For Proposal",
  });
  const capstone_skill_survey = await StudentWorkProject.findOne({
    name: "Skills Survey",
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
  const operating_sysytems_assignment_1 = await StudentWorkProject.findOne({
    name: "Operating Systems Assignment 1",
  });
  const operating_sysytems_assignment_2 = await StudentWorkProject.findOne({
    name: "Operating Systems Assignment 2",
  });
  const operating_sysytems_assignment_3 = await StudentWorkProject.findOne({
    name: "Operating Systems Assignment 3",
  });
  const operating_sysytems_quiz_1 = await StudentWorkProject.findOne({
    name: "Operating Systems Quiz 1",
  });
  const operating_sysytems_assignment_4 = await StudentWorkProject.findOne({
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

  return [
    {
      score: 3,
      student: students[0],
      studentWorkProject: programming_I_assignment_1,
    },
    {
      score: 4,
      student: students[0],
      studentWorkProject: programming_I_assignment_2,
    },
    {
      score: 2,
      student: students[0],
      studentWorkProject: programming_I_quiz_1,
    },
    {
      score: 4,
      student: students[0],
      studentWorkProject: programming_I_assignment_3,
    },
    {
      score: 3,
      student: students[1],
      studentWorkProject: programming_I_assignment_1,
    },
    {
      score: 3,
      student: students[1],
      studentWorkProject: programming_I_assignment_2,
    },
    {
      score: 4,
      student: students[1],
      studentWorkProject: programming_I_quiz_1,
    },
    {
      score: 4,
      student: students[1],
      studentWorkProject: programming_I_assignment_3,
    },
    {
      score: 1,
      student: students[2],
      studentWorkProject: programming_I_assignment_1,
    },
    {
      score: 2,
      student: students[2],
      studentWorkProject: programming_I_assignment_2,
    },
    {
      score: 1,
      student: students[2],
      studentWorkProject: programming_I_quiz_1,
    },
    {
      score: 1,
      student: students[2],
      studentWorkProject: programming_I_assignment_3,
    },
    {
      score: 4,
      student: students[3],
      studentWorkProject: programming_I_assignment_1,
    },
    {
      score: 4,
      student: students[3],
      studentWorkProject: programming_I_assignment_2,
    },
    {
      score: 4,
      student: students[3],
      studentWorkProject: programming_I_quiz_1,
    },
    {
      score: 4,
      student: students[3],
      studentWorkProject: programming_I_assignment_3,
    },
    {
      score: 3,
      student: students[4],
      studentWorkProject: programming_I_assignment_1,
    },
    {
      score: 3,
      student: students[4],
      studentWorkProject: programming_I_assignment_2,
    },
    {
      score: 3,
      student: students[4],
      studentWorkProject: programming_I_quiz_1,
    },
    {
      score: 3,
      student: students[4],
      studentWorkProject: programming_I_assignment_3,
    },
    {
      score: 4,
      student: students[5],
      studentWorkProject: programming_I_assignment_1,
    },
    {
      score: 3,
      student: students[5],
      studentWorkProject: programming_I_assignment_2,
    },
    {
      score: 4,
      student: students[5],
      studentWorkProject: programming_I_quiz_1,
    },
    {
      score: 3,
      student: students[5],
      studentWorkProject: programming_I_assignment_3,
    },
    {
      score: 2,
      student: students[6],
      studentWorkProject: programming_I_assignment_1,
    },
    {
      score: 3,
      student: students[6],
      studentWorkProject: programming_I_assignment_2,
    },
    {
      score: 2,
      student: students[6],
      studentWorkProject: programming_I_quiz_1,
    },
    {
      score: 3,
      student: students[6],
      studentWorkProject: programming_I_assignment_3,
    },
    {
      score: 4,
      student: students[7],
      studentWorkProject: programming_I_assignment_1,
    },
    {
      score: 4,
      student: students[7],
      studentWorkProject: programming_I_assignment_2,
    },
    {
      score: 4,
      student: students[7],
      studentWorkProject: programming_I_quiz_1,
    },
    {
      score: 4,
      student: students[7],
      studentWorkProject: programming_I_assignment_3,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: programming_I_assignment_1,
    },
    {
      score: 4,
      student: students[8],
      studentWorkProject: programming_I_assignment_2,
    },
    {
      score: 2,
      student: students[8],
      studentWorkProject: programming_I_quiz_1,
    },
    {
      score: 4,
      student: students[8],
      studentWorkProject: programming_I_assignment_3,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: programming_I_assignment_1,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: programming_I_assignment_2,
    },
    {
      score: 4,
      student: students[9],
      studentWorkProject: programming_I_quiz_1,
    },
    {
      score: 4,
      student: students[9],
      studentWorkProject: programming_I_assignment_3,
    },
    {
      score: 1,
      student: students[10],
      studentWorkProject: programming_I_assignment_1,
    },
    {
      score: 2,
      student: students[10],
      studentWorkProject: programming_I_assignment_2,
    },
    {
      score: 1,
      student: students[10],
      studentWorkProject: programming_I_quiz_1,
    },
    {
      score: 1,
      student: students[10],
      studentWorkProject: programming_I_assignment_3,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: programming_I_assignment_1,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: programming_I_assignment_2,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: programming_I_quiz_1,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: programming_I_assignment_3,
    },
    {
      score: 3,
      student: students[12],
      studentWorkProject: programming_I_assignment_1,
    },
    {
      score: 3,
      student: students[12],
      studentWorkProject: programming_I_assignment_2,
    },
    {
      score: 3,
      student: students[12],
      studentWorkProject: programming_I_quiz_1,
    },
    {
      score: 3,
      student: students[12],
      studentWorkProject: programming_I_assignment_3,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: programming_I_assignment_1,
    },
    {
      score: 3,
      student: students[13],
      studentWorkProject: programming_I_assignment_2,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: programming_I_quiz_1,
    },
    {
      score: 3,
      student: students[13],
      studentWorkProject: programming_I_assignment_3,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: programming_I_assignment_1,
    },
    {
      score: 3,
      student: students[14],
      studentWorkProject: programming_I_assignment_2,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: programming_I_quiz_1,
    },
    {
      score: 3,
      student: students[14],
      studentWorkProject: programming_I_assignment_3,
    },
    {
      score: 4,
      student: students[15],
      studentWorkProject: programming_I_assignment_1,
    },
    {
      score: 4,
      student: students[15],
      studentWorkProject: programming_I_assignment_2,
    },
    {
      score: 4,
      student: students[15],
      studentWorkProject: programming_I_quiz_1,
    },
    {
      score: 4,
      student: students[15],
      studentWorkProject: programming_I_assignment_3,
    },
    {
      score: 3,
      student: students[16],
      studentWorkProject: programming_I_assignment_1,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: programming_I_assignment_2,
    },
    {
      score: 2,
      student: students[16],
      studentWorkProject: programming_I_quiz_1,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: programming_I_assignment_3,
    },
    {
      score: 3,
      student: students[17],
      studentWorkProject: programming_I_assignment_1,
    },
    {
      score: 3,
      student: students[17],
      studentWorkProject: programming_I_assignment_2,
    },
    {
      score: 4,
      student: students[17],
      studentWorkProject: programming_I_quiz_1,
    },
    {
      score: 4,
      student: students[17],
      studentWorkProject: programming_I_assignment_3,
    },
    {
      score: 1,
      student: students[18],
      studentWorkProject: programming_I_assignment_1,
    },
    {
      score: 2,
      student: students[18],
      studentWorkProject: programming_I_assignment_2,
    },
    {
      score: 1,
      student: students[18],
      studentWorkProject: programming_I_quiz_1,
    },
    {
      score: 1,
      student: students[18],
      studentWorkProject: programming_I_assignment_3,
    },
    {
      score: 4,
      student: students[19],
      studentWorkProject: programming_I_assignment_1,
    },
    {
      score: 4,
      student: students[19],
      studentWorkProject: programming_I_assignment_2,
    },
    {
      score: 4,
      student: students[19],
      studentWorkProject: programming_I_quiz_1,
    },
    {
      score: 4,
      student: students[19],
      studentWorkProject: programming_I_assignment_3,
    },
    {
      score: 3,
      student: students[20],
      studentWorkProject: programming_I_assignment_1,
    },
    {
      score: 3,
      student: students[20],
      studentWorkProject: programming_I_assignment_2,
    },
    {
      score: 3,
      student: students[20],
      studentWorkProject: programming_I_quiz_1,
    },
    {
      score: 3,
      student: students[20],
      studentWorkProject: programming_I_assignment_3,
    },
    {
      score: 4,
      student: students[21],
      studentWorkProject: programming_I_assignment_1,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: programming_I_assignment_2,
    },
    {
      score: 4,
      student: students[21],
      studentWorkProject: programming_I_quiz_1,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: programming_I_assignment_3,
    },
    {
      score: 2,
      student: students[22],
      studentWorkProject: programming_I_assignment_1,
    },
    {
      score: 3,
      student: students[22],
      studentWorkProject: programming_I_assignment_2,
    },
    {
      score: 2,
      student: students[22],
      studentWorkProject: programming_I_quiz_1,
    },
    {
      score: 3,
      student: students[22],
      studentWorkProject: programming_I_assignment_3,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: programming_I_assignment_1,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: programming_I_assignment_2,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: programming_I_quiz_1,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: programming_I_assignment_3,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: capstone_skill_survey,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: capstone_request_for_proposal,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: capstone_project,
    },
    {
      score: 4,
      student: students[9],
      studentWorkProject: capstone_skill_survey,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: capstone_request_for_proposal,
    },
    {
      score: 4,
      student: students[9],
      studentWorkProject: capstone_project,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: capstone_skill_survey,
    },
    {
      score: 3,
      student: students[10],
      studentWorkProject: capstone_request_for_proposal,
    },
    {
      score: 3,
      student: students[10],
      studentWorkProject: capstone_project,
    },
    {
      score: 3,
      student: students[11],
      studentWorkProject: capstone_skill_survey,
    },
    {
      score: 3,
      student: students[11],
      studentWorkProject: capstone_request_for_proposal,
    },
    {
      score: 3,
      student: students[11],
      studentWorkProject: capstone_project,
    },
    {
      score: 4,
      student: students[12],
      studentWorkProject: capstone_skill_survey,
    },
    {
      score: 4,
      student: students[12],
      studentWorkProject: capstone_request_for_proposal,
    },
    {
      score: 4,
      student: students[12],
      studentWorkProject: capstone_project,
    },
    {
      score: 3,
      student: students[13],
      studentWorkProject: capstone_skill_survey,
    },
    {
      score: 2,
      student: students[13],
      studentWorkProject: capstone_request_for_proposal,
    },
    {
      score: 3,
      student: students[13],
      studentWorkProject: capstone_project,
    },
    {
      score: 4,
      student: students[14],
      studentWorkProject: capstone_skill_survey,
    },
    {
      score: 3,
      student: students[14],
      studentWorkProject: capstone_request_for_proposal,
    },
    {
      score: 4,
      student: students[14],
      studentWorkProject: capstone_project,
    },
    {
      score: 1,
      student: students[15],
      studentWorkProject: capstone_skill_survey,
    },
    {
      score: 1,
      student: students[15],
      studentWorkProject: capstone_request_for_proposal,
    },
    {
      score: 1,
      student: students[15],
      studentWorkProject: capstone_project,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: capstone_skill_survey,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: capstone_request_for_proposal,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: capstone_project,
    },
    {
      score: 3,
      student: students[17],
      studentWorkProject: capstone_skill_survey,
    },
    {
      score: 3,
      student: students[17],
      studentWorkProject: capstone_request_for_proposal,
    },
    {
      score: 3,
      student: students[17],
      studentWorkProject: capstone_project,
    },
    {
      score: 4,
      student: students[18],
      studentWorkProject: capstone_skill_survey,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: capstone_request_for_proposal,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: capstone_project,
    },
    {
      score: 3,
      student: students[19],
      studentWorkProject: capstone_skill_survey,
    },
    {
      score: 2,
      student: students[19],
      studentWorkProject: capstone_request_for_proposal,
    },
    {
      score: 3,
      student: students[19],
      studentWorkProject: capstone_project,
    },
    {
      score: 3,
      student: students[20],
      studentWorkProject: capstone_skill_survey,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: capstone_request_for_proposal,
    },
    {
      score: 3,
      student: students[20],
      studentWorkProject: capstone_project,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: capstone_skill_survey,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: capstone_request_for_proposal,
    },
    {
      score: 4,
      student: students[21],
      studentWorkProject: capstone_project,
    },
    {
      score: 2,
      student: students[22],
      studentWorkProject: capstone_skill_survey,
    },
    {
      score: 3,
      student: students[22],
      studentWorkProject: capstone_request_for_proposal,
    },
    {
      score: 3,
      student: students[22],
      studentWorkProject: capstone_project,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: capstone_skill_survey,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: capstone_request_for_proposal,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: capstone_project,
    },
    {
      score: 0,
      student: students[24],
      studentWorkProject: capstone_skill_survey,
    },
    {
      score: 1,
      student: students[24],
      studentWorkProject: capstone_request_for_proposal,
    },
    {
      score: 1,
      student: students[24],
      studentWorkProject: capstone_project,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: capstone_skill_survey,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: capstone_request_for_proposal,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: capstone_project,
    },
    {
      score: 4,
      student: students[26],
      studentWorkProject: capstone_skill_survey,
    },
    {
      score: 3,
      student: students[26],
      studentWorkProject: capstone_request_for_proposal,
    },
    {
      score: 2,
      student: students[26],
      studentWorkProject: capstone_project,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: capstone_skill_survey,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: capstone_request_for_proposal,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: capstone_project,
    },
    {
      score: 3,
      student: students[28],
      studentWorkProject: capstone_skill_survey,
    },
    {
      score: 3,
      student: students[28],
      studentWorkProject: capstone_request_for_proposal,
    },
    {
      score: 3,
      student: students[28],
      studentWorkProject: capstone_project,
    },
    {
      score: 4,
      student: students[29],
      studentWorkProject: capstone_skill_survey,
    },
    {
      score: 3,
      student: students[29],
      studentWorkProject: capstone_request_for_proposal,
    },
    {
      score: 4,
      student: students[29],
      studentWorkProject: capstone_project,
    },
    {
      score: 3,
      student: students[30],
      studentWorkProject: capstone_skill_survey,
    },
    {
      score: 3,
      student: students[30],
      studentWorkProject: capstone_request_for_proposal,
    },
    {
      score: 3,
      student: students[30],
      studentWorkProject: capstone_project,
    },
    {
      score: 2,
      student: students[31],
      studentWorkProject: capstone_skill_survey,
    },
    {
      score: 2,
      student: students[31],
      studentWorkProject: capstone_request_for_proposal,
    },
    {
      score: 2,
      student: students[31],
      studentWorkProject: capstone_project,
    },
    {
      score: 4,
      student: students[0],
      studentWorkProject: first_year_experience_assignment_1,
    },
    {
      score: 4,
      student: students[0],
      studentWorkProject: first_year_experience_assignment_2,
    },
    {
      score: 4,
      student: students[0],
      studentWorkProject: first_year_experience_quiz_1,
    },
    {
      score: 4,
      student: students[0],
      studentWorkProject: first_year_experience_quiz_2,
    },
    {
      score: 4,
      student: students[0],
      studentWorkProject: first_year_experience_assignment_3,
    },
    {
      score: 2,
      student: students[1],
      studentWorkProject: first_year_experience_assignment_1,
    },
    {
      score: 0,
      student: students[1],
      studentWorkProject: first_year_experience_assignment_2,
    },
    {
      score: 3,
      student: students[1],
      studentWorkProject: first_year_experience_quiz_1,
    },
    {
      score: 1,
      student: students[1],
      studentWorkProject: first_year_experience_quiz_2,
    },
    {
      score: 3,
      student: students[1],
      studentWorkProject: first_year_experience_assignment_3,
    },
    {
      score: 3,
      student: students[2],
      studentWorkProject: first_year_experience_assignment_1,
    },
    {
      score: 3,
      student: students[2],
      studentWorkProject: first_year_experience_assignment_2,
    },
    {
      score: 3,
      student: students[2],
      studentWorkProject: first_year_experience_quiz_1,
    },
    {
      score: 3,
      student: students[2],
      studentWorkProject: first_year_experience_quiz_2,
    },
    {
      score: 3,
      student: students[2],
      studentWorkProject: first_year_experience_assignment_3,
    },
    {
      score: 4,
      student: students[3],
      studentWorkProject: first_year_experience_assignment_1,
    },
    {
      score: 3,
      student: students[3],
      studentWorkProject: first_year_experience_assignment_2,
    },
    {
      score: 2,
      student: students[3],
      studentWorkProject: first_year_experience_quiz_1,
    },
    {
      score: 4,
      student: students[3],
      studentWorkProject: first_year_experience_quiz_2,
    },
    {
      score: 3,
      student: students[3],
      studentWorkProject: first_year_experience_assignment_3,
    },
    {
      score: 3,
      student: students[4],
      studentWorkProject: first_year_experience_assignment_1,
    },
    {
      score: 3,
      student: students[4],
      studentWorkProject: first_year_experience_assignment_2,
    },
    {
      score: 2,
      student: students[4],
      studentWorkProject: first_year_experience_quiz_1,
    },
    {
      score: 3,
      student: students[4],
      studentWorkProject: first_year_experience_quiz_2,
    },
    {
      score: 3,
      student: students[4],
      studentWorkProject: first_year_experience_assignment_3,
    },
    {
      score: 3,
      student: students[5],
      studentWorkProject: first_year_experience_assignment_1,
    },
    {
      score: 0,
      student: students[5],
      studentWorkProject: first_year_experience_assignment_2,
    },
    {
      score: 3,
      student: students[5],
      studentWorkProject: first_year_experience_quiz_1,
    },
    {
      score: 1,
      student: students[5],
      studentWorkProject: first_year_experience_quiz_2,
    },
    {
      score: 4,
      student: students[5],
      studentWorkProject: first_year_experience_assignment_3,
    },
    {
      score: 3,
      student: students[6],
      studentWorkProject: first_year_experience_assignment_1,
    },
    {
      score: 3,
      student: students[6],
      studentWorkProject: first_year_experience_assignment_2,
    },
    {
      score: 2,
      student: students[6],
      studentWorkProject: first_year_experience_quiz_1,
    },
    {
      score: 3,
      student: students[6],
      studentWorkProject: first_year_experience_quiz_2,
    },
    {
      score: 4,
      student: students[6],
      studentWorkProject: first_year_experience_assignment_3,
    },
    {
      score: 4,
      student: students[7],
      studentWorkProject: first_year_experience_assignment_1,
    },
    {
      score: 2,
      student: students[7],
      studentWorkProject: first_year_experience_assignment_2,
    },
    {
      score: 3,
      student: students[7],
      studentWorkProject: first_year_experience_quiz_1,
    },
    {
      score: 4,
      student: students[7],
      studentWorkProject: first_year_experience_quiz_2,
    },
    {
      score: 3,
      student: students[7],
      studentWorkProject: first_year_experience_assignment_3,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: first_year_experience_assignment_1,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: first_year_experience_assignment_2,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: first_year_experience_quiz_1,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: first_year_experience_quiz_2,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: first_year_experience_assignment_3,
    },
    {
      score: 2,
      student: students[9],
      studentWorkProject: first_year_experience_assignment_1,
    },
    {
      score: 4,
      student: students[9],
      studentWorkProject: first_year_experience_assignment_2,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: first_year_experience_quiz_1,
    },
    {
      score: 4,
      student: students[9],
      studentWorkProject: first_year_experience_quiz_2,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: first_year_experience_assignment_3,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: first_year_experience_assignment_1,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: first_year_experience_assignment_2,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: first_year_experience_quiz_1,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: first_year_experience_quiz_2,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: first_year_experience_assignment_3,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: first_year_experience_assignment_1,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: first_year_experience_assignment_2,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: first_year_experience_quiz_1,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: first_year_experience_quiz_2,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: first_year_experience_assignment_3,
    },
    {
      score: 4,
      student: students[12],
      studentWorkProject: first_year_experience_assignment_1,
    },
    {
      score: 4,
      student: students[12],
      studentWorkProject: first_year_experience_assignment_2,
    },
    {
      score: 4,
      student: students[12],
      studentWorkProject: first_year_experience_quiz_1,
    },
    {
      score: 3,
      student: students[12],
      studentWorkProject: first_year_experience_quiz_2,
    },
    {
      score: 3,
      student: students[12],
      studentWorkProject: first_year_experience_assignment_3,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: first_year_experience_assignment_1,
    },
    {
      score: 3,
      student: students[13],
      studentWorkProject: first_year_experience_assignment_2,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: first_year_experience_quiz_1,
    },
    {
      score: 3,
      student: students[13],
      studentWorkProject: first_year_experience_quiz_2,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: first_year_experience_assignment_3,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: first_year_experience_assignment_1,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: first_year_experience_assignment_2,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: first_year_experience_quiz_1,
    },
    {
      score: 3,
      student: students[14],
      studentWorkProject: first_year_experience_quiz_2,
    },
    {
      score: 3,
      student: students[14],
      studentWorkProject: first_year_experience_assignment_3,
    },
    {
      score: 0,
      student: students[15],
      studentWorkProject: first_year_experience_assignment_1,
    },
    {
      score: 4,
      student: students[15],
      studentWorkProject: first_year_experience_assignment_2,
    },
    {
      score: 2,
      student: students[15],
      studentWorkProject: first_year_experience_quiz_1,
    },
    {
      score: 3,
      student: students[15],
      studentWorkProject: first_year_experience_quiz_2,
    },
    {
      score: 3,
      student: students[15],
      studentWorkProject: first_year_experience_assignment_3,
    },
    {
      score: 0,
      student: students[16],
      studentWorkProject: first_year_experience_assignment_1,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: first_year_experience_assignment_2,
    },
    {
      score: 2,
      student: students[16],
      studentWorkProject: first_year_experience_quiz_1,
    },
    {
      score: 3,
      student: students[16],
      studentWorkProject: first_year_experience_quiz_2,
    },
    {
      score: 1,
      student: students[16],
      studentWorkProject: first_year_experience_assignment_3,
    },
    {
      score: 4,
      student: students[17],
      studentWorkProject: first_year_experience_assignment_1,
    },
    {
      score: 3,
      student: students[17],
      studentWorkProject: first_year_experience_assignment_2,
    },
    {
      score: 4,
      student: students[17],
      studentWorkProject: first_year_experience_quiz_1,
    },
    {
      score: 3,
      student: students[17],
      studentWorkProject: first_year_experience_quiz_2,
    },
    {
      score: 4,
      student: students[17],
      studentWorkProject: first_year_experience_assignment_3,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: first_year_experience_assignment_1,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: first_year_experience_assignment_2,
    },
    {
      score: 2,
      student: students[18],
      studentWorkProject: first_year_experience_quiz_1,
    },
    {
      score: 4,
      student: students[18],
      studentWorkProject: first_year_experience_quiz_2,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: first_year_experience_assignment_3,
    },
    {
      score: 1,
      student: students[19],
      studentWorkProject: first_year_experience_assignment_1,
    },
    {
      score: 0,
      student: students[19],
      studentWorkProject: first_year_experience_assignment_2,
    },
    {
      score: 1,
      student: students[19],
      studentWorkProject: first_year_experience_quiz_1,
    },
    {
      score: 0,
      student: students[19],
      studentWorkProject: first_year_experience_quiz_2,
    },
    {
      score: 0,
      student: students[19],
      studentWorkProject: first_year_experience_assignment_3,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: first_year_experience_assignment_1,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: first_year_experience_assignment_2,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: first_year_experience_quiz_1,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: first_year_experience_quiz_2,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: first_year_experience_assignment_3,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: first_year_experience_assignment_1,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: first_year_experience_assignment_2,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: first_year_experience_quiz_1,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: first_year_experience_quiz_2,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: first_year_experience_assignment_3,
    },
    {
      score: 2,
      student: students[22],
      studentWorkProject: first_year_experience_assignment_1,
    },
    {
      score: 3,
      student: students[22],
      studentWorkProject: first_year_experience_assignment_2,
    },
    {
      score: 2,
      student: students[22],
      studentWorkProject: first_year_experience_quiz_1,
    },
    {
      score: 2,
      student: students[22],
      studentWorkProject: first_year_experience_quiz_2,
    },
    {
      score: 3,
      student: students[22],
      studentWorkProject: first_year_experience_assignment_3,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: first_year_experience_assignment_1,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: first_year_experience_assignment_2,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: first_year_experience_quiz_1,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: first_year_experience_quiz_2,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: first_year_experience_assignment_3,
    },
    {
      score: 3,
      student: students[0],
      studentWorkProject: computer_organization_exercise_1,
    },
    {
      score: 3,
      student: students[0],
      studentWorkProject: computer_organization_exercise_2,
    },
    {
      score: 4,
      student: students[0],
      studentWorkProject: computer_organization_exercise_3,
    },
    {
      score: 3,
      student: students[0],
      studentWorkProject: computer_organization_exercise_4,
    },
    {
      score: 3,
      student: students[0],
      studentWorkProject: computer_organization_final,
    },
    {
      score: 2,
      student: students[1],
      studentWorkProject: computer_organization_exercise_1,
    },
    {
      score: 1,
      student: students[1],
      studentWorkProject: computer_organization_exercise_2,
    },
    {
      score: 3,
      student: students[1],
      studentWorkProject: computer_organization_exercise_3,
    },
    {
      score: 0,
      student: students[1],
      studentWorkProject: computer_organization_exercise_4,
    },
    {
      score: 3,
      student: students[1],
      studentWorkProject: computer_organization_final,
    },
    {
      score: 1,
      student: students[2],
      studentWorkProject: computer_organization_exercise_1,
    },
    {
      score: 1,
      student: students[2],
      studentWorkProject: computer_organization_exercise_2,
    },
    {
      score: 2,
      student: students[2],
      studentWorkProject: computer_organization_exercise_3,
    },
    {
      score: 3,
      student: students[2],
      studentWorkProject: computer_organization_exercise_4,
    },
    {
      score: 3,
      student: students[2],
      studentWorkProject: computer_organization_final,
    },
    {
      score: 4,
      student: students[3],
      studentWorkProject: computer_organization_exercise_1,
    },
    {
      score: 3,
      student: students[3],
      studentWorkProject: computer_organization_exercise_2,
    },
    {
      score: 2,
      student: students[3],
      studentWorkProject: computer_organization_exercise_3,
    },
    {
      score: 3,
      student: students[3],
      studentWorkProject: computer_organization_exercise_4,
    },
    {
      score: 4,
      student: students[3],
      studentWorkProject: computer_organization_final,
    },
    {
      score: 1,
      student: students[4],
      studentWorkProject: computer_organization_exercise_1,
    },
    {
      score: 1,
      student: students[4],
      studentWorkProject: computer_organization_exercise_2,
    },
    {
      score: 1,
      student: students[4],
      studentWorkProject: computer_organization_exercise_3,
    },
    {
      score: 1,
      student: students[4],
      studentWorkProject: computer_organization_exercise_4,
    },
    {
      score: 1,
      student: students[4],
      studentWorkProject: computer_organization_final,
    },
    {
      score: 4,
      student: students[5],
      studentWorkProject: computer_organization_exercise_1,
    },
    {
      score: 2,
      student: students[5],
      studentWorkProject: computer_organization_exercise_2,
    },
    {
      score: 3,
      student: students[5],
      studentWorkProject: computer_organization_exercise_3,
    },
    {
      score: 3,
      student: students[5],
      studentWorkProject: computer_organization_exercise_4,
    },
    {
      score: 4,
      student: students[5],
      studentWorkProject: computer_organization_final,
    },
    {
      score: 3,
      student: students[6],
      studentWorkProject: computer_organization_exercise_1,
    },
    {
      score: 2,
      student: students[6],
      studentWorkProject: computer_organization_exercise_2,
    },
    {
      score: 3,
      student: students[6],
      studentWorkProject: computer_organization_exercise_3,
    },
    {
      score: 2,
      student: students[6],
      studentWorkProject: computer_organization_exercise_4,
    },
    {
      score: 2,
      student: students[6],
      studentWorkProject: computer_organization_final,
    },
    {
      score: 3,
      student: students[7],
      studentWorkProject: computer_organization_exercise_1,
    },
    {
      score: 3,
      student: students[7],
      studentWorkProject: computer_organization_exercise_2,
    },
    {
      score: 4,
      student: students[7],
      studentWorkProject: computer_organization_exercise_3,
    },
    {
      score: 3,
      student: students[7],
      studentWorkProject: computer_organization_exercise_4,
    },
    {
      score: 4,
      student: students[7],
      studentWorkProject: computer_organization_final,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: computer_organization_exercise_1,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: computer_organization_exercise_2,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: computer_organization_exercise_3,
    },
    {
      score: 2,
      student: students[8],
      studentWorkProject: computer_organization_exercise_4,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: computer_organization_final,
    },
    {
      score: 2,
      student: students[9],
      studentWorkProject: computer_organization_exercise_1,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: computer_organization_exercise_2,
    },
    {
      score: 1,
      student: students[9],
      studentWorkProject: computer_organization_exercise_3,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: computer_organization_exercise_4,
    },
    {
      score: 2,
      student: students[9],
      studentWorkProject: computer_organization_final,
    },
    {
      score: 0,
      student: students[10],
      studentWorkProject: computer_organization_exercise_1,
    },
    {
      score: 3,
      student: students[10],
      studentWorkProject: computer_organization_exercise_2,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: computer_organization_exercise_3,
    },
    {
      score: 2,
      student: students[10],
      studentWorkProject: computer_organization_exercise_4,
    },
    {
      score: 3,
      student: students[10],
      studentWorkProject: computer_organization_final,
    },
    {
      score: 1,
      student: students[11],
      studentWorkProject: computer_organization_exercise_1,
    },
    {
      score: 2,
      student: students[11],
      studentWorkProject: computer_organization_exercise_2,
    },
    {
      score: 0,
      student: students[11],
      studentWorkProject: computer_organization_exercise_3,
    },
    {
      score: 1,
      student: students[11],
      studentWorkProject: computer_organization_exercise_4,
    },
    {
      score: 2,
      student: students[11],
      studentWorkProject: computer_organization_final,
    },
    {
      score: 4,
      student: students[12],
      studentWorkProject: computer_organization_exercise_1,
    },
    {
      score: 4,
      student: students[12],
      studentWorkProject: computer_organization_exercise_2,
    },
    {
      score: 4,
      student: students[12],
      studentWorkProject: computer_organization_exercise_3,
    },
    {
      score: 4,
      student: students[12],
      studentWorkProject: computer_organization_exercise_4,
    },
    {
      score: 3,
      student: students[12],
      studentWorkProject: computer_organization_final,
    },
    {
      score: 2,
      student: students[13],
      studentWorkProject: computer_organization_exercise_1,
    },
    {
      score: 1,
      student: students[13],
      studentWorkProject: computer_organization_exercise_2,
    },
    {
      score: 3,
      student: students[13],
      studentWorkProject: computer_organization_exercise_3,
    },
    {
      score: 2,
      student: students[13],
      studentWorkProject: computer_organization_exercise_4,
    },
    {
      score: 3,
      student: students[13],
      studentWorkProject: computer_organization_final,
    },
    {
      score: 1,
      student: students[14],
      studentWorkProject: computer_organization_exercise_1,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: computer_organization_exercise_2,
    },
    {
      score: 1,
      student: students[14],
      studentWorkProject: computer_organization_exercise_3,
    },
    {
      score: 3,
      student: students[14],
      studentWorkProject: computer_organization_exercise_4,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: computer_organization_final,
    },
    {
      score: 4,
      student: students[15],
      studentWorkProject: computer_organization_exercise_1,
    },
    {
      score: 4,
      student: students[15],
      studentWorkProject: computer_organization_exercise_2,
    },
    {
      score: 3,
      student: students[15],
      studentWorkProject: computer_organization_exercise_3,
    },
    {
      score: 3,
      student: students[15],
      studentWorkProject: computer_organization_exercise_4,
    },
    {
      score: 4,
      student: students[15],
      studentWorkProject: computer_organization_final,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: operating_sysytems_assignment_1,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: operating_sysytems_assignment_2,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: operating_sysytems_assignment_3,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: operating_sysytems_quiz_1,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: operating_sysytems_assignment_4,
    },
    {
      score: 4,
      student: students[17],
      studentWorkProject: operating_sysytems_assignment_1,
    },
    {
      score: 4,
      student: students[17],
      studentWorkProject: operating_sysytems_assignment_2,
    },
    {
      score: 4,
      student: students[17],
      studentWorkProject: operating_sysytems_assignment_3,
    },
    {
      score: 4,
      student: students[17],
      studentWorkProject: operating_sysytems_quiz_1,
    },
    {
      score: 3,
      student: students[17],
      studentWorkProject: operating_sysytems_assignment_4,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: operating_sysytems_assignment_1,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: operating_sysytems_assignment_2,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: operating_sysytems_assignment_3,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: operating_sysytems_quiz_1,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: operating_sysytems_assignment_4,
    },
    {
      score: 4,
      student: students[19],
      studentWorkProject: operating_sysytems_assignment_1,
    },
    {
      score: 4,
      student: students[19],
      studentWorkProject: operating_sysytems_assignment_2,
    },
    {
      score: 3,
      student: students[19],
      studentWorkProject: operating_sysytems_assignment_3,
    },
    {
      score: 3,
      student: students[19],
      studentWorkProject: operating_sysytems_quiz_1,
    },
    {
      score: 3,
      student: students[19],
      studentWorkProject: operating_sysytems_assignment_4,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: operating_sysytems_assignment_1,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: operating_sysytems_assignment_2,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: operating_sysytems_assignment_3,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: operating_sysytems_quiz_1,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: operating_sysytems_assignment_4,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: operating_sysytems_assignment_1,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: operating_sysytems_assignment_2,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: operating_sysytems_assignment_3,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: operating_sysytems_quiz_1,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: operating_sysytems_assignment_4,
    },
    {
      score: 4,
      student: students[22],
      studentWorkProject: operating_sysytems_assignment_1,
    },
    {
      score: 4,
      student: students[22],
      studentWorkProject: operating_sysytems_assignment_2,
    },
    {
      score: 4,
      student: students[22],
      studentWorkProject: operating_sysytems_assignment_3,
    },
    {
      score: 4,
      student: students[22],
      studentWorkProject: operating_sysytems_quiz_1,
    },
    {
      score: 3,
      student: students[22],
      studentWorkProject: operating_sysytems_assignment_4,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: operating_sysytems_assignment_1,
    },
    {
      score: 3,
      student: students[23],
      studentWorkProject: operating_sysytems_assignment_2,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: operating_sysytems_assignment_3,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: operating_sysytems_quiz_1,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: operating_sysytems_assignment_4,
    },
    {
      score: 2,
      student: students[24],
      studentWorkProject: operating_sysytems_assignment_1,
    },
    {
      score: 2,
      student: students[24],
      studentWorkProject: operating_sysytems_assignment_2,
    },
    {
      score: 2,
      student: students[24],
      studentWorkProject: operating_sysytems_assignment_3,
    },
    {
      score: 2,
      student: students[24],
      studentWorkProject: operating_sysytems_quiz_1,
    },
    {
      score: 3,
      student: students[24],
      studentWorkProject: operating_sysytems_assignment_4,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: operating_sysytems_assignment_1,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: operating_sysytems_assignment_2,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: operating_sysytems_assignment_3,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: operating_sysytems_quiz_1,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: operating_sysytems_assignment_4,
    },
    {
      score: 4,
      student: students[26],
      studentWorkProject: operating_sysytems_assignment_1,
    },
    {
      score: 4,
      student: students[26],
      studentWorkProject: operating_sysytems_assignment_2,
    },
    {
      score: 2,
      student: students[26],
      studentWorkProject: operating_sysytems_assignment_3,
    },
    {
      score: 3,
      student: students[26],
      studentWorkProject: operating_sysytems_quiz_1,
    },
    {
      score: 3,
      student: students[26],
      studentWorkProject: operating_sysytems_assignment_4,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: operating_sysytems_assignment_1,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: operating_sysytems_assignment_2,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: operating_sysytems_assignment_3,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: operating_sysytems_quiz_1,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: operating_sysytems_assignment_4,
    },
    {
      score: 3,
      student: students[28],
      studentWorkProject: operating_sysytems_assignment_1,
    },
    {
      score: 3,
      student: students[28],
      studentWorkProject: operating_sysytems_assignment_2,
    },
    {
      score: 3,
      student: students[28],
      studentWorkProject: operating_sysytems_assignment_3,
    },
    {
      score: 3,
      student: students[28],
      studentWorkProject: operating_sysytems_quiz_1,
    },
    {
      score: 4,
      student: students[29],
      studentWorkProject: operating_sysytems_assignment_1,
    },
    {
      score: 4,
      student: students[29],
      studentWorkProject: operating_sysytems_assignment_2,
    },
    {
      score: 4,
      student: students[29],
      studentWorkProject: operating_sysytems_assignment_3,
    },
    {
      score: 4,
      student: students[29],
      studentWorkProject: operating_sysytems_quiz_1,
    },
    {
      score: 4,
      student: students[29],
      studentWorkProject: operating_sysytems_assignment_4,
    },
    {
      score: 2,
      student: students[29],
      studentWorkProject: operating_sysytems_assignment_4,
    },
    {
      score: 0,
      student: students[30],
      studentWorkProject: operating_sysytems_assignment_1,
    },
    {
      score: 1,
      student: students[30],
      studentWorkProject: operating_sysytems_assignment_2,
    },
    {
      score: 2,
      student: students[30],
      studentWorkProject: operating_sysytems_assignment_3,
    },
    {
      score: 0,
      student: students[30],
      studentWorkProject: operating_sysytems_quiz_1,
    },
    {
      score: 3,
      student: students[30],
      studentWorkProject: operating_sysytems_assignment_4,
    },
    {
      score: 2,
      student: students[31],
      studentWorkProject: operating_sysytems_assignment_1,
    },
    {
      score: 3,
      student: students[31],
      studentWorkProject: operating_sysytems_assignment_2,
    },
    {
      score: 2,
      student: students[31],
      studentWorkProject: operating_sysytems_assignment_3,
    },
    {
      score: 3,
      student: students[31],
      studentWorkProject: operating_sysytems_quiz_1,
    },
    {
      score: 2,
      student: students[31],
      studentWorkProject: operating_sysytems_assignment_4,
    },
    {
      score: 2,
      student: students[8],
      studentWorkProject: programming_languages_assignment_1,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: programming_languages_assignment_2,
    },
    {
      score: 4,
      student: students[8],
      studentWorkProject: programming_languages_assignment_3,
    },
    {
      score: 1,
      student: students[8],
      studentWorkProject: programming_languages_assignment_4,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: programming_languages_project,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: programming_languages_assignment_1,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: programming_languages_assignment_2,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: programming_languages_assignment_3,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: programming_languages_assignment_4,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: programming_languages_project,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: programming_languages_assignment_1,
    },
    {
      score: 3,
      student: students[10],
      studentWorkProject: programming_languages_assignment_2,
    },
    {
      score: 3,
      student: students[10],
      studentWorkProject: programming_languages_assignment_3,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: programming_languages_assignment_4,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: programming_languages_project,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: programming_languages_assignment_1,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: programming_languages_assignment_2,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: programming_languages_assignment_3,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: programming_languages_assignment_4,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: programming_languages_project,
    },
    {
      score: 3,
      student: students[12],
      studentWorkProject: programming_languages_assignment_1,
    },
    {
      score: 2,
      student: students[12],
      studentWorkProject: programming_languages_assignment_2,
    },
    {
      score: 3,
      student: students[12],
      studentWorkProject: programming_languages_assignment_3,
    },
    {
      score: 2,
      student: students[12],
      studentWorkProject: programming_languages_assignment_4,
    },
    {
      score: 2,
      student: students[12],
      studentWorkProject: programming_languages_project,
    },
    {
      score: 3,
      student: students[13],
      studentWorkProject: programming_languages_assignment_1,
    },
    {
      score: 3,
      student: students[13],
      studentWorkProject: programming_languages_assignment_2,
    },
    {
      score: 1,
      student: students[13],
      studentWorkProject: programming_languages_assignment_3,
    },
    {
      score: 1,
      student: students[13],
      studentWorkProject: programming_languages_assignment_4,
    },
    {
      score: 3,
      student: students[13],
      studentWorkProject: programming_languages_project,
    },
    {
      score: 0,
      student: students[14],
      studentWorkProject: programming_languages_assignment_1,
    },
    {
      score: 1,
      student: students[14],
      studentWorkProject: programming_languages_assignment_2,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: programming_languages_assignment_3,
    },
    {
      score: 3,
      student: students[14],
      studentWorkProject: programming_languages_assignment_4,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: programming_languages_project,
    },
    {
      score: 2,
      student: students[15],
      studentWorkProject: programming_languages_assignment_1,
    },
    {
      score: 3,
      student: students[15],
      studentWorkProject: programming_languages_assignment_2,
    },
    {
      score: 1,
      student: students[15],
      studentWorkProject: programming_languages_assignment_3,
    },
    {
      score: 2,
      student: students[15],
      studentWorkProject: programming_languages_assignment_4,
    },
    {
      score: 3,
      student: students[15],
      studentWorkProject: programming_languages_project,
    },
    {
      score: 2,
      student: students[24],
      studentWorkProject: programming_languages_assignment_1,
    },
    {
      score: 3,
      student: students[24],
      studentWorkProject: programming_languages_assignment_2,
    },
    {
      score: 4,
      student: students[24],
      studentWorkProject: programming_languages_assignment_3,
    },
    {
      score: 1,
      student: students[24],
      studentWorkProject: programming_languages_assignment_4,
    },
    {
      score: 3,
      student: students[24],
      studentWorkProject: programming_languages_project,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: programming_languages_assignment_1,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: programming_languages_assignment_2,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: programming_languages_assignment_3,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: programming_languages_assignment_4,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: programming_languages_project,
    },
    {
      score: 4,
      student: students[26],
      studentWorkProject: programming_languages_assignment_1,
    },
    {
      score: 3,
      student: students[26],
      studentWorkProject: programming_languages_assignment_2,
    },
    {
      score: 3,
      student: students[26],
      studentWorkProject: programming_languages_assignment_3,
    },
    {
      score: 4,
      student: students[26],
      studentWorkProject: programming_languages_assignment_4,
    },
    {
      score: 4,
      student: students[26],
      studentWorkProject: programming_languages_project,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: programming_languages_assignment_1,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: programming_languages_assignment_2,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: programming_languages_assignment_3,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: programming_languages_assignment_4,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: programming_languages_project,
    },
    {
      score: 3,
      student: students[28],
      studentWorkProject: programming_languages_assignment_1,
    },
    {
      score: 2,
      student: students[28],
      studentWorkProject: programming_languages_assignment_2,
    },
    {
      score: 3,
      student: students[28],
      studentWorkProject: programming_languages_assignment_3,
    },
    {
      score: 2,
      student: students[28],
      studentWorkProject: programming_languages_assignment_4,
    },
    {
      score: 2,
      student: students[28],
      studentWorkProject: programming_languages_project,
    },
    {
      score: 3,
      student: students[29],
      studentWorkProject: programming_languages_assignment_1,
    },
    {
      score: 3,
      student: students[29],
      studentWorkProject: programming_languages_assignment_2,
    },
    {
      score: 1,
      student: students[29],
      studentWorkProject: programming_languages_assignment_3,
    },
    {
      score: 1,
      student: students[29],
      studentWorkProject: programming_languages_assignment_4,
    },
    {
      score: 3,
      student: students[29],
      studentWorkProject: programming_languages_project,
    },
    {
      score: 0,
      student: students[30],
      studentWorkProject: programming_languages_assignment_1,
    },
    {
      score: 1,
      student: students[30],
      studentWorkProject: programming_languages_assignment_2,
    },
    {
      score: 2,
      student: students[30],
      studentWorkProject: programming_languages_assignment_3,
    },
    {
      score: 3,
      student: students[30],
      studentWorkProject: programming_languages_assignment_4,
    },
    {
      score: 2,
      student: students[30],
      studentWorkProject: programming_languages_project,
    },
    {
      score: 2,
      student: students[31],
      studentWorkProject: programming_languages_assignment_1,
    },
    {
      score: 3,
      student: students[31],
      studentWorkProject: programming_languages_assignment_2,
    },
    {
      score: 1,
      student: students[31],
      studentWorkProject: programming_languages_assignment_3,
    },
    {
      score: 2,
      student: students[31],
      studentWorkProject: programming_languages_assignment_4,
    },
    {
      score: 3,
      student: students[31],
      studentWorkProject: programming_languages_project,
    },
    {
      score: 4,
      student: students[8],
      studentWorkProject: software_engineering_exercise_1,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: software_engineering_exercise_2,
    },
    {
      score: 2,
      student: students[8],
      studentWorkProject: software_engineering_quiz_1,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: software_engineering_exercise_3,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: software_engineering_final,
    },
    {
      score: 2,
      student: students[9],
      studentWorkProject: software_engineering_exercise_1,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: software_engineering_exercise_2,
    },
    {
      score: 2,
      student: students[9],
      studentWorkProject: software_engineering_quiz_1,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: software_engineering_exercise_3,
    },
    {
      score: 2,
      student: students[9],
      studentWorkProject: software_engineering_final,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: software_engineering_exercise_1,
    },
    {
      score: 1,
      student: students[10],
      studentWorkProject: software_engineering_exercise_2,
    },
    {
      score: 2,
      student: students[10],
      studentWorkProject: software_engineering_quiz_1,
    },
    {
      score: 3,
      student: students[10],
      studentWorkProject: software_engineering_exercise_3,
    },
    {
      score: 1,
      student: students[10],
      studentWorkProject: software_engineering_final,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: software_engineering_exercise_1,
    },
    {
      score: 3,
      student: students[11],
      studentWorkProject: software_engineering_exercise_2,
    },
    {
      score: 2,
      student: students[11],
      studentWorkProject: software_engineering_quiz_1,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: software_engineering_exercise_3,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: software_engineering_final,
    },
    {
      score: 1,
      student: students[12],
      studentWorkProject: software_engineering_exercise_1,
    },
    {
      score: 1,
      student: students[12],
      studentWorkProject: software_engineering_exercise_2,
    },
    {
      score: 1,
      student: students[12],
      studentWorkProject: software_engineering_quiz_1,
    },
    {
      score: 2,
      student: students[12],
      studentWorkProject: software_engineering_exercise_3,
    },
    {
      score: 3,
      student: students[12],
      studentWorkProject: software_engineering_final,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: software_engineering_exercise_1,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: software_engineering_exercise_2,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: software_engineering_quiz_1,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: software_engineering_exercise_3,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: software_engineering_final,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: software_engineering_exercise_1,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: software_engineering_exercise_2,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: software_engineering_quiz_1,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: software_engineering_exercise_3,
    },
    {
      score: 1,
      student: students[14],
      studentWorkProject: software_engineering_final,
    },
    {
      score: 2,
      student: students[15],
      studentWorkProject: software_engineering_exercise_1,
    },
    {
      score: 3,
      student: students[15],
      studentWorkProject: software_engineering_exercise_2,
    },
    {
      score: 4,
      student: students[15],
      studentWorkProject: software_engineering_quiz_1,
    },
    {
      score: 4,
      student: students[15],
      studentWorkProject: software_engineering_exercise_3,
    },
    {
      score: 3,
      student: students[15],
      studentWorkProject: software_engineering_final,
    },
    {
      score: 2,
      student: students[16],
      studentWorkProject: software_engineering_exercise_1,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: software_engineering_exercise_2,
    },
    {
      score: 1,
      student: students[16],
      studentWorkProject: software_engineering_quiz_1,
    },
    {
      score: 0,
      student: students[16],
      studentWorkProject: software_engineering_exercise_3,
    },
    {
      score: 2,
      student: students[16],
      studentWorkProject: software_engineering_final,
    },
    {
      score: 2,
      student: students[17],
      studentWorkProject: software_engineering_exercise_1,
    },
    {
      score: 1,
      student: students[17],
      studentWorkProject: software_engineering_exercise_2,
    },
    {
      score: 3,
      student: students[17],
      studentWorkProject: software_engineering_quiz_1,
    },
    {
      score: 2,
      student: students[17],
      studentWorkProject: software_engineering_exercise_3,
    },
    {
      score: 1,
      student: students[17],
      studentWorkProject: software_engineering_final,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: software_engineering_exercise_1,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: software_engineering_exercise_2,
    },
    {
      score: 2,
      student: students[18],
      studentWorkProject: software_engineering_quiz_1,
    },
    {
      score: 2,
      student: students[18],
      studentWorkProject: software_engineering_exercise_3,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: software_engineering_final,
    },
    {
      score: 1,
      student: students[19],
      studentWorkProject: software_engineering_exercise_1,
    },
    {
      score: 0,
      student: students[19],
      studentWorkProject: software_engineering_exercise_2,
    },
    {
      score: 1,
      student: students[19],
      studentWorkProject: software_engineering_quiz_1,
    },
    {
      score: 2,
      student: students[19],
      studentWorkProject: software_engineering_exercise_3,
    },
    {
      score: 1,
      student: students[19],
      studentWorkProject: software_engineering_final,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: software_engineering_exercise_1,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: software_engineering_exercise_2,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: software_engineering_quiz_1,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: software_engineering_exercise_3,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: software_engineering_final,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: software_engineering_exercise_1,
    },
    {
      score: 4,
      student: students[21],
      studentWorkProject: software_engineering_exercise_2,
    },
    {
      score: 4,
      student: students[21],
      studentWorkProject: software_engineering_quiz_1,
    },
    {
      score: 4,
      student: students[21],
      studentWorkProject: software_engineering_exercise_3,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: software_engineering_final,
    },
    {
      score: 4,
      student: students[22],
      studentWorkProject: software_engineering_exercise_1,
    },
    {
      score: 3,
      student: students[22],
      studentWorkProject: software_engineering_exercise_2,
    },
    {
      score: 2,
      student: students[22],
      studentWorkProject: software_engineering_quiz_1,
    },
    {
      score: 3,
      student: students[22],
      studentWorkProject: software_engineering_exercise_3,
    },
    {
      score: 4,
      student: students[22],
      studentWorkProject: software_engineering_final,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: software_engineering_exercise_1,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: software_engineering_exercise_2,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: software_engineering_quiz_1,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: software_engineering_exercise_3,
    },
    {
      score: 2,
      student: students[8],
      studentWorkProject: software_engineering_final,
    },
    {
      score: 2,
      student: students[8],
      studentWorkProject: algorithms_quiz_1,
    },
    {
      score: 2,
      student: students[8],
      studentWorkProject: algorithms_quiz_2,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: algorithms_quiz_3,
    },
    {
      score: 4,
      student: students[8],
      studentWorkProject: algorithms_quiz_4,
    },
    {
      score: 2,
      student: students[9],
      studentWorkProject: algorithms_quiz_1,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: algorithms_quiz_2,
    },
    {
      score: 2,
      student: students[9],
      studentWorkProject: algorithms_quiz_3,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: algorithms_quiz_4,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: algorithms_quiz_1,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: algorithms_quiz_2,
    },
    {
      score: 3,
      student: students[10],
      studentWorkProject: algorithms_quiz_3,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: algorithms_quiz_4,
    },
    {
      score: 2,
      student: students[11],
      studentWorkProject: algorithms_quiz_1,
    },
    {
      score: 2,
      student: students[11],
      studentWorkProject: algorithms_quiz_2,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: algorithms_quiz_3,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: algorithms_quiz_4,
    },
    {
      score: 0,
      student: students[12],
      studentWorkProject: algorithms_quiz_1,
    },
    {
      score: 3,
      student: students[12],
      studentWorkProject: algorithms_quiz_2,
    },
    {
      score: 4,
      student: students[12],
      studentWorkProject: algorithms_quiz_3,
    },
    {
      score: 3,
      student: students[12],
      studentWorkProject: algorithms_quiz_4,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: algorithms_quiz_1,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: algorithms_quiz_2,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: algorithms_quiz_3,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: algorithms_quiz_4,
    },
    {
      score: 0,
      student: students[14],
      studentWorkProject: algorithms_quiz_1,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: algorithms_quiz_2,
    },
    {
      score: 1,
      student: students[14],
      studentWorkProject: algorithms_quiz_3,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: algorithms_quiz_4,
    },
    {
      score: 2,
      student: students[15],
      studentWorkProject: algorithms_quiz_1,
    },
    {
      score: 3,
      student: students[15],
      studentWorkProject: algorithms_quiz_2,
    },
    {
      score: 4,
      student: students[15],
      studentWorkProject: algorithms_quiz_3,
    },
    {
      score: 4,
      student: students[15],
      studentWorkProject: algorithms_quiz_4,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: algorithms_quiz_1,
    },
    {
      score: 3,
      student: students[16],
      studentWorkProject: algorithms_quiz_2,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: algorithms_quiz_3,
    },
    {
      score: 2,
      student: students[16],
      studentWorkProject: algorithms_quiz_4,
    },
    {
      score: 3,
      student: students[17],
      studentWorkProject: algorithms_quiz_1,
    },
    {
      score: 4,
      student: students[17],
      studentWorkProject: algorithms_quiz_2,
    },
    {
      score: 4,
      student: students[17],
      studentWorkProject: algorithms_quiz_3,
    },
    {
      score: 4,
      student: students[17],
      studentWorkProject: algorithms_quiz_4,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: algorithms_quiz_1,
    },
    {
      score: 2,
      student: students[18],
      studentWorkProject: algorithms_quiz_2,
    },
    {
      score: 2,
      student: students[18],
      studentWorkProject: algorithms_quiz_3,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: algorithms_quiz_4,
    },
    {
      score: 4,
      student: students[19],
      studentWorkProject: algorithms_quiz_1,
    },
    {
      score: 4,
      student: students[19],
      studentWorkProject: algorithms_quiz_2,
    },
    {
      score: 3,
      student: students[19],
      studentWorkProject: algorithms_quiz_3,
    },
    {
      score: 0,
      student: students[19],
      studentWorkProject: algorithms_quiz_4,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: algorithms_quiz_1,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: algorithms_quiz_2,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: algorithms_quiz_3,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: algorithms_quiz_4,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: algorithms_quiz_1,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: algorithms_quiz_2,
    },
    {
      score: 2,
      student: students[21],
      studentWorkProject: algorithms_quiz_3,
    },
    {
      score: 2,
      student: students[21],
      studentWorkProject: algorithms_quiz_4,
    },
    {
      score: 4,
      student: students[22],
      studentWorkProject: algorithms_quiz_1,
    },
    {
      score: 1,
      student: students[22],
      studentWorkProject: algorithms_quiz_2,
    },
    {
      score: 4,
      student: students[22],
      studentWorkProject: algorithms_quiz_3,
    },
    {
      score: 3,
      student: students[22],
      studentWorkProject: algorithms_quiz_4,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: algorithms_quiz_1,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: algorithms_quiz_2,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: algorithms_quiz_3,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: algorithms_quiz_4,
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
