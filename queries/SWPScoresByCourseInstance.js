// Returns StudentWorkProject Name, StudentOutCome Number, and Average Score by CourseInstance

export function SWPScoresByCourseInstance(courseInstance) {
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
          studentWorkProject: "$swp.name",
          number: "$so.number",
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
          $addToSet: "$_id.number",
        },
        averageScore: {
          $addToSet: "$averageScore",
        },
      },
    },
  ];
}
