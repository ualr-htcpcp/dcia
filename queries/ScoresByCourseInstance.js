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
        from: "students",
        let: {
          student: "$students",
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
          id: "$soAndScore.studentOutcomes",
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
