// Returns all students overall scores for all SOs combined by specified course instance

export function StudentSOScoresByCourseInstance(courseInstance) {
  return [
    {
      $match: {
        courseInstance: courseInstance,
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
          student: "$students",
        },
        averageScore: {
          $avg: "$score.score",
        },
      },
    },
    {
      $lookup: {
        from: "students",
        let: {
          student: "$_id.student",
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
      $project: {
        _id: 0,
      },
    },
  ];
}
