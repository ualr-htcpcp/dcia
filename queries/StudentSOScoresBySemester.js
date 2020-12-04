// Returns all students overall scores for all SOs combined by specified semester

export function StudentSOScoresBySemester(semester) {
  return [
    {
      $match: {
        semester: semester,
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
      $group: {
        _id: {
          student: "$student",
        },
        averageScore: {
          $avg: "$soAndScore.score",
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
