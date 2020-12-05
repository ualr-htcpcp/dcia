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
import User from "models/User";
import nextConnect from "next-connect";

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

// SO scores for all terms
// If instructor == "ALL", for all instructors. Otherwise, for specified instructor
async function getScoresByTerm(instructorScope) {
  const fakeResults = [
    {
      term: "2020 Fall",
      SO1: 2,
      SO5: 2,
      SO6: 4,
      SO2: 3,
      SO3: 2,
      SO4: 1,
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
  ];

  //TODO: integrate queries
  if (instructorScope === "ALL") return fakeResults;
  else {
    // Lookup by instructor
  }
}

function noValidFilters(filter) {
  const validFilters = ["instructor", "course", "level", "term"];
  return !validFilters.includes(filter);
}

handler.get(async (req, res) => {
  const { filter } = req.query;

  try {
    if (noValidFilters(filter)) throw new Error(`Invalid filter: ${filter}`);

    if (filter === "term") {
      const { instructor } = req.query;
      if (!instructor) throw new Error("No instructors param provided");

      const results = await getScoresByTerm(instructor);
      res.json(results);
    } else {
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
    }
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
});
export default handler;
