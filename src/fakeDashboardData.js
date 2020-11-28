const sos = ["SO1", "SO2", "SO3", "SO4", "SO5", "SO6"];
const courseLevels = [1000, 2000, 3000, 4000];
const maxScore = 4;
const terms = [
  { year: 2020, term: "Spring" },
  { year: 2020, term: "Summer" },
  { year: 2020, term: "Fall" },
];

const names = [
  "Fiona Rutherford",
  "Jacky Nienow",
  "Prince Beier",
  "Hollie Trantow",
  "Maddison Keeling",
  "Osgood Fellgate",
  "Donald Tomaselli",
  "Leif Strudwick",
  "Lani Stine",
  "Valina Crawcour",
  "Le Huquet",
  "Rebeka Bezley",
  "Mario Lummus",
  "Hunter Jahaeas",
  "Marlena Cote",
  "Winn Goundrill",
];

const courses = [
  "Programming I",
  "Programming II",
  "Data Structures",
  "Algorithms",
  "Language Structure",
  "Computer Organization I",
  "Applied Cryptography",
  "Internet Technologies",
  "Web Stack Technologies",
  "Capstone Project",
  "Software Engineering",
  "Database Concepts I",
  "Analysis of Algorithms",
  "Monte Carlo Simulation",
];

function getFromArray(arr) {
  const el = Math.floor(Math.random() * arr.length);
  return arr[el];
}

function randomInteger(max) {
  return Math.floor(Math.random() * Math.floor(max + 1));
}

function randomFloat(max) {
  const float = Math.random() * (max - 1.0) + 1;
  return float.toPrecision(2);
}

function generateSoScore(sos, maxScore = 4) {
  return Object.fromEntries(sos.map((so) => [so, randomInteger(maxScore)]));
}

function generateScoresByLevel(courseLevels, sos, maxScore = 4) {
  return courseLevels.map((courseLevel) => {
    return {
      level: courseLevel,
      ...generateSoScore(sos, maxScore),
    };
  });
}

function generateScoresAtRandom(arr, amount) {
  return Array(amount)
    .fill()
    .map((item) => ({
      name: getFromArray(arr),
      score: randomFloat(4.0),
    }));
}

function exportTerms(terms) {
  return terms.map((term, i) => {
    let result = {
      ...term,
      isCurrent: false,
    };

    if (i === 0) {
      result.isCurrent = true;
    }

    return result;
  });
}

export const termData = exportTerms(terms);

export const springData = generateScoresByLevel(courseLevels, sos);
export const summerData = generateScoresByLevel(courseLevels, sos);
export const fallData = generateScoresByLevel(courseLevels, sos);

export const blankLevelsData = generateScoresByLevel(courseLevels, sos, 0);

export const springInstructorData = generateScoresAtRandom(names, 5);
export const summerInstructorData = generateScoresAtRandom(names, 5);
export const fallInstructorData = generateScoresAtRandom(names, 5);

export const springCourseData = generateScoresAtRandom(courses, 5);
export const summerCourseData = generateScoresAtRandom(courses, 5);
export const fallCourseData = generateScoresAtRandom(courses, 5);
