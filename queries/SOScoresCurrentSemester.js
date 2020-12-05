// Every instructor, current term, average score for each SO

export const SOScoresCurrentSemester = [
  {
    $lookup: {
      from: "semesters",
      localField: "semester",
      foreignField: "_id",
      as: "check",
    },
  },
  {
    $unwind: {
      path: "$check",
    },
  },
  {
    $match: {
      "check.isCurrent": true,
    },
  },
  {
    $project: {
      _id: 0,
      student: 1,
      studentWorkProject: 1,
      instructor: 1,
    },
  },
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
      as: "so+score",
    },
  },
  {
    $unwind: {
      path: "$so+score",
    },
  },
  {
    $unwind: {
      path: "$so+score.studentOutcome",
    },
  },
  {
    $group: {
      _id: {
        instructor: "$instructor",
        so: "$so+score.studentOutcome",
      },
      averageScore: {
        $avg: "$so+score.score",
      },
    },
  },
  {
    $lookup: {
      from: "studentoutcomes",
      let: {
        id: "$_id.so",
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
    $unwind: {
      path: "$so#",
    },
  },
  {
    $lookup: {
      from: "instructors",
      let: {
        id: "$_id.instructor",
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
            name: 1,
          },
        },
      ],
      as: "instructor",
    },
  },
  {
    $unwind: {
      path: "$instructor",
    },
  },
  {
    $project: {
      _id: 0,
    },
  },
];
