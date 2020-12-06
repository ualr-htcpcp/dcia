// Returns a SUM of each SO Score by COURSE INSTANCE

export function ScoreCountsByCourseInstance(courseInstance) {
  return [
    {
      $match: {
        _id: courseInstance,
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
      $project: {
        _id: 0,
        students: 1,
        studentWorkProjects: 1,
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
        path: "$soAndScore.studentOutcomes",
      },
    },
    {
      $lookup: {
        from: "studentoutcomes",
        let: {
          so: "$soAndScore.studentOutcomes",
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$_id", "$$so"],
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
        as: "so",
      },
    },
    {
      $unwind: {
        path: "$so",
      },
    },
    {
      $group: {
        _id: {
          score: "$soAndScore.score",
          studentOutcome: "$so.number",
        },
        count: {
          $sum: 1,
        },
      },
    },
  ];
}
