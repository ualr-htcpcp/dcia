import { Seeder } from "mongoose-data-seed";
import Assessment from "../src/models/Assessment";
import Student from "../src/models/Student";
import StudentWorkProject from "../src/models/StudentWorkProject";

const data = async () => {
  const billyMadison = await Student.findOne({ tNumber: 12345670 });
  const johnyWalker = await Student.findOne({ tNumber: 11165439 });
  const someGuy = await Student.findOne({ tNumber: 11115647 });
  const robertBoucher = await Student.findOne({ tNumber: 11111098 });
  const robbieHart = await Student.findOne({ tNumber: 11102302 });
  const charlieFineman = await Student.findOne({ tNumber: 10110123 });
  const sonnyKoufax = await Student.findOne({ tNumber: 10000231 });
  const virginiaVenit = await Student.findOne({ tNumber: 10004522 });
  const veronicaVaughn = await Student.findOne({ tNumber: 10034628 });
  const miaWallace = await Student.findOne({ tNumber: 10054962 });
  const graceHopper = await Student.findOne({ tNumber: 10003947 });
  const katherineJohnson = await Student.findOne({ tNumber: 10004899 });
  const margaretHamilton = await Student.findOne({ tNumber: 10005433 });
  const stephanieShirley = await Student.findOne({ tNumber: 10064341 });
  const mikeMeyers = await Student.findOne({ tNumber: 10312020 });
  const danielPlainview = await Student.findOne({ tNumber: 10002623 });
  const michaelNewman = await Student.findOne({ tNumber: 10004522 });
  const chuckLevine = await Student.findOne({ tNumber: 10010247 });
  const skeeterBronson = await Student.findOne({ tNumber: 10101028 });
  const vickiVallencourt = await Student.findOne({ tNumber: 10003384 });
  const adaLovelace = await Student.findOne({ tNumber: 10003432 });
  const davidChappelle = await Student.findOne({ tNumber: 19283746 });
  const zoeSaldana = await Student.findOne({ tNumber: 87654321 });
  const bettyWhite = await Student.findOne({ tNumber: 10053212 });
  const meganSmith = await Student.findOne({ tNumber: 12132843 });
  const carlaJean = await Student.findOne({ tNumber: 10002326 });
  const erykahBadu = await Student.findOne({ tNumber: 10043253 });
  const galGadot = await Student.findOne({ tNumber: 10000011 });
  const meredithQuill = await Student.findOne({ tNumber: 10000000 });
  const johnnyAppleseed = await Student.findOne({ tNumber: 11111111 });
  const bobMarley = await Student.findOne({ tNumber: 23193124 });
  const rickyBobby = await Student.findOne({ tNumber: 10101010 });
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
  const capProject = await StudentWorkProject.findOne({
    name: "Capstone Project",
  });
  const capRFP = await StudentWorkProject.findOne({ name: "RFP" });
  const capSkillSurvey = await StudentWorkProject.findOne({
    name: "Skills Survey",
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
  const sweQuiz1 = await StudentWorkProject.findOne({ name: "SWE Quiz 1" });
  const sweExercise3 = await StudentWorkProject.findOne({
    name: "SWE Exercise 3",
  });
  const sweFinal = await StudentWorkProject.findOne({ name: "SWE Final" });
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

  return [
    {
      score: 3,
      student: billyMadison,
      studentWorkProject: prog1Assignment1,
    },
    {
      score: 4,
      student: billyMadison,
      studentWorkProject: prog1Assignment2,
    },
    {
      score: 2,
      student: billyMadison,
      studentWorkProject: prog1Quiz1,
    },
    {
      score: 4,
      student: billyMadison,
      studentWorkProject: prog1Assignment3,
    },
    {
      score: 3,
      student: johnyWalker,
      studentWorkProject: prog1Assignment1,
    },
    {
      score: 3,
      student: johnyWalker,
      studentWorkProject: prog1Assignment2,
    },
    {
      score: 4,
      student: johnyWalker,
      studentWorkProject: prog1Quiz1,
    },
    {
      score: 4,
      student: johnyWalker,
      studentWorkProject: prog1Assignment3,
    },
    {
      score: 1,
      student: someGuy,
      studentWorkProject: prog1Assignment1,
    },
    {
      score: 2,
      student: someGuy,
      studentWorkProject: prog1Assignment2,
    },
    {
      score: 1,
      student: someGuy,
      studentWorkProject: prog1Quiz1,
    },
    {
      score: 1,
      student: someGuy,
      studentWorkProject: prog1Assignment3,
    },
    {
      score: 4,
      student: robertBoucher,
      studentWorkProject: prog1Assignment1,
    },
    {
      score: 4,
      student: robertBoucher,
      studentWorkProject: prog1Assignment2,
    },
    {
      score: 4,
      student: robertBoucher,
      studentWorkProject: prog1Quiz1,
    },
    {
      score: 4,
      student: robertBoucher,
      studentWorkProject: prog1Assignment3,
    },
    {
      score: 3,
      student: robbieHart,
      studentWorkProject: prog1Assignment1,
    },
    {
      score: 3,
      student: robbieHart,
      studentWorkProject: prog1Assignment2,
    },
    {
      score: 3,
      student: robbieHart,
      studentWorkProject: prog1Quiz1,
    },
    {
      score: 3,
      student: robbieHart,
      studentWorkProject: prog1Assignment3,
    },
    {
      score: 4,
      student: charlieFineman,
      studentWorkProject: prog1Assignment1,
    },
    {
      score: 3,
      student: charlieFineman,
      studentWorkProject: prog1Assignment2,
    },
    {
      score: 4,
      student: charlieFineman,
      studentWorkProject: prog1Quiz1,
    },
    {
      score: 3,
      student: charlieFineman,
      studentWorkProject: prog1Assignment3,
    },
    {
      score: 2,
      student: sonnyKoufax,
      studentWorkProject: prog1Assignment1,
    },
    {
      score: 3,
      student: sonnyKoufax,
      studentWorkProject: prog1Assignment2,
    },
    {
      score: 2,
      student: sonnyKoufax,
      studentWorkProject: prog1Quiz1,
    },
    {
      score: 3,
      student: sonnyKoufax,
      studentWorkProject: prog1Assignment3,
    },
    {
      score: 4,
      student: virginiaVenit,
      studentWorkProject: prog1Assignment1,
    },
    {
      score: 4,
      student: virginiaVenit,
      studentWorkProject: prog1Assignment2,
    },
    {
      score: 4,
      student: virginiaVenit,
      studentWorkProject: prog1Quiz1,
    },
    {
      score: 4,
      student: virginiaVenit,
      studentWorkProject: prog1Assignment3,
    },
    {
      score: 3,
      student: veronicaVaughn,
      studentWorkProject: capSkillSurvey,
    },
    {
      score: 3,
      student: veronicaVaughn,
      studentWorkProject: capRFP,
    },
    {
      score: 3,
      student: veronicaVaughn,
      studentWorkProject: capProject,
    },
    {
      score: 4,
      student: miaWallace,
      studentWorkProject: capSkillSurvey,
    },
    {
      score: 3,
      student: miaWallace,
      studentWorkProject: capRFP,
    },
    {
      score: 4,
      student: miaWallace,
      studentWorkProject: capProject,
    },
    {
      score: 4,
      student: graceHopper,
      studentWorkProject: capSkillSurvey,
    },
    {
      score: 3,
      student: graceHopper,
      studentWorkProject: capRFP,
    },
    {
      score: 3,
      student: graceHopper,
      studentWorkProject: capProject,
    },
    {
      score: 3,
      student: katherineJohnson,
      studentWorkProject: capSkillSurvey,
    },
    {
      score: 3,
      student: katherineJohnson,
      studentWorkProject: capRFP,
    },
    {
      score: 3,
      student: katherineJohnson,
      studentWorkProject: capProject,
    },
    {
      score: 4,
      student: margaretHamilton,
      studentWorkProject: capSkillSurvey,
    },
    {
      score: 4,
      student: margaretHamilton,
      studentWorkProject: capRFP,
    },
    {
      score: 4,
      student: margaretHamilton,
      studentWorkProject: capProject,
    },
    {
      score: 3,
      student: stephanieShirley,
      studentWorkProject: capSkillSurvey,
    },
    {
      score: 2,
      student: stephanieShirley,
      studentWorkProject: capRFP,
    },
    {
      score: 3,
      student: stephanieShirley,
      studentWorkProject: capProject,
    },
    {
      score: 4,
      student: mikeMeyers,
      studentWorkProject: capSkillSurvey,
    },
    {
      score: 3,
      student: mikeMeyers,
      studentWorkProject: capRFP,
    },
    {
      score: 4,
      student: mikeMeyers,
      studentWorkProject: capProject,
    },
    {
      score: 1,
      student: danielPlainview,
      studentWorkProject: capSkillSurvey,
    },
    {
      score: 1,
      student: danielPlainview,
      studentWorkProject: capRFP,
    },
    {
      score: 1,
      student: danielPlainview,
      studentWorkProject: capProject,
    },
    {
      score: 4,
      student: michaelNewman,
      studentWorkProject: capSkillSurvey,
    },
    {
      score: 4,
      student: michaelNewman,
      studentWorkProject: capRFP,
    },
    {
      score: 4,
      student: michaelNewman,
      studentWorkProject: capProject,
    },
    {
      score: 3,
      student: chuckLevine,
      studentWorkProject: capSkillSurvey,
    },
    {
      score: 3,
      student: chuckLevine,
      studentWorkProject: capRFP,
    },
    {
      score: 3,
      student: chuckLevine,
      studentWorkProject: capProject,
    },
    {
      score: 4,
      student: skeeterBronson,
      studentWorkProject: capSkillSurvey,
    },
    {
      score: 3,
      student: skeeterBronson,
      studentWorkProject: capRFP,
    },
    {
      score: 3,
      student: skeeterBronson,
      studentWorkProject: capProject,
    },
    {
      score: 3,
      student: vickiVallencourt,
      studentWorkProject: capSkillSurvey,
    },
    {
      score: 2,
      student: vickiVallencourt,
      studentWorkProject: capRFP,
    },
    {
      score: 3,
      student: vickiVallencourt,
      studentWorkProject: capProject,
    },
    {
      score: 3,
      student: adaLovelace,
      studentWorkProject: capSkillSurvey,
    },
    {
      score: 4,
      student: adaLovelace,
      studentWorkProject: capRFP,
    },
    {
      score: 3,
      student: adaLovelace,
      studentWorkProject: capProject,
    },
    {
      score: 3,
      student: davidChappelle,
      studentWorkProject: capSkillSurvey,
    },
    {
      score: 3,
      student: davidChappelle,
      studentWorkProject: capRFP,
    },
    {
      score: 4,
      student: davidChappelle,
      studentWorkProject: capProject,
    },
    {
      score: 2,
      student: zoeSaldana,
      studentWorkProject: capSkillSurvey,
    },
    {
      score: 3,
      student: zoeSaldana,
      studentWorkProject: capRFP,
    },
    {
      score: 3,
      student: zoeSaldana,
      studentWorkProject: capProject,
    },
    {
      score: 4,
      student: bettyWhite,
      studentWorkProject: capSkillSurvey,
    },
    {
      score: 4,
      student: bettyWhite,
      studentWorkProject: capRFP,
    },
    {
      score: 4,
      student: bettyWhite,
      studentWorkProject: capProject,
    },
    {
      score: 0,
      student: meganSmith,
      studentWorkProject: capSkillSurvey,
    },
    {
      score: 1,
      student: meganSmith,
      studentWorkProject: capRFP,
    },
    {
      score: 1,
      student: meganSmith,
      studentWorkProject: capProject,
    },
    {
      score: 3,
      student: carlaJean,
      studentWorkProject: capSkillSurvey,
    },
    {
      score: 3,
      student: carlaJean,
      studentWorkProject: capRFP,
    },
    {
      score: 3,
      student: carlaJean,
      studentWorkProject: capProject,
    },
    {
      score: 4,
      student: erykahBadu,
      studentWorkProject: capSkillSurvey,
    },
    {
      score: 3,
      student: erykahBadu,
      studentWorkProject: capRFP,
    },
    {
      score: 2,
      student: erykahBadu,
      studentWorkProject: capProject,
    },
    {
      score: 4,
      student: galGadot,
      studentWorkProject: capSkillSurvey,
    },
    {
      score: 4,
      student: galGadot,
      studentWorkProject: capRFP,
    },
    {
      score: 4,
      student: galGadot,
      studentWorkProject: capProject,
    },
    {
      score: 3,
      student: meredithQuill,
      studentWorkProject: capSkillSurvey,
    },
    {
      score: 3,
      student: meredithQuill,
      studentWorkProject: capRFP,
    },
    {
      score: 3,
      student: meredithQuill,
      studentWorkProject: capProject,
    },
    {
      score: 4,
      student: johnnyAppleseed,
      studentWorkProject: capSkillSurvey,
    },
    {
      score: 3,
      student: johnnyAppleseed,
      studentWorkProject: capRFP,
    },
    {
      score: 4,
      student: johnnyAppleseed,
      studentWorkProject: capProject,
    },
    {
      score: 3,
      student: bobMarley,
      studentWorkProject: capSkillSurvey,
    },
    {
      score: 3,
      student: bobMarley,
      studentWorkProject: capRFP,
    },
    {
      score: 3,
      student: bobMarley,
      studentWorkProject: capProject,
    },
    {
      score: 2,
      student: rickyBobby,
      studentWorkProject: capSkillSurvey,
    },
    {
      score: 2,
      student: rickyBobby,
      studentWorkProject: capRFP,
    },
    {
      score: 2,
      student: rickyBobby,
      studentWorkProject: capProject,
    },
    {
      score: 4,
      student: billyMadison,
      studentWorkProject: fyeAssignment1,
    },
    {
      score: 4,
      student: billyMadison,
      studentWorkProject: fyeAssignment2,
    },
    {
      score: 4,
      student: billyMadison,
      studentWorkProject: fyeQuiz1,
    },
    {
      score: 4,
      student: billyMadison,
      studentWorkProject: fyeQuiz2,
    },
    {
      score: 4,
      student: billyMadison,
      studentWorkProject: fyeAssignment3,
    },
    {
      score: 2,
      student: johnyWalker,
      studentWorkProject: fyeAssignment1,
    },
    {
      score: 0,
      student: johnyWalker,
      studentWorkProject: fyeAssignment2,
    },
    {
      score: 3,
      student: johnyWalker,
      studentWorkProject: fyeQuiz1,
    },
    {
      score: 1,
      student: johnyWalker,
      studentWorkProject: fyeQuiz2,
    },
    {
      score: 3,
      student: johnyWalker,
      studentWorkProject: fyeAssignment3,
    },
    {
      score: 3,
      student: someGuy,
      studentWorkProject: fyeAssignment1,
    },
    {
      score: 3,
      student: someGuy,
      studentWorkProject: fyeAssignment2,
    },
    {
      score: 3,
      student: someGuy,
      studentWorkProject: fyeQuiz1,
    },
    {
      score: 3,
      student: someGuy,
      studentWorkProject: fyeQuiz2,
    },
    {
      score: 3,
      student: someGuy,
      studentWorkProject: fyeAssignment3,
    },
    {
      score: 4,
      student: robertBoucher,
      studentWorkProject: fyeAssignment1,
    },
    {
      score: 3,
      student: robertBoucher,
      studentWorkProject: fyeAssignment2,
    },
    {
      score: 2,
      student: robertBoucher,
      studentWorkProject: fyeQuiz1,
    },
    {
      score: 4,
      student: robertBoucher,
      studentWorkProject: fyeQuiz2,
    },
    {
      score: 3,
      student: robertBoucher,
      studentWorkProject: fyeAssignment3,
    },
    {
      score: 3,
      student: robbieHart,
      studentWorkProject: fyeAssignment1,
    },
    {
      score: 3,
      student: robbieHart,
      studentWorkProject: fyeAssignment2,
    },
    {
      score: 2,
      student: robbieHart,
      studentWorkProject: fyeQuiz1,
    },
    {
      score: 3,
      student: robbieHart,
      studentWorkProject: fyeQuiz2,
    },
    {
      score: 3,
      student: robbieHart,
      studentWorkProject: fyeAssignment3,
    },
    {
      score: 3,
      student: charlieFineman,
      studentWorkProject: fyeAssignment1,
    },
    {
      score: 0,
      student: charlieFineman,
      studentWorkProject: fyeAssignment2,
    },
    {
      score: 3,
      student: charlieFineman,
      studentWorkProject: fyeQuiz1,
    },
    {
      score: 1,
      student: charlieFineman,
      studentWorkProject: fyeQuiz2,
    },
    {
      score: 4,
      student: charlieFineman,
      studentWorkProject: fyeAssignment3,
    },
    {
      score: 3,
      student: sonnyKoufax,
      studentWorkProject: fyeAssignment1,
    },
    {
      score: 3,
      student: sonnyKoufax,
      studentWorkProject: fyeAssignment2,
    },
    {
      score: 2,
      student: sonnyKoufax,
      studentWorkProject: fyeQuiz1,
    },
    {
      score: 3,
      student: sonnyKoufax,
      studentWorkProject: fyeQuiz2,
    },
    {
      score: 4,
      student: sonnyKoufax,
      studentWorkProject: fyeAssignment3,
    },
    {
      score: 4,
      student: virginiaVenit,
      studentWorkProject: fyeAssignment1,
    },
    {
      score: 2,
      student: virginiaVenit,
      studentWorkProject: fyeAssignment2,
    },
    {
      score: 3,
      student: virginiaVenit,
      studentWorkProject: fyeQuiz1,
    },
    {
      score: 4,
      student: virginiaVenit,
      studentWorkProject: fyeQuiz2,
    },
    {
      score: 3,
      student: virginiaVenit,
      studentWorkProject: fyeAssignment3,
    },
    {
      score: 3,
      student: veronicaVaughn,
      studentWorkProject: fyeAssignment1,
    },
    {
      score: 3,
      student: veronicaVaughn,
      studentWorkProject: fyeAssignment2,
    },
    {
      score: 3,
      student: veronicaVaughn,
      studentWorkProject: fyeQuiz1,
    },
    {
      score: 3,
      student: veronicaVaughn,
      studentWorkProject: fyeQuiz2,
    },
    {
      score: 3,
      student: veronicaVaughn,
      studentWorkProject: fyeAssignment3,
    },
    {
      score: 2,
      student: miaWallace,
      studentWorkProject: fyeAssignment1,
    },
    {
      score: 4,
      student: miaWallace,
      studentWorkProject: fyeAssignment2,
    },
    {
      score: 3,
      student: miaWallace,
      studentWorkProject: fyeQuiz1,
    },
    {
      score: 4,
      student: miaWallace,
      studentWorkProject: fyeQuiz2,
    },
    {
      score: 3,
      student: miaWallace,
      studentWorkProject: fyeAssignment3,
    },
    {
      score: 4,
      student: graceHopper,
      studentWorkProject: fyeAssignment1,
    },
    {
      score: 4,
      student: graceHopper,
      studentWorkProject: fyeAssignment2,
    },
    {
      score: 4,
      student: graceHopper,
      studentWorkProject: fyeQuiz1,
    },
    {
      score: 4,
      student: graceHopper,
      studentWorkProject: fyeQuiz2,
    },
    {
      score: 4,
      student: graceHopper,
      studentWorkProject: fyeAssignment3,
    },
    {
      score: 4,
      student: katherineJohnson,
      studentWorkProject: fyeAssignment1,
    },
    {
      score: 4,
      student: katherineJohnson,
      studentWorkProject: fyeAssignment2,
    },
    {
      score: 4,
      student: katherineJohnson,
      studentWorkProject: fyeQuiz1,
    },
    {
      score: 4,
      student: katherineJohnson,
      studentWorkProject: fyeQuiz2,
    },
    {
      score: 4,
      student: katherineJohnson,
      studentWorkProject: fyeAssignment3,
    },
    {
      score: 4,
      student: margaretHamilton,
      studentWorkProject: fyeAssignment1,
    },
    {
      score: 4,
      student: margaretHamilton,
      studentWorkProject: fyeAssignment2,
    },
    {
      score: 4,
      student: margaretHamilton,
      studentWorkProject: fyeQuiz1,
    },
    {
      score: 3,
      student: margaretHamilton,
      studentWorkProject: fyeQuiz2,
    },
    {
      score: 3,
      student: margaretHamilton,
      studentWorkProject: fyeAssignment3,
    },
    {
      score: 4,
      student: stephanieShirley,
      studentWorkProject: fyeAssignment1,
    },
    {
      score: 3,
      student: stephanieShirley,
      studentWorkProject: fyeAssignment2,
    },
    {
      score: 4,
      student: stephanieShirley,
      studentWorkProject: fyeQuiz1,
    },
    {
      score: 3,
      student: stephanieShirley,
      studentWorkProject: fyeQuiz2,
    },
    {
      score: 4,
      student: stephanieShirley,
      studentWorkProject: fyeAssignment3,
    },
    {
      score: 2,
      student: mikeMeyers,
      studentWorkProject: fyeAssignment1,
    },
    {
      score: 2,
      student: mikeMeyers,
      studentWorkProject: fyeAssignment2,
    },
    {
      score: 2,
      student: mikeMeyers,
      studentWorkProject: fyeQuiz1,
    },
    {
      score: 3,
      student: mikeMeyers,
      studentWorkProject: fyeQuiz2,
    },
    {
      score: 3,
      student: mikeMeyers,
      studentWorkProject: fyeAssignment3,
    },
    {
      score: 0,
      student: danielPlainview,
      studentWorkProject: fyeAssignment1,
    },
    {
      score: 4,
      student: danielPlainview,
      studentWorkProject: fyeAssignment2,
    },
    {
      score: 2,
      student: danielPlainview,
      studentWorkProject: fyeQuiz1,
    },
    {
      score: 3,
      student: danielPlainview,
      studentWorkProject: fyeQuiz2,
    },
    {
      score: 3,
      student: danielPlainview,
      studentWorkProject: fyeAssignment3,
    },
    {
      score: 0,
      student: michaelNewman,
      studentWorkProject: fyeAssignment1,
    },
    {
      score: 4,
      student: michaelNewman,
      studentWorkProject: fyeAssignment2,
    },
    {
      score: 2,
      student: michaelNewman,
      studentWorkProject: fyeQuiz1,
    },
    {
      score: 3,
      student: michaelNewman,
      studentWorkProject: fyeQuiz2,
    },
    {
      score: 1,
      student: michaelNewman,
      studentWorkProject: fyeAssignment3,
    },
    {
      score: 4,
      student: chuckLevine,
      studentWorkProject: fyeAssignment1,
    },
    {
      score: 3,
      student: chuckLevine,
      studentWorkProject: fyeAssignment2,
    },
    {
      score: 4,
      student: chuckLevine,
      studentWorkProject: fyeQuiz1,
    },
    {
      score: 3,
      student: chuckLevine,
      studentWorkProject: fyeQuiz2,
    },
    {
      score: 4,
      student: chuckLevine,
      studentWorkProject: fyeAssignment3,
    },
    {
      score: 3,
      student: skeeterBronson,
      studentWorkProject: fyeAssignment1,
    },
    {
      score: 3,
      student: skeeterBronson,
      studentWorkProject: fyeAssignment2,
    },
    {
      score: 2,
      student: skeeterBronson,
      studentWorkProject: fyeQuiz1,
    },
    {
      score: 4,
      student: skeeterBronson,
      studentWorkProject: fyeQuiz2,
    },
    {
      score: 3,
      student: skeeterBronson,
      studentWorkProject: fyeAssignment3,
    },
    {
      score: 1,
      student: vickiVallencourt,
      studentWorkProject: fyeAssignment1,
    },
    {
      score: 0,
      student: vickiVallencourt,
      studentWorkProject: fyeAssignment2,
    },
    {
      score: 1,
      student: vickiVallencourt,
      studentWorkProject: fyeQuiz1,
    },
    {
      score: 0,
      student: vickiVallencourt,
      studentWorkProject: fyeQuiz2,
    },
    {
      score: 0,
      student: vickiVallencourt,
      studentWorkProject: fyeAssignment3,
    },
    {
      score: 4,
      student: adaLovelace,
      studentWorkProject: fyeAssignment1,
    },
    {
      score: 4,
      student: adaLovelace,
      studentWorkProject: fyeAssignment2,
    },
    {
      score: 4,
      student: adaLovelace,
      studentWorkProject: fyeQuiz1,
    },
    {
      score: 4,
      student: adaLovelace,
      studentWorkProject: fyeQuiz2,
    },
    {
      score: 4,
      student: adaLovelace,
      studentWorkProject: fyeAssignment3,
    },
    {
      score: 3,
      student: davidChappelle,
      studentWorkProject: fyeAssignment1,
    },
    {
      score: 3,
      student: davidChappelle,
      studentWorkProject: fyeAssignment2,
    },
    {
      score: 3,
      student: davidChappelle,
      studentWorkProject: fyeQuiz1,
    },
    {
      score: 3,
      student: davidChappelle,
      studentWorkProject: fyeQuiz2,
    },
    {
      score: 3,
      student: davidChappelle,
      studentWorkProject: fyeAssignment3,
    },
    {
      score: 2,
      student: zoeSaldana,
      studentWorkProject: fyeAssignment1,
    },
    {
      score: 3,
      student: zoeSaldana,
      studentWorkProject: fyeAssignment2,
    },
    {
      score: 2,
      student: zoeSaldana,
      studentWorkProject: fyeQuiz1,
    },
    {
      score: 2,
      student: zoeSaldana,
      studentWorkProject: fyeQuiz2,
    },
    {
      score: 3,
      student: zoeSaldana,
      studentWorkProject: fyeAssignment3,
    },
    {
      score: 4,
      student: bettyWhite,
      studentWorkProject: fyeAssignment1,
    },
    {
      score: 4,
      student: bettyWhite,
      studentWorkProject: fyeAssignment2,
    },
    {
      score: 4,
      student: bettyWhite,
      studentWorkProject: fyeQuiz1,
    },
    {
      score: 4,
      student: bettyWhite,
      studentWorkProject: fyeQuiz2,
    },
    {
      score: 4,
      student: bettyWhite,
      studentWorkProject: fyeAssignment3,
    },
    {
      score: 3,
      student: billyMadison,
      studentWorkProject: compOrgEx1,
    },
    {
      score: 3,
      student: billyMadison,
      studentWorkProject: compOrgEx2,
    },
    {
      score: 4,
      student: billyMadison,
      studentWorkProject: compOrgEx3,
    },
    {
      score: 3,
      student: billyMadison,
      studentWorkProject: compOrgEx4,
    },
    {
      score: 3,
      student: billyMadison,
      studentWorkProject: compOrgFinal,
    },
    {
      score: 2,
      student: johnyWalker,
      studentWorkProject: compOrgEx1,
    },
    {
      score: 1,
      student: johnyWalker,
      studentWorkProject: compOrgEx2,
    },
    {
      score: 3,
      student: johnyWalker,
      studentWorkProject: compOrgEx3,
    },
    {
      score: 0,
      student: johnyWalker,
      studentWorkProject: compOrgEx4,
    },
    {
      score: 3,
      student: johnyWalker,
      studentWorkProject: compOrgFinal,
    },
    {
      score: 1,
      student: someGuy,
      studentWorkProject: compOrgEx1,
    },
    {
      score: 1,
      student: someGuy,
      studentWorkProject: compOrgEx2,
    },
    {
      score: 2,
      student: someGuy,
      studentWorkProject: compOrgEx3,
    },
    {
      score: 3,
      student: someGuy,
      studentWorkProject: compOrgEx4,
    },
    {
      score: 3,
      student: someGuy,
      studentWorkProject: compOrgFinal,
    },
    {
      score: 4,
      student: robertBoucher,
      studentWorkProject: compOrgEx1,
    },
    {
      score: 3,
      student: robertBoucher,
      studentWorkProject: compOrgEx2,
    },
    {
      score: 2,
      student: robertBoucher,
      studentWorkProject: compOrgEx3,
    },
    {
      score: 3,
      student: robertBoucher,
      studentWorkProject: compOrgEx4,
    },
    {
      score: 4,
      student: robertBoucher,
      studentWorkProject: compOrgFinal,
    },
    {
      score: 1,
      student: robbieHart,
      studentWorkProject: compOrgEx1,
    },
    {
      score: 1,
      student: robbieHart,
      studentWorkProject: compOrgEx2,
    },
    {
      score: 1,
      student: robbieHart,
      studentWorkProject: compOrgEx3,
    },
    {
      score: 1,
      student: robbieHart,
      studentWorkProject: compOrgEx4,
    },
    {
      score: 1,
      student: robbieHart,
      studentWorkProject: compOrgFinal,
    },
    {
      score: 4,
      student: charlieFineman,
      studentWorkProject: compOrgEx1,
    },
    {
      score: 2,
      student: charlieFineman,
      studentWorkProject: compOrgEx2,
    },
    {
      score: 3,
      student: charlieFineman,
      studentWorkProject: compOrgEx3,
    },
    {
      score: 3,
      student: charlieFineman,
      studentWorkProject: compOrgEx4,
    },
    {
      score: 4,
      student: charlieFineman,
      studentWorkProject: compOrgFinal,
    },
    {
      score: 3,
      student: sonnyKoufax,
      studentWorkProject: compOrgEx1,
    },
    {
      score: 2,
      student: sonnyKoufax,
      studentWorkProject: compOrgEx2,
    },
    {
      score: 3,
      student: sonnyKoufax,
      studentWorkProject: compOrgEx3,
    },
    {
      score: 2,
      student: sonnyKoufax,
      studentWorkProject: compOrgEx4,
    },
    {
      score: 2,
      student: sonnyKoufax,
      studentWorkProject: compOrgFinal,
    },
    {
      score: 3,
      student: virginiaVenit,
      studentWorkProject: compOrgEx1,
    },
    {
      score: 3,
      student: virginiaVenit,
      studentWorkProject: compOrgEx2,
    },
    {
      score: 4,
      student: virginiaVenit,
      studentWorkProject: compOrgEx3,
    },
    {
      score: 3,
      student: virginiaVenit,
      studentWorkProject: compOrgEx4,
    },
    {
      score: 4,
      student: virginiaVenit,
      studentWorkProject: compOrgFinal,
    },
    {
      score: 3,
      student: veronicaVaughn,
      studentWorkProject: compOrgEx1,
    },
    {
      score: 3,
      student: veronicaVaughn,
      studentWorkProject: compOrgEx2,
    },
    {
      score: 3,
      student: veronicaVaughn,
      studentWorkProject: compOrgEx3,
    },
    {
      score: 2,
      student: veronicaVaughn,
      studentWorkProject: compOrgEx4,
    },
    {
      score: 3,
      student: veronicaVaughn,
      studentWorkProject: compOrgFinal,
    },
    {
      score: 2,
      student: miaWallace,
      studentWorkProject: compOrgEx1,
    },
    {
      score: 3,
      student: miaWallace,
      studentWorkProject: compOrgEx2,
    },
    {
      score: 1,
      student: miaWallace,
      studentWorkProject: compOrgEx3,
    },
    {
      score: 3,
      student: miaWallace,
      studentWorkProject: compOrgEx4,
    },
    {
      score: 2,
      student: miaWallace,
      studentWorkProject: compOrgFinal,
    },
    {
      score: 0,
      student: graceHopper,
      studentWorkProject: compOrgEx1,
    },
    {
      score: 3,
      student: graceHopper,
      studentWorkProject: compOrgEx2,
    },
    {
      score: 4,
      student: graceHopper,
      studentWorkProject: compOrgEx3,
    },
    {
      score: 2,
      student: graceHopper,
      studentWorkProject: compOrgEx4,
    },
    {
      score: 3,
      student: graceHopper,
      studentWorkProject: compOrgFinal,
    },
    {
      score: 1,
      student: katherineJohnson,
      studentWorkProject: compOrgEx1,
    },
    {
      score: 2,
      student: katherineJohnson,
      studentWorkProject: compOrgEx2,
    },
    {
      score: 0,
      student: katherineJohnson,
      studentWorkProject: compOrgEx3,
    },
    {
      score: 1,
      student: katherineJohnson,
      studentWorkProject: compOrgEx4,
    },
    {
      score: 2,
      student: katherineJohnson,
      studentWorkProject: compOrgFinal,
    },
    {
      score: 4,
      student: margaretHamilton,
      studentWorkProject: compOrgEx1,
    },
    {
      score: 4,
      student: margaretHamilton,
      studentWorkProject: compOrgEx2,
    },
    {
      score: 4,
      student: margaretHamilton,
      studentWorkProject: compOrgEx3,
    },
    {
      score: 4,
      student: margaretHamilton,
      studentWorkProject: compOrgEx4,
    },
    {
      score: 3,
      student: margaretHamilton,
      studentWorkProject: compOrgFinal,
    },
    {
      score: 2,
      student: stephanieShirley,
      studentWorkProject: compOrgEx1,
    },
    {
      score: 1,
      student: stephanieShirley,
      studentWorkProject: compOrgEx2,
    },
    {
      score: 3,
      student: stephanieShirley,
      studentWorkProject: compOrgEx3,
    },
    {
      score: 2,
      student: stephanieShirley,
      studentWorkProject: compOrgEx4,
    },
    {
      score: 3,
      student: stephanieShirley,
      studentWorkProject: compOrgFinal,
    },
    {
      score: 1,
      student: mikeMeyers,
      studentWorkProject: compOrgEx1,
    },
    {
      score: 2,
      student: mikeMeyers,
      studentWorkProject: compOrgEx2,
    },
    {
      score: 1,
      student: mikeMeyers,
      studentWorkProject: compOrgEx3,
    },
    {
      score: 3,
      student: mikeMeyers,
      studentWorkProject: compOrgEx4,
    },
    {
      score: 2,
      student: mikeMeyers,
      studentWorkProject: compOrgFinal,
    },
    {
      score: 4,
      student: danielPlainview,
      studentWorkProject: compOrgEx1,
    },
    {
      score: 4,
      student: danielPlainview,
      studentWorkProject: compOrgEx2,
    },
    {
      score: 3,
      student: danielPlainview,
      studentWorkProject: compOrgEx3,
    },
    {
      score: 3,
      student: danielPlainview,
      studentWorkProject: compOrgEx4,
    },
    {
      score: 4,
      student: danielPlainview,
      studentWorkProject: compOrgFinal,
    },
    {
      score: 2,
      student: meganSmith,
      studentWorkProject: opSysAssignment1,
    },
    {
      score: 2,
      student: meganSmith,
      studentWorkProject: opSysAssignment2,
    },
    {
      score: 2,
      student: meganSmith,
      studentWorkProject: opSysAssignment3,
    },
    {
      score: 2,
      student: meganSmith,
      studentWorkProject: opSysQuiz1,
    },
    {
      score: 3,
      student: meganSmith,
      studentWorkProject: opSysAssignment4,
    },
    {
      score: 3,
      student: carlaJean,
      studentWorkProject: opSysAssignment1,
    },
    {
      score: 3,
      student: carlaJean,
      studentWorkProject: opSysAssignment2,
    },
    {
      score: 3,
      student: carlaJean,
      studentWorkProject: opSysAssignment3,
    },
    {
      score: 3,
      student: carlaJean,
      studentWorkProject: opSysQuiz1,
    },
    {
      score: 3,
      student: carlaJean,
      studentWorkProject: opSysAssignment4,
    },
    {
      score: 4,
      student: erykahBadu,
      studentWorkProject: opSysAssignment1,
    },
    {
      score: 4,
      student: erykahBadu,
      studentWorkProject: opSysAssignment2,
    },
    {
      score: 2,
      student: erykahBadu,
      studentWorkProject: opSysAssignment3,
    },
    {
      score: 3,
      student: erykahBadu,
      studentWorkProject: opSysQuiz1,
    },
    {
      score: 3,
      student: erykahBadu,
      studentWorkProject: opSysAssignment4,
    },
    {
      score: 4,
      student: galGadot,
      studentWorkProject: opSysAssignment1,
    },
    {
      score: 4,
      student: galGadot,
      studentWorkProject: opSysAssignment2,
    },
    {
      score: 4,
      student: galGadot,
      studentWorkProject: opSysAssignment3,
    },
    {
      score: 4,
      student: galGadot,
      studentWorkProject: opSysQuiz1,
    },
    {
      score: 4,
      student: galGadot,
      studentWorkProject: opSysAssignment4,
    },
    {
      score: 3,
      student: meredithQuill,
      studentWorkProject: opSysAssignment1,
    },
    {
      score: 3,
      student: meredithQuill,
      studentWorkProject: opSysAssignment2,
    },
    {
      score: 3,
      student: meredithQuill,
      studentWorkProject: opSysAssignment3,
    },
    {
      score: 3,
      student: meredithQuill,
      studentWorkProject: opSysQuiz1,
    },
    {
      score: 2,
      student: meredithQuill,
      studentWorkProject: opSysAssignment4,
    },
    {
      score: 0,
      student: bobMarley,
      studentWorkProject: opSysAssignment1,
    },
    {
      score: 1,
      student: bobMarley,
      studentWorkProject: opSysAssignment2,
    },
    {
      score: 2,
      student: bobMarley,
      studentWorkProject: opSysAssignment3,
    },
    {
      score: 0,
      student: bobMarley,
      studentWorkProject: opSysQuiz1,
    },
    {
      score: 3,
      student: bobMarley,
      studentWorkProject: opSysAssignment4,
    },
    {
      score: 2,
      student: rickyBobby,
      studentWorkProject: opSysAssignment1,
    },
    {
      score: 3,
      student: rickyBobby,
      studentWorkProject: opSysAssignment2,
    },
    {
      score: 2,
      student: rickyBobby,
      studentWorkProject: opSysAssignment3,
    },
    {
      score: 3,
      student: rickyBobby,
      studentWorkProject: opSysQuiz1,
    },
    {
      score: 2,
      student: rickyBobby,
      studentWorkProject: opSysAssignment4,
    },
    {
      score: 2,
      student: meganSmith,
      studentWorkProject: progLanAssignment1,
    },
    {
      score: 3,
      student: meganSmith,
      studentWorkProject: progLanAssignment2,
    },
    {
      score: 4,
      student: meganSmith,
      studentWorkProject: progLanAssignment3,
    },
    {
      score: 1,
      student: meganSmith,
      studentWorkProject: progLanAssignment4,
    },
    {
      score: 3,
      student: meganSmith,
      studentWorkProject: progLanProject,
    },
    {
      score: 3,
      student: carlaJean,
      studentWorkProject: progLanAssignment1,
    },
    {
      score: 3,
      student: carlaJean,
      studentWorkProject: progLanAssignment2,
    },
    {
      score: 3,
      student: carlaJean,
      studentWorkProject: progLanAssignment3,
    },
    {
      score: 3,
      student: carlaJean,
      studentWorkProject: progLanAssignment4,
    },
    {
      score: 3,
      student: carlaJean,
      studentWorkProject: progLanProject,
    },
    {
      score: 4,
      student: erykahBadu,
      studentWorkProject: progLanAssignment1,
    },
    {
      score: 3,
      student: erykahBadu,
      studentWorkProject: progLanAssignment2,
    },
    {
      score: 3,
      student: erykahBadu,
      studentWorkProject: progLanAssignment3,
    },
    {
      score: 4,
      student: erykahBadu,
      studentWorkProject: progLanAssignment4,
    },
    {
      score: 4,
      student: erykahBadu,
      studentWorkProject: progLanProject,
    },
    {
      score: 4,
      student: galGadot,
      studentWorkProject: progLanAssignment1,
    },
    {
      score: 4,
      student: galGadot,
      studentWorkProject: progLanAssignment2,
    },
    {
      score: 4,
      student: galGadot,
      studentWorkProject: progLanAssignment3,
    },
    {
      score: 4,
      student: galGadot,
      studentWorkProject: progLanAssignment4,
    },
    {
      score: 4,
      student: galGadot,
      studentWorkProject: progLanProject,
    },
    {
      score: 3,
      student: meredithQuill,
      studentWorkProject: progLanAssignment1,
    },
    {
      score: 2,
      student: meredithQuill,
      studentWorkProject: progLanAssignment2,
    },
    {
      score: 3,
      student: meredithQuill,
      studentWorkProject: progLanAssignment3,
    },
    {
      score: 2,
      student: meredithQuill,
      studentWorkProject: progLanAssignment4,
    },
    {
      score: 2,
      student: meredithQuill,
      studentWorkProject: progLanProject,
    },
    {
      score: 3,
      student: johnnyAppleseed,
      studentWorkProject: progLanAssignment1,
    },
    {
      score: 3,
      student: johnnyAppleseed,
      studentWorkProject: progLanAssignment2,
    },
    {
      score: 1,
      student: johnnyAppleseed,
      studentWorkProject: progLanAssignment3,
    },
    {
      score: 1,
      student: johnnyAppleseed,
      studentWorkProject: progLanAssignment4,
    },
    {
      score: 3,
      student: johnnyAppleseed,
      studentWorkProject: progLanProject,
    },
    {
      score: 0,
      student: bobMarley,
      studentWorkProject: progLanAssignment1,
    },
    {
      score: 1,
      student: bobMarley,
      studentWorkProject: progLanAssignment2,
    },
    {
      score: 2,
      student: bobMarley,
      studentWorkProject: progLanAssignment3,
    },
    {
      score: 3,
      student: bobMarley,
      studentWorkProject: progLanAssignment4,
    },
    {
      score: 2,
      student: bobMarley,
      studentWorkProject: progLanProject,
    },
    {
      score: 2,
      student: rickyBobby,
      studentWorkProject: progLanAssignment1,
    },
    {
      score: 3,
      student: rickyBobby,
      studentWorkProject: progLanAssignment2,
    },
    {
      score: 1,
      student: rickyBobby,
      studentWorkProject: progLanAssignment3,
    },
    {
      score: 2,
      student: rickyBobby,
      studentWorkProject: progLanAssignment4,
    },
    {
      score: 3,
      student: rickyBobby,
      studentWorkProject: progLanProject,
    },
    {
      score: 4,
      student: veronicaVaughn,
      studentWorkProject: sweExercise1,
    },
    {
      score: 3,
      student: veronicaVaughn,
      studentWorkProject: sweExercise2,
    },
    {
      score: 2,
      student: veronicaVaughn,
      studentWorkProject: sweQuiz1,
    },
    {
      score: 3,
      student: veronicaVaughn,
      studentWorkProject: sweExercise3,
    },
    {
      score: 3,
      student: veronicaVaughn,
      studentWorkProject: sweFinal,
    },
    {
      score: 2,
      student: miaWallace,
      studentWorkProject: sweExercise1,
    },
    {
      score: 3,
      student: miaWallace,
      studentWorkProject: sweExercise2,
    },
    {
      score: 2,
      student: miaWallace,
      studentWorkProject: sweQuiz1,
    },
    {
      score: 3,
      student: miaWallace,
      studentWorkProject: sweExercise3,
    },
    {
      score: 2,
      student: miaWallace,
      studentWorkProject: sweFinal,
    },
    {
      score: 4,
      student: graceHopper,
      studentWorkProject: sweExercise1,
    },
    {
      score: 1,
      student: graceHopper,
      studentWorkProject: sweExercise2,
    },
    {
      score: 2,
      student: graceHopper,
      studentWorkProject: sweQuiz1,
    },
    {
      score: 3,
      student: graceHopper,
      studentWorkProject: sweExercise3,
    },
    {
      score: 1,
      student: graceHopper,
      studentWorkProject: sweFinal,
    },
    {
      score: 4,
      student: katherineJohnson,
      studentWorkProject: sweExercise1,
    },
    {
      score: 3,
      student: katherineJohnson,
      studentWorkProject: sweExercise2,
    },
    {
      score: 2,
      student: katherineJohnson,
      studentWorkProject: sweQuiz1,
    },
    {
      score: 4,
      student: katherineJohnson,
      studentWorkProject: sweExercise3,
    },
    {
      score: 4,
      student: katherineJohnson,
      studentWorkProject: sweFinal,
    },
    {
      score: 1,
      student: margaretHamilton,
      studentWorkProject: sweExercise1,
    },
    {
      score: 1,
      student: margaretHamilton,
      studentWorkProject: sweExercise2,
    },
    {
      score: 1,
      student: margaretHamilton,
      studentWorkProject: sweQuiz1,
    },
    {
      score: 2,
      student: margaretHamilton,
      studentWorkProject: sweExercise3,
    },
    {
      score: 3,
      student: margaretHamilton,
      studentWorkProject: sweFinal,
    },
    {
      score: 4,
      student: stephanieShirley,
      studentWorkProject: sweExercise1,
    },
    {
      score: 4,
      student: stephanieShirley,
      studentWorkProject: sweExercise2,
    },
    {
      score: 4,
      student: stephanieShirley,
      studentWorkProject: sweQuiz1,
    },
    {
      score: 4,
      student: stephanieShirley,
      studentWorkProject: sweExercise3,
    },
    {
      score: 4,
      student: stephanieShirley,
      studentWorkProject: sweFinal,
    },
    {
      score: 2,
      student: mikeMeyers,
      studentWorkProject: sweExercise1,
    },
    {
      score: 2,
      student: mikeMeyers,
      studentWorkProject: sweExercise2,
    },
    {
      score: 2,
      student: mikeMeyers,
      studentWorkProject: sweQuiz1,
    },
    {
      score: 2,
      student: mikeMeyers,
      studentWorkProject: sweExercise3,
    },
    {
      score: 1,
      student: mikeMeyers,
      studentWorkProject: sweFinal,
    },
    {
      score: 2,
      student: danielPlainview,
      studentWorkProject: sweExercise1,
    },
    {
      score: 3,
      student: danielPlainview,
      studentWorkProject: sweExercise2,
    },
    {
      score: 4,
      student: danielPlainview,
      studentWorkProject: sweQuiz1,
    },
    {
      score: 4,
      student: danielPlainview,
      studentWorkProject: sweExercise3,
    },
    {
      score: 3,
      student: danielPlainview,
      studentWorkProject: sweFinal,
    },
    {
      score: 2,
      student: michaelNewman,
      studentWorkProject: sweExercise1,
    },
    {
      score: 4,
      student: michaelNewman,
      studentWorkProject: sweExercise2,
    },
    {
      score: 1,
      student: michaelNewman,
      studentWorkProject: sweQuiz1,
    },
    {
      score: 0,
      student: michaelNewman,
      studentWorkProject: sweExercise3,
    },
    {
      score: 2,
      student: michaelNewman,
      studentWorkProject: sweFinal,
    },
    {
      score: 2,
      student: chuckLevine,
      studentWorkProject: sweExercise1,
    },
    {
      score: 1,
      student: chuckLevine,
      studentWorkProject: sweExercise2,
    },
    {
      score: 3,
      student: chuckLevine,
      studentWorkProject: sweQuiz1,
    },
    {
      score: 2,
      student: chuckLevine,
      studentWorkProject: sweExercise3,
    },
    {
      score: 1,
      student: chuckLevine,
      studentWorkProject: sweFinal,
    },
    {
      score: 3,
      student: skeeterBronson,
      studentWorkProject: sweExercise1,
    },
    {
      score: 3,
      student: skeeterBronson,
      studentWorkProject: sweExercise2,
    },
    {
      score: 2,
      student: skeeterBronson,
      studentWorkProject: sweQuiz1,
    },
    {
      score: 2,
      student: skeeterBronson,
      studentWorkProject: sweExercise3,
    },
    {
      score: 3,
      student: skeeterBronson,
      studentWorkProject: sweFinal,
    },
    {
      score: 1,
      student: vickiVallencourt,
      studentWorkProject: sweExercise1,
    },
    {
      score: 0,
      student: vickiVallencourt,
      studentWorkProject: sweExercise2,
    },
    {
      score: 1,
      student: vickiVallencourt,
      studentWorkProject: sweQuiz1,
    },
    {
      score: 2,
      student: vickiVallencourt,
      studentWorkProject: sweExercise3,
    },
    {
      score: 1,
      student: vickiVallencourt,
      studentWorkProject: sweFinal,
    },
    {
      score: 4,
      student: adaLovelace,
      studentWorkProject: sweExercise1,
    },
    {
      score: 4,
      student: adaLovelace,
      studentWorkProject: sweExercise2,
    },
    {
      score: 4,
      student: adaLovelace,
      studentWorkProject: sweQuiz1,
    },
    {
      score: 4,
      student: adaLovelace,
      studentWorkProject: sweExercise3,
    },
    {
      score: 4,
      student: adaLovelace,
      studentWorkProject: sweFinal,
    },
    {
      score: 3,
      student: davidChappelle,
      studentWorkProject: sweExercise1,
    },
    {
      score: 4,
      student: davidChappelle,
      studentWorkProject: sweExercise2,
    },
    {
      score: 4,
      student: davidChappelle,
      studentWorkProject: sweQuiz1,
    },
    {
      score: 4,
      student: davidChappelle,
      studentWorkProject: sweExercise3,
    },
    {
      score: 3,
      student: davidChappelle,
      studentWorkProject: sweFinal,
    },
    {
      score: 4,
      student: zoeSaldana,
      studentWorkProject: sweExercise1,
    },
    {
      score: 3,
      student: zoeSaldana,
      studentWorkProject: sweExercise2,
    },
    {
      score: 2,
      student: zoeSaldana,
      studentWorkProject: sweQuiz1,
    },
    {
      score: 3,
      student: zoeSaldana,
      studentWorkProject: sweExercise3,
    },
    {
      score: 4,
      student: zoeSaldana,
      studentWorkProject: sweFinal,
    },
    {
      score: 4,
      student: bettyWhite,
      studentWorkProject: sweExercise1,
    },
    {
      score: 4,
      student: bettyWhite,
      studentWorkProject: sweExercise2,
    },
    {
      score: 4,
      student: bettyWhite,
      studentWorkProject: sweQuiz1,
    },
    {
      score: 4,
      student: bettyWhite,
      studentWorkProject: sweExercise3,
    },
    {
      score: 2,
      student: veronicaVaughn,
      studentWorkProject: sweFinal,
    },
    {
      score: 2,
      student: veronicaVaughn,
      studentWorkProject: algoQuiz1,
    },
    {
      score: 2,
      student: veronicaVaughn,
      studentWorkProject: algoQuiz2,
    },
    {
      score: 3,
      student: veronicaVaughn,
      studentWorkProject: algoQuiz3,
    },
    {
      score: 4,
      student: veronicaVaughn,
      studentWorkProject: algoQuiz4,
    },
    {
      score: 2,
      student: miaWallace,
      studentWorkProject: algoQuiz1,
    },
    {
      score: 3,
      student: miaWallace,
      studentWorkProject: algoQuiz2,
    },
    {
      score: 2,
      student: miaWallace,
      studentWorkProject: algoQuiz3,
    },
    {
      score: 3,
      student: miaWallace,
      studentWorkProject: algoQuiz4,
    },
    {
      score: 4,
      student: graceHopper,
      studentWorkProject: algoQuiz1,
    },
    {
      score: 4,
      student: graceHopper,
      studentWorkProject: algoQuiz2,
    },
    {
      score: 3,
      student: graceHopper,
      studentWorkProject: algoQuiz3,
    },
    {
      score: 4,
      student: graceHopper,
      studentWorkProject: algoQuiz4,
    },
    {
      score: 2,
      student: katherineJohnson,
      studentWorkProject: algoQuiz1,
    },
    {
      score: 2,
      student: katherineJohnson,
      studentWorkProject: algoQuiz2,
    },
    {
      score: 4,
      student: katherineJohnson,
      studentWorkProject: algoQuiz3,
    },
    {
      score: 4,
      student: katherineJohnson,
      studentWorkProject: algoQuiz4,
    },
    {
      score: 0,
      student: margaretHamilton,
      studentWorkProject: algoQuiz1,
    },
    {
      score: 3,
      student: margaretHamilton,
      studentWorkProject: algoQuiz2,
    },
    {
      score: 4,
      student: margaretHamilton,
      studentWorkProject: algoQuiz3,
    },
    {
      score: 3,
      student: margaretHamilton,
      studentWorkProject: algoQuiz4,
    },
    {
      score: 4,
      student: stephanieShirley,
      studentWorkProject: algoQuiz1,
    },
    {
      score: 4,
      student: stephanieShirley,
      studentWorkProject: algoQuiz2,
    },
    {
      score: 4,
      student: stephanieShirley,
      studentWorkProject: algoQuiz3,
    },
    {
      score: 4,
      student: stephanieShirley,
      studentWorkProject: algoQuiz4,
    },
    {
      score: 0,
      student: mikeMeyers,
      studentWorkProject: algoQuiz1,
    },
    {
      score: 2,
      student: mikeMeyers,
      studentWorkProject: algoQuiz2,
    },
    {
      score: 1,
      student: mikeMeyers,
      studentWorkProject: algoQuiz3,
    },
    {
      score: 2,
      student: mikeMeyers,
      studentWorkProject: algoQuiz4,
    },
    {
      score: 2,
      student: danielPlainview,
      studentWorkProject: algoQuiz1,
    },
    {
      score: 3,
      student: danielPlainview,
      studentWorkProject: algoQuiz2,
    },
    {
      score: 4,
      student: danielPlainview,
      studentWorkProject: algoQuiz3,
    },
    {
      score: 4,
      student: danielPlainview,
      studentWorkProject: algoQuiz4,
    },
    {
      score: 4,
      student: michaelNewman,
      studentWorkProject: algoQuiz1,
    },
    {
      score: 3,
      student: michaelNewman,
      studentWorkProject: algoQuiz2,
    },
    {
      score: 4,
      student: michaelNewman,
      studentWorkProject: algoQuiz3,
    },
    {
      score: 2,
      student: michaelNewman,
      studentWorkProject: algoQuiz4,
    },
    {
      score: 3,
      student: chuckLevine,
      studentWorkProject: algoQuiz1,
    },
    {
      score: 4,
      student: chuckLevine,
      studentWorkProject: algoQuiz2,
    },
    {
      score: 4,
      student: chuckLevine,
      studentWorkProject: algoQuiz3,
    },
    {
      score: 4,
      student: chuckLevine,
      studentWorkProject: algoQuiz4,
    },
    {
      score: 3,
      student: skeeterBronson,
      studentWorkProject: algoQuiz1,
    },
    {
      score: 2,
      student: skeeterBronson,
      studentWorkProject: algoQuiz2,
    },
    {
      score: 2,
      student: skeeterBronson,
      studentWorkProject: algoQuiz3,
    },
    {
      score: 3,
      student: skeeterBronson,
      studentWorkProject: algoQuiz4,
    },
    {
      score: 4,
      student: vickiVallencourt,
      studentWorkProject: algoQuiz1,
    },
    {
      score: 4,
      student: vickiVallencourt,
      studentWorkProject: algoQuiz2,
    },
    {
      score: 3,
      student: vickiVallencourt,
      studentWorkProject: algoQuiz3,
    },
    {
      score: 0,
      student: vickiVallencourt,
      studentWorkProject: algoQuiz4,
    },
    {
      score: 4,
      student: adaLovelace,
      studentWorkProject: algoQuiz1,
    },
    {
      score: 4,
      student: adaLovelace,
      studentWorkProject: algoQuiz2,
    },
    {
      score: 4,
      student: adaLovelace,
      studentWorkProject: algoQuiz3,
    },
    {
      score: 4,
      student: adaLovelace,
      studentWorkProject: algoQuiz4,
    },
    {
      score: 3,
      student: davidChappelle,
      studentWorkProject: algoQuiz1,
    },
    {
      score: 3,
      student: davidChappelle,
      studentWorkProject: algoQuiz2,
    },
    {
      score: 2,
      student: davidChappelle,
      studentWorkProject: algoQuiz3,
    },
    {
      score: 2,
      student: davidChappelle,
      studentWorkProject: algoQuiz4,
    },
    {
      score: 4,
      student: zoeSaldana,
      studentWorkProject: algoQuiz1,
    },
    {
      score: 1,
      student: zoeSaldana,
      studentWorkProject: algoQuiz2,
    },
    {
      score: 4,
      student: zoeSaldana,
      studentWorkProject: algoQuiz3,
    },
    {
      score: 3,
      student: zoeSaldana,
      studentWorkProject: algoQuiz4,
    },
    {
      score: 4,
      student: bettyWhite,
      studentWorkProject: algoQuiz1,
    },
    {
      score: 4,
      student: bettyWhite,
      studentWorkProject: algoQuiz2,
    },
    {
      score: 4,
      student: bettyWhite,
      studentWorkProject: algoQuiz3,
    },
    {
      score: 4,
      student: bettyWhite,
      studentWorkProject: algoQuiz4,
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
