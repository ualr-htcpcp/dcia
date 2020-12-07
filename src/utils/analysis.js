// for array of objects in format: {SO#: score}
function averageArr(arr) {
  return (
    arr.reduce((sum, curr) => {
      return sum + Object.values(curr)[0];
    }, 0) / arr.length
  );
}

function getScoreNameObject(name, avgScore) {
  return {
    name: name,
    score: avgScore,
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

function formatForLevels(obj) {
  const { level } = obj._id;
  const newObj = { level: level, scores: [] };

  const scoreObj = {};
  const score = obj.averageScore;
  const so = buildSO(obj["so#"].number);
  scoreObj[so] = score;

  newObj.scores.push(scoreObj);
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
      if (!newData) {
        return [formattedLevel];
      }
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
      // Zero index array of scores to meet recharts data format needs
      const temp = { level: level.level };
      return Object.assign(temp, ...level.scores);
    });
}
