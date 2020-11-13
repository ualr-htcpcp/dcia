import { Seeder } from "mongoose-data-seed";
import Instructor from "../src/models/Instructor";
import User from "../src/models/User";

const data = async () => {
  const chiaChuChiang = await User.findOne({
    email: "cxchiang@ualr.edu",
    accessLevel: "instructor",
  });
  const philipHuff = await User.findOne({
    email: "pdhuff@ualr.edu",
    accessLevel: "instructor",
  });
  const mariofannaMilanova = await User.findOne({
    email: "mgmilanova@ualr.edu",
    accessLevel: "instructor",
  });
  const seanOrme = await User.findOne({
    email: "smorme@ualr.edu",
    accessLevel: "instructor",
  });
  const janSpringer = await User.findOne({
    email: "jpspringer@ualr.edu",
    accessLevel: "instructor",
  });
  const brianKeltch = await User.findOne({
    email: "bwkeltch@ualr.edu",
    accessLevel: "instructor",
  });
  return [
    {
      name: {
        first: "Chia-Chu",
        last: "Chiang",
        postNominalInititals: "Ph.D.",
      },
      user: chiaChuChiang,
    },
    {
      name: { first: "Philip", last: "Huff", postNominalInititals: "M.S." },
      user: philipHuff,
    },
    {
      name: {
        first: "Mariofanna",
        last: "Milanova",
        postNominalInititals: "Ph.D.",
      },
      user: mariofannaMilanova,
    },
    {
      name: { first: "Sean", last: "Orme", postNominalInititals: "M.S." },
      user: seanOrme,
    },
    {
      name: { first: "Jan", last: "Springer", postNominalInititals: "Ph.D." },
      user: janSpringer,
    },
    {
      name: { first: "Brian", last: "Keltch", postNominalInititals: "M.S." },
      user: brianKeltch,
    },
  ];
};

class InstructorsSeeder extends Seeder {
  async shouldRun() {
    return Instructor.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    const instructors = await data();

    return Promise.all(
      instructors.map(async (instructor) => {
        return Instructor.create(instructor);
      })
    );
  }
}

export default InstructorsSeeder;
