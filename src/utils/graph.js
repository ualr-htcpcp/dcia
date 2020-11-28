const courseLevels = ["1000", "2000", "3000", "4000"];
const sos = ["SO1", "SO2", "SO3", "SO4", "SO5", "SO6"];

function generateBlankScores(levels, sos) {
  return levels.map((level) => {
    return {
      level: level,
      ...Object.fromEntries(sos.map((so) => [so, 0])),
    };
  });
}

export const blankScoresByLevel = generateBlankScores(courseLevels, sos);

export const dataKeysForSOs = [
  { key: "SO1", color: "#f50b07" },
  { key: "SO2", color: "#f55a07" },
  { key: "SO3", color: "#d1c408" },
  { key: "SO4", color: "#1ad92a" },
  { key: "SO5", color: "#0318ff" },
  { key: "SO6", color: "#a31099" },
];
