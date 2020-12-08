import { capitalize } from "./string";

const ALL_SOS = ["SO1", "SO2", "SO3", "SO4", "SO5", "SO6"];

// Takes array of duplicate SO scores and returns array of averages for each SO
function averageSOs(arr) {
  return arr.reduce((newData, current) => {
    // First item, return array with single item
    if (!newData) return [current];

    /* 
      1. Get array of all scores for the matching SO
      2. Get the sum and then average for that SO
      3. Get array of all the OTHER SOs
      4. Combine the new, averaged SO score object with the other SOs
      5. Sort by SO# & return
    */
    const matched = newData.filter((soScore) => {
      return keysMatch(soScore, current);
    });
    const groupSOScores = [...matched, current];
    const sum = groupSOScores.reduce((sum, current) => {
      return sum + Object.values(current)[0];
    }, 0);
    const avg = sum / groupSOScores.length;
    const so = Object.keys(current)[0];
    const newSOAvg = {};
    newSOAvg[so] = round(avg);

    const otherSOs = newData.filter((soScore) => {
      return !keysMatch(soScore, current);
    });
    newData = [...otherSOs, newSOAvg];
    newData.sort(sortSO);
    return newData;
  }, []);
}

function round(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

function keysMatch(objA, objB) {
  return (
    JSON.stringify(Object.keys(objA)) === JSON.stringify(Object.keys(objB))
  );
}

function distinctArray(arr) {
  return [...new Set(arr.map((o) => JSON.stringify(o)))].map((s) =>
    JSON.parse(s)
  );
}

// Helper for dashboard scores by course / scores by instructor
function getScoreNameObject(name, avgScore) {
  return {
    name: name,
    score: round(avgScore),
  };
}

function buildSO(num) {
  return `SO${num}`;
}

function sortSO(a, b) {
  return Object.keys(a)[0][2] - Object.keys(b)[0][2];
}

function sortByLevel(a, b) {
  const sortOrder = ["1000", "2000", "3000", "4000"];
  return sortOrder.indexOf(a.level) - sortOrder.indexOf(b.level);
}

// Helper for dashboard SO Scores by Level
function formatForLevels(obj) {
  const { level } = obj._id;
  const newObj = { level: level, scores: [] };

  const scoreObj = {};
  const score = round(obj.averageScore);
  const so = buildSO(obj["so#"].number);
  scoreObj[so] = score;

  newObj.scores.push(scoreObj);
  return newObj;
}

function formatInstructorForTerm(obj) {
  const { year, term } = obj._id;
  const { first, last } = obj.instructor.name;

  const newObj = {
    year: year,
    term: term,
    name: {
      first: first,
      last: last,
    },
    scores: [],
  };
  const scoreObj = {};
  const so = buildSO(obj.number.number);
  scoreObj[so] = obj.averageScore;
  newObj.scores.push(scoreObj);

  return newObj;
}

function formatForTerm(obj) {
  return {
    term: `${capitalize(obj.term)} ${obj.year}`,
    avgScores: [...obj.scores],
  };
}

function formatForTermAndInstructor(obj) {
  const { year, term } = obj._id;
  const newObj = { term: `${capitalize(term)} ${year}`, scores: [] };
  const scoreObj = {};
  const so = buildSO(obj.number.number);
  scoreObj[so] = round(obj.averageScore);
  newObj.scores.push(scoreObj);

  return newObj;
}

function formatForSOCount(obj) {
  const { score, studentOutcome } = obj._id;
  const scoreObj = { score: score };
  scoreObj[score] = obj.count;

  const newObj = {
    outcome: buildSO(studentOutcome),
    scores: [],
  };
  newObj.scores.push(scoreObj);

  return newObj;
}

function formatForSWP(obj) {
  const { studentWorkProject: swp } = obj._id;
  const sos = obj.studentOutcomeNumber.map((so) => {
    const newSo = buildSO(so);
    const soScore = {};
    soScore[newSo] = round(obj.averageScore[0]);

    return soScore;
  });
  const newObj = {
    swp: swp,
    scores: sos,
  };
  return newObj;
}

/*
 Query is returning separate instructor objects for each SO, with the same average score.
 This massages the data by removing the duplicates and returns data in below format:
 {
   name: "John Smith",
   score: 3.26
 }
*/
export function formatScoresByInstructor(data) {
  return data.reduce((newData, current) => {
    const concatName = `${current.instructor.name.first} ${current.instructor.name.last}`;

    // First item added to array, format item and return array with single item
    if (!newData) {
      const formatted = getScoreNameObject(concatName, current.averageScore);
      return [formatted];
    }
    const found = newData.find((instr) => instr.name === concatName);
    // First time instructor is added, format, push to existing array and return that array
    if (!found) {
      const formatted = getScoreNameObject(concatName, current.averageScore);
      newData.push(formatted);
      return newData;
    }
    // Instructor data already exists, make no changes and return existing array
    return newData;
  }, []);
}

/*
 Query is returning separate course objects for each SO, with the same average score.
 This massages the data by removing the duplicates and returns data in below format:
 {
   name: "Operating Systems",
   score: 3.1
 }
*/
export function formatScoresByCourse(data) {
  return data.reduce((newData, current) => {
    // First item added to array, format item and return array with single item
    if (!newData) {
      const formatted = getScoreNameObject(
        current.course.title,
        current.averageScore
      );
      return [formatted];
    }
    const found = newData.find(
      (course) => course.name === current.course.title
    );

    // First time course is added, format, push to existing array and return that array
    if (!found) {
      const formatted = getScoreNameObject(
        current.course.title,
        current.averageScore
      );
      newData.push(formatted);
      return newData;
    }

    // Course data already exists, make no changes and return existing array
    return newData;
  }, []);
}

/*
 Query is returning separate level objects for each SO.
 This massages the data by merging into one object for each level.
 The SO scores are also zero-indexed to fit the recharts graph data format.
 Example:
 {
   level: "3000",
   SO1: 2.5,
   SO2: 3.2,
   SO3: 4.0
   (etc)
 }
*/
export function formatScoresByLevel(data) {
  return data
    .reduce((newData, current) => {
      const formattedLevel = formatForLevels(current);

      // First item added to array, format item and return array with single item
      if (!newData) return [formattedLevel];

      const found = newData.findIndex(
        (item) => item.level === formattedLevel.level
      );

      // Level data already exists, add SO score to its array and return existing array
      if (found !== -1) {
        const newScores = [...newData[found].scores, ...formattedLevel.scores];
        newScores.sort(sortSO);
        newData[found].scores = newScores;

        newData.sort(sortByLevel);
        return newData;
      }
      // First time level is added, format, push to existing array and return that array
      newData.push(formattedLevel);

      newData.sort(sortByLevel);
      return newData;
    }, [])
    .map((level) => {
      const temp = { level: level.level };

      // Zero index array of scores to meet recharts data format needs
      return Object.assign(temp, ...level.scores);
    });
}

/*
  Query is returning objects with some unnecessary nesting.
  In addition, since this is populating the SO Scores by Term graph and dropdowns on the dashboard,
  we have to return an array of all the instructor names.
  This massages the data by:
  - averaging all SO average scores together
  - providing an array of instructor names to populate dropdowns

  We return one object for each term, with the SO scores zero-indexed for recharts as well:
  {
    term: "2020 Spring",
    SO1: 3.2,
    SO2: 2.5,
    etc ...
  }

  and overall returned data shaped as:
  {
    instructors: [
      "Joe Smith",
      etc ...
    ],
    {
      term: "2020 Spring",
      SO1: 3.2,
      SO2: 2.5,
      etc ...
    },
    {
      etc ...
    }
  }
*/
export function formatAllScoresByTerm(data) {
  // Format into array of clean instructor objects with array of SO scores
  const gatherSOData = data.reduce((newData, current) => {
    const formatted = formatInstructorForTerm(current);
    // First item added to array, format item and return array with single item
    if (!newData) return [formatted];

    const found = newData.findIndex((term) => {
      return (
        term.year === formatted.year &&
        term.term === formatted.term &&
        term.name.first === formatted.name.first &&
        term.name.last === formatted.name.last
      );
    });

    // Term data already exists, add SO score to its array and return existing array
    if (found !== -1) {
      const newScores = [...newData[found].scores, ...formatted.scores];
      newScores.sort(sortSO);

      newData[found].scores = newScores;
      return newData;
    }

    // First time term is added, format, push to existing array and return that array
    newData.push(formatted);
    return newData;
  }, []);

  const instructorNames = distinctArray(
    gatherSOData.map((instr) => instr.name)
  );

  // Strip instructor names, create object for each term and average for each SO in the term
  const formattedToTerms = gatherSOData.reduce((newData, current) => {
    const formatted = formatForTerm(current);

    // First item
    if (!newData) return [formatted];

    const found = newData.findIndex((term) => term.term === formatted.term);

    // Term exists in array
    if (found !== -1) {
      const allScores = [...newData[found].avgScores, ...formatted.avgScores];
      newData[found].avgScores = allScores;
      return newData;
    }

    // First time term has been added, format, push to existing array and return that array
    newData.push(formatted);
    return newData;
  }, []);

  const averageSOsForTerms = formattedToTerms
    .map((term) => {
      const averaged = averageSOs(term.avgScores);
      return {
        ...term,
        avgScores: averaged,
      };
    })
    .map((term) => {
      // Zero index array of scores to meet recharts data format needs
      const temp = { term: term.term };
      return Object.assign(temp, ...term.avgScores);
    });

  return {
    instructors: instructorNames,
    graphData: averageSOsForTerms,
  };
}

// Same as above, just scoped to specific instructor
export function formatInstructorScoresByTerm(data) {
  return data
    .reduce((newData, current) => {
      const formatted = formatForTermAndInstructor(current);

      // First item added to array, format item and return array with single item
      if (!newData) return [formatted];

      const found = newData.findIndex((term) => {
        return term.year === formatted.year && term.term === formatted.term;
      });

      // Term exists in array, add current SO score to term's array and return it
      if (found !== -1) {
        const newScores = [...newData[found].scores, ...formatted.scores];
        newScores.sort(sortSO);

        newData[found].scores = newScores;
        return newData;
      }

      // Term does not exist in array, push current to array and return it
      newData.push(formatted);
      return newData;
    }, [])
    .map((term) => {
      // Zero index array of scores to meet recharts data format needs
      const temp = { term: term.term };
      return Object.assign(temp, ...term.scores);
    });
}

/*
  Query is returning objects with unnecessary nesting.
  This massages the data into the format below for re-charts
  {
    outcome: "SO1",
    scores: [
      {score: 0, 0: 1},
      {score: 1, 1: 10}
    ]
  }
*/
export function formatSOCounts(data) {
  return data.reduce((newData, current) => {
    const formatted = formatForSOCount(current);

    if (!newData) return [formatted];

    const found = newData.findIndex((so) => so.outcome === formatted.outcome);

    if (found !== -1) {
      const newScores = [...newData[found].scores, ...formatted.scores];
      newScores.sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0]);
      newData[found].scores = newScores;
      return newData;
    }

    newData.push(formatted);
    return newData;
  }, []);
}

/*
  Minor massaging of query data.
  Output format:
  {
    swp: "Programming I Assignment I",
    scores: [
      {
        SO1: 3
      },
      {
        SO3: 3.22
      }
    ]
  }
*/
export function formatSWPScores(data) {
  return data.map((swp) => {
    return formatForSWP(swp);
  });
}

// Minor massaging of query data
export function formatScoresByStudent(data) {
  return data.map((student) => {
    return {
      name: `${student.student.name.first} ${student.student.name.last}`,
      score: student.averageScore,
    };
  });
}
