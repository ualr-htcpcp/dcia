// Returns Overall SO Score For Every Student by CourseInstance

export function ScoresByCourseInstance(courseInstance) {
  return [
    {
      $match: {
        _id: courseInstance,
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
      $project: {
        _id: 0,
        student: 1,
        studentWorkProject: 1,
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
        from: "students",
        let: {
          student: "$student",
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$_id", "$$student"],
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
        as: "student",
      },
    },
    {
      $unwind: {
        path: "$student",
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
      $unwind: {
        path: "$so#",
      },
    },
    {
      $group: {
        _id: "$student.name",
        averageScore: {
          $avg: "$soAndScore.score",
        },
      },
    },
  ];
}
