// Returns mean SO score by course level for specified term

export function ScoresByLevel(semester) {
  return [
    {
      $match: {
        semester: semester, // semester ObjectId
      },
    },
    {
      $lookup: {
        from: "courses",
        let: {
          courseId: "$course",
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$_id", "$$courseId"],
              },
            },
          },
          {
            $project: {
              _id: 0,
              courseNumber: 1,
            },
          },
        ],
        as: "level",
      },
    },
    {
      $unwind: {
        path: "$level",
      },
    },
    {
      $project: {
        range: {
          $concat: [
            {
              $cond: [
                {
                  $and: [
                    {
                      $gte: ["$level.courseNumber", 1000],
                    },
                    {
                      $lt: ["$level.courseNumber", 2000],
                    },
                  ],
                },
                "1000",
                "",
              ],
            },
            {
              $cond: [
                {
                  $and: [
                    {
                      $gte: ["$level.courseNumber", 2000],
                    },
                    {
                      $lt: ["$level.courseNumber", 3000],
                    },
                  ],
                },
                "2000",
                "",
              ],
            },
            {
              $cond: [
                {
                  $and: [
                    {
                      $gte: ["$level.courseNumber", 3000],
                    },
                    {
                      $lt: ["$level.courseNumber", 4000],
                    },
                  ],
                },
                "3000",
                "",
              ],
            },
            {
              $cond: [
                {
                  $and: [
                    {
                      $gte: ["$level.courseNumber", 4000],
                    },
                    {
                      $lt: ["$level.courseNumber", 5000],
                    },
                  ],
                },
                "4000",
                "",
              ],
            },
          ],
        },
        course: 1,
        student: 1,
        studentWorkProject: 1,
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
      $group: {
        _id: {
          level: "$range",
          so: "$soAndScore.studentOutcome",
        },
        averageScore: {
          $avg: "$soAndScore.score",
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
      $project: {
        "_id.level": 1,
        averageScore: 1,
        "so#": 1,
      },
    },
  ];
}
