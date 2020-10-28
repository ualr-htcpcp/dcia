import { connect } from "utils/db";
await connect();


const studentWorkProject = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    CourseInstanceSchema: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'CourseInstanceSchema'
    },
    studentOutcomeSchema: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'StudentOutcomeSchema'
    }]
  }, {timestamps: true})

  export const StudentWorkProject = mongoose.model('StudentWorkProject', studentWorkProjectSchema)