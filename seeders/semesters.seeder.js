import { Seeder } from "mongoose-data-seed";
import Semester from "../src/models/Semester";

const data = [
  {
    year: 2020,
    term: "Fall",
    isCurrent: true,
  },
  {
    year: 2020,
    term: "Spring",
    isCurrent: false,
  },
  {
    year: 2020,
    term: "Summer",
    isCurrent: false,
  },
  {
    year: 2019,
    term: "Fall",
    isCurrent: false,
  },
];
class SemestersSeeder extends Seeder {
  async shouldRun() {
    return Semester.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    return Promise.all(
      data.map(async (semester) => {
        return Semester.create(semester);
      })
    );
  }
}

export default SemestersSeeder;
