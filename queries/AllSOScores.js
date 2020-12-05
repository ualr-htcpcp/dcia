// Returns All SO Scores,All Instructor Names, All Semester Year and Term  ***Dashboard***

export const AllSOScores = [
  {
    $unwind: {
      path: "$student",
    },
  },
  {
    $unwind: {
      path: "$studentWorkProject",
    },
  },
  {
    $lookup: {
      from: "assessments",
      let: {
        id: "$student",
        swp: "$studentWorkProject",
      },
      pipeline: [
        {
          $match: {
            $expr: {
              $and: [
                {
                  $eq: ["$student", "$$id"],
                },
                {
                  $eq: ["$studentWorkProject", "$$swp"],
                },
              ],
            },
          },
        },
        {
          $project: {
            _id: 0,
            score: 1,
            studentOutcome: 1,
          },
        },
      ],
      as: "soAndScore",
    },
  },
  {
    $unwind: {
      path: "$soAndScore",
    },
  },
  {
    $unwind: {
      path: "$soAndScore.studentOutcome",
    },
  },
  {
    $lookup: {
      from: "studentoutcomes",
      let: {
        id: "$soAndScore.studentOutcome",
      },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$_id", "$$id"],
            },
          },
        },
        {
          $project: {
            _id: 0,
            studentOutcomeNumber: 1,
          },
        },
      ],
      as: "so#",
    },
  },
  {
    $lookup: {
      from: "semesters",
      let: {
        semester: "$semester",
      },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$_id", "$$semester"],
            },
          },
        },
        {
          $project: {
            _id: 0,
            year: 1,
            term: 1,
          },
        },
      ],
      as: "semesters",
    },
  },
  {
    $unwind: {
      path: "$semesters",
    },
  },
  {
    $unwind: {
      path: "$so#",
    },
  },
  {
    $group: {
      _id: {
        studentOutcome: "$so#.studentOutcomeNumber",
        year: "$semesters.year",
        term: "$semesters.term",
      },
      averageScore: {
        $avg: "$soAndScore.score",
      },
    },
  },
];
