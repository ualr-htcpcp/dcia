// Returns mean overall SO scores for each instructor by specified term

export function ScoresByInstructor(semester) {
  return [
    {
      $match: {
        semester: semester, // semester ObjectId
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
        _id: "$instructor",
        averageScore: {
          $avg: "$so+score.score",
        },
        so: {
          $addToSet: "$so+score.studentOutcome",
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
        averageScore: 1,
        "instructor.name": 1,
        "so.studentOutcomeNumber": 1,
      },
    },
  ];
}
