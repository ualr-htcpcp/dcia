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
      students: 1,
      studentWorkProjects: 1,
      instructor: 1,
    },
  },
  {
    $unwind: {
      path: "$students",
    },
  },
  {
    $unwind: {
      path: "$studentWorkProjects",
    },
  },
  {
    $lookup: {
      from: "assessments",
      let: {
        id: "$students",
        swp: "$studentWorkProjects",
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
            studentOutcomes: 1,
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
      path: "$so+score.studentOutcomes",
    },
  },
  {
    $group: {
      _id: {
        instructor: "$instructor",
        so: "$so+score.studentOutcomes",
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
            number: 1,
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
