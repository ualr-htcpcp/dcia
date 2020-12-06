// Returns mean overall SO scores for each course by specified term

export function ScoresByCourse(semester) {
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
        course: 1,
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
        _id: "$course",
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
              number: 1,
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
        "so.number": 1,
      },
    },
  ];
}
