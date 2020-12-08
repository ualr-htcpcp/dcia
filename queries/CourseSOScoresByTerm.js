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
              number: 1,
            },
          },
        ],
        as: "so#",
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
          $avg: "$soAndScore.score",
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
