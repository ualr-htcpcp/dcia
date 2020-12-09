// Returns All average SO Scores by Course for every Semester

export function courseSOScoresByTerm(course) {
  return [
    {
      $match: {
        course: course,
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
        path: "$score",
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
      $lookup: {
        from: "studentoutcomes",
        let: {
          id: "$studentOutcome.studentOutcomes",
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
              number: 1,
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
      $lookup: {
        from: "semesters",
        let: {
          semester: "$semester",
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$_id", "$$semester"],
              },
            },
          },
          {
            $project: {
              _id: 0,
              year: 1,
              term: 1,
            },
          },
        ],
        as: "semesters",
      },
    },
    {
      $unwind: {
        path: "$semesters",
      },
    },
    {
      $unwind: {
        path: "$so#",
      },
    },
    {
      $lookup: {
        from: "instructors",
        let: {
          instructor: "$instructor",
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$_id", "$$instructor"],
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
      $group: {
        _id: {
          year: "$semesters.year",
          term: "$semesters.term",
        },
        averageScore: {
          $avg: "$score.score",
        },
        number: {
          $addToSet: "$so#",
        },
        instructor: {
          $addToSet: "$instructor",
        },
      },
    },
    {
      $unwind: {
        path: "$number",
      },
    },
    {
      $unwind: {
        path: "$instructor",
      },
    },
    {
      $unwind: {
        path: "$instructor",
      },
    },
    {
      $project: {
        "_id.course": 0,
      },
    },
  ];
}
