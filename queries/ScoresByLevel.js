// Returns mean SO score by course level for specified term

export function ScoresByLevel(semester) {
  return [
    {
      $match: {
        semester: semester,
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
        students: 1,
        studentWorkProjects: 1,
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
            },
          },
        ],
        as: "score",
      },
    },
    {
      $unwind: {
        path: "$score",
      },
    },
    {
      $lookup: {
        from: "studentworkprojects",
        let: {
          swp: "$studentWorkProjects",
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$_id", "$$swp"],
              },
            },
          },
          {
            $project: {
              _id: 0,
              studentOutcomes: 1,
            },
          },
        ],
        as: "studentOutcome",
      },
    },
    {
      $unwind: {
        path: "$studentOutcome",
      },
    },
    {
      $unwind: {
        path: "$studentOutcome.studentOutcomes",
      },
    },
    {
      $group: {
        _id: {
          level: "$range",
          so: "$studentOutcome.studentOutcomes",
        },
        averageScore: {
          $avg: "$score.score",
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
      $project: {
        "_id.level": 1,
        averageScore: 1,
        "so#": 1,
      },
    },
  ];
}
