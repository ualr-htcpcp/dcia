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
        students: 1,
        studentWorkProjects: 1,
        instructor: 1,
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
              studentOutcomes: 1,
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
        path: "$so+score.studentOutcomes",
      },
    },
    {
      $group: {
        _id: "$instructor",
        averageScore: {
          $avg: "$so+score.score",
        },
        so: {
          $addToSet: "$so+score.studentOutcomes",
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
              number: 1,
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
        "so.number": 1,
      },
    },
  ];
}
