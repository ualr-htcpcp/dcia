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
  const fall2020 = await Semester.findOne({ year: 2020, term: "fall" });
  const spring2020 = await Semester.findOne({ year: 2020, term: "spring" });
  const fall2019 = await Semester.findOne({ year: 2019, term: "fall" });
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
        programming_I_assignment_1_F20,
        programming_I_assignment_2_F20,
        programming_I_quiz_1_F20,
        programming_I_assignment_3_F20,
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
        programming_I_assignment_1_Sp20,
        programming_I_assignment_2_Sp20,
        programming_I_quiz_1_Sp20,
        programming_I_assignment_3_Sp20,
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
        programming_I_assignment_1_F19,
        programming_I_assignment_2_F19,
        programming_I_quiz_1_F19,
        programming_I_assignment_3_F19,
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
        capstone_skill_survey_F20,
        capstone_request_for_proposal_F20,
        capstone_project_F20,
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
        capstone_skill_survey_Sp20,
        capstone_request_for_proposal_Sp20,
        capstone_project_Sp20,
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
        capstone_skill_survey_F19,
        capstone_request_for_proposal_F19,
        capstone_project_F19,
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
        first_year_experience_assignment_1_F20,
        first_year_experience_assignment_2_F20,
        first_year_experience_quiz_1_F20,
        first_year_experience_quiz_2_F20,
        first_year_experience_assignment_3_F20,
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
        first_year_experience_assignment_1_Sp20,
        first_year_experience_assignment_2_Sp20,
        first_year_experience_quiz_1_Sp20,
        first_year_experience_quiz_2_Sp20,
        first_year_experience_assignment_3_Sp20,
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
        first_year_experience_assignment_1_F19,
        first_year_experience_assignment_2_F19,
        first_year_experience_quiz_1_F19,
        first_year_experience_quiz_2_F19,
        first_year_experience_assignment_3_F19,
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
        computer_organization_exercise_1_F20,
        computer_organization_exercise_2_F20,
        computer_organization_exercise_3_F20,
        computer_organization_exercise_4_F20,
        computer_organization_final_F20,
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
        computer_organization_exercise_1_Sp20,
        computer_organization_exercise_2_Sp20,
        computer_organization_exercise_3_Sp20,
        computer_organization_exercise_4_Sp20,
        computer_organization_final_Sp20,
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
        operating_systems_assignment_1_Sp20,
        operating_systems_assignment_2_Sp20,
        operating_systems_assignment_3_Sp20,
        operating_systems_quiz_1_Sp20,
        operating_systems_assignment_4_Sp20,
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
        operating_systems_assignment_1_F19,
        operating_systems_assignment_2_F19,
        operating_systems_assignment_3_F19,
        operating_systems_quiz_1_F19,
        operating_systems_assignment_4_F19,
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
        programming_languages_assignment_1_F20,
        programming_languages_assignment_2_F20,
        programming_languages_assignment_3_F20,
        programming_languages_assignment_4_F20,
        programming_languages_project_F20,
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
        programming_languages_assignment_1_F19,
        programming_languages_assignment_2_F19,
        programming_languages_assignment_3_F19,
        programming_languages_assignment_4_F19,
        programming_languages_project_F19,
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
        software_engineering_exercise_1_F20,
        software_engineering_exercise_2_F20,
        software_engineering_quiz_1_F20,
        software_engineering_exercise_3_F20,
        software_engineering_final_F20,
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
        software_engineering_exercise_1_Sp20,
        software_engineering_exercise_2_Sp20,
        software_engineering_quiz_1_Sp20,
        software_engineering_exercise_3_Sp20,
        software_engineering_final_Sp20,
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
        algorithms_quiz_1_Sp20,
        algorithms_quiz_2_Sp20,
        algorithms_quiz_3_Sp20,
        algorithms_quiz_4_Sp20,
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
        algorithms_quiz_1_F19,
        algorithms_quiz_2_F19,
        algorithms_quiz_3_F19,
        algorithms_quiz_4_F19,
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
