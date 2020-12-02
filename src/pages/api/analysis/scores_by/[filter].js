import {
  springCourseData,
  summerCourseData,
  fallCourseData,
  springData,
  fallData,
  summerData,
  springInstructorData,
  summerInstructorData,
  fallInstructorData,
} from "fakeDashboardData";
import middleware from "middleware";
import Semester from "models/Semester";
import nextConnect from "next-connect";
import { forbiddenUnlessAdmin } from "utils/auth";

const handler = nextConnect();
handler.use(middleware);

// Return mean overall SO scores for each instructor by specified term & year
// Specify amount: dashboard only needs 5
async function getScoresByInstructor(term, year, amount) {
  const semester = term.toLowerCase();
  if (year === "2020") {
    switch (semester) {
      case "spring":
        return springInstructorData;
      case "summer":
        return summerInstructorData;
      case "fall":
        return fallInstructorData;
    }
  }
}

// Return mean overall SO scores for each course by specified term & year
// Specify amount: dashboard only needs 5
async function getScoresByCourse(term, year, amount) {
  const semester = term.toLowerCase();
  if (year === "2020") {
    switch (semester) {
      case "spring":
        return springCourseData;
      case "summer":
        return summerCourseData;
      case "fall":
        return fallCourseData;
    }
  }
}

// Return mean overall SO scores for each course level by specified term & year
async function getScoresByLevel(term, year) {
  //TODO: actual queries here
  if (year === "2020") {
    const semester = term.toLowerCase();

    switch (semester) {
      case "spring":
        return springData;
      case "summer":
        return summerData;
      case "fall":
        return fallData;
      default:
        throw new Error(`Invalid semester: ${term}`);
    }
  } else {
    throw new Error(`Invalid query: ${term} ${year}`);
  }
}

// Two possibilities:
//   1. Show all SO scores, for current term (maybe year?), for all instructors
//   2. Show specific SO score (ex. SO1) for specified term (ex. Summer 2020), for specified instructor (ex. Joe Smith)
// /api/scores_by/term?term=2020&so=ALL&instructor=ALL -- return all data for 2020
// /api/scores_by/term?term=2020Fall&so=SO1&instructor=JoeSmith -- return Joe Smith's SO1 score from 2020 Fall
async function getScoresByTerm(term, year, so, instructor) {
  /*
    Data format:
    [
      selectOptions: {
        sos: [
          so1,
          so2,
          so3
        ],
        terms: [
          2020 all,
          2020 spring,
          ...
        ],
        instructors: [
          joe bob,
          ...
        ]
      }
      graphData: [
        {
          so1: 1,
          so2:
        }
      ]
    ]
  */
  const fakeResults = {
    selectOptions: {
      sos: [
        { name: "SO1", value: "SO1" },
        { name: "SO2", value: "SO2" },
        { name: "SO3", value: "SO3" },
        { name: "SO4", value: "SO4" },
        { name: "SO5", value: "SO5" },
        { name: "SO6", value: "SO6" },
      ],
      terms: [
        { name: "2020 Spring", value: { year: "2020", term: "spring" } },
        { name: "2020 Fall", value: { year: "2020", term: "fall" } },
      ],
      instructors: [
        { name: "Joe Bob", value: { firstName: "Joe", lastName: "Bob" } },
        {
          name: "Frank Scott",
          value: { firstName: "Frank", lastName: "Scott" },
        },
      ],
    },
    graphData: [
      {
        term: "2020 Fall",
        SO1: 2,
        SO2: 3,
        SO3: 2,
        SO4: 1,
        SO5: 2,
        SO6: 4,
      },
      {
        term: "2020 Summer",
        SO1: 3,
        SO2: 1,
        SO3: 2,
        SO4: 3,
        SO5: 4,
        SO6: 4,
      },
      {
        term: "2020 Fall",
        SO1: 1,
        SO2: 2,
        SO3: 3,
        SO4: 2,
        SO5: 1,
        SO6: 3,
      },
    ],
  };
  return fakeResults;
}

function noValidFilters(filter) {
  const validFilters = ["instructor", "course", "level", "term"];
  return !validFilters.includes(filter);
}

handler.get(async (req, res) => {
  const { filter } = req.query;

  try {
    if (noValidFilters(filter)) throw new Error(`Invalid filter: ${filter}`);

    const { term, year, amount } = req.query;

    if (!term) throw new Error("No term param provided");
    if (!year) throw new Error("No year param provided");

    if (filter === "instructor") {
      const results = await getScoresByInstructor(term, year, amount);
      res.json(results);
    }

    if (filter === "course") {
      const results = await getScoresByCourse(term, year, amount);
      res.json(results);
    }

    if (filter === "level") {
      const results = await getScoresByLevel(term, year);
      res.json(results);
    }

    if (filter === "term") {
      const { so, instructor } = req.query;
      if (!so) throw new Error("No SOs param provided");
      if (!instructor) throw new Error("No instructors param provided");

      const results = await getScoresByTerm(term, year, so, instructor);
      res.json(results);
    }
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });

    console.log(err);
  }
});
export default handler;
