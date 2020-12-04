// Returns mean overall SO scores for each course by specified term

export function ScoresByCourse(semester) {
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
        course: 1,
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
        as: "SO and Score",
      },
    },
    {
      $unwind: {
        path: "$SO and Score",
      },
    },
    {
      $unwind: {
        path: "$SO and Score.studentOutcome",
      },
    },
    {
      $group: {
        _id: "$course",
        averageScore: {
          $avg: "$SO and Score.score",
        },
        so: {
          $addToSet: "$SO and Score.studentOutcome",
        },
      },
    },
    {
      $lookup: {
        from: "courses",
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
              title: 1,
            },
          },
        ],
        as: "course",
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
        path: "$course",
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
        "course.title": 1,
        "so.studentOutcomeNumber": 1,
      },
    },
  ];
}
