// Returns StudentWorkProject Name, StudentOutCome Number, and Average Score by CourseInstance

export function SWPSCoresByCourseInstance(courseInstance) {
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
      $lookup: {
        from: "studentworkprojects",
        let: {
          swp: "$studentWorkProject",
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
              name: 1,
            },
          },
        ],
        as: "swp",
      },
    },
    {
      $unwind: {
        path: "$swp",
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
        from: "studentoutcomes",
        let: {
          so: "$soAndScore.studentOutcome",
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
        path: "$so",
      },
    },
    {
      $group: {
        _id: {
          studentWorkProject: "$swp.name",
          studentOutcomeNumber: "$so.studentOutcomeNumber",
        },
        averageScore: {
          $avg: "$soAndScore.score",
        },
      },
    },
    {
      $group: {
        _id: {
          studentWorkProject: "$_id.studentWorkProject",
        },
        studentOutcomeNumber: {
          $addToSet: "$_id.studentOutcomeNumber",
        },
        averageScore: {
          $addToSet: "$averageScore",
        },
      },
    },
  ];
}
