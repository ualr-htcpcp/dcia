import { connect } from "utils/db";
await connect();


const studentOutcome = new mongoose.Schema({
    studentOutcomeNumber: {
      type: Number,
      required: true
    },
    definition: {
      type: String,
      required: true
    },
    course: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'courseSchema'  
    }]
  }, {timestamps: true})

  export const StudentOutcome = mongoose.model('StudentOutcome', studentOutcomeSchema)