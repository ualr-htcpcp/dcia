import { Seeder } from "mongoose-data-seed";
import StudentOutcome from "../src/models/StudentOutcome";

const data = [
  {
    studentOutcomeNumber: 1,
    definition: "Analyze a complex computing problem and to apply principles of computing and other relevant disciplines to identify solutions.",
  },
  {
    studentOutcomeNumber: 2,
    definition: "Design, implement, and evaluate a computing-based solution to meet a given set of computing requirements in the context of the program’s discipline."
  },
  {
    studentOutcomeNumber: 3,
    definition: "Communicate effectively in a variety of professional contexts."
  },
  {
    studentOutcomeNumber: 4,
    definition: "Recognize professional responsibilities and make informed judgments in computing practice based on legal and ethical principles."
  },
  {
    studentOutcomeNumber: 5,
    definition: "Function effectively as a member or leader of a team engaged in activities appropriate to the program’s discipline."
  },
  {
    studentOutcomeNumber: 6,
    definition: "Apply computer science theory and software development fundamentals to produce computing-based solutions."
  },
];

class StudentOutcomesSeeder extends Seeder {
    async shouldRun() {
      return StudentOutcome.countDocuments()
        .exec()
        .then((count) => count === 0);
    }
  
    async run() {
      return Promise.all(
        data.map(async (studentOutcome) => {
          return StudentOutcome.create(studentOutcome);
        })
      );
    }
  }
  
  export default StudentOutcomesSeeder;
  
