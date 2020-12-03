// Returns SO# and mean score for specific instructor and specific term

export function ScoresForInstructorAndSemester(instructor, semester) {
  return [
    {
      $match: {
        instructor: instructor, // instructor ObjectId
        semester: semester, // semester ObjectId
      },
    },
    {
      $project: {
        _id: 0,
        student: 1,
        studentWorkProject: 1,
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
        path: "$so+score.studentOutcome",
      },
    },
    {
      $match: {
        "so+score.studentOutcome": new ObjectId("5fc2e25ba981b28decd9c4a6"), // studentOutcome ObjectId
      },
    },
    {
      $group: {
        _id: "$so+score.studentOutcome",
        averageScore: {
          $avg: "$so+score.score",
        },
      },
    },
    {
      $lookup: {
        from: "studentoutcomes",
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
      $project: {
        _id: 0,
        averageScore: 1,
        "so#": 1,
      },
    },
  ];
}