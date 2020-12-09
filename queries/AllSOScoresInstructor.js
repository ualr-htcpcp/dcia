// Returns SO Scores for all Semesters for One Instructor
// ****Dashboard****

export function AllSOScoresInstructor(instructor) {
  return [
    {
      $match: {
        instructor: instructor,
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
      $group: {
        _id: {
          course: "$course",
          year: "$semesters.year",
          term: "$semesters.term",
        },
        averageScore: {
          $avg: "$score.score",
        },
        number: {
          $addToSet: "$so#",
        },
      },
    },
    {
      $unwind: {
        path: "$number",
      },
    },
    {
      $project: {
        "_id.course": 0,
      },
    },
  ];
}
