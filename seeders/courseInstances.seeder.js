import { Seeder } from "mongoose-data-seed";
import CourseInstance from "../src/models/CourseInstance";
import Instructor from "../src/models/Instructor";
import Student from "../src/models/Student";
import Semester from "../src/models/Semester";
import Course from "../src/models/Course";
import StudentWorkProject from "../src/models/StudentWorkProject";

const data = async () => {
  const chiaChuChiang = await Instructor.findOne({
    name: { first: "Chia-Chu", last: "Chiang", postNominalInititals: "Ph.D." },
  });
  const philipHuff = await Instructor.findOne({
    name: { first: "Philip", last: "Huff", postNominalInititals: "M.S." },
  });
  const mariofannaMilanova = await Instructor.findOne({
    name: {
      first: "Mariofanna",
      last: "Milanova",
      postNominalInititals: "Ph.D.",
    },
  });
  const seanOrme = await Instructor.findOne({
    name: { first: "Sean", last: "Orme", postNominalInititals: "M.S." },
  });
  const janSpringer = await Instructor.findOne({
    name: { first: "Jan", last: "Springer", postNominalInititals: "Ph.D." },
  });
  const brianKeltch = await Instructor.findOne({
    name: { first: "Brian", last: "Keltch", postNominalInititals: "M.S." },
  });
  const billyMadison = await Student.findOne({ tNumber: 12345670 });
  const johnyWalker = await Student.findOne({ tNumber: 11165439 });
  const someGuy = await Student.findOne({ tNumber: 11115647 });
  const robertBoucher = await Student.findOne({ tNumber: 11111098 });
  const robbieHart = await Student.findOne({ tNumber: 11102302 });
  const charlieFineman = await Student.findOne({ tNumber: 10110123 });
  const sonnyKoufax = await Student.findOne({ tNumber: 10000231 });
  const michaelNewman = await Student.findOne({ tNumber: 10004522 });
  const chuckLevine = await Student.findOne({ tNumber: 10010247 });
  const skeeterBronson = await Student.findOne({ tNumber: 10101028 });
  const vickiVallencourt = await Student.findOne({ tNumber: 10003384 });
  const virginiaVenit = await Student.findOne({ tNumber: 10003744 });
  const veronicaVaughn = await Student.findOne({ tNumber: 10034628 });
  const miaWallace = await Student.findOne({ tNumber: 10054962 });
  const adaLovelace = await Student.findOne({ tNumber: 10003432 });
  const graceHopper = await Student.findOne({ tNumber: 10003947 });
  const katherineJohnson = await Student.findOne({ tNumber: 10004899 });
  const margaretHamilton = await Student.findOne({ tNumber: 10005433 });
  const stephanieShirley = await Student.findOne({ tNumber: 10064341 });
  const meganSmith = await Student.findOne({ tNumber: 12132843 });
  const carlaJean = await Student.findOne({ tNumber: 10002326 });
  const danielPlainview = await Student.findOne({ tNumber: 10002623 });
  const bobMarley = await Student.findOne({ tNumber: 23193124 });
  const bettyWhite = await Student.findOne({ tNumber: 10053212 });
  const erykahBadu = await Student.findOne({ tNumber: 10043253 });
  const galGadot = await Student.findOne({ tNumber: 10000011 });
  const meredithQuill = await Student.findOne({ tNumber: 10000000 });
  const johnnyAppleseed = await Student.findOne({ tNumber: 11111111 });
  const rickyBobby = await Student.findOne({ tNumber: 10101010 });
  const zoeSaldana = await Student.findOne({ tNumber: 87654321 });
  const davidChappelle = await Student.findOne({ tNumber: 19283746 });
  const mikeMeyers = await Student.findOne({ tNumber: 10312020 });
  const programmingI = await Course.findOne({ courseNumber: 1375 });
  const capstone = await Course.findOne({ courseNumber: 4392 });
  const firstYear = await Course.findOne({ courseNumber: 1105 });
  const compOrg = await Course.findOne({ courseNumber: 2482 });
  const opSys = await Course.findOne({ courseNumber: 3380 });
  const progLang = await Course.findOne({ courseNumber: 3383 });
  const swEng = await Course.findOne({ courseNumber: 4373 });
  const algorithm = await Course.findOne({ courseNumber: 2380 });
  const prog1Assignment1 = await StudentWorkProject.findOne({
    name: "Prog1 Assignment 1",
  });
  const prog1Assignment2 = await StudentWorkProject.findOne({
    name: "Prog1 Assignment 2",
  });
  const prog1Quiz1 = await StudentWorkProject.findOne({ name: "Prog1 Quiz 1" });
  const prog1Assignment3 = await StudentWorkProject.findOne({
    name: "Prog1 Assignment 3",
  });
  const capSkillSurvey = await StudentWorkProject.findOne({
    name: "Skills Survey",
  });
  const capRFP = await StudentWorkProject.findOne({ name: "RFP" });
  const capProject = await StudentWorkProject.findOne({
    name: "Capstone Project",
  });
  const fyeAssignment1 = await StudentWorkProject.findOne({
    name: "FYE Assignment 1",
  });
  const fyeAssignment2 = await StudentWorkProject.findOne({
    name: "FYE Assignment 2",
  });
  const fyeQuiz1 = await StudentWorkProject.findOne({ name: "FYE Quiz 1" });
  const fyeQuiz2 = await StudentWorkProject.findOne({ name: "FYE Quiz 2" });
  const fyeAssignment3 = await StudentWorkProject.findOne({
    name: "FYE Assignment 3",
  });
  const algoQuiz1 = await StudentWorkProject.findOne({
    name: "Algorithms Quiz 1",
  });
  const algoQuiz2 = await StudentWorkProject.findOne({
    name: "Algorithms Quiz 2",
  });
  const algoQuiz3 = await StudentWorkProject.findOne({
    name: "Algorithms Quiz 3",
  });
  const algoQuiz4 = await StudentWorkProject.findOne({
    name: "Algorithms Quiz 4",
  });
  const compOrgEx1 = await StudentWorkProject.findOne({
    name: "CompOrg Exercise 1",
  });
  const compOrgEx2 = await StudentWorkProject.findOne({
    name: "CompOrg Exercise 2",
  });
  const compOrgEx3 = await StudentWorkProject.findOne({
    name: "CompOrg Exercise 3",
  });
  const compOrgEx4 = await StudentWorkProject.findOne({
    name: "CompOrg Exercise 4",
  });
  const compOrgFinal = await StudentWorkProject.findOne({
    name: "CompOrg Final",
  });
  const opSysAssignment1 = await StudentWorkProject.findOne({
    name: "OpSys Assignment 1",
  });
  const opSysAssignment2 = await StudentWorkProject.findOne({
    name: "OpSys Assignment 2",
  });
  const opSysAssignment3 = await StudentWorkProject.findOne({
    name: "OpSys Assignment 3",
  });
  const opSysQuiz1 = await StudentWorkProject.findOne({ name: "OpSys Quiz 1" });
  const opSysAssignment4 = await StudentWorkProject.findOne({
    name: "OpSys Assignment 4",
  });
  const progLanAssignment1 = await StudentWorkProject.findOne({
    name: "ProgLan Assignment 1",
  });
  const progLanAssignment2 = await StudentWorkProject.findOne({
    name: "ProgLan Assignment 2",
  });
  const progLanAssignment3 = await StudentWorkProject.findOne({
    name: "ProgLan Assignment 3",
  });
  const progLanAssignment4 = await StudentWorkProject.findOne({
    name: "ProgLan Assignment 4",
  });
  const progLanProject = await StudentWorkProject.findOne({
    name: "ProgLan Project",
  });
  const sweExercise1 = await StudentWorkProject.findOne({
    name: "SWE Exercise 1",
  });
  const sweExercise2 = await StudentWorkProject.findOne({
    name: "SWE Exercise 2",
  });
  const sweQuiz1 = await StudentWorkProject.findOne({
    name: "SWE Quiz 1",
  });
  const sweExercise3 = await StudentWorkProject.findOne({
    name: "SWE Exercise 3",
  });
  const sweFinal = await StudentWorkProject.findOne({
    name: "SWE Final",
  });
  const spring2020 = await Semester.findOne({ year: 2020, term: "Spring" });
  const fall2020 = await Semester.findOne({ year: 2020, term: "Fall" });
  const fall2019 = await Semester.findOne({ year: 2019, term: "Fall" });
  return [
    {
      instructor: janSpringer,
      students: [
        billyMadison,
        johnyWalker,
        someGuy,
        robertBoucher,
        robbieHart,
        charlieFineman,
        sonnyKoufax,
        virginiaVenit,
      ],
      semester: fall2020,
      course: programmingI,
      studentWorkProject: [
        prog1Assignment1,
        prog1Assignment2,
        prog1Quiz1,
        prog1Assignment3,
      ],
    },
    {
      instructor: janSpringer,
      students: [
        veronicaVaughn,
        miaWallace,
        graceHopper,
        katherineJohnson,
        margaretHamilton,
        stephanieShirley,
        mikeMeyers,
        danielPlainview,
      ],
      semester: spring2020,
      course: programmingI,
      studentWorkProject: [
        prog1Assignment1,
        prog1Assignment2,
        prog1Quiz1,
        prog1Assignment3,
      ],
    },
    {
      instructor: seanOrme,
      students: [
        michaelNewman,
        chuckLevine,
        skeeterBronson,
        vickiVallencourt,
        adaLovelace,
        davidChappelle,
        zoeSaldana,
        bettyWhite,
      ],
      semester: fall2019,
      course: programmingI,
      studentWorkProject: [
        prog1Assignment1,
        prog1Assignment2,
        prog1Quiz1,
        prog1Assignment3,
      ],
    },
    {
      instructor: janSpringer,
      students: [
        veronicaVaughn,
        miaWallace,
        graceHopper,
        katherineJohnson,
        margaretHamilton,
        stephanieShirley,
        mikeMeyers,
        danielPlainview,
      ],
      semester: fall2020,
      course: capstone,
      studentWorkProject: [capSkillSurvey, capRFP, capProject],
    },
    {
      instructor: janSpringer,
      students: [
        michaelNewman,
        chuckLevine,
        skeeterBronson,
        vickiVallencourt,
        adaLovelace,
        davidChappelle,
        zoeSaldana,
        bettyWhite,
      ],
      semester: spring2020,
      course: capstone,
      studentWorkProject: [capSkillSurvey, capRFP, capProject],
    },
    {
      instructor: brianKeltch,
      students: [
        meganSmith,
        carlaJean,
        erykahBadu,
        galGadot,
        meredithQuill,
        johnnyAppleseed,
        bobMarley,
        rickyBobby,
      ],
      semester: fall2019,
      course: capstone,
      studentWorkProject: [capSkillSurvey, capRFP, capProject],
    },
    {
      instructor: mariofannaMilanova,
      students: [
        billyMadison,
        johnyWalker,
        someGuy,
        robertBoucher,
        robbieHart,
        charlieFineman,
        sonnyKoufax,
        virginiaVenit,
      ],
      semester: fall2020,
      course: firstYear,
      studentWorkProject: [
        fyeAssignment1,
        fyeAssignment2,
        fyeQuiz1,
        fyeQuiz2,
        fyeAssignment3,
      ],
    },
    {
      instructor: mariofannaMilanova,
      students: [
        veronicaVaughn,
        miaWallace,
        graceHopper,
        katherineJohnson,
        margaretHamilton,
        stephanieShirley,
        mikeMeyers,
        danielPlainview,
      ],
      semester: spring2020,
      course: firstYear,
      studentWorkProject: [
        fyeAssignment1,
        fyeAssignment2,
        fyeQuiz1,
        fyeQuiz2,
        fyeAssignment3,
      ],
    },
    {
      instructor: mariofannaMilanova,
      students: [
        michaelNewman,
        chuckLevine,
        skeeterBronson,
        vickiVallencourt,
        adaLovelace,
        davidChappelle,
        zoeSaldana,
        bettyWhite,
      ],
      semester: fall2019,
      course: firstYear,
      studentWorkProject: [
        fyeAssignment1,
        fyeAssignment2,
        fyeQuiz1,
        fyeQuiz2,
        fyeAssignment3,
      ],
    },
    {
      instructor: seanOrme,
      students: [
        billyMadison,
        johnyWalker,
        someGuy,
        robertBoucher,
        robbieHart,
        charlieFineman,
        sonnyKoufax,
        virginiaVenit,
      ],
      semester: fall2020,
      course: compOrg,
      studentWorkProject: [
        compOrgEx1,
        compOrgEx2,
        compOrgEx3,
        compOrgEx4,
        compOrgFinal,
      ],
    },
    {
      instructor: seanOrme,
      students: [
        veronicaVaughn,
        miaWallace,
        graceHopper,
        katherineJohnson,
        margaretHamilton,
        stephanieShirley,
        mikeMeyers,
        danielPlainview,
      ],
      semester: spring2020,
      course: compOrg,
      studentWorkProject: [
        compOrgEx1,
        compOrgEx2,
        compOrgEx3,
        compOrgEx4,
        compOrgFinal,
      ],
    },
    {
      instructor: philipHuff,
      students: [
        michaelNewman,
        chuckLevine,
        skeeterBronson,
        vickiVallencourt,
        adaLovelace,
        davidChappelle,
        zoeSaldana,
        bettyWhite,
      ],
      semester: spring2020,
      course: opSys,
      studentWorkProject: [
        opSysAssignment1,
        opSysAssignment2,
        opSysAssignment3,
        opSysQuiz1,
        opSysAssignment4,
      ],
    },
    {
      instructor: philipHuff,
      students: [
        meganSmith,
        carlaJean,
        erykahBadu,
        galGadot,
        meredithQuill,
        johnnyAppleseed,
        bobMarley,
        rickyBobby,
      ],
      semester: fall2019,
      course: opSys,
      studentWorkProject: [
        opSysAssignment1,
        opSysAssignment2,
        opSysAssignment3,
        opSysQuiz1,
        opSysAssignment4,
      ],
    },
    {
      instructor: mariofannaMilanova,
      students: [
        veronicaVaughn,
        miaWallace,
        graceHopper,
        katherineJohnson,
        margaretHamilton,
        stephanieShirley,
        mikeMeyers,
        danielPlainview,
      ],
      semester: fall2020,
      course: progLang,
      studentWorkProject: [
        progLanAssignment1,
        progLanAssignment2,
        progLanAssignment3,
        progLanAssignment4,
        progLanProject,
      ],
    },
    {
      instructor: janSpringer,
      students: [
        meganSmith,
        carlaJean,
        erykahBadu,
        galGadot,
        meredithQuill,
        johnnyAppleseed,
        bobMarley,
        rickyBobby,
      ],
      semester: fall2019,
      course: progLang,
      studentWorkProject: [
        progLanAssignment1,
        progLanAssignment2,
        progLanAssignment3,
        progLanAssignment4,
        progLanProject,
      ],
    },
    {
      instructor: brianKeltch,
      students: [
        veronicaVaughn,
        miaWallace,
        graceHopper,
        katherineJohnson,
        margaretHamilton,
        stephanieShirley,
        mikeMeyers,
        danielPlainview,
      ],
      semester: fall2020,
      course: swEng,
      studentWorkProject: [
        sweExercise1,
        sweExercise2,
        sweQuiz1,
        sweExercise3,
        sweFinal,
      ],
    },
    {
      instructor: brianKeltch,
      students: [
        michaelNewman,
        chuckLevine,
        skeeterBronson,
        vickiVallencourt,
        adaLovelace,
        davidChappelle,
        zoeSaldana,
        bettyWhite,
      ],
      semester: spring2020,
      course: swEng,
      studentWorkProject: [
        sweExercise1,
        sweExercise2,
        sweQuiz1,
        sweExercise3,
        sweFinal,
      ],
    },
    {
      instructor: chiaChuChiang,
      students: [
        veronicaVaughn,
        miaWallace,
        graceHopper,
        katherineJohnson,
        margaretHamilton,
        stephanieShirley,
        mikeMeyers,
        danielPlainview,
      ],
      semester: spring2020,
      course: algorithm,
      studentWorkProject: [algoQuiz1, algoQuiz2, algoQuiz3, algoQuiz4],
    },
    {
      instructor: chiaChuChiang,
      students: [
        michaelNewman,
        chuckLevine,
        skeeterBronson,
        vickiVallencourt,
        adaLovelace,
        davidChappelle,
        zoeSaldana,
        bettyWhite,
      ],
      semester: fall2019,
      course: algorithm,
      studentWorkProject: [algoQuiz1, algoQuiz2, algoQuiz3, algoQuiz4],
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
