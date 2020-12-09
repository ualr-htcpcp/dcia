import { Seeder } from "mongoose-data-seed";
import Assessment from "../src/models/Assessment";
import Student from "../src/models/Student";
import StudentWorkProject from "../src/models/StudentWorkProject";

const data = async () => {
  const students = await Student.find({});
  const programming_I_assignment_1_F19 = await StudentWorkProject.findOne({
    name: "Programming I Assignment 1 F19",
  });
  const programming_I_assignment_2_F19 = await StudentWorkProject.findOne({
    name: "Programming I Assignment 2 F19",
  });
  const programming_I_quiz_1_F19 = await StudentWorkProject.findOne({
    name: "Programming I Quiz 1 F19",
  });
  const programming_I_assignment_3_F19 = await StudentWorkProject.findOne({
    name: "Programming I Assignment 3 F19",
  });
  const capstone_project_F19 = await StudentWorkProject.findOne({
    name: "Capstone Project F19",
  });
  const capstone_request_for_proposal_F19 = await StudentWorkProject.findOne({
    name: "Request For Proposal F19",
  });
  const capstone_skill_survey_F19 = await StudentWorkProject.findOne({
    name: "Skills Survey F19",
  });
  const first_year_experience_assignment_1_F19 = await StudentWorkProject.findOne(
    {
      name: "First Year Experience for Computing Majors Assignment 1 F19",
    }
  );
  const first_year_experience_assignment_2_F19 = await StudentWorkProject.findOne(
    {
      name: "First Year Experience for Computing Majors Assignment 2 F19",
    }
  );
  const first_year_experience_quiz_1_F19 = await StudentWorkProject.findOne({
    name: "First Year Experience for Computing Majors Quiz 1 F19",
  });
  const first_year_experience_quiz_2_F19 = await StudentWorkProject.findOne({
    name: "First Year Experience for Computing Majors Quiz 2 F19",
  });
  const first_year_experience_assignment_3_F19 = await StudentWorkProject.findOne(
    {
      name: "First Year Experience for Computing Majors Assignment 3 F19",
    }
  );
  const operating_systems_assignment_1_F19 = await StudentWorkProject.findOne({
    name: "Operating Systems Assignment 1 F19",
  });
  const operating_systems_assignment_2_F19 = await StudentWorkProject.findOne({
    name: "Operating Systems Assignment 2 F19",
  });
  const operating_systems_assignment_3_F19 = await StudentWorkProject.findOne({
    name: "Operating Systems Assignment 3 F19",
  });
  const operating_systems_quiz_1_F19 = await StudentWorkProject.findOne({
    name: "Operating Systems Quiz 1 F19",
  });
  const operating_systems_assignment_4_F19 = await StudentWorkProject.findOne({
    name: "Operating Systems Assignment 4 F19",
  });
  const programming_languages_assignment_1_F19 = await StudentWorkProject.findOne(
    {
      name: "Programming Languages Assignment 1 F19",
    }
  );
  const programming_languages_assignment_2_F19 = await StudentWorkProject.findOne(
    {
      name: "Programming Languages Assignment 2 F19",
    }
  );
  const programming_languages_assignment_3_F19 = await StudentWorkProject.findOne(
    {
      name: "Programming Languages Assignment 3 F19",
    }
  );
  const programming_languages_assignment_4_F19 = await StudentWorkProject.findOne(
    {
      name: "Programming Languages Assignment 4 F19",
    }
  );
  const programming_languages_project_F19 = await StudentWorkProject.findOne({
    name: "Programming Languages Project F19",
  });
  const algorithms_quiz_1_F19 = await StudentWorkProject.findOne({
    name: "Algorithms Quiz 1 F19",
  });
  const algorithms_quiz_2_F19 = await StudentWorkProject.findOne({
    name: "Algorithms Quiz 2 F19",
  });
  const algorithms_quiz_3_F19 = await StudentWorkProject.findOne({
    name: "Algorithms Quiz 3 F19",
  });
  const algorithms_quiz_4_F19 = await StudentWorkProject.findOne({
    name: "Algorithms Quiz 4 F19",
  });
  const programming_I_assignment_1_Sp20 = await StudentWorkProject.findOne({
    name: "Programming I Assignment 1 Sp20",
  });
  const programming_I_assignment_2_Sp20 = await StudentWorkProject.findOne({
    name: "Programming I Assignment 2 Sp20",
  });
  const programming_I_quiz_1_Sp20 = await StudentWorkProject.findOne({
    name: "Programming I Quiz 1 Sp20",
  });
  const programming_I_assignment_3_Sp20 = await StudentWorkProject.findOne({
    name: "Programming I Assignment 3 Sp20",
  });
  const capstone_project_Sp20 = await StudentWorkProject.findOne({
    name: "Capstone Project Sp20",
  });
  const capstone_request_for_proposal_Sp20 = await StudentWorkProject.findOne({
    name: "Request For Proposal Sp20",
  });
  const capstone_skill_survey_Sp20 = await StudentWorkProject.findOne({
    name: "Skills Survey Sp20",
  });
  const first_year_experience_assignment_1_Sp20 = await StudentWorkProject.findOne(
    {
      name: "First Year Experience for Computing Majors Assignment 1 Sp20",
    }
  );
  const first_year_experience_assignment_2_Sp20 = await StudentWorkProject.findOne(
    {
      name: "First Year Experience for Computing Majors Assignment 2 Sp20",
    }
  );
  const first_year_experience_quiz_1_Sp20 = await StudentWorkProject.findOne({
    name: "First Year Experience for Computing Majors Quiz 1 Sp20",
  });
  const first_year_experience_quiz_2_Sp20 = await StudentWorkProject.findOne({
    name: "First Year Experience for Computing Majors Quiz 2 Sp20",
  });
  const first_year_experience_assignment_3_Sp20 = await StudentWorkProject.findOne(
    {
      name: "First Year Experience for Computing Majors Assignment 3 Sp20",
    }
  );
  const computer_organization_exercise_1_Sp20 = await StudentWorkProject.findOne(
    {
      name: "Computer Organization Exercise 1 Sp20",
    }
  );
  const computer_organization_exercise_2_Sp20 = await StudentWorkProject.findOne(
    {
      name: "Computer Organization Exercise 2 Sp20",
    }
  );
  const computer_organization_exercise_3_Sp20 = await StudentWorkProject.findOne(
    {
      name: "Computer Organization Exercise 3 Sp20",
    }
  );
  const computer_organization_exercise_4_Sp20 = await StudentWorkProject.findOne(
    {
      name: "Computer Organization Exercise 4 Sp20",
    }
  );
  const computer_organization_final_Sp20 = await StudentWorkProject.findOne({
    name: "Computer Organization Final Sp20",
  });
  const operating_systems_assignment_1_Sp20 = await StudentWorkProject.findOne({
    name: "Operating Systems Assignment 1 Sp20",
  });
  const operating_systems_assignment_2_Sp20 = await StudentWorkProject.findOne({
    name: "Operating Systems Assignment 2 Sp20",
  });
  const operating_systems_assignment_3_Sp20 = await StudentWorkProject.findOne({
    name: "Operating Systems Assignment 3 Sp20",
  });
  const operating_systems_quiz_1_Sp20 = await StudentWorkProject.findOne({
    name: "Operating Systems Quiz 1 Sp20",
  });
  const operating_systems_assignment_4_Sp20 = await StudentWorkProject.findOne({
    name: "Operating Systems Assignment 4 Sp20",
  });
  const software_engineering_exercise_1_Sp20 = await StudentWorkProject.findOne(
    {
      name: "Software Engineering Exercise 1 Sp20",
    }
  );
  const software_engineering_exercise_2_Sp20 = await StudentWorkProject.findOne(
    {
      name: "Software Engineering Exercise 2 Sp20",
    }
  );
  const software_engineering_quiz_1_Sp20 = await StudentWorkProject.findOne({
    name: "Software Engineering Quiz 1 Sp20",
  });
  const software_engineering_exercise_3_Sp20 = await StudentWorkProject.findOne(
    {
      name: "Software Engineering Exercise 3 Sp20",
    }
  );
  const software_engineering_final_Sp20 = await StudentWorkProject.findOne({
    name: "Software Engineering Final Sp20",
  });
  const algorithms_quiz_1_Sp20 = await StudentWorkProject.findOne({
    name: "Algorithms Quiz 1 Sp20",
  });
  const algorithms_quiz_2_Sp20 = await StudentWorkProject.findOne({
    name: "Algorithms Quiz 2 Sp20",
  });
  const algorithms_quiz_3_Sp20 = await StudentWorkProject.findOne({
    name: "Algorithms Quiz 3 Sp20",
  });
  const algorithms_quiz_4_Sp20 = await StudentWorkProject.findOne({
    name: "Algorithms Quiz 4 Sp20",
  });
  const programming_I_assignment_1_F20 = await StudentWorkProject.findOne({
    name: "Programming I Assignment 1 F20",
  });
  const programming_I_assignment_2_F20 = await StudentWorkProject.findOne({
    name: "Programming I Assignment 2 F20",
  });
  const programming_I_quiz_1_F20 = await StudentWorkProject.findOne({
    name: "Programming I Quiz 1 F20",
  });
  const programming_I_assignment_3_F20 = await StudentWorkProject.findOne({
    name: "Programming I Assignment 3 F20",
  });
  const capstone_project_F20 = await StudentWorkProject.findOne({
    name: "Capstone Project F20",
  });
  const capstone_request_for_proposal_F20 = await StudentWorkProject.findOne({
    name: "Request For Proposal F20",
  });
  const capstone_skill_survey_F20 = await StudentWorkProject.findOne({
    name: "Skills Survey F20",
  });
  const first_year_experience_assignment_1_F20 = await StudentWorkProject.findOne(
    {
      name: "First Year Experience for Computing Majors Assignment 1 F20",
    }
  );
  const first_year_experience_assignment_2_F20 = await StudentWorkProject.findOne(
    {
      name: "First Year Experience for Computing Majors Assignment 2 F20",
    }
  );
  const first_year_experience_quiz_1_F20 = await StudentWorkProject.findOne({
    name: "First Year Experience for Computing Majors Quiz 1 F20",
  });
  const first_year_experience_quiz_2_F20 = await StudentWorkProject.findOne({
    name: "First Year Experience for Computing Majors Quiz 2 F20",
  });
  const first_year_experience_assignment_3_F20 = await StudentWorkProject.findOne(
    {
      name: "First Year Experience for Computing Majors Assignment 3 F20",
    }
  );
  const computer_organization_exercise_1_F20 = await StudentWorkProject.findOne(
    {
      name: "Computer Organization Exercise 1 F20",
    }
  );
  const computer_organization_exercise_2_F20 = await StudentWorkProject.findOne(
    {
      name: "Computer Organization Exercise 2 F20",
    }
  );
  const computer_organization_exercise_3_F20 = await StudentWorkProject.findOne(
    {
      name: "Computer Organization Exercise 3 F20",
    }
  );
  const computer_organization_exercise_4_F20 = await StudentWorkProject.findOne(
    {
      name: "Computer Organization Exercise 4 F20",
    }
  );
  const computer_organization_final_F20 = await StudentWorkProject.findOne({
    name: "Computer Organization Final F20",
  });
  const programming_languages_assignment_1_F20 = await StudentWorkProject.findOne(
    {
      name: "Programming Languages Assignment 1 F20",
    }
  );
  const programming_languages_assignment_2_F20 = await StudentWorkProject.findOne(
    {
      name: "Programming Languages Assignment 2 F20",
    }
  );
  const programming_languages_assignment_3_F20 = await StudentWorkProject.findOne(
    {
      name: "Programming Languages Assignment 3 F20",
    }
  );
  const programming_languages_assignment_4_F20 = await StudentWorkProject.findOne(
    {
      name: "Programming Languages Assignment 4 F20",
    }
  );
  const programming_languages_project_F20 = await StudentWorkProject.findOne({
    name: "Programming Languages Project F20",
  });
  const software_engineering_exercise_1_F20 = await StudentWorkProject.findOne({
    name: "Software Engineering Exercise 1 F20",
  });
  const software_engineering_exercise_2_F20 = await StudentWorkProject.findOne({
    name: "Software Engineering Exercise 2 F20",
  });
  const software_engineering_quiz_1_F20 = await StudentWorkProject.findOne({
    name: "Software Engineering Quiz 1 F20",
  });
  const software_engineering_exercise_3_F20 = await StudentWorkProject.findOne({
    name: "Software Engineering Exercise 3 F20",
  });
  const software_engineering_final_F20 = await StudentWorkProject.findOne({
    name: "Software Engineering Final F20",
  });

  return [
    {
      score: 3,
      student: students[0],
      studentWorkProject: programming_I_assignment_1_F20,
    },
    {
      score: 4,
      student: students[0],
      studentWorkProject: programming_I_assignment_2_F20,
    },
    {
      score: 2,
      student: students[0],
      studentWorkProject: programming_I_quiz_1_F20,
    },
    {
      score: 4,
      student: students[0],
      studentWorkProject: programming_I_assignment_3_F20,
    },
    {
      score: 3,
      student: students[1],
      studentWorkProject: programming_I_assignment_1_F20,
    },
    {
      score: 3,
      student: students[1],
      studentWorkProject: programming_I_assignment_2_F20,
    },
    {
      score: 4,
      student: students[1],
      studentWorkProject: programming_I_quiz_1_F20,
    },
    {
      score: 4,
      student: students[1],
      studentWorkProject: programming_I_assignment_3_F20,
    },
    {
      score: 1,
      student: students[2],
      studentWorkProject: programming_I_assignment_1_F20,
    },
    {
      score: 2,
      student: students[2],
      studentWorkProject: programming_I_assignment_2_F20,
    },
    {
      score: 1,
      student: students[2],
      studentWorkProject: programming_I_quiz_1_F20,
    },
    {
      score: 1,
      student: students[2],
      studentWorkProject: programming_I_assignment_3_F20,
    },
    {
      score: 4,
      student: students[3],
      studentWorkProject: programming_I_assignment_1_F20,
    },
    {
      score: 4,
      student: students[3],
      studentWorkProject: programming_I_assignment_2_F20,
    },
    {
      score: 4,
      student: students[3],
      studentWorkProject: programming_I_quiz_1_F20,
    },
    {
      score: 4,
      student: students[3],
      studentWorkProject: programming_I_assignment_3_F20,
    },
    {
      score: 3,
      student: students[4],
      studentWorkProject: programming_I_assignment_1_F20,
    },
    {
      score: 3,
      student: students[4],
      studentWorkProject: programming_I_assignment_2_F20,
    },
    {
      score: 3,
      student: students[4],
      studentWorkProject: programming_I_quiz_1_F20,
    },
    {
      score: 3,
      student: students[4],
      studentWorkProject: programming_I_assignment_3_F20,
    },
    {
      score: 4,
      student: students[5],
      studentWorkProject: programming_I_assignment_1_F20,
    },
    {
      score: 3,
      student: students[5],
      studentWorkProject: programming_I_assignment_2_F20,
    },
    {
      score: 4,
      student: students[5],
      studentWorkProject: programming_I_quiz_1_F20,
    },
    {
      score: 3,
      student: students[5],
      studentWorkProject: programming_I_assignment_3_F20,
    },
    {
      score: 2,
      student: students[6],
      studentWorkProject: programming_I_assignment_1_F20,
    },
    {
      score: 3,
      student: students[6],
      studentWorkProject: programming_I_assignment_2_F20,
    },
    {
      score: 2,
      student: students[6],
      studentWorkProject: programming_I_quiz_1_F20,
    },
    {
      score: 3,
      student: students[6],
      studentWorkProject: programming_I_assignment_3_F20,
    },
    {
      score: 4,
      student: students[7],
      studentWorkProject: programming_I_assignment_1_F20,
    },
    {
      score: 4,
      student: students[7],
      studentWorkProject: programming_I_assignment_2_F20,
    },
    {
      score: 4,
      student: students[7],
      studentWorkProject: programming_I_quiz_1_F20,
    },
    {
      score: 4,
      student: students[7],
      studentWorkProject: programming_I_assignment_3_F20,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: programming_I_assignment_1_Sp20,
    },
    {
      score: 4,
      student: students[8],
      studentWorkProject: programming_I_assignment_2_Sp20,
    },
    {
      score: 2,
      student: students[8],
      studentWorkProject: programming_I_quiz_1_Sp20,
    },
    {
      score: 4,
      student: students[8],
      studentWorkProject: programming_I_assignment_3_Sp20,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: programming_I_assignment_1_Sp20,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: programming_I_assignment_2_Sp20,
    },
    {
      score: 4,
      student: students[9],
      studentWorkProject: programming_I_quiz_1_Sp20,
    },
    {
      score: 4,
      student: students[9],
      studentWorkProject: programming_I_assignment_3_Sp20,
    },
    {
      score: 1,
      student: students[10],
      studentWorkProject: programming_I_assignment_1_Sp20,
    },
    {
      score: 2,
      student: students[10],
      studentWorkProject: programming_I_assignment_2_Sp20,
    },
    {
      score: 1,
      student: students[10],
      studentWorkProject: programming_I_quiz_1_Sp20,
    },
    {
      score: 1,
      student: students[10],
      studentWorkProject: programming_I_assignment_3_Sp20,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: programming_I_assignment_1_Sp20,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: programming_I_assignment_2_Sp20,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: programming_I_quiz_1_Sp20,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: programming_I_assignment_3_Sp20,
    },
    {
      score: 3,
      student: students[12],
      studentWorkProject: programming_I_assignment_1_Sp20,
    },
    {
      score: 3,
      student: students[12],
      studentWorkProject: programming_I_assignment_2_Sp20,
    },
    {
      score: 3,
      student: students[12],
      studentWorkProject: programming_I_quiz_1_Sp20,
    },
    {
      score: 3,
      student: students[12],
      studentWorkProject: programming_I_assignment_3_Sp20,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: programming_I_assignment_1_Sp20,
    },
    {
      score: 3,
      student: students[13],
      studentWorkProject: programming_I_assignment_2_Sp20,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: programming_I_quiz_1_Sp20,
    },
    {
      score: 3,
      student: students[13],
      studentWorkProject: programming_I_assignment_3_Sp20,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: programming_I_assignment_1_Sp20,
    },
    {
      score: 3,
      student: students[14],
      studentWorkProject: programming_I_assignment_2_Sp20,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: programming_I_quiz_1_Sp20,
    },
    {
      score: 3,
      student: students[14],
      studentWorkProject: programming_I_assignment_3_Sp20,
    },
    {
      score: 4,
      student: students[15],
      studentWorkProject: programming_I_assignment_1_Sp20,
    },
    {
      score: 4,
      student: students[15],
      studentWorkProject: programming_I_assignment_2_Sp20,
    },
    {
      score: 4,
      student: students[15],
      studentWorkProject: programming_I_quiz_1_Sp20,
    },
    {
      score: 4,
      student: students[15],
      studentWorkProject: programming_I_assignment_3_Sp20,
    },
    {
      score: 3,
      student: students[16],
      studentWorkProject: programming_I_assignment_1_Sp20,
    },
    {
      score: 0,
      student: students[16],
      studentWorkProject: programming_I_assignment_2_F19,
    },
    {
      score: 2,
      student: students[16],
      studentWorkProject: programming_I_quiz_1_F19,
    },
    {
      score: 1,
      student: students[16],
      studentWorkProject: programming_I_assignment_3_F19,
    },
    {
      score: 1,
      student: students[17],
      studentWorkProject: programming_I_assignment_1_F19,
    },
    {
      score: 1,
      student: students[17],
      studentWorkProject: programming_I_assignment_2_F19,
    },
    {
      score: 1,
      student: students[17],
      studentWorkProject: programming_I_quiz_1_F19,
    },
    {
      score: 1,
      student: students[17],
      studentWorkProject: programming_I_assignment_3_F19,
    },
    {
      score: 1,
      student: students[18],
      studentWorkProject: programming_I_assignment_1_F19,
    },
    {
      score: 1,
      student: students[18],
      studentWorkProject: programming_I_assignment_2_F19,
    },
    {
      score: 1,
      student: students[18],
      studentWorkProject: programming_I_quiz_1_F19,
    },
    {
      score: 1,
      student: students[18],
      studentWorkProject: programming_I_assignment_3_F19,
    },
    {
      score: 1,
      student: students[19],
      studentWorkProject: programming_I_assignment_1_F19,
    },
    {
      score: 1,
      student: students[19],
      studentWorkProject: programming_I_assignment_2_F19,
    },
    {
      score: 1,
      student: students[19],
      studentWorkProject: programming_I_quiz_1_F19,
    },
    {
      score: 1,
      student: students[19],
      studentWorkProject: programming_I_assignment_3_F19,
    },
    {
      score: 1,
      student: students[20],
      studentWorkProject: programming_I_assignment_1_F19,
    },
    {
      score: 1,
      student: students[20],
      studentWorkProject: programming_I_assignment_2_F19,
    },
    {
      score: 1,
      student: students[20],
      studentWorkProject: programming_I_quiz_1_F19,
    },
    {
      score: 1,
      student: students[20],
      studentWorkProject: programming_I_assignment_3_F19,
    },
    {
      score: 1,
      student: students[21],
      studentWorkProject: programming_I_assignment_1_F19,
    },
    {
      score: 1,
      student: students[21],
      studentWorkProject: programming_I_assignment_2_F19,
    },
    {
      score: 1,
      student: students[21],
      studentWorkProject: programming_I_quiz_1_F19,
    },
    {
      score: 1,
      student: students[21],
      studentWorkProject: programming_I_assignment_3_F19,
    },
    {
      score: 1,
      student: students[22],
      studentWorkProject: programming_I_assignment_1_F19,
    },
    {
      score: 1,
      student: students[22],
      studentWorkProject: programming_I_assignment_2_F19,
    },
    {
      score: 1,
      student: students[22],
      studentWorkProject: programming_I_quiz_1_F19,
    },
    {
      score: 1,
      student: students[22],
      studentWorkProject: programming_I_assignment_3_F19,
    },
    {
      score: 1,
      student: students[23],
      studentWorkProject: programming_I_assignment_1_F19,
    },
    {
      score: 1,
      student: students[23],
      studentWorkProject: programming_I_assignment_2_F19,
    },
    {
      score: 1,
      student: students[23],
      studentWorkProject: programming_I_quiz_1_F19,
    },
    {
      score: 1,
      student: students[23],
      studentWorkProject: programming_I_assignment_3_F19,
    },
    {
      score: 2,
      student: students[8],
      studentWorkProject: capstone_skill_survey_F20,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: capstone_request_for_proposal_F20,
    },
    {
      score: 4,
      student: students[8],
      studentWorkProject: capstone_project_F20,
    },
    {
      score: 4,
      student: students[9],
      studentWorkProject: capstone_skill_survey_F20,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: capstone_request_for_proposal_F20,
    },
    {
      score: 4,
      student: students[9],
      studentWorkProject: capstone_project_F20,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: capstone_skill_survey_F20,
    },
    {
      score: 3,
      student: students[10],
      studentWorkProject: capstone_request_for_proposal_F20,
    },
    {
      score: 3,
      student: students[10],
      studentWorkProject: capstone_project_F20,
    },
    {
      score: 3,
      student: students[11],
      studentWorkProject: capstone_skill_survey_F20,
    },
    {
      score: 3,
      student: students[11],
      studentWorkProject: capstone_request_for_proposal_F20,
    },
    {
      score: 3,
      student: students[11],
      studentWorkProject: capstone_project_F20,
    },
    {
      score: 4,
      student: students[12],
      studentWorkProject: capstone_skill_survey_F20,
    },
    {
      score: 4,
      student: students[12],
      studentWorkProject: capstone_request_for_proposal_F20,
    },
    {
      score: 4,
      student: students[12],
      studentWorkProject: capstone_project_F20,
    },
    {
      score: 3,
      student: students[13],
      studentWorkProject: capstone_skill_survey_F20,
    },
    {
      score: 2,
      student: students[13],
      studentWorkProject: capstone_request_for_proposal_F20,
    },
    {
      score: 3,
      student: students[13],
      studentWorkProject: capstone_project_F20,
    },
    {
      score: 4,
      student: students[14],
      studentWorkProject: capstone_skill_survey_F20,
    },
    {
      score: 3,
      student: students[14],
      studentWorkProject: capstone_request_for_proposal_F20,
    },
    {
      score: 4,
      student: students[14],
      studentWorkProject: capstone_project_F20,
    },
    {
      score: 1,
      student: students[15],
      studentWorkProject: capstone_skill_survey_F20,
    },
    {
      score: 1,
      student: students[15],
      studentWorkProject: capstone_request_for_proposal_F20,
    },
    {
      score: 1,
      student: students[15],
      studentWorkProject: capstone_project_F20,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: capstone_skill_survey_Sp20,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: capstone_request_for_proposal_Sp20,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: capstone_project_Sp20,
    },
    {
      score: 3,
      student: students[17],
      studentWorkProject: capstone_skill_survey_Sp20,
    },
    {
      score: 3,
      student: students[17],
      studentWorkProject: capstone_request_for_proposal_Sp20,
    },
    {
      score: 3,
      student: students[17],
      studentWorkProject: capstone_project_Sp20,
    },
    {
      score: 4,
      student: students[18],
      studentWorkProject: capstone_skill_survey_Sp20,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: capstone_request_for_proposal_Sp20,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: capstone_project_Sp20,
    },
    {
      score: 3,
      student: students[19],
      studentWorkProject: capstone_skill_survey_Sp20,
    },
    {
      score: 2,
      student: students[19],
      studentWorkProject: capstone_request_for_proposal_Sp20,
    },
    {
      score: 3,
      student: students[19],
      studentWorkProject: capstone_project_Sp20,
    },
    {
      score: 3,
      student: students[20],
      studentWorkProject: capstone_skill_survey_Sp20,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: capstone_request_for_proposal_Sp20,
    },
    {
      score: 3,
      student: students[20],
      studentWorkProject: capstone_project_Sp20,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: capstone_skill_survey_Sp20,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: capstone_request_for_proposal_Sp20,
    },
    {
      score: 4,
      student: students[21],
      studentWorkProject: capstone_project_Sp20,
    },
    {
      score: 2,
      student: students[22],
      studentWorkProject: capstone_skill_survey_Sp20,
    },
    {
      score: 3,
      student: students[22],
      studentWorkProject: capstone_request_for_proposal_Sp20,
    },
    {
      score: 3,
      student: students[22],
      studentWorkProject: capstone_project_Sp20,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: capstone_skill_survey_Sp20,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: capstone_request_for_proposal_Sp20,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: capstone_project_Sp20,
    },
    {
      score: 0,
      student: students[24],
      studentWorkProject: capstone_skill_survey_F19,
    },
    {
      score: 1,
      student: students[24],
      studentWorkProject: capstone_request_for_proposal_F19,
    },
    {
      score: 1,
      student: students[24],
      studentWorkProject: capstone_project_F19,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: capstone_skill_survey_F19,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: capstone_request_for_proposal_F19,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: capstone_project_F19,
    },
    {
      score: 4,
      student: students[26],
      studentWorkProject: capstone_skill_survey_F19,
    },
    {
      score: 3,
      student: students[26],
      studentWorkProject: capstone_request_for_proposal_F19,
    },
    {
      score: 2,
      student: students[26],
      studentWorkProject: capstone_project_F19,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: capstone_skill_survey_F19,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: capstone_request_for_proposal_F19,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: capstone_project_F19,
    },
    {
      score: 3,
      student: students[28],
      studentWorkProject: capstone_skill_survey_F19,
    },
    {
      score: 3,
      student: students[28],
      studentWorkProject: capstone_request_for_proposal_F19,
    },
    {
      score: 3,
      student: students[28],
      studentWorkProject: capstone_project_F19,
    },
    {
      score: 4,
      student: students[29],
      studentWorkProject: capstone_skill_survey_F19,
    },
    {
      score: 3,
      student: students[29],
      studentWorkProject: capstone_request_for_proposal_F19,
    },
    {
      score: 4,
      student: students[29],
      studentWorkProject: capstone_project_F19,
    },
    {
      score: 3,
      student: students[30],
      studentWorkProject: capstone_skill_survey_F19,
    },
    {
      score: 3,
      student: students[30],
      studentWorkProject: capstone_request_for_proposal_F19,
    },
    {
      score: 3,
      student: students[30],
      studentWorkProject: capstone_project_F19,
    },
    {
      score: 2,
      student: students[31],
      studentWorkProject: capstone_skill_survey_F19,
    },
    {
      score: 2,
      student: students[31],
      studentWorkProject: capstone_request_for_proposal_F19,
    },
    {
      score: 2,
      student: students[31],
      studentWorkProject: capstone_project_F19,
    },
    {
      score: 4,
      student: students[0],
      studentWorkProject: first_year_experience_assignment_1_F20,
    },
    {
      score: 4,
      student: students[0],
      studentWorkProject: first_year_experience_assignment_2_F20,
    },
    {
      score: 4,
      student: students[0],
      studentWorkProject: first_year_experience_quiz_1_F20,
    },
    {
      score: 4,
      student: students[0],
      studentWorkProject: first_year_experience_quiz_2_F20,
    },
    {
      score: 4,
      student: students[0],
      studentWorkProject: first_year_experience_assignment_3_F20,
    },
    {
      score: 2,
      student: students[1],
      studentWorkProject: first_year_experience_assignment_1_F20,
    },
    {
      score: 0,
      student: students[1],
      studentWorkProject: first_year_experience_assignment_2_F20,
    },
    {
      score: 3,
      student: students[1],
      studentWorkProject: first_year_experience_quiz_1_F20,
    },
    {
      score: 1,
      student: students[1],
      studentWorkProject: first_year_experience_quiz_2_F20,
    },
    {
      score: 3,
      student: students[1],
      studentWorkProject: first_year_experience_assignment_3_F20,
    },
    {
      score: 3,
      student: students[2],
      studentWorkProject: first_year_experience_assignment_1_F20,
    },
    {
      score: 3,
      student: students[2],
      studentWorkProject: first_year_experience_assignment_2_F20,
    },
    {
      score: 3,
      student: students[2],
      studentWorkProject: first_year_experience_quiz_1_F20,
    },
    {
      score: 3,
      student: students[2],
      studentWorkProject: first_year_experience_quiz_2_F20,
    },
    {
      score: 3,
      student: students[2],
      studentWorkProject: first_year_experience_assignment_3_F20,
    },
    {
      score: 4,
      student: students[3],
      studentWorkProject: first_year_experience_assignment_1_F20,
    },
    {
      score: 3,
      student: students[3],
      studentWorkProject: first_year_experience_assignment_2_F20,
    },
    {
      score: 2,
      student: students[3],
      studentWorkProject: first_year_experience_quiz_1_F20,
    },
    {
      score: 4,
      student: students[3],
      studentWorkProject: first_year_experience_quiz_2_F20,
    },
    {
      score: 3,
      student: students[3],
      studentWorkProject: first_year_experience_assignment_3_F20,
    },
    {
      score: 3,
      student: students[4],
      studentWorkProject: first_year_experience_assignment_1_F20,
    },
    {
      score: 3,
      student: students[4],
      studentWorkProject: first_year_experience_assignment_2_F20,
    },
    {
      score: 2,
      student: students[4],
      studentWorkProject: first_year_experience_quiz_1_F20,
    },
    {
      score: 3,
      student: students[4],
      studentWorkProject: first_year_experience_quiz_2_F20,
    },
    {
      score: 3,
      student: students[4],
      studentWorkProject: first_year_experience_assignment_3_F20,
    },
    {
      score: 3,
      student: students[5],
      studentWorkProject: first_year_experience_assignment_1_F20,
    },
    {
      score: 0,
      student: students[5],
      studentWorkProject: first_year_experience_assignment_2_F20,
    },
    {
      score: 3,
      student: students[5],
      studentWorkProject: first_year_experience_quiz_1_F20,
    },
    {
      score: 1,
      student: students[5],
      studentWorkProject: first_year_experience_quiz_2_F20,
    },
    {
      score: 4,
      student: students[5],
      studentWorkProject: first_year_experience_assignment_3_F20,
    },
    {
      score: 3,
      student: students[6],
      studentWorkProject: first_year_experience_assignment_1_F20,
    },
    {
      score: 3,
      student: students[6],
      studentWorkProject: first_year_experience_assignment_2_F20,
    },
    {
      score: 2,
      student: students[6],
      studentWorkProject: first_year_experience_quiz_1_F20,
    },
    {
      score: 3,
      student: students[6],
      studentWorkProject: first_year_experience_quiz_2_F20,
    },
    {
      score: 4,
      student: students[6],
      studentWorkProject: first_year_experience_assignment_3_F20,
    },
    {
      score: 4,
      student: students[7],
      studentWorkProject: first_year_experience_assignment_1_F20,
    },
    {
      score: 2,
      student: students[7],
      studentWorkProject: first_year_experience_assignment_2_F20,
    },
    {
      score: 3,
      student: students[7],
      studentWorkProject: first_year_experience_quiz_1_F20,
    },
    {
      score: 4,
      student: students[7],
      studentWorkProject: first_year_experience_quiz_2_F20,
    },
    {
      score: 3,
      student: students[7],
      studentWorkProject: first_year_experience_assignment_3_F20,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: first_year_experience_assignment_1_Sp20,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: first_year_experience_assignment_2_Sp20,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: first_year_experience_quiz_1_Sp20,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: first_year_experience_quiz_2_Sp20,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: first_year_experience_assignment_3_Sp20,
    },
    {
      score: 2,
      student: students[9],
      studentWorkProject: first_year_experience_assignment_1_Sp20,
    },
    {
      score: 4,
      student: students[9],
      studentWorkProject: first_year_experience_assignment_2_Sp20,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: first_year_experience_quiz_1_Sp20,
    },
    {
      score: 4,
      student: students[9],
      studentWorkProject: first_year_experience_quiz_2_Sp20,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: first_year_experience_assignment_3_Sp20,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: first_year_experience_assignment_1_Sp20,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: first_year_experience_assignment_2_Sp20,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: first_year_experience_quiz_1_Sp20,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: first_year_experience_quiz_2_Sp20,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: first_year_experience_assignment_3_Sp20,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: first_year_experience_assignment_1_Sp20,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: first_year_experience_assignment_2_Sp20,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: first_year_experience_quiz_1_Sp20,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: first_year_experience_quiz_2_Sp20,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: first_year_experience_assignment_3_Sp20,
    },
    {
      score: 4,
      student: students[12],
      studentWorkProject: first_year_experience_assignment_1_Sp20,
    },
    {
      score: 4,
      student: students[12],
      studentWorkProject: first_year_experience_assignment_2_Sp20,
    },
    {
      score: 4,
      student: students[12],
      studentWorkProject: first_year_experience_quiz_1_Sp20,
    },
    {
      score: 3,
      student: students[12],
      studentWorkProject: first_year_experience_quiz_2_Sp20,
    },
    {
      score: 3,
      student: students[12],
      studentWorkProject: first_year_experience_assignment_3_Sp20,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: first_year_experience_assignment_1_Sp20,
    },
    {
      score: 3,
      student: students[13],
      studentWorkProject: first_year_experience_assignment_2_Sp20,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: first_year_experience_quiz_1_Sp20,
    },
    {
      score: 3,
      student: students[13],
      studentWorkProject: first_year_experience_quiz_2_Sp20,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: first_year_experience_assignment_3_Sp20,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: first_year_experience_assignment_1_Sp20,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: first_year_experience_assignment_2_Sp20,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: first_year_experience_quiz_1_Sp20,
    },
    {
      score: 3,
      student: students[14],
      studentWorkProject: first_year_experience_quiz_2_Sp20,
    },
    {
      score: 3,
      student: students[14],
      studentWorkProject: first_year_experience_assignment_3_Sp20,
    },
    {
      score: 0,
      student: students[15],
      studentWorkProject: first_year_experience_assignment_1_Sp20,
    },
    {
      score: 4,
      student: students[15],
      studentWorkProject: first_year_experience_assignment_2_Sp20,
    },
    {
      score: 2,
      student: students[15],
      studentWorkProject: first_year_experience_quiz_1_Sp20,
    },
    {
      score: 3,
      student: students[15],
      studentWorkProject: first_year_experience_quiz_2_Sp20,
    },
    {
      score: 3,
      student: students[15],
      studentWorkProject: first_year_experience_assignment_3_Sp20,
    },
    {
      score: 0,
      student: students[16],
      studentWorkProject: first_year_experience_assignment_1_F19,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: first_year_experience_assignment_2_F19,
    },
    {
      score: 2,
      student: students[16],
      studentWorkProject: first_year_experience_quiz_1_F19,
    },
    {
      score: 3,
      student: students[16],
      studentWorkProject: first_year_experience_quiz_2_F19,
    },
    {
      score: 1,
      student: students[16],
      studentWorkProject: first_year_experience_assignment_3_F19,
    },
    {
      score: 4,
      student: students[17],
      studentWorkProject: first_year_experience_assignment_1_F19,
    },
    {
      score: 3,
      student: students[17],
      studentWorkProject: first_year_experience_assignment_2_F19,
    },
    {
      score: 4,
      student: students[17],
      studentWorkProject: first_year_experience_quiz_1_F19,
    },
    {
      score: 3,
      student: students[17],
      studentWorkProject: first_year_experience_quiz_2_F19,
    },
    {
      score: 4,
      student: students[17],
      studentWorkProject: first_year_experience_assignment_3_F19,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: first_year_experience_assignment_1_F19,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: first_year_experience_assignment_2_F19,
    },
    {
      score: 2,
      student: students[18],
      studentWorkProject: first_year_experience_quiz_1_F19,
    },
    {
      score: 4,
      student: students[18],
      studentWorkProject: first_year_experience_quiz_2_F19,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: first_year_experience_assignment_3_F19,
    },
    {
      score: 1,
      student: students[19],
      studentWorkProject: first_year_experience_assignment_1_F19,
    },
    {
      score: 0,
      student: students[19],
      studentWorkProject: first_year_experience_assignment_2_F19,
    },
    {
      score: 1,
      student: students[19],
      studentWorkProject: first_year_experience_quiz_1_F19,
    },
    {
      score: 0,
      student: students[19],
      studentWorkProject: first_year_experience_quiz_2_F19,
    },
    {
      score: 0,
      student: students[19],
      studentWorkProject: first_year_experience_assignment_3_F19,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: first_year_experience_assignment_1_F19,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: first_year_experience_assignment_2_F19,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: first_year_experience_quiz_1_F19,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: first_year_experience_quiz_2_F19,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: first_year_experience_assignment_3_F19,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: first_year_experience_assignment_1_F19,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: first_year_experience_assignment_2_F19,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: first_year_experience_quiz_1_F19,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: first_year_experience_quiz_2_F19,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: first_year_experience_assignment_3_F19,
    },
    {
      score: 2,
      student: students[22],
      studentWorkProject: first_year_experience_assignment_1_F19,
    },
    {
      score: 3,
      student: students[22],
      studentWorkProject: first_year_experience_assignment_2_F19,
    },
    {
      score: 2,
      student: students[22],
      studentWorkProject: first_year_experience_quiz_1_F19,
    },
    {
      score: 2,
      student: students[22],
      studentWorkProject: first_year_experience_quiz_2_F19,
    },
    {
      score: 3,
      student: students[22],
      studentWorkProject: first_year_experience_assignment_3_F19,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: first_year_experience_assignment_1_F19,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: first_year_experience_assignment_2_F19,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: first_year_experience_quiz_1_F19,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: first_year_experience_quiz_2_F19,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: first_year_experience_assignment_3_F19,
    },
    {
      score: 3,
      student: students[0],
      studentWorkProject: computer_organization_exercise_1_F20,
    },
    {
      score: 3,
      student: students[0],
      studentWorkProject: computer_organization_exercise_2_F20,
    },
    {
      score: 4,
      student: students[0],
      studentWorkProject: computer_organization_exercise_3_F20,
    },
    {
      score: 3,
      student: students[0],
      studentWorkProject: computer_organization_exercise_4_F20,
    },
    {
      score: 3,
      student: students[0],
      studentWorkProject: computer_organization_final_F20,
    },
    {
      score: 2,
      student: students[1],
      studentWorkProject: computer_organization_exercise_1_F20,
    },
    {
      score: 1,
      student: students[1],
      studentWorkProject: computer_organization_exercise_2_F20,
    },
    {
      score: 3,
      student: students[1],
      studentWorkProject: computer_organization_exercise_3_F20,
    },
    {
      score: 0,
      student: students[1],
      studentWorkProject: computer_organization_exercise_4_F20,
    },
    {
      score: 3,
      student: students[1],
      studentWorkProject: computer_organization_final_F20,
    },
    {
      score: 1,
      student: students[2],
      studentWorkProject: computer_organization_exercise_1_F20,
    },
    {
      score: 1,
      student: students[2],
      studentWorkProject: computer_organization_exercise_2_F20,
    },
    {
      score: 2,
      student: students[2],
      studentWorkProject: computer_organization_exercise_3_F20,
    },
    {
      score: 3,
      student: students[2],
      studentWorkProject: computer_organization_exercise_4_F20,
    },
    {
      score: 3,
      student: students[2],
      studentWorkProject: computer_organization_final_F20,
    },
    {
      score: 4,
      student: students[3],
      studentWorkProject: computer_organization_exercise_1_F20,
    },
    {
      score: 3,
      student: students[3],
      studentWorkProject: computer_organization_exercise_2_F20,
    },
    {
      score: 2,
      student: students[3],
      studentWorkProject: computer_organization_exercise_3_F20,
    },
    {
      score: 3,
      student: students[3],
      studentWorkProject: computer_organization_exercise_4_F20,
    },
    {
      score: 4,
      student: students[3],
      studentWorkProject: computer_organization_final_F20,
    },
    {
      score: 1,
      student: students[4],
      studentWorkProject: computer_organization_exercise_1_F20,
    },
    {
      score: 1,
      student: students[4],
      studentWorkProject: computer_organization_exercise_2_F20,
    },
    {
      score: 1,
      student: students[4],
      studentWorkProject: computer_organization_exercise_3_F20,
    },
    {
      score: 1,
      student: students[4],
      studentWorkProject: computer_organization_exercise_4_F20,
    },
    {
      score: 1,
      student: students[4],
      studentWorkProject: computer_organization_final_F20,
    },
    {
      score: 4,
      student: students[5],
      studentWorkProject: computer_organization_exercise_1_F20,
    },
    {
      score: 2,
      student: students[5],
      studentWorkProject: computer_organization_exercise_2_F20,
    },
    {
      score: 3,
      student: students[5],
      studentWorkProject: computer_organization_exercise_3_F20,
    },
    {
      score: 3,
      student: students[5],
      studentWorkProject: computer_organization_exercise_4_F20,
    },
    {
      score: 4,
      student: students[5],
      studentWorkProject: computer_organization_final_F20,
    },
    {
      score: 3,
      student: students[6],
      studentWorkProject: computer_organization_exercise_1_F20,
    },
    {
      score: 2,
      student: students[6],
      studentWorkProject: computer_organization_exercise_2_F20,
    },
    {
      score: 3,
      student: students[6],
      studentWorkProject: computer_organization_exercise_3_F20,
    },
    {
      score: 2,
      student: students[6],
      studentWorkProject: computer_organization_exercise_4_F20,
    },
    {
      score: 2,
      student: students[6],
      studentWorkProject: computer_organization_final_F20,
    },
    {
      score: 3,
      student: students[7],
      studentWorkProject: computer_organization_exercise_1_F20,
    },
    {
      score: 3,
      student: students[7],
      studentWorkProject: computer_organization_exercise_2_F20,
    },
    {
      score: 4,
      student: students[7],
      studentWorkProject: computer_organization_exercise_3_F20,
    },
    {
      score: 3,
      student: students[7],
      studentWorkProject: computer_organization_exercise_4_F20,
    },
    {
      score: 4,
      student: students[7],
      studentWorkProject: computer_organization_final_F20,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: computer_organization_exercise_1_Sp20,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: computer_organization_exercise_2_Sp20,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: computer_organization_exercise_3_Sp20,
    },
    {
      score: 2,
      student: students[8],
      studentWorkProject: computer_organization_exercise_4_Sp20,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: computer_organization_final_Sp20,
    },
    {
      score: 2,
      student: students[9],
      studentWorkProject: computer_organization_exercise_1_Sp20,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: computer_organization_exercise_2_Sp20,
    },
    {
      score: 1,
      student: students[9],
      studentWorkProject: computer_organization_exercise_3_Sp20,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: computer_organization_exercise_4_Sp20,
    },
    {
      score: 2,
      student: students[9],
      studentWorkProject: computer_organization_final_Sp20,
    },
    {
      score: 0,
      student: students[10],
      studentWorkProject: computer_organization_exercise_1_Sp20,
    },
    {
      score: 3,
      student: students[10],
      studentWorkProject: computer_organization_exercise_2_Sp20,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: computer_organization_exercise_3_Sp20,
    },
    {
      score: 2,
      student: students[10],
      studentWorkProject: computer_organization_exercise_4_Sp20,
    },
    {
      score: 3,
      student: students[10],
      studentWorkProject: computer_organization_final_Sp20,
    },
    {
      score: 1,
      student: students[11],
      studentWorkProject: computer_organization_exercise_1_Sp20,
    },
    {
      score: 2,
      student: students[11],
      studentWorkProject: computer_organization_exercise_2_Sp20,
    },
    {
      score: 0,
      student: students[11],
      studentWorkProject: computer_organization_exercise_3_Sp20,
    },
    {
      score: 1,
      student: students[11],
      studentWorkProject: computer_organization_exercise_4_Sp20,
    },
    {
      score: 2,
      student: students[11],
      studentWorkProject: computer_organization_final_Sp20,
    },
    {
      score: 4,
      student: students[12],
      studentWorkProject: computer_organization_exercise_1_Sp20,
    },
    {
      score: 4,
      student: students[12],
      studentWorkProject: computer_organization_exercise_2_Sp20,
    },
    {
      score: 4,
      student: students[12],
      studentWorkProject: computer_organization_exercise_3_Sp20,
    },
    {
      score: 4,
      student: students[12],
      studentWorkProject: computer_organization_exercise_4_Sp20,
    },
    {
      score: 3,
      student: students[12],
      studentWorkProject: computer_organization_final_Sp20,
    },
    {
      score: 2,
      student: students[13],
      studentWorkProject: computer_organization_exercise_1_Sp20,
    },
    {
      score: 1,
      student: students[13],
      studentWorkProject: computer_organization_exercise_2_Sp20,
    },
    {
      score: 3,
      student: students[13],
      studentWorkProject: computer_organization_exercise_3_Sp20,
    },
    {
      score: 2,
      student: students[13],
      studentWorkProject: computer_organization_exercise_4_Sp20,
    },
    {
      score: 3,
      student: students[13],
      studentWorkProject: computer_organization_final_Sp20,
    },
    {
      score: 1,
      student: students[14],
      studentWorkProject: computer_organization_exercise_1_Sp20,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: computer_organization_exercise_2_Sp20,
    },
    {
      score: 1,
      student: students[14],
      studentWorkProject: computer_organization_exercise_3_Sp20,
    },
    {
      score: 3,
      student: students[14],
      studentWorkProject: computer_organization_exercise_4_Sp20,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: computer_organization_final_Sp20,
    },
    {
      score: 4,
      student: students[15],
      studentWorkProject: computer_organization_exercise_1_Sp20,
    },
    {
      score: 4,
      student: students[15],
      studentWorkProject: computer_organization_exercise_2_Sp20,
    },
    {
      score: 3,
      student: students[15],
      studentWorkProject: computer_organization_exercise_3_Sp20,
    },
    {
      score: 3,
      student: students[15],
      studentWorkProject: computer_organization_exercise_4_Sp20,
    },
    {
      score: 4,
      student: students[15],
      studentWorkProject: computer_organization_final_Sp20,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: operating_systems_assignment_1_Sp20,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: operating_systems_assignment_2_Sp20,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: operating_systems_assignment_3_Sp20,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: operating_systems_quiz_1_Sp20,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: operating_systems_assignment_4_Sp20,
    },
    {
      score: 4,
      student: students[17],
      studentWorkProject: operating_systems_assignment_1_Sp20,
    },
    {
      score: 4,
      student: students[17],
      studentWorkProject: operating_systems_assignment_2_Sp20,
    },
    {
      score: 4,
      student: students[17],
      studentWorkProject: operating_systems_assignment_3_Sp20,
    },
    {
      score: 4,
      student: students[17],
      studentWorkProject: operating_systems_quiz_1_Sp20,
    },
    {
      score: 3,
      student: students[17],
      studentWorkProject: operating_systems_assignment_4_Sp20,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: operating_systems_assignment_1_Sp20,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: operating_systems_assignment_2_Sp20,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: operating_systems_assignment_3_Sp20,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: operating_systems_quiz_1_Sp20,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: operating_systems_assignment_4_Sp20,
    },
    {
      score: 4,
      student: students[19],
      studentWorkProject: operating_systems_assignment_1_Sp20,
    },
    {
      score: 4,
      student: students[19],
      studentWorkProject: operating_systems_assignment_2_Sp20,
    },
    {
      score: 3,
      student: students[19],
      studentWorkProject: operating_systems_assignment_3_Sp20,
    },
    {
      score: 3,
      student: students[19],
      studentWorkProject: operating_systems_quiz_1_Sp20,
    },
    {
      score: 3,
      student: students[19],
      studentWorkProject: operating_systems_assignment_4_Sp20,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: operating_systems_assignment_1_Sp20,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: operating_systems_assignment_2_Sp20,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: operating_systems_assignment_3_Sp20,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: operating_systems_quiz_1_Sp20,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: operating_systems_assignment_4_Sp20,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: operating_systems_assignment_1_Sp20,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: operating_systems_assignment_2_Sp20,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: operating_systems_assignment_3_Sp20,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: operating_systems_quiz_1_Sp20,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: operating_systems_assignment_4_Sp20,
    },
    {
      score: 4,
      student: students[22],
      studentWorkProject: operating_systems_assignment_1_Sp20,
    },
    {
      score: 4,
      student: students[22],
      studentWorkProject: operating_systems_assignment_2_Sp20,
    },
    {
      score: 4,
      student: students[22],
      studentWorkProject: operating_systems_assignment_3_Sp20,
    },
    {
      score: 4,
      student: students[22],
      studentWorkProject: operating_systems_quiz_1_Sp20,
    },
    {
      score: 3,
      student: students[22],
      studentWorkProject: operating_systems_assignment_4_Sp20,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: operating_systems_assignment_1_Sp20,
    },
    {
      score: 3,
      student: students[23],
      studentWorkProject: operating_systems_assignment_2_Sp20,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: operating_systems_assignment_3_Sp20,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: operating_systems_quiz_1_Sp20,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: operating_systems_assignment_4_Sp20,
    },
    {
      score: 2,
      student: students[24],
      studentWorkProject: operating_systems_assignment_1_F19,
    },
    {
      score: 2,
      student: students[24],
      studentWorkProject: operating_systems_assignment_2_F19,
    },
    {
      score: 2,
      student: students[24],
      studentWorkProject: operating_systems_assignment_3_F19,
    },
    {
      score: 2,
      student: students[24],
      studentWorkProject: operating_systems_quiz_1_F19,
    },
    {
      score: 3,
      student: students[24],
      studentWorkProject: operating_systems_assignment_4_F19,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: operating_systems_assignment_1_F19,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: operating_systems_assignment_2_F19,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: operating_systems_assignment_3_F19,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: operating_systems_quiz_1_F19,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: operating_systems_assignment_4_F19,
    },
    {
      score: 4,
      student: students[26],
      studentWorkProject: operating_systems_assignment_1_F19,
    },
    {
      score: 4,
      student: students[26],
      studentWorkProject: operating_systems_assignment_2_F19,
    },
    {
      score: 2,
      student: students[26],
      studentWorkProject: operating_systems_assignment_3_F19,
    },
    {
      score: 3,
      student: students[26],
      studentWorkProject: operating_systems_quiz_1_F19,
    },
    {
      score: 3,
      student: students[26],
      studentWorkProject: operating_systems_assignment_4_F19,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: operating_systems_assignment_1_F19,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: operating_systems_assignment_2_F19,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: operating_systems_assignment_3_F19,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: operating_systems_quiz_1_F19,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: operating_systems_assignment_4_F19,
    },
    {
      score: 3,
      student: students[28],
      studentWorkProject: operating_systems_assignment_1_F19,
    },
    {
      score: 3,
      student: students[28],
      studentWorkProject: operating_systems_assignment_2_F19,
    },
    {
      score: 3,
      student: students[28],
      studentWorkProject: operating_systems_assignment_3_F19,
    },
    {
      score: 3,
      student: students[28],
      studentWorkProject: operating_systems_quiz_1_F19,
    },
    {
      score: 4,
      student: students[29],
      studentWorkProject: operating_systems_assignment_1_F19,
    },
    {
      score: 4,
      student: students[29],
      studentWorkProject: operating_systems_assignment_2_F19,
    },
    {
      score: 4,
      student: students[29],
      studentWorkProject: operating_systems_assignment_3_F19,
    },
    {
      score: 4,
      student: students[29],
      studentWorkProject: operating_systems_quiz_1_F19,
    },
    {
      score: 4,
      student: students[29],
      studentWorkProject: operating_systems_assignment_4_F19,
    },
    {
      score: 2,
      student: students[29],
      studentWorkProject: operating_systems_assignment_4_F19,
    },
    {
      score: 0,
      student: students[30],
      studentWorkProject: operating_systems_assignment_1_F19,
    },
    {
      score: 1,
      student: students[30],
      studentWorkProject: operating_systems_assignment_2_F19,
    },
    {
      score: 2,
      student: students[30],
      studentWorkProject: operating_systems_assignment_3_F19,
    },
    {
      score: 0,
      student: students[30],
      studentWorkProject: operating_systems_quiz_1_F19,
    },
    {
      score: 3,
      student: students[30],
      studentWorkProject: operating_systems_assignment_4_F19,
    },
    {
      score: 2,
      student: students[31],
      studentWorkProject: operating_systems_assignment_1_F19,
    },
    {
      score: 3,
      student: students[31],
      studentWorkProject: operating_systems_assignment_2_F19,
    },
    {
      score: 2,
      student: students[31],
      studentWorkProject: operating_systems_assignment_3_F19,
    },
    {
      score: 3,
      student: students[31],
      studentWorkProject: operating_systems_quiz_1_F19,
    },
    {
      score: 2,
      student: students[31],
      studentWorkProject: operating_systems_assignment_4_F19,
    },
    {
      score: 2,
      student: students[8],
      studentWorkProject: programming_languages_assignment_1_F20,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: programming_languages_assignment_2_F20,
    },
    {
      score: 4,
      student: students[8],
      studentWorkProject: programming_languages_assignment_3_F20,
    },
    {
      score: 1,
      student: students[8],
      studentWorkProject: programming_languages_assignment_4_F20,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: programming_languages_project_F20,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: programming_languages_assignment_1_F20,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: programming_languages_assignment_2_F20,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: programming_languages_assignment_3_F20,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: programming_languages_assignment_4_F20,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: programming_languages_project_F20,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: programming_languages_assignment_1_F20,
    },
    {
      score: 3,
      student: students[10],
      studentWorkProject: programming_languages_assignment_2_F20,
    },
    {
      score: 3,
      student: students[10],
      studentWorkProject: programming_languages_assignment_3_F20,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: programming_languages_assignment_4_F20,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: programming_languages_project_F20,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: programming_languages_assignment_1_F20,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: programming_languages_assignment_2_F20,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: programming_languages_assignment_3_F20,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: programming_languages_assignment_4_F20,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: programming_languages_project_F20,
    },
    {
      score: 3,
      student: students[12],
      studentWorkProject: programming_languages_assignment_1_F20,
    },
    {
      score: 2,
      student: students[12],
      studentWorkProject: programming_languages_assignment_2_F20,
    },
    {
      score: 3,
      student: students[12],
      studentWorkProject: programming_languages_assignment_3_F20,
    },
    {
      score: 2,
      student: students[12],
      studentWorkProject: programming_languages_assignment_4_F20,
    },
    {
      score: 2,
      student: students[12],
      studentWorkProject: programming_languages_project_F20,
    },
    {
      score: 3,
      student: students[13],
      studentWorkProject: programming_languages_assignment_1_F20,
    },
    {
      score: 3,
      student: students[13],
      studentWorkProject: programming_languages_assignment_2_F20,
    },
    {
      score: 1,
      student: students[13],
      studentWorkProject: programming_languages_assignment_3_F20,
    },
    {
      score: 1,
      student: students[13],
      studentWorkProject: programming_languages_assignment_4_F20,
    },
    {
      score: 3,
      student: students[13],
      studentWorkProject: programming_languages_project_F20,
    },
    {
      score: 0,
      student: students[14],
      studentWorkProject: programming_languages_assignment_1_F20,
    },
    {
      score: 1,
      student: students[14],
      studentWorkProject: programming_languages_assignment_2_F20,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: programming_languages_assignment_3_F20,
    },
    {
      score: 3,
      student: students[14],
      studentWorkProject: programming_languages_assignment_4_F20,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: programming_languages_project_F20,
    },
    {
      score: 2,
      student: students[15],
      studentWorkProject: programming_languages_assignment_1_F20,
    },
    {
      score: 3,
      student: students[15],
      studentWorkProject: programming_languages_assignment_2_F20,
    },
    {
      score: 1,
      student: students[15],
      studentWorkProject: programming_languages_assignment_3_F20,
    },
    {
      score: 2,
      student: students[15],
      studentWorkProject: programming_languages_assignment_4_F20,
    },
    {
      score: 3,
      student: students[15],
      studentWorkProject: programming_languages_project_F20,
    },
    {
      score: 2,
      student: students[24],
      studentWorkProject: programming_languages_assignment_1_F19,
    },
    {
      score: 3,
      student: students[24],
      studentWorkProject: programming_languages_assignment_2_F19,
    },
    {
      score: 4,
      student: students[24],
      studentWorkProject: programming_languages_assignment_3_F19,
    },
    {
      score: 1,
      student: students[24],
      studentWorkProject: programming_languages_assignment_4_F19,
    },
    {
      score: 3,
      student: students[24],
      studentWorkProject: programming_languages_project_F19,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: programming_languages_assignment_1_F19,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: programming_languages_assignment_2_F19,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: programming_languages_assignment_3_F19,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: programming_languages_assignment_4_F19,
    },
    {
      score: 3,
      student: students[25],
      studentWorkProject: programming_languages_project_F19,
    },
    {
      score: 4,
      student: students[26],
      studentWorkProject: programming_languages_assignment_1_F19,
    },
    {
      score: 3,
      student: students[26],
      studentWorkProject: programming_languages_assignment_2_F19,
    },
    {
      score: 3,
      student: students[26],
      studentWorkProject: programming_languages_assignment_3_F19,
    },
    {
      score: 4,
      student: students[26],
      studentWorkProject: programming_languages_assignment_4_F19,
    },
    {
      score: 4,
      student: students[26],
      studentWorkProject: programming_languages_project_F19,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: programming_languages_assignment_1_F19,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: programming_languages_assignment_2_F19,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: programming_languages_assignment_3_F19,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: programming_languages_assignment_4_F19,
    },
    {
      score: 4,
      student: students[27],
      studentWorkProject: programming_languages_project_F19,
    },
    {
      score: 3,
      student: students[28],
      studentWorkProject: programming_languages_assignment_1_F19,
    },
    {
      score: 2,
      student: students[28],
      studentWorkProject: programming_languages_assignment_2_F19,
    },
    {
      score: 3,
      student: students[28],
      studentWorkProject: programming_languages_assignment_3_F19,
    },
    {
      score: 2,
      student: students[28],
      studentWorkProject: programming_languages_assignment_4_F19,
    },
    {
      score: 2,
      student: students[28],
      studentWorkProject: programming_languages_project_F19,
    },
    {
      score: 3,
      student: students[29],
      studentWorkProject: programming_languages_assignment_1_F19,
    },
    {
      score: 3,
      student: students[29],
      studentWorkProject: programming_languages_assignment_2_F19,
    },
    {
      score: 1,
      student: students[29],
      studentWorkProject: programming_languages_assignment_3_F19,
    },
    {
      score: 1,
      student: students[29],
      studentWorkProject: programming_languages_assignment_4_F19,
    },
    {
      score: 3,
      student: students[29],
      studentWorkProject: programming_languages_project_F19,
    },
    {
      score: 0,
      student: students[30],
      studentWorkProject: programming_languages_assignment_1_F19,
    },
    {
      score: 1,
      student: students[30],
      studentWorkProject: programming_languages_assignment_2_F19,
    },
    {
      score: 2,
      student: students[30],
      studentWorkProject: programming_languages_assignment_3_F19,
    },
    {
      score: 3,
      student: students[30],
      studentWorkProject: programming_languages_assignment_4_F19,
    },
    {
      score: 2,
      student: students[30],
      studentWorkProject: programming_languages_project_F19,
    },
    {
      score: 2,
      student: students[31],
      studentWorkProject: programming_languages_assignment_1_F19,
    },
    {
      score: 3,
      student: students[31],
      studentWorkProject: programming_languages_assignment_2_F19,
    },
    {
      score: 1,
      student: students[31],
      studentWorkProject: programming_languages_assignment_3_F19,
    },
    {
      score: 2,
      student: students[31],
      studentWorkProject: programming_languages_assignment_4_F19,
    },
    {
      score: 3,
      student: students[31],
      studentWorkProject: programming_languages_project_F19,
    },
    {
      score: 4,
      student: students[8],
      studentWorkProject: software_engineering_exercise_1_F20,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: software_engineering_exercise_2_F20,
    },
    {
      score: 2,
      student: students[8],
      studentWorkProject: software_engineering_quiz_1_F20,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: software_engineering_exercise_3_F20,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: software_engineering_final_F20,
    },
    {
      score: 2,
      student: students[9],
      studentWorkProject: software_engineering_exercise_1_F20,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: software_engineering_exercise_2_F20,
    },
    {
      score: 2,
      student: students[9],
      studentWorkProject: software_engineering_quiz_1_F20,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: software_engineering_exercise_3_F20,
    },
    {
      score: 2,
      student: students[9],
      studentWorkProject: software_engineering_final_F20,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: software_engineering_exercise_1_F20,
    },
    {
      score: 1,
      student: students[10],
      studentWorkProject: software_engineering_exercise_2_F20,
    },
    {
      score: 2,
      student: students[10],
      studentWorkProject: software_engineering_quiz_1_F20,
    },
    {
      score: 3,
      student: students[10],
      studentWorkProject: software_engineering_exercise_3_F20,
    },
    {
      score: 1,
      student: students[10],
      studentWorkProject: software_engineering_final_F20,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: software_engineering_exercise_1_F20,
    },
    {
      score: 3,
      student: students[11],
      studentWorkProject: software_engineering_exercise_2_F20,
    },
    {
      score: 2,
      student: students[11],
      studentWorkProject: software_engineering_quiz_1_F20,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: software_engineering_exercise_3_F20,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: software_engineering_final_F20,
    },
    {
      score: 1,
      student: students[12],
      studentWorkProject: software_engineering_exercise_1_F20,
    },
    {
      score: 1,
      student: students[12],
      studentWorkProject: software_engineering_exercise_2_F20,
    },
    {
      score: 1,
      student: students[12],
      studentWorkProject: software_engineering_quiz_1_F20,
    },
    {
      score: 2,
      student: students[12],
      studentWorkProject: software_engineering_exercise_3_F20,
    },
    {
      score: 3,
      student: students[12],
      studentWorkProject: software_engineering_final_F20,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: software_engineering_exercise_1_F20,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: software_engineering_exercise_2_F20,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: software_engineering_quiz_1_F20,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: software_engineering_exercise_3_F20,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: software_engineering_final_F20,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: software_engineering_exercise_1_F20,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: software_engineering_exercise_2_F20,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: software_engineering_quiz_1_F20,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: software_engineering_exercise_3_F20,
    },
    {
      score: 1,
      student: students[14],
      studentWorkProject: software_engineering_final_F20,
    },
    {
      score: 2,
      student: students[15],
      studentWorkProject: software_engineering_exercise_1_F20,
    },
    {
      score: 3,
      student: students[15],
      studentWorkProject: software_engineering_exercise_2_F20,
    },
    {
      score: 4,
      student: students[15],
      studentWorkProject: software_engineering_quiz_1_F20,
    },
    {
      score: 4,
      student: students[15],
      studentWorkProject: software_engineering_exercise_3_F20,
    },
    {
      score: 3,
      student: students[15],
      studentWorkProject: software_engineering_final_F20,
    },
    {
      score: 2,
      student: students[16],
      studentWorkProject: software_engineering_exercise_1_Sp20,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: software_engineering_exercise_2_Sp20,
    },
    {
      score: 1,
      student: students[16],
      studentWorkProject: software_engineering_quiz_1_Sp20,
    },
    {
      score: 0,
      student: students[16],
      studentWorkProject: software_engineering_exercise_3_Sp20,
    },
    {
      score: 2,
      student: students[16],
      studentWorkProject: software_engineering_final_Sp20,
    },
    {
      score: 2,
      student: students[17],
      studentWorkProject: software_engineering_exercise_1_Sp20,
    },
    {
      score: 1,
      student: students[17],
      studentWorkProject: software_engineering_exercise_2_Sp20,
    },
    {
      score: 3,
      student: students[17],
      studentWorkProject: software_engineering_quiz_1_Sp20,
    },
    {
      score: 2,
      student: students[17],
      studentWorkProject: software_engineering_exercise_3_Sp20,
    },
    {
      score: 1,
      student: students[17],
      studentWorkProject: software_engineering_final_Sp20,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: software_engineering_exercise_1_Sp20,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: software_engineering_exercise_2_Sp20,
    },
    {
      score: 2,
      student: students[18],
      studentWorkProject: software_engineering_quiz_1_Sp20,
    },
    {
      score: 2,
      student: students[18],
      studentWorkProject: software_engineering_exercise_3_Sp20,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: software_engineering_final_Sp20,
    },
    {
      score: 1,
      student: students[19],
      studentWorkProject: software_engineering_exercise_1_Sp20,
    },
    {
      score: 0,
      student: students[19],
      studentWorkProject: software_engineering_exercise_2_Sp20,
    },
    {
      score: 1,
      student: students[19],
      studentWorkProject: software_engineering_quiz_1_Sp20,
    },
    {
      score: 2,
      student: students[19],
      studentWorkProject: software_engineering_exercise_3_Sp20,
    },
    {
      score: 1,
      student: students[19],
      studentWorkProject: software_engineering_final_Sp20,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: software_engineering_exercise_1_Sp20,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: software_engineering_exercise_2_Sp20,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: software_engineering_quiz_1_Sp20,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: software_engineering_exercise_3_Sp20,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: software_engineering_final_Sp20,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: software_engineering_exercise_1_Sp20,
    },
    {
      score: 4,
      student: students[21],
      studentWorkProject: software_engineering_exercise_2_Sp20,
    },
    {
      score: 4,
      student: students[21],
      studentWorkProject: software_engineering_quiz_1_Sp20,
    },
    {
      score: 4,
      student: students[21],
      studentWorkProject: software_engineering_exercise_3_Sp20,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: software_engineering_final_Sp20,
    },
    {
      score: 4,
      student: students[22],
      studentWorkProject: software_engineering_exercise_1_Sp20,
    },
    {
      score: 3,
      student: students[22],
      studentWorkProject: software_engineering_exercise_2_Sp20,
    },
    {
      score: 2,
      student: students[22],
      studentWorkProject: software_engineering_quiz_1_Sp20,
    },
    {
      score: 3,
      student: students[22],
      studentWorkProject: software_engineering_exercise_3_Sp20,
    },
    {
      score: 4,
      student: students[22],
      studentWorkProject: software_engineering_final_Sp20,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: software_engineering_exercise_1_Sp20,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: software_engineering_exercise_2_Sp20,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: software_engineering_quiz_1_Sp20,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: software_engineering_exercise_3_Sp20,
    },
    {
      score: 2,
      student: students[8],
      studentWorkProject: software_engineering_final_Sp20,
    },
    {
      score: 2,
      student: students[8],
      studentWorkProject: algorithms_quiz_1_Sp20,
    },
    {
      score: 2,
      student: students[8],
      studentWorkProject: algorithms_quiz_2_Sp20,
    },
    {
      score: 3,
      student: students[8],
      studentWorkProject: algorithms_quiz_3_Sp20,
    },
    {
      score: 4,
      student: students[8],
      studentWorkProject: algorithms_quiz_4_Sp20,
    },
    {
      score: 2,
      student: students[9],
      studentWorkProject: algorithms_quiz_1_Sp20,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: algorithms_quiz_2_Sp20,
    },
    {
      score: 2,
      student: students[9],
      studentWorkProject: algorithms_quiz_3_Sp20,
    },
    {
      score: 3,
      student: students[9],
      studentWorkProject: algorithms_quiz_4_Sp20,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: algorithms_quiz_1_Sp20,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: algorithms_quiz_2_Sp20,
    },
    {
      score: 3,
      student: students[10],
      studentWorkProject: algorithms_quiz_3_Sp20,
    },
    {
      score: 4,
      student: students[10],
      studentWorkProject: algorithms_quiz_4_Sp20,
    },
    {
      score: 2,
      student: students[11],
      studentWorkProject: algorithms_quiz_1_Sp20,
    },
    {
      score: 2,
      student: students[11],
      studentWorkProject: algorithms_quiz_2_Sp20,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: algorithms_quiz_3_Sp20,
    },
    {
      score: 4,
      student: students[11],
      studentWorkProject: algorithms_quiz_4_Sp20,
    },
    {
      score: 0,
      student: students[12],
      studentWorkProject: algorithms_quiz_1_Sp20,
    },
    {
      score: 3,
      student: students[12],
      studentWorkProject: algorithms_quiz_2_Sp20,
    },
    {
      score: 4,
      student: students[12],
      studentWorkProject: algorithms_quiz_3_Sp20,
    },
    {
      score: 3,
      student: students[12],
      studentWorkProject: algorithms_quiz_4_Sp20,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: algorithms_quiz_1_Sp20,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: algorithms_quiz_2_Sp20,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: algorithms_quiz_3_Sp20,
    },
    {
      score: 4,
      student: students[13],
      studentWorkProject: algorithms_quiz_4_Sp20,
    },
    {
      score: 0,
      student: students[14],
      studentWorkProject: algorithms_quiz_1_Sp20,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: algorithms_quiz_2_Sp20,
    },
    {
      score: 1,
      student: students[14],
      studentWorkProject: algorithms_quiz_3_Sp20,
    },
    {
      score: 2,
      student: students[14],
      studentWorkProject: algorithms_quiz_4_Sp20,
    },
    {
      score: 2,
      student: students[15],
      studentWorkProject: algorithms_quiz_1_Sp20,
    },
    {
      score: 3,
      student: students[15],
      studentWorkProject: algorithms_quiz_2_Sp20,
    },
    {
      score: 4,
      student: students[15],
      studentWorkProject: algorithms_quiz_3_Sp20,
    },
    {
      score: 4,
      student: students[15],
      studentWorkProject: algorithms_quiz_4_Sp20,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: algorithms_quiz_1_F19,
    },
    {
      score: 3,
      student: students[16],
      studentWorkProject: algorithms_quiz_2_F19,
    },
    {
      score: 4,
      student: students[16],
      studentWorkProject: algorithms_quiz_3_F19,
    },
    {
      score: 2,
      student: students[16],
      studentWorkProject: algorithms_quiz_4_F19,
    },
    {
      score: 3,
      student: students[17],
      studentWorkProject: algorithms_quiz_1_F19,
    },
    {
      score: 4,
      student: students[17],
      studentWorkProject: algorithms_quiz_2_F19,
    },
    {
      score: 4,
      student: students[17],
      studentWorkProject: algorithms_quiz_3_F19,
    },
    {
      score: 4,
      student: students[17],
      studentWorkProject: algorithms_quiz_4_F19,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: algorithms_quiz_1_F19,
    },
    {
      score: 2,
      student: students[18],
      studentWorkProject: algorithms_quiz_2_F19,
    },
    {
      score: 2,
      student: students[18],
      studentWorkProject: algorithms_quiz_3_F19,
    },
    {
      score: 3,
      student: students[18],
      studentWorkProject: algorithms_quiz_4_F19,
    },
    {
      score: 4,
      student: students[19],
      studentWorkProject: algorithms_quiz_1_F19,
    },
    {
      score: 4,
      student: students[19],
      studentWorkProject: algorithms_quiz_2_F19,
    },
    {
      score: 3,
      student: students[19],
      studentWorkProject: algorithms_quiz_3_F19,
    },
    {
      score: 0,
      student: students[19],
      studentWorkProject: algorithms_quiz_4_F19,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: algorithms_quiz_1_F19,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: algorithms_quiz_2_F19,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: algorithms_quiz_3_F19,
    },
    {
      score: 4,
      student: students[20],
      studentWorkProject: algorithms_quiz_4_F19,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: algorithms_quiz_1_F19,
    },
    {
      score: 3,
      student: students[21],
      studentWorkProject: algorithms_quiz_2_F19,
    },
    {
      score: 2,
      student: students[21],
      studentWorkProject: algorithms_quiz_3_F19,
    },
    {
      score: 2,
      student: students[21],
      studentWorkProject: algorithms_quiz_4_F19,
    },
    {
      score: 4,
      student: students[22],
      studentWorkProject: algorithms_quiz_1_F19,
    },
    {
      score: 1,
      student: students[22],
      studentWorkProject: algorithms_quiz_2_F19,
    },
    {
      score: 4,
      student: students[22],
      studentWorkProject: algorithms_quiz_3_F19,
    },
    {
      score: 3,
      student: students[22],
      studentWorkProject: algorithms_quiz_4_F19,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: algorithms_quiz_1_F19,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: algorithms_quiz_2_F19,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: algorithms_quiz_3_F19,
    },
    {
      score: 4,
      student: students[23],
      studentWorkProject: algorithms_quiz_4_F19,
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
