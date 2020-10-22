import { connect } from "utils/db";
await connect();


const assessment = new mongoose.Schema({
    score: {
      type: Number,
      required: true,
      enum: [0, 1, 2, 3, 4]
    },
    studentSchema: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'student'
    },
    studentWorkProjectSchema: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'studentWorkProject'
    },
    studentOutcomeSchema: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'studentOutcome'
    }]
  }, {timestamps: true})

export const Assessment = mongoose.model('Assessment', assessmentSchema)