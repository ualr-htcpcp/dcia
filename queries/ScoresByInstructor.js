// Returns mean overall SO scores for each instructor by specified term

export function ScoresByInstructor(semester) {
  return [
    {
      $match: {
        semester: semester,
      },
    },
    {
      $project: {
        _id: 0,
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
        _id: "$instructor",
        averageScore: {
          $avg: "$score.score",
        },
        so: {
          $addToSet: "$studentOutcome.studentOutcomes",
        },
      },
    },
    {
      $lookup: {
        from: "instructors",
        let: {
          id: "$_id",
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
        path: "$so",
      },
    },
    {
      $lookup: {
        from: "studentoutcomes",
        let: {
          so: "$so",
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
              studentOutcomeNumber: 1,
            },
          },
        ],
        as: "so",
      },
    },
    {
      $unwind: {
        path: "$instructor",
      },
    },
    {
      $unwind: {
        path: "$so",
      },
    },
    {
      $project: {
        _id: 0,
      },
    },
  ];
}
